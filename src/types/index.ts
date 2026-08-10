export type PropertyCategory =
  | "maison"
  | "appartement"
  | "villa"
  | "entrepot"
  | "garage"
  | "bureau"
  | "terrain"
  | "penthouse";

export type PropertyStatus = "disponible" | "reserve" | "vendu";

export type ZoneId = 1 | 2 | 3 | 4;

export interface Property {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: PropertyCategory;
  price: number;
  currency: "USD";
  status: PropertyStatus;
  location: string;
  district: string;
  /** Zone Dynasty8 (1–4) selon la carte San Andreas */
  zone: ZoneId;
  bedrooms?: number;
  bathrooms?: number;
  area: number;
  parking?: number;
  features: string[];
  image: string;
  gallery: string[];
  featured?: boolean;
  yearBuilt?: number;
}

export interface ZoneMeta {
  id: ZoneId;
  slug: string;
  label: string;
  color: string;
  colorSoft: string;
  tagline: string;
  description: string;
  districts: string[];
  highlights: string[];
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  bio: string;
  image: string;
  specialties: PropertyCategory[];
}

export interface CategoryMeta {
  slug: PropertyCategory;
  label: string;
  description: string;
  icon: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  propertyId?: string;
  message: string;
}
