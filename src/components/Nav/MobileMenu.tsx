import { Button } from "@/components/ui/button";
import type { MegaMenuSection, NavLink, NavSection } from "@/types";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { FC, useState } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  features: NavSection[];
  services: NavLink[];
  more: NavLink[];
  moreMenuSections: MegaMenuSection[];
}

export const MobileMenu: FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  features,
  services,
  more,
  moreMenuSections,
}) => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Menu panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm border-l border-white/10 bg-[#0B0B1E]"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="relative flex h-16 items-center justify-between border-b border-white/10 px-6">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={onClose}
                >
                  <div className="relative h-8 w-8">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-theme-primary-600 to-theme-ocean-600 blur-sm" />
                    <div className="relative flex h-full w-full items-center justify-center rounded-full bg-[#0B0B1E]">
                      <span className="text-xl">⬡</span>
                    </div>
                  </div>
                  <span className="bg-gradient-to-r from-theme-primary-600 to-theme-ocean-600 bg-clip-text text-xl font-bold text-transparent">
                    REVENTO
                  </span>
                </Link>
                <button
                  onClick={onClose}
                  className="absolute right-4 rounded-full p-2 text-theme-neutral-400 transition-colors hover:bg-white/10"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Scrollable content */}
              <div className="flex-1 overflow-y-auto px-6">
                <div className="space-y-6 py-6">
                  {/* Features */}
                  <div>
                    <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-theme-neutral-400">
                      Features
                    </div>
                    <div className="space-y-1">
                      {features.map((section) => (
                        <div key={section.title}>
                          <button
                            onClick={() => toggleSection(section.title)}
                            className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-theme-neutral-300 hover:bg-white/5"
                          >
                            <span>{section.title}</span>
                            <ChevronDown
                              className={`h-4 w-4 transition-transform ${
                                openSection === section.title
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {openSection === section.title && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="space-y-2 px-4 pb-3 pt-2">
                                  {section.items.map((item) => (
                                    <Link
                                      key={item.title}
                                      href={item.href}
                                      onClick={onClose}
                                      className="flex items-center gap-3 rounded-lg p-2 text-theme-neutral-400 transition-colors hover:bg-white/5 hover:text-white"
                                    >
                                      {item.icon && (
                                        <span className="rounded-lg bg-theme-primary-500/10 p-2">
                                          <item.icon className="h-5 w-5" />
                                        </span>
                                      )}
                                      <div>
                                        <div className="text-sm font-medium">
                                          {item.title}
                                        </div>
                                        {item.description && (
                                          <p className="text-xs text-theme-neutral-500">
                                            {item.description}
                                          </p>
                                        )}
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-theme-neutral-400">
                      Services
                    </div>
                    <div className="space-y-1">
                      {services.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          onClick={onClose}
                          className="flex items-center justify-between rounded-lg px-2 py-2 text-theme-neutral-300 transition-colors hover:bg-white/5"
                        >
                          <span>{service.title}</span>
                          <ChevronRight className="h-4 w-4 text-theme-neutral-500" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* More Links */}
                  <div>
                    <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-theme-neutral-400">
                      More
                    </div>
                    <div className="space-y-1">
                      {more.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={onClose}
                          className="flex items-center justify-between rounded-lg px-2 py-2 text-theme-neutral-300 transition-colors hover:bg-white/5"
                        >
                          <span>{item.title}</span>
                          <ChevronRight className="h-4 w-4 text-theme-neutral-500" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* More Menu Sections */}
                  {moreMenuSections.map((section) => (
                    <div key={section.title}>
                      <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-theme-neutral-400">
                        {section.title}
                      </div>
                      <div className="space-y-1">
                        {section.items.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={onClose}
                            className="flex items-center justify-between rounded-lg px-2 py-2 text-theme-neutral-300 transition-colors hover:bg-white/5"
                          >
                            <div className="flex items-center gap-3">
                              <div>
                                <span>{item.title}</span>
                                {item.description && (
                                  <p className="text-sm text-theme-neutral-500">
                                    {item.description}
                                  </p>
                                )}
                                {item.badge && (
                                  <span className="ml-2 inline-flex items-center rounded-full bg-theme-primary-500/10 px-2 py-0.5 text-xs font-medium text-theme-primary-400">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                            </div>
                            <ChevronRight className="h-4 w-4 text-theme-neutral-500" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Additional Links */}
                  <div className="border-t border-white/10 pt-6">
                    <div className="space-y-1">
                      <Link
                        href="/about"
                        onClick={onClose}
                        className="flex items-center justify-between rounded-lg px-2 py-2 text-theme-neutral-300 transition-colors hover:bg-white/5"
                      >
                        About Us
                      </Link>
                      <Link
                        href="/contact"
                        onClick={onClose}
                        className="flex items-center justify-between rounded-lg px-2 py-2 text-theme-neutral-300 transition-colors hover:bg-white/5"
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fixed bottom CTAs */}
              <div className="border-t border-white/10 bg-[#0B0B1E] p-6">
                <div className="grid gap-3">
                  <Button
                    variant="outline"
                    className="w-full border-white/10 text-theme-neutral-300 hover:bg-white/5"
                    onClick={onClose}
                  >
                    Sign In
                  </Button>
                  <Button
                    className="w-full bg-gradient-to-r from-theme-primary-600 to-theme-ocean-600 text-white"
                    onClick={onClose}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
