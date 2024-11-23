"use client";
import { FC, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import Image from "next/image";
import { PortfolioItemProps } from "@/types";

const PortfolioCard: FC<PortfolioItemProps> = ({
  title,
  category,
  metrics,
  image,
  color,
  gradient,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group cursor-pointer"
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
                <p className="text-sm text-gray-600 dark:text-gray-400">
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

const categories = [
  "All",
  "E-commerce",
  "SaaS",
  "Healthcare",
  "Real Estate",
  "Technology",
];

export const PortfolioSection: FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const portfolioItems: PortfolioItemProps[] = [
    {
      title: "E-commerce Revenue Boost",
      category: "E-commerce",
      metrics: [
        {
          label: "Revenue Increase",
          value: "$2.4M",
          change: "+127% YoY",
        },
        {
          label: "Conversion Rate",
          value: "4.8%",
          change: "+89% YoY",
        },
      ],
      image: "/images/portfolio/ecommerce.jpg",
      color: "bg-purple-500/10",
      gradient: "bg-gradient-to-br from-purple-600 to-pink-600",
    },
    {
      title: "SaaS Growth Strategy",
      category: "SaaS",
      metrics: [
        {
          label: "User Acquisition",
          value: "15K+",
          change: "+204% YoY",
        },
        {
          label: "Customer LTV",
          value: "$2,850",
          change: "+65% YoY",
        },
      ],
      image: "/images/portfolio/saas.jpg",
      color: "bg-blue-500/10",
      gradient: "bg-gradient-to-br from-blue-600 to-cyan-600",
    },
    {
      title: "Healthcare Tech Platform",
      category: "Healthcare",
      metrics: [
        {
          label: "Patient Engagement",
          value: "98%",
          change: "+45% YoY",
        },
        {
          label: "Cost Reduction",
          value: "32%",
          change: "Cost Savings",
        },
      ],
      image: "/images/portfolio/healthcare.jpg",
      color: "bg-emerald-500/10",
      gradient: "bg-gradient-to-br from-emerald-600 to-teal-600",
    },
    // Add more items as needed
  ];

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section className="bg-gray-50 py-24 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent">
            SUCCESS STORIES
          </span>
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Transforming Businesses
            <br />
            Through Digital Excellence
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Explore our portfolio of successful partnerships and discover how
            we&apos;ve helped businesses achieve exceptional growth through
            innovative digital strategies.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300"
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="rounded-full bg-purple-600 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-xl">
            View All Case Studies
          </button>
        </motion.div>
      </div>
    </section>
  );
};
