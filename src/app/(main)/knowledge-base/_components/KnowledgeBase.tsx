"use client";

import { FC, useState, useEffect } from "react";
import { motion } from "motion/react";
import { MessagesSquare, Video } from "lucide-react";
import { SearchBar } from "./SearchBar";
import { CategoryGrid } from "./CategoryGrid";
import { FeaturedArticles } from "./FeaturedArticles";
import { PopularTopics } from "./PopularTopics";
import { CommunitySection } from "./CommunitySection";
import { NewsletterSection } from "./NewsletterSection";
import { KnowledgeArticle } from "@/types";
import { categories } from "../data/categories";

interface KnowledgeBaseProps {
  articles: KnowledgeArticle[];
}

export const KnowledgeBase: FC<KnowledgeBaseProps> = ({
  articles: initialArticles,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredArticles, setFilteredArticles] = useState(initialArticles);

  useEffect(() => {
    const filtered = initialArticles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        );

      const matchesCategory =
        selectedCategory === "all" || article.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    setFilteredArticles(filtered);
  }, [searchQuery, selectedCategory, initialArticles]);

  // Update category counts based on actual articles
  const categoriesWithCounts = categories.map((category) => ({
    ...category,
    articleCount: initialArticles.filter(
      (article) => article.category === category.id,
    ).length,
  }));

  // Get popular topics based on helpful count
  const popularArticles = [...initialArticles]
    .sort((a, b) => (b.helpful || 0) - (a.helpful || 0))
    .slice(0, 5);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[linear-gradient(45deg,#0B0B1E,#1A1A2E)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(147,51,234,0.1),transparent)] opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.1),transparent)] opacity-70" />

        <div className="container relative mx-auto px-4 py-24 sm:px-6">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
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

      {/* Categories Section */}
      <section className="relative -mt-20 pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <CategoryGrid
            categories={categoriesWithCounts}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
      </section>

      {/* Featured Articles */}
      <FeaturedArticles
        articles={filteredArticles}
        categories={categoriesWithCounts}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Help Section */}
      <section className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-24 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-purple-500 to-purple-700 p-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Can&apos;t find what you&apos;re looking for?
            </h2>
            <p className="mb-8 text-lg text-white/80">
              Our support team is here to help. Get in touch with us for
              personalized assistance.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <button className="flex items-center gap-2 rounded-full bg-white px-8 py-3 text-base font-semibold text-purple-600 transition-all hover:bg-gray-100">
                <MessagesSquare className="h-5 w-5" />
                Contact Support
              </button>
              <button className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20">
                <Video className="h-5 w-5" />
                Schedule a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Topics */}
      <PopularTopics articles={popularArticles} />

      {/* Community Section */}
      <CommunitySection />

      {/* Newsletter Section */}
      <NewsletterSection />
    </main>
  );
};
