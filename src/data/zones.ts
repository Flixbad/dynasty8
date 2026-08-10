import type { ZoneId, ZoneMeta } from "@/types";
import type { PropertyCategory } from "@/types";

export type { ZoneId, ZoneMeta };

export const zones: ZoneMeta[] = [
  {
    id: 1,
    slug: "zone-1",
    label: "Zone 1",
    color: "#c94a3a",
    colorSoft: "rgba(201, 74, 58, 0.18)",
    tagline: "Sud urbain & cœur désertique",
    description:
      "South et East Los Santos, le port, La Puerta, puis le désert central : Sandy Shores, Grapeseed, Harmony et le Grand Senora. Idéal pour entrepôts, garages et maisons abordables.",
    districts: [
      "South Los Santos",
      "East Los Santos",
      "La Puerta",
      "Port of South Los Santos",
      "Strawberry",
      "La Mesa",
      "Elysian Island",
      "Mirror Park",
      "Sandy Shores",
      "Grapeseed",
      "Harmony",
      "Grand Senora Desert",
      "Great Chaparral",
      "Chiliad Mountain State Wilderness",
    ],
    highlights: ["Entrepôts portuaires", "Garages", "Maisons Mirror Park", "Terrains désert"],
  },
  {
    id: 2,
    slug: "zone-2",
    label: "Zone 2",
    color: "#3a7fc9",
    colorSoft: "rgba(58, 127, 201, 0.18)",
    tagline: "Cœur chic de Los Santos",
    description:
      "Rockford Hills, Downtown, Del Perro, Vespucci, Vinewood et LSIA. L’adresse urbaine Dynasty8 : appartements, penthouses, bureaux et villas de ville.",
    districts: [
      "Rockford Hills",
      "Downtown Los Santos",
      "Pillbox Hill",
      "Del Perro",
      "Vespucci",
      "Vespucci Canals",
      "Little Seoul",
      "West Vinewood",
      "Vinewood",
      "Los Santos International Airport",
    ],
    highlights: ["Penthouses Downtown", "Del Perro océan", "Bureaux Pillbox", "Rockford Hills"],
  },
  {
    id: 3,
    slug: "zone-3",
    label: "Zone 3",
    color: "#d4b83a",
    colorSoft: "rgba(212, 184, 58, 0.18)",
    tagline: "Collines & côte premium",
    description:
      "Vinewood Hills, Richman, Pacific Bluffs, Banham Canyon et Tongva. Les propriétés d’exception avec vue, standing et intimité totale.",
    districts: [
      "Vinewood Hills",
      "Richman",
      "Pacific Bluffs",
      "Banham Canyon",
      "Tongva Hills",
      "Tongva Valley",
    ],
    highlights: ["Villas Vinewood Hills", "Banham Canyon", "Pacific Bluffs", "Richman"],
  },
  {
    id: 4,
    slug: "zone-4",
    label: "Zone 4",
    color: "#3aa85a",
    colorSoft: "rgba(58, 168, 90, 0.18)",
    tagline: "Nord sauvage & montagnes",
    description:
      "Paleto Bay, Mount Chiliad, Tataviam, Palomino Highlands et le littoral nord. Cabanes, ranchs et terrains isolés pour une vie hors de la ville.",
    districts: [
      "Paleto Bay",
      "Mount Chiliad",
      "Mount Gordo",
      "Mount Josiah",
      "Raton Canyon",
      "San Chianski Mountain Range",
      "Tataviam Mountains",
      "Palomino Highlands",
      "North Chumash",
    ],
    highlights: ["Paleto Bay", "Terrains montagne", "Cabanes Chiliad", "Côte nord"],
  },
];

/** Quartiers du catalogue → zone Dynasty8 */
export const districtToZone: Record<string, ZoneId> = {
  "Rockford Hills": 2,
  "Downtown Los Santos": 2,
  "Pillbox Hill": 2,
  "Del Perro": 2,
  "Vespucci Canals": 2,
  "West Vinewood": 2,
  "Mirror Park": 1,
  "La Mesa": 1,
  Strawberry: 1,
  "Elysian Island": 1,
  "Sandy Shores": 1,
  "Grand Senora Desert": 1,
  "Vinewood Hills": 3,
  "Banham Canyon": 3,
  "Pacific Bluffs": 3,
  Richman: 3,
  "Paleto Bay": 4,
  "Mount Chiliad": 4,
  "North Chumash": 4,
};

export function getZone(id: ZoneId | number): ZoneMeta | undefined {
  return zones.find((z) => z.id === id);
}

export function getZoneBySlug(slug: string): ZoneMeta | undefined {
  return zones.find((z) => z.slug === slug);
}

export function resolveZoneId(district: string, zone?: ZoneId): ZoneId {
  if (zone) return zone;
  return districtToZone[district] ?? 1;
}

export function groupPropertiesByCategoryCount(
  items: { category: PropertyCategory }[],
): { category: PropertyCategory; count: number }[] {
  const map = new Map<PropertyCategory, number>();
  for (const item of items) {
    map.set(item.category, (map.get(item.category) ?? 0) + 1);
  }
  return [...map.entries()]
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count);
}
