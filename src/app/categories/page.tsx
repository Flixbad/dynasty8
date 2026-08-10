import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/categories";
import { getPropertiesByCategory } from "@/data/properties";

export const metadata: Metadata = {
  title: "Catégories",
  description: "Maisons, appartements, villas, entrepôts, garages et plus — Dynasty8 Los Santos.",
};

const icons: Record<string, string> = {
  home: "⌂",
  building: "▦",
  villa: "◈",
  penthouse: "⬡",
  garage: "▣",
  warehouse: "▤",
  office: "▥",
  land: "◉",
};

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-32 md:px-8">
      <header className="mb-14 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Typologies</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl text-cream md:text-6xl">
          Catégories
        </h1>
        <p className="mt-4 text-cream-muted">
          Choisissez le type de bien qui correspond à votre activité RP à Los Santos.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((category) => {
          const count = getPropertiesByCategory(category.slug).length;
          return (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="group flex gap-5 border border-[var(--line)] bg-ink-soft/40 p-7 transition hover:border-gold/40"
            >
              <span className="text-3xl text-gold" aria-hidden>
                {icons[category.icon] ?? "◆"}
              </span>
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-3xl text-cream group-hover:text-gold-soft">
                  {category.label}
                </h2>
                <p className="mt-2 text-sm text-cream-muted">{category.description}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-gold">
                  {count} bien{count > 1 ? "s" : ""} →
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
