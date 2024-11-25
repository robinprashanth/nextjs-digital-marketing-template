"use client";
import { motion } from "motion/react";
import { FloatAnimation } from "./FloatAnimation";
import { ScrollRevealAnimation } from "./ScrollRevealAnimation";
import { HoverAnimation } from "./HoverAnimation";
import { SlideAnimation } from "./SlideAnimation";
import { TimelineAnimation } from "./TimelineAnimation";
import { FloatingCardsAnimation } from "./FloatingCardsAnimation";
import { StaggeredAnimation } from "./StaggeredAnimation";
import { BackgroundAnimation } from "./BackgroundAnimation";
import { ContentRevealAnimation } from "./ContentRevealAnimation";
import { GridAnimation } from "./GridAnimation";

export function AnimationsShowcase() {
  return (
    <div className="container relative mx-auto px-4 py-24 sm:px-6">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Animation Components
          </h1>
          <p className="mx-auto max-w-[700px] text-theme-neutral-500 dark:text-theme-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A collection of reusable animation patterns and examples.
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-5xl py-12">
        <div className="space-y-12">
          <BackgroundAnimation />
          <ContentRevealAnimation />
          <GridAnimation />
          <FloatAnimation />
          <ScrollRevealAnimation />
          <HoverAnimation />
          <SlideAnimation />
          <TimelineAnimation />
          <FloatingCardsAnimation />
          <StaggeredAnimation />
        </div>
      </div>
    </div>
  );
}
