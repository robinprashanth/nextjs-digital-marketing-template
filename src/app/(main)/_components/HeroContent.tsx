"use client";
import React, { FC } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingShape } from "./hero/FloatingShape";
import { ClientAvatar } from "./hero/ClientAvatar";
import { clientAvatars, stats, testimonial } from "./hero/heroData";
import { TestimonialCard } from "./hero/TestimonialCard";
import { StatCard } from "./hero/StatCard";
import { FadeIn } from "@/components/motion/FadeIn";
import { FadeInStaggerItem } from "@/components/motion/FadeInStaggerItem";
import { FadeInStagger } from "@/components/motion/FadeInStagger";
import { decorativeShapes } from "../data/content";



export const HeroSection: FC = () => {
  const renderShape = (shape: typeof decorativeShapes[0]) => {
    let content;
    switch (shape.type) {
      case 'blur':
        content = <div className={`rounded-full blur-lg ${shape.size} ${shape.color}`} />;
        break;
      case 'star':
        content = <div className={`text-4xl ${shape.color}`}>✦</div>;
        break;
      case 'plus':
        content = <div className={`text-3xl ${shape.color}`}>+</div>;
        break;
    }

    return (
      <FloatingShape className={shape.position} delay={shape.delay}>
        {content}
      </FloatingShape>
    );
  };

  return (
    <div className="relative min-h-[calc(100vh-120px)] w-full pt-10">
      {/* Background gradient with improved performance */}
      <div className="absolute inset-0 bg-[conic-gradient(from_45deg_at_50%_50%,#0B0B1E_0%,#1A1A2E_100%)] opacity-50" />

      {/* Render decorative shapes */}
      {decorativeShapes.map((shape, index) => (
        <React.Fragment key={`${shape.type}-${index}`}>
          {renderShape(shape)}
        </React.Fragment>
      ))}

      <div className="container relative mx-auto flex h-full items-center px-4 sm:px-6">
        <div className="relative max-w-[90%] py-20 lg:max-w-[60%]">
          <FadeIn className="mb-6 inline-block rounded-full bg-theme-rose-500/10 px-4 py-1 text-sm text-theme-rose-400">
            Leading Digital Marketing Agency
          </FadeIn>

          <div className="space-y-4">
            <FadeInStagger delayStep={0.1} initialDelay={0.2}>
              <FadeInStaggerItem>
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                  <span className="text-white">ELEVATE</span>
                  <br />
                  <span className="text-theme-primary-400">YOUR DIGITAL</span>
                  <br />
                  <span className="scale-105 text-orange-400">PRESENCE</span>
                  <br />
                  <span className="text-white">STRATEGICALLY</span>
                </h1>
              </FadeInStaggerItem>

              <FadeInStaggerItem>
                <p className="mt-8 max-w-xl text-lg text-theme-neutral-400">
                  Transform your brand with data-driven strategies, innovative
                  solutions, and measurable results that drive real business growth.
                </p>
              </FadeInStaggerItem>

              <FadeInStaggerItem>
                <div className="mt-10 flex flex-wrap items-center gap-6">
                  <Button
                    size="lg"
                    className="h-14 rounded-full bg-white px-8 text-black hover:bg-theme-neutral-100"
                  >
                    GET IN TOUCH <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-3">
                      {clientAvatars.map((avatar, i) => (
                        <ClientAvatar key={i} {...avatar} index={i} />
                      ))}
                    </div>
                    <div className="text-sm">
                      <span className="font-bold text-white">500+</span>{" "}
                      <span className="text-theme-neutral-400">Happy Clients</span>
                    </div>
                  </div>
                </div>
              </FadeInStaggerItem>
            </FadeInStagger>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="absolute right-0 top-10 hidden h-full w-1/3 lg:block">
          {/* Decorative grid with reduced re-renders */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid h-full w-full grid-cols-3 gap-4 p-4">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="rounded-lg bg-white/10" />
              ))}
            </div>
          </div>

          <TestimonialCard {...testimonial} />

          {stats.map((stat, index) => (
            <div key={index} className={stat.position}>
              <StatCard {...stat} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
