"use client";

import { CustomSolutionCTA } from "@/components/cta/Presets";
import { ScrollInView } from "@/components/motion/ScrollInView";
import { FC, useState } from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { PricingCard } from "./PricingCard";
import { PricingToggle } from "./PricingToggle";
import { pricingPlans } from "./pricingPlans";

export const PricingSection: FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly",
  );

  return (
    <section className="bg-gray-50 py-24 dark:bg-theme-neutral-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <SectionHeading
            alignment="center"
            title={["Choose the Right Plan for Your Growth"]}
            subtitle="PRICING PLANS"
            subtitleColor="ocean"
            animated={true}
            paragraph="Flexible pricing options designed to scale with your business needs"
          />
        <ScrollInView
        useInView={true}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
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
