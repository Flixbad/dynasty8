import Link from "next/link";
import type { ZoneMeta } from "@/types";
import { getCategoryLabel } from "@/lib/format";
import type { PropertyCategory } from "@/types";

interface ZoneCardProps {
  zone: ZoneMeta;
  propertyCount: number;
  categoryBreakdown: { category: PropertyCategory; count: number }[];
}

export function ZoneCard({ zone, propertyCount, categoryBreakdown }: ZoneCardProps) {
  return (
    <Link
      href={`/zones/${zone.slug}`}
      className="group relative flex flex-col overflow-hidden border border-[var(--line)] bg-ink-soft/50 transition duration-400 hover:border-transparent"
      style={{ boxShadow: `inset 3px 0 0 ${zone.color}` }}
    >
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `linear-gradient(135deg, ${zone.colorSoft}, transparent 60%)` }}
      />
      <div className="relative p-6 md:p-7">
        <div className="flex items-center gap-3">
          <span
            className="h-3 w-10 shrink-0"
            style={{ background: zone.color }}
            aria-hidden
          />
          <p className="text-xs uppercase tracking-[0.28em] text-cream-muted">{zone.label}</p>
        </div>
        <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-cream group-hover:text-gold-soft">
          {zone.tagline}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-cream-muted">{zone.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {categoryBreakdown.slice(0, 4).map((item) => (
            <span
              key={item.category}
              className="border border-[var(--line)] px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-cream-muted"
            >
              {getCategoryLabel(item.category)} · {item.count}
            </span>
          ))}
        </div>

        <p className="mt-6 text-xs uppercase tracking-[0.22em]" style={{ color: zone.color }}>
          {propertyCount} bien{propertyCount > 1 ? "s" : ""} →
        </p>
      </div>
    </Link>
  );
}
