import { NextResponse } from "next/server";
import { filterProperties } from "@/data/properties";
import type { PropertyCategory, PropertyStatus, ZoneId } from "@/types";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const zoneRaw = searchParams.get("zone");
  const zoneNum = zoneRaw ? Number(zoneRaw) : undefined;

  const results = filterProperties({
    category: (searchParams.get("category") as PropertyCategory | "all") || "all",
    district: searchParams.get("district") ?? undefined,
    zone:
      zoneNum === 1 || zoneNum === 2 || zoneNum === 3 || zoneNum === 4
        ? (zoneNum as ZoneId)
        : "all",
    status: (searchParams.get("status") as PropertyStatus | "all") || "all",
    q: searchParams.get("q") ?? undefined,
    minPrice: searchParams.get("minPrice")
      ? Number(searchParams.get("minPrice"))
      : undefined,
    maxPrice: searchParams.get("maxPrice")
      ? Number(searchParams.get("maxPrice"))
      : undefined,
  });

  return NextResponse.json({
    count: results.length,
    data: results,
  });
}
