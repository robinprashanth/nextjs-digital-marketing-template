"use client";

import { FC } from "react";
import { ScrollInView } from "@/components/motion/ScrollInView";
import { companyTimeline } from "../data/content";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Rocket,
  Globe,
  Lightbulb,
  Trophy,
  Sparkles,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Rocket,
  Globe,
  Lightbulb,
  Trophy,
  Sparkles,
};

const MilestoneCard: FC<{
  milestone: typeof companyTimeline.milestones[0];
  index: number;
}> = ({ milestone, index }) => {
  const Icon = iconMap[milestone.icon];

  return (
    <ScrollInView 
      useInView={true}
      className="relative w-full md:w-[calc(50%-2rem)]"
      delay={index * 0.1}
    >
      <Card className="group relative overflow-hidden border-none bg-gradient-to-br from-background to-muted/50 shadow-lg transition-all duration-300 hover:shadow-xl">
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${milestone.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
        
        {/* Connector Line and Dot */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-theme-primary-500/30 to-transparent md:left-auto md:right-[-2rem]" />
        <div className="absolute left-1/2 top-8 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-r from-theme-primary-500 to-theme-primary-600 md:left-auto md:right-[-2.25rem] md:translate-x-0">
          <div className="absolute inset-0 animate-ping rounded-full bg-theme-primary-500 opacity-75" />
        </div>

        <CardHeader className="pb-4">
          <div className="flex items-start gap-4">
            <div className={`rounded-xl bg-gradient-to-br ${milestone.gradient} p-3`}>
              <Icon className="h-6 w-6 text-white" />
            </div>
            <div className="space-y-1">
              <span className="inline-block rounded-full bg-theme-primary-500/10 px-3 py-1 text-sm font-semibold text-theme-primary-400">
                {milestone.year}
              </span>
              <CardTitle className="text-xl text-foreground">
                {milestone.title}
              </CardTitle>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <CardDescription className="text-base text-muted-foreground">
            {milestone.description}
          </CardDescription>

          <div className="grid grid-cols-2 gap-4 rounded-xl bg-gradient-to-br from-theme-primary-500/5 to-transparent p-4 backdrop-blur-sm">
            {milestone.stats.map((stat, i) => (
              <div 
                key={i} 
                className="relative overflow-hidden rounded-lg bg-card/50 p-4 text-center backdrop-blur-sm"
              >
                <div className="relative z-10">
                  <div className="bg-gradient-to-r from-theme-primary-400 to-theme-primary-600 bg-clip-text text-2xl font-bold text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-theme-primary-500/5 to-transparent opacity-50" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </ScrollInView>
  );
};

export const OurStory: FC = () => {
  return (
    <section className="relative py-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50" />

      <div className="container relative mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <ScrollInView
          useInView={true}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-theme-primary-500/10 px-4 py-1.5 text-sm font-semibold text-theme-primary-400">
            {companyTimeline.subtitle}
          </span>
          <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            {companyTimeline.title.split("Excellence")[0]}
            <span className="bg-gradient-to-r from-theme-primary-400 to-theme-primary-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {companyTimeline.description}
          </p>
        </ScrollInView>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line - Desktop */}
          <div className="absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-gradient-to-b from-theme-primary-500/30 via-theme-primary-500/20 to-transparent md:block" />

          {/* Milestones */}
          <div className="space-y-16">
            {companyTimeline.milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex w-full ${
                  index % 2 === 0 ? "md:justify-end" : ""
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