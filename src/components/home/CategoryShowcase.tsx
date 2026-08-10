import Link from "next/link";
import { categories } from "@/data/categories";

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

export function CategoryShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <div className="mb-12 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Catégories</p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-cream md:text-5xl">
          Chaque bien a son quartier
        </h2>
        <p className="mt-4 text-cream-muted">
          Du penthouse Downtown au hangar d&apos;Elysian Island — Dynasty8 couvre tout Los Santos
          et Blaine County.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, index) => (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className="group border border-[var(--line)] bg-ink-soft/40 p-6 transition-all duration-400 hover:border-gold/40 hover:bg-ink-elevated"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <span className="text-2xl text-gold" aria-hidden>
              {icons[category.icon] ?? "◆"}
            </span>
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl text-cream group-hover:text-gold-soft">
              {category.label}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-cream-muted">{category.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
