"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { formatPrice } from "@/lib/format";
import { categories } from "@/data/categories";
import { zones } from "@/data/zones";

const BASE: Record<string, number> = {
  maison: 420000,
  appartement: 380000,
  villa: 1800000,
  penthouse: 2500000,
  garage: 220000,
  entrepot: 650000,
  bureau: 480000,
  terrain: 150000,
};

const ZONE_MULT: Record<number, number> = {
  1: 0.72,
  2: 1.15,
  3: 1.55,
  4: 0.85,
};

export function EstimateCalculator() {
  const [category, setCategory] = useState("maison");
  const [zone, setZone] = useState(2);
  const [area, setArea] = useState(150);
  const [standing, setStanding] = useState(1);

  const estimate = useMemo(() => {
    const base = BASE[category] ?? 400000;
    const zoneM = ZONE_MULT[zone] ?? 1;
    const areaM = Math.max(0.55, Math.min(2.4, area / 140));
    return Math.round(base * zoneM * areaM * standing);
  }, [category, zone, area, standing]);

  const low = Math.round(estimate * 0.92);
  const high = Math.round(estimate * 1.08);

  return (
    <div className="border border-[var(--line)] bg-surface p-7 md:p-9 rounded-[22px]">
      <p className="eyebrow">Estimateur RP</p>
      <h3 className="display mt-3 text-3xl text-ivory">Valeur estimée</h3>
      <p className="mt-2 text-sm font-light text-cream-muted">
        Outil indicatif Dynasty8 pour budgéter votre prochain achat en jeu.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-[0.65rem] uppercase tracking-[0.18em] text-cream-muted">
          Type
          <select
            className="input-field"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.label}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2 text-[0.65rem] uppercase tracking-[0.18em] text-cream-muted">
          Zone
          <select
            className="input-field"
            value={zone}
            onChange={(e) => setZone(Number(e.target.value))}
          >
            {zones.map((z) => (
              <option key={z.id} value={z.id}>
                {z.label} — {z.tagline}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-6 flex flex-col gap-3 text-[0.65rem] uppercase tracking-[0.18em] text-cream-muted">
        Surface — {area} m²
        <input
          type="range"
          min={40}
          max={2000}
          step={10}
          value={area}
          onChange={(e) => setArea(Number(e.target.value))}
          className="accent-[var(--gold)]"
        />
      </label>

      <label className="mt-6 flex flex-col gap-3 text-[0.65rem] uppercase tracking-[0.18em] text-cream-muted">
        Standing
        <div className="grid grid-cols-3 gap-2">
          {[
            { v: 0.85, l: "Standard" },
            { v: 1, l: "Confort" },
            { v: 1.35, l: "Luxe" },
          ].map((opt) => (
            <button
              key={opt.l}
              type="button"
              onClick={() => setStanding(opt.v)}
              className={`border px-3 py-3 text-[0.7rem] uppercase tracking-[0.14em] transition ${
                standing === opt.v
                  ? "border-gold bg-gold/15 text-gold-soft"
                  : "border-[var(--line)] text-cream-muted hover:border-cream/30"
              }`}
            >
              {opt.l}
            </button>
          ))}
        </div>
      </label>

      <motion.div
        key={estimate}
        initial={{ opacity: 0.4, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-10 border-t border-[var(--line)] pt-8"
      >
        <p className="text-[0.65rem] uppercase tracking-[0.2em] text-cream-muted">Fourchette</p>
        <p className="display mt-2 text-4xl text-cream md:text-5xl">{formatPrice(estimate)}</p>
        <p className="mt-2 text-sm text-cream-muted">
          {formatPrice(low)} — {formatPrice(high)}
        </p>
      </motion.div>
    </div>
  );
}
