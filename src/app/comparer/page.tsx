"use client";

import Link from "next/link";
import { properties } from "@/data/properties";
import { useCompare } from "@/lib/compare";
import { formatArea, formatPrice, getCategoryLabel, getStatusLabel } from "@/lib/format";
import { getZone } from "@/data/zones";
import type { Property } from "@/types";

type Row = { label: string; get: (p: Property) => string };

const rows: Row[] = [
  { label: "Prix", get: (p) => formatPrice(p.price) },
  { label: "Type", get: (p) => getCategoryLabel(p.category) },
  { label: "Zone", get: (p) => getZone(p.zone)?.label ?? "—" },
  { label: "Quartier", get: (p) => p.district },
  { label: "Surface", get: (p) => formatArea(p.area) },
  { label: "Chambres", get: (p) => (p.bedrooms != null ? String(p.bedrooms) : "—") },
  { label: "SDB", get: (p) => (p.bathrooms != null ? String(p.bathrooms) : "—") },
  { label: "Parking", get: (p) => (p.parking != null ? String(p.parking) : "—") },
  { label: "Statut", get: (p) => getStatusLabel(p.status) },
];

export default function ComparerPage() {
  const { ids, clear, remove } = useCompare();
  const list = properties.filter((p) => ids.includes(p.id));

  return (
    <div className="container-x pb-24 pt-32 md:pt-36">
      <header className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
        <div>
          <p className="eyebrow">Aide à la décision</p>
          <h1 className="display mt-4 text-5xl text-cream md:text-6xl">Comparer</h1>
          <p className="mt-4 font-light text-cream-muted">
            Jusqu&apos;à 3 biens côte à côte — prix, surface, zone, standing.
          </p>
        </div>
        <div className="flex gap-3">
          {list.length > 0 && (
            <button type="button" onClick={clear} className="btn-ghost">
              Vider
            </button>
          )}
          <Link href="/biens" className="btn-primary">
            Ajouter des biens
          </Link>
        </div>
      </header>

      {list.length === 0 ? (
        <div className="py-20 text-center">
          <p className="display text-3xl text-cream">Rien à comparer</p>
          <p className="mt-3 text-cream-muted">
            Utilisez le bouton ⇄ sur les fiches pour constituer votre sélection.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr>
                <th className="w-36 p-3 text-[0.65rem] uppercase tracking-[0.18em] text-cream-muted" />
                {list.map((p) => (
                  <th key={p.id} className="p-3 align-top">
                    <div className="relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.image} alt="" className="aspect-[4/3] w-full object-cover" />
                      <button
                        type="button"
                        className="absolute right-2 top-2 bg-ink/70 px-2 py-1 text-xs text-cream"
                        onClick={() => remove(p.id)}
                      >
                        ✕
                      </button>
                      <Link
                        href={`/biens/${p.slug}`}
                        className="display mt-3 block text-xl text-cream hover:text-gold-soft"
                      >
                        {p.title}
                      </Link>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm">
              {rows.map((row) => (
                <tr key={row.label} className="border-t border-[var(--line)]">
                  <td className="p-3 text-[0.65rem] uppercase tracking-[0.16em] text-cream-muted">
                    {row.label}
                  </td>
                  {list.map((p) => (
                    <td key={p.id} className="p-3 text-cream">
                      {row.get(p)}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t border-[var(--line)]">
                <td className="p-3 text-[0.65rem] uppercase tracking-[0.16em] text-cream-muted">
                  Atouts
                </td>
                {list.map((p) => (
                  <td key={p.id} className="p-3 text-cream-muted">
                    {p.features.slice(0, 4).join(" · ")}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
