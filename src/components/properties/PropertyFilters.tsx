"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { categories } from "@/data/categories";

interface PropertyFiltersProps {
  districts: string[];
}

export function PropertyFilters({ districts }: PropertyFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const update = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (!value || value === "all") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
      router.push(`/biens?${params.toString()}`);
    },
    [router, searchParams],
  );

  return (
    <div className="grid gap-4 border border-[var(--line)] bg-ink-soft/50 p-5 md:grid-cols-4">
      <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-cream-muted">
        Recherche
        <input
          className="input-field normal-case tracking-normal"
          placeholder="Quartier, titre..."
          defaultValue={searchParams.get("q") ?? ""}
          onChange={(e) => {
            const value = e.target.value;
            const params = new URLSearchParams(searchParams.toString());
            if (value) params.set("q", value);
            else params.delete("q");
            router.push(`/biens?${params.toString()}`);
          }}
        />
      </label>

      <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-cream-muted">
        Catégorie
        <select
          className="input-field"
          value={searchParams.get("category") ?? "all"}
          onChange={(e) => update("category", e.target.value)}
        >
          <option value="all">Toutes</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.label}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-cream-muted">
        Quartier
        <select
          className="input-field"
          value={searchParams.get("district") ?? ""}
          onChange={(e) => update("district", e.target.value)}
        >
          <option value="">Tous</option>
          {districts.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-cream-muted">
        Statut
        <select
          className="input-field"
          value={searchParams.get("status") ?? "all"}
          onChange={(e) => update("status", e.target.value)}
        >
          <option value="all">Tous</option>
          <option value="disponible">Disponible</option>
          <option value="reserve">Réservé</option>
          <option value="vendu">Vendu</option>
        </select>
      </label>
    </div>
  );
}
