"use client"
import { FC, PropsWithChildren } from "react";
import { motion, Variants, HTMLMotionProps } from "motion/react";

interface ScrollInViewProps extends PropsWithChildren {
  className?: string;
  y?: number;
  x?: number;
  once?: boolean;
  amount?: number | "some" | "all";
  delay?: number;
  duration?: number;
  viewport?: Omit<HTMLMotionProps<"div">["viewport"], "root">;
}

export const ScrollInView: FC<ScrollInViewProps> = ({
  children,
  className = "",
  y = 20,
  x = 0,
  once = true,
  amount = 0.3,
  delay = 0,
  duration = 0.5,
  viewport,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount, ...viewport }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Variant for staggered scroll animations
interface ScrollInViewStaggerProps extends PropsWithChildren {
  className?: string;
  delayStep?: number;
  viewport?: Omit<HTMLMotionProps<"div">["viewport"], "root">;
}

const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const ScrollInViewStagger: FC<ScrollInViewStaggerProps> = ({
  children,
  className = "",
  delayStep = 0.1,
  viewport,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3, ...viewport }}
      className={className}
      variants={{
        ...staggerVariants,
        visible: {
          transition: {
            staggerChildren: delayStep,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// Item component for use with ScrollInViewStagger
interface ScrollInViewStaggerItemProps extends PropsWithChildren {
  className?: string;
  y?: number;
  x?: number;
  duration?: number;
}

export const ScrollInViewStaggerItem: FC<ScrollInViewStaggerItemProps> = ({
  children,
  className = "",
  y = 20,
  x = 0,
  duration = 0.5,
}) => {
  const customItemVariants: Variants = {
    hidden: { opacity: 0, y, x },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration },
    },
  };

  return (
    <motion.div
      variants={customItemVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};



// Export all components
export const ScrollAnimations = {
  View: ScrollInView,
  Stagger: ScrollInViewStagger,
  StaggerItem: ScrollInViewStaggerItem,
};