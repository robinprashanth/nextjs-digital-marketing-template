"use client";

import { Button } from "@/components/ui/button";
import { FloatIn } from "@/components/motion/FloatIn";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ActionButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
  className?: string;
  showArrow?: boolean;
}

export function ActionButton({
  href,
  children,
  variant = "default",
  className,
  showArrow = true,
}: ActionButtonProps) {
  return (
    <Link href={href}>
      <Button 
        variant={variant} 
        className={cn(
          "rounded-full bg-black text-white hover:bg-purple-900 transition-all duration-300 text-base",
          className
        )}
      >
        {children}
        {showArrow && (
          <FloatIn className="ml-2" y={3} duration={1.5}>
            →
          </FloatIn>
        )}
      </Button>
    </Link>
  );
} 