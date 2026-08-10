import type { Metadata } from "next";
import { Suspense } from "react";
import { PropertyFilters } from "@/components/properties/PropertyFilters";
import { PropertyGrid } from "@/components/properties/PropertyGrid";
import { RecentlyViewed } from "@/components/properties/RecentlyViewed";
import { filterProperties, getDistricts } from "@/data/properties";
import type { PropertyCategory, PropertyStatus } from "@/types";

export const metadata: Metadata = {
  title: "Propriétés",
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
    <div className="pb-24 pt-28 md:pt-32">
      <div className="container-x">
        <header className="mb-10 max-w-3xl md:mb-14">
          <p className="eyebrow">Catalogue</p>
          <h1 className="display mt-4 text-5xl text-ivory md:text-7xl">
            Propriétés
          </h1>
          <p className="mt-4 font-light text-muted">
            {results.length} résultat{results.length > 1 ? "s" : ""}. Astuce :{" "}
            <span className="text-green-soft">⌘K</span> pour chercher plus vite.
          </p>
        </header>

        <Suspense fallback={<div className="mb-8 h-24 animate-pulse rounded-[18px] bg-panel" />}>
          <PropertyFilters districts={getDistricts()} />
        </Suspense>

        <div className="mt-10 md:mt-12">
          <PropertyGrid properties={results} />
        </div>
      </div>

      <div className="mt-20">
        <RecentlyViewed />
      </div>
    </div>
  );
}
