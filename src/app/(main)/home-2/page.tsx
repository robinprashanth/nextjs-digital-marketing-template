import { SplineCTA } from "@/components/cta/SplineCTA";
import { CaseStudiesSection } from "./_components/CaseStudiesSection";
import { HeroSection } from "./_components/HeroSection";
import { ProcessSection } from "./_components/ProcessSection";
import { SolutionsGrid } from "./_components/SolutionsGrid";
import { SolutionsSection } from "./_components/SolutionsSection";
import { StatCards } from "./_components/StatCards";
import { TestimonialsSection } from "./_components/TestimonialsSection";

export default async function HomeTwo() {  
  return (
    <main className="bg-black text-white">
      {/* Dark themed hero section */}
      <div className="relative">
        <HeroSection />
        <SolutionsGrid />
        <StatCards />
      </div>
        <SolutionsSection />
        <ProcessSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <SplineCTA />
    </main>
  );
} 