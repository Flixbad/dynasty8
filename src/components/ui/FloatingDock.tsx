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
      <div className="fixed bottom-5 left-1/2 z-[70] flex -translate-x-1/2 items-center">
        <div className="nav-pill flex items-center gap-1 rounded-full p-1.5">
          <button
            type="button"
            onClick={() => setCommandOpen(true)}
            className="flex h-11 items-center gap-2 rounded-full px-4 text-xs font-bold uppercase tracking-[0.12em] text-muted transition hover:bg-white/5 hover:text-ivory"
          >
            ⌕ <span className="hidden sm:inline">Search</span>
          </button>
          <Link
            href="/favoris"
            className="relative flex h-11 items-center gap-2 rounded-full px-4 text-xs font-bold uppercase tracking-[0.12em] text-muted transition hover:bg-white/5 hover:text-ivory"
          >
            ♥ <span className="hidden sm:inline">Fav</span>
            {favIds.length > 0 && (
              <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-green px-1 text-[0.58rem] font-bold text-void">
                {favIds.length}
              </span>
            )}
          </Link>
          <Link
            href="/comparer"
            className="relative flex h-11 items-center gap-2 rounded-full px-4 text-xs font-bold uppercase tracking-[0.12em] text-muted transition hover:bg-white/5 hover:text-ivory"
          >
            ⇄ <span className="hidden sm:inline">Compare</span>
            {compareIds.length > 0 && (
              <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-green px-1 text-[0.58rem] font-bold text-void">
                {compareIds.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {compareItems.length > 0 && (
          <motion.div
            className="fixed inset-x-0 bottom-[4.75rem] z-[69] px-4 md:bottom-24"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
          >
            <div className="search-glass mx-auto flex max-w-3xl flex-col gap-3 p-3 sm:flex-row sm:items-center">
              <div className="flex flex-1 gap-2 overflow-x-auto">
                {compareItems.map((p) => (
                  <div
                    key={p.id}
                    className="flex min-w-[9rem] items-center gap-2 rounded-2xl bg-white/5 p-2"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.image} alt="" className="h-10 w-12 rounded-lg object-cover" />
                    <div className="min-w-0">
                      <p className="truncate text-xs text-ivory">{p.title.split("—")[0]}</p>
                      <p className="text-[0.65rem] text-green-soft">{formatPrice(p.price)}</p>
                    </div>
                    <button
                      type="button"
                      className="text-muted hover:text-ivory"
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
