import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        premium:
          "bg-gradient-to-r from-green-600 to-theme-tulip-400 text-white shadow hover:from-green-600/90 hover:to-theme-tulip-400/90",
        glass:
          "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 border border-white/10",
        gradient:
          "bg-gradient-to-r from-theme-primary-600 to-indigo-600 text-white shadow hover:from-theme-primary-600/90 hover:to-indigo-600/90",
        submit:
          " rounded-full bg-gradient-to-r from-theme-primary-600 to-blue-600 text-white shadow transition-all hover:from-purple-700 hover:to-blue-700 hover:shadow-lg",
        action:
          "bg-theme-primary-600 text-white shadow-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-xl py-4 px-8 text-base font-medium",
        "white-action":
          "bg-white text-theme-primary-600 font-semibold shadow-lg transition-transform duration-300 hover:scale-105 py-3 px-8 rounded-full",
        cta: "bg-gradient-to-r from-theme-primary-500 to-purple-700 text-white text-base font-semibold py-3 px-8 transition-all hover:brightness-110 rounded-full",
        cta2: "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl py-4 px-8 text-base font-medium rounded-full",
        "text-link":
          "p-0 h-auto text-theme-primary-400 hover:text-purple-300 transition-colors [&_svg]:transition-transform [&_svg]:group-hover:translate-x-0.5 [&_svg]:group-hover:-translate-y-0.5",
        soft: "bg-theme-primary-500/10 text-theme-primary-400 transition-colors hover:bg-theme-primary-500/20 py-3 px-6 [&_svg]:transition-transform [&_svg]:group-hover:translate-x-0.5 rounded-full",
        tag: "bg-theme-primary-500/10 text-theme-primary-400 py-2 px-6 transition-colors hover:bg-theme-primary-500/20 text-sm font-medium",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        "sm-rounded": "h-8 rounded-full px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        "lg-rounded": "h-10 rounded-full px-8",
        xl: "h-12 rounded-full px-8",
        icon: "h-9 w-9",
        fluid: "h-auto",
      },
      rounded: {
        default: "rounded-md",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
