import { FC } from "react";
import { motion } from "motion/react";
import { StatCardProps } from "../../types";

export const StatCard: FC<StatCardProps> = ({
  icon,
  title,
  value,
  gradient,
  borderColor,
}) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.7 }}
    className={`absolute rounded-2xl border p-4 backdrop-blur-sm ${gradient} ${borderColor}`}
  >
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
        <span className="text-2xl">{icon}</span>
      </div>
      <div>
        <div className="font-medium text-white">{title}</div>
        <div className="text-theme-primary-400">{value}</div>
      </div>
    </div>
  </motion.div>
);
