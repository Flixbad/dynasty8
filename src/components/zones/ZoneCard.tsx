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
      className="group relative block overflow-hidden rounded-[24px] border border-[var(--line)] bg-surface p-7 transition hover:bg-surface-hover md:p-8"
      style={{ boxShadow: `inset 4px 0 0 ${zone.color}` }}
    >
      <div className="flex items-center gap-3">
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: zone.color }} />
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-muted">{zone.label}</p>
      </div>
      <h3 className="display mt-5 text-3xl text-ivory transition group-hover:text-green-soft md:text-4xl">
        {zone.tagline}
      </h3>
      <p className="mt-4 text-sm font-light leading-relaxed text-muted">{zone.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {categoryBreakdown.slice(0, 4).map((item) => (
          <span
            key={item.category}
            className="rounded-full bg-white/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-muted"
          >
            {getCategoryLabel(item.category)} · {item.count}
          </span>
        ))}
      </div>
      <p className="mt-8 text-[0.7rem] font-bold uppercase tracking-[0.18em]" style={{ color: zone.color }}>
        {propertyCount} bien{propertyCount > 1 ? "s" : ""} →
      </p>
    </Link>
  );
}
