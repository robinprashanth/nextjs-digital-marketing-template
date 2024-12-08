"use client";

import { ScrollInView } from "@/components/motion/ScrollInView";
import { motion } from "motion/react";
import Image from "next/image";
import { FC } from "react";

export const Hero: FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background px-4 pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="bg-gradient-dark absolute inset-0 opacity-90" />
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container relative mx-auto">
        <div className="grid items-center gap-12 pt-12 md:grid-cols-2 md:gap-16">
          {/* Left Content */}
          <div className="relative z-10">
            <ScrollInView delay={0.6} className="space-y-6">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center rounded-full border border-theme-primary-500/20 bg-theme-primary-500/10 px-4 py-1.5"
              >
                <span className="text-sm text-theme-primary-400">
                  About Our Company
                </span>
              </motion.div>

              {/* Title */}
              <h1 className="space-y-2 text-balance">
                <span className="block text-5xl font-bold text-white md:text-6xl lg:text-7xl">
                  We Build
                </span>
                <span className="block text-5xl font-bold text-theme-neutral-500 md:text-6xl lg:text-7xl">
                  Digital Success
                </span>
                <span className="block text-5xl font-bold text-white md:text-6xl lg:text-7xl">
                  Stories
                </span>
              </h1>

              {/* Description */}
              <p className="max-w-xl text-lg text-theme-neutral-400">
                We`&apos;re a team of passionate digital marketers, strategists,
                and creatives dedicated to helping businesses thrive in the
                digital age. With over a decade of experience, we`&apos;ve
                helped hundreds of companies achieve remarkable growth.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8 py-8">
                {[
                  { number: "10+", text: "Years Experience" },
                  { number: "500+", text: "Projects Completed" },
                  { number: "95%", text: "Client Satisfaction" },
                  { number: "150+", text: "Team Members" },
                ].map((stat, index) => (
                  <ScrollInView
                    className="relative"
                    delay={0.4 + index * 0.1}
                    key={index}
                  >
                    <div className="relative z-10 text-3xl font-bold text-white md:text-4xl">
                      {stat.number}
                    </div>
                    <div className="relative z-10 mt-1 text-sm text-theme-neutral-400">
                      {stat.text}
                    </div>
                    <div className="absolute -left-4 top-0 h-16 w-16 rounded-full bg-theme-primary-500/10 blur-xl" />
                  </ScrollInView>
                ))}
              </div>
            </ScrollInView>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative h-[600px] overflow-hidden rounded-2xl"
            >
              <Image
                src="/images/about/team.jpg" // Add your image
                alt="Our Team"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent" />
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -right-6 top-10 z-10 max-w-[200px]"
            >
              <div className="rounded-xl bg-[#1A1A2E]/80 p-4 shadow-lg backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-emerald-500 p-1.5" />
                  <div>
                    <div className="font-medium text-white">Always Active</div>
                    <div className="text-sm text-theme-neutral-400">
                      24/7 Support Available
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -left-6 bottom-10 z-10 max-w-[200px]"
            >
              <div className="rounded-xl bg-[#1A1A2E]/80 p-4 shadow-lg backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-orange-500 p-1.5" />
                  <div>
                    <div className="font-medium text-white">Global Reach</div>
                    <div className="text-sm text-theme-neutral-400">
                      Serving Clients Worldwide
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Achievement Card */}
            <ScrollInView
              delay={0.7}
              className="absolute -bottom-6 left-1/2 z-10 -translate-x-1/2"
            >
              <div className="rounded-xl bg-[#1A1A2E]/80 p-4 shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-theme-primary-500/20 p-2">
                    <svg
                      className="h-6 w-6 text-theme-primary-500"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2L2 8.5V15.5L12 22L22 15.5V8.5L12 2Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-white">
                      Industry Leaders
                    </div>
                    <div className="text-sm text-theme-neutral-400">
                      Top 1% in Digital Marketing
                    </div>
                  </div>
                </div>
              </div>
            </ScrollInView>
          </div>
        </div>
      </div>
    </section>
  );
};
