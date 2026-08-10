import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PropertyGrid } from "@/components/properties/PropertyGrid";
import { categories, getCategory } from "@/data/categories";
import { getPropertiesByCategory } from "@/data/properties";
import type { PropertyCategory } from "@/types";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Catégorie" };
  return {
    title: category.label,
    description: category.description,
  };
}

export default async function CategoryDetailPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const list = getPropertiesByCategory(slug as PropertyCategory);

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-32 md:px-8">
      <Link
        href="/categories"
        className="text-xs uppercase tracking-[0.2em] text-cream-muted hover:text-gold"
      >
        ← Toutes les catégories
      </Link>
      <header className="mb-12 mt-6 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Catégorie</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl text-cream md:text-6xl">
          {category.label}
        </h1>
        <p className="mt-4 text-cream-muted">{category.description}</p>
      </header>

      <PropertyGrid
        properties={list}
        emptyMessage="Aucun bien dans cette catégorie pour le moment."
      />
    </div>
  );
}
