"use client";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { FC } from "react";

interface StatCardProps {
  color: string;
  number: string;
  title: string;
  subtitle?: string;
  delay?: number;
}

const StatCard: FC<StatCardProps> = ({
  color,
  number,
  title,
  subtitle,
  delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className={`${color} group relative cursor-pointer overflow-hidden rounded-2xl p-4 transition-shadow duration-300 hover:shadow-lg sm:p-6`}
  >
    {/* Small floating labels - Only show on larger screens */}
    {number === "5X" && (
      <>
        <div className="absolute -right-2 -top-2 hidden rotate-12 rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-sm md:block">
          Business Growth
        </div>
        <div className="absolute -right-4 top-2 hidden -rotate-6 rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-sm md:block">
          Success
        </div>
        <div className="absolute -right-2 top-6 hidden rotate-12 rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-sm md:block">
          Performance Metrics
        </div>
      </>
    )}

    {/* Semi-transparent overlay for better text contrast */}
    <div className="absolute inset-0 bg-black/10" />

    {/* Content */}
    <div className="relative z-10 flex items-start justify-between">
      <div>
        <div className="mb-2 text-2xl font-bold text-white sm:text-3xl">
          {number}
        </div>
        <div className="text-xs font-medium text-white sm:text-sm">{title}</div>
        {subtitle && (
          <div className="mt-1 text-xs text-white/80 sm:text-sm">
            {subtitle}
          </div>
        )}
      </div>
      <ArrowUpRight className="h-5 w-5 transform text-white/90 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white sm:h-6 sm:w-6" />
    </div>
  </motion.div>
);

export const StatsGrid: FC = () => (
  <section className="container relative mx-auto px-4 py-12 sm:px-6 sm:py-16 md:py-20">
    <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-12">
      {/* ROI Card */}
      <motion.div
        className="rounded-3xl bg-gradient-to-br from-[#1A1A2E] to-[#1A1A2E]/80 p-6 sm:p-8 md:col-span-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="max-w-sm">
          <div className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
            5X ACHIEVED ROI ON AD
            <br />
            SPEND CONSISTENTLY!
          </div>
          <div className="mt-3 text-sm text-gray-400 sm:mt-4 sm:text-base">
            AVERAGE <span className="text-blue-400">INCREASE IN ROI</span>
            <br className="hidden sm:block" />
            FOR OUR CLIENTS.
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:col-span-6">
        <StatCard
          color="bg-gradient-to-br from-emerald-500 to-emerald-600"
          number="350+"
          title="Successful Campaigns"
          subtitle="Launched Industries"
          delay={0.2}
        />
        <StatCard
          color="bg-gradient-to-br from-amber-400 to-amber-500"
          number="67%"
          title="Growth in Conversion"
          subtitle="Rates on Average"
          delay={0.3}
        />
      </div>
    </div>

    {/* Supporting Text */}
    <div className="relative mt-12 sm:mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mx-auto max-w-3xl text-center"
      >
        {/* Decorative elements */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-gray-400/20 to-transparent" />
        </div>

        <h3 className="mb-3 text-lg font-medium text-white sm:text-xl">
          Driving Growth Through Innovation
        </h3>
        <p className="px-4 text-sm leading-relaxed text-gray-400 sm:text-base">
          Helping brands thrive with strategic campaigns, creative content, and
          results-focused marketing precision. Our data-driven approach ensures
          measurable success and sustainable growth.
        </p>

        {/* Bottom decoration */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-purple-400/40" />
          <span className="h-2 w-2 rounded-full bg-orange-400/40" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/40" />
        </div>
      </motion.div>
    </div>
  </section>
);
