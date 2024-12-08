"use client";

import { ScrollInView } from "@/components/motion/ScrollInView";
import { CaseStudy } from "@/types";
import { motion } from "motion/react";
import { FC, useEffect, useState } from "react";
import { CaseStudyCard } from "./CaseStudyCard";

interface CaseStudiesProps {
  initialCaseStudies: CaseStudy[];
}

const ITEMS_PER_PAGE = 6;

export const CaseStudies: FC<CaseStudiesProps> = ({ initialCaseStudies }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [caseStudies, setCaseStudies] =
    useState<CaseStudy[]>(initialCaseStudies);
  const [displayedItems, setDisplayedItems] = useState<CaseStudy[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(caseStudies.map((study) => study.category)),
  ];

  useEffect(() => {
    const filtered =
      activeCategory === "All"
        ? caseStudies
        : caseStudies.filter((study) => study.category === activeCategory);

    setDisplayedItems(filtered.slice(0, page * ITEMS_PER_PAGE));
    setHasMore(filtered.length > page * ITEMS_PER_PAGE);
  }, [page, activeCategory, caseStudies]);

  const loadMore = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      setPage((prev) => prev + 1);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        if (hasMore) loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore]);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[linear-gradient(45deg,#8A6FF9,#6B4FD9)]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.4))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container relative mx-auto px-4 py-24 sm:px-6">
          <ScrollInView className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
              CASE STUDIES
            </span>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Client Success Stories
            </h1>
            <p className="text-lg text-white/80">
              Explore how we&apos;ve helped businesses achieve exceptional
              results through innovative digital strategies and solutions.
            </p>
          </ScrollInView>
        </div>

        {/* Wave Divider */}
        <div className="relative">
          <svg
            viewBox="0 0 1440 200"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-background"
          >
            <path d="M0 120l48 13.3c48 13.4 144 40 240 40s192-26.6 288-40c96-13.3 192-13.3 288 0s192 40 288 40 192-26.7 240-40l48-13.3v80H0z" />
          </svg>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative -mt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setPage(1);
                }}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-theme-primary-600 text-white shadow-lg"
                    : "bg-card text-muted-foreground hover:bg-theme-primary-500/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {displayedItems.map((caseStudy, index) => (
              <CaseStudyCard
                key={caseStudy.slug}
                caseStudy={caseStudy}
                index={index}
              />
            ))}
          </div>

          {loading && (
            <div className="mt-8 text-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-theme-primary-500 border-r-transparent align-[-0.125em]" />
            </div>
          )}

          {!hasMore && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-12 text-center text-muted-foreground"
            >
              No more case studies to load
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
};

export default CaseStudies;
