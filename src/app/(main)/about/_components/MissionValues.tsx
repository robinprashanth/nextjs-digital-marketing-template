"use client";
import { FC } from "react";
import { Target, Heart, Users, Lightbulb, Shield, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScrollInView } from "@/components/motion/ScrollInView";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ValueCard: FC<ValueCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
}) => (
  <ScrollInView delay={delay} duration={0.5}
    className="group relative"
  >
    <div className="relative overflow-hidden rounded-2xl border border-theme-neutral-800 bg-card p-6 transition-all duration-300 hover:border-theme-primary-500/20 hover:shadow-[0_0_30px_2px_rgba(147,51,234,0.1)]">
      {/* Icon */}
      <div className="mb-4 inline-flex rounded-lg bg-theme-primary-500/10 p-3 text-theme-primary-500">
        {icon}
      </div>

      {/* Content */}
      <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </ScrollInView>
);

export const MissionValues: FC = () => {
  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Result-Driven Approach",
      description:
        "We focus on delivering measurable results that directly impact our clients' business growth and success.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Client-Centric Focus",
      description:
        "Our clients' success is our success. We build lasting partnerships through dedication and commitment.",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation First",
      description:
        "We constantly push boundaries and embrace new technologies to stay ahead in the digital landscape.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaborative Spirit",
      description:
        "We believe in the power of teamwork, both internally and with our clients, to achieve exceptional results.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Integrity & Trust",
      description:
        "We maintain the highest standards of professionalism, transparency, and ethical business practices.",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Continuous Growth",
      description:
        "We're committed to continuous learning and improvement in our pursuit of excellence.",
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
            Mission & Values
          </span>
          <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            Guided by{" "}
            <span className="bg-gradient-to-r from-theme-primary-400 to-theme-primary-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our mission is to empower businesses with innovative digital
            solutions that drive growth and create lasting impact. We&apos;re
            guided by core values that define who we are and how we work.
          </p>
        </ScrollInView>

        {/* Mission Statement */}
        <ScrollInView
          className="mx-auto mb-20 max-w-4xl"
        >
          <div className="rounded-2xl border border-theme-neutral-800 bg-card p-8 text-center md:p-12">
            <h3 className="mb-4 text-2xl font-bold text-foreground">
              Our Mission
            </h3>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              &ldquo;To revolutionize digital marketing through innovation and
              excellence, helping businesses thrive in the digital age while
              setting new standards for creativity, results, and client
              satisfaction.&ldquo;
            </p>
          </div>
        </ScrollInView>

        {/* Values Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollInView
          delay={0.6}
          className="mx-auto mt-20 max-w-3xl text-center"
        >
          <p className="mb-6 text-lg text-muted-foreground">
            Join us in our mission to transform the digital landscape and create
            meaningful impact for businesses worldwide.
          </p>
          <Button variant="cta" size="fluid" asChild>
            <Link href="/contact" className="group">
              Partner With Us
            </Link>
          </Button>
        </ScrollInView>
      </div>
    </section>
  );
};
