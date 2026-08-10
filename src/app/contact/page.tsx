import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { EstimateCalculator } from "@/components/tools/EstimateCalculator";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Dynasty8 pour une visite, une estimation ou une transaction à Los Santos.",
};

export default function ContactPage() {
  return (
    <div className="container-x pb-24 pt-32 md:pt-36">
      <div className="mb-14 max-w-2xl">
        <p className="eyebrow">Contact & outils</p>
        <h1 className="display mt-4 text-5xl text-cream md:text-6xl">
          Parlons de votre prochain bien
        </h1>
        <p className="mt-5 font-light leading-relaxed text-cream-muted">
          Estimation indicative, message à l&apos;agence, visite RP — tout commence ici.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        <EstimateCalculator />
        <div className="space-y-8">
          <ContactForm />
          <div className="grid gap-6 border border-[var(--line)] bg-surface p-7 sm:grid-cols-2">
            <Info label="Adresse" value="214 Rockford Plaza, Los Santos" />
            <Info label="Téléphone" value="555-DYNASTY" />
            <Info label="Email" value="contact@dynasty8.ls" />
            <Info label="Horaires" value="Ouvert 24/7 — GTA Roleplay" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[0.65rem] uppercase tracking-[0.2em] text-cream-muted">{label}</p>
      <p className="mt-1.5 text-cream">{value}</p>
    </div>
  );
}
