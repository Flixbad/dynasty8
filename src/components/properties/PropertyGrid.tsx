import type { Property } from "@/types";
import { PropertyCard } from "./PropertyCard";

interface PropertyGridProps {
  properties: Property[];
  emptyMessage?: string;
}

export function PropertyGrid({
  properties,
  emptyMessage = "Aucun bien ne correspond à votre recherche.",
}: PropertyGridProps) {
  if (properties.length === 0) {
    return (
      <div className="px-2 py-20 text-center">
        <p className="display text-3xl text-cream">Aucun résultat</p>
        <p className="mt-3 text-cream-muted">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
      {properties.map((property, index) => (
        <PropertyCard key={property.id} property={property} priority={index < 3} />
      ))}
    </div>
  );
}
