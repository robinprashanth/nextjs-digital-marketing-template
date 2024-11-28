"use client";
import { FC } from "react";
import { ArrowUpRight } from "lucide-react";
import type { MetricCard as MetricCardType } from "../data/content";
import { getIcon } from "../utils/icons";
import { ScrollInView } from "@/components/motion/ScrollInView";

export const MetricCard: FC<MetricCardType> = ({
  title,
  value,
  change,
  icon,
  color,
}) => {
  const IconComponent = getIcon(icon);

  return (
    <ScrollInView
      className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-theme-neutral-600 dark:text-theme-neutral-400">{title}</p>
          <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
            {value}
          </h3>
          <p className={`mt-1 flex items-center gap-1 text-sm ${color}`}>
            <ArrowUpRight className="h-4 w-4" />
            {change}
          </p>
        </div>
        <div className={`rounded-xl ${color.replace("text", "bg")}/10 p-2`}>
          <IconComponent className={`h-6 w-6 ${color}`} />
        </div>
      </div>
    </ScrollInView>
  );
};
