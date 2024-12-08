import type { MegaMenuProps } from "@/types";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { FC } from "react";

export const MegaMenu: FC<MegaMenuProps> = ({ sections, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="fixed left-0 right-0 z-50 mx-auto max-w-7xl" // Changed to fixed and top-16
      onMouseLeave={onClose}
    >
      {/* Backdrop overlay */}
      <div className="absolute inset-0 rounded-lg bg-white backdrop-blur-md dark:bg-theme-neutral-900/80" />

      {/* Main content */}
      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {sections.map((section) => (
              <div key={section.title} className="space-y-6">
                <h3 className="text-sm font-medium uppercase tracking-wider text-theme-neutral-500 dark:text-theme-neutral-400">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        className="group flex items-start gap-4 rounded-lg p-3 transition-colors hover:bg-white/50 dark:hover:bg-theme-neutral-800/50"
                      >
                        <div className="rounded-lg bg-purple-50 p-2 dark:bg-purple-900/20">
                          {item.icon && (
                            <item.icon className="h-5 w-5 text-theme-primary-600" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-theme-neutral-900 dark:text-white">
                              {item.title}
                            </span>
                            <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                          </div>
                          {item.description && (
                            <p className="mt-1 text-sm text-theme-neutral-600 dark:text-theme-neutral-400">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
