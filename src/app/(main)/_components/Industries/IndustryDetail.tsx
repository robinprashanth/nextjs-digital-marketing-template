import { FC } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import type { Industry } from "@/types";

interface IndustryDetailProps {
  industry: Industry;
}

export const IndustryDetail: FC<IndustryDetailProps> = ({ industry }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={industry.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800"
    >
      {/* Hero Image */}
      <div className="relative mb-6 h-48 w-full overflow-hidden rounded-xl">
        <Image
          src={industry.image}
          alt={industry.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Metrics Grid */}
      <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {industry.metrics.map((metric, index) => (
          <div
            key={index}
            className="rounded-lg bg-gray-50 p-4 text-center dark:bg-gray-700"
          >
            <div className="text-2xl font-bold text-purple-600">
              {metric.prefix}
              {metric.value}
              {metric.suffix}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {metric.label}
            </div>
          </div>
        ))}
      </div>

      {/* Case Studies */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Success Stories
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          {industry.cases.map((caseStat, index) => (
            <div
              key={index}
              className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700"
            >
              <div className="mb-3 flex items-center gap-2">
                <div className="relative h-8 w-8">
                  <Image
                    src={caseStat.logo}
                    alt={caseStat.clientName}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <span className="font-medium text-gray-900 dark:text-white">
                  {caseStat.clientName}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {caseStat.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
);
