"use client";

import { FloatingShapeProps } from "@/types";
import { motion } from "motion/react";
import { FC } from "react";

export const FloatingShape: FC<FloatingShapeProps> = ({
  className,
  children,
  delay = 0,
}) => (
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
    className={`absolute ${className} lg:block`}
  >
    {children}
  </motion.div>
);
