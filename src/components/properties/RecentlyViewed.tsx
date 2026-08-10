"use client";

import Link from "next/link";
import { properties } from "@/data/properties";
import { useRecent } from "@/lib/recent";
import { formatPrice } from "@/lib/format";
import { Reveal } from "@/components/motion/Reveal";

export function RecentlyViewed() {
  const { ids } = useRecent();
  const list = ids
    .map((id) => properties.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .slice(0, 4);

  if (list.length === 0) return null;

  return (
    <Reveal className="container-x pb-16">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="eyebrow">Continuer</p>
          <h2 className="display mt-2 text-3xl text-cream">Récemment consultés</h2>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((p) => (
          <Link
            key={p.id}
            href={`/biens/${p.slug}`}
            className="group flex gap-3 border border-[var(--line)] bg-surface p-2 transition hover:bg-surface-hover"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.image} alt="" className="h-16 w-20 object-cover" />
            <div className="min-w-0 py-1">
              <p className="truncate text-sm text-cream group-hover:text-gold-soft">{p.title}</p>
              <p className="mt-1 text-xs text-cream-muted">{formatPrice(p.price)}</p>
            </div>
          </Link>
        ))}
      </div>
    </Reveal>
  );
}
