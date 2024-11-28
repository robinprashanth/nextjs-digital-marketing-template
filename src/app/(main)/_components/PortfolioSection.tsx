"use client";

import { FC, useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { CaseStudy } from "@/types";
import { Button } from "@/components/ui/button";
import { ScrollInView } from "@/components/motion/ScrollInView";

interface CaseStudiesProps {
  initialCaseStudies: CaseStudy[];
}
const PortfolioCard: FC<CaseStudy> = ({
  title,
  category,
  metrics,
  image,
  color,
  gradient,
  slug,
}) => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      onClick={() => router.push(`/case-studies/${slug}`)}
    >
      <div className={`relative overflow-hidden rounded-3xl ${color} p-1`}>
        <div className="relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray-900">
          {/* Image Section */}
          <div className="relative h-64 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className={`absolute inset-0 ${gradient} opacity-40`} />

            {/* Category Tag */}
            <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1 text-sm font-medium backdrop-blur-sm">
              {category}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            <div className="mb-4 flex items-start justify-between">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {title}
              </h3>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="rounded-full bg-gray-100 p-2 dark:bg-gray-800"
              >
                <ArrowUpRight className="h-4 w-4" />
              </motion.div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <div key={index} className="space-y-1">
                  <p className="text-sm text-theme-neutral-600 dark:text-theme-neutral-400">
                    {metric.label}
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    {metric.value}
                  </p>
                  <p className="flex items-center gap-1 text-sm text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    {metric.change}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const PortfolioSection: FC<CaseStudiesProps> = ({
  initialCaseStudies,
}) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const router = useRouter();

  useEffect(() => {
    const fetchCaseStudies = async () => {
      const studies = initialCaseStudies;
      setCaseStudies(initialCaseStudies);

      // Extract unique categories from case studies
      const uniqueCategories = Array.from(
        new Set(studies.map((study) => study.category)),
      );
      setCategories(["All", ...uniqueCategories]);
    };

    fetchCaseStudies();
  }, []);

  const filteredItems =
    activeCategory === "All"
      ? caseStudies
      : caseStudies.filter((item) => item.category === activeCategory);

  return (
    <section className="bg-gray-50 py-24 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <ScrollInView
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 block bg-gradient-to-r from-theme-primary-600 to-pink-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent">
            SUCCESS STORIES
          </span>
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Transforming Businesses
            <br />
            Through Digital Excellence
          </h2>
          <p className="text-lg text-theme-neutral-600 dark:text-theme-neutral-400">
            Explore our portfolio of successful partnerships and discover how
            we&apos;ve helped businesses achieve exceptional growth through
            innovative digital strategies.
          </p>
        </ScrollInView>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-theme-primary-600 text-white shadow-lg"
                  : "bg-white text-theme-neutral-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300"
              } `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredItems.map((item, index) => (
            <PortfolioCard key={index} {...item} />
          ))}
        </motion.div>

        {/* CTA Button */}
        <ScrollInView
          className="mt-16 text-center"
        >
          <Button
            variant="action"
            size="fluid"
            rounded="full"
            onClick={() => router.push("/case-studies")}
            className="rounded-full bg-theme-primary-600 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-xl"
          >
            View All Case Studies
          </Button>
        </ScrollInView>
      </div>
    </section>
  );
};
