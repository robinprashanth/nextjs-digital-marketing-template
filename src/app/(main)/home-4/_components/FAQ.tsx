"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
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
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(faq => 
    (activeCategory === "all" || faq.category === activeCategory) &&
    (faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
     faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section className="relative py-16 sm:py-24">
      <div className="container relative z-10 mx-auto max-w-4xl px-4">
        {/* Header */}
        <FadeIn>
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="mb-4 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              Frequently Asked
              <br />
              <span className="text-purple-600">Questions</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Find answers to common questions about our platform and courses
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6 sm:mb-8">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-gray-200 bg-white py-2 pl-10 pr-4 text-sm sm:text-base focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>

          {/* Category Tabs */}
          <div className="mb-8 flex flex-wrap gap-2 sm:gap-4">
            {categories.map((category) => {
              const isActive = activeCategory === category.id;
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base transition-colors",
                    isActive
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  )}
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  {category.label}
                </motion.button>
              );
            })}
          </div>
        </FadeIn>

        {/* FAQ List */}
        <div className="space-y-4">
          <AnimatePresence>
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
              >
                {/* Question */}
                <motion.button
                  onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                  className="flex w-full items-center justify-between p-4 sm:p-6 text-left"
                >
                  <span className="text-sm sm:text-base font-medium">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 sm:h-5 sm:w-5 text-gray-500 transition-transform",
                      openQuestion === index ? "rotate-180" : ""
                    )}
                  />
                </motion.button>

                {/* Answer */}
                <AnimatePresence>
                  {openQuestion === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-4 pb-4 sm:px-6 sm:pb-6"
                    >
                      <p className="text-sm sm:text-base text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results Message */}
        {filteredFaqs.length === 0 && (
          <div className="mt-8 text-center text-gray-500">
            <p className="text-sm sm:text-base">No matching questions found.</p>
          </div>
        )}
      </div>

      {/* Background Decorative Elements - Hide on mobile */}
      <div className="hidden sm:block">
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
      </div>
    </section>
  );
} 