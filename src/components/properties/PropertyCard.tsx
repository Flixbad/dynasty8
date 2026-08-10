import Link from "next/link";
import type { Property } from "@/types";
import { getZone } from "@/data/zones";
import { formatArea, formatPrice, getCategoryLabel, getStatusLabel } from "@/lib/format";

interface PropertyCardProps {
  property: Property;
  priority?: boolean;
  variant?: "default" | "featured" | "compact";
}

export function PropertyCard({
  property,
  priority = false,
  variant = "default",
}: PropertyCardProps) {
  const zone = getZone(property.zone);
  const featured = variant === "featured";

  return (
    <article className={`group ${featured ? "h-full" : ""}`}>
      <Link
        href={`/biens/${property.slug}`}
        className={`relative block overflow-hidden bg-ink-elevated ${
          featured ? "h-full min-h-[28rem] md:min-h-[36rem]" : "aspect-[5/4]"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={property.image}
          alt={property.title}
          className="property-media absolute inset-0 h-full w-full object-cover"
          loading={priority ? "eager" : "lazy"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95" />

        <div className="absolute left-4 top-4 flex flex-wrap gap-2 md:left-5 md:top-5">
          {zone && (
            <span
              className="px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ink"
              style={{ background: zone.color }}
            >
              {zone.label}
            </span>
          )}
          <span className="bg-ink/55 px-2.5 py-1 text-[0.62rem] font-medium uppercase tracking-[0.16em] text-cream backdrop-blur-md">
            {getCategoryLabel(property.category)}
          </span>
        </div>

        <div
          className={`absolute inset-x-0 bottom-0 p-5 md:p-6 ${featured ? "md:p-8" : ""}`}
        >
          <p
            className={`display text-cream ${featured ? "text-4xl md:text-5xl" : "text-2xl md:text-[1.75rem]"}`}
          >
            {formatPrice(property.price)}
          </p>
          <h3
            className={`mt-2 font-medium leading-snug text-cream transition-colors group-hover:text-gold-soft ${
              featured ? "text-xl md:text-2xl" : "text-[1.05rem]"
            }`}
          >
            {property.title}
          </h3>
          <div className="listing-meta mt-3">
            <span>{property.district}</span>
            <span>{formatArea(property.area)}</span>
            {property.bedrooms !== undefined && <span>{property.bedrooms} ch.</span>}
            <span className={`status-${property.status}`}>{getStatusLabel(property.status)}</span>
          </div>
          {featured && (
            <p className="mt-4 max-w-lg text-sm font-light leading-relaxed text-cream-muted md:text-base">
              {property.description}
            </p>
          )}
        </div>
      </Link>
    </article>
  );
}
