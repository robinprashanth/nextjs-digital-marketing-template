import { TeamSection } from "@/components/teams/TeamSection";
import { ContactSection } from "./_components/ContactForm";
import { HeroSection } from "./_components/HeroContent";
import { IndustriesSection } from "./_components/IndustriesSection";
import { PortfolioSection } from "./_components/PortfolioSection";
import { PricingSection } from "./_components/PricingSection";
import { ServicesSection } from "./_components/ServicesSection";
import { StatsGrid } from "./_components/StatsGrid";
import { TechStackSection } from "./_components/TechStackSection";
import { TestimonialsMain } from "../../components/testimonials/TestimonialsMain";
import { WorkingMethodSection } from "./_components/WorkingMethodSection";
import { getAllCaseStudies } from "@/lib/case-studies";
import { testimonials } from "./data/content";

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
      <TestimonialsMain testimonials={testimonials} heading={{
    label: "TESTIMONIALS",
    title: "Customer Stories",
    description: "See what our clients have to say"
  }}/>
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
