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
      <div className="border border-[var(--line)] px-6 py-16 text-center text-cream-muted">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
      {properties.map((property, index) => (
        <PropertyCard key={property.id} property={property} priority={index < 3} />
      ))}
    </div>
  );
}
