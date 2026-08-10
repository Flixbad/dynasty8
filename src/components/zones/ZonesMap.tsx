"use client";

import Link from "next/link";
import { useState } from "react";
import { zones } from "@/data/zones";

export function ZonesMap() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="grid gap-4 lg:grid-cols-[1.4fr_0.6fr] lg:items-stretch">
      <figure className="relative overflow-hidden rounded-[28px] bg-panel">
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
          style={{
            opacity: active ? 0.3 : 0,
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
          alt="Carte des zones Dynasty8"
          className="block h-auto w-full"
        />
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-void via-void/70 to-transparent px-5 py-6">
          <p className="eyebrow">Carte officielle</p>
          <p className="mt-2 text-sm text-muted">Survolez une zone pour la mettre en avant</p>
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
              className="flex flex-1 flex-col justify-center rounded-[22px] border border-[var(--line)] bg-surface p-5 transition"
              style={{
                borderColor: isActive ? zone.color : undefined,
                background: isActive ? zone.colorSoft : undefined,
              }}
            >
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: zone.color }} />
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-ivory">
                  {zone.label}
                </span>
              </div>
              <p className="display mt-3 text-2xl text-ivory">{zone.tagline}</p>
              <p className="mt-2 line-clamp-2 text-sm text-muted">{zone.description}</p>
            </Link>
          );
        })}
      </aside>
    </div>
  );
}
