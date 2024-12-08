"use client";

import { ScrollInView } from "@/components/motion/ScrollInView";
import { FC } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { ChartConfig, PerformanceData } from "../data/content";

interface PerformanceChartProps {
  config: ChartConfig;
  data: PerformanceData[];
  type: "line" | "area";
  dataKeys: string[];
}

export const PerformanceChart: FC<PerformanceChartProps> = ({
  config,
  data,
  type,
  dataKeys,
}) => {
  const ChartComponent = type === "line" ? LineChart : AreaChart;

  return (
    <ScrollInView className="rounded-2xl bg-white p-6 shadow-lg dark:bg-theme-neutral-800">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-theme-neutral-900 dark:text-white">
            {config.title}
          </h3>
          <p className="text-sm text-theme-neutral-600 dark:text-theme-neutral-400">
            {config.subtitle}
          </p>
        </div>
        {config.legends && (
          <div className="flex gap-4">
            {config.legends.map((legend, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className={`h-3 w-3 rounded-full ${legend.color}`} />
                <span className="text-sm text-theme-neutral-600 dark:text-theme-neutral-400">
                  {legend.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <ChartComponent data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            {type === "line"
              ? dataKeys.map((key) => (
                  <Line
                    key={key}
                    type="monotone"
                    dataKey={key}
                    stroke={config.colors[key]}
                    strokeWidth={2}
                  />
                ))
              : dataKeys.map((key) => (
                  <Area
                    key={key}
                    type="monotone"
                    dataKey={key}
                    stroke={config.colors[key]}
                    fill={config.colors[key]}
                    fillOpacity={0.2}
                  />
                ))}
          </ChartComponent>
        </ResponsiveContainer>
      </div>
    </ScrollInView>
  );
};
