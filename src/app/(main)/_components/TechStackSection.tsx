"use client";

import { FC, useState, useMemo } from "react";
import { motion } from "motion/react";
import { TechCard } from "./TechStack/TechCard";
import { TechCategories } from "./TechStack/TechCategories";
import { techTools } from "./TechStack/techTools";
import { CertificationsCTA } from "@/components/cta/Presets";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const TechStackSection: FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = useMemo(
    () => [...new Set(techTools.map((tool) => tool.category))],
    [],
  );

  const filteredTools = useMemo(
    () =>
      activeCategory === "all"
        ? techTools
        : techTools.filter((tool) => tool.category === activeCategory),
    [activeCategory],
  );

  return (
    <section className="bg-gray-50 py-24 dark:bg-theme-neutral-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <SectionHeading
            alignment="center"
            title={["Powered by Leading Technology"]}
            subtitle="OUR TECH STACK"
            subtitleColor="ocean"
            animated={true}
            paragraph=" We leverage industry-leading tools and platforms to deliver
           exceptional results for our clients."
          />
        

        {/* Categories Filter */}
        <div className="mb-12">
          <TechCategories
            categories={categories}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />
        </div>

        {/* Tech Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredTools.map((tool, index) => (
            <TechCard key={tool.id} tool={tool} delay={index * 0.1} />
          ))}
        </motion.div>

        {/* Certifications CTA */}
        <CertificationsCTA path="/about" />

      </div>
    </section>
  );
};
