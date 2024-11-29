"use client";
import { FC, useState } from "react";
import { motion } from "motion/react";
import {
  Search,
  HelpCircle,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import type { SearchState } from "../data/content";
import { pageConfig, categories, faqs, popularSearches } from "../data/content";
import { Button } from "@/components/ui/button";
import { ScrollInView } from "@/components/motion/ScrollInView";
import { SupportCTA } from "@/components/cta/SupportCTA";

export const FAQs: FC = () => {
  const [searchState, setSearchState] = useState<SearchState>({
    query: "",
    category: "all",
  });
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesQuery = searchState.query
      ? faq.question.toLowerCase().includes(searchState.query.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchState.query.toLowerCase())
      : true;
    return matchesCategory && matchesQuery;
  });

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[linear-gradient(45deg,#8A6FF9,#6B4FD9)]">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 py-24 sm:px-6">
          <ScrollInView
            className="mx-auto max-w-3xl text-center"
          >
            {/* Title Badge */}
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
              HELP CENTER
            </span>

            {/* Title */}
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {pageConfig.title}
            </h1>
            <p className="text-lg text-white/80">{pageConfig.description}</p>

            {/* Search Box */}
            <div className="mt-12">
              <div className="relative mx-auto max-w-2xl">
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchState.query}
                  onChange={(e) =>
                    setSearchState((prev) => ({
                      ...prev,
                      query: e.target.value,
                    }))
                  }
                  className="w-full rounded-full border border-white/10 bg-white/10 px-6 py-4 pl-12 text-white placeholder-white/60 backdrop-blur-sm focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10"
                />
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/60" />
              </div>

              {/* Popular Searches */}
              {!searchState.query && (
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                  <span className="text-sm text-white/60">
                    Popular searches:
                  </span>
                  {popularSearches.map((term) => (
                    <Button
                      key={term}
                      variant="glass"
                      size="sm"
                      onClick={() =>
                        setSearchState((prev) => ({ ...prev, query: term }))
                      }
                    >
                      {term}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </ScrollInView>
        </div>

        {/* Wave Divider */}
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 200"
            className="fill-background"
          >
            <path
              fillOpacity="1"
              d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </section>
      {/* Content Section */}
      <section className=" relative bg-background pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Categories Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative overflow-hidden rounded-2xl border p-6 text-left transition-all hover:border-theme-primary-500/20 ${
                  activeCategory === category.id
                    ? "border-theme-primary-500/20 bg-theme-primary-500/5"
                    : "border-theme-neutral-800"
                }`}
              >
                <div className="mb-4 inline-block rounded-xl bg-theme-primary-500/10 p-3">
                  <HelpCircle className="h-6 w-6 text-theme-primary-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-theme-primary-500">
                  <span>View</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.button>
            ))}
          </div>

          {/* FAQs Grid */}
          <div className="mt-16">
            <div className="mx-auto max-w-3xl space-y-4">
              {filteredFAQs.map((faq) => (
                <ScrollInView
                  key={faq.id}
                  className="overflow-hidden rounded-2xl border border-theme-neutral-800 bg-card"
                >
                  <Button
                    variant="ghost"
                    className="w-full justify-between p-6"
                    onClick={() =>
                      setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)
                    }
                  >
                    <h3 className="text-lg font-medium">{faq.question}</h3>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        expandedFAQ === faq.id ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                  {expandedFAQ === faq.id && (
                    <div className="border-t border-theme-neutral-800 px-6 py-4">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </ScrollInView>
              ))}
            </div>
          </div>

          {/* Still Have Questions Section */}
          <SupportCTA />

        </div>
      </section>
    </main>
  );
};
