import type { Metadata } from "next";
import Link from "next/link";
import { agents } from "@/data/agents";
import { getCategoryLabel } from "@/lib/format";

export const metadata: Metadata = {
  title: "L'agence",
  description: "Dynasty8 — l'agence immobilière de référence à Los Santos pour le GTA RP.",
};

export default function AgencePage() {
  return (
    <div className="pb-24 pt-32">
      <section className="relative overflow-hidden border-b border-[var(--line)]">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80"
            alt="Agence Dynasty8"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Depuis Rockford Plaza</p>
          <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-5xl text-cream md:text-7xl">
            Dynasty8, l&apos;adresse immobilière de Los Santos
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream-muted">
            Entreprise fictive pour serveur GTA RP. Nous accompagnons citoyens et organisations dans
            l&apos;achat, la vente et la location de biens à travers San Andreas.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Notre mission</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-cream">
              Du rêve à la remise des clés
            </h2>
            <p className="mt-5 leading-relaxed text-cream-muted">
              Dynasty8 sélectionne des biens dans les quartiers chic — Rockford Hills, Vinewood,
              Del Perro — comme dans les zones stratégiques commerciales et industrielles. Transparence
              des prix, visites organisées et contrats clairs pour chaque transaction RP.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Biens au catalogue", value: "16+" },
              { label: "Quartiers couverts", value: "12" },
              { label: "Conseillers", value: "3" },
              { label: "Disponibilité", value: "24/7" },
            ].map((item) => (
              <div key={item.label} className="border border-[var(--line)] bg-ink-soft/50 p-5">
                <p className="font-[family-name:var(--font-display)] text-3xl text-gold-soft">
                  {item.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-cream-muted">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-ink-soft/30">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Équipe</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-cream">
            Vos conseillers
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {agents.map((agent) => (
              <article key={agent.id} className="border border-[var(--line)] bg-ink/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl text-cream">
                    {agent.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gold">{agent.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-cream-muted">{agent.bio}</p>
                  <p className="mt-4 text-sm text-cream-muted">
                    {agent.specialties.map((s) => getCategoryLabel(s)).join(" · ")}
                  </p>
                  <p className="mt-3 text-sm text-gold-soft">{agent.phone}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 border border-[var(--line)] bg-ink-elevated/40 p-8 md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-cream md:text-4xl">
              Prêt à trouver votre adresse ?
            </h2>
            <p className="mt-3 text-cream-muted">Contactez-nous pour une estimation ou une visite.</p>
          </div>
          <Link href="/contact" className="btn-primary">
            Nous contacter
          </Link>
        </div>
      </section>
    </div>
  );
}
