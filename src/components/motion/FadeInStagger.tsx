import { motion } from "motion/react";
import { FC } from "react";
import { AnimationProps } from "@/types";

interface FadeInStaggerProps extends AnimationProps {
  delayStep?: number;
  initialDelay?: number;
}

export const FadeInStagger: FC<FadeInStaggerProps> = ({
  children,
  className,
  delayStep = 0.1,
  initialDelay = 0,
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: delayStep,
            delayChildren: initialDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};