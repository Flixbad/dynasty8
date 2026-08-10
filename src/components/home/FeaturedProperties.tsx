import Link from "next/link";
import type { Property } from "@/types";
import { PropertyCard } from "@/components/properties/PropertyCard";

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
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
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
        </div>

        <div className="grid gap-4 md:gap-5 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <PropertyCard property={hero} priority variant="featured" />
          </div>
          <div className="grid gap-4 md:gap-5 lg:col-span-5">
            {side.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>

        {grid.length > 0 && (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 md:mt-5 md:gap-5 lg:grid-cols-3">
            {grid.map((property, index) => (
              <PropertyCard key={property.id} property={property} priority={index === 0} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
