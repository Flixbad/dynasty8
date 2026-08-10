import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { PropertyMarquee } from "@/components/home/PropertyMarquee";
import { Manifesto } from "@/components/home/Manifesto";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { ZonesTeaser } from "@/components/home/ZonesTeaser";
import { AgencyCTA } from "@/components/home/AgencyCTA";
import { getFeaturedProperties, properties } from "@/data/properties";

export default function HomePage() {
  const featured = getFeaturedProperties();

  return (
    <>
      <Hero slides={featured.slice(0, 5)} />
      <TrustStrip />
      <PropertyMarquee properties={properties.slice(0, 10)} />
      <Manifesto />
      <FeaturedProperties properties={featured} />
      <ZonesTeaser />
      <CategoryShowcase />
      <AgencyCTA />
    </>
  );
}
