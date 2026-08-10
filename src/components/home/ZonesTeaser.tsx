import Link from "next/link";
import { zones } from "@/data/zones";
import { Reveal } from "@/components/motion/Reveal";

export function ZonesTeaser() {
  return (
    <section className="band-stone section-y">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="overflow-hidden rounded-[28px] shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/maps/san-andreas-zones.png"
              alt="Carte des zones San Andreas"
              className="w-full"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">Carte San Andreas</p>
            <h2 className="display mt-3 text-4xl text-ink md:text-6xl">
              Quatre couleurs.
              <br />
              Toute l&apos;île.
            </h2>
            <p className="mt-5 max-w-md text-muted-dark">
              Rouge, bleu, jaune, vert — naviguez comme une vraie agence sectorisée.
            </p>
          </Reveal>

          <ul className="mt-8 space-y-2">
            {zones.map((zone, i) => (
              <Reveal key={zone.id} delay={0.05 * i}>
                <Link
                  href={`/zones/${zone.slug}`}
                  className="group flex items-center gap-4 rounded-2xl px-3 py-3 transition hover:bg-black/5"
                >
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ background: zone.color }}
                  />
                  <span className="display text-xl text-ink">{zone.label}</span>
                  <span className="flex-1 text-sm text-muted-dark">{zone.tagline}</span>
                  <span className="text-green-dim opacity-0 transition group-hover:opacity-100">
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.2}>
            <Link href="/zones" className="btn-primary mt-10">
              Ouvrir la carte
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
