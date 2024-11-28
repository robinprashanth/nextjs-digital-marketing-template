"use client";
import { FC } from "react";
import { FeatureProps } from "@/types";
import { ScrollInView } from "../motion/ScrollInView";

export const Features: FC<{ features: FeatureProps[] }> = ({ features }) => (
  <section className="border-t border-gray-800 py-24">
    <div className="container mx-auto px-4 sm:px-6">
      <ScrollInView
        className="mx-auto mb-16 max-w-3xl text-center"
      >
        <span className="mb-4 inline-block rounded-full bg-theme-primary-500/10 px-4 py-1.5 text-sm font-semibold text-theme-primary-400">
          Features
        </span>
        <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
          Powerful{" "}
          <span className="bg-gradient-to-r from-theme-primary-400 to-theme-primary-600 bg-clip-text text-transparent">
            Features
          </span>{" "}
          & Tools
        </h2>
      </ScrollInView>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <ScrollInView
          key={index}
          delay={ index * 0.1}
            className="group rounded-2xl border border-gray-800 bg-card p-6 transition-all duration-300 hover:border-theme-primary-500/20"
          >
            <div className="mb-4 inline-flex rounded-xl bg-theme-primary-500/10 p-3">
              {feature.icon}
            </div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">
              {feature.title}
            </h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </ScrollInView>
        ))}
      </div>
    </div>
  </section>
);
