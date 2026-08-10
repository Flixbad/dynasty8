import Link from "next/link";
import { categories } from "@/data/categories";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--line)] bg-ink">
      <div className="container-x grid gap-14 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <p className="display text-3xl tracking-[0.06em] text-cream">
            DYNASTY<span className="text-gold">8</span>
          </p>
          <p className="mt-5 max-w-xs text-sm font-light leading-relaxed text-cream-muted">
            Agence immobilière de prestige à Los Santos. Transactions résidentielles et commerciales
            sur l&apos;ensemble de San Andreas.
          </p>
        </div>

        <div className="md:col-span-2">
          <p className="text-[0.65rem] uppercase tracking-[0.22em] text-cream-muted">Explorer</p>
          <ul className="mt-5 space-y-3 text-sm text-cream">
            <li>
              <Link href="/biens" className="transition-colors hover:text-gold-soft">
                Propriétés
              </Link>
            </li>
            <li>
              <Link href="/zones" className="transition-colors hover:text-gold-soft">
                Zones
              </Link>
            </li>
            <li>
              <Link href="/agence" className="transition-colors hover:text-gold-soft">
                Agence
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-gold-soft">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-[0.65rem] uppercase tracking-[0.22em] text-cream-muted">Typologies</p>
          <ul className="mt-5 columns-2 space-y-3 text-sm text-cream">
            {categories.map((c) => (
              <li key={c.slug} className="break-inside-avoid">
                <Link
                  href={`/categories/${c.slug}`}
                  className="transition-colors hover:text-gold-soft"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-[0.65rem] uppercase tracking-[0.22em] text-cream-muted">Bureau</p>
          <ul className="mt-5 space-y-2 text-sm font-light text-cream-muted">
            <li className="text-cream">214 Rockford Plaza</li>
            <li>Los Santos, San Andreas</li>
            <li>555-DYNASTY</li>
            <li>contact@dynasty8.ls</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--line)]">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-6 text-[0.7rem] tracking-wide text-cream-muted md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Dynasty8 Realty — Entreprise fictive GTA RP.</p>
          <p>Rockford Hills · Vinewood · Del Perro · Blaine County</p>
        </div>
      </div>
    </footer>
  );
}
