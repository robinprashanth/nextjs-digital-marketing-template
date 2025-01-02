"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { FadeInStagger } from "@/components/motion/FadeInStagger";
import { FadeInStaggerItem } from "@/components/motion/FadeInStaggerItem";
import { FloatIn } from "@/components/motion/FloatIn";
import { ScaleIn } from "@/components/motion/ScaleIn";
import Image from "next/image";
import { TeamAvatars } from "@/components/testimonials/TeamAvatars";
import { ActionButton } from "@/components/ui/action-button";

export function HeroSection() {
  const teamMembers = [
    {
      image: "/images/testimonials/profile2.jpg",
      name: "Sarah Johnson"
    },
    {
      image: "/images/testimonials/profile3.jpg",
      name: "Michael Chen"
    },
    {
      image: "/images/testimonials/emily.jpg",
      name: "Alex Rivera"
    }
  ];

  return (
    <div className="container mx-auto px-4  py-24">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Left content */}
        <div className="flex-1 space-y-8 lg:space-y-12 w-full">
          <FadeInStagger>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter">
              <FadeInStaggerItem className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent inline-block">
                TRANSFORM
              </FadeInStaggerItem>
              <br />
              <FadeInStaggerItem className="inline-block">
                YOUR DIGITAL
              </FadeInStaggerItem>
              <br />
              <FadeInStaggerItem className="inline-block">
                PRESENCE
              </FadeInStaggerItem>
            </h1>
          </FadeInStagger>
          
          <FadeIn delay={0.6}>
            <TeamAvatars members={teamMembers} />
          </FadeIn>

          <FadeIn delay={0.8}>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-lg sm:text-xl font-semibold text-purple-400">WHY CHOOSE US</p>
              <p className="text-xl sm:text-2xl font-light tracking-wide">
                ELEVATE YOUR BRAND WITH
                <br />
                <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  DATA-DRIVEN STRATEGIES
                </span>
              </p>
              <p className="text-base sm:text-lg text-gray-400 max-w-lg">
                We combine cutting-edge technology with creative excellence to deliver exceptional results that drive real business growth.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Right content - CTA Card */}
        <ScaleIn delay={0.4} className="flex-1 w-full">
          <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 text-black relative overflow-hidden">
            {/* Background blur effect */}
            <FloatIn 
              className="absolute top-0 right-0 w-32 h-32 bg-purple-300 rounded-full blur-3xl opacity-60"
              duration={4}
            />
            
            <div className="space-y-6 sm:space-y-8 relative z-10">
              <FadeIn delay={0.6}>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider">
                    Start Your Journey
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold tracking-tight">
                    Transform Your<br />
                    Business Growth<br />
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Today
                    </span>
                  </p>
                </div>
              </FadeIn>
              
              {/* Image placeholder */}
              <FadeIn delay={0.8} className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black/5">
                <Image
                  src="/images/homepage2/hero/hero.jpeg"
                  alt="Business Transformation"
                  fill
                  className="object-cover"
                  priority
                />
              </FadeIn>
              
              <FadeIn delay={1}>
                <ActionButton href="/contact">
                  Schedule Strategy Call
                </ActionButton>
              </FadeIn>
            </div>
          </div>
        </ScaleIn>
      </div>
    </div>
  );
} 