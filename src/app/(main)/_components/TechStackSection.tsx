"use client";
import { FC, useState, useMemo } from "react";
import { motion } from "motion/react";
import { TechCard } from "./TechStack/TechCard";
import { TechCategories } from "./TechStack/TechCategories";
import { techTools } from "./TechStack/techTools";
import { ScrollInView } from "@/components/motion/ScrollInView";
import { CertificationsCTA } from "@/components/cta/Presets";

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
        <ScrollInView
        useInView={true}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 block bg-gradient-to-r from-theme-primary-600 to-theme-ocean-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent">
            OUR TECH STACK
          </span>
          <h2 className="mb-6 text-3xl font-bold text-theme-neutral-900 dark:text-white md:text-5xl">
            Powered by Leading Technology
          </h2>
          <p className="text-lg text-theme-neutral-600 dark:text-theme-neutral-400">
            We leverage industry-leading tools and platforms to deliver
            exceptional results for our clients.
          </p>
        </ScrollInView>

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
