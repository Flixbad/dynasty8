import type { Metadata } from "next";
import { Suspense } from "react";
import { PropertyFilters } from "@/components/properties/PropertyFilters";
import { PropertyGrid } from "@/components/properties/PropertyGrid";
import { filterProperties, getDistricts } from "@/data/properties";
import type { PropertyCategory, PropertyStatus } from "@/types";

export const metadata: Metadata = {
  title: "Biens immobiliers",
  description: "Catalogue Dynasty8 — maisons, villas, appartements, entrepôts et garages à Los Santos.",
};

interface BiensPageProps {
  searchParams: Promise<{
    category?: string;
    district?: string;
    zone?: string;
    status?: string;
    q?: string;
  }>;
}

export default async function BiensPage({ searchParams }: BiensPageProps) {
  const params = await searchParams;
  const zoneParam = params.zone ? Number(params.zone) : undefined;
  const results = filterProperties({
    category: (params.category as PropertyCategory | "all") || "all",
    district: params.district,
    zone:
      zoneParam === 1 || zoneParam === 2 || zoneParam === 3 || zoneParam === 4
        ? zoneParam
        : "all",
    status: (params.status as PropertyStatus | "all") || "all",
    q: params.q,
  });

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-32 md:px-8">
      <header className="mb-10 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Catalogue</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl text-cream md:text-6xl">
          Nos biens
        </h1>
        <p className="mt-4 text-cream-muted">
          Filtrez par catégorie, quartier ou statut. {results.length} bien
          {results.length > 1 ? "s" : ""} trouvé{results.length > 1 ? "s" : ""}.
        </p>
      </header>

      <Suspense fallback={<div className="mb-8 h-28 animate-pulse bg-ink-elevated" />}>
        <PropertyFilters districts={getDistricts()} />
      </Suspense>

      <div className="mt-10">
        <PropertyGrid properties={results} />
      </div>
    </div>
  );
}
