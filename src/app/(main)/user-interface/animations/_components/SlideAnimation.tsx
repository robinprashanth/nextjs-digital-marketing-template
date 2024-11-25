"use client";

import { motion } from "motion/react";

export function SlideAnimation() {
  return (
    <div className="rounded-lg bg-white p-6 dark:bg-gray-800">
      <h3 className="mb-4 text-xl font-semibold">Slide Animations</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-lg bg-theme-primary-500/10 p-4"
          >
            <h4 className="text-lg font-medium">Slide from Left</h4>
            <p className="text-sm text-theme-neutral-600 dark:text-gray-300">
              Content slides in from the left
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-lg bg-blue-500/10 p-4"
          >
            <h4 className="text-lg font-medium">Slide from Right</h4>
            <p className="text-sm text-theme-neutral-600 dark:text-gray-300">
              Content slides in from the right
            </p>
          </motion.div>
        </div>

        <div className="mt-4 rounded-lg bg-gray-900 p-4">
          <pre className="text-sm text-gray-100">
            {`// Slide from left
<motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
>
  {/* Content */}
</motion.div>

// Slide from right
<motion.div
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
>
  {/* Content */}
</motion.div>`}
          </pre>
        </div>
      </div>
    </div>
  );
}
