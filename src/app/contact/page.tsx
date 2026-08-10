import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Dynasty8 pour une visite, une estimation ou une transaction à Los Santos.",
};

export default function ContactPage() {
  return (
    <div className="container-x pb-24 pt-32 md:pt-36">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="display mt-4 text-5xl text-cream md:text-6xl">
            Parlons de votre prochain bien
          </h1>
          <p className="mt-5 max-w-md font-light leading-relaxed text-cream-muted">
            Estimation, achat, vente ou location — un conseiller Dynasty8 vous répond en jeu.
          </p>

          <div className="mt-14 space-y-7 border-t border-[var(--line)] pt-10">
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
      <p className="text-[0.65rem] uppercase tracking-[0.2em] text-cream-muted">{label}</p>
      <p className="mt-1.5 text-cream">{value}</p>
    </div>
  );
}
