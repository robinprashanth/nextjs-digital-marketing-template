"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { FadeInStagger } from "@/components/motion/FadeInStagger";
import { FadeInStaggerItem } from "@/components/motion/FadeInStaggerItem";
import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  {
    title: "Development",
    description: "Learn coding and software development skills.",
    icon: "/images/homepage4/categories/dev-icon-3d.jpeg",
    bgColor: "#FFD54F",
  },
  {
    title: "Business",
    description: "Master business and entrepreneurship.",
    icon: "/images/homepage4/categories/business-icon-3d.jpeg",
    bgColor: "#4A90E2",
  },
  {
    title: "Marketing",
    description: "Digital marketing and brand building.",
    icon: "/images/homepage4/categories/marketing-icon-3d.jpeg",
    bgColor: "#FF80AB",
  },
];

export function CourseCategories() {
  return (
    <section className="relative py-24">
      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        {/* Header with 3D Style */}
        <FadeIn>
          <div className="mb-20">
            <div className="relative text-center">
              <h2 className="text-7xl font-black tracking-tight text-black">
                COURSE CATEGORIES
              </h2>
              <div className="relative mt-4 inline-block">
                <span className="relative z-10 px-6 text-4xl font-bold">
                  FOR YOUR FUTURE
                </span>
                <motion.div
                  className="absolute -inset-2 -z-10 rounded-lg bg-[#90EE90]"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                />
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Cards Grid */}
        <FadeInStagger>
          <div className="grid gap-8 md:grid-cols-3">
            {categories.map((category, i) => (
              <FadeInStaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-[32px]"
                  style={{ backgroundColor: category.bgColor }}
                >
                  {/* Main Content */}
                  <div className="relative z-10 p-8">
                    {/* 3D Icon Container */}
                    <div className="mb-8 flex justify-center">
                      <motion.div
                        whileHover={{ 
                          rotateY: 180,
                          scale: 1.1
                        }}
                        transition={{ duration: 0.5 }}
                        className="relative h-48 w-48"
                      >
                        <Image
                          src={category.icon}
                          alt={category.title}
                          width={200}
                          height={200}
                          className="h-full w-full object-contain drop-shadow-2xl"
                        />
                      </motion.div>
                    </div>

                    {/* Text Content */}
                    <div className="text-center">
                      <h3 className="mb-3 text-2xl font-bold text-white">
                        {category.title}
                      </h3>
                      <p className="text-white/90">
                        {category.description}
                      </p>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
                  <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/10" />
                  
                  {/* Connection Points */}
                  <div className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-black/20" />
                  <div className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-black/20" />
                </motion.div>
              </FadeInStaggerItem>
            ))}
          </div>
        </FadeInStagger>

        {/* Decorative Background Elements */}
        <motion.div
          className="absolute -right-20 top-20"
          animate={{ y: [0, -20, 0], rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity }}
        >
          <div className="h-40 w-40 rounded-full bg-purple-600/20" />
        </motion.div>
        <motion.div
          className="absolute -left-10 bottom-20"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        >
          <div className="h-24 w-24 rounded-full bg-blue-500/20" />
        </motion.div>
      </div>
    </section>
  );
} 