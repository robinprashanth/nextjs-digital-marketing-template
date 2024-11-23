"use client";
import { FC } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingShape } from "./hero/FloatingShape";
import { ClientAvatar } from "./hero/ClientAvatar";
import { clientAvatars, stats, testimonial } from "./hero/heroData";
import { TestimonialCard } from "./hero/TestimonialCard";
import { StatCard } from "./hero/StatCard";

export const HeroSection: FC = () => {
  return (
    <div className="relative min-h-[calc(100vh-120px)] w-full pt-10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0B1E] to-[#1A1A2E] opacity-50" />

      {/* Floating Shapes */}
      <FloatingShape className="left-[10%] top-[20%]">
        <div className="h-16 w-16 rounded-full bg-purple-500/20 blur-lg md:h-24 md:w-24" />
      </FloatingShape>

      <FloatingShape className="right-[15%] top-[15%]" delay={0.2}>
        <div className="h-20 w-20 rounded-full bg-orange-500/20 blur-lg md:h-28 md:w-28" />
      </FloatingShape>

      <FloatingShape className="bottom-[20%] left-[20%]" delay={0.4}>
        <div className="h-24 w-24 rounded-full bg-blue-500/20 blur-lg" />
      </FloatingShape>
      <FloatingShape className="bottom-[80%] right-[40%]" delay={0.6}>
        <div className="text-4xl text-purple-400">✦</div>
      </FloatingShape>
      <FloatingShape className="bottom-[40%] right-[20%]" delay={0.6}>
        <div className="text-4xl text-purple-400">✦</div>
      </FloatingShape>
      <FloatingShape className="bottom-[60%] right-[20%]" delay={0.6}>
        <div className="text-4xl text-purple-400">✦</div>
      </FloatingShape>
      <FloatingShape className="bottom-[50%] right-[50%]" delay={0.6}>
        <div className="text-4xl text-purple-400">✦</div>
      </FloatingShape>

      <FloatingShape className="bottom-[30%] right-[25%]" delay={0.6}>
        <div className="text-4xl text-purple-400">✦</div>
      </FloatingShape>

      <FloatingShape className="left-[40%] top-[30%]" delay={0.8}>
        <div className="text-3xl text-orange-400">+</div>
      </FloatingShape>
      <FloatingShape className="left-[40%] top-[10%]" delay={0.8}>
        <div className="text-3xl text-orange-400">+</div>
      </FloatingShape>
      <FloatingShape className="right-[40%] top-[30%]" delay={0.8}>
        <div className="text-3xl text-orange-400">+</div>
      </FloatingShape>

      <div className="container relative mx-auto flex h-full items-center px-4 sm:px-6">
        {/* Main Content */}
        <div className="relative max-w-[90%] py-20 lg:max-w-[60%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-block rounded-full bg-red-500/10 px-4 py-1 text-sm text-red-400"
          >
            Leading Digital Marketing Agency
          </motion.div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-2"
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                <span className="text-white">ELEVATE</span>
                <br />
                <span className="text-purple-400">YOUR DIGITAL</span>
                <br />
                <span className="scale-105 text-orange-400">PRESENCE</span>
                <br />
                <span className="text-white">STRATEGICALLY</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-xl text-lg text-gray-400"
            >
              Transform your brand with data-driven strategies, innovative
              solutions, and measurable results that drive real business growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <Button
                size="lg"
                className="h-14 rounded-full bg-white px-8 text-black hover:bg-gray-100"
              >
                GET IN TOUCH <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {clientAvatars.map((avatar, i) => (
                    <ClientAvatar key={i} {...avatar} index={i} />
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-bold text-white">500+</span>{" "}
                  <span className="text-gray-400">Happy Clients</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="absolute right-0 top-10 hidden h-full w-1/3 lg:block">
          {/* Decorative grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid h-full w-full grid-cols-3 gap-4 p-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="rounded-lg bg-white/10"></div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <TestimonialCard {...testimonial} />

          {/* Stats */}
          {stats.map((stat, index) => (
            <div key={index} className={stat.position}>
              <StatCard {...stat} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
