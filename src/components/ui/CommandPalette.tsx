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
      const t = window.setTimeout(() => inputRef.current?.focus(), 50);
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
          className="fixed inset-0 z-[90] flex items-start justify-center bg-ink/70 px-4 pt-[12vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setCommandOpen(false)}
        >
          <motion.div
            role="dialog"
            aria-label="Recherche Dynasty8"
            className="search-glass w-full max-w-xl overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-[var(--line)] px-5 py-4">
              <span className="text-gold" aria-hidden>
                ⌕
              </span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher un bien, quartier, zone…"
                className="w-full bg-transparent text-base text-cream outline-none placeholder:text-cream-muted"
              />
              <kbd className="hidden rounded border border-[var(--line)] px-2 py-0.5 text-[0.65rem] text-cream-muted sm:inline">
                ESC
              </kbd>
            </div>

            <ul className="max-h-[50vh] overflow-auto py-2">
              {results.length === 0 && (
                <li className="px-5 py-8 text-center text-sm text-cream-muted">Aucun résultat</li>
              )}
              {results.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/biens/${p.slug}`}
                    onClick={() => setCommandOpen(false)}
                    className="flex items-center gap-4 px-5 py-3 transition-colors hover:bg-white/5"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt=""
                      className="h-12 w-16 shrink-0 object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm text-cream">{p.title}</p>
                      <p className="truncate text-xs text-cream-muted">
                        {p.district} · {getCategoryLabel(p.category)}
                      </p>
                    </div>
                    <p className="shrink-0 text-sm text-gold-soft">{formatPrice(p.price)}</p>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between border-t border-[var(--line)] px-5 py-3 text-[0.65rem] text-cream-muted">
              <span>Raccourci Ctrl / ⌘ + K</span>
              <Link
                href="/biens"
                onClick={() => setCommandOpen(false)}
                className="text-gold-soft hover:text-cream"
              >
                Catalogue complet →
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
