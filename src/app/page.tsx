import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { ZonesTeaser } from "@/components/home/ZonesTeaser";
import { AgencyCTA } from "@/components/home/AgencyCTA";
import { getDistricts, getFeaturedProperties, properties } from "@/data/properties";

export default function HomePage() {
  const featured = getFeaturedProperties();
  const available = properties.filter((p) => p.status === "disponible").length;

  return (
    <>
      <Hero slides={featured.slice(0, 5)} />
      <TrustStrip
        total={properties.length}
        available={available}
        zones={4}
        districts={getDistricts().length}
      />
      <FeaturedProperties properties={featured} />
      <ZonesTeaser />
      <CategoryShowcase />
      <AgencyCTA />
    </>
  );
}
