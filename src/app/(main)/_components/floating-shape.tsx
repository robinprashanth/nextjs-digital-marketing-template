"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface FloatingShapeProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export const FloatingShape = ({
  className,
  children,
  delay = 0,
}: FloatingShapeProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      y: [0, -10, 0],
      x: [0, 5, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      delay,
    }}
    className={cn("absolute", className)}
  >
    {children}
  </motion.div>
);
