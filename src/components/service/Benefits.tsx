"use client";
import { FC } from "react";
import { motion } from "motion/react";
import { BenefitProps } from "@/types";

export const Benefits: FC<{ benefits: BenefitProps[] }> = ({ benefits }) => (
  <section className="py-24">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-16 max-w-3xl text-center"
      >
        <span className="mb-4 inline-block rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-semibold text-purple-400">
          Benefits
        </span>
        <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
          Why Choose Our{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Solution
          </span>
        </h2>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-2xl border border-gray-800 bg-card p-6"
          >
            <div className="mb-4 inline-flex rounded-xl bg-purple-500/10 p-3">
              {benefit.icon}
            </div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">
              {benefit.title}
            </h3>
            <p className="text-muted-foreground">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
