"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { FadeInStagger } from "@/components/motion/FadeInStagger";
import { FadeInStaggerItem } from "@/components/motion/FadeInStaggerItem";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const screenshots = [
  {
    title: "Dashboard Overview",
    description: "Get a quick view of your tasks, calendar, and team activity",
    image: "/images/app/screenshots/dashboard.jpeg",
    gradient: "from-theme-primary-500/20 to-theme-secondary-500/20",
  },
  {
    title: "Task Management",
    description: "Organize and track your projects with intuitive tools",
    image: "/images/app/screenshots/tasks.jpeg",
    gradient: "from-theme-ocean-500/20 to-theme-tulip-500/20",
  },
  {
    title: "Team Chat",
    description: "Collaborate with your team in real-time messaging",
    image: "/images/app/screenshots/chat.jpeg",
    gradient: "from-theme-indigo-500/20 to-theme-primary-500/20",
  },
  {
    title: "Calendar View",
    description: "Schedule and manage your meetings and deadlines",
    image: "/images/app/screenshots/calendar.jpeg",
    gradient: "from-theme-secondary-500/20 to-theme-ocean-500/20",
  },
  {
    title: "Analytics",
    description: "Track your progress with detailed insights and reports",
    image: "/images/app/screenshots/analytics.jpeg",
    gradient: "from-theme-tulip-500/20 to-theme-indigo-500/20",
  },
  {
    title: "Settings",
    description: "Customize your workspace to match your workflow",
    image: "/images/app/screenshots/settings.jpeg",
    gradient: "from-theme-primary-500/20 to-theme-tulip-500/20",
  },
];

export function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative">
      {/* Top curve */}
      <div>
        <svg 
          className="w-full" 
          width="1620" 
          height="128" 
          viewBox="0 0 1620 128" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path 
            className="fill-[#FEF1E7]"
            d="M1620 128H0C0 128 42 -7.67075e-05 511 0C980 7.67075e-05 1545.76 92.991 1620 128Z"
          />
        </svg>
      </div>
      
      {/* Main content with background */}
      <div className="relative bg-[#FEF1E7]">
        <div className="flex min-h-screen items-center justify-center">
          <div className="container relative z-10 px-4 pb-24">
            <FadeIn className="text-center">
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-theme-primary-500">
                Features
              </span>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Designs that turn heads and{" "}
                <span className="bg-gradient-to-r from-theme-primary-500 to-theme-secondary-500 bg-clip-text text-transparent">
                  close sales
                </span>
              </h2>
              <p className="mx-auto mb-16 max-w-2xl text-lg text-muted-foreground">
                You don&apos;t have to choose between a website that looks amazing and one
                that&apos;s easy to build yourself.
              </p>
            </FadeIn>

            <div ref={containerRef} className="relative mx-auto max-w-7xl">
              <FadeInStagger>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {screenshots.map((item, i) => (
                    <FadeInStaggerItem key={i}>
                      <motion.div
                        style={{ y: i % 2 === 0 ? y : undefined }}
                        className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-card"
                      >
                        {/* Gradient Overlay */}
                        <div
                          className={cn(
                            "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                            item.gradient
                          )}
                        />

                        {/* Screenshot */}
                        <div className="relative h-full w-full p-4">
                          <div className="relative h-full w-full overflow-hidden rounded-2xl">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex items-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <div className="relative z-10 w-full">
                            <h3 className="mb-2 text-xl font-semibold text-white">
                              {item.title}
                            </h3>
                            <p className="text-sm text-white/80">
                              {item.description}
                            </p>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        </div>
                      </motion.div>
                    </FadeInStaggerItem>
                  ))}
                </div>
              </FadeInStagger>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="absolute inset-x-0 -bottom-1">
        <svg 
          className="w-full rotate-180" 
          width="1620" 
          height="128" 
          viewBox="0 0 1620 128" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path 
            className="fill-[#FEF1E7]"
            d="M1620 128H0C0 128 42 -7.67075e-05 511 0C980 7.67075e-05 1545.76 92.991 1620 128Z"
          />
        </svg>
      </div>
    </section>
  );
} 