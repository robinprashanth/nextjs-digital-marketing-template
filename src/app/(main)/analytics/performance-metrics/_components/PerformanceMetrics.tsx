"use client";
import { FC } from "react";
import { BarChart2 } from "lucide-react";
import { MetricCard } from "./MetricCard";
import { PerformanceChart } from "./PerformanceChart";
import { AdditionalMetricCard } from "./AdditionalMetricCard";
import {
  performanceData,
  keyMetrics,
  chartConfigs,
  additionalMetrics,
} from "../data/content";
import { GridPattern } from "@/components/motion/GridPattern";
import { FadeIn } from "@/components/motion/FadeIn";
import { ScaleIn } from "@/components/motion/ScaleIn";
import { FadeInStaggerItem } from "@/components/motion/FadeInStaggerItem";
import { FadeInStagger } from "@/components/motion/FadeInStagger";
import { motion } from "motion/react";

const quickStats = [
  { label: "Data Points", value: "10M+" },
  { label: "Reports Generated", value: "50K+" },
  { label: "Active Users", value: "2.5K" },
  { label: "Metrics Tracked", value: "100+" },
] as const;

export const PerformanceMetrics: FC = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[linear-gradient(45deg,#3B82F6,#2563EB)]">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 1 }}
            className="absolute -left-4 top-1/4 h-64 w-64 rounded-full bg-white/5 blur-3xl"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute -right-4 top-1/2 h-96 w-96 rounded-full bg-white/10 blur-3xl"
          />

          {/* Grid Pattern */}
          <GridPattern squared />
        </div>

        <div className="container relative mx-auto px-4 py-24 sm:px-6">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
              <BarChart2 className="h-4 w-4" />
              <span>PERFORMANCE ANALYTICS</span>
            </div>

            <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Transform Data into
              <br />
              Actionable Insights
            </h1>

            <p className="mt-6 text-lg text-white/80">
              Monitor and analyze your marketing performance metrics in
              real-time to make data-driven decisions that drive growth.
            </p>

            {/* Quick Stats */}
            <FadeInStagger 
              className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4" 
              delayStep={0.1}
            >
              {quickStats.map((stat, index) => (
                <FadeInStaggerItem key={index}>
                  <ScaleIn 
                    delay={index * 0.1} 
                    className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm hover:bg-white/15"
                  >
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </ScaleIn>
                </FadeInStaggerItem>
              ))}
            </FadeInStagger>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative -mt-10 pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Key Metrics Grid */}
          <FadeInStagger 
            className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            delayStep={0.1}
          >
            {keyMetrics.map((metric, index) => (
              <FadeInStaggerItem key={index}>
                <MetricCard {...metric} />
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>

          {/* Charts Section */}
          <FadeInStagger 
            className="mb-12 grid gap-8 lg:grid-cols-2"
            delayStep={0.2}
          >
            <FadeInStaggerItem>
              <PerformanceChart
                config={chartConfigs.trafficOverview}
                data={performanceData}
                type="line"
                dataKeys={["visitors", "conversions"]}
              />
            </FadeInStaggerItem>
            <FadeInStaggerItem>
              <PerformanceChart
                config={chartConfigs.revenueTrends}
                data={performanceData}
                type="area"
                dataKeys={["revenue"]}
              />
            </FadeInStaggerItem>
          </FadeInStagger>

          {/* Additional Metrics */}
          <FadeInStagger 
            className="grid gap-6 md:grid-cols-3"
            delayStep={0.1}
          >
            {additionalMetrics.map((metric, index) => (
              <FadeInStaggerItem key={index}>
                <ScaleIn delay={index * 0.1}>
                  <AdditionalMetricCard {...metric} />
                </ScaleIn>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Pattern Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </motion.svg>
      </div>
    </main>
  );
};