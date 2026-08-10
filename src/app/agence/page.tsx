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
      <section className="relative min-h-[78vh] overflow-hidden noise">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
            alt="Agence Dynasty8"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-void/35" />
        </div>
        <div className="relative container-x flex min-h-[78vh] flex-col justify-end pb-16 pt-32">
          <p className="eyebrow">Rockford Plaza</p>
          <h1 className="display mt-4 max-w-4xl text-5xl text-ivory md:text-7xl">
            L&apos;agence qui signe
            <br />
            <span className="text-green">vos adresses.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg font-light text-muted">
            Dynasty8 accompagne citoyens et organisations dans l&apos;achat, la vente et la location
            sur tout San Andreas.
          </p>
        </div>
      </section>

      <section className="band-stone section-y">
        <div className="container-x grid gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow">Mission</p>
            <h2 className="display mt-3 text-4xl text-ink md:text-5xl">
              Du rêve à la
              <br />
              remise des clés
            </h2>
            <p className="mt-6 leading-relaxed text-muted-dark">
              Sélection Rockford, Vinewood, Del Perro — et zones stratégiques commerciales. Prix
              clairs, visites organisées, contrats nets.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { label: "Biens", value: "20+" },
              { label: "Quartiers", value: "15" },
              { label: "Conseillers", value: "3" },
              { label: "Dispo", value: "24/7" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[22px] border border-[var(--line-dark)] bg-white/50 p-6"
              >
                <p className="display text-4xl text-ink">{item.value}</p>
                <p className="mt-2 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-muted-dark">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <p className="eyebrow">Équipe</p>
          <h2 className="display mt-3 text-4xl text-ivory md:text-5xl">Vos conseillers</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {agents.map((agent) => (
              <article key={agent.id}>
                <div className="aspect-[4/5] overflow-hidden rounded-[24px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="property-media h-full w-full object-cover"
                  />
                </div>
                <div className="pt-5">
                  <h3 className="display text-2xl text-ivory">{agent.name}</h3>
                  <p className="mt-1 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-green-soft">
                    {agent.role}
                  </p>
                  <p className="mt-4 text-sm font-light leading-relaxed text-muted">{agent.bio}</p>
                  <p className="mt-3 text-sm text-muted">
                    {agent.specialties.map((s) => getCategoryLabel(s)).join(" · ")}
                  </p>
                  <p className="mt-2 text-sm text-green-soft">{agent.phone}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x pb-8">
        <div className="flex flex-col items-start justify-between gap-8 rounded-[28px] border border-[var(--line)] bg-panel p-8 md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="display text-3xl text-ivory md:text-4xl">Prêt à trouver votre adresse ?</h2>
            <p className="mt-3 text-muted">Estimation ou visite — on répond en jeu.</p>
          </div>
          <Link href="/contact" className="btn-primary">
            Nous contacter
          </Link>
        </div>
      </section>
    </div>
  );
}
