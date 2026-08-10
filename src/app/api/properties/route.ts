import { NextResponse } from "next/server";
import { filterProperties } from "@/data/properties";
import type { PropertyCategory, PropertyStatus } from "@/types";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const results = filterProperties({
    category: (searchParams.get("category") as PropertyCategory | "all") || "all",
    district: searchParams.get("district") ?? undefined,
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
