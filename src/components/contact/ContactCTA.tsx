import { AGENCY_CONTACT_URL } from "@/lib/contact";

interface ContactCTAProps {
  propertyTitle?: string;
}

export function ContactCTA({ propertyTitle }: ContactCTAProps) {
  return (
    <div className="space-y-5 rounded-[22px] border border-[var(--line)] bg-surface p-7 md:p-9">
      <p className="eyebrow">Prendre contact</p>
      <h3 className="display text-3xl text-ivory">
        Contacter
        <br />
        <span className="text-green">l&apos;agence</span>
      </h3>
      {propertyTitle && (
        <p className="text-sm text-muted">
          Concernant : <span className="text-ivory">{propertyTitle}</span>
        </p>
      )}
      <p className="text-sm font-light leading-relaxed text-muted">
        Les demandes se font uniquement via le profil Dynasty8 sur Life Oren RP, ou directement via
        la centrale en jeu.
      </p>

      <div className="flex flex-col gap-3 pt-2">
        <a
          href={AGENCY_CONTACT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full text-center"
        >
          Ouvrir le profil Life
        </a>
        <p className="text-center text-[0.7rem] uppercase tracking-[0.16em] text-muted">
          ou contactez-nous via la centrale
        </p>
      </div>
    </div>
  );
}
