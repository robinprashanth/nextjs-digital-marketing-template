import { Metadata } from "next";
import { getSEOTags } from "@/lib/seo";
import { TeamSectionSelect } from "@/components/teams/TeamSectionSelect";
import Awards from "./_components/Awards";
import ClientSuccess from "./_components/ClientSuccess";
import { Hero } from "./_components/Hero";
import { MissionValues } from "./_components/MissionValues";
import OurProcess from "./_components/OurProcess";
import { OurStory } from "./_components/OurStory";
import WhyChooseUs from "./_components/WhyChooseUs";

export const metadata: Metadata = getSEOTags({
  title: "About Us - Our Story & Mission",
  description: "Learn about our journey, values, and the passionate team behind our success. Discover how we're transforming industries and making a difference through innovation and excellence.",
  canonicalUrlRelative: "/about",
  type: "website",
  images: [
    {
      url: "/images/about/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Our Team and Company Culture",
    }
  ],
  keywords: [
    "Company History",
    "Our Mission",
    "Company Values",
    "Team Culture",
    "Leadership Team",
    "Company Awards",
    "Client Success Stories",
    "Innovation Process",
    "Industry Experience",
    "Corporate Vision"
  ]
});

export default function AboutPage() {
  return (
    <main className="bg-background">
      <Hero />
      <OurStory />
      <MissionValues />
      <TeamSectionSelect />
      <WhyChooseUs />
      <OurProcess />
      <ClientSuccess />
      <Awards />
    </main>
  );
}
