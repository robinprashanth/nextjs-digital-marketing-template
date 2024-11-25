"use client";
import { motion } from "motion/react";

export function ScrollRevealAnimation() {
  return (
    <div className="space-y-8">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-800">
        <h3 className="mb-4 text-xl font-semibold">Scroll Reveal Animations</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-lg bg-theme-primary-500/10 p-6"
            >
              <h4 className="text-lg font-medium">Scroll Reveal Item {i}</h4>
              <p className="text-theme-neutral-600 dark:text-gray-300">
                This item reveals as you scroll with a slight delay.
              </p>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 rounded-lg bg-gray-900 p-4">
          <pre className="text-sm text-gray-100">
            {`<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.1 }}
>
  {/* Your content */}
</motion.div>`}
          </pre>
        </div>
      </div>
    </div>
  );
}
