"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { motion } from "motion/react";


const FloatingElement = ({ children, className }: { children: React.ReactNode; className: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`absolute ${className}`}
  >
    {children}
  </motion.div>
);

const ChalkboardBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 chalkboard-grid" />
    <div className="absolute inset-0 chalk-dust" />
    {/* Dark chalkboard texture */}
    <div className="absolute inset-0 bg-[#0A0A0A]" />
    
    {/* Chalk dust texture */}
    <div className="absolute inset-0 bg-[url('/images/chalk-texture1.jpeg')] opacity-30" />
    
    {/* Chalk drawings */}
    <svg
      className="absolute h-full w-full text-white/[0.05]"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
    >
      {/* Mathematical formulas */}
      <g className="chalk-effect">
        <text x="50" y="100" className="math-symbol">E = mc²</text>
        <text x="800" y="200">(a + b)² = a² + 2ab + b²</text>
        <text x="100" y="800">∫ f(x) dx</text>
        <text x="700" y="600">y = mx + b</text>
      </g>

      {/* Geometric shapes */}
      <g className="chalk-drawing" fill="none" strokeWidth="2">
        <circle cx="200" cy="200" r="50" />
        <rect x="700" y="400" width="100" height="100" />
        <path d="M300 700 L350 600 L400 700 Z" />
      </g>

      {/* Random dots for chalk dust effect */}
      {[...Array(100)].map((_, i) => (
        <circle
          key={i}
          cx={Math.random() * 1000}
          cy={Math.random() * 1000}
          r={Math.random() * 2}
          fill="currentColor"
          opacity={Math.random() * 0.5}
        />
      ))}
    </svg>

    {/* Grid lines */}
    <div className="absolute inset-0">
      <div className="h-full w-full bg-[linear-gradient(90deg,transparent_24px,white_1px,transparent_25px),linear-gradient(transparent_24px,white_1px,transparent_25px)] bg-[size:25px_25px] opacity-[0.02]" />
    </div>
  </div>
);

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center chalkboard px-4 py-20">
      <ChalkboardBackground />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <FadeIn>
          <h1 className="flex flex-col gap-2 text-5xl font-black leading-none tracking-tight sm:text-7xl lg:text-8xl">
            <span className="text-white">UNLOCK YOUR</span>
            <span className="font-outline-2 text-[#FFD700]">POTENTIAL</span>
            <span className="text-white">WITH SMART</span>
            <div className="mt-2 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <span className="text-white">ONLINE</span>
              <span className="relative">
                <span className="relative z-10 text-[#4169E1]">LEARNING</span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-3 w-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  style={{
                    background: "linear-gradient(90deg, #4169E1 0%, #4169E1 50%, transparent 100%)",
                    opacity: 0.3,
                  }}
                />
              </span>
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-base sm:text-xl text-gray-400 px-4 sm:px-0"
          >
            Expert-led courses, interactive workshops, and personalized learning paths
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4 px-4"
          >
            <button className="rounded-full bg-[#4169E1] px-6 py-3 sm:px-8 sm:py-4 font-semibold text-white transition-transform hover:scale-105">
              Start Learning
            </button>
            <button className="rounded-full border-2 border-[#FFD700] px-6 py-3 sm:px-8 sm:py-4 font-semibold text-[#FFD700] transition-transform hover:scale-105">
              View Courses
            </button>
          </motion.div>
        </FadeIn>
      </div>

      {/* Decorative Elements - Hide on mobile, show on larger screens */}
      <div className="hidden sm:block">
        <FloatingElement className="left-[5%] top-[20%]">
          <motion.div
            animate={{ rotate: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <svg width="60" height="60" viewBox="0 0 60 60">
              <g transform="rotate(-30 30 30)">
                <rect x="20" y="10" width="20" height="40" fill="#FFA07A" />
                <rect x="20" y="5" width="20" height="8" rx="2" fill="#FFC0CB" />
                <path d="M20 45L30 50L40 45" fill="#FFA07A" />
              </g>
            </svg>
          </motion.div>
        </FloatingElement>

        <FloatingElement className="right-[10%] top-[15%]">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative h-12 w-12 rounded-full border-2 border-[#4169E1] p-1"
          >
            <div className="h-full w-full rounded-full border-2 border-dashed border-[#87CEEB]" />
          </motion.div>
        </FloatingElement>

        <FloatingElement className="left-[15%] top-[60%]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="h-14 w-14 rounded-full bg-purple-600"
          >
            <div className="h-full w-full rounded-full bg-gradient-to-tr from-purple-800 to-transparent" />
          </motion.div>
        </FloatingElement>

        <FloatingElement className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="relative h-16 w-16 rounded-full border border-dashed border-orange-400"
          >
            <div className="absolute -right-1 top-1/2 h-2 w-2 rounded-full bg-orange-400" />
            <div className="absolute -top-1 left-1/2 h-2 w-2 rounded-full bg-orange-400" />
          </motion.div>
        </FloatingElement>
      </div>

      {/* Add chalk effect styles */}
      <style jsx global>{`
        .font-outline-2 {
          -webkit-text-stroke: 2px #FFD700;
          color: transparent;
        }

        .chalk-effect {
          filter: url(#chalk);
          font-family: 'Courier New', monospace;
        }

        @keyframes chalk-fade {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.8; }
        }
      `}</style>

      {/* SVG Filters for chalk effect */}
      <svg className="absolute">
        <defs>
          <filter id="chalk">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" />
            <feDisplacementMap in="SourceGraphic" scale="2" />
            <feGaussianBlur stdDeviation="0.5" />
          </filter>
        </defs>
      </svg>
    </section>
  );
} 