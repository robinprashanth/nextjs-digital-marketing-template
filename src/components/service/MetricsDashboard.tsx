"use client";
import { FC } from "react";
import { MetricProps } from "@/types";
import { ScrollInView } from "../motion/ScrollInView";

export const MetricsDashboard: FC<{ metrics: MetricProps[] }> = ({
  metrics,
}) => (
  <section className="border-t border-gray-800 py-24">
    <div className="container mx-auto px-4 sm:px-6">
      <ScrollInView
        className="mx-auto mb-16 max-w-3xl text-center"
      >
        <span className="mb-4 inline-block rounded-full bg-theme-primary-500/10 px-4 py-1.5 text-sm font-semibold text-theme-primary-400">
          Analytics
        </span>
        <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
          Measure Your{" "}
          <span className="bg-gradient-to-r from-theme-primary-400 to-theme-primary-600 bg-clip-text text-transparent">
            Success
          </span>
        </h2>
      </ScrollInView>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <ScrollInView
          key={index}
          delay={ index * 0.1}
            className="rounded-2xl border border-gray-800 bg-card p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-theme-primary-500/10 p-3">
                {metric.icon}
              </div>
              <div
                className={`flex items-center gap-1 text-sm ${
                  metric.trend > 0 ? "text-theme-tulip-500" : "text-red-500"
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
          </ScrollInView>
        ))}
      </div>
    </div>
  </section>
);
