import { NextResponse } from "next/server";
import { getPropertyById, getPropertyBySlug } from "@/data/properties";

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function GET(_request: Request, context: RouteContext) {
  const { id } = await context.params;
  const property = getPropertyById(id) ?? getPropertyBySlug(id);

  if (!property) {
    return NextResponse.json({ error: "Bien introuvable" }, { status: 404 });
  }

  return NextResponse.json({ data: property });
}
