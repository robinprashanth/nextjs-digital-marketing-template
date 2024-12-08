import { TeamSectionSelect } from "@/components/teams/TeamSectionSelect";
import Awards from "./_components/Awards";
import ClientSuccess from "./_components/ClientSuccess";
import { Hero } from "./_components/Hero";
import { MissionValues } from "./_components/MissionValues";
import OurProcess from "./_components/OurProcess";
import { OurStory } from "./_components/OurStory";
import WhyChooseUs from "./_components/WhyChooseUs";

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
