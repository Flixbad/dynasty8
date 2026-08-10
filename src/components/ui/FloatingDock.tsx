"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useCompare } from "@/lib/compare";
import { useFavorites } from "@/lib/favorites";
import { useUI } from "@/lib/ui";
import { properties } from "@/data/properties";
import { formatPrice } from "@/lib/format";

export function FloatingDock() {
  const { ids: favIds } = useFavorites();
  const { ids: compareIds, remove, clear } = useCompare();
  const { setCommandOpen } = useUI();

  const compareItems = properties.filter((p) => compareIds.includes(p.id));

  return (
    <>
      <div className="fixed bottom-5 left-1/2 z-[70] flex -translate-x-1/2 items-center gap-2">
        <div className="search-glass flex items-center gap-1 p-1.5">
          <button
            type="button"
            onClick={() => setCommandOpen(true)}
            className="flex h-11 items-center gap-2 px-4 text-xs uppercase tracking-[0.16em] text-cream-muted transition hover:text-cream"
            aria-label="Ouvrir la recherche"
          >
            <span aria-hidden>⌕</span>
            <span className="hidden sm:inline">Recherche</span>
            <kbd className="ml-1 hidden rounded border border-[var(--line)] px-1.5 py-0.5 text-[0.6rem] md:inline">
              ⌘K
            </kbd>
          </button>
          <span className="h-5 w-px bg-[var(--line)]" />
          <Link
            href="/favoris"
            className="relative flex h-11 items-center gap-2 px-4 text-xs uppercase tracking-[0.16em] text-cream-muted transition hover:text-cream"
          >
            ♥
            <span className="hidden sm:inline">Favoris</span>
            {favIds.length > 0 && (
              <span className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center bg-gold px-1 text-[0.6rem] font-semibold text-ink">
                {favIds.length}
              </span>
            )}
          </Link>
          <span className="h-5 w-px bg-[var(--line)]" />
          <Link
            href="/comparer"
            className="relative flex h-11 items-center gap-2 px-4 text-xs uppercase tracking-[0.16em] text-cream-muted transition hover:text-cream"
          >
            ⇄
            <span className="hidden sm:inline">Comparer</span>
            {compareIds.length > 0 && (
              <span className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center bg-gold px-1 text-[0.6rem] font-semibold text-ink">
                {compareIds.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {compareItems.length > 0 && (
          <motion.div
            className="fixed inset-x-0 bottom-20 z-[69] px-4 md:bottom-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="search-glass mx-auto flex max-w-3xl flex-col gap-3 p-3 sm:flex-row sm:items-center">
              <div className="flex flex-1 gap-2 overflow-x-auto">
                {compareItems.map((p) => (
                  <div key={p.id} className="flex min-w-[9rem] items-center gap-2 bg-ink/40 p-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.image} alt="" className="h-10 w-12 object-cover" />
                    <div className="min-w-0">
                      <p className="truncate text-xs text-cream">{p.title.split("—")[0]}</p>
                      <p className="text-[0.65rem] text-gold-soft">{formatPrice(p.price)}</p>
                    </div>
                    <button
                      type="button"
                      aria-label="Retirer"
                      className="text-cream-muted hover:text-cream"
                      onClick={() => remove(p.id)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={clear} className="btn-ghost !px-3 !py-2 text-[0.65rem]">
                  Vider
                </button>
                <Link href="/comparer" className="btn-primary !px-3 !py-2 text-[0.65rem]">
                  Comparer
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
