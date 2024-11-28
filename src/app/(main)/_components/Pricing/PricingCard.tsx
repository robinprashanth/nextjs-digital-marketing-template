import { FC } from "react";
import { motion } from "motion/react";
import { Check, X, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { PricingPlan } from "@/types";
import { Button } from "@/components/ui/button";
import { ScrollInView } from "@/components/motion/ScrollInView";

interface PricingCardProps {
  plan: PricingPlan;
  billingPeriod: "monthly" | "yearly";
}

export const PricingCard: FC<PricingCardProps> = ({ plan, billingPeriod }) => {
  const price =
    billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

  return (
    <ScrollInView
      className={`relative rounded-2xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800 ${
        plan.isPopular ? "ring-2 ring-theme-primary-500" : ""
      }`}
    >
      {plan.isPopular && (
        <Badge
          className="absolute -top-3 left-1/2 -translate-x-1/2 bg-theme-primary-500"
          variant="secondary"
        >
          Most Popular
        </Badge>
      )}

      {/* Plan Header */}
      <div className="mb-6 text-center">
        <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
          {plan.name}
        </h3>
        <p className="text-sm text-theme-neutral-600 dark:text-theme-neutral-400">
          {plan.description}
        </p>
      </div>

      {/* Pricing */}
      <div className="mb-6 text-center">
        <motion.div
          key={price}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-4xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <span className="text-theme-neutral-600 dark:text-theme-neutral-400">
            /{billingPeriod === "monthly" ? "mo" : "yr"}
          </span>
          {billingPeriod === "yearly" && (
            <div className="mt-1 text-sm text-theme-tulip-500">
              Save ${(plan.monthlyPrice - plan.yearlyPrice) * 12} yearly
            </div>
          )}
        </motion.div>
      </div>

      {/* Features List */}
      <ul className="mb-8 space-y-4">
        {plan.features.map((feature) => (
          <li key={feature.id} className="flex items-start gap-2">
            {typeof feature.included === "boolean" ? (
              <div className="mt-1">
                {feature.included ? (
                  <Check className="h-5 w-5 text-theme-tulip-500" />
                ) : (
                  <X className="h-5 w-5 text-red-500" />
                )}
              </div>
            ) : typeof feature.included === "number" ? (
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-100 text-xs font-bold text-theme-primary-600">
                {feature.included}
              </div>
            ) : (
              <div className="mt-1">
                <Check className="h-5 w-5 text-theme-sunflower-500" />
              </div>
            )}
            <div>
              <div className="flex items-center gap-1">
                <span className="font-medium text-gray-900 dark:text-white">
                  {feature.title}
                </span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="h-4 w-4 text-theme-neutral-400" />
                    </TooltipTrigger>
                    <TooltipContent>{feature.description}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Button
        className={`w-full rounded-full px-6 py-3 text-center font-semibold transition-transform hover:scale-105 ${
          plan.isPopular
            ? "bg-theme-primary-600 text-white hover:bg-purple-700"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-theme-neutral-700 dark:text-white dark:hover:bg-theme-neutral-600"
        }`}
      >
        {plan.cta.text}
      </Button>
    </ScrollInView>
  );
};
