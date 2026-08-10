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
            <p className="eyebrow">Sélection exclusive</p>
            <h2 className="display mt-4 text-4xl text-cream md:text-5xl lg:text-[3.5rem]">
              Propriétés d&apos;exception
            </h2>
          </div>
          <Link href="/biens" className="btn-link">
            Voir tout le catalogue
            <span aria-hidden>→</span>
          </Link>
        </Reveal>

        <div className="grid gap-4 md:gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={0.05}>
            <PropertyCard property={hero} priority variant="featured" />
          </Reveal>
          <div className="grid gap-4 md:gap-5 lg:col-span-5">
            {side.map((property, i) => (
              <Reveal key={property.id} delay={0.1 + i * 0.08}>
                <PropertyCard property={property} />
              </Reveal>
            ))}
          </div>
        </div>

        {grid.length > 0 && (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 md:mt-5 md:gap-5 lg:grid-cols-3">
            {grid.map((property, index) => (
              <Reveal key={property.id} delay={0.05 * index}>
                <PropertyCard property={property} priority={index === 0} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
