import { HeroSection } from "./_components/HeroSection";
import { Metadata } from "next";
import { FeaturesGrid } from "./_components/FeaturesGrid";
import { SocialProofSection } from "./_components/SocialProofSection";
import { ProductShowcase } from "./_components/ProductShowcase";
import { CoreFeatures } from "./_components/CoreFeatures";
import { AppDownload } from "./_components/AppDownload";
import { PricingPlans } from "./_components/PricingPlans";
import { FAQ } from "./_components/FAQ";
import { Updates } from "./_components/Updates";
import { Support } from "./_components/Support";

export const metadata: Metadata = {
  title: "Mobile App - All-in-one Platform",
  description: "Transform your business with our comprehensive mobile app solution. All the tools you need to grow, in one simple platform.",
};

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
        {/* We'll add other sections here as we build them:
          <FeaturesGrid />
          <SocialProofSection />
          <ProductShowcase />
          <CoreFeatures />
          <AnalyticsDashboard />
          <CommunitySection />
          <DesignGallery />
          <FeaturesList />
          <CtaSection />
        */}
      </div>
    </main>
  );
} 