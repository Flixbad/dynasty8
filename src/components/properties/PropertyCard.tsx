"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Property } from "@/types";
import { getZone } from "@/data/zones";
import { formatArea, formatPrice, getCategoryLabel, getStatusLabel } from "@/lib/format";
import { PropertyActions } from "./PropertyActions";

interface PropertyCardProps {
  property: Property;
  priority?: boolean;
  variant?: "default" | "featured" | "compact" | "marquee";
}

export function PropertyCard({
  property,
  priority = false,
  variant = "default",
}: PropertyCardProps) {
  const zone = getZone(property.zone);
  const featured = variant === "featured";
  const marquee = variant === "marquee";

  return (
    <motion.article
      className={`group relative ${featured ? "h-full" : ""} ${marquee ? "w-[78vw] max-w-[420px] shrink-0 sm:w-[380px]" : ""}`}
      whileHover={{ y: marquee ? 0 : -6 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute right-3 top-3 z-20">
        <PropertyActions id={property.id} compact />
      </div>

      <Link
        href={`/biens/${property.slug}`}
        className={`relative block overflow-hidden rounded-[22px] bg-panel ${
          featured ? "h-full min-h-[30rem] md:min-h-[38rem]" : marquee ? "aspect-[4/5]" : "aspect-[5/4]"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={property.image}
          alt={property.title}
          className="property-media absolute inset-0 h-full w-full object-cover"
          loading={priority ? "eager" : "lazy"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/25 to-transparent" />

        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {zone && (
            <span
              className="rounded-full px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-void"
              style={{ background: zone.color }}
            >
              {zone.label}
            </span>
          )}
          <span className="rounded-full bg-void/50 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-ivory backdrop-blur-md">
            {getCategoryLabel(property.category)}
          </span>
        </div>

        <div className={`absolute inset-x-0 bottom-0 p-4 md:p-5 ${featured ? "md:p-7" : ""}`}>
          <p className={`display text-ivory ${featured ? "text-4xl md:text-5xl" : "text-2xl"}`}>
            {formatPrice(property.price)}
          </p>
          <h3
            className={`mt-2 font-semibold leading-snug text-ivory transition group-hover:text-green-soft ${
              featured ? "text-xl md:text-2xl" : "text-[1rem]"
            }`}
          >
            {property.title}
          </h3>
          <div className="listing-meta mt-2.5">
            <span>{property.district}</span>
            <span>{formatArea(property.area)}</span>
            {property.bedrooms !== undefined && <span>{property.bedrooms} ch.</span>}
            <span className={`status-${property.status}`}>{getStatusLabel(property.status)}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
