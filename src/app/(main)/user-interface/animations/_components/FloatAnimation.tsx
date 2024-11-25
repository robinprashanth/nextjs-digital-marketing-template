"use client";

import { motion } from "motion/react";

export function FloatAnimation() {
  return (
    <div className="space-y-8">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-800">
        <h3 className="mb-4 text-xl font-semibold">
          Floating Elements Animation
        </h3>
        <div className="relative h-64 rounded-lg bg-gradient-to-tr from-purple-900/20 to-blue-900/20 p-8">
          <motion.div
            animate={{
              y: [-10, 10],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute left-1/4 top-1/4"
          >
            <div className="h-16 w-16 rounded-full bg-purple-500/20 blur-lg" />
          </motion.div>

          <motion.div
            animate={{
              y: [10, -10],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.2,
            }}
            className="absolute right-1/4 top-1/3"
          >
            <div className="h-20 w-20 rounded-full bg-blue-500/20 blur-lg" />
          </motion.div>

          <motion.div
            animate={{
              y: [-15, 15],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="absolute bottom-1/4 left-1/3"
          >
            <div className="text-4xl text-purple-400">✦</div>
          </motion.div>
        </div>
        <div className="mt-4 rounded-lg bg-gray-900 p-4">
          <pre className="text-sm text-gray-100">
            {`<motion.div
  animate={{
    y: [-10, 10],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  }}
>
  {/* Your floating element */}
</motion.div>`}
          </pre>
        </div>
      </div>
    </div>
  );
}
