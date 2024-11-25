import { motion } from "motion/react";

export function ContentRevealAnimation() {
  return (
    <div className="rounded-lg bg-white p-6 dark:bg-gray-800">
      <h3 className="mb-4 text-xl font-semibold">Content Reveal Animations</h3>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="overflow-hidden rounded-lg bg-theme-primary-500/10 p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="inline-flex rounded-full bg-theme-primary-500/10 px-4 py-1">
              <span className="text-sm text-theme-primary-400">Category</span>
            </div>
            <h4 className="text-2xl font-bold">Content Title</h4>
            <p className="text-theme-neutral-600 dark:text-gray-300">
              Content description with nice reveal animation.
            </p>
          </motion.div>
        </div>

        <div className="mt-4 rounded-lg bg-gray-900 p-4">
          <pre className="text-sm text-gray-100">
            {`<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  <div className="space-y-4">
    {/* Content */}
  </div>
</motion.div>`}
          </pre>
        </div>
      </div>
    </div>
  );
}
