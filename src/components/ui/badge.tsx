import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        // Product Status
        new: "bg-blue-50 text-theme-ocean-600 dark:bg-theme-ocean-500/10 dark:text-theme-ocean-400",
        soon: "bg-purple-50 text-theme-primary-600 dark:bg-theme-primary-500/10 dark:text-theme-primary-400",
        beta: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400",
        hiring:
          "bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400",

        // Status States
        active:
          "bg-green-50 text-green-600 dark:bg-theme-tulip-500/10 dark:text-theme-tulip-400",
        pending:
          "bg-yellow-50 text-theme-sunflower-600 dark:bg-theme-sunflower-500/10 dark:text-theme-sunflower-400",
        closed:
          "bg-gray-50 text-theme-neutral-600 dark:bg-theme-neutral-500/10 dark:text-theme-neutral-400",

        // Alert States
        success:
          "bg-green-50 text-green-600 dark:bg-theme-tulip-500/10 dark:text-theme-tulip-400",
        error: "bg-red-50 text-theme-rose-600 dark:bg-theme-rose-500/10 dark:text-theme-rose-400",
        warning:
          "bg-yellow-50 text-theme-sunflower-600 dark:bg-theme-sunflower-500/10 dark:text-theme-sunflower-400",
        info: "bg-blue-50 text-theme-ocean-600 dark:bg-theme-ocean-500/10 dark:text-theme-ocean-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
