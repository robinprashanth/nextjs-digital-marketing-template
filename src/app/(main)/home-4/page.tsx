import { Metadata } from "next";
import { HeroSection } from "./_components/HeroSection";
import { CourseCategories } from "./_components/CourseCategories";
import { LearningPaths } from "./_components/LearningPaths";
import { InstructorProfiles } from "./_components/InstructorProfiles";
import { SuccessStories } from "./_components/SuccessStories";
import { LiveClassDemo } from "./_components/LiveClassDemo";
import { CertificateShowcase } from "./_components/CertificateShowcase";
import { LearningTools } from "./_components/LearningTools";
import { PricingPlans } from "./_components/PricingPlans";
import { FAQ } from "./_components/FAQ";
import { NewsletterSignup } from "./_components/NewsletterSignup";
import { MobileAppPromo } from "./_components/MobileAppPromo";
import { UpcomingEvents } from "./_components/UpcomingEvents";
import { CareerSupport } from "./_components/CareerSupport";

export const metadata: Metadata = {
  title: "EduPro - Modern Learning Platform",
  description: "Transform your future with our comprehensive online learning platform. Expert-led courses, interactive learning paths, and recognized certifications.",
};

export default function Home4() {
  return (
    <main className="relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 h-[1000px] w-[1000px] rounded-full bg-theme-primary-500/10 blur-[128px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-0 right-0 h-[800px] w-[800px] rounded-full bg-theme-secondary-500/10 blur-[128px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      {/* Content */}
      <div className="relative">
        <HeroSection />
        <CourseCategories />
        <LearningPaths />
        <InstructorProfiles />
        <SuccessStories />
        <LiveClassDemo />
        <CertificateShowcase />
        <LearningTools />
        <PricingPlans />
        <FAQ />
        <NewsletterSignup />
        <MobileAppPromo />
        <UpcomingEvents />
        <CareerSupport />
      </div>
    </main>
  );
} 