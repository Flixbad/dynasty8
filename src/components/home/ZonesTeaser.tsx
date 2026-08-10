import Link from "next/link";

export function ZonesTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative overflow-hidden border border-[var(--line)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/maps/san-andreas-zones.png"
            alt="Carte des zones San Andreas"
            className="zones-map-reveal aspect-[4/3] w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 flex gap-2">
            {[
              { c: "#c94a3a", l: "1" },
              { c: "#3a7fc9", l: "2" },
              { c: "#d4b83a", l: "3" },
              { c: "#3aa85a", l: "4" },
            ].map((z) => (
              <span
                key={z.l}
                className="flex h-8 w-8 items-center justify-center text-xs font-semibold text-ink"
                style={{ background: z.c }}
              >
                {z.l}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Carte Dynasty8</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-cream md:text-5xl">
            Quatre zones, toute l&apos;île
          </h2>
          <p className="mt-4 text-cream-muted">
            Zone 1 rouge pour le sud et le désert, Zone 2 bleue pour le cœur urbain, Zone 3 or pour
            les collines chic, Zone 4 verte pour le nord sauvage. Explorez la carte et filtrez les
            biens.
          </p>
          <Link href="/zones" className="btn-primary mt-8">
            Découvrir les zones
          </Link>
        </div>
      </div>
    </section>
  );
}
