"use client";

import { ScrollInView } from "@/components/motion/ScrollInView";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  service: {
    icon: string;
    title: string;
    description: string;
    bullets?: string[];
  };
  iconMap: Record<string, LucideIcon>;
  index: number;
  delay?: number;
}

export function ServiceCard({ service, iconMap, index, delay = 0.1 }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon as keyof typeof iconMap];

  return (
    <ScrollInView
      useInView={true}
      delay={index * delay}
      className="group relative overflow-hidden rounded-3xl bg-gray-50 p-8 dark:bg-theme-neutral-800"
    >
      <div className="mb-6 inline-block rounded-2xl bg-theme-primary-500/10 p-3 dark:bg-theme-primary-500/5">
        <IconComponent className="h-6 w-6 text-theme-primary-600" />
      </div>

      <h3 className="mb-3 text-xl font-bold text-theme-neutral-900 dark:text-white">
        {service.title}
      </h3>
      <p className="mb-6 text-theme-neutral-600 dark:text-theme-neutral-400">
        {service.description}
      </p>

      {service?.bullets && <ul className="space-y-3">
        {service.bullets.map((bullet, bulletIndex) => (
          <li
            key={bulletIndex}
            className="flex items-center gap-2 text-sm text-theme-neutral-600 dark:text-theme-neutral-400"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-theme-primary-600" />
            {bullet}
          </li>
        ))}
      </ul>}

      <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-r from-theme-primary-500/10 to-pink-500/10 blur-xl transition-all duration-500 group-hover:scale-150" />
    </ScrollInView>
  );
}