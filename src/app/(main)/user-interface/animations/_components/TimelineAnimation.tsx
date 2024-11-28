"use client";
import { motion } from "motion/react";

export function TimelineAnimation() {
  return (
    <div className="rounded-lg bg-white p-6 dark:bg-theme-neutral-800">
      <h3 className="mb-4 text-xl font-semibold">Timeline Animations</h3>
      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-theme-primary-500/50 to-transparent" />

        <div className="space-y-8">
          {[1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex w-full ${i % 2 === 0 ? "justify-end" : ""}`}
            >
              <div className="relative w-[calc(50%-2rem)] rounded-lg bg-theme-primary-500/10 p-4">
                <h4 className="text-lg font-medium">Timeline Event {i}</h4>
                <p className="text-sm text-theme-neutral-600 dark:text-theme-neutral-300">
                  Timeline event description
                </p>
                {/* Connector */}
                <div
                  className={`absolute top-4 ${
                    i % 2 === 0 ? "left-[-2rem]" : "right-[-2rem]"
                  } h-px w-8 bg-gradient-to-r from-theme-primary-500/50 to-transparent`}
                />
                {/* Dot */}
                <div
                  className={`absolute top-4 ${
                    i % 2 === 0 ? "left-[-2.25rem]" : "right-[-2.25rem]"
                  } h-3 w-3 rounded-full bg-theme-primary-500`}
                >
                  <div className="absolute inset-0 animate-ping rounded-full bg-theme-primary-500 opacity-75" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 rounded-lg bg-theme-neutral-900 p-4">
          <pre className="text-sm text-theme-neutral-100">
            {`<motion.div
  initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ delay }}
>
  {/* Timeline content */}
</motion.div>`}
          </pre>
        </div>
      </div>
    </div>
  );
}
