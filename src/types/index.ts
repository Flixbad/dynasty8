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
