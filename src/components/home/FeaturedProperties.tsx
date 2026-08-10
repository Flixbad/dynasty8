import Link from "next/link";
import type { Property } from "@/types";
import { PropertyCard } from "@/components/properties/PropertyCard";

interface FeaturedPropertiesProps {
  properties: Property[];
}

export function FeaturedProperties({ properties }: FeaturedPropertiesProps) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Sélection</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-cream md:text-5xl">
            Biens d&apos;exception
          </h2>
        </div>
        <Link href="/biens" className="btn-ghost !py-3">
          Voir tout le catalogue
        </Link>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {properties.slice(0, 6).map((property, index) => (
          <PropertyCard key={property.id} property={property} priority={index < 2} />
        ))}
      </div>
    </section>
  );
}
