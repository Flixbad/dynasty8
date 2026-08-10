import type { PropertyCategory, PropertyStatus } from "@/types";

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatArea(area: number): string {
  if (area >= 10000) {
    return `${(area / 10000).toFixed(area % 10000 === 0 ? 0 : 1)} ha`;
  }
  return `${area.toLocaleString("fr-FR")} m²`;
}

const categoryLabels: Record<PropertyCategory, string> = {
  maison: "Maison",
  appartement: "Appartement",
  villa: "Villa",
  entrepot: "Entrepôt",
  garage: "Garage",
  bureau: "Bureau",
  terrain: "Terrain",
  penthouse: "Penthouse",
};

const statusLabels: Record<PropertyStatus, string> = {
  disponible: "Disponible",
  reserve: "Réservé",
  vendu: "Vendu",
};

export function getCategoryLabel(category: PropertyCategory): string {
  return categoryLabels[category];
}

export function getStatusLabel(status: PropertyStatus): string {
  return statusLabels[status];
}
