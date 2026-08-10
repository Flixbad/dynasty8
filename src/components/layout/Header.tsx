"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useUI } from "@/lib/ui";
import { useFavorites } from "@/lib/favorites";

const links = [
  { href: "/biens", label: "Propriétés" },
  { href: "/zones", label: "Zones" },
  { href: "/categories", label: "Typologies" },
  { href: "/agence", label: "Agence" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { setCommandOpen } = useUI();
  const { ids: favIds } = useFavorites();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-ink/85 backdrop-blur-xl border-b border-[var(--line)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-[4.5rem] items-center justify-between md:h-[5.25rem]">
        <Link href="/" className="relative z-10 flex items-baseline gap-2">
          <span className="display text-[1.65rem] tracking-[0.08em] text-cream md:text-[1.85rem]">
            DYNASTY<span className="text-gold">8</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((link) => {
            const active =
              pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[0.8rem] font-medium tracking-wide transition-colors duration-300 ${
                  active ? "text-cream" : "text-cream-muted hover:text-cream"
                }`}
              >
                {link.label}
                {active && <span className="absolute -bottom-1 left-0 h-px w-full bg-gold" />}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <button
            type="button"
            onClick={() => setCommandOpen(true)}
            className="flex items-center gap-2 text-[0.8rem] font-medium text-cream-muted transition-colors hover:text-cream"
          >
            Recherche
            <kbd className="rounded border border-[var(--line)] px-1.5 py-0.5 text-[0.6rem]">
              ⌘K
            </kbd>
          </button>
          <Link
            href="/favoris"
            className="relative text-[0.8rem] font-medium text-cream-muted transition-colors hover:text-cream"
          >
            Favoris
            {favIds.length > 0 && (
              <span className="ml-1 inline-flex h-4 min-w-4 items-center justify-center bg-gold px-1 text-[0.6rem] font-semibold text-ink">
                {favIds.length}
              </span>
            )}
          </Link>
          <Link
            href="/contact"
            className="text-[0.8rem] font-medium text-cream-muted transition-colors hover:text-cream"
          >
            Contact
          </Link>
          <Link href="/biens" className="btn-primary !py-3 !px-5">
            Voir les biens
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className="relative z-10 flex h-11 w-11 items-center justify-center lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-6 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-cream transition duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span className={`h-px w-full bg-cream transition duration-300 ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-px w-full bg-cream transition duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-[var(--line)] bg-ink/95 backdrop-blur-xl transition-all duration-400 lg:hidden ${
          open ? "max-h-[32rem] opacity-100" : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <nav className="container-x flex flex-col gap-1 py-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="display py-3 text-3xl text-cream">
              {link.label}
            </Link>
          ))}
          <Link href="/favoris" className="display py-3 text-3xl text-cream">
            Favoris
          </Link>
          <Link href="/comparer" className="display py-3 text-3xl text-cream">
            Comparer
          </Link>
          <button
            type="button"
            className="display py-3 text-left text-3xl text-gold-soft"
            onClick={() => {
              setOpen(false);
              setCommandOpen(true);
            }}
          >
            Recherche ⌘K
          </button>
          <Link href="/contact" className="display py-3 text-3xl text-cream">
            Contact
          </Link>
          <Link href="/biens" className="btn-primary mt-4 w-full">
            Voir les biens
          </Link>
        </nav>
      </div>
    </header>
  );
}
