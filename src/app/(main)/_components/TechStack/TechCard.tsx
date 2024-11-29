import { FC } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import type { TechTool } from "@/types";
import { ScrollInView } from "@/components/motion/ScrollInView";

interface TechCardProps {
  tool: TechTool;
  delay?: number;
}

export const TechCard: FC<TechCardProps> = ({ tool, delay = 0 }) => (
  <ScrollInView
  useInView={true}
  delay={delay}
    className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-theme-neutral-800"
  >
    <div className="flex items-start justify-between">
      <div className="relative h-12 w-12">
        <Image
          src={tool.icon}
          alt={tool.name}
          fill
          className="object-contain"
        />
      </div>
      {tool.certification && (
        <Badge
          variant="secondary"
          className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-theme-tulip-400"
        >
          Certified
        </Badge>
      )}
    </div>

    <div className="mt-4">
      <h3 className="text-lg font-semibold text-theme-neutral-900 dark:text-white">
        {tool.name}
      </h3>
      <p className="mt-2 text-sm text-theme-neutral-600 dark:text-theme-neutral-400">
        {tool.description}
      </p>
    </div>

    <div className="mt-4">
      <div className="flex items-center justify-between text-sm">
        <span className="text-theme-neutral-600 dark:text-theme-neutral-400">
          Expertise Level
        </span>
        <span className="font-medium text-theme-primary-600">{tool.expertise}%</span>
      </div>
      <Progress value={tool.expertise} className="mt-2" />
    </div>
  </ScrollInView>
);
