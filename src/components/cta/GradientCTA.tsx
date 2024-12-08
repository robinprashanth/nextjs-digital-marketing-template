"use client";

import { ScrollInView } from "@/components/motion/ScrollInView";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface CTAButton {
  text: string;
  href: string;
  variant: "primary" | "secondary";
}

interface GradientCTAProps {
  title: string;
  description: string;
  buttons: CTAButton[];
  className?: string;
  gradient?: "purple" | "ocean" | "rose" | "sunset";
  useInView?: boolean;
}

export const GradientCTA: FC<GradientCTAProps> = ({
  title,
  description,
  buttons,
  className,
  gradient = "purple",
  useInView = true,
}) => {
  const gradientStyles = {
    purple: "from-theme-primary-500 to-purple-700",
    ocean: "from-theme-ocean-500 to-theme-indigo-600",
    rose: "from-theme-rose-500 to-theme-primary-600",
    sunset: "from-theme-secondary-500 to-theme-rose-600",
  };

  return (
    <ScrollInView
      useInView={useInView}
      className={cn(
        "mt-16 rounded-2xl bg-gradient-to-r p-12 text-center",
        gradientStyles[gradient],
        className,
      )}
    >
      <h2 className="mb-4 text-3xl font-bold text-white">{title}</h2>
      <p className="mb-8 text-lg text-white/80">{description}</p>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        {buttons.map((button, index) => (
          <Link
            key={index}
            href={button.href}
            className={cn(
              "rounded-full px-8 py-3 text-base font-semibold transition-all",
              button.variant === "primary"
                ? "bg-white text-theme-primary-600 hover:bg-theme-neutral-100"
                : "border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20",
            )}
          >
            {button.text}
          </Link>
        ))}
      </div>
    </ScrollInView>
  );
};
