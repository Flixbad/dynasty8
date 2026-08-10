import type { Metadata } from "next";
import { ZonesMap } from "@/components/zones/ZonesMap";
import { ZoneCard } from "@/components/zones/ZoneCard";
import { getPropertiesByZone } from "@/data/properties";
import { groupPropertiesByCategoryCount, zones } from "@/data/zones";

export const metadata: Metadata = {
  title: "Zones San Andreas",
  description:
    "Découvrez les 4 zones Dynasty8 sur la carte de San Andreas et les biens immobiliers de chaque secteur.",
};

export default function ZonesPage() {
  return (
    <div className="pb-24 pt-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <header className="mb-12 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">San Andreas</p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl text-cream md:text-6xl">
            Découvrir les zones
          </h1>
          <p className="mt-4 text-lg text-cream-muted">
            Quatre secteurs Dynasty8 sur toute l&apos;île — du port de South Los Santos aux cimes
            de Mount Chiliad. Choisissez votre zone, explorez les biens.
          </p>
        </header>

        <ZonesMap />
      </div>

      <div className="gold-line mt-20" />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Catalogue par zone</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-cream">
            Que trouver dans chaque zone ?
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {zones.map((zone) => {
            const list = getPropertiesByZone(zone.id);
            return (
              <ZoneCard
                key={zone.id}
                zone={zone}
                propertyCount={list.length}
                categoryBreakdown={groupPropertiesByCategoryCount(list)}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
