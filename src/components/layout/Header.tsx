"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useUI } from "@/lib/ui";
import { useFavorites } from "@/lib/favorites";
import { AGENCY_CONTACT_URL } from "@/lib/contact";

const links = [
  { href: "/biens", label: "Propriétés" },
  { href: "/zones", label: "Zones" },
  { href: "/categories", label: "Types" },
  { href: "/agence", label: "Agence" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { setCommandOpen } = useUI();
  const { ids: favIds } = useFavorites();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-5">
        <motion.div
          className={`pointer-events-auto nav-pill flex w-full max-w-4xl items-center justify-between gap-3 rounded-full px-3 py-2 md:px-4 ${
            scrolled ? "shadow-[0_16px_50px_rgba(0,0,0,0.45)]" : ""
          }`}
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href="/" className="display pl-2 text-lg tracking-tight text-ivory md:text-xl">
            Dynasty<span className="text-green">8</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const active =
                pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-3.5 py-2 text-[0.8rem] font-medium transition ${
                    active
                      ? "bg-white/10 text-ivory"
                      : "text-muted hover:bg-white/5 hover:text-ivory"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setCommandOpen(true)}
              className="hidden rounded-full px-3 py-2 text-[0.75rem] font-semibold text-muted transition hover:bg-white/5 hover:text-ivory sm:inline-flex"
            >
              ⌘K
            </button>
            <Link
              href="/favoris"
              className="relative hidden rounded-full px-3 py-2 text-[0.8rem] font-medium text-muted transition hover:text-ivory sm:inline-flex"
            >
              ♥
              {favIds.length > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-green px-1 text-[0.6rem] font-bold text-void">
                  {favIds.length}
                </span>
              )}
            </Link>
            <a
              href={AGENCY_CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !px-4 !py-2.5 text-[0.7rem]"
            >
              Contact
            </a>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 md:hidden"
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="display text-sm">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </motion.div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-void/95 px-6 pt-28 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex flex-col gap-2">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link href={link.href} className="display block py-3 text-4xl text-ivory">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link href="/favoris" className="display py-3 text-4xl text-ivory">
                Favoris
              </Link>
              <Link href="/comparer" className="display py-3 text-4xl text-ivory">
                Comparer
              </Link>
              <button
                type="button"
                className="display py-3 text-left text-4xl text-green-soft"
                onClick={() => {
                  setOpen(false);
                  setCommandOpen(true);
                }}
              >
                Recherche
              </button>
              <a
                href={AGENCY_CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="display py-3 text-4xl text-ivory"
              >
                Contact
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
