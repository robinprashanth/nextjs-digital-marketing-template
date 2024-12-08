"use client";

import React, { FC } from "react";
import { ScrollAnimations } from "@/components/motion/ScrollInView";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface MethodStepProps {
  number: string;
  title: string[];
  subtitle: string;
  isHighlighted?: boolean;
}

const MethodStep: FC<MethodStepProps> = ({
  number,
  title,
  subtitle,
  isHighlighted = false,
}) => (
  <ScrollAnimations.View
    className={`mb-1 w-full overflow-hidden transition-all duration-300 ${
      isHighlighted
        ? "rounded-2xl bg-theme-sunflower-400/50 shadow-lg"
        : "rounded-xl bg-card hover:shadow-md"
    }`}
    useInView={true}
  >
    <div className={`relative ${isHighlighted ? "p-8 md:p-10" : "p-6"}`}>
      <div className="flex flex-col items-start gap-6 md:flex-row">
        {/* Number */}
        <span className="text-[6rem] font-black leading-none text-theme-neutral-900">
          {number}
        </span>

        {/* Content */}
        <div className="flex-1">
          <div className="max-w-3xl">
            {title.map((line, index) => (
              <h3
                key={index}
                className="text-2xl font-black uppercase leading-tight text-theme-neutral-900"
              >
                {line}
              </h3>
            ))}
            <p className="mt-3 text-sm text-theme-neutral-700">{subtitle}</p>
          </div>

          {/* Images for Step 2 */}
          {isHighlighted && (
            <div className="mt-10">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
                <ScrollAnimations.View
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-card shadow-sm transition-all duration-300 hover:shadow-md"
                  delay={0.3}
                  useInView={true}
                >
                  <Image
                    src="/images/working-method/strategy-1.jpg"
                    alt="Research & Analysis"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                </ScrollAnimations.View>

                <ScrollAnimations.View
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-card shadow-sm transition-all duration-300 hover:shadow-md"
                  delay={0.2}
                  useInView={true}
                >
                  <Image
                    src="/images/working-method/strategy-2.jpg"
                    alt="Creative Development"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                </ScrollAnimations.View>

                <ScrollAnimations.View
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-card shadow-sm transition-all duration-300 hover:shadow-md"
                  delay={0.3}
                  useInView={true}
                >
                  <Image
                    src="/images/working-method/strategy-3.jpg"
                    alt="Implementation"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                </ScrollAnimations.View>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </ScrollAnimations.View>
);

export const WorkingMethodSection: FC = () => {
  const steps: MethodStepProps[] = [
    {
      number: "1.",
      title: ["Understanding Your", "Business"],
      subtitle:
        "An in-depth analysis of your business objectives, market positioning, and challenges you face.",
    },
    {
      number: "2.",
      title: ["Strategic Planning", "and Creative Execution"],
      subtitle:
        "Based on in-depth research and data analysis, we craft a strategic roadmap that outlines clear objectives, timelines and key deliverables.",
      isHighlighted: true,
    },
    {
      number: "3.",
      title: ["Collaboration and", "Optimization"],
      subtitle:
        "We work closely with your team to implement the strategy while continuously optimizing for best results.",
    },
    {
      number: "4.",
      title: ["Delivering and", "Reporting Results"],
      subtitle:
        "We provide detailed reports of your success, offering full transparency in our process.",
    },
  ];

  return (
    <section className="bg-theme-neutral-100 py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <ScrollAnimations.Stagger className="mb-16" delayStep={0.2}>
          <SectionHeading
            alignment="center"
            title={["Our Working", "Method"]}
            subtitle="How We Work"
          />
        </ScrollAnimations.Stagger>

        <div className="space-y-1">
          {steps.map((step, index) => (
            <MethodStep key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};
