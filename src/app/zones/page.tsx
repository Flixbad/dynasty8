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
    <div className="pb-24 pt-32 md:pt-36">
      <div className="container-x">
        <header className="mb-12 max-w-2xl md:mb-16">
          <p className="eyebrow">San Andreas</p>
          <h1 className="display mt-4 text-5xl text-cream md:text-6xl">Découvrir les zones</h1>
          <p className="mt-4 font-light text-lg text-cream-muted">
            Quatre secteurs Dynasty8 — du port de South Los Santos aux cimes de Mount Chiliad.
          </p>
        </header>

        <ZonesMap />
      </div>

      <section className="container-x section-y !pb-0">
        <div className="mb-10 md:mb-14">
          <p className="eyebrow">Catalogue par zone</p>
          <h2 className="display mt-4 text-4xl text-cream md:text-5xl">
            Que trouver dans chaque zone ?
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
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
