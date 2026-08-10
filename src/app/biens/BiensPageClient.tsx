"use client";

import { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { PropertyFilters } from "@/components/properties/PropertyFilters";
import { PropertyGrid } from "@/components/properties/PropertyGrid";
import { RecentlyViewed } from "@/components/properties/RecentlyViewed";
import { filterProperties, getDistricts } from "@/data/properties";
import type { PropertyCategory, PropertyStatus, ZoneId } from "@/types";

function BiensCatalog() {
  const searchParams = useSearchParams();
  const zoneParam = searchParams.get("zone");
  const zoneNum = zoneParam ? Number(zoneParam) : undefined;

  const results = useMemo(() => {
    return filterProperties({
      category: (searchParams.get("category") as PropertyCategory | "all") || "all",
      district: searchParams.get("district") ?? undefined,
      zone:
        zoneNum === 1 || zoneNum === 2 || zoneNum === 3 || zoneNum === 4
          ? (zoneNum as ZoneId)
          : "all",
      status: (searchParams.get("status") as PropertyStatus | "all") || "all",
      q: searchParams.get("q") ?? undefined,
    });
  }, [searchParams, zoneNum]);

  return (
    <>
      <header className="mb-10 max-w-3xl md:mb-14">
        <p className="eyebrow">Catalogue</p>
        <h1 className="display mt-4 text-5xl text-ivory md:text-7xl">Propriétés</h1>
        <p className="mt-4 font-light text-muted">
          {results.length} résultat{results.length > 1 ? "s" : ""}. Astuce :{" "}
          <span className="text-green-soft">⌘K</span> pour chercher plus vite.
        </p>
      </header>

      <PropertyFilters districts={getDistricts()} />

      <div className="mt-10 md:mt-12">
        <PropertyGrid properties={results} />
      </div>
    </>
  );
}

export default function BiensPageClient() {
  return (
    <div className="pb-24 pt-28 md:pt-32">
      <div className="container-x">
        <Suspense fallback={<div className="mb-8 h-40 animate-pulse rounded-[18px] bg-panel" />}>
          <BiensCatalog />
        </Suspense>
      </div>

      <div className="mt-20">
        <RecentlyViewed />
      </div>
    </div>
  );
}
