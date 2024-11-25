import { motion } from "motion/react";

export function GridAnimation() {
  return (
    <div className="rounded-lg bg-white p-6 dark:bg-gray-800">
      <h3 className="mb-4 text-xl font-semibold">Grid Animations</h3>

      <div className="grid gap-6 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-xl bg-purple-500/10 p-6"
          >
            <h4 className="mb-2 text-lg font-semibold">Grid Item {i}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Grid item with staggered animation and hover effect.
            </p>
            {/* Animated background blur */}
            <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-purple-500/10 blur-xl transition-all duration-500 group-hover:scale-150" />
          </motion.div>
        ))}
      </div>

      <div className="mt-4 rounded-lg bg-gray-900 p-4">
        <pre className="text-sm text-gray-100">
          {`<div className="grid gap-6 md:grid-cols-3">
  {items.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      className="group relative overflow-hidden"
    >
      {/* Content */}
      <div className="absolute -bottom-20 -right-20 h-40 w-40 
        rounded-full bg-purple-500/10 blur-xl 
        transition-all duration-500 
        group-hover:scale-150" 
      />
    </motion.div>
  ))}
</div>`}
        </pre>
      </div>
    </div>
  );
}
