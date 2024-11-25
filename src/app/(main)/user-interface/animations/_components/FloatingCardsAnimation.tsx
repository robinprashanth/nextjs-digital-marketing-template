"use client";

import { motion } from "motion/react";

export function FloatingCardsAnimation() {
  return (
    <div className="rounded-lg bg-white p-6 dark:bg-gray-800">
      <h3 className="mb-4 text-xl font-semibold">Floating Cards Animation</h3>
      <div className="bg-gradient-dark relative h-96 rounded-lg p-8">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute right-8 top-8 z-10 w-64"
        >
          <div className="rounded-xl bg-[#1A1A2E]/80 p-4 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="mt-1 rounded-full bg-emerald-500 p-1.5" />
              <div>
                <div className="font-medium text-white">Floating Card 1</div>
                <div className="text-sm text-theme-neutral-400">With blur effect</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute bottom-8 left-8 z-10 w-64"
        >
          <div className="rounded-xl bg-[#1A1A2E]/80 p-4 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="mt-1 rounded-full bg-orange-500 p-1.5" />
              <div>
                <div className="font-medium text-white">Floating Card 2</div>
                <div className="text-sm text-theme-neutral-400">With backdrop blur</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-4 rounded-lg bg-gray-900 p-4">
          <pre className="text-sm text-gray-100">
            {`<motion.div
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  className="absolute right-8 top-8 z-10"
>
  <div className="rounded-xl bg-[#1A1A2E]/80 backdrop-blur-sm">
    {/* Card content */}
  </div>
</motion.div>`}
          </pre>
        </div>
      </div>
    </div>
  );
}
