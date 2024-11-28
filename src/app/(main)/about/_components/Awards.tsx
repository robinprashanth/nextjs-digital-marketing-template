"use client";
import { FC } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import {
  Trophy,
  Award,
  Star,
  Calendar,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import { ScrollInView } from "@/components/motion/ScrollInView";

interface AwardType {
  name: string;
  organization: string;
  description: string;
  date: string;
  image: string;
  category?: string;
}

interface Certification {
  name: string;
  organization: string;
  logo: string;
  validUntil: string;
}

interface PressFeature {
  publication: string;
  title: string;
  date: string;
  logo: string;
  link: string;
}

interface AwardCardProps extends AwardType {
  index: number;
}

const AwardCard: FC<AwardCardProps> = ({
  name,
  organization,
  description,
  date,
  image,
  category,
  index,
}) => (
  <ScrollInView delay={ 0.1 * index}
    className="group rounded-2xl border border-theme-neutral-800 bg-card p-6 transition-all duration-300 hover:border-theme-primary-500/20 hover:shadow-[0_0_30px_2px_rgba(147,51,234,0.1)]"
  >
    <div className="flex items-start justify-between gap-4">
      <div className="relative h-16 w-16 overflow-hidden rounded-xl">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      {category && (
        <div className="rounded-full bg-theme-primary-500/10 px-3 py-1">
          <span className="text-sm font-medium text-theme-primary-400">
            {category}
          </span>
        </div>
      )}
    </div>

    <h3 className="mt-4 text-xl font-semibold text-foreground">{name}</h3>
    <p className="mt-1 text-sm font-medium text-theme-primary-400">{organization}</p>
    <p className="mt-3 text-sm text-muted-foreground">{description}</p>

    <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
      <Calendar className="h-4 w-4" />
      <span>{date}</span>
    </div>
  </ScrollInView>
);

const CertificationCard: FC<Certification & { index: number }> = ({
  name,
  organization,
  logo,
  validUntil,
  index,
}) => (
  <ScrollInView delay={ 0.1 * index}
    className="flex items-center gap-4 rounded-xl border border-theme-neutral-800 bg-card p-4"
  >
    <div className="relative h-12 w-12 overflow-hidden rounded-lg">
      <Image src={logo} alt={organization} fill className="object-contain" />
    </div>
    <div className="flex-1">
      <h4 className="font-medium text-foreground">{name}</h4>
      <p className="text-sm text-muted-foreground">{organization}</p>
    </div>
    <div className="text-right text-sm text-muted-foreground">
      Valid until {validUntil}
    </div>
  </ScrollInView>
);

const PressFeatureCard: FC<PressFeature & { index: number }> = ({
  publication,
  title,
  date,
  logo,
  link,
  index,
}) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.1 * index }}
    className="group flex items-center gap-4 rounded-xl border border-theme-neutral-800 bg-card p-4 transition-all duration-300 hover:border-theme-primary-500/20"
  >
    <div className="relative h-12 w-12 overflow-hidden rounded-lg">
      <Image src={logo} alt={publication} fill className="object-contain" />
    </div>
    <div className="flex-1">
      <h4 className="font-medium text-foreground group-hover:text-theme-primary-400">
        {title}
      </h4>
      <p className="text-sm text-muted-foreground">
        {publication} • {date}
      </p>
    </div>
    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-theme-primary-400" />
  </motion.a>
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
          className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-8 rounded-2xl border border-theme-neutral-800 bg-card p-8 md:grid-cols-4"
        >
          {[
            { icon: Trophy, label: "Awards Won", value: "50+" },
            { icon: Star, label: "Recognition", value: "100+" },
            { icon: Award, label: "Certifications", value: "25+" },
            { icon: ExternalLink, label: "Features", value: "75+" },
          ].map((metric, index) => (
            <ScrollInView delay={ 0.1 * index}
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
