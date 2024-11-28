"use client";

import { FC } from "react";
import {
  Check,
  Trophy,
  Rocket,
  Target,
  Users,
  Globe,
  LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScrollInView } from "@/components/motion/ScrollInView";

interface Statistic {
  value: string;
  label: string;
}

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  stats: Statistic[];
}

interface FeatureCardProps extends Feature {
  index: number;
}

const FeatureCard: FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  stats,
  index,
}) => (
  <ScrollInView  delay={ index * 0.1}
    className="group relative rounded-2xl border border-gray-800 bg-card p-6 transition-all duration-300 hover:border-theme-primary-500/20 hover:shadow-[0_0_30px_2px_rgba(147,51,234,0.1)]"
  >
    <div className="mb-4 inline-flex rounded-xl bg-theme-primary-500/10 p-3">
      <Icon className="h-6 w-6 text-theme-primary-400" />
    </div>

    <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
    <p className="mb-4 text-muted-foreground">{description}</p>

    {stats && (
      <div className="mt-4 grid grid-cols-2 gap-4 rounded-xl bg-theme-primary-500/5 p-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="text-2xl font-bold text-theme-primary-400">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    )}
  </ScrollInView>
);

export const WhyChooseUs: FC = () => {
  const features: Feature[] = [
    {
      icon: Trophy,
      title: "Industry Excellence",
      description:
        "Award-winning agency with a proven track record of delivering exceptional results across diverse industries.",
      stats: [
        { value: "50+", label: "Awards Won" },
        { value: "10+", label: "Years Experience" },
      ],
    },
    {
      icon: Rocket,
      title: "Innovation First",
      description:
        "Leveraging cutting-edge technologies and strategies to keep your business ahead of the digital curve.",
      stats: [
        { value: "100%", label: "Success Rate" },
        { value: "24/7", label: "Support" },
      ],
    },
    {
      icon: Target,
      title: "Results Driven",
      description:
        "Focused on delivering measurable results and ROI through data-driven strategies and continuous optimization.",
      stats: [
        { value: "300%", label: "Avg. ROI" },
        { value: "95%", label: "Client Retention" },
      ],
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "A diverse team of certified professionals with deep expertise across all digital marketing disciplines.",
      stats: [
        { value: "150+", label: "Experts" },
        { value: "15+", label: "Specialties" },
      ],
    },
    {
      icon: Check,
      title: "Proven Process",
      description:
        "Refined methodology that ensures consistent, high-quality delivery and exceptional results.",
      stats: [
        { value: "500+", label: "Projects" },
        { value: "98%", label: "On-time Delivery" },
      ],
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "International presence with the capability to deliver results across different markets and cultures.",
      stats: [
        { value: "30+", label: "Countries" },
        { value: "12", label: "Languages" },
      ],
    },
  ];

  return (
    <section className="relative border-t border-gray-800 py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <ScrollInView
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-theme-primary-500/40 px-4 py-1.5 text-sm font-semibold text-theme-primary-400">
            Why Choose Us
          </span>
          <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            Driving{" "}
            <span className="bg-gradient-to-r from-theme-primary-400 to-theme-primary-600 bg-clip-text text-transparent">
              Digital Excellence
            </span>{" "}
            Through Innovation
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine expertise, innovation, and proven methodologies to
            deliver exceptional results that drive your business forward in the
            digital age.
          </p>
        </ScrollInView>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollInView
          className="mx-auto mt-20 max-w-3xl text-center"
        >
          <Button variant="cta" size="fluid" asChild>
            <Link href="/contact" className="group">
              Start Your Digital Journey
            </Link>
          </Button>
        </ScrollInView>
      </div>
    </section>
  );
};

export default WhyChooseUs;
