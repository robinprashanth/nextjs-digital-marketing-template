"use client";

import { ScrollInView } from "@/components/motion/ScrollInView";
import { FC } from "react";
import { AdditionalMetric } from "../data/content";
import { getIcon } from "../utils/icons";

export const AdditionalMetricCard: FC<
  AdditionalMetric & { delay?: number }
> = ({ title, value, icon, color, bgColor, delay = 0 }) => {
  const IconComponent = getIcon(icon);

  return (
    <ScrollInView
      delay={delay}
      className="rounded-2xl bg-white p-6 shadow-lg dark:bg-theme-neutral-800"
    >
      <div className="flex items-center gap-4">
        <div className={`rounded-xl ${bgColor} p-3`}>
          <IconComponent className={`h-6 w-6 ${color}`} />
        </div>
        <div>
          <p className="text-sm text-theme-neutral-600 dark:text-theme-neutral-400">
            {title}
          </p>
          <h4 className="text-xl font-bold text-theme-neutral-900 dark:text-white">
            {value}
          </h4>
        </div>
      </div>
    </ScrollInView>
  );
};
