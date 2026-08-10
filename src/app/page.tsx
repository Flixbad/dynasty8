import { Hero } from "@/components/home/Hero";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { AgencyCTA } from "@/components/home/AgencyCTA";
import { getFeaturedProperties } from "@/data/properties";

export default function HomePage() {
  const featured = getFeaturedProperties();

  return (
    <>
      <Hero />
      <div className="gold-line" />
      <FeaturedProperties properties={featured} />
      <CategoryShowcase />
      <AgencyCTA />
    </>
  );
}
