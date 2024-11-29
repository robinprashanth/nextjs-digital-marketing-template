import { FC } from "react";
import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { Industry } from "@/types";
import { ScrollInView } from "@/components/motion/ScrollInView";

interface IndustryCardProps {
  industry: Industry;
  isActive: boolean;
  onClick: () => void;
  delay?: number;
}

export const IndustryCard: FC<IndustryCardProps> = ({
  industry,
  isActive,
  onClick,
  delay = 0,
}) => (
  <ScrollInView
  useInView={true}
  delay={delay}
  >
    <Card
      className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
        isActive ? "ring-2 ring-theme-primary-500" : ""
      }`}
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/30">
            {industry.icon}
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-5 w-5 fill-theme-sunflower-400 text-theme-sunflower-400" />
            <span className="font-medium text-theme-neutral-900 dark:text-white">
              {industry.expertise}%
            </span>
          </div>
        </div>
        <CardTitle className="text-xl">{industry.name}</CardTitle>
        <CardDescription>{industry.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-sm">
          <span className="text-theme-neutral-600 dark:text-theme-neutral-400">
            Expertise Level
          </span>
          <span className="text-theme-primary-600">{industry.expertise}%</span>
        </div>
        <Progress value={industry.expertise} className="mt-2" />
      </CardContent>
    </Card>
  </ScrollInView>
);
