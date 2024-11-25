"use client";

import { motion } from "motion/react";

export function StaggeredAnimation() {
  return (
    <div className="rounded-lg bg-white p-6 dark:bg-gray-800">
      <h3 className="mb-4 text-xl font-semibold">Staggered Animations</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-lg bg-purple-500/10 p-4"
            >
              <h4 className="text-lg font-medium">Staggered Item {i}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Appears with delay: {i * 0.1}s
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 rounded-lg bg-gray-900 p-4">
          <pre className="text-sm text-gray-100">
            {`{items.map((item, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.1 }}
  >
    {/* Content */}
  </motion.div>
))}`}
          </pre>
        </div>
      </div>
    </div>
  );
}
