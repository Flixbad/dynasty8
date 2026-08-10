import Link from "next/link";
import { categories } from "@/data/categories";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--line)] bg-ink-soft">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-1">
          <p className="font-[family-name:var(--font-display)] text-2xl tracking-[0.12em] text-gradient-gold">
            DYNASTY8
          </p>
          <p className="mt-4 text-sm leading-relaxed text-cream-muted">
            L&apos;agence immobilière de référence à Los Santos. Maisons, villas, entrepôts et
            garages — du Rockford Hills au désert de Senora.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Explorer</p>
          <ul className="mt-4 space-y-2 text-sm text-cream-muted">
            <li>
              <Link href="/biens" className="hover:text-cream">
                Tous les biens
              </Link>
            </li>
            <li>
              <Link href="/categories" className="hover:text-cream">
                Catégories
              </Link>
            </li>
            <li>
              <Link href="/agence" className="hover:text-cream">
                L&apos;agence
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-cream">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Catégories</p>
          <ul className="mt-4 space-y-2 text-sm text-cream-muted">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link href={`/categories/${c.slug}`} className="hover:text-cream">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Agence</p>
          <ul className="mt-4 space-y-2 text-sm text-cream-muted">
            <li>214 Rockford Plaza</li>
            <li>Los Santos, SA</li>
            <li>Tél. 555-DYNASTY</li>
            <li>contact@dynasty8.ls</li>
            <li className="pt-2 text-cream">Ouvert 24/7 — GTA RP</li>
          </ul>
        </div>
      </div>

      <div className="gold-line" />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-cream-muted md:flex-row md:px-8">
        <p>© {new Date().getFullYear()} Dynasty8 Realty — Entreprise fictive GTA RP.</p>
        <p>Rockford Hills · Vinewood · Del Perro · Blaine County</p>
      </div>
    </footer>
  );
}
