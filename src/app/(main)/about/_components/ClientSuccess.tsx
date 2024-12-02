"use client";

import { FC } from "react";
import {
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollInView } from "@/components/motion/ScrollInView";
import { caseStudies, type Metric } from "../data/content";
import Link from "next/link";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";

const ClientMetric: FC<Metric & { index: number }> = ({
  label,
  value,
  icon: Icon,
  index,
}) => (
  <ScrollInView 
    delay={0.1 * index}
    useInView={true}
    className="flex flex-col items-center space-y-2 text-center"
  >
    <div className="rounded-full bg-theme-primary-500/10 p-3">
      <Icon className="h-6 w-6 text-theme-primary-400" />
    </div>
    <div className="text-2xl font-bold text-foreground">{value}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </ScrollInView>
);



const CaseStudyCard: FC<(typeof caseStudies)[0] & { index: number }> = ({
  client,
  industry,
  logo,
  title,
  description,
  metrics,
  testimonial,
  index,
}) => (
  <ScrollInView 
    delay={0.1 * index}
    useInView={true}
  >
    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-theme-primary-500/5">
      <CardHeader className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <Badge className="bg-theme-primary-500/10 text-theme-primary-400 hover:bg-theme-primary-500/20">
              {industry}
            </Badge>
            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          </div>
          <div className="relative h-12 w-12 overflow-hidden rounded-lg">
            <Image src={logo} alt={client} fill className="object-contain" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6 p-6">
        <p className="text-muted-foreground">{description}</p>

        <div className="grid grid-cols-3 gap-4">
          {metrics.map((metric, idx) => (
            <ClientMetric key={idx} {...metric} index={idx} />
          ))}
        </div>

        <TestimonialCard {...testimonial} index={index} />
      </CardContent>

      <CardFooter className="justify-end p-6">
        <Button 
          variant="ghost" 
          className="text-theme-primary-400 hover:bg-theme-primary-500/10 hover:text-theme-primary-500"
        >
          View Case Study
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  </ScrollInView>
);

export const ClientSuccess: FC = () => {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <ScrollInView
          useInView={true}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <Badge 
            className="mb-4 bg-theme-primary-500/10 px-4 py-1.5 text-theme-primary-400"
          >
            Success Stories
          </Badge>
          <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            Delivering{" "}
            <span className="bg-gradient-to-r from-theme-primary-400 to-theme-primary-600 bg-clip-text text-transparent">
              Exceptional Results
            </span>{" "}
            for Our Clients
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover how we&apos;ve helped businesses achieve remarkable growth
            through innovative digital marketing strategies.
          </p>
        </ScrollInView>

        {/* Case Studies Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} index={index} />
          ))}
        </div>

        {/* Bottom Section */}
        <ScrollInView
          useInView={true}
          className="mx-auto mt-16 flex max-w-3xl flex-col items-center space-y-8"
        >
          <Link href="/case-studies">
          <Button
          variant="action"
            size="fluid"
            rounded="full"
            className="bg-theme-primary-500 text-white hover:bg-theme-primary-600"
          >
            View More Case Studies
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          </Link>

          {/* Success Metrics */}
          <Card className="w-full">
            <CardContent className="grid grid-cols-3 gap-8 p-8">
              {[
                { label: "Client Satisfaction", value: "98%" },
                { label: "Projects Completed", value: "500+" },
                { label: "Revenue Generated", value: "$100M+" },
              ].map((metric, index) => (
                <ScrollInView
                  key={index}
                  delay={0.1 * index}
                  useInView={true}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-foreground">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric.label}
                  </div>
                </ScrollInView>
              ))}
            </CardContent>
          </Card>
        </ScrollInView>
      </div>
    </section>
  );
};

export default ClientSuccess;