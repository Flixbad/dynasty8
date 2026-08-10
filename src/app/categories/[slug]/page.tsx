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
    <div className="container-x pb-24 pt-32 md:pt-36">
      <Link href="/categories" className="btn-link !normal-case !tracking-normal !text-cream-muted">
        ← Toutes les typologies
      </Link>
      <header className="mb-12 mt-8 max-w-2xl">
        <p className="eyebrow">Typologie</p>
        <h1 className="display mt-4 text-5xl text-cream md:text-6xl">{category.label}</h1>
        <p className="mt-4 font-light text-cream-muted">{category.description}</p>
      </header>

      <PropertyGrid
        properties={list}
        emptyMessage="Aucun bien dans cette catégorie pour le moment."
      />
    </div>
  );
}
