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
      className="search-glass grid w-full gap-3 p-3 sm:p-4 md:grid-cols-[1.3fr_1fr_1fr_auto] md:gap-0"
    >
      <label className="flex flex-col gap-1.5 px-3 py-2">
        <span className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-muted">Lieu</span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Rockford, Del Perro…"
          className="bg-transparent text-[0.95rem] text-ivory outline-none placeholder:text-muted/70"
        />
      </label>

      <label className="flex flex-col gap-1.5 border-t border-[var(--line)] px-3 py-2 md:border-l md:border-t-0">
        <span className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-muted">Type</span>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-transparent text-[0.95rem] text-ivory outline-none"
        >
          <option value="all">Tous les biens</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.label}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1.5 border-t border-[var(--line)] px-3 py-2 md:border-l md:border-t-0">
        <span className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-muted">Zone</span>
        <select
          value={zone}
          onChange={(e) => setZone(e.target.value)}
          className="bg-transparent text-[0.95rem] text-ivory outline-none"
        >
          <option value="all">Toute l&apos;île</option>
          {zones.map((z) => (
            <option key={z.id} value={String(z.id)}>
              {z.label}
            </option>
          ))}
        </select>
      </label>

      <div className="flex items-center p-1 md:pl-3">
        <button type="submit" className="btn-primary w-full md:min-w-[8.5rem]">
          Rechercher
        </button>
      </div>
    </form>
  );
}
