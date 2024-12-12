"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { FadeInStagger } from "@/components/motion/FadeInStagger";
import { FadeInStaggerItem } from "@/components/motion/FadeInStaggerItem";
import { FloatingShape } from "@/components/motion/FloatingShape";
import { TestimonialCarousel } from "@/components/testimonials/TestimonialCarousel";
import { TestimonialSmall } from "@/components/testimonials/TestimonialSmall";
import React, { FC } from "react";
import { decorativeShapes } from "../data/content";
import { clientAvatars, stats, testimonials } from "./hero/heroData";
import { StatCard } from "./hero/StatCard";
import AnimatedCtaButton from "@/components/AnimatedCtaButton";

export const HeroSection: FC = () => {
  const renderShape = (shape: (typeof decorativeShapes)[0]) => {
    let content;
    switch (shape.type) {
      case "blur":
        content = (
          <div
            className={`rounded-full blur-lg ${shape.size} ${shape.color}`}
          />
        );
        break;
      case "star":
        content = <div className={`text-4xl ${shape.color}`}>✦</div>;
        break;
      case "plus":
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
            #1 Leading Digital Marketing Agency
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
                  solutions, and measurable results that drive real business
                  growth.
                </p>
              </FadeInStaggerItem>

              <FadeInStaggerItem>
                <div className="mt-10 flex flex-wrap items-center gap-6">
                  <AnimatedCtaButton className="bg-white text-black hover:bg-theme-neutral-100">
                    GET IN TOUCH
                  </AnimatedCtaButton>

                  <TestimonialSmall clientAvatars={clientAvatars} />
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

          {/* <TestimonialCard {...testimonial} /> */}
          <TestimonialCarousel testimonials={testimonials} />

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
