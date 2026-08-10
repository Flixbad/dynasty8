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
    <div className="pb-24 pt-32 md:pt-36">
      <div className="relative overflow-hidden border-b border-[var(--line)]">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: `radial-gradient(ellipse at 30% 40%, ${zone.colorSoft}, transparent 55%)`,
          }}
        />
        <div className="relative container-x py-14 md:py-16">
          <Link href="/zones" className="btn-link !normal-case !tracking-normal !text-cream-muted">
            ← Toutes les zones
          </Link>
          <div className="mt-8 flex items-center gap-3">
            <span className="h-2 w-12" style={{ background: zone.color }} aria-hidden />
            <p className="text-[0.7rem] uppercase tracking-[0.25em] text-cream-muted">{zone.label}</p>
          </div>
          <h1 className="display mt-4 text-5xl text-cream md:text-6xl">{zone.tagline}</h1>
          <p className="mt-5 max-w-2xl font-light text-lg text-cream-muted">{zone.description}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {zone.highlights.map((h) => (
              <span
                key={h}
                className="bg-surface px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.14em] text-cream-muted"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container-x py-14">
        <div className="mb-10 grid gap-8 lg:grid-cols-[1fr_260px]">
          <div>
            <p className="eyebrow">Biens en {zone.label}</p>
            <h2 className="display mt-3 text-4xl text-cream">
              {list.length} bien{list.length > 1 ? "s" : ""}
            </h2>
          </div>

          <div className="border border-[var(--line)] bg-surface p-5">
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-cream-muted">
              Par catégorie
            </p>
            <ul className="mt-4 space-y-2.5">
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
                style={{ borderColor: `${z.color}66` }}
              >
                {z.label}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
