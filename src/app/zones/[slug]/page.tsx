import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PropertyGrid } from "@/components/properties/PropertyGrid";
import { getPropertiesByZone } from "@/data/properties";
import { getZoneBySlug, groupPropertiesByCategoryCount, zones } from "@/data/zones";
import { getCategoryLabel } from "@/lib/format";
import type { ZoneId } from "@/types";

interface ZonePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return zones.map((z) => ({ slug: z.slug }));
}

export async function generateMetadata({ params }: ZonePageProps): Promise<Metadata> {
  const { slug } = await params;
  const zone = getZoneBySlug(slug);
  if (!zone) return { title: "Zone" };
  return {
    title: `${zone.label} — ${zone.tagline}`,
    description: zone.description,
  };
}

export default async function ZoneDetailPage({ params }: ZonePageProps) {
  const { slug } = await params;
  const zone = getZoneBySlug(slug);
  if (!zone) notFound();

  const list = getPropertiesByZone(zone.id as ZoneId);
  const breakdown = groupPropertiesByCategoryCount(list);

  return (
    <div className="pb-24 pt-32">
      <div className="relative overflow-hidden border-b border-[var(--line)]">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(ellipse at 30% 40%, ${zone.colorSoft}, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(201,162,39,0.08), transparent 40%)`,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8">
          <Link
            href="/zones"
            className="text-xs uppercase tracking-[0.2em] text-cream-muted hover:text-gold"
          >
            ← Toutes les zones
          </Link>
          <div className="mt-6 flex items-center gap-3">
            <span className="h-3 w-12" style={{ background: zone.color }} aria-hidden />
            <p className="text-xs uppercase tracking-[0.3em] text-cream-muted">{zone.label}</p>
          </div>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl text-cream md:text-6xl">
            {zone.tagline}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-cream-muted">{zone.description}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {zone.highlights.map((h) => (
              <span
                key={h}
                className="border border-[var(--line)] px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-cream-muted"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="mb-10 grid gap-8 lg:grid-cols-[1fr_280px]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Biens en {zone.label}</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-cream">
              {list.length} bien{list.length > 1 ? "s" : ""} disponible
              {list.length > 1 ? "s" : ""}
            </h2>
          </div>

          <div className="border border-[var(--line)] bg-ink-soft/50 p-5">
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-cream-muted">
              Par catégorie
            </p>
            <ul className="mt-4 space-y-2">
              {breakdown.length === 0 && (
                <li className="text-sm text-cream-muted">Aucun bien pour l&apos;instant.</li>
              )}
              {breakdown.map((item) => (
                <li
                  key={item.category}
                  className="flex items-center justify-between text-sm text-cream"
                >
                  <span>{getCategoryLabel(item.category)}</span>
                  <span style={{ color: zone.color }}>{item.count}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[0.65rem] uppercase tracking-[0.18em] text-cream-muted">
              Quartiers
            </p>
            <p className="mt-2 text-sm leading-relaxed text-cream-muted">
              {zone.districts.slice(0, 8).join(" · ")}
              {zone.districts.length > 8 ? "…" : ""}
            </p>
          </div>
        </div>

        <PropertyGrid
          properties={list}
          emptyMessage={`Aucun bien listé en ${zone.label} pour le moment.`}
        />

        <div className="mt-14 flex flex-wrap gap-3">
          {zones
            .filter((z) => z.id !== zone.id)
            .map((z) => (
              <Link
                key={z.id}
                href={`/zones/${z.slug}`}
                className="btn-ghost !py-3"
                style={{ borderColor: `${z.color}55` }}
              >
                {z.label}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
