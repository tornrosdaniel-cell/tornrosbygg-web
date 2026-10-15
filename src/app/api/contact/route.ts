import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createHash, randomUUID } from "node:crypto";
import { isIP } from "node:net";

export const runtime = "nodejs";

const recipient = "hej@tornrosbygg.se";
const fromAddress =
  process.env.RESEND_FROM_EMAIL ?? "Törnros Bygg <hej@tornrosbygg.se>";

const maxLengths = {
  name: 120,
  email: 254,
  phone: 120,
  projectType: 120,
  location: 120,
  message: 2000,
};

const allowedProjectTypes = new Set([
  "",
  "Renovering",
  "Badrumsrenovering",
  "Tillbyggnad",
  "Nybyggnation",
  "Attefallshus",
  "Markarbete eller dränering",
  "Annat byggprojekt",
]);

const maxRequestBytes = 64 * 1024;
const rateLimitWindowMs = 60 * 60 * 1000;
const rateLimitMax = 5;

// One atomic sliding window, timed by Redis rather than individual app instances.
// A versioned namespace avoids collisions with the previous string counters.
const rateLimitScript = `
local key = KEYS[1]
local window = tonumber(ARGV[1])
local limit = tonumber(ARGV[2])
local time = redis.call('TIME')
local now = tonumber(time[1]) * 1000 + math.floor(tonumber(time[2]) / 1000)
redis.call('ZREMRANGEBYSCORE', key, '-inf', now - window)
local count = redis.call('ZCARD', key)
if count > 0 and redis.call('PTTL', key) < 0 then
  redis.call('PEXPIRE', key, window)
end
if count >= limit then
  return 0
end
redis.call('ZADD', key, now, ARGV[3])
redis.call('PEXPIRE', key, window)
return 1
`;

function temporarilyUnavailable() {
  return NextResponse.json(
    { message: "Meddelandet kunde inte levereras just nu. Försök igen eller kontakta oss via e-post." },
    { status: 503 },
  );
}

export async function POST(request: NextRequest) {
  let preparedRequest;
  try {
    preparedRequest = await prepareFormRequest(request);
  } catch {
    return NextResponse.json({ message: "Formuläret kunde inte läsas." }, { status: 400 });
  }
  if (preparedRequest instanceof NextResponse) {
    return preparedRequest;
  }

  let formData: FormData;
  try {
    formData = await preparedRequest.formData();
  } catch {
    return NextResponse.json(
      { message: "Formuläret kunde inte läsas. Kontrollera uppgifterna och försök igen." },
      { status: 400 },
    );
  }

  // Reject duplicate fields and uploaded files rather than silently choosing a value.
  const allowedFields = new Set([...Object.keys(maxLengths), "company"]);
  for (const [key, value] of formData) {
    if (!allowedFields.has(key) || typeof value !== "string" || formData.getAll(key).length !== 1) {
      return NextResponse.json({ message: "Formuläret kunde inte skickas." }, { status: 400 });
    }
  }

  const company = getValue(formData, "company");

  if (company) {
    return NextResponse.json(
      { message: "Formuläret kunde inte skickas." },
      { status: 400 },
    );
  }

  const ip = getClientIp(request);
  if (!ip) {
    return temporarilyUnavailable();
  }
  const rateLimit = await checkRateLimit(ip);
  if (rateLimit === "unavailable") {
    return temporarilyUnavailable();
  }
  if (rateLimit === "limited") {
    return NextResponse.json(
      {
        message:
          "För många försök har gjorts från samma anslutning. Vänta en stund och försök igen.",
      },
      { status: 429 },
    );
  }

  const fields = {
    name: getValue(formData, "name"),
    email: getValue(formData, "email"),
    phone: getValue(formData, "phone"),
    projectType: getValue(formData, "projectType"),
    location: getValue(formData, "location"),
    message: getValue(formData, "message"),
  };

  const errors = validate(fields);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      {
        message: "Kontrollera de markerade fälten och försök igen.",
        errors,
      },
      { status: 400 },
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return temporarilyUnavailable();
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const result = await resend.emails.send({
      from: fromAddress,
      to: recipient,
      replyTo: fields.email,
      subject: `Ny projektförfrågan från ${sanitizeHeaderValue(fields.name)}`,
      text: buildEmailText(fields),
    });

    if (result.error) {
      return NextResponse.json(
        {
          message:
            "Meddelandet kunde inte levereras just nu. Försök igen eller kontakta oss via e-post.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      message:
        "Tack, ditt meddelande är skickat. Vi återkommer så snart vi kan.",
    });
  } catch {
    return NextResponse.json(
      {
        message:
          "Meddelandet kunde inte levereras just nu. Försök igen eller kontakta oss via e-post.",
      },
      { status: 502 },
    );
  }
}

async function prepareFormRequest(request: NextRequest) {
  const contentType = (request.headers.get("content-type") ?? "").split(";")[0].trim().toLowerCase();
  if (
    contentType !== "multipart/form-data" &&
    contentType !== "application/x-www-form-urlencoded"
  ) {
    return NextResponse.json(
      { message: "Formuläret kunde inte skickas." },
      { status: 415 },
    );
  }

  const contentLength = request.headers.get("content-length");
  if (contentLength !== null) {
    const parsedLength = Number(contentLength);
    if (!/^\d+$/.test(contentLength) || !Number.isSafeInteger(parsedLength)) {
      return NextResponse.json(
        { message: "Formuläret kunde inte skickas." },
        { status: 400 },
      );
    }

    if (parsedLength > maxRequestBytes) {
      return NextResponse.json(
        { message: "Formuläret är för stort. Korta ned texten och försök igen." },
        { status: 413 },
      );
    }

  }

  if (!request.body) {
    return request;
  }

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }

    size += value.byteLength;
    if (size > maxRequestBytes) {
      await reader.cancel();
      return NextResponse.json(
        { message: "Formuläret är för stort. Korta ned texten och försök igen." },
        { status: 413 },
      );
    }

    chunks.push(value);
  }

  return new Request(request.url, {
    method: request.method,
    headers: request.headers,
    body: concatChunks(chunks, size),
  });
}

function getValue(formData: FormData, key: string) {
  const value = formData.get(key);
  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

function validate(fields: {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  message: string;
}) {
  const errors: Record<string, string> = {};

  for (const key of Object.keys(maxLengths) as (keyof typeof maxLengths)[]) {
    if (fields[key].length > maxLengths[key]) {
      errors[key] = `Använd högst ${maxLengths[key]} tecken.`;
    }
    // Line breaks are allowed in the message, never in single-line/header fields.
    if (Array.from(fields[key]).some((character) => {
      const code = character.charCodeAt(0);
      return (code < 32 || code === 127) &&
        !(key === "message" && [9, 10, 13].includes(code));
    })) {
      errors[key] = "Ta bort ogiltiga tecken.";
    }
  }

  if (!fields.name) {
    errors.name = "Skriv ditt namn.";
  }

  if (!fields.email) {
    errors.email = "Skriv din e-postadress.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Skriv en giltig e-postadress.";
  }

  if (!allowedProjectTypes.has(fields.projectType)) {
    errors.projectType = "Välj en giltig projekttyp.";
  }

  if (!fields.message) {
    errors.message = "Beskriv kort vad projektet gäller.";
  } else if (fields.message.length < 20) {
    errors.message = "Skriv minst 20 tecken om projektet.";
  }

  return errors;
}

function getClientIp(request: NextRequest) {
  // Only trust Vercel's overwritten header on the Vercel runtime. Never fall
  // back to x-forwarded-for, x-real-ip or a client-provided list of addresses.
  if (process.env.VERCEL !== "1") {
    return process.env.NODE_ENV === "production" ? null : "local-development";
  }

  const ip = request.headers.get("x-vercel-forwarded-for")?.trim() ?? "";
  const version = isIP(ip);
  if (!version || ip.includes("%")) {
    return null;
  }
  return version === 6 ? new URL(`http://[${ip}]/`).hostname : ip;
}

async function checkRateLimit(ip: string): Promise<"allowed" | "limited" | "unavailable"> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return "unavailable";
  }

  try {
    const endpoint = new URL(url);
    if (endpoint.protocol !== "https:" || endpoint.username || endpoint.password || endpoint.search || endpoint.hash || endpoint.pathname !== "/") {
      return "unavailable";
    }
    const digest = createHash("sha256").update(ip).digest("hex");
    const scope = process.env.VERCEL_ENV === "production" ? "production" : "preview";
    const redisKey = `contact-form:v2:${scope}:${digest}`;
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify(["EVAL", rateLimitScript, 1, redisKey, rateLimitWindowMs, rateLimitMax, randomUUID()]),
      cache: "no-store",
      redirect: "error",
      signal: AbortSignal.timeout(3000),
    });

    if (!response.ok) {
      return "unavailable";
    }

    const data: unknown = await response.json();
    if (!data || typeof data !== "object" || "error" in data || !("result" in data)) {
      return "unavailable";
    }
    if (data.result === 1) return "allowed";
    if (data.result === 0) return "limited";
    return "unavailable";
  } catch {
    return "unavailable";
  }
}

function concatChunks(chunks: Uint8Array[], size: number) {
  const body = new Uint8Array(size);
  let offset = 0;

  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }

  return body;
}

function sanitizeHeaderValue(value: string) {
  return value.replace(/[\r\n]+/g, " ").slice(0, maxLengths.name);
}

function buildEmailText(fields: {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  message: string;
}) {
  return [
    "Ny förfrågan via tornrosbygg.se",
    "",
    `Namn: ${fields.name}`,
    `E-post: ${fields.email}`,
    `Telefon: ${fields.phone || "-"}`,
    `Projekttyp: ${fields.projectType || "-"}`,
    `Ort/stadsdel: ${fields.location || "-"}`,
    "",
    "Projektbeskrivning:",
    fields.message,
  ].join("\n");
}
