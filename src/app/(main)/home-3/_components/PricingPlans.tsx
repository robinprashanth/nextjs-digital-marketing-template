"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { FadeInStagger } from "@/components/motion/FadeInStagger";
import { FadeInStaggerItem } from "@/components/motion/FadeInStaggerItem";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, HelpCircle, X } from "lucide-react";
import { useState } from "react";

type BillingPeriod = "monthly" | "annual";

const plans = [
  {
    name: "Free",
    description: "Perfect for trying out the app",
    price: { monthly: 0, annual: 0 },
    features: [
      { name: "Up to 3 projects", included: true },
      { name: "Basic analytics", included: true },
      { name: "24-hour support response time", included: true },
      { name: "Team collaboration", included: false },
      { name: "Custom branding", included: false },
      { name: "Advanced security", included: false },
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    description: "For power users and growing teams",
    price: { monthly: 15, annual: 144 },
    features: [
      { name: "Unlimited projects", included: true },
      { name: "Advanced analytics", included: true },
      { name: "1-hour support response time", included: true },
      { name: "Team collaboration", included: true },
      { name: "Custom branding", included: true },
      { name: "Advanced security", included: false },
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: { monthly: "Custom", annual: "Custom" },
    features: [
      { name: "Unlimited projects", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Priority support", included: true },
      { name: "Team collaboration", included: true },
      { name: "Custom branding", included: true },
      { name: "Advanced security", included: true },
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function PricingPlans() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");

  return (
    <section className="flex min-h-screen items-center justify-center bg-background">
      <div className="container relative z-10 px-4 py-24">
        <FadeIn className="text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-theme-primary-500">
            Pricing
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Choose your{" "}
            <span className="bg-gradient-to-r from-theme-primary-500 to-theme-secondary-500 bg-clip-text text-transparent">
              perfect plan
            </span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Start free and scale as you grow. All plans come with a 14-day trial.
          </p>

          {/* Billing Toggle */}
          <div className="mb-16 inline-flex items-center gap-4 rounded-full border border-border bg-card p-1">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={cn(
                "rounded-full px-6 py-2 text-sm transition-colors",
                billingPeriod === "monthly"
                  ? "bg-theme-primary-500 text-white"
                  : "hover:text-theme-primary-500"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("annual")}
              className={cn(
                "rounded-full px-6 py-2 text-sm transition-colors",
                billingPeriod === "annual"
                  ? "bg-theme-primary-500 text-white"
                  : "hover:text-theme-primary-500"
              )}
            >
              Annual{" "}
              <span className="text-theme-primary-500">
                (Save 20%)
              </span>
            </button>
          </div>
        </FadeIn>

        <div className="mx-auto max-w-7xl">
          <FadeInStagger>
            <div className="grid gap-8 lg:grid-cols-3">
              {plans.map((plan, i) => (
                <FadeInStaggerItem key={i}>
                  <div
                    className={cn(
                      "relative rounded-3xl border border-border bg-card p-8",
                      plan.popular && "border-theme-primary-500 shadow-lg"
                    )}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-theme-primary-500 px-4 py-1 text-sm font-medium text-white">
                        Most Popular
                      </div>
                    )}

                    {/* Plan Header */}
                    <div className="mb-8">
                      <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                      <p className="text-muted-foreground">
                        {plan.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold">
                          {typeof plan.price[billingPeriod] === "number"
                            ? `$${plan.price[billingPeriod]}`
                            : plan.price[billingPeriod]}
                        </span>
                        {typeof plan.price[billingPeriod] === "number" && (
                          <span className="ml-2 text-muted-foreground">
                            /{billingPeriod === "monthly" ? "mo" : "yr"}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="mb-8 space-y-4">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3">
                          {feature.included ? (
                            <Check className="h-5 w-5 shrink-0 text-theme-primary-500" />
                          ) : (
                            <X className="h-5 w-5 shrink-0 text-muted-foreground" />
                          )}
                          <span
                            className={cn(
                              "text-sm",
                              !feature.included && "text-muted-foreground"
                            )}
                          >
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      className={cn(
                        "w-full rounded-full",
                        plan.popular
                          ? "bg-theme-primary-500 text-white hover:bg-theme-primary-600"
                          : "bg-card text-foreground hover:bg-muted"
                      )}
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </FadeInStaggerItem>
              ))}
            </div>
          </FadeInStagger>

          {/* Enterprise Contact */}
          <FadeIn>
            <div className="mt-16 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
              <HelpCircle className="h-4 w-4" />
              <span>
                Need a custom plan? {" "}
                <a href="#" className="text-theme-primary-500 hover:underline">
                  Contact our sales team
                </a>
              </span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
} 