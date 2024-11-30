"use client";
import { FC } from "react";
import Image from "next/image";
import { Calendar, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  achievementMetrics,
  type AwardType,
  type Certification,
  type PressFeature,
} from "../data/content";
import { ScrollInView } from "@/components/motion/ScrollInView";

const AwardCard: FC<AwardType & { index: number }> = ({
  name,
  organization,
  description,
  date,
  image,
  category,
  index,
}) => (
  <ScrollInView 
    useInView={true}
    delay={0.1 * index}
  >
    <Card className="group relative overflow-hidden bg-gradient-to-br from-background via-muted/5 to-background backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:shadow-theme-primary-500/10">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-theme-primary-500/0 via-transparent to-theme-ocean-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-5" />
      
      {/* Glowing dots in corners */}
      <div className="absolute left-0 top-0 h-px w-px bg-theme-primary-400 shadow-[0_0_15px_5px_rgba(147,51,234,0.3)] transition-all duration-500 group-hover:shadow-[0_0_20px_8px_rgba(147,51,234,0.4)]" />
      <div className="absolute right-0 bottom-0 h-px w-px bg-theme-ocean-400 shadow-[0_0_15px_5px_rgba(59,130,246,0.3)] transition-all duration-500 group-hover:shadow-[0_0_20px_8px_rgba(59,130,246,0.4)]" />

      <CardContent className="relative p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-theme-primary-500/10 to-theme-ocean-500/10" />
            <Image src={image} alt={name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>
          {category && (
            <Badge className="relative overflow-hidden bg-theme-primary-500/10 text-theme-primary-400 transition-colors hover:bg-theme-primary-500/20">
              <span className="relative z-10">{category}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            </Badge>
          )}
        </div>

        <div className="mt-4 space-y-2">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-theme-primary-400 transition-colors duration-300">
            {name}
          </h3>
          <p className="text-sm font-medium text-theme-primary-400">{organization}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
      </CardContent>
    </Card>
  </ScrollInView>
);

const CertificationCard: FC<Certification & { index: number }> = ({
  name,
  organization,
  logo,
  validUntil,
  index,
}) => (
  <ScrollInView useInView={true} delay={0.1 * index}>
    <Card className="group relative overflow-hidden bg-gradient-to-r from-background via-muted/5 to-background transition-all duration-300 hover:shadow-lg hover:shadow-theme-primary-500/10">
      <div className="absolute inset-0 bg-gradient-to-r from-theme-primary-500/0 to-theme-ocean-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-5" />
      
      <CardContent className="relative flex items-center gap-4 p-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-theme-primary-500/5 to-theme-ocean-500/5" />
          <Image src={logo} alt={organization} fill className="object-contain transition-transform duration-500 group-hover:scale-110" />
        </div>
        <div className="flex-1 transition-transform duration-300 group-hover:translate-x-1">
          <h4 className="font-medium text-foreground group-hover:text-theme-primary-400 transition-colors">
            {name}
          </h4>
          <p className="text-sm text-muted-foreground">{organization}</p>
        </div>
        <div className="text-right text-sm text-muted-foreground">
          Valid until {validUntil}
        </div>
      </CardContent>
    </Card>
  </ScrollInView>
);

const PressFeatureCard: FC<PressFeature & { index: number }> = ({
  publication,
  title,
  date,
  logo,
  link,
}) => (
  <Card className="group relative overflow-hidden bg-gradient-to-r from-background via-muted/5 to-background transition-all duration-300 hover:shadow-lg hover:shadow-theme-primary-500/10">
    <div className="absolute inset-0 bg-gradient-to-r from-theme-primary-500/0 to-theme-ocean-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-5" />
    
    <CardContent 
      className="relative flex cursor-pointer items-center gap-4 p-4"
      onClick={() => window.open(link, '_blank')}
    >
      <div className="relative h-12 w-12 overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-theme-primary-500/5 to-theme-ocean-500/5" />
        <Image src={logo} alt={publication} fill className="object-contain transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="flex-1 transition-transform duration-300 group-hover:translate-x-1">
        <h4 className="font-medium text-foreground group-hover:text-theme-primary-400 transition-colors">
          {title}
        </h4>
        <p className="text-sm text-muted-foreground">
          {publication} • {date}
        </p>
      </div>
      <ArrowUpRight className="h-4 w-4 transform text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-theme-primary-400" />
    </CardContent>
  </Card>
);




export const Awards: FC = () => {
  const awards: AwardType[] = [
    {
      name: "Best Digital Marketing Agency",
      organization: "Marketing Excellence Awards",
      description:
        "Recognized for outstanding achievement in digital marketing innovation and client results.",
      date: "2024",
      image: "/images/awards/marketing-excellence.jpg",
      category: "Agency of the Year",
    },
    {
      name: "Digital Innovation Award",
      organization: "Tech Industry Awards",
      description:
        "Awarded for groundbreaking use of AI in digital marketing campaigns.",
      date: "2024",
      image: "/images/awards/tech-innovation.jpg",
      category: "Innovation",
    },
    {
      name: "Client Success Award",
      organization: "Business Growth Forum",
      description: "Honored for delivering exceptional client results and ROI.",
      date: "2024",
      image: "/images/awards/client-success.jpg",
      category: "Client Results",
    },
  ];

  const certifications: Certification[] = [
    {
      name: "Google Premier Partner",
      organization: "Google",
      logo: "/images/certifications/google.png",
      validUntil: "2024",
    },
    {
      name: "Meta Business Partner",
      organization: "Meta",
      logo: "/images/certifications/meta.png",
      validUntil: "2024",
    },
    {
      name: "HubSpot Diamond Partner",
      organization: "HubSpot",
      logo: "/images/certifications/hubspot.jpg",
      validUntil: "2024",
    },
  ];

  const pressFeatures: PressFeature[] = [
    {
      publication: "TechCrunch",
      title: "Digital Agency Revolutionizes Marketing with AI Integration",
      date: "Dec 2023",
      logo: "/placeholders/placeholder.svg",
      link: "#",
    },
    {
      publication: "Forbes",
      title: "Leading the Digital Marketing Evolution",
      date: "Nov 2023",
      logo: "/placeholders/placeholder.svg",
      link: "#",
    },
    {
      publication: "Marketing Weekly",
      title: "Setting New Standards in Digital Excellence",
      date: "Oct 2023",
      logo: "/placeholders/placeholder.svg",
      link: "#",
    },
  ];

  return (
    <section className="relative border-t border-theme-neutral-800 py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <ScrollInView
        useInView={true}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-theme-primary-500/10 px-4 py-1.5 text-sm font-semibold text-theme-primary-400">
            Recognition
          </span>
          <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            Our{" "}
            <span className="bg-gradient-to-r from-theme-primary-400 to-theme-primary-600 bg-clip-text text-transparent">
              Achievements
            </span>{" "}
            & Recognition
          </h2>
          <p className="text-lg text-muted-foreground">
            Industry recognition and accolades that reflect our commitment to
            excellence and innovation in digital marketing.
          </p>
        </ScrollInView>

        {/* Awards Grid */}
        <div className="mb-20">
          <h3 className="mb-8 text-2xl font-semibold text-foreground">
            Awards & Honors
          </h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {awards.map((award, index) => (
              <AwardCard key={index} {...award} index={index} />
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h3 className="mb-8 text-2xl font-semibold text-foreground">
            Professional Certifications
          </h3>
          <div className="grid gap-4">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} index={index} />
            ))}
          </div>
        </div>

        {/* Press Features */}
        <div>
          <h3 className="mb-8 text-2xl font-semibold text-foreground">
            Press & Media Features
          </h3>
          <div className="grid gap-4">
            {pressFeatures.map((feature, index) => (
              <PressFeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>

        {/* Achievement Metrics */}
        <ScrollInView
        useInView={true}
          className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-8 rounded-2xl border border-theme-neutral-800 bg-card p-8 md:grid-cols-4"
        >
          {achievementMetrics.map((metric, index) => (
            <ScrollInView delay={ 0.1 * index}
            useInView={true}
            key={index}
              className="text-center"
            >
              <metric.icon className="mx-auto mb-2 h-6 w-6 text-theme-primary-400" />
              <div className="text-2xl font-bold text-foreground">
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {metric.label}
              </div>
            </ScrollInView>
          ))}
        </ScrollInView>
      </div>
    </section>
  );
};

export default Awards;
