"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, Laptop, Book, Users, Shield } from "lucide-react";
import { useState } from "react";

type Category = "all" | "general" | "courses" | "community" | "security";

const categories = [
  { id: "all", label: "All Questions", icon: Book },
  { id: "general", label: "General", icon: Laptop },
  { id: "courses", label: "Courses", icon: Book },
  { id: "community", label: "Community", icon: Users },
  { id: "security", label: "Security", icon: Shield },
] as const;

const faqs = [
  {
    question: "How do I get started with the courses?",
    answer: "Simply create an account, browse our course catalog, and enroll in any course that interests you. You can start with our free courses to get a feel for our platform.",
    category: "general",
  },
  {
    question: "Are the certificates recognized by employers?",
    answer: "Yes, our certificates are industry-recognized and valued by employers worldwide. They validate your skills and knowledge in specific areas.",
    category: "courses",
  },
  {
    question: "Can I interact with other students?",
    answer: "Absolutely! We have a vibrant community where you can join study groups, participate in discussions, and collaborate on projects.",
    category: "community",
  },
  {
    question: "How secure is my personal information?",
    answer: "We take data security seriously. All personal information is encrypted and stored securely following industry best practices and compliance standards.",
    category: "security",
  },
  // Add more FAQs as needed
] as const;

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Filter FAQs based on category and search query
  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="relative py-24">
      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        {/* Header */}
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-6xl font-black tracking-tight">
              FREQUENTLY ASKED
            </h2>
            <div className="relative inline-block">
              <span className="relative z-10 px-6 text-4xl font-bold">
                QUESTIONS
              </span>
              <motion.div
                className="absolute -inset-2 -z-10 rounded-lg bg-[#90EE90]"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              />
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
              Find answers to common questions about our platform, courses, and learning experience.
            </p>
          </div>
        </FadeIn>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative mx-auto max-w-2xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full bg-white/5 py-4 pl-12 pr-4 text-black backdrop-blur-sm transition-colors placeholder:text-gray-400 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-theme-primary-500"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-2 rounded-full px-6 py-3 transition-colors ${
                    activeCategory === category.id
                      ? "bg-theme-primary-500 text-black"
                      : "bg-white/5 text-black/50 hover:bg-white/10"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {category.label}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* FAQ List */}
        <div className="mx-auto max-w-3xl space-y-4">
          <AnimatePresence>
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm"
              >
                <motion.button
                  onClick={() => setExpandedId(expandedId === index ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-semibold text-black">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedId === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {expandedId === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute right-10 bottom-20"
      >
        <div className="h-20 w-20 rounded-full bg-purple-600/20" />
      </motion.div>
      
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute left-20 top-20"
      >
        <div className="h-16 w-16 rounded-full bg-blue-500/20" />
      </motion.div>
    </section>
  );
} 