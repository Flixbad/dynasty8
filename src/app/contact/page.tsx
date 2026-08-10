import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { EstimateCalculator } from "@/components/tools/EstimateCalculator";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Dynasty8 pour une visite, une estimation ou une transaction à Los Santos.",
};

export default function ContactPage() {
  return (
    <div className="container-x pb-24 pt-28 md:pt-32">
      <div className="mb-14 max-w-3xl">
        <p className="eyebrow">Contact & outils</p>
        <h1 className="display mt-4 text-5xl text-ivory md:text-7xl">
          Écrivons votre
          <br />
          <span className="text-green">prochaine adresse.</span>
        </h1>
        <p className="mt-5 max-w-lg font-light text-muted">
          Estimateur RP + message direct à l&apos;agence. On répond en jeu.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <EstimateCalculator />
        <div className="space-y-6">
          <ContactForm />
          <div className="grid gap-6 rounded-[22px] border border-[var(--line)] bg-surface p-7 sm:grid-cols-2">
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
      <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted">{label}</p>
      <p className="mt-1.5 text-ivory">{value}</p>
    </div>
  );
}
