import { Metadata } from "next";
import { getSEOTags } from "@/lib/seo";
import { HeroSection } from "./_components/HeroSection";
import { FeaturesGrid } from "./_components/FeaturesGrid";
import { SocialProofSection } from "./_components/SocialProofSection";
import { ProductShowcase } from "./_components/ProductShowcase";
import { CoreFeatures } from "./_components/CoreFeatures";
import { AppDownload } from "./_components/AppDownload";
import { PricingPlans } from "./_components/PricingPlans";
import { FAQ } from "./_components/FAQ";
import { Updates } from "./_components/Updates";
import { Support } from "./_components/Support";

export const metadata: Metadata = getSEOTags({
  title: "All-in-One Platform - Simplify Your Workflow",
  description: "Transform your workflow with our comprehensive platform. Powerful features, seamless integration, and intuitive design to help teams work smarter, not harder.",
  canonicalUrlRelative: "/home-3",
  type: "website",
  images: [
    {
      url: "/images/homepage3/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "All-in-One Platform Features",
    }
  ],
  keywords: [
    "Workflow Management",
    "Team Collaboration",
    "Project Management",
    "Task Automation",
    "Business Software",
    "Productivity Tools",
    "Team Communication",
    "Work Management",
    "Remote Work",
    "Business Efficiency"
  ]
});

export default function Home3() {
  return (
    <main className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50" />
      
      {/* Content */}
      <div className="relative">
        <HeroSection />
        <FeaturesGrid />
        <div className="relative">
          <SocialProofSection />
          <ProductShowcase />
        </div>
        <CoreFeatures />
        <AppDownload />
        <PricingPlans />
        <FAQ />
        <Updates />
        <Support />
      </div>
    </main>
  );
} 