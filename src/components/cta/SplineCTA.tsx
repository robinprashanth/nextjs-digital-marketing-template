"use client";

import { ScrollInView } from "@/components/motion/ScrollInView";
import { Button } from "@/components/ui/button";
import Spline from '@splinetool/react-spline/next';
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface SplineCTAProps {
  title?: string;
  description?: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  className?: string;
}

export function SplineCTA({
  title = "LET'S COLLABORATE AND CREATE",
  description = "SOMETHING EXTRAORDINARY. CONTACT US TODAY TO EXPLORE LIMITLESS DESIGN SOLUTIONS TAILORED TO YOUR VISION.",
  primaryButton = {
    text: "Start Your Project",
    href: "/contact",
  },
  secondaryButton = {
    text: "Learn More",
    href: "/about",
  },
  className = "",
}: SplineCTAProps) {
  return (
    <ScrollInView className={`relative my-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-white 
                      shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] border border-gray-100">
          <div className="relative grid lg:grid-cols-2 gap-8 items-center p-8 md:p-12 lg:p-16">
            {/* Content Side */}
            <div className="relative z-10 space-y-8">
              <div className="inline-block rounded-full bg-purple-50 px-6 py-2 text-sm text-purple-600 font-medium">
                Ready to innovate?
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                {title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  size="xl"
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-purple-700
                           hover:from-purple-500 hover:to-purple-600 text-white shadow-lg
                           transition-all duration-300 hover:scale-[1.02]
                           hover:shadow-purple-200 hover:shadow-xl"
                >
                  <Link href={primaryButton.href} className="relative z-10 flex items-center">
                    {primaryButton.text}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="xl"
                  className="rounded-2xl border-2 border-purple-100 hover:border-purple-200 
                           hover:bg-purple-50 transition-all duration-300
                           hover:scale-[1.02] text-purple-600"
                >
                  <Link href={secondaryButton.href}>
                    {secondaryButton.text}
                  </Link>
                </Button>
              </div>
            </div>

            {/* Spline Animation Side */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full">
              <div className="absolute inset-0">
                <Spline
                  scene="https://prod.spline.design/KIRP32sI0xDFbkSF/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Subtle Decorative Elements */}
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-100/50 rounded-full blur-[128px] -translate-y-1/2 opacity-60" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-100/50 rounded-full blur-[128px] translate-y-1/2 opacity-60" />
          
          {/* Refined Corner Accents */}
          <div className="absolute top-6 left-6 w-16 h-16">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-purple-200 to-transparent" />
            <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-purple-200 to-transparent" />
          </div>
          <div className="absolute top-6 right-6 w-16 h-16">
            <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-purple-200 to-transparent" />
            <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-purple-200 to-transparent" />
          </div>
          <div className="absolute bottom-6 left-6 w-16 h-16">
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-purple-200 to-transparent" />
            <div className="absolute bottom-0 left-0 w-[1px] h-full bg-gradient-to-t from-purple-200 to-transparent" />
          </div>
          <div className="absolute bottom-6 right-6 w-16 h-16">
            <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-purple-200 to-transparent" />
            <div className="absolute bottom-0 right-0 w-[1px] h-full bg-gradient-to-t from-purple-200 to-transparent" />
          </div>
        </div>
      </div>
    </ScrollInView>
  );
} 