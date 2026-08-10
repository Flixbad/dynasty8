import Link from "next/link";
import { categories } from "@/data/categories";
import { getPropertiesByCategory } from "@/data/properties";

const images: Record<string, string> = {
  maison:
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80",
  appartement:
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
  villa:
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80",
  penthouse:
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80",
  garage:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
  entrepot:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
  bureau:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
  terrain:
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
};

export function CategoryShowcase() {
  return (
    <section className="section-y border-y border-[var(--line)] bg-ink-soft/40">
      <div className="container-x">
        <div className="mb-12 max-w-xl md:mb-16">
          <p className="eyebrow">Typologies</p>
          <h2 className="display mt-4 text-4xl text-cream md:text-5xl">
            Trouvez le bien adapté
          </h2>
          <p className="mt-4 font-light leading-relaxed text-cream-muted">
            Résidentiel, commercial ou collection — Dynasty8 couvre chaque besoin à Los Santos.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const count = getPropertiesByCategory(category.slug).length;
            return (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group relative aspect-[4/5] overflow-hidden"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={images[category.slug]}
                  alt={category.label}
                  className="property-media absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10 transition duration-500 group-hover:from-ink/95" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gold-soft">
                    {count} bien{count > 1 ? "s" : ""}
                  </p>
                  <h3 className="display mt-1 text-3xl text-cream">{category.label}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
