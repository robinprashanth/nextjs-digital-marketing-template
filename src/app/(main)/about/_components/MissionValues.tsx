"use client";

import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScrollInView } from "@/components/motion/ScrollInView";
import { companyValues, missionValuesContent, type CompanyValue } from "../data/content";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

const ValueCard: FC<CompanyValue & { delay?: number }> = ({
  icon: Icon,
  title,
  description,
  gradient,
  features,
  size = "default",
  delay = 0,
}) => (
  <ScrollInView 
    delay={delay} 
    duration={0.5}
    useInView={true}
    className={`group col-span-1 ${size === "large" ? "md:col-span-2" : ""}`}
  >
    <Card className="relative h-full overflow-hidden bg-gradient-to-br from-background via-muted/50 to-background">
      {/* Animated border effect */}
      <div className="absolute inset-0 rounded-[inherit]">
        <div className={`absolute inset-px rounded-[inherit] bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />
      </div>

      <CardContent className="relative space-y-4 p-6">
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={`rounded-xl bg-gradient-to-br ${gradient} p-2.5`}>
              <Icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="font-semibold text-foreground">{title}</h3>
          </div>
          <Badge variant="secondary" className="opacity-50">
            {size === "large" ? "Featured" : "Core Value"}
          </Badge>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground">{description}</p>

        {/* Features */}
        {features && features.length > 0 && (
          <div className="space-y-2 pt-2">
            <div className="grid grid-cols-2 gap-2">
              {features.map((feature, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <ChevronRight className="h-3 w-3 text-theme-primary-400" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  </ScrollInView>
);

export const MissionValues: FC = () => {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <ScrollInView
          useInView={true}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-theme-primary-500/10 px-4 py-1.5 text-sm font-semibold text-theme-primary-400">
            {missionValuesContent.subtitle}
          </span>
          <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            {missionValuesContent.title.prefix}
            <span className="bg-gradient-to-r from-theme-primary-400 to-theme-primary-600 bg-clip-text text-transparent">
              {missionValuesContent.title.highlighted}
            </span>
            {missionValuesContent.title.suffix}
          </h2>
          <p className="text-lg text-muted-foreground">
            {missionValuesContent.description}
          </p>
        </ScrollInView>

        {/* Mission Statement */}
        <ScrollInView
          useInView={true}
          className="mx-auto mb-20"
        >
          <Card className="relative overflow-hidden bg-gradient-to-br from-theme-primary-500/5 via-transparent to-theme-ocean-500/5">
            <CardContent className="p-8 text-center md:p-12">
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                {missionValuesContent.mission.title}
              </h3>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                "{missionValuesContent.mission.statement}"
              </p>
            </CardContent>
          </Card>
        </ScrollInView>

        {/* Values Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {companyValues.map((value, index) => (
            <ValueCard
              key={index}
              {...value}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollInView
          useInView={true}
          delay={0.6}
          className="mx-auto mt-20 max-w-3xl text-center"
        >
          <p className="mb-6 text-lg text-muted-foreground">
            {missionValuesContent.bottomCTA.description}
          </p>
          <Button 
            variant="default"
            size="lg"
            className="bg-gradient-to-r from-theme-primary-500 to-theme-ocean-600 text-white hover:from-theme-primary-600 hover:to-theme-ocean-700"
          >
            <Link href={missionValuesContent.bottomCTA.buttonLink}>
              {missionValuesContent.bottomCTA.buttonText}
            </Link>
          </Button>
        </ScrollInView>
      </div>
    </section>
  );
};