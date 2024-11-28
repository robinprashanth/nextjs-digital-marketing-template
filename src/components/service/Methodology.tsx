"use client";
import { FC } from "react";
import { MethodologyStepProps } from "@/types";
import { ScrollInView } from "../motion/ScrollInView";

export const Methodology: FC<{ steps: MethodologyStepProps[] }> = ({
  steps,
}) => (
  <section className="border-t border-gray-800 py-24">
    <div className="container mx-auto px-4 sm:px-6">
      <ScrollInView
        className="mx-auto mb-16 max-w-3xl text-center"
      >
        <span className="mb-4 inline-block rounded-full bg-theme-primary-500/10 px-4 py-1.5 text-sm font-semibold text-theme-primary-400">
          Our Approach
        </span>
        <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
          Proven{" "}
          <span className="bg-gradient-to-r from-theme-primary-400 to-theme-primary-600 bg-clip-text text-transparent">
            Methodology
          </span>
        </h2>
      </ScrollInView>

      <div className="relative mx-auto max-w-4xl">
        {steps.map((step, index) => (
          <ScrollInView
          key={index}
          delay={ index * 0.1}
            className="relative flex gap-8 pb-12"
          >
            <div className="relative flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-theme-primary-500/10 text-xl font-bold text-theme-primary-400">
                {step.number}
              </div>
              {index !== steps.length - 1 && (
                <div className="mt-4 h-full w-px bg-gradient-to-b from-theme-primary-500/50 to-transparent" />
              )}
            </div>
            <div className="flex-1 rounded-2xl border border-gray-800 bg-card p-6">
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          </ScrollInView>
        ))}
      </div>
    </div>
  </section>
);
