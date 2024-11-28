import { motion } from "motion/react";
import { FC, PropsWithChildren } from "react";

interface FadeInProps extends PropsWithChildren {
  delay?: number;
  y?: number;
  x?: number;
  duration?: number;
  className?: string;
}

export const FadeIn: FC<FadeInProps> = ({
  children,
  delay = 0,
  y = 20,
  x = 0,
  duration = 0.5,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ delay, duration }}
      className={className}
    >
      {children}
    </motion.div>
  );
};