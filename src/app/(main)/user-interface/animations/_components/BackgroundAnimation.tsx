// app/(main)/user-interface/animations/_components/BackgroundAnimation.tsx
import { motion } from "motion/react";

export function BackgroundAnimation() {
  return (
    <div className="rounded-lg bg-white p-6 dark:bg-gray-800">
      <h3 className="mb-4 text-xl font-semibold">Background Animations</h3>

      {/* Demo Container */}
      <div className="relative h-[500px] overflow-hidden rounded-lg bg-gradient-to-b from-gray-900 via-gray-800 to-background p-8">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(147,51,234,0.1),transparent)] opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.1),transparent)] opacity-70" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgb(17,17,17))]" />

        {/* Animated Gradient Spots */}
        <div className="absolute left-1/4 top-1/4 h-24 w-24 rounded-full bg-theme-primary-500/20 blur-xl" />
        <div className="absolute right-1/4 top-1/3 h-32 w-32 rounded-full bg-violet-500/20 blur-xl" />

        {/* Animated Dots */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-theme-primary-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Demo Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-theme-primary-500/10 px-4 py-2 backdrop-blur-sm">
              <span className="text-sm font-medium text-theme-primary-400">
                Animated Background
              </span>
            </div>
            <h4 className="text-3xl font-bold text-white">
              Dynamic Background Effects
            </h4>
            <p className="text-lg text-white/70">
              With animated dots, gradients, and blur effects
            </p>
          </motion.div>
        </div>

        {/* Example Code */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="rounded-lg bg-black/50 p-4 backdrop-blur-sm">
            <pre className="text-sm text-gray-100">
              {`// Background Setup
<div className="relative">
  {/* Gradient Overlays */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(147,51,234,0.1),transparent)]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.1),transparent)]" />
  
  {/* Animated Dots */}
  {[...Array(30)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute h-1 w-1 rounded-full bg-theme-primary-400/20"
      style={{
        left: \`\${Math.random() * 100}%\`,
        top: \`\${Math.random() * 100}%\`,
      }}
      animate={{
        opacity: [0.2, 0.5, 0.2],
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 2,
      }}
    />
  ))}

  {/* Gradient Spots */}
  <div className="absolute left-1/4 top-1/4 h-24 w-24 rounded-full bg-theme-primary-500/20 blur-xl" />
  <div className="absolute right-1/4 top-1/3 h-32 w-32 rounded-full bg-violet-500/20 blur-xl" />
</div>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
