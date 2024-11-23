"use client";
import { FC } from "react";
import { motion } from "motion/react";
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

export const PerformanceMetrics: FC = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[linear-gradient(45deg,#3B82F6,#2563EB)]">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-4 top-1/4 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -right-4 top-1/2 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Cpath d='M0 0h40v1H0zM0 39h40v1H0z'/%3E%3Cpath d='M0 0h1v40H0zM39 0h1v40h-1z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container relative mx-auto px-4 py-24 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {[
                { label: "Data Points", value: "10M+" },
                { label: "Reports Generated", value: "50K+" },
                { label: "Active Users", value: "2.5K" },
                { label: "Metrics Tracked", value: "100+" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Wave Divider */}
      </section>

      {/* Main Content */}
      <section className="relative -mt-10 pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Key Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {keyMetrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </motion.div>

          {/* Charts Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12 grid gap-8 lg:grid-cols-2"
          >
            <PerformanceChart
              config={chartConfigs.trafficOverview}
              data={performanceData}
              type="line"
              dataKeys={["visitors", "conversions"]}
            />
            <PerformanceChart
              config={chartConfigs.revenueTrends}
              data={performanceData}
              type="area"
              dataKeys={["revenue"]}
            />
          </motion.div>

          {/* Additional Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid gap-6 md:grid-cols-3"
          >
            {additionalMetrics.map((metric, index) => (
              <AdditionalMetricCard
                key={index}
                {...metric}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pattern Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="currentColor"
            fillOpacity="0.05"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </main>
  );
};
