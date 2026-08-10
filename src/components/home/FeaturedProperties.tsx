"use client";

import Link from "next/link";
import type { Property } from "@/types";
import { PropertyCard } from "@/components/properties/PropertyCard";
import { Reveal } from "@/components/motion/Reveal";

interface FeaturedPropertiesProps {
  properties: Property[];
}

export function FeaturedProperties({ properties }: FeaturedPropertiesProps) {
  const [hero, ...rest] = properties;
  const side = rest.slice(0, 2);
  const grid = rest.slice(2, 5);

  if (!hero) return null;

  return (
    <section className="section-y">
      <div className="container-x">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Sélection</p>
            <h2 className="display mt-3 text-4xl text-ivory md:text-6xl">
              Exception
              <br />
              <span className="text-green">Los Santos</span>
            </h2>
          </div>
          <Link href="/biens" className="btn-ghost">
            Tout voir
          </Link>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
          <Reveal className="lg:col-span-7">
            <PropertyCard property={hero} priority variant="featured" />
          </Reveal>
          <div className="grid gap-4 lg:col-span-5 lg:gap-5">
            {side.map((p, i) => (
              <Reveal key={p.id} delay={0.08 + i * 0.06}>
                <PropertyCard property={p} />
              </Reveal>
            ))}
          </div>
        </div>

        {grid.length > 0 && (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {grid.map((p, i) => (
              <Reveal key={p.id} delay={0.04 * i}>
                <PropertyCard property={p} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
