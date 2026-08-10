"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { properties } from "@/data/properties";
import { useUI } from "@/lib/ui";
import { formatPrice, getCategoryLabel } from "@/lib/format";
import { getZone } from "@/data/zones";

export function CommandPalette() {
  const { commandOpen, setCommandOpen } = useUI();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (commandOpen) {
      setQuery("");
      const t = window.setTimeout(() => inputRef.current?.focus(), 40);
      return () => window.clearTimeout(t);
    }
  }, [commandOpen]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return properties.slice(0, 6);
    return properties
      .filter((p) => {
        const zone = getZone(p.zone);
        const hay = `${p.title} ${p.district} ${p.location} ${getCategoryLabel(p.category)} ${zone?.label ?? ""}`.toLowerCase();
        return hay.includes(q);
      })
      .slice(0, 8);
  }, [query]);

  return (
    <AnimatePresence>
      {commandOpen && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-start justify-center bg-void/70 px-4 pt-[14vh] backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setCommandOpen(false)}
        >
          <motion.div
            role="dialog"
            aria-label="Recherche Dynasty8"
            className="search-glass w-full max-w-xl overflow-hidden"
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-[var(--line)] px-5 py-4">
              <span className="text-green-soft">⌕</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Bien, quartier, zone…"
                className="w-full bg-transparent text-base text-ivory outline-none placeholder:text-muted"
              />
              <kbd className="rounded-full border border-[var(--line)] px-2 py-0.5 text-[0.65rem] text-muted">
                ESC
              </kbd>
            </div>

            <ul className="max-h-[50vh] overflow-auto py-2">
              {results.length === 0 && (
                <li className="px-5 py-8 text-center text-sm text-muted">Aucun résultat</li>
              )}
              {results.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/biens/${p.slug}`}
                    onClick={() => setCommandOpen(false)}
                    className="flex items-center gap-4 px-5 py-3 transition hover:bg-white/5"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.image} alt="" className="h-12 w-16 rounded-xl object-cover" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-ivory">{p.title}</p>
                      <p className="truncate text-xs text-muted">
                        {p.district} · {getCategoryLabel(p.category)}
                      </p>
                    </div>
                    <p className="shrink-0 text-sm text-green-soft">{formatPrice(p.price)}</p>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between border-t border-[var(--line)] px-5 py-3 text-[0.65rem] text-muted">
              <span>Ctrl / ⌘ + K</span>
              <Link href="/biens" onClick={() => setCommandOpen(false)} className="text-green-soft">
                Catalogue →
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
