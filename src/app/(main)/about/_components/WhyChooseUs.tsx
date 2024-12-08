"use client";

import SubTitleBadge from "@/components/badge/SubTitleBadge";
import { ScrollInView } from "@/components/motion/ScrollInView";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FC } from "react";
import { features, whyChooseUsContent, type Feature } from "../data/content";

interface FeatureCardProps extends Feature {
  index: number;
}

const FeatureCard: FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  stats,
  index,
}) => (
  <ScrollInView delay={index * 0.1} useInView={true} className="group">
    <Card className="relative h-full overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-lg">
      <CardHeader className="space-y-4 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2.5">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">{title}</h3>
          </div>
          <Badge variant="secondary" className="h-6">
            Featured
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>

      <CardContent className="p-6 pt-0">
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="rounded-lg bg-muted/50 p-4 text-center">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-foreground">
                  {stat.prefix}
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </ScrollInView>
);

export const WhyChooseUs: FC = () => {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <ScrollInView
          useInView={true}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <SubTitleBadge text={whyChooseUsContent.subtitle} />

          <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            {whyChooseUsContent.title.prefix}
            <span className="text-primary">
              {whyChooseUsContent.title.highlighted}
            </span>
            {whyChooseUsContent.title.suffix}
          </h2>
          <p className="text-lg text-muted-foreground">
            {whyChooseUsContent.description}
          </p>
        </ScrollInView>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
