"use client";

import Link from "next/link";
import { useState } from "react";
import { zones } from "@/data/zones";

export function ZonesMap() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:items-stretch lg:gap-5">
      <figure className="relative overflow-hidden bg-ink-elevated">
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
          style={{
            opacity: active ? 0.32 : 0,
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
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent px-5 py-6">
          <p className="eyebrow">Carte officielle</p>
          <p className="mt-2 text-sm font-light text-cream-muted">
            Survolez une zone pour la mettre en avant
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
              className="flex flex-1 flex-col justify-center border border-[var(--line)] bg-surface p-5 transition duration-300"
              style={{
                borderColor: isActive ? zone.color : undefined,
                background: isActive ? zone.colorSoft : undefined,
              }}
            >
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-8" style={{ background: zone.color }} aria-hidden />
                <span className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-cream">
                  {zone.label}
                </span>
              </div>
              <p className="display mt-3 text-2xl text-cream">{zone.tagline}</p>
              <p className="mt-2 line-clamp-2 text-sm font-light text-cream-muted">
                {zone.description}
              </p>
              <p className="btn-link mt-4 !text-[0.65rem]" style={{ color: zone.color }}>
                Voir les biens <span aria-hidden>→</span>
              </p>
            </Link>
          );
        })}
      </aside>
    </div>
  );
}
