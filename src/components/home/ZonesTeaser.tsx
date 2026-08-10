import Link from "next/link";
import { zones } from "@/data/zones";

export function ZonesTeaser() {
  return (
    <section className="section-y">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/maps/san-andreas-zones.png"
            alt="Carte des zones San Andreas Dynasty8"
            className="zones-map-reveal w-full"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>

        <div>
          <p className="eyebrow">Carte San Andreas</p>
          <h2 className="display mt-4 text-4xl text-cream md:text-5xl">
            Quatre zones,<br />toute l&apos;île
          </h2>
          <p className="mt-5 max-w-md font-light leading-relaxed text-cream-muted">
            Naviguez par secteur comme dans une vraie agence : sud industriel, cœur urbain, collines
            premium ou nord sauvage.
          </p>

          <ul className="mt-8 space-y-3">
            {zones.map((zone) => (
              <li key={zone.id}>
                <Link
                  href={`/zones/${zone.slug}`}
                  className="group flex items-center gap-4 border-b border-[var(--line)] py-3 transition-colors hover:border-[var(--line-strong)]"
                >
                  <span
                    className="h-2 w-8 shrink-0 transition-transform group-hover:scale-x-110"
                    style={{ background: zone.color }}
                  />
                  <span className="text-sm font-medium text-cream">{zone.label}</span>
                  <span className="flex-1 text-sm font-light text-cream-muted">{zone.tagline}</span>
                  <span className="text-gold-soft opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/zones" className="btn-primary mt-10">
            Ouvrir la carte
          </Link>
        </div>
      </div>
    </section>
  );
}
