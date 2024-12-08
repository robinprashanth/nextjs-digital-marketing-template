import { Category } from "@/types";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { FC } from "react";

interface CategoryGridProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export const CategoryGrid: FC<CategoryGridProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => (
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {categories.map((category, index) => (
      <motion.button
        key={category.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        onClick={() => onSelectCategory(category.id)}
        className={`group relative rounded-2xl border ${
          selectedCategory === category.id
            ? "border-theme-primary-500 bg-theme-primary-500/5"
            : "border-theme-neutral-800 bg-card hover:border-theme-primary-500/20"
        } p-6 text-left transition-all duration-300`}
      >
        <div className="mb-4 inline-flex rounded-xl bg-theme-primary-500/10 p-3">
          <category.icon className="h-6 w-6 text-theme-primary-400" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-foreground">
          {category.name}
        </h3>
        <p className="mb-4 text-sm text-muted-foreground">
          {category.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {category.articleCount} articles
          </span>
          <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
        </div>
      </motion.button>
    ))}
  </div>
);
