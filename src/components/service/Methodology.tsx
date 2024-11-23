"use client";
import { FC } from "react";
import { motion } from "motion/react";
import { MethodologyStepProps } from "@/types";

export const Methodology: FC<{ steps: MethodologyStepProps[] }> = ({
  steps,
}) => (
  <section className="border-t border-gray-800 py-24">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-16 max-w-3xl text-center"
      >
        <span className="mb-4 inline-block rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-semibold text-purple-400">
          Our Approach
        </span>
        <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
          Proven{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Methodology
          </span>
        </h2>
      </motion.div>

      <div className="relative mx-auto max-w-4xl">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative flex gap-8 pb-12"
          >
            <div className="relative flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-xl font-bold text-purple-400">
                {step.number}
              </div>
              {index !== steps.length - 1 && (
                <div className="mt-4 h-full w-px bg-gradient-to-b from-purple-500/50 to-transparent" />
              )}
            </div>
            <div className="flex-1 rounded-2xl border border-gray-800 bg-card p-6">
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
