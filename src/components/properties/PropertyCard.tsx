import Link from "next/link";
import type { Property } from "@/types";
import { formatArea, formatPrice, getCategoryLabel, getStatusLabel } from "@/lib/format";

interface PropertyCardProps {
  property: Property;
  priority?: boolean;
}

export function PropertyCard({ property, priority = false }: PropertyCardProps) {
  return (
    <article className="group flex flex-col">
      <Link href={`/biens/${property.slug}`} className="relative block overflow-hidden">
        <div className="aspect-[4/3] overflow-hidden bg-ink-elevated">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={property.image}
            alt={property.title}
            className="property-media h-full w-full object-cover"
            loading={priority ? "eager" : "lazy"}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-80" />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="bg-ink/70 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-gold-soft backdrop-blur-sm">
            {getCategoryLabel(property.category)}
          </span>
          <span
            className={`bg-ink/70 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.18em] backdrop-blur-sm status-${property.status}`}
          >
            {getStatusLabel(property.status)}
          </span>
        </div>
        <p className="absolute bottom-4 left-4 font-[family-name:var(--font-display)] text-2xl text-cream">
          {formatPrice(property.price)}
        </p>
      </Link>

      <div className="flex flex-1 flex-col border border-t-0 border-[var(--line)] bg-ink-soft/60 px-4 py-5">
        <Link href={`/biens/${property.slug}`}>
          <h3 className="font-[family-name:var(--font-display)] text-xl leading-snug text-cream transition-colors group-hover:text-gold-soft">
            {property.title}
          </h3>
        </Link>
        <p className="mt-2 text-sm text-cream-muted">
          {property.district} · {formatArea(property.area)}
          {property.bedrooms ? ` · ${property.bedrooms} ch.` : ""}
        </p>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-cream-muted/90">
          {property.description}
        </p>
        <Link
          href={`/biens/${property.slug}`}
          className="mt-5 text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-soft"
        >
          Voir le bien →
        </Link>
      </div>
    </article>
  );
}
