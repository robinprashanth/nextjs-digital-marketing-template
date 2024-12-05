"use client";

import { FC } from "react";
import { companyTimeline } from "../data/content";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import SubTitleBadge from "@/components/badge/SubTitleBadge";
import { ScrollAnimations } from "@/components/motion/ScrollInView";

const MilestoneCard: FC<{
  milestone: typeof companyTimeline.milestones[0];
  index: number;
}> = ({ milestone, index }) => {
  return (
    <ScrollAnimations.View
      className="relative w-full md:w-[calc(50%-3rem)]"
      delay={index * 0.2}
      useInView={true}
    >
      <Card className="relative overflow-hidden rounded-3xl border-none bg-white p-8">
        <motion.span 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute right-8 top-8 text-theme-primary-400"
        >
          {milestone.year}
        </motion.span>

        <CardContent className="space-y-12 p-0">
          <ScrollAnimations.View
            className="pr-16 text-lg leading-relaxed text-theme-neutral-600"
            delay={0.4}
            useInView={true}
          >
            {milestone.description}
          </ScrollAnimations.View>

          <ScrollAnimations.Stagger className="grid grid-cols-2 gap-8" delayStep={0.1}>
            {milestone.stats.map((stat, i) => (
              <ScrollAnimations.StaggerItem key={i} className="space-y-2">
                <motion.div 
                  className="text-4xl font-bold text-theme-primary-400"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-theme-neutral-500">
                  {stat.label}
                </div>
              </ScrollAnimations.StaggerItem>
            ))}
          </ScrollAnimations.Stagger>

          {/* Card hover effect */}
          <motion.div
            className="absolute inset-0 rounded-3xl bg-theme-primary-400/5 opacity-0 transition-opacity duration-300"
            whileHover={{ opacity: 1 }}
          />
        </CardContent>
      </Card>
    </ScrollAnimations.View>
  );
};

export const OurStory: FC = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-theme-stale-950/80" />
      
      {/* Subtle gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-theme-primary-500/5 via-transparent to-theme-rose-500/5" />
      
      {/* Optional animated radial gradients */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute h-[500px] w-[500px] rounded-full bg-theme-primary-500/10 blur-[100px]"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            x: [-100, 100, -100],
            y: [-50, 100, -50]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear" 
          }}
        />
        <motion.div 
          className="absolute right-0 top-1/2 h-[500px] w-[500px] rounded-full bg-theme-rose-500/10 blur-[100px]"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            x: [100, -100, 100],
            y: [50, -100, 50]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear" 
          }}
        />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6">
        <ScrollAnimations.Stagger className="mx-auto mb-20 max-w-3xl text-center" delayStep={0.2}>
          <ScrollAnimations.StaggerItem>
            <SubTitleBadge text={companyTimeline.subtitle} />
          </ScrollAnimations.StaggerItem>
          
          <ScrollAnimations.StaggerItem>
            <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              A Decade of Digital{" "}
              <span className="block bg-gradient-to-r from-theme-primary-400 to-theme-rose-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
          </ScrollAnimations.StaggerItem>
          
          <ScrollAnimations.StaggerItem>
            <p className="text-lg text-theme-neutral-400">
              From our humble beginnings to becoming a global digital force, our journey has 
              been defined by innovation, growth, and an unwavering commitment to client success.
            </p>
          </ScrollAnimations.StaggerItem>
        </ScrollAnimations.Stagger>

        <div className="relative">
          {/* Animated timeline line */}
          <motion.div 
            className="absolute left-1/2 top-0 -ml-[1px] h-full w-[2px]"
            style={{
              background: "linear-gradient(180deg, hsl(var(--theme-primary-500)) 0%, transparent 100%)"
            }}
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          />

          <div className="relative space-y-24">
            {companyTimeline.milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex w-full ${
                  index % 2 === 0 ? "md:justify-end" : "justify-start"
                }`}
              >
                <MilestoneCard 
                  milestone={milestone} 
                  index={index} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};