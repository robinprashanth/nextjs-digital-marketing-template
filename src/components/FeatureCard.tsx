"use client";

import { ScrollInView } from "@/components/motion/ScrollInView";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  feature: {
    icon: string;
    title: string;
    description: string;
    gradient: string;
  };
  iconMap: Record<string, LucideIcon>;
  index: number;
  delay?: number;
}

export function FeatureCard({ feature, iconMap, index, delay = 0.1 }: FeatureCardProps) {
  const IconComponent = iconMap[feature.icon as keyof typeof iconMap];

  return (
    <ScrollInView
      useInView={true}
      delay={index * delay}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-3xl bg-gray-50 p-8 dark:bg-theme-neutral-800">
        <div className={`mb-6 inline-block rounded-2xl p-3 ${feature.gradient}`}>
          <IconComponent className="h-6 w-6 text-white" />
        </div>

        <h3 className="mb-4 text-xl font-bold text-theme-neutral-900 dark:text-white">
          {feature.title}
        </h3>
        <p className="text-theme-neutral-600 dark:text-theme-neutral-400">
          {feature.description}
        </p>

        <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-r from-emerald-500/10 to-theme-ocean-500/10 blur-xl transition-all duration-500 group-hover:scale-150" />
      </div>
    </ScrollInView>
  );
}