import { FC } from "react";
import { motion } from "motion/react";
import { Search } from "lucide-react";
import { ScrollInView } from "@/components/motion/ScrollInView";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  popularSearches?: string[];
}

export const SearchBar: FC<SearchBarProps> = ({
  value,
  onChange,
  popularSearches = [
    "Getting Started",
    "API Integration",
    "Campaign Setup",
    "Analytics",
  ],
}) => (
  <motion.div className="mx-auto max-w-3xl text-center">
    <span className="mb-4 inline-block rounded-full bg-theme-primary-500/10 px-4 py-1.5 text-sm font-semibold text-theme-primary-400">
      KNOWLEDGE BASE
    </span>
    <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
      How can we help you?
    </h1>
    <p className="text-lg text-white/80">
      Search our knowledge base or browse categories below to find the answers
      you need.
    </p>

    {/* Search Input */}
    <ScrollInView
    delay={0.2}
      className="mt-8"
    >
      <div className="relative mx-auto max-w-2xl">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-theme-neutral-400" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search articles, tutorials, and more..."
          className="w-full rounded-full border border-white/10 bg-white/10 px-12 py-4 text-white placeholder-theme-neutral-400 backdrop-blur-sm focus:border-theme-primary-500 focus:outline-none focus:ring-2 focus:ring-theme-primary-500/20"
        />
      </div>
    </ScrollInView>

    {/* Popular Searches */}
    <ScrollInView
    delay={0.3}
      className="mt-4 flex flex-wrap justify-center gap-2"
    >
      <span className="text-sm text-white/60">Popular:</span>
      {popularSearches.map((term) => (
        <button
          key={term}
          onClick={() => onChange(term)}
          className="rounded-full bg-white/5 px-3 py-1 text-sm text-white/80 hover:bg-white/10"
        >
          {term}
        </button>
      ))}
    </ScrollInView>
  </motion.div>
);
