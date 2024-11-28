"use client";
import { motion } from "motion/react";

export function HoverAnimation() {
  return (
    <div className="space-y-8">
      <div className="rounded-lg bg-white p-6 dark:bg-theme-neutral-800">
        <h3 className="mb-4 text-xl font-semibold">Hover Animations</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Scale on Hover */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-lg bg-theme-primary-500/10 p-6"
          >
            <h4 className="text-lg font-medium">Scale on Hover</h4>
            <p className="text-theme-neutral-600 dark:text-theme-neutral-300">
              This card scales up when hovered.
            </p>
          </motion.div>

          {/* Transform on Hover */}
          <motion.div
            whileHover={{ y: -5 }}
            className="rounded-lg bg-theme-ocean-500/10 p-6"
          >
            <h4 className="text-lg font-medium">Float on Hover</h4>
            <p className="text-theme-neutral-600 dark:text-theme-neutral-300">
              This card floats up when hovered.
            </p>
          </motion.div>
        </div>
        <div className="mt-4 rounded-lg bg-theme-neutral-900 p-4">
          <pre className="text-sm text-theme-neutral-100">
            {`// Scale on hover
<motion.div
  whileHover={{ scale: 1.05 }}
>
  {/* Content */}
</motion.div>

// Float on hover
<motion.div
  whileHover={{ y: -5 }}
>
  {/* Content */}
</motion.div>`}
          </pre>
        </div>
      </div>
    </div>
  );
}
