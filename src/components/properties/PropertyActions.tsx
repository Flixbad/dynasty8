"use client";

import { useCompare } from "@/lib/compare";
import { useFavorites } from "@/lib/favorites";
import { useUI } from "@/lib/ui";

interface PropertyActionsProps {
  id: string;
  compact?: boolean;
}

export function PropertyActions({ id, compact = false }: PropertyActionsProps) {
  const { has: hasFav, toggle: toggleFav } = useFavorites();
  const { has: hasCompare, toggle: toggleCompare } = useCompare();
  const { showToast } = useUI();

  const fav = hasFav(id);
  const cmp = hasCompare(id);

  return (
    <div className="flex gap-1.5">
      <button
        type="button"
        aria-label={fav ? "Retirer des favoris" : "Ajouter aux favoris"}
        aria-pressed={fav}
        className={`flex items-center justify-center rounded-full transition ${
          compact
            ? "h-9 w-9 bg-void/55 text-sm backdrop-blur-md hover:bg-void/75"
            : "h-10 gap-2 border border-[var(--line)] px-4 text-xs font-bold uppercase tracking-[0.12em] hover:border-green/40"
        } ${fav ? "text-green-soft" : "text-ivory"}`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleFav(id);
          showToast(fav ? "Retiré des favoris" : "Ajouté aux favoris ♥");
        }}
      >
        {fav ? "♥" : "♡"}
        {!compact && <span>{fav ? "Favori" : "Favoris"}</span>}
      </button>
      <button
        type="button"
        aria-label={cmp ? "Retirer de la comparaison" : "Comparer"}
        aria-pressed={cmp}
        className={`flex items-center justify-center rounded-full transition ${
          compact
            ? "h-9 w-9 bg-void/55 text-sm backdrop-blur-md hover:bg-void/75"
            : "h-10 gap-2 border border-[var(--line)] px-4 text-xs font-bold uppercase tracking-[0.12em] hover:border-green/40"
        } ${cmp ? "text-green-soft" : "text-ivory"}`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          const res = toggleCompare(id);
          if (!res.ok && res.message) showToast(res.message);
          else showToast(cmp ? "Retiré du comparateur" : "Ajouté au comparateur");
        }}
      >
        ⇄
        {!compact && <span>{cmp ? "Comparé" : "Comparer"}</span>}
      </button>
    </div>
  );
}
