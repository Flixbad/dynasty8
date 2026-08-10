import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { ZonesTeaser } from "@/components/home/ZonesTeaser";
import { AgencyCTA } from "@/components/home/AgencyCTA";
import { getFeaturedProperties } from "@/data/properties";

export default function HomePage() {
  const featured = getFeaturedProperties();

  return (
    <>
      <Hero />
      <TrustStrip />
      <FeaturedProperties properties={featured} />
      <ZonesTeaser />
      <CategoryShowcase />
      <AgencyCTA />
    </>
  );
}
