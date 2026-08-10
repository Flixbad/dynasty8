"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/biens", label: "Biens" },
  { href: "/zones", label: "Zones" },
  { href: "/categories", label: "Catégories" },
  { href: "/agence", label: "L'agence" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
          ? "bg-ink/90 backdrop-blur-md border-b border-[var(--line)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-[family-name:var(--font-display)] text-2xl tracking-[0.12em] brand-shimmer md:text-3xl">
            DYNASTY8
          </span>
          <span className="mt-1 text-[0.65rem] uppercase tracking-[0.35em] text-cream-muted">
            Los Santos Realty
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs uppercase tracking-[0.22em] transition-colors duration-300 ${
                  active ? "text-gold-soft" : "text-cream-muted hover:text-cream"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/contact" className="btn-primary !py-2.5 !px-4">
            Estimer
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-px w-6 bg-cream transition ${open ? "translate-y-[4px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-cream transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-cream transition ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-[var(--line)] bg-ink/95 px-5 py-6 lg:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-sm uppercase tracking-[0.2em] text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
