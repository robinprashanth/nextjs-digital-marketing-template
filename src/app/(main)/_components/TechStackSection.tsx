"use client";
import { FC, useState, useMemo } from "react";
import { motion } from "motion/react";
import { TechCard } from "./TechStack/TechCard";
import { TechCategories } from "./TechStack/TechCategories";
import { techTools } from "./TechStack/techTools";
import { Button } from "@/components/ui/button";
import { ScrollInView } from "@/components/motion/ScrollInView";

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
    <section className="bg-gray-50 py-24 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <ScrollInView
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 block bg-gradient-to-r from-theme-primary-600 to-blue-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent">
            OUR TECH STACK
          </span>
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-5xl">
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
        <ScrollInView
          className="mx-auto mt-16 max-w-3xl rounded-2xl bg-gradient-to-r from-theme-primary-600 to-blue-600 p-8 text-center text-white"
        >
          <h3 className="mb-4 text-2xl font-bold">Certified Excellence</h3>
          <p className="mb-6">
            Our team holds multiple certifications from leading platforms,
            ensuring the highest standards of digital marketing expertise.
          </p>
          <Button variant="white-action" size="fluid" rounded="full">
            View All Certifications
          </Button>
        </ScrollInView>
      </div>
    </section>
  );
};
