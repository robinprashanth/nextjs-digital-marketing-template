import { FC } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { MegaMenuSection } from "@/types";

interface AdvancedMegaMenuProps {
  sections: MegaMenuSection[];
  isOpen: boolean;
  onClose: () => void;
  featuredImage?: {
    src: string;
    alt: string;
    title: string;
    description: string;
    ctaText: string;
    ctaHref: string;
  };
}

export const AdvancedMegaMenu: FC<AdvancedMegaMenuProps> = ({
  sections,
  isOpen,
  onClose,
  featuredImage,
}) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="fixed left-0 right-0 top-16 z-50 mx-auto w-full"
      onMouseLeave={onClose}
    >
      {/* Clean backdrop */}
      <div className="absolute inset-0 bg-white dark:bg-gray-900/95" />

      {/* Content Container */}
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="grid grid-cols-12 gap-12">
            {/* Main Menu Sections */}
            <div className="col-span-9">
              <div className="grid grid-cols-4 gap-12">
                {sections.map((section) => (
                  <div key={section.title} className="space-y-4">
                    <h3 className="text-sm font-semibold text-theme-neutral-400 dark:text-theme-neutral-500">
                      {section.title}
                    </h3>
                    <ul className="space-y-1">
                      {section.items.map((item) => (
                        <li key={item.title}>
                          <Link
                            href={item.href}
                            className="group flex items-start justify-between rounded-lg p-2 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50"
                          >
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="font-medium text-gray-900 dark:text-white">
                                  {item.title}
                                </span>
                                {item.badge && (
                                  <Badge
                                    variant={item.badge}
                                    className="capitalize"
                                  >
                                    {item.badge}
                                  </Badge>
                                )}
                              </div>
                              {item.description && (
                                <p className="line-clamp-2 text-sm text-theme-neutral-500 dark:text-theme-neutral-400">
                                  {item.description}
                                </p>
                              )}
                            </div>
                            <ArrowUpRight className="h-4 w-4 text-theme-neutral-400 opacity-0 transition-all group-hover:text-gray-900 group-hover:opacity-100 dark:text-theme-neutral-500 dark:group-hover:text-gray-300" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Section */}
            {featuredImage && (
              <div className="col-span-3">
                <div className="overflow-hidden rounded-xl">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={featuredImage.src}
                      alt={featuredImage.alt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                    <div className="absolute bottom-0 p-6 text-white">
                      <h4 className="mb-2 text-lg font-semibold">
                        {featuredImage.title}
                      </h4>
                      <p className="mb-4 text-sm text-white/90">
                        {featuredImage.description}
                      </p>
                      <Link
                        href={featuredImage.ctaHref}
                        className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-transform hover:scale-105"
                      >
                        {featuredImage.ctaText}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
