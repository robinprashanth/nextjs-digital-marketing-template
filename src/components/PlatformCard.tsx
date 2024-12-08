"use client";

import { ScrollInView } from "@/components/motion/ScrollInView";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

// Array of background colors using our theme
const bgColors = [
  "bg-theme-primary-300/10",
  "bg-theme-ocean-400/10",
  "bg-theme-tulip-400/10",
  "bg-theme-sunflower-400/10",
  "bg-theme-rose-300/10",
  "bg-theme-indigo-400/10",
];

const iconColors = [
  "text-theme-primary-600",
  "text-theme-ocean-600",
  "text-theme-tulip-600",
  "text-theme-sunflower-600",
  "text-theme-rose-600",
  "text-theme-indigo-600",
];

interface PlatformCardProps {
  platform: {
    icon: string;
    name: string;
    description: string;
  };
  iconMap: Record<string, LucideIcon>;
  index: number;
  delay?: number;
}

export function PlatformCard({
  platform,
  iconMap,
  index,
  delay = 0.1,
}: PlatformCardProps) {
  const IconComponent = iconMap[platform.icon as keyof typeof iconMap];
  const bgColor = bgColors[index % bgColors.length];
  const iconColor = iconColors[index % iconColors.length];

  return (
    <ScrollInView useInView={true} delay={index * delay}>
      <div
        className={cn(
          "group relative h-full rounded-3xl p-8 transition-all duration-300",
          bgColor,
          "hover:scale-[1.02] hover:shadow-lg",
        )}
      >
        {/* Icon Container */}
        <div
          className={cn(
            "mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 transition-transform duration-300 group-hover:scale-110 dark:bg-white/10",
          )}
        >
          <IconComponent className={cn("h-6 w-6", iconColor)} />
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-theme-neutral-900 dark:text-white">
            {platform.name}
          </h3>
          <p className="text-sm leading-relaxed text-theme-neutral-600 dark:text-theme-neutral-400">
            {platform.description}
          </p>
        </div>
      </div>
    </ScrollInView>
  );
}
