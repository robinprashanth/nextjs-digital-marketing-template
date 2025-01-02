import { Metadata } from "next";
import { getSEOTags } from "@/lib/seo";
import { SplineCTA } from "@/components/cta/SplineCTA";
import { CaseStudiesSection } from "./_components/CaseStudiesSection";
import { HeroSection } from "./_components/HeroSection";
import { ProcessSection } from "./_components/ProcessSection";
import { SolutionsGrid } from "./_components/SolutionsGrid";
import { SolutionsSection } from "./_components/SolutionsSection";
import { StatCards } from "./_components/StatCards";
import { TestimonialsSection } from "./_components/TestimonialsSection";

export const metadata: Metadata = getSEOTags({
  title: "Digital Solutions - Transform Your Business",
  description: "Elevate your business with our cutting-edge digital solutions. From web development to digital marketing, we deliver innovative strategies that drive growth and success.",
  canonicalUrlRelative: "/home-2",
  type: "website",
  images: [
    {
      url: "/images/homepage2/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Digital Solutions and Services",
    }
  ],
  keywords: [
    "Digital Solutions",
    "Web Development",
    "Digital Marketing",
    "Business Strategy",
    "Digital Transformation",
    "Technology Solutions",
    "Innovation",
    "Business Growth",
    "Digital Services",
    "Custom Solutions"
  ]
});

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