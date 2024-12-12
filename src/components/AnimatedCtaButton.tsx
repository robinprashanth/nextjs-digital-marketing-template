// components/AnimatedCtaButton.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ButtonProps } from "@/components/ui/button";

interface AnimatedCtaButtonProps extends ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedCtaButton: React.FC<AnimatedCtaButtonProps> = ({
  children,
  className = "",
  variant = "default",
  size = "lg",
  ...props
}) => {
  return (
    <Button
      size={size}
      variant={variant}
      className={`group relative h-14 overflow-hidden rounded-full transition-all duration-300 ${className}`}
      {...props}
    >
      <span className="flex items-center justify-center gap-2">
        {children}
        <ArrowRight className="relative ml-2 h-5 w-5 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-110" />
      </span>
      <div className="absolute inset-0 -z-10 translate-y-[100%] bg-primary/10 transition-transform duration-300 group-hover:translate-y-0" />
    </Button>
  );
};

export default AnimatedCtaButton;
