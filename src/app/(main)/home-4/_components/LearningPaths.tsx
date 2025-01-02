"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { motion } from "motion/react";

import Image from "next/image";

export function LearningPaths() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <div className="overflow-hidden rounded-[20px] sm:rounded-[40px] bg-[#FFD54F]">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center p-6 sm:p-12">
            {/* Left Content */}
            <div className="relative z-10">
              <FadeIn>
                <div className="mb-8">
                  <h2 className="mb-6 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-black">
                    LEARNING VIRTUALLY
                    <br />
                    EVERYWHERE.
                  </h2>
                  <p className="text-base sm:text-lg text-black/80">
                    We Provide learning virtually for students in anywhere and
                    we provide recording while students doesn&apos;t attend the
                    virtual class.
                  </p>
                </div>

                {/* Totally Free Tag */}
                <motion.div
                  initial={{ rotate: -15, scale: 0.9 }}
                  animate={{ rotate: [-5, 5, -5], scale: [0.95, 1.05, 0.95] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative w-fit"
                >
                  <div className="rounded-full border-2 border-dashed border-orange-600 bg-orange-500/10 px-4 sm:px-8 py-2 sm:py-4">
                    <span className="text-xl sm:text-2xl font-bold text-orange-600">TOTALLY FREE!</span>
                  </div>
                </motion.div>

                {/* Circular Logo */}
                <div className="mt-8 sm:mt-12">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-full border-2 border-black/20"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl sm:text-2xl">↗</span>
                    </div>
                  </motion.div>
                </div>
              </FadeIn>
            </div>

            {/* Right Content - Virtual Class Interface */}
            <FadeIn>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="relative rounded-2xl sm:rounded-3xl bg-white p-4 sm:p-8 shadow-xl"
              >
                {/* Window Controls */}
                <div className="mb-4 sm:mb-6 flex gap-2">
                  <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-500" />
                  <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-yellow-500" />
                  <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-500" />
                </div>

                {/* Virtual Class Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="overflow-hidden rounded-xl sm:rounded-2xl bg-gray-50 p-2 sm:p-4"
                    >
                      <div className="aspect-square overflow-hidden rounded-full bg-gray-100">
                        <Image
                          src={`/images/homepage4/avatars/student-${i}.jpeg`}
                          alt={`Student ${i}`}
                          width={120}
                          height={120}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Menu Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="absolute -right-3 sm:-right-4 top-1/2 flex h-8 w-8 sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg"
                >
                  <span className="text-lg sm:text-2xl">≡</span>
                </motion.button>
              </motion.div>
            </FadeIn>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -right-16 -top-16 h-48 sm:h-64 w-48 sm:w-64 rounded-full bg-yellow-300/50" />
          <div className="absolute -bottom-16 -left-16 h-48 sm:h-64 w-48 sm:w-64 rounded-full bg-yellow-300/50" />
        </div>
      </div>

      {/* Background Decorative Elements - Hide on mobile */}
      <div className="hidden sm:block">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute left-10 top-20"
        >
          <div className="h-20 w-20 rounded-full bg-purple-600/20" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute right-20 bottom-20"
        >
          <div className="h-16 w-16 rounded-full bg-blue-500/20" />
        </motion.div>
      </div>
    </section>
  );
} 