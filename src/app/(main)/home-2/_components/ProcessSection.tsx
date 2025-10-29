"use client";

import type { ReactNode } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";
import {
  Search,
  Brain,
  BarChart3,
  Users,
  Target,
  Sparkles,
  LineChart,
  Bot,
  ArrowUpRight,
  Rocket,
  Clock,
  Heart,
} from "lucide-react";
import Image from "next/image";

type Metric = {
  label: string;
  value: string;
  status?: string;
  color?: string;
  icon?: ReactNode;
};

type Process = {
  title: string;
  description: string;
  size: "small" | "medium" | "large";
  icon: ReactNode;
  bgColor?: string;
} & (
  | { metrics: Metric[] }
  | { images: string[] }
  | {
      insights: {
        success?: number;
        percentage?: number;
        label?: string;
        additionalMetrics: Metric[];
        keyStats?: {
          activeProjects: number;
          avgTimeToMarket: string;
          automationRate: string;
        };
      };
    }
  | { history: Array<{ metric: string; insight: string; impact: string }> }
);

const processes: Process[] = [
  {
    title: "Initial Consultation & Research",
    description:
      "We start by understanding your business goals and analyzing your market position.",
    size: "small",
    bgColor: "bg-emerald-100",
    metrics: [
      {
        label: "Market Analysis",
        value: "100%",
        status: "good",
        color: "emerald",
      },
      { label: "Goal Setting", value: "95%", status: "good", color: "emerald" },
    ],
    icon: <Search className="h-6 w-6 text-emerald-600" />,
  },
  {
    title: "Strategic AI Planning",
    description: "Developing a comprehensive digital strategy powered by AI.",
    size: "large",
    bgColor: "bg-purple-200",
    images: [
      "/images/ai/analytics-1.jpeg",
      "/images/ai/marketing-2.jpeg",
      "/images/ai/strategy-3.jpeg",
      "/images/ai/planning-4.jpeg",
    ],
    icon: <Brain className="h-6 w-6 text-purple-600" />,
  },
  {
    title: "AI Content Creation",
    description: "Creating engaging content using advanced AI tools.",
    size: "small",
    bgColor: "bg-blue-50",
    metrics: [
      { label: "Content Quality", value: "98%", icon: <LineChart /> },
      { label: "SEO Score", value: "92%", icon: <Target /> },
      { label: "Engagement", value: "89%", icon: <Users /> },
    ],
    icon: <Sparkles className="h-6 w-6 text-blue-600" />,
  },
  {
    title: "Implementation & Launch",
    description:
      "Executing strategies across all digital channels with precision and impact.",
    size: "medium",
    bgColor: "bg-orange-100",
    insights: {
      additionalMetrics: [
        {
          label: "Success Rate",
          value: "95%",
          icon: <Target className="h-4 w-4" />,
        },
        {
          label: "On-time Delivery",
          value: "98%",
          icon: <Clock className="h-4 w-4" />,
        },
        {
          label: "Client Satisfaction",
          value: "97%",
          icon: <Heart className="h-4 w-4" />,
        },
      ],
    },
    icon: <Rocket className="h-6 w-6 text-orange-600" />,
  },
  {
    title: "Performance Analytics",
    description: "Real-time monitoring and optimization of campaigns.",
    size: "large",
    bgColor: "bg-indigo-200",
    history: [
      {
        metric: "Website Traffic",
        insight: "AI-optimized SEO strategy",
        impact: "+125%",
      },
      {
        metric: "Lead Generation",
        insight: "ML-powered targeting",
        impact: "+85%",
      },
      {
        metric: "ROI",
        insight: "AI-driven campaign optimization",
        impact: "+95%",
      },
      {
        metric: "Brand Awareness",
        insight: "Social media automation",
        impact: "+150%",
      },
    ],
    icon: <BarChart3 className="h-6 w-6 text-indigo-600" />,
  },
  {
    title: "Continuous Optimization",
    description: "Ongoing improvements based on AI insights.",
    size: "small",
    bgColor: "bg-green-200",
    metrics: [
      { label: "Weekly Updates", value: "100%", status: "good", color: "blue" },
      { label: "Performance", value: "96%", status: "good", color: "emerald" },
    ],
    icon: <Bot className="h-6 w-6 text-green-600" />,
  },
];

export function ProcessSection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <FadeIn className="mx-auto mb-24 max-w-3xl text-center">
          <span className="mb-4 block font-semibold text-purple-600">
            Our Proven Process
          </span>
          <h2 className="mb-6 text-4xl font-bold text-gray-900">
            AI-Powered Digital Marketing Excellence
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            We combine cutting-edge AI technology with proven digital marketing
            strategies to deliver exceptional results for your business.
          </p>
        </FadeIn>

        <BentoGrid className="md:auto-rows-[20rem]">
          {processes.map((process) => (
            <BentoGridItem
              key={process.title}
              title={process.title}
              description={process.description}
              icon={process.icon}
              className={cn(
                process.size === "large"
                  ? "md:col-span-2"
                  : process.size === "medium"
                    ? "md:col-span-2"
                    : "md:col-span-1",
                process.bgColor,
                "transition-colors duration-300 hover:bg-white",
              )}
              content={
                <>
                  {/* Metrics Display */}
                  {"metrics" in process && (
                    <div className="mt-6 space-y-3">
                      {process.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2">
                            {"status" in metric ? (
                              <div
                                className={`h-2 w-2 rounded-full bg-${metric.color}-500`}
                              />
                            ) : (
                              <div className="text-gray-400">{metric.icon}</div>
                            )}
                            <span className="text-sm text-gray-700">
                              {metric.label}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-gray-900">
                              {metric.value}
                            </span>
                            <ArrowUpRight className="h-4 w-4 text-emerald-500" />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* History Display */}
                  {"history" in process && (
                    <div className="mt-6 space-y-4">
                      {process.history.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between text-sm"
                        >
                          <div className="flex-1">
                            <div className="font-medium text-gray-900">
                              {item.metric}
                            </div>
                            <div className="truncate text-gray-600">
                              {item.insight}
                            </div>
                          </div>
                          <div className="rounded-full bg-emerald-100 px-2 py-1 text-xs text-emerald-700">
                            {item.impact}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Insights Display */}
                  {"insights" in process && (
                    <div className="mt-6 space-y-6">
                      {/* Additional Metrics */}
                      {"additionalMetrics" in process.insights && (
                        <div className="grid grid-cols-3 gap-3">
                          {process.insights.additionalMetrics.map(
                            (metric, i) => (
                              <div
                                key={i}
                                className="rounded-xl bg-gray-50 p-3 text-center"
                              >
                                <div className="mb-2 flex justify-center text-orange-500">
                                  {metric.icon}
                                </div>
                                <div className="font-semibold text-gray-900">
                                  {metric.value}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {metric.label}
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Images Display */}
                  {"images" in process && (
                    <div className="mt-6">
                      <div className="flex flex-wrap gap-3">
                        {process.images.map((image, i) => (
                          <div
                            key={i}
                            className="group/image relative overflow-hidden rounded-xl border border-gray-100"
                          >
                            <Image
                              src={image}
                              alt={`AI Strategy Example ${i + 1}`}
                              width={100}
                              height={100}
                              className="object-cover transition-transform duration-300 group-hover/image:scale-110"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover/image:opacity-100">
                              <span className="hidden rounded-full bg-black/50 px-3 py-1 text-sm font-medium text-white sm:block">
                                Strategy Example {i + 1}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              }
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
