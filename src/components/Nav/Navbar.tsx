"use client";
import { FC, useState } from "react";
import { AnimatePresence } from "motion/react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MegaMenu } from "./MegaMenu";
import { DropdownMenu } from "./DropdownMenu";
import { MobileMenu } from "./MobileMenu";
import { features, services, more } from "@/data/navigation";

interface HoverState {
  features: boolean;
  services: boolean;
  more: boolean;
}

export const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<HoverState>({
    features: false,
    services: false,
    more: false,
  });

  const handleHover = (item: keyof HoverState, state: boolean) => {
    setHoveredItem((prev) => ({
      ...prev,
      [item]: state,
    }));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Background with blur */}
      <div className="absolute inset-0 bg-[#0B0B1E]/80 backdrop-blur-md" />

      {/* Gradient border */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <nav className="relative mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center gap-2">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 blur-sm" />
              <div className="relative flex h-full w-full items-center justify-center rounded-full bg-[#0B0B1E]">
                <span className="text-xl">⬡</span>
              </div>
            </div>
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-xl font-bold text-transparent">
              REVENTO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {/* Features Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleHover("features", true)}
              onMouseLeave={() => handleHover("features", false)}
            >
              <button className="flex items-center gap-1 py-2 text-gray-400 transition-colors hover:text-white">
                Features
              </button>
              <AnimatePresence>
                {hoveredItem.features && (
                  <MegaMenu
                    sections={features}
                    isOpen={hoveredItem.features}
                    onClose={() => handleHover("features", false)}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleHover("services", true)}
              onMouseLeave={() => handleHover("services", false)}
            >
              <button className="flex items-center gap-1 text-gray-400 transition-colors hover:text-white">
                Services
              </button>
              <AnimatePresence>
                {hoveredItem.services && (
                  <DropdownMenu
                    items={services}
                    isOpen={hoveredItem.services}
                    onClose={() => handleHover("services", false)}
                  />
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/about"
              className="text-gray-400 transition-colors hover:text-white"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-gray-400 transition-colors hover:text-white"
            >
              Contact
            </Link>
            <div
              className="relative"
              onMouseEnter={() => handleHover("more", true)}
              onMouseLeave={() => handleHover("more", false)}
            >
              <button className="flex items-center gap-1 text-gray-400 transition-colors hover:text-white">
                More
              </button>
              <AnimatePresence>
                {hoveredItem.more && (
                  <DropdownMenu
                    items={more}
                    isOpen={hoveredItem.more}
                    onClose={() => handleHover("more", false)}
                  />
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-4 md:flex">
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              Sign In
            </Button>
            <Button className="relative overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity hover:opacity-100" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="relative z-50 rounded-full p-2 text-gray-400 transition-colors hover:bg-white/10 md:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            features={features}
            services={services}
            more={more}
          />
        )}
      </AnimatePresence>
    </header>
  );
};
