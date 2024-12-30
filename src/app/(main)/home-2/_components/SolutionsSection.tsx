"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { FadeInStagger } from "@/components/motion/FadeInStagger";
import { FadeInStaggerItem } from "@/components/motion/FadeInStaggerItem";
import { cn } from "@/lib/utils";
import { Brain, Code, LineChart, Rocket, Shield, Sparkles, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    title: "AI Development",
    description: "Smart applications with AI",
    icon: <Brain className="w-5 h-5" />,
    value: "Enterprise",
    gradient: "from-purple-500/20 via-purple-500/10 to-transparent",
    iconColor: "text-purple-400",
    href: "/services/ai-development"
  },
  {
    title: "Analytics",
    description: "Real-time ML insights",
    icon: <LineChart className="w-5 h-5" />,
    value: "Advanced",
    gradient: "from-blue-500/20 via-blue-500/10 to-transparent",
    iconColor: "text-blue-400",
    href: "/services/analytics"
  },
  {
    title: "Security",
    description: "AI-driven protection",
    icon: <Shield className="w-5 h-5" />,
    value: "Premium",
    gradient: "from-emerald-500/20 via-emerald-500/10 to-transparent",
    iconColor: "text-emerald-400",
    href: "/services/security"
  },
  {
    title: "Performance",
    description: "Speed optimization",
    icon: <Rocket className="w-5 h-5" />,
    value: "Standard",
    gradient: "from-orange-500/10 via-orange-500/5 to-orange-500/0",
    iconColor: "text-orange-600",
    href: "/services/performance"
  },
  {
    title: "Automation",
    description: "Smart workflows",
    icon: <Sparkles className="w-5 h-5" />,
    value: "Pro",
    gradient: "from-pink-500/10 via-pink-500/5 to-pink-500/0",
    iconColor: "text-pink-600",
    href: "/services/automation"
  },
  {
    title: "Custom Dev",
    description: "Tailored solutions",
    icon: <Code className="w-5 h-5" />,
    value: "Custom",
    gradient: "from-indigo-500/10 via-indigo-500/5 to-indigo-500/0",
    iconColor: "text-indigo-600",
    href: "/services/custom-development"
  }
];

export function SolutionsSection() {
  return (
    <section className="bg-white relative py-24">
      <div className="container px-4 mx-auto">
        <FadeIn className="text-center max-w-2xl mx-auto mb-24">
          <span className="text-purple-600 font-semibold mb-4 block">
            Our Solutions
          </span>
          <h2 className="text-4xl font-bold mb-6 text-black">
            Cutting-edge Solutions for Digital Excellence
          </h2>
          <p className="text-gray-600 text-lg">
            Leverage our advanced AI-powered solutions to transform your digital presence
          </p>
        </FadeIn>

        <FadeInStagger>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {solutions.map((solution) => (
              <FadeInStaggerItem key={solution.title}>
                <Link href={solution.href}>
                  <div className={cn(
                    "group relative p-6 rounded-3xl cursor-pointer",
                    "bg-black hover:bg-black/90 transition-all duration-300",
                    "border border-gray-800 hover:border-gray-700",
                    "backdrop-blur-sm hover:backdrop-blur-lg"
                  )}>
                    {/* Gradient Background */}
                    <div className={cn(
                      "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300",
                      "bg-gradient-to-br",
                      solution.gradient
                    )} />

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className={cn(
                          "p-2 rounded-xl",
                          "bg-gray-900 group-hover:bg-gray-800 transition-colors duration-300"
                        )}>
                          <div className={solution.iconColor}>
                            {solution.icon}
                          </div>
                        </div>
                        <ArrowUpRight className={cn(
                          "w-5 h-5 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0",
                          "transition-all duration-300",
                          solution.iconColor
                        )} />
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold text-white group-hover:text-gray-100">
                          {solution.title}
                        </h3>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300">
                          {solution.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-800">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-400">Service Level</span>
                          <span className={cn(
                            "text-sm font-medium",
                            solution.iconColor
                          )}>
                            {solution.value}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeInStaggerItem>
            ))}
          </div>
        </FadeInStagger>
      </div>
    </section>
  );
} 