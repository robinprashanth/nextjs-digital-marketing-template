"use client";

import { motion } from "motion/react";
import { FC } from "react";

interface GridPatternProps {
  className?: string;
  squared?: boolean;
}

export const GridPattern: FC<GridPatternProps> = ({
  className = "",
  squared = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
      transition={{ duration: 1 }}
      className={`absolute inset-0 ${className}`}
      style={{
        backgroundImage: squared
          ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Cpath d='M0 0h40v1H0zM0 39h40v1H0z'/%3E%3Cpath d='M0 0h1v40H0zM39 0h1v40h-1z'/%3E%3C/g%3E%3C/svg%3E")`
          : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 0h4v4H0V0zm8 0h4v4H8V0zm8 0h4v4h-4V0z' fill='%23fff' fill-opacity='0.15'/%3E%3C/svg%3E")`,
      }}
    />
  );
};
