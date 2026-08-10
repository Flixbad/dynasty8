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
    <div className={`flex gap-2 ${compact ? "" : ""}`}>
      <button
        type="button"
        aria-label={fav ? "Retirer des favoris" : "Ajouter aux favoris"}
        aria-pressed={fav}
        className={`flex items-center justify-center transition ${
          compact
            ? "h-9 w-9 bg-ink/55 text-sm backdrop-blur-md hover:bg-ink/75"
            : "h-10 gap-2 border border-[var(--line)] px-3 text-xs uppercase tracking-[0.14em] hover:border-gold/40"
        } ${fav ? "text-gold-soft" : "text-cream"}`}
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
        className={`flex items-center justify-center transition ${
          compact
            ? "h-9 w-9 bg-ink/55 text-sm backdrop-blur-md hover:bg-ink/75"
            : "h-10 gap-2 border border-[var(--line)] px-3 text-xs uppercase tracking-[0.14em] hover:border-gold/40"
        } ${cmp ? "text-gold-soft" : "text-cream"}`}
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
