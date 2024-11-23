import { FC } from "react";
import { motion } from "motion/react";
import { Filter } from "lucide-react";
import { KnowledgeArticle, KnowledgeCategory } from "@/types";
import { ArticleCard } from "./ArticleCard";

interface FeaturedArticlesProps {
  articles: KnowledgeArticle[];
  categories: KnowledgeCategory[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const FeaturedArticles: FC<FeaturedArticlesProps> = ({
  articles,
  categories,
  selectedCategory,
  onSelectCategory,
}) => (
  <section className="border-t border-gray-800 bg-card">
    <div className="container mx-auto px-4 py-24 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-foreground">All Articles</h2>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 rounded-full border border-gray-800 bg-background px-4 py-2 text-sm text-muted-foreground hover:border-purple-500/20">
              <Filter className="h-4 w-4" />
              Filter
            </button>
            <select
              value={selectedCategory}
              onChange={(e) => onSelectCategory(e.target.value)}
              className="rounded-full border border-gray-800 bg-background px-4 py-2 text-sm text-muted-foreground focus:border-purple-500 focus:outline-none"
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <ArticleCard key={article.slug} article={article} index={index} />
        ))}
      </div>

      {articles.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <p className="text-muted-foreground">
            No articles found for the selected category.
          </p>
        </motion.div>
      )}
    </div>
  </section>
);
