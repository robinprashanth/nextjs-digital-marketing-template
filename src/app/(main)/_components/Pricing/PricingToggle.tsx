import { FC } from "react";

interface PricingToggleProps {
  billingPeriod: "monthly" | "yearly";
  onToggle: (period: "monthly" | "yearly") => void;
}

export const PricingToggle: FC<PricingToggleProps> = ({
  billingPeriod,
  onToggle,
}) => (
  <div className="mt-8 inline-flex items-center rounded-full bg-gray-100 p-1 dark:bg-gray-800">
    <button
      onClick={() => onToggle("monthly")}
      className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
        billingPeriod === "monthly"
          ? "bg-theme-primary-600 text-white"
          : "text-theme-neutral-600 hover:text-gray-900 dark:text-theme-neutral-400 dark:hover:text-white"
      }`}
    >
      Monthly
    </button>
    <button
      onClick={() => onToggle("yearly")}
      className={`relative rounded-full px-6 py-2 text-sm font-medium transition-all ${
        billingPeriod === "yearly"
          ? "bg-theme-primary-600 text-white"
          : "text-theme-neutral-600 hover:text-gray-900 dark:text-theme-neutral-400 dark:hover:text-white"
      }`}
    >
      Yearly
      <span className="absolute -right-2 -top-2 rounded-full bg-theme-tulip-500 px-2 py-1 text-xs text-white">
        -20%
      </span>
    </button>
  </div>
);
