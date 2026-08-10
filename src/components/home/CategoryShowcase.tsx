import Link from "next/link";
import { categories } from "@/data/categories";
import { getPropertiesByCategory } from "@/data/properties";
import { Reveal } from "@/components/motion/Reveal";

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
    <section className="section-y">
      <div className="container-x">
        <Reveal className="mb-12 max-w-2xl md:mb-16">
          <p className="eyebrow">Typologies</p>
          <h2 className="display mt-3 text-4xl text-ivory md:text-6xl">
            Formes de vie
          </h2>
          <p className="mt-4 font-light text-muted">
            Du loft Vespucci au hangar d&apos;Elysian — chaque usage a sa catégorie.
          </p>
        </Reveal>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {categories.map((category, i) => {
            const count = getPropertiesByCategory(category.slug).length;
            const wide = i === 0 || i === 5;
            return (
              <Reveal
                key={category.slug}
                delay={0.04 * i}
                className={wide ? "col-span-2 row-span-2" : ""}
              >
                <Link
                  href={`/categories/${category.slug}`}
                  className="group relative block h-full overflow-hidden rounded-[22px]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={images[category.slug]}
                    alt={category.label}
                    className="property-media absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-green-soft">
                      {count} biens
                    </p>
                    <h3
                      className={`display mt-1 text-ivory ${wide ? "text-4xl md:text-5xl" : "text-2xl"}`}
                    >
                      {category.label}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
