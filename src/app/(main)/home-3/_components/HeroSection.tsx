"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { FadeInStagger } from "@/components/motion/FadeInStagger";
import { FadeInStaggerItem } from "@/components/motion/FadeInStaggerItem";
import { FloatIn } from "@/components/motion/FloatIn";
import { ScaleIn } from "@/components/motion/ScaleIn";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Geometric shapes for the background
const shapes = [
  { color: "bg-purple-400/30", size: "w-12 h-12", position: "top-20 left-10" },
  { color: "bg-blue-400/30", size: "w-16 h-16", position: "top-40 right-20" },
  { color: "bg-orange-400/30", size: "w-14 h-14", position: "bottom-40 left-20" },
  { color: "bg-pink-400/30", size: "w-10 h-10", position: "bottom-20 right-10" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background py-20">
      {/* Floating Shapes */}
      {shapes.map((shape, i) => (
        <FloatIn
          key={i}
          className={`absolute rounded-2xl blur-xl ${shape.color} ${shape.size} ${shape.position}`}
          duration={4}
        />
      ))}

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-[800px] text-center">
          <FadeInStagger>
            {/* Main Heading */}
            <FadeInStaggerItem>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                The all-in-one for
                <span className="mt-2 block bg-gradient-to-r from-theme-primary-500 to-theme-secondary-500 bg-clip-text text-transparent">
                  teams of one
                </span>
              </h1>
            </FadeInStaggerItem>

            {/* Subheading */}
            <FadeInStaggerItem>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                All the tools you need to grow your business in one simple platform.
                No technical skills required.
              </p>
            </FadeInStaggerItem>

            {/* CTA Buttons */}
            <FadeInStaggerItem>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button 
                  size="lg" 
                  className="min-w-[200px] rounded-full bg-theme-primary-500 text-white hover:bg-theme-primary-600"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="min-w-[200px] rounded-full"
                >
                  Watch Demo
                </Button>
              </div>
            </FadeInStaggerItem>
          </FadeInStagger>

          {/* App Preview */}
          <ScaleIn delay={0.2}>
            <div className="relative mx-auto mt-16 max-w-[800px]">
              <div className="aspect-[5/3] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-theme-primary-500/20 via-theme-secondary-500/20 to-theme-primary-600/20 p-1 backdrop-blur-xl">
                <div className="h-full w-full overflow-hidden rounded-[22px] bg-background/80">
                  <div className="relative h-full w-full">
                    <Image
                      src="/images/homepage3/hero-preview.jpeg"
                      alt="App Preview"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScaleIn>

          {/* Quick Stats */}
          <FadeIn delay={0.4}>
            <div className="mx-auto mt-16 max-w-4xl grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
              {[
                { label: "Active Users", value: "100K+" },
                { label: "App Store Rating", value: "4.9/5" },
                { label: "Countries", value: "150+" },
                { label: "Tasks Completed", value: "10M+" },
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
} 