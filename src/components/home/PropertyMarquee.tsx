"use client";

import Link from "next/link";
import type { Property } from "@/types";
import { PropertyCard } from "@/components/properties/PropertyCard";

interface PropertyMarqueeProps {
  properties: Property[];
}

export function PropertyMarquee({ properties }: PropertyMarqueeProps) {
  const loop = [...properties, ...properties];

  return (
    <section className="overflow-hidden py-10 md:py-14">
      <div className="container-x mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Runway</p>
          <h2 className="display mt-3 text-4xl text-ivory md:text-5xl">Défilement live</h2>
        </div>
        <Link href="/biens" className="btn-link shrink-0">
          Catalogue <span aria-hidden>→</span>
        </Link>
      </div>
      <div className="marquee gap-4 px-4">
        {loop.map((property, i) => (
          <PropertyCard
            key={`${property.id}-${i}`}
            property={property}
            variant="marquee"
            priority={i < 2}
          />
        ))}
      </div>
    </section>
  );
}
