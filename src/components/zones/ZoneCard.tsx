import Link from "next/link";
import type { PropertyCategory, ZoneMeta } from "@/types";
import { getCategoryLabel } from "@/lib/format";

interface ZoneCardProps {
  zone: ZoneMeta;
  propertyCount: number;
  categoryBreakdown: { category: PropertyCategory; count: number }[];
}

export function ZoneCard({ zone, propertyCount, categoryBreakdown }: ZoneCardProps) {
  return (
    <Link
      href={`/zones/${zone.slug}`}
      className="group relative block overflow-hidden border border-[var(--line)] bg-surface p-7 transition duration-400 hover:bg-surface-hover md:p-8"
      style={{ boxShadow: `inset 3px 0 0 ${zone.color}` }}
    >
      <div className="flex items-center gap-3">
        <span className="h-2 w-10 shrink-0" style={{ background: zone.color }} aria-hidden />
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-cream-muted">{zone.label}</p>
      </div>
      <h3 className="display mt-5 text-3xl text-cream transition-colors group-hover:text-gold-soft md:text-4xl">
        {zone.tagline}
      </h3>
      <p className="mt-4 text-sm font-light leading-relaxed text-cream-muted">{zone.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {categoryBreakdown.slice(0, 4).map((item) => (
          <span
            key={item.category}
            className="bg-ink/40 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-cream-muted"
          >
            {getCategoryLabel(item.category)} · {item.count}
          </span>
        ))}
      </div>

      <p className="mt-8 text-[0.7rem] uppercase tracking-[0.2em]" style={{ color: zone.color }}>
        {propertyCount} bien{propertyCount > 1 ? "s" : ""} →
      </p>
    </Link>
  );
}
