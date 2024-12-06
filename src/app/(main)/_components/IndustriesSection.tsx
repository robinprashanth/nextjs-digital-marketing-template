"use client";

import { ConsultationCTA } from "@/components/cta/Presets";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FC, useState } from "react";
import { IndustriesData } from "./Industries/IndustriesData";
import { IndustryCard } from "./Industries/IndustryCard";
import { IndustryDetail } from "./Industries/IndustryDetail";

export const IndustriesSection: FC = () => {
  const [activeIndustry, setActiveIndustry] = useState(IndustriesData[0]);

  return (
    <section className="bg-gray-50 py-24 dark:bg-theme-neutral-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <SectionHeading
            alignment="center"
            title={["Expertise Across Industries"]}
            subtitle="INDUSTRIES WE SERVE"
            subtitleColor="ocean"
            animated={true}
            paragraph="  We bring deep industry knowledge and specialized expertise to
            deliver exceptional results across diverse sectors."
          />
       

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Industry Cards */}
          <div className="space-y-4">
            {IndustriesData.map((industry, index) => (
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
