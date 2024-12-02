"use client";

import { FC } from "react";
import { Clock, CheckCircle } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollInView } from "@/components/motion/ScrollInView";
import { processContent, processSteps, type ProcessStep } from "../data/content";
import SubTitltBadge from "@/components/badge/SubTitleBadge";

interface ProcessCardProps extends ProcessStep {
  index: number;
  totalSteps: number;
}

const ProcessCard: FC<ProcessCardProps> = ({
  icon: Icon,
  phase,
  title,
  description,
  duration,
  deliverables,
  index,
  totalSteps,
}) => (
  <ScrollInView
    delay={index * 0.1}
    useInView={true}
    className="relative flex flex-col md:flex-row md:gap-8"
  >
    {/* Left side with icon and connector */}
    <div className="flex flex-col items-center md:w-32">
      <div className="relative">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-theme-primary-500/10">
          <Icon className="h-8 w-8 text-theme-primary-400" />
        </div>
        <Badge 
          className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-theme-primary-500 p-0 text-white"
        >
          {index + 1}
        </Badge>
      </div>
      {index !== totalSteps - 1 && (
        <div className="mt-4 h-full w-px bg-gradient-to-b from-theme-primary-500/50 to-transparent" />
      )}
    </div>

    {/* Right side content */}
    <div className="flex-1 pb-12">
      <Card className="transition-all duration-300 hover:shadow-lg hover:shadow-theme-primary-500/5">
        <CardHeader className="space-y-4">
          <div className="space-y-2">
            <Badge variant="outline" className="bg-theme-primary-500/10 text-theme-primary-400">
              Phase: {phase}
            </Badge>
            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Duration: {duration}</span>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Key Deliverables:</h4>
            <ul className="grid gap-3">
              {deliverables.map((deliverable, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-theme-primary-400" />
                  <span className="text-sm text-muted-foreground">
                    {deliverable}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  </ScrollInView>
);

export const OurProcess: FC = () => {
  return (
    <section className="relative py-24">
      <div className="container relative mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <ScrollInView
          useInView={true}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <SubTitltBadge text= {processContent.subtitle} />
         
          <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            {processContent.title.prefix}
            <span className="bg-gradient-to-r from-theme-primary-400 to-theme-primary-600 bg-clip-text text-transparent">
              {processContent.title.highlighted}
            </span>
            {processContent.title.suffix}
          </h2>
          <p className="text-lg text-muted-foreground">
            {processContent.description}
          </p>
        </ScrollInView>

        {/* Process Steps */}
        <div className="relative mx-auto max-w-4xl">
          {processSteps.map((step, index) => (
            <ProcessCard
              key={index}
              {...step}
              index={index}
              totalSteps={processSteps.length}
            />
          ))}
        </div>


      </div>
    </section>
  );
};

export default OurProcess;