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
    <div className="pb-24 pt-28 md:pt-32">
      <div className="container-x">
        <header className="mb-12 max-w-3xl md:mb-16">
          <p className="eyebrow">San Andreas</p>
          <h1 className="display mt-4 text-5xl text-ivory md:text-7xl">
            Quatre zones.
            <br />
            <span className="text-green">Une île.</span>
          </h1>
          <p className="mt-5 max-w-xl font-light text-lg text-muted">
            Du port de South Los Santos aux cimes de Mount Chiliad — choisissez votre secteur.
          </p>
        </header>

        <ZonesMap />
      </div>

      <section className="container-x section-y !pb-0">
        <div className="mb-10 md:mb-14">
          <p className="eyebrow">Catalogue</p>
          <h2 className="display mt-3 text-4xl text-ivory md:text-5xl">
            Que trouver où ?
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
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
