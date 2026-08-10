import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/categories";
import { getPropertiesByCategory } from "@/data/properties";

export const metadata: Metadata = {
  title: "Typologies",
  description: "Maisons, appartements, villas, entrepôts, garages et plus — Dynasty8 Los Santos.",
};

const images: Record<string, string> = {
  maison:
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=80",
  appartement:
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80",
  villa:
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80",
  penthouse:
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
  garage:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=80",
  entrepot:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
  bureau:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
  terrain:
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
};

export default function CategoriesPage() {
  return (
    <div className="container-x pb-24 pt-32 md:pt-36">
      <header className="mb-12 max-w-2xl md:mb-16">
        <p className="eyebrow">Typologies</p>
        <h1 className="display mt-4 text-5xl text-cream md:text-6xl">Nos catégories</h1>
        <p className="mt-4 font-light text-cream-muted">
          Choisissez le type de bien adapté à votre activité RP à Los Santos.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => {
          const count = getPropertiesByCategory(category.slug).length;
          return (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images[category.slug]}
                alt={category.label}
                className="property-media absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gold-soft">
                  {count} bien{count > 1 ? "s" : ""}
                </p>
                <h2 className="display mt-1 text-3xl text-cream">{category.label}</h2>
                <p className="mt-2 line-clamp-2 text-sm font-light text-cream-muted">
                  {category.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
