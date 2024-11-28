"use client"

import { motion } from "motion/react";
import { FC } from "react";
import { AnimationProps } from "@/types";

export const FadeInStaggerItem: FC<AnimationProps> = ({
  children,
  className,
  y = 20,
  x = 0,
  duration = 0.5,
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y, x },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: {
            duration,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};