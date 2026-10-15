import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { setTimeout as delay } from "node:timers/promises";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";
import { LuaFactory } from "wasmoon";

const require = createRequire(import.meta.url);
const { NextRequest } = require("next/server");
const source = readFileSync(new URL("../src/app/api/contact/route.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;

// Execute the actual application script in Lua. Only Redis commands and its
// clock are simulated; the rate-limit decision is never reimplemented in JS.
async function redisHarness(t) {
  const engine = await new LuaFactory().createEngine();
  t.after(() => engine.global.close());
  let now = 1_800_000_000_000;
  engine.global.set("testNow", () => now);
  engine.doStringSync(`
    local store = {}
    redis = {}
    function redis.call(command, key, a, b)
      local now = testNow()
      local item = store[key]
      if item and item.expiresAt and item.expiresAt <= now then
        store[key] = nil
        item = nil
      end
      if command == 'TIME' then
        return {tostring(math.floor(now / 1000)), tostring((now % 1000) * 1000)}
      elseif command == 'ZREMRANGEBYSCORE' then
        local removed = 0
        if item then
          for member, score in pairs(item.members) do
            if score <= tonumber(b) then
              item.members[member] = nil
              removed = removed + 1
            end
          end
          if next(item.members) == nil then store[key] = nil end
        end
        return removed
      elseif command == 'ZCARD' then
        local count = 0
        if item then for _ in pairs(item.members) do count = count + 1 end end
        return count
      elseif command == 'PTTL' then
        if not item then return -2 end
        return item.expiresAt and (item.expiresAt - now) or -1
      elseif command == 'ZADD' then
        item = item or {members = {}}
        item.members[b] = tonumber(a)
        store[key] = item
        return 1
      elseif command == 'PEXPIRE' then
        if not item then return 0 end
        item.expiresAt = now + tonumber(a)
        return 1
      else
        error('Unsupported test command: ' .. command)
      end
    end
    function evalLimit(script, key, window, limit, member)
      KEYS = {key}
      ARGV = {tostring(window), tostring(limit), member}
      return assert(load(script))()
    end
    function ttl(key) return redis.call('PTTL', key) end
    function removeExpiry(key) store[key].expiresAt = nil end
  `);
  const evaluate = engine.global.get("evalLimit");
  const keys = new Set();
  return {
    keys,
    advance: (ms) => { now += ms; },
    ttl: engine.global.get("ttl"),
    removeExpiry: engine.global.get("removeExpiry"),
    fetch: async (_url, options) => {
      await delay(2);
      const [command, script, keyCount, key, window, limit, member] = JSON.parse(options.body);
      assert.equal(command, "EVAL");
      assert.equal(keyCount, 1);
      keys.add(key);
      return Response.json({ result: evaluate(script, key, window, limit, member) });
    },
  };
}

// Inject only fake secrets and mocked external services; no real network or mail.
function loadRoute({ env = {}, fetch, send } = {}) {
  const emails = [];
  const requests = [];
  const context = vm.createContext({
    exports: {},
    require: (name) => name === "resend" ? {
      Resend: class {
        emails = { send: async (mail) => {
          emails.push(mail);
          return send ? send(mail) : { data: { id: "test-only" }, error: null };
        } };
      },
    } : require(name),
    process: { env: {
      NODE_ENV: "production", VERCEL: "1", VERCEL_ENV: "preview",
      UPSTASH_REDIS_REST_URL: "https://redis.example.test",
      UPSTASH_REDIS_REST_TOKEN: "test-only-redis-token",
      RESEND_API_KEY: "test-only-mail-token",
      ...env,
    } },
    fetch: async (url, options) => {
      requests.push({ url: String(url), options });
      return fetch ? fetch(url, options) : Response.json({ result: 1 });
    },
    Request, URL, AbortSignal, Uint8Array,
    console: { log: () => assert.fail("Unexpected log"), error: () => assert.fail("Unexpected log") },
  });
  vm.runInContext(compiled, context);
  return { post: context.exports.POST, emails, requests };
}

function request({ fields = {}, headers = {}, body, multipart = false } = {}) {
  const values = {
    name: "Testperson", email: "test@example.test", phone: "", projectType: "Renovering",
    location: "Solna", message: "Detta är en testförfrågan om renovering.", company: "", ...fields,
  };
  const form = multipart ? new FormData() : new URLSearchParams();
  for (const [key, value] of Object.entries(values)) form.append(key, value);
  return new NextRequest("https://preview.example.test/api/contact", {
    method: "POST", body: body ?? form,
    headers: { "x-vercel-forwarded-for": "192.0.2.1", ...headers },
  });
}

test("valid urlencoded and multipart forms send only to the fixed recipient", async () => {
  const route = loadRoute();
  for (const multipart of [false, true]) {
    assert.equal((await route.post(request({ multipart }))).status, 200);
  }
  assert.equal(route.emails.length, 2);
  for (const mail of route.emails) {
    assert.equal(mail.to, "hej@tornrosbygg.se");
    assert.equal(mail.from, "Törnros Bygg <hej@tornrosbygg.se>");
    assert.equal(mail.replyTo, "test@example.test");
  }
  const call = route.requests[0];
  assert.equal(call.options.method, "POST");
  assert.equal(call.options.redirect, "error");
  assert.equal(call.options.cache, "no-store");
  assert.ok(call.options.signal instanceof AbortSignal);
  const [command, script, keys, key, window, limit, member] = JSON.parse(call.options.body);
  assert.equal(command, "EVAL");
  assert.equal(keys, 1);
  assert.match(key, /^contact-form:v2:preview:[a-f0-9]{64}$/);
  assert.equal(window, 3600000);
  assert.equal(limit, 5);
  assert.ok(member);
  assert.match(script, /redis.call\('TIME'\)/);
  assert.match(script, /redis.call\('PEXPIRE', key, window\)/);
});

test("actual Lua: 50 concurrent attempts across two app instances allow exactly five emails", async (t) => {
  const redis = await redisHarness(t);
  const instances = [loadRoute({ fetch: redis.fetch }), loadRoute({ fetch: redis.fetch })];
  const responses = await Promise.all(Array.from({ length: 50 }, (_, i) => instances[i % 2].post(request({
    headers: { "x-forwarded-for": `198.51.100.${i}`, "x-real-ip": `203.0.113.${i}` },
  }))));
  assert.equal(responses.filter((r) => r.status === 200).length, 5);
  assert.equal(responses.filter((r) => r.status === 429).length, 45);
  assert.equal(instances.reduce((sum, r) => sum + r.emails.length, 0), 5);
  assert.equal(redis.keys.size, 1);
  assert.equal(redis.ttl([...redis.keys][0]), 3600000);
});

test("actual Lua: rolling window, independent IPs, expiry and missing-TTL repair", async (t) => {
  const redis = await redisHarness(t);
  const route = loadRoute({ fetch: redis.fetch });
  assert.equal((await route.post(request())).status, 200);
  const key = [...redis.keys][0];
  assert.equal(redis.ttl(key), 3600000);
  redis.advance(1000);
  for (let i = 0; i < 4; i++) assert.equal((await route.post(request())).status, 200);
  assert.equal((await route.post(request())).status, 429);
  redis.advance(1000);
  assert.equal((await route.post(request())).status, 429);
  assert.equal(redis.ttl(key), 3599000, "blocked attempts must not extend TTL");
  assert.equal((await route.post(request({ headers: { "x-vercel-forwarded-for": "192.0.2.2" } }))).status, 200);
  redis.removeExpiry(key);
  assert.equal(redis.ttl(key), -1);
  assert.equal((await route.post(request())).status, 429);
  assert.equal(redis.ttl(key), 3600000, "missing TTL is repaired even on a blocked key");
  redis.advance(3598000);
  assert.equal((await route.post(request())).status, 200, "first attempt leaves rolling window after one hour");
  assert.equal((await route.post(request())).status, 429, "the other four attempts still count");
  redis.advance(3600000);
  assert.equal(redis.ttl(key), -2, "inactive key expires");
  assert.equal((await route.post(request())).status, 200);
  assert.equal(redis.ttl(key), 3600000);
});

test("invalid field values consume an attempt; Preview does not consume Production's quota", async (t) => {
  const redis = await redisHarness(t);
  const route = loadRoute({ fetch: redis.fetch });
  assert.equal((await route.post(request({ fields: { email: "invalid" } }))).status, 400);
  for (let i = 0; i < 4; i++) assert.equal((await route.post(request())).status, 200);
  assert.equal((await route.post(request())).status, 429);
  const production = loadRoute({ fetch: redis.fetch, env: { VERCEL_ENV: "production" } });
  assert.equal((await production.post(request())).status, 200);
});

test("missing configuration always fails closed, including development", async () => {
  for (const env of [
    { UPSTASH_REDIS_REST_URL: "" }, { UPSTASH_REDIS_REST_TOKEN: "" },
    { UPSTASH_REDIS_REST_URL: "", NODE_ENV: "development", VERCEL: "" },
    { RESEND_API_KEY: "" }, { VERCEL: "" },
    { UPSTASH_REDIS_REST_URL: "http://redis.example.test" },
    { UPSTASH_REDIS_REST_URL: "invalid" },
  ]) {
    const route = loadRoute({ env });
    const response = await route.post(request());
    assert.equal(response.status, 503);
    assert.equal(route.emails.length, 0);
    assert.doesNotMatch(await response.text(), /test-only|UPSTASH|RESEND|redis|Bearer/i);
  }
});

test("Upstash network, timeout, HTTP, Redis and malformed-response failures return generic 503", async () => {
  for (const fetch of [
    async () => { throw new Error("test-only-redis-token"); },
    async () => { throw new DOMException("test-only", "TimeoutError"); },
    async () => new Response("test-only-redis-token", { status: 401 }),
    async () => new Response("unavailable", { status: 503 }),
    async () => Response.json({ error: "test-only-redis-token" }),
    async () => Response.json({ result: 1, error: "test-only" }),
    async () => Response.json({ result: "1" }),
    async () => Response.json({ result: null }),
    async () => Response.json(null),
    async () => new Response("invalid-json"),
  ]) {
    const route = loadRoute({ fetch });
    const response = await route.post(request());
    assert.equal(response.status, 503);
    assert.equal(route.emails.length, 0);
    assert.doesNotMatch(await response.text(), /test-only|UPSTASH|RESEND|redis|Bearer/i);
  }
});

test("untrusted, absent and malformed IP headers cannot become limiter keys", async () => {
  for (const ip of ["", "not-an-ip", "192.0.2.1, 198.51.100.2", "fe80::1%eth0"]) {
    const route = loadRoute();
    assert.equal((await route.post(request({ headers: {
      "x-vercel-forwarded-for": ip, "x-forwarded-for": "198.51.100.2", "x-real-ip": "198.51.100.3",
    } }))).status, 503);
    assert.equal(route.requests.length, 0);
    assert.equal(route.emails.length, 0);
  }
  const local = loadRoute({ env: { VERCEL: "", NODE_ENV: "development" } });
  await local.post(request({ headers: { "x-vercel-forwarded-for": "192.0.2.1" } }));
  await local.post(request({ headers: { "x-vercel-forwarded-for": "192.0.2.2" } }));
  assert.equal(JSON.parse(local.requests[0].options.body)[3], JSON.parse(local.requests[1].options.body)[3]);
  const ipv6 = loadRoute();
  await ipv6.post(request({ headers: { "x-vercel-forwarded-for": "2001:0db8:0:0::1" } }));
  await ipv6.post(request({ headers: { "x-vercel-forwarded-for": "2001:db8::1" } }));
  assert.equal(JSON.parse(ipv6.requests[0].options.body)[3], JSON.parse(ipv6.requests[1].options.body)[3]);
});

test("validation rejects missing, oversized, invalid and injected fields without sending mail", async () => {
  for (const fields of [
    { name: "" }, { email: "not-email" }, { message: "kort" },
    { name: "x".repeat(121) }, { email: `${"x".repeat(250)}@example.test` },
    { phone: "x".repeat(121) }, { location: "x".repeat(121) },
    { message: "x".repeat(2001) }, { projectType: "not-allowed" },
    { name: "Test\r\nBcc: injected@example.test" }, { email: "test@example.test\r\nBcc:x@y.test" },
    { company: "bot" }, { unexpected: "field" },
  ]) {
    const route = loadRoute();
    assert.equal((await route.post(request({ fields }))).status, 400);
    assert.equal(route.emails.length, 0);
  }
  const duplicate = loadRoute();
  assert.equal((await duplicate.post(request({ body: new URLSearchParams("name=one&name=two") }))).status, 400);
  const file = new FormData();
  file.append("name", new Blob(["uploaded file"]), "file.txt");
  assert.equal((await duplicate.post(request({ body: file }))).status, 400);
  assert.equal(duplicate.emails.length, 0);
});

test("body limit checks real bytes with absent, accurate and forged Content-Length", async () => {
  for (const headers of [{}, { "content-length": "1" }, { "content-length": "70000" }]) {
    const route = loadRoute();
    assert.equal((await route.post(request({
      body: `message=${"x".repeat(65536)}`,
      headers: { "content-type": "application/x-www-form-urlencoded", ...headers },
    }))).status, 413);
    assert.equal(route.requests.length, 0);
    assert.equal(route.emails.length, 0);
  }
  for (const length of ["-1", "1junk", "1.5", ""]) {
    assert.equal((await loadRoute().post(request({ headers: { "content-length": length } }))).status, 400);
  }
  assert.equal((await loadRoute().post(request({ headers: { "content-type": "application/json" } }))).status, 415);
  assert.equal((await loadRoute().post(request({ headers: { "content-type": "multipart/form-data" }, body: "broken" }))).status, 400);
});

test("Resend exceptions and rejection details remain server-side", async () => {
  for (const send of [
    async () => { throw new Error("test-only-mail-token"); },
    async () => ({ error: { message: "test-only-mail-token" } }),
  ]) {
    const route = loadRoute({ send });
    const response = await route.post(request());
    assert.equal(response.status, 502);
    assert.doesNotMatch(await response.text(), /test-only|RESEND|token/i);
  }
});
