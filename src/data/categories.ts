import type { CategoryMeta } from "@/types";

export const categories: CategoryMeta[] = [
  {
    slug: "maison",
    label: "Maisons",
    description: "Résidences familiales dans les quartiers résidentiels de Los Santos.",
    icon: "home",
  },
  {
    slug: "appartement",
    label: "Appartements",
    description: "Studios et duplex urbains au cœur de la ville.",
    icon: "building",
  },
  {
    slug: "villa",
    label: "Villas",
    description: "Propriétés d'exception avec vue et standing Rockford Hills.",
    icon: "villa",
  },
  {
    slug: "penthouse",
    label: "Penthouses",
    description: "Sommets de luxe avec terrasses panoramiques sur la skyline.",
    icon: "penthouse",
  },
  {
    slug: "garage",
    label: "Garages",
    description: "Boxes et hangars pour collectionneurs et passionnés.",
    icon: "garage",
  },
  {
    slug: "entrepot",
    label: "Entrepôts",
    description: "Espaces logistiques et industriels pour vos opérations.",
    icon: "warehouse",
  },
  {
    slug: "bureau",
    label: "Bureaux",
    description: "Locaux professionnels en centre-ville et Downtown LS.",
    icon: "office",
  },
  {
    slug: "terrain",
    label: "Terrains",
    description: "Parcelles constructibles à Blaine County et Los Santos.",
    icon: "land",
  },
];

export function getCategory(slug: string): CategoryMeta | undefined {
  return categories.find((c) => c.slug === slug);
}
