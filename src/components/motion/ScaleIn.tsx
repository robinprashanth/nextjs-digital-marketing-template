import { FC, PropsWithChildren } from "react";
import { motion } from "motion/react";

interface ScaleInProps extends PropsWithChildren {
  delay?: number;
  className?: string;
  duration?: number;
}

export const ScaleIn: FC<ScaleInProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration,
        delay,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};