"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type FormState = {
  status: "idle" | "sending" | "success" | "error";
  message: string;
  fieldErrors?: Record<string, string>;
};

const projectTypes = [
  "Renovering",
  "Badrumsrenovering",
  "Tillbyggnad",
  "Nybyggnation",
  "Attefallshus",
  "Markarbete eller dränering",
  "Annat byggprojekt",
];

export function ContactForm() {
  const [state, setState] = useState<FormState>({
    status: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setState({ status: "sending", message: "Skickar formuläret..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const result = (await response.json()) as {
        message?: string;
        errors?: Record<string, string>;
      };

      if (!response.ok) {
        setState({
          status: "error",
          message:
            result.message ??
            "Formuläret kunde inte skickas. Kontrollera uppgifterna och försök igen.",
          fieldErrors: result.errors,
        });
        return;
      }

      setState({
        status: "success",
        message:
          result.message ??
          "Tack, ditt meddelande är skickat. Vi återkommer så snart vi kan.",
      });
      form.reset();
    } catch {
      setState({
        status: "error",
        message:
          "Formuläret kunde inte skickas just nu. Försök igen eller kontakta oss via e-post.",
      });
    }
  }

  const statusClass =
    state.status === "success"
      ? "border-green-700 bg-green-50 text-green-900"
      : "border-[var(--color-border)] bg-[var(--color-paper)] text-[var(--color-muted)]";

  return (
    <form className="grid gap-6" onSubmit={handleSubmit} noValidate>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Företag</label>
        <input
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field
          label="Namn"
          name="name"
          required
          error={state.fieldErrors?.name}
        />
        <Field
          label="E-post"
          name="email"
          type="email"
          required
          error={state.fieldErrors?.email}
        />
        <Field
          label="Telefon"
          name="phone"
          type="tel"
          error={state.fieldErrors?.phone}
        />
        <label className="grid gap-2 text-sm font-bold text-[var(--color-ink)]">
          Projekttyp
          <select
            name="projectType"
            className="min-h-12 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-white px-4 text-base font-normal text-[var(--color-ink)]"
            defaultValue=""
            aria-describedby={
              state.fieldErrors?.projectType ? "projectType-error" : undefined
            }
          >
            <option value="">Välj projekttyp</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {state.fieldErrors?.projectType ? (
            <span id="projectType-error" className="text-sm text-red-700">
              {state.fieldErrors.projectType}
            </span>
          ) : null}
        </label>
      </div>

      <Field
        label="Ort eller stadsdel"
        name="location"
        error={state.fieldErrors?.location}
      />

      <label className="grid gap-2 text-sm font-bold text-[var(--color-ink)]">
        <span>Projektbeskrivning <span className="text-[var(--color-accent-dark)]">*</span></span>
        <textarea
          name="message"
          required
          rows={7}
          maxLength={2000}
          className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-white px-4 py-3 text-base font-normal leading-7 text-[var(--color-ink)]"
          aria-describedby={
            state.fieldErrors?.message ? "message-error" : undefined
          }
        />
        {state.fieldErrors?.message ? (
          <span id="message-error" className="text-sm text-red-700">
            {state.fieldErrors.message}
          </span>
        ) : null}
      </label>

      <p className="body-copy text-sm">
        När du skickar formuläret behandlar vi dina uppgifter för att kunna
        återkomma om din förfrågan. Läs mer i vår{" "}
        <Link
          href="/integritet"
          className="font-bold text-[var(--color-accent-dark)] underline underline-offset-4"
        >
          integritetstext
        </Link>
        .
      </p>

      {state.message ? (
        <p
          className={`rounded-[var(--radius-sm)] border p-4 text-sm font-semibold ${statusClass}`}
          role="status"
          aria-live="polite"
        >
          {state.message}
        </p>
      ) : null}

      <button
        className="button button-primary w-full sm:w-fit"
        type="submit"
        disabled={state.status === "sending"}
      >
        {state.status === "sending" ? "Skickar..." : "Skicka förfrågan"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  const errorId = `${name}-error`;

  return (
    <label className="grid gap-2 text-sm font-bold text-[var(--color-ink)]">
      <span>
        {label}{" "}
        {required ? (
          <span className="text-[var(--color-accent-dark)]">*</span>
        ) : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={name === "email" ? 254 : 120}
        className="min-h-12 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-white px-4 text-base font-normal text-[var(--color-ink)]"
        aria-describedby={error ? errorId : undefined}
      />
      {error ? (
        <span id={errorId} className="text-sm text-red-700">
          {error}
        </span>
      ) : null}
    </label>
  );
}
