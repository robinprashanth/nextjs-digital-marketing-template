"use client";
import { FC, useState } from "react";
import { IndustryCard } from "./Industries/IndustryCard";
import { IndustryDetail } from "./Industries/IndustryDetail";
import { industries } from "./Industries/Industries";
import { ScrollInView } from "@/components/motion/ScrollInView";
import { ConsultationCTA } from "@/components/cta/Presets";

export const IndustriesSection: FC = () => {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);

  return (
    <section className="bg-gray-50 py-24 dark:bg-theme-neutral-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <ScrollInView
         useInView={true}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 block bg-gradient-to-r from-theme-primary-600 to-theme-ocean-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent">
            INDUSTRIES WE SERVE
          </span>
          <h2 className="mb-6 text-3xl font-bold text-theme-neutral-900 dark:text-white md:text-5xl">
            Expertise Across Industries
          </h2>
          <p className="text-lg text-theme-neutral-600 dark:text-theme-neutral-400">
            We bring deep industry knowledge and specialized expertise to
            deliver exceptional results across diverse sectors.
          </p>
        </ScrollInView>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Industry Cards */}
          <div className="space-y-4">
            {industries.map((industry, index) => (
              <IndustryCard
                key={industry.id}
                industry={industry}
                isActive={activeIndustry.id === industry.id}
                onClick={() => setActiveIndustry(industry)}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* Industry Detail */}
          <div className="lg:col-span-2">
            <IndustryDetail industry={activeIndustry} />
          </div>
        </div>

        {/* CTA Section */}
        <ConsultationCTA />

      </div>
    </section>
  );
};
