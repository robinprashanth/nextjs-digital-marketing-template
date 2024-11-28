import { FC } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { DropdownMenuProps } from "@/types";

export const DropdownMenu: FC<DropdownMenuProps> = ({
  items,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute left-0 top-full min-w-[280px] rounded-lg bg-white p-4 shadow-lg dark:bg-theme-neutral-800"
      onMouseLeave={onClose}
    >
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.title}>
            <Link
              href={item.href}
              className="group flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-gray-50 dark:hover:bg-theme-neutral-700"
            >
              <div>
                <span className="font-medium text-theme-neutral-900 dark:text-white">
                  {item.title}
                </span>
                {item.description && (
                  <p className="mt-1 text-sm text-theme-neutral-600 dark:text-theme-neutral-400">
                    {item.description}
                  </p>
                )}
              </div>
              <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
