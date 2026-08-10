import type { Agent } from "@/types";

export const agents: Agent[] = [
  {
    id: "a1",
    name: "Victoria Hale",
    role: "Directrice des ventes luxe",
    phone: "555-0108",
    email: "victoria.hale@dynasty8.ls",
    bio: "Spécialiste Rockford Hills et Vinewood Hills. Dix ans à placer les plus belles adresses de Los Santos.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    specialties: ["villa", "penthouse", "maison"],
  },
  {
    id: "a2",
    name: "Marcus Cole",
    role: "Conseiller immobilier commercial",
    phone: "555-0142",
    email: "marcus.cole@dynasty8.ls",
    bio: "Expert entrepôts, bureaux et actifs industriels. Il connaît chaque hangar de La Mesa à LSIA.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    specialties: ["entrepot", "bureau", "garage"],
  },
  {
    id: "a3",
    name: "Sofia Reyes",
    role: "Agence Vespucci & Del Perro",
    phone: "555-0199",
    email: "sofia.reyes@dynasty8.ls",
    bio: "Appartements océan, lofts et pieds-dans-l'eau. Le style Del Perro, sans compromis.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    specialties: ["appartement", "maison", "terrain"],
  },
];
