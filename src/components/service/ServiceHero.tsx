"use client";
import { FC } from "react";
import { motion } from "motion/react";
import { ServiceHeroProps } from "@/types";
import { ScrollInView } from "../motion/ScrollInView";

// Service Hero Component
export const ServiceHero: FC<ServiceHeroProps> = ({
  title,
  description,
  icon,
  gradient,
  stats,
}) => (
  <section
    className={`relative min-h-[80vh] w-full overflow-hidden ${gradient}`}
  >
    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.4))]" />
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

    <div className="container relative mx-auto px-4 py-24 sm:px-6">
      <div className="grid gap-12 md:grid-cols-2">
        <ScrollInView
          className="flex flex-col justify-center"
        >
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
            {icon}
          </div>
          <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
            {title}
          </h1>
          <p className="text-xl text-white/80">{description}</p>

          <div className="mt-12 flex gap-4">
            <a
              href="#contact"
              className="rounded-full bg-white px-8 py-3 text-base font-semibold text-theme-neutral-900 transition-all hover:bg-theme-neutral-100"
            >
              Get Started
            </a>
            <a
              href="#approach"
              className="rounded-full border border-white/30 bg-white/10 px-8 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Learn More
            </a>
          </div>
        </ScrollInView>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="mt-1 text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);
