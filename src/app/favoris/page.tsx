"use client";

import Link from "next/link";
import { properties } from "@/data/properties";
import { useFavorites } from "@/lib/favorites";
import { PropertyGrid } from "@/components/properties/PropertyGrid";

export default function FavorisPage() {
  const { ids, clear } = useFavorites();
  const list = properties.filter((p) => ids.includes(p.id));

  return (
    <div className="container-x pb-24 pt-32 md:pt-36">
      <header className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
        <div>
          <p className="eyebrow">Sélection personnelle</p>
          <h1 className="display mt-4 text-5xl text-cream md:text-6xl">Favoris</h1>
          <p className="mt-4 font-light text-cream-muted">
            {list.length} bien{list.length > 1 ? "s" : ""} sauvegardé{list.length > 1 ? "s" : ""}{" "}
            sur cet appareil.
          </p>
        </div>
        <div className="flex gap-3">
          {list.length > 0 && (
            <button type="button" onClick={clear} className="btn-ghost">
              Tout retirer
            </button>
          )}
          <Link href="/biens" className="btn-primary">
            Catalogue
          </Link>
        </div>
      </header>

      <PropertyGrid
        properties={list}
        emptyMessage="Aucun favori pour l'instant — cliquez sur ♥ sur une fiche bien."
      />
    </div>
  );
}
