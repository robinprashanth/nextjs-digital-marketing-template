import { ContactSection } from "./_components/ContactForm";
import { HeroSection } from "./_components/HeroContent";
import { IndustriesSection } from "./_components/IndustriesSection";
import { PortfolioSection } from "./_components/PortfolioSection";
import { PricingSection } from "./_components/PricingSection";
import { ServicesSection } from "./_components/ServicesSection";
import { StatsGrid } from "./_components/StatsGrid";
import { TeamSection } from "./_components/TeamSection";
import { TechStackSection } from "./_components/TechStackSection";
import { TestimonialsSection } from "./_components/TestimonialsSection";
import { WorkingMethodSection } from "./_components/WorkingMethodSection";
import { getAllCaseStudies } from "@/lib/case-studies";

export default async function Home() {
  const caseStudies = await getAllCaseStudies();
  return (
    <main>
      {/* Hero and Stats Section with Dark Background */}
      <div className="relative">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-[#0B0B1E]" />

        {/* Overlay gradient for depth */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at top right, rgba(138, 111, 249, 0.1), transparent 50%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <HeroSection />
          <StatsGrid />
        </div>
      </div>

      {/* Additional Sections */}
      <ServicesSection />
      <WorkingMethodSection />
      <PortfolioSection initialCaseStudies={caseStudies} />
      <TestimonialsSection />
      <TeamSection />
      <PricingSection />
      <ContactSection />
      <TechStackSection />
      <IndustriesSection />
      {/* <ServicesSection />
        <WorkingMethodSection /> */}
    </main>
  );
}
