import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { EstimateCalculator } from "@/components/tools/EstimateCalculator";
import { AGENCY_CONTACT_URL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Dynasty8 via Life Oren RP ou la centrale pour une visite, une estimation ou une transaction.",
};

export default function ContactPage() {
  return (
    <div className="container-x pb-24 pt-28 md:pt-32">
      <div className="mb-14 max-w-3xl">
        <p className="eyebrow">Contact</p>
        <h1 className="display mt-4 text-5xl text-ivory md:text-7xl">
          Parlez à
          <br />
          <span className="text-green">Dynasty8.</span>
        </h1>
        <p className="mt-5 max-w-lg font-light text-muted">
          Pour joindre l&apos;agence : profil Life Oren RP ou centrale en jeu. Pas de formulaire sur
          ce site.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <ContactCTA />
        <div className="space-y-6">
          <EstimateCalculator />
          <div className="grid gap-6 rounded-[22px] border border-[var(--line)] bg-surface p-7 sm:grid-cols-2">
            <Info label="Life Oren RP" value="Profil Dynasty8" href={AGENCY_CONTACT_URL} />
            <Info label="En jeu" value="Via la centrale" />
            <Info label="Adresse" value="214 Rockford Plaza, Los Santos" />
            <Info label="Horaires" value="Ouvert 24/7 — GTA Roleplay" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Info({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div>
      <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted">{label}</p>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1.5 inline-block text-ivory transition hover:text-green-soft"
        >
          {value} ↗
        </a>
      ) : (
        <p className="mt-1.5 text-ivory">{value}</p>
      )}
    </div>
  );
}
