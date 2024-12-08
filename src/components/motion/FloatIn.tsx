"use client";

import { motion } from "motion/react";
import { FC, PropsWithChildren } from "react";

interface FloatInProps extends PropsWithChildren {
  y?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

export const FloatIn: FC<FloatInProps> = ({
  children,
  y = 10,
  duration = 3,
  delay = 0,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: [-y, y, -y],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
