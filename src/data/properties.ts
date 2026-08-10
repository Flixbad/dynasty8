import type { Property, PropertyCategory, PropertyStatus, ZoneId } from "@/types";
import { resolveZoneId } from "@/data/zones";

export const properties: Property[] = [
  {
    id: "p1",
    slug: "villa-eclipse-rockford",
    title: "Villa Eclipse — Rockford Hills",
    description:
      "Villa contemporaine avec piscine à débordement et vue sur les collines de Vinewood.",
    longDescription:
      "Située sur une colline privée de Rockford Hills, la Villa Eclipse offre 420 m² de standing absolu. Hall d'entrée double hauteur, suite parentale avec dressing walk-in, salon ouvrant sur une terrasse en pierre naturelle et une piscine à débordement face à Los Santos. Garage triple, cave à vin climatisée et système de sécurité Dynasty8 Premium.",
    category: "villa",
    price: 2850000,
    currency: "USD",
    status: "disponible",
    location: "12 Eclipse Boulevard",
    district: "Rockford Hills",
    zone: 2,
    bedrooms: 5,
    bathrooms: 4,
    area: 420,
    parking: 3,
    features: ["Piscine", "Vue panoramique", "Cave à vin", "Sécurité 24/7", "Jardin paysager"],
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: true,
    yearBuilt: 2019,
  },
  {
    id: "p2",
    slug: "penthouse-maze-bank",
    title: "Penthouse Maze Bank Tower",
    description:
      "Penthouse d'exception au sommet de Downtown, terrasse 180° sur la baie.",
    longDescription:
      "Au dernier étage de la Maze Bank Tower, ce penthouse de 280 m² redéfinit le luxe urbain. Cuisine italien design, salon monumental, deux suites et une terrasse privée avec spa. Accès concierge privé, parking souterrain VIP et vue imprenable sur Del Perro Pier et le Pacific Ocean.",
    category: "penthouse",
    price: 4200000,
    currency: "USD",
    status: "disponible",
    location: "Maze Bank Tower, étage 68",
    district: "Downtown Los Santos",
    zone: 2,
    bedrooms: 3,
    bathrooms: 3,
    area: 280,
    parking: 2,
    features: ["Terrasse 180°", "Spa privé", "Concierge", "Vue océan", "Ascenseur privé"],
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: true,
    yearBuilt: 2021,
  },
  {
    id: "p3",
    slug: "maison-mirror-park",
    title: "Maison familiale — Mirror Park",
    description:
      "Charmante maison avec jardin et vue lac, idéale pour une famille à Mirror Park.",
    longDescription:
      "Dans le calme verdoyant de Mirror Park, cette maison de 165 m² combine charme résidentiel et confort moderne. Quatre chambres, cuisine ouverte, salon cheminée et jardin clos donnant vers le lac. Quartier paisible, écoles à proximité, parfait pour s'installer durablement à Los Santos.",
    category: "maison",
    price: 485000,
    currency: "USD",
    status: "disponible",
    location: "34 Mirror Park Boulevard",
    district: "Mirror Park",
    zone: 1,
    bedrooms: 4,
    bathrooms: 2,
    area: 165,
    parking: 2,
    features: ["Jardin", "Cheminée", "Quartier calme", "Proche lac"],
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: true,
    yearBuilt: 2008,
  },
  {
    id: "p4",
    slug: "appart-del-perro",
    title: "Appartement océan — Del Perro",
    description:
      "Appartement lumineux face à la plage, balcon et design côtier sophistiqué.",
    longDescription:
      "À deux pas du Del Perro Pier, cet appartement de 95 m² baigné de lumière offre un balcon face à l'océan. Finitions haut de gamme, cuisine intégrée, chambre parentale et espace bureau. Idéal pour un lifestyle Del Perro : plage le matin, nightlife le soir.",
    category: "appartement",
    price: 625000,
    currency: "USD",
    status: "disponible",
    location: "88 Prosperity Street",
    district: "Del Perro",
    zone: 2,
    bedrooms: 2,
    bathrooms: 1,
    area: 95,
    parking: 1,
    features: ["Vue océan", "Balcon", "Proche plage", "Ascenseur"],
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: true,
    yearBuilt: 2016,
  },
  {
    id: "p5",
    slug: "entrepot-la-mesa",
    title: "Entrepôt logistique — La Mesa",
    description:
      "Hangar industriel de 1 200 m² avec quais de chargement et bureaux annexes.",
    longDescription:
      "Entrepôt stratégique à La Mesa : 1 200 m² de stockage, trois quais poids lourds, bureaux administratifs de 80 m² et parking poids lourds. Accès rapide à l'autoroute et à LSIA. Parfait pour logistique, import ou activités commerciales discrètes.",
    category: "entrepot",
    price: 890000,
    currency: "USD",
    status: "disponible",
    location: "210 Popular Street",
    district: "La Mesa",
    zone: 1,
    area: 1200,
    parking: 8,
    features: ["Quais de chargement", "Bureaux annexes", "Accès autoroute", "Hauteur sous plafond 8m"],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: false,
    yearBuilt: 2012,
  },
  {
    id: "p6",
    slug: "garage-lscustoms",
    title: "Garage collection — Strawberry",
    description:
      "Garage blindé 10 places avec fosse, atelier et salle de show privée.",
    longDescription:
      "Pour collectionneurs exigeants : garage climatisé de 350 m² à Strawberry, dix emplacements, fosse d'atelier, mur d'outils pro et lounge privé. Sécurité renforcée, porte automatique silencieuse et connexion fibre. À proximité des ateliers LS Customs.",
    category: "garage",
    price: 375000,
    currency: "USD",
    status: "disponible",
    location: "45 Strawberry Avenue",
    district: "Strawberry",
    zone: 1,
    area: 350,
    parking: 10,
    features: ["10 places", "Fosse atelier", "Climatisation", "Sécurité renforcée", "Lounge"],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: true,
    yearBuilt: 2018,
  },
  {
    id: "p7",
    slug: "bureau-pillbox",
    title: "Bureaux — Pillbox Hill",
    description:
      "Plateau de bureaux moderne de 220 m² au cœur du district financier.",
    longDescription:
      "Espace professionnel clé en main à Pillbox Hill : open space, trois bureaux fermés, salle de réunion vitrée et kitchenette. Fibre, climatisation centrale et vue sur les tours de Downtown. Idéal pour cabinets, start-ups ou sièges d'entreprise RP.",
    category: "bureau",
    price: 720000,
    currency: "USD",
    status: "disponible",
    location: "17 Power Street",
    district: "Pillbox Hill",
    zone: 2,
    area: 220,
    parking: 4,
    features: ["Open space", "Salle de réunion", "Fibre", "Vue Downtown"],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: false,
    yearBuilt: 2015,
  },
  {
    id: "p8",
    slug: "terrain-paleto",
    title: "Terrain constructible — Paleto Bay",
    description:
      "Parcelle de 2 500 m² en bordure de Paleto, vue collines et accès route.",
    longDescription:
      "Opportunité rare à Blaine County : 2 500 m² constructibles près de Paleto Bay. Vue dégagée sur les collines, viabilisation partielle, idéal pour résidence secondaire, ranch ou projet commercial local. Titre clair, transaction Dynasty8 sécurisée.",
    category: "terrain",
    price: 195000,
    currency: "USD",
    status: "disponible",
    location: "Route 1 Nord, Paleto",
    district: "Paleto Bay",
    zone: 4,
    area: 2500,
    features: ["Constructible", "Vue collines", "Viabilisation partielle", "Titre clair"],
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: false,
  },
  {
    id: "p9",
    slug: "villa-vinewood-hills",
    title: "Villa Vinewood Hills Estate",
    description:
      "Domaine privé avec cinéma, salle de sport et helipad discret.",
    longDescription:
      "L'une des adresses les plus convoitées de Vinewood Hills. Domaine de 680 m² sur terrain arboré, six suites, cinéma privé, salle de sport, cave et helipad. Architecture signature, matériaux nobles et intimité totale. Réservé à une clientèle exigeante.",
    category: "villa",
    price: 6500000,
    currency: "USD",
    status: "reserve",
    location: "1 North Rockford Drive",
    district: "Vinewood Hills",
    zone: 3,
    bedrooms: 6,
    bathrooms: 7,
    area: 680,
    parking: 6,
    features: ["Helipad", "Cinéma", "Salle de sport", "Domaine privé", "Six suites"],
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: true,
    yearBuilt: 2020,
  },
  {
    id: "p10",
    slug: "appart-vespucci",
    title: "Loft Vespucci Canals",
    description:
      "Loft industriel rénové sur les canaux, double hauteur et rooftop.",
    longDescription:
      "Loft de caractère sur les Vespucci Canals : 140 m², double hauteur, mezzanine chambre, cuisine îlot et rooftop privatif. Ambiance loft new-yorkaise au bord de l'eau, à deux pas des bars et de la plage.",
    category: "appartement",
    price: 540000,
    currency: "USD",
    status: "disponible",
    location: "22 Vespucci Boulevard",
    district: "Vespucci Canals",
    zone: 2,
    bedrooms: 2,
    bathrooms: 2,
    area: 140,
    parking: 1,
    features: ["Rooftop", "Double hauteur", "Canaux", "Loft rénové"],
    image:
      "https://images.unsplash.com/photo-1536376072261-38c75010e6a9?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1536376072261-38c75010e6a9?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: false,
    yearBuilt: 2014,
  },
  {
    id: "p11",
    slug: "maison-banham-canyon",
    title: "Maison Banham Canyon",
    description:
      "Résidence moderne nichée dans le canyon, terrasses et nature.",
    longDescription:
      "Maison architecte à Banham Canyon : 210 m² de volumes ouverts, grandes baies vitrées, trois chambres et terrasses en cascade face au canyon. Calme absolu à vingt minutes de Downtown.",
    category: "maison",
    price: 980000,
    currency: "USD",
    status: "disponible",
    location: "Banham Canyon Drive",
    district: "Banham Canyon",
    zone: 3,
    bedrooms: 3,
    bathrooms: 3,
    area: 210,
    parking: 2,
    features: ["Vue canyon", "Architecture moderne", "Terrasses", "Calme"],
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8b99d2f1ea?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600047509807-ba8b99d2f1ea?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: false,
    yearBuilt: 2017,
  },
  {
    id: "p12",
    slug: "garage-sandy",
    title: "Hangar aéronautique — Sandy Shores",
    description:
      "Hangar 800 m² près de l'aérodrome, idéal aviation légère ou stockage.",
    longDescription:
      "Hangar spacieux à Sandy Shores Airfield : 800 m², porte hangar grande hauteur, atelier et bureau. Parfait pour aviation légère, restauration de véhicules ou stockage volumineux hors Los Santos.",
    category: "garage",
    price: 265000,
    currency: "USD",
    status: "disponible",
    location: "Sandy Shores Airfield",
    district: "Sandy Shores",
    zone: 1,
    area: 800,
    parking: 4,
    features: ["Grande hauteur", "Aérodrome", "Atelier", "Bureau"],
    image:
      "https://images.unsplash.com/photo-1540962351504-1691f6e8e4f0?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540962351504-1691f6e8e4f0?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: false,
    yearBuilt: 2005,
  },
  {
    id: "p13",
    slug: "entrepot-elysian",
    title: "Entrepôt portuaire — Elysian Island",
    description:
      "Entrepôt dockside 2 000 m² avec accès direct aux quais du port.",
    longDescription:
      "Actif portuaire rare sur Elysian Island : 2 000 m², accès quai, zone sécurisée et bureaux de contrôle. Idéal import/export, logistique maritime ou opérations commerciales à grande échelle.",
    category: "entrepot",
    price: 1450000,
    currency: "USD",
    status: "disponible",
    location: "Dock 4, Elysian Island",
    district: "Elysian Island",
    zone: 1,
    area: 2000,
    parking: 12,
    features: ["Accès quai", "Zone sécurisée", "Port", "Grande capacité"],
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: false,
    yearBuilt: 2010,
  },
  {
    id: "p14",
    slug: "penthouse-eclipse-towers",
    title: "Penthouse Eclipse Towers",
    description:
      "Adresse iconique d'Eclipse Towers, finitions or et vue Vinewood.",
    longDescription:
      "Le penthouse signature d'Eclipse Towers. 240 m², finitions champagne et marbre, suite parentale, salon de réception et terrasse dominante sur Vinewood. Accès club résidents et parking valet.",
    category: "penthouse",
    price: 3100000,
    currency: "USD",
    status: "vendu",
    location: "Eclipse Towers, PH-A",
    district: "West Vinewood",
    zone: 2,
    bedrooms: 3,
    bathrooms: 3,
    area: 240,
    parking: 2,
    features: ["Eclipse Towers", "Valet", "Club résidents", "Vue Vinewood"],
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: false,
    yearBuilt: 2013,
  },
  {
    id: "p15",
    slug: "bureau-rockford",
    title: "Cabinet privé — Rockford Hills",
    description:
      "Bureau boutique de 90 m² dans une artère premium de Rockford.",
    longDescription:
      "Local professionnel élégant à Rockford Hills : vitrine, open space et deux bureaux fermés. Idéal pour cabinet juridique, agence ou showroom discret. Quartier d'affaires haut de gamme.",
    category: "bureau",
    price: 455000,
    currency: "USD",
    status: "disponible",
    location: "Portola Drive",
    district: "Rockford Hills",
    zone: 2,
    area: 90,
    parking: 2,
    features: ["Vitrine", "Quartier premium", "Clé en main"],
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: false,
    yearBuilt: 2011,
  },
  {
    id: "p16",
    slug: "terrain-grand-senora",
    title: "Terrain Grand Senora Desert",
    description:
      "Grande parcelle désertique de 5 hectares, potentiel ranch ou projet isolé.",
    longDescription:
      "5 hectares dans le Grand Senora Desert. Horizon infini, isolation totale, potentiel ranch, compound ou projet off-grid. Accès piste, bornage effectué.",
    category: "terrain",
    price: 125000,
    currency: "USD",
    status: "disponible",
    location: "Senora Freeway, mile 42",
    district: "Grand Senora Desert",
    zone: 1,
    area: 50000,
    features: ["5 hectares", "Isolé", "Bornage", "Potentiel ranch"],
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: false,
  },
  {
    id: "p17",
    slug: "villa-pacific-bluffs",
    title: "Villa falaise — Pacific Bluffs",
    description:
      "Villa contemporaine suspendue au-dessus de l'océan, glass house et infinity pool.",
    longDescription:
      "Sur les falaises de Pacific Bluffs, cette villa de 390 m² offre une infinity pool face au Pacifique, un salon panoramique et trois suites. Accès privé, garage double et intimité absolue — le summum de la Zone 3.",
    category: "villa",
    price: 4750000,
    currency: "USD",
    status: "disponible",
    location: "Pacific Bluffs Drive",
    district: "Pacific Bluffs",
    zone: 3,
    bedrooms: 4,
    bathrooms: 4,
    area: 390,
    parking: 2,
    features: ["Infinity pool", "Vue océan", "Glass house", "Accès privé"],
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: true,
    yearBuilt: 2022,
  },
  {
    id: "p18",
    slug: "maison-richman",
    title: "Résidence Richman Gates",
    description:
      "Maison bourgeoise derrière les grilles de Richman, jardin et tennis.",
    longDescription:
      "Dans l'enclave sécurisée de Richman, résidence de 310 m² avec court de tennis, jardin à la française et suite parentale. Quartier le plus exclusif de la Zone 3, voisinages VIP et calme absolu.",
    category: "maison",
    price: 2200000,
    currency: "USD",
    status: "disponible",
    location: "Richman Street",
    district: "Richman",
    zone: 3,
    bedrooms: 5,
    bathrooms: 4,
    area: 310,
    parking: 3,
    features: ["Tennis", "Jardin", "Quartier sécurisé", "Suite parentale"],
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2c83fff90?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605276374104-dee2c83fff90?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: false,
    yearBuilt: 2009,
  },
  {
    id: "p19",
    slug: "cabane-mount-chiliad",
    title: "Cabane Mount Chiliad",
    description:
      "Refuge en bois au pied du Chiliad, vue vallée et sentiers de randonnée.",
    longDescription:
      "Cabane de 85 m² au pied de Mount Chiliad : poêle à bois, mezzanine, terrasse et accès sentiers. Parfaite base RP hors ville, Zone 4 nature et silence.",
    category: "maison",
    price: 165000,
    currency: "USD",
    status: "disponible",
    location: "Chiliad Mountain Trail",
    district: "Mount Chiliad",
    zone: 4,
    bedrooms: 2,
    bathrooms: 1,
    area: 85,
    parking: 1,
    features: ["Poêle à bois", "Vue vallée", "Sentiers", "Hors réseau urbain"],
    image:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb4d4b8?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1449158743715-0a90ebb4d4b8?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: true,
    yearBuilt: 1998,
  },
  {
    id: "p20",
    slug: "maison-chumash",
    title: "Maison balnéaire — North Chumash",
    description:
      "Maison bois et verre face à l'océan nord, plage privée et deck.",
    longDescription:
      "Sur la côte North Chumash, maison de 140 m² avec deck océan, cheminée et accès plage. Ambiance calme de Zone 4, loin du bruit de Downtown.",
    category: "maison",
    price: 695000,
    currency: "USD",
    status: "disponible",
    location: "Great Ocean Highway",
    district: "North Chumash",
    zone: 4,
    bedrooms: 3,
    bathrooms: 2,
    area: 140,
    parking: 2,
    features: ["Plage", "Deck océan", "Cheminée", "Great Ocean Highway"],
    image:
      "https://images.unsplash.com/photo-1499793983690-e29dafd473d5?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1499793983690-e29dafd473d5?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: false,
    yearBuilt: 2013,
  },
];

export interface PropertyFilters {
  category?: PropertyCategory | "all";
  district?: string;
  zone?: ZoneId | "all";
  status?: PropertyStatus | "all";
  minPrice?: number;
  maxPrice?: number;
  q?: string;
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id);
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.featured);
}

export function getPropertiesByCategory(category: PropertyCategory): Property[] {
  return properties.filter((p) => p.category === category);
}

export function getPropertiesByZone(zone: ZoneId): Property[] {
  return properties.filter((p) => resolveZoneId(p.district, p.zone) === zone);
}

export function getDistricts(): string[] {
  return [...new Set(properties.map((p) => p.district))].sort();
}

export function filterProperties(filters: PropertyFilters): Property[] {
  return properties.filter((p) => {
    const zone = resolveZoneId(p.district, p.zone);
    if (filters.category && filters.category !== "all" && p.category !== filters.category) {
      return false;
    }
    if (filters.district && p.district !== filters.district) {
      return false;
    }
    if (filters.zone && filters.zone !== "all" && zone !== filters.zone) {
      return false;
    }
    if (filters.status && filters.status !== "all" && p.status !== filters.status) {
      return false;
    }
    if (filters.minPrice !== undefined && p.price < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice !== undefined && p.price > filters.maxPrice) {
      return false;
    }
    if (filters.q) {
      const q = filters.q.toLowerCase();
      const haystack = `${p.title} ${p.description} ${p.district} ${p.location} Zone ${zone}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });
}
