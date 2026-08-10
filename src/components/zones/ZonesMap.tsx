"use client";

import Link from "next/link";
import { useState } from "react";
import { zones } from "@/data/zones";

export function ZonesMap() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
      <figure className="relative overflow-hidden border border-[var(--line)] bg-ink-elevated shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
          style={{
            opacity: active ? 0.35 : 0,
            background:
              active === 1
                ? "radial-gradient(ellipse at 45% 55%, rgba(201,74,58,0.55), transparent 55%)"
                : active === 2
                  ? "radial-gradient(ellipse at 35% 70%, rgba(58,127,201,0.55), transparent 50%)"
                  : active === 3
                    ? "radial-gradient(ellipse at 28% 55%, rgba(212,184,58,0.5), transparent 48%)"
                    : active === 4
                      ? "radial-gradient(ellipse at 55% 25%, rgba(58,168,90,0.5), transparent 55%)"
                      : "transparent",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/maps/san-andreas-zones.png"
          alt="Carte des zones Dynasty8 — San Andreas Zones 1 à 4"
          className="zones-map-reveal block h-auto w-full"
        />
        <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-ink via-ink/80 to-transparent px-5 py-5">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Carte officielle Dynasty8</p>
          <p className="mt-1 text-sm text-cream-muted">
            Survolez une zone à droite pour la mettre en avant
          </p>
        </figcaption>
      </figure>

      <aside className="flex flex-col gap-3">
        {zones.map((zone) => {
          const isActive = active === zone.id;
          return (
            <Link
              key={zone.id}
              href={`/zones/${zone.slug}`}
              onMouseEnter={() => setActive(zone.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(zone.id)}
              onBlur={() => setActive(null)}
              className="border border-[var(--line)] bg-ink-soft/60 p-5 transition duration-300"
              style={{
                borderColor: isActive ? zone.color : undefined,
                background: isActive ? zone.colorSoft : undefined,
                transform: isActive ? "translateX(4px)" : undefined,
              }}
            >
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-10" style={{ background: zone.color }} aria-hidden />
                <span className="text-xs uppercase tracking-[0.25em] text-cream">{zone.label}</span>
              </div>
              <p className="mt-3 font-[family-name:var(--font-display)] text-2xl text-cream">
                {zone.tagline}
              </p>
              <p className="mt-2 line-clamp-2 text-sm text-cream-muted">{zone.description}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em]" style={{ color: zone.color }}>
                Voir les biens →
              </p>
            </Link>
          );
        })}
      </aside>
    </div>
  );
}
