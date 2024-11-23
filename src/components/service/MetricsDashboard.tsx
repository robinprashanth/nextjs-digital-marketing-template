"use client";
import { FC } from "react";
import { motion } from "motion/react";
import { MetricProps } from "@/types";

export const MetricsDashboard: FC<{ metrics: MetricProps[] }> = ({
  metrics,
}) => (
  <section className="border-t border-gray-800 py-24">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-16 max-w-3xl text-center"
      >
        <span className="mb-4 inline-block rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-semibold text-purple-400">
          Analytics
        </span>
        <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
          Measure Your{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Success
          </span>
        </h2>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-2xl border border-gray-800 bg-card p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-purple-500/10 p-3">
                {metric.icon}
              </div>
              <div
                className={`flex items-center gap-1 text-sm ${
                  metric.trend > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {metric.trend > 0 ? "↑" : "↓"} {Math.abs(metric.trend)}%
              </div>
            </div>
            <div className="text-2xl font-bold text-foreground">
              {metric.value}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              {metric.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
