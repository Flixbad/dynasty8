import Link from "next/link";
import { categories } from "@/data/categories";
import { AGENCY_CONTACT_URL } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="mt-auto overflow-hidden border-t border-[var(--line)] bg-void-soft">
      <div className="container-x py-16 md:py-20">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Dynasty8 Realty</p>
            <p className="display mt-4 max-w-xl text-5xl text-ivory md:text-7xl">
              Votre adresse
              <br />
              <span className="text-green">commence ici.</span>
            </p>
          </div>
          <a
            href={AGENCY_CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary self-start md:self-auto"
          >
            Contacter l&apos;agence
          </a>
        </div>

        <div className="mt-16 grid gap-10 border-t border-[var(--line)] pt-12 md:grid-cols-4">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted">
              Explorer
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-ivory">
              <li>
                <Link href="/biens" className="hover:text-green-soft">
                  Propriétés
                </Link>
              </li>
              <li>
                <Link href="/zones" className="hover:text-green-soft">
                  Zones
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-soft">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href={AGENCY_CONTACT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-soft"
                >
                  Profil Life
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted">
              Typologies
            </p>
            <ul className="mt-4 columns-2 space-y-2.5 text-sm text-ivory">
              {categories.map((c) => (
                <li key={c.slug} className="break-inside-avoid">
                  <Link href={`/categories/${c.slug}`} className="hover:text-green-soft">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted">
              Agence
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li className="text-ivory">214 Rockford Plaza</li>
              <li>Los Santos, SA</li>
              <li>555-DYNASTY</li>
              <li>contact@dynasty8.ls</li>
            </ul>
          </div>
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted">
              Raccourcis
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Recherche globale <span className="text-ivory">⌘K</span>
              <br />
              Favoris & comparateur dans le dock.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--line)]">
        <div className="container-x flex flex-col gap-2 py-5 text-[0.7rem] text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Dynasty8 — Entreprise fictive GTA RP</p>
          <p>
            Créé et propulsé par{" "}
            <a
              href="https://kodyalabs.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ivory transition hover:text-green-soft"
            >
              Kodya Labs
            </a>
          </p>
          <p>Rockford · Vinewood · Del Perro · Blaine</p>
        </div>
      </div>

      <div className="pointer-events-none select-none overflow-hidden pb-2">
        <p className="display whitespace-nowrap text-center text-[18vw] leading-none text-white/[0.03]">
          DYNASTY8
        </p>
      </div>
    </footer>
  );
}
