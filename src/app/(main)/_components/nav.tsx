"use client";
// components/Home/NavSection.tsx
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const NavSection = () => (
  <motion.nav
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="container mx-auto flex items-center justify-between px-6 py-4"
  >
    <div className="flex items-center gap-2">
      <span className="text-2xl text-theme-primary-400">⬡</span>
      <span className="text-xl font-bold text-white">NEVTECH</span>
    </div>
    <div className="flex items-center gap-4">
      <div className="hidden space-x-8 text-sm text-white/70 md:flex">
        <a href="#" className="transition-colors hover:text-theme-primary-400">
          HOME
        </a>
        <a href="#" className="transition-colors hover:text-theme-primary-400">
          FEATURES
        </a>
        <a href="#" className="transition-colors hover:text-theme-primary-400">
          REVIEWS
        </a>
        <a href="#" className="transition-colors hover:text-theme-primary-400">
          ABOUT US
        </a>
      </div>
      <Button
        size="sm"
        className="rounded-full bg-theme-primary-500 text-white hover:bg-theme-primary-600"
      >
        SIGN UP
      </Button>
      <Button
        variant="secondary"
        size="sm"
        className="rounded-full bg-white text-black hover:bg-theme-neutral-100"
      >
        GET IN TOUCH <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  </motion.nav>
);
