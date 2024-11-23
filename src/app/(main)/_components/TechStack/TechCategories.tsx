import { FC } from "react";

interface TechCategoriesProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
}

export const TechCategories: FC<TechCategoriesProps> = ({
  categories,
  activeCategory,
  onSelect,
}) => (
  <div className="flex flex-wrap justify-center gap-4">
    {["all", ...categories].map((category) => (
      <button
        key={category}
        onClick={() => onSelect(category)}
        className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
          activeCategory === category
            ? "bg-purple-600 text-white"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
        }`}
      >
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </button>
    ))}
  </div>
);
