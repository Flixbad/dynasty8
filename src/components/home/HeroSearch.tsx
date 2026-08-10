"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { categories } from "@/data/categories";
import { zones } from "@/data/zones";

export function HeroSearch() {
  const router = useRouter();
  const [category, setCategory] = useState("all");
  const [zone, setZone] = useState("all");
  const [q, setQ] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (category !== "all") params.set("category", category);
    if (zone !== "all") params.set("zone", zone);
    if (q.trim()) params.set("q", q.trim());
    router.push(`/biens?${params.toString()}`);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="search-glass reveal reveal-delay-4 grid w-full max-w-4xl gap-4 p-4 sm:p-5 md:grid-cols-[1.2fr_1fr_1fr_auto]"
    >
      <label className="flex flex-col gap-1.5 px-2">
        <span className="text-[0.65rem] uppercase tracking-[0.2em] text-cream-muted">Lieu</span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Rockford, Del Perro…"
          className="bg-transparent text-[0.95rem] text-cream outline-none placeholder:text-cream-muted/70"
        />
      </label>

      <label className="flex flex-col gap-1.5 border-t border-[var(--line)] px-2 pt-3 md:border-t-0 md:border-l md:pt-0 md:pl-4">
        <span className="text-[0.65rem] uppercase tracking-[0.2em] text-cream-muted">Type</span>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-transparent text-[0.95rem] text-cream outline-none"
        >
          <option value="all">Tous les biens</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.label}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1.5 border-t border-[var(--line)] px-2 pt-3 md:border-t-0 md:border-l md:pt-0 md:pl-4">
        <span className="text-[0.65rem] uppercase tracking-[0.2em] text-cream-muted">Zone</span>
        <select
          value={zone}
          onChange={(e) => setZone(e.target.value)}
          className="bg-transparent text-[0.95rem] text-cream outline-none"
        >
          <option value="all">Toute l&apos;île</option>
          {zones.map((z) => (
            <option key={z.id} value={String(z.id)}>
              {z.label}
            </option>
          ))}
        </select>
      </label>

      <button type="submit" className="btn-primary mt-1 w-full md:mt-0 md:min-w-[8.5rem]">
        Rechercher
      </button>
    </form>
  );
}
