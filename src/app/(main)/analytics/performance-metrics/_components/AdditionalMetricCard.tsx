"use client";
import { FC } from "react";
import { motion } from "motion/react";
import { getIcon } from "../utils/icons";
import { AdditionalMetric } from "../data/content";

export const AdditionalMetricCard: FC<
  AdditionalMetric & { delay?: number }
> = ({ title, value, icon, color, bgColor, delay = 0 }) => {
  const IconComponent = getIcon(icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800"
    >
      <div className="flex items-center gap-4">
        <div className={`rounded-xl ${bgColor} p-3`}>
          <IconComponent className={`h-6 w-6 ${color}`} />
        </div>
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
          <h4 className="text-xl font-bold text-gray-900 dark:text-white">
            {value}
          </h4>
        </div>
      </div>
    </motion.div>
  );
};
