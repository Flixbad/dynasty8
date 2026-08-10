import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Dynasty8 pour une visite, une estimation ou une transaction à Los Santos.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-32 md:px-8">
      <div className="grid gap-14 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Contact</p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl text-cream md:text-6xl">
            Parlons de votre prochain bien
          </h1>
          <p className="mt-5 max-w-md text-cream-muted">
            Estimation, achat, vente ou location — laissez un message à l&apos;équipe Dynasty8. Nous
            répondons en jeu sur le serveur RP.
          </p>

          <div className="mt-12 space-y-6 border-t border-[var(--line)] pt-8">
            <Info label="Adresse" value="214 Rockford Plaza, Los Santos" />
            <Info label="Téléphone" value="555-DYNASTY" />
            <Info label="Email" value="contact@dynasty8.ls" />
            <Info label="Horaires" value="Ouvert 24/7 — GTA Roleplay" />
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gold">{label}</p>
      <p className="mt-1 text-cream">{value}</p>
    </div>
  );
}
