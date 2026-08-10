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
    <div className="pb-24">
      <section className="relative min-h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
            alt="Agence Dynasty8"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
        </div>
        <div className="relative container-x flex min-h-[70vh] flex-col justify-end pb-16 pt-32">
          <div className="gold-rule mb-6" />
          <p className="eyebrow">Depuis Rockford Plaza</p>
          <h1 className="display mt-4 max-w-3xl text-5xl text-cream md:text-7xl">
            L&apos;agence immobilière de Los Santos
          </h1>
          <p className="mt-6 max-w-xl font-light text-lg text-cream-muted">
            Dynasty8 accompagne citoyens et organisations dans l&apos;achat, la vente et la location
            sur tout San Andreas.
          </p>
        </div>
      </section>

      <section className="container-x section-y">
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <p className="eyebrow">Notre mission</p>
            <h2 className="display mt-4 text-4xl text-cream md:text-5xl">
              Du rêve à la remise des clés
            </h2>
            <p className="mt-6 font-light leading-relaxed text-cream-muted">
              Sélection dans les quartiers chic — Rockford Hills, Vinewood, Del Perro — et dans les
              zones stratégiques commerciales. Prix transparents, visites organisées, contrats
              clairs.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { label: "Biens au catalogue", value: "20+" },
              { label: "Quartiers couverts", value: "15" },
              { label: "Conseillers", value: "3" },
              { label: "Disponibilité", value: "24/7" },
            ].map((item) => (
              <div key={item.label} className="border border-[var(--line)] bg-surface p-6">
                <p className="display text-3xl text-cream">{item.value}</p>
                <p className="mt-2 text-[0.65rem] uppercase tracking-[0.18em] text-cream-muted">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-ink-soft/30">
        <div className="container-x section-y">
          <p className="eyebrow">Équipe</p>
          <h2 className="display mt-4 text-4xl text-cream md:text-5xl">Vos conseillers</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {agents.map((agent) => (
              <article key={agent.id} className="group">
                <div className="aspect-[4/5] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="property-media h-full w-full object-cover"
                  />
                </div>
                <div className="pt-5">
                  <h3 className="display text-2xl text-cream">{agent.name}</h3>
                  <p className="mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-gold">
                    {agent.role}
                  </p>
                  <p className="mt-4 text-sm font-light leading-relaxed text-cream-muted">
                    {agent.bio}
                  </p>
                  <p className="mt-4 text-sm text-cream-muted">
                    {agent.specialties.map((s) => getCategoryLabel(s)).join(" · ")}
                  </p>
                  <p className="mt-2 text-sm text-gold-soft">{agent.phone}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="flex flex-col items-start justify-between gap-8 border border-[var(--line)] bg-surface p-8 md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="display text-3xl text-cream md:text-4xl">
              Prêt à trouver votre adresse ?
            </h2>
            <p className="mt-3 font-light text-cream-muted">
              Contactez-nous pour une estimation ou une visite.
            </p>
          </div>
          <Link href="/contact" className="btn-primary">
            Nous contacter
          </Link>
        </div>
      </section>
    </div>
  );
}
