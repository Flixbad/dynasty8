"use client";

import { useState, type FormEvent } from "react";

interface ContactFormProps {
  propertyId?: string;
  propertyTitle?: string;
}

export function ContactForm({ propertyId, propertyTitle }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? ""),
      message: String(form.get("message") ?? ""),
      propertyId: propertyId || undefined,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        throw new Error(data.error ?? "Erreur d'envoi");
      }

      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 border border-[var(--line)] bg-ink-soft/50 p-6 md:p-8">
      {propertyTitle && (
        <p className="text-sm text-gold">
          Demande concernant : <span className="text-cream">{propertyTitle}</span>
        </p>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-cream-muted">
          Nom
          <input name="name" required className="input-field normal-case tracking-normal" />
        </label>
        <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-cream-muted">
          Email
          <input
            name="email"
            type="email"
            required
            className="input-field normal-case tracking-normal"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-cream-muted">
        Téléphone
        <input name="phone" className="input-field normal-case tracking-normal" placeholder="555-..." />
      </label>

      <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-cream-muted">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className="input-field normal-case tracking-normal resize-y"
          placeholder="Décrivez votre projet, budget, quartier souhaité..."
        />
      </label>

      <button type="submit" className="btn-primary w-full md:w-auto" disabled={status === "loading"}>
        {status === "loading" ? "Envoi..." : "Envoyer la demande"}
      </button>

      {status === "success" && (
        <p className="text-sm text-emerald-bright">
          Demande reçue. Un conseiller Dynasty8 vous recontactera sous peu.
        </p>
      )}
      {status === "error" && <p className="text-sm text-[#c07070]">{error}</p>}
    </form>
  );
}
