import HomeHero from "@/components/sections/HomeHero";
import StatsStrip from "@/components/sections/StatsStrip";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ArticlesPreview from "@/components/sections/ArticlesPreview";
import CTAConsultation from "@/components/sections/CTAConsultation";

export default function Home() {
  return (
    <>
      <HomeHero />
      <StatsStrip />
      <AboutPreview />
      <ServicesGrid />
      <WhyChooseUs />
      <ArticlesPreview />
      <CTAConsultation />
    </>
  );
}
