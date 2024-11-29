"use client";
import { FC, useState } from "react";
import { PricingCard } from "./Pricing/PricingCard";
import { PricingToggle } from "./Pricing/PricingToggle";
import { pricingPlans } from "./Pricing/pricingPlans";
import { ScrollInView } from "@/components/motion/ScrollInView";
import { CustomSolutionCTA } from "@/components/cta/Presets";

export const PricingSection: FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly",
  );

  return (
    <section className="bg-gray-50 py-24 dark:bg-theme-neutral-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <ScrollInView
        useInView={true}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 block bg-gradient-to-r from-theme-primary-600 to-theme-ocean-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent">
            PRICING PLANS
          </span>
          <h2 className="mb-6 text-3xl font-bold text-theme-neutral-900 dark:text-white md:text-5xl">
            Choose the Right Plan for Your Growth
          </h2>
          <p className="text-lg text-theme-neutral-600 dark:text-theme-neutral-400">
            Flexible pricing options designed to scale with your business needs
          </p>

          <PricingToggle
            billingPeriod={billingPeriod}
            onToggle={setBillingPeriod}
          />
        </ScrollInView>

        {/* Pricing Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              billingPeriod={billingPeriod}
            />
          ))}
        </div>

        {/* Enterprise CTA */}
        <CustomSolutionCTA />
      </div>
    </section>
  );
};
