import { FC } from "react";
import Link from "next/link";
import { Star, ArrowRight, TrendingUp, Book, Users } from "lucide-react";
import { KnowledgeArticle } from "@/types";
import { ScrollInView } from "@/components/motion/ScrollInView";

interface PopularTopicsProps {
  articles: KnowledgeArticle[];
}

export const PopularTopics: FC<PopularTopicsProps> = ({ articles }) => {
  // Group articles by category
  const groupedArticles = articles.reduce(
    (acc, article) => {
      if (!acc[article.category]) {
        acc[article.category] = [];
      }
      acc[article.category].push(article);
      return acc;
    },
    {} as Record<string, KnowledgeArticle[]>,
  );

  // Get top categories based on total helpful counts
  const topCategories = Object.entries(groupedArticles)
    .map(([category, articles]) => ({
      category,
      articles,
      totalHelpful: articles.reduce(
        (sum, article) => sum + (article.helpful || 0),
        0,
      ),
      views: `${(articles.reduce((sum, article) => sum + (article.helpful || 0), 0) / 10).toFixed(1)}k views`, // Convert helpful counts to views for display
    }))
    .sort((a, b) => b.totalHelpful - a.totalHelpful)
    .slice(0, 2); // Get top 2 categories

  return (
    <section className="border-t border-theme-neutral-800 bg-card">
      <div className="container mx-auto px-4 py-24 sm:px-6">
        <ScrollInView
         useInView={true}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-theme-primary-500/10 px-4 py-1.5 text-sm font-semibold text-theme-primary-400">
            TRENDING TOPICS
          </span>
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
            Most Viewed Articles
          </h2>
          <p className="text-muted-foreground">
            Check out our most popular articles and frequently asked questions.
          </p>
        </ScrollInView>

        <div className="grid gap-8 md:grid-cols-2">
          {topCategories.map((categoryGroup, index) => (
            <ScrollInView
            useInView={true}
            key={index}
            delay={index * 0.1}
              className="rounded-2xl border border-theme-neutral-800 bg-background p-6"
            >
              {/* Category Header */}
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="mb-1 text-xl font-semibold text-foreground">
                    {categoryGroup.category
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1),
                      )
                      .join(" ")}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4" />
                      {categoryGroup.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Book className="h-4 w-4" />
                      {categoryGroup.articles.length} articles
                    </span>
                  </div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-theme-primary-500/10">
                  <Star className="h-5 w-5 text-theme-primary-400" />
                </div>
              </div>

              {/* Top Articles List */}
              <ul className="space-y-4">
                {categoryGroup.articles
                  .sort((a, b) => (b.helpful || 0) - (a.helpful || 0))
                  .slice(0, 4) // Show top 4 articles
                  .map((article) => (
                    <li key={article.slug}>
                      <Link
                        href={`/knowledge-base/${article.slug}`}
                        className="group flex items-center justify-between rounded-lg border border-theme-neutral-800 p-4 transition-all hover:border-theme-primary-500/20"
                      >
                        <div className="flex-1">
                          <span className="line-clamp-1 text-muted-foreground group-hover:text-theme-primary-400">
                            {article.title}
                          </span>
                          <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {article.helpful} helpful
                            </span>
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-theme-primary-400" />
                      </Link>
                    </li>
                  ))}
              </ul>

              {/* View All Link */}
              <div className="mt-6 text-center">
                <Link
                  href={`/knowledge-base/categories/${categoryGroup.category}`}
                  className="inline-flex items-center gap-2 text-sm text-theme-primary-400 hover:text-purple-300"
                >
                  View all articles in{" "}
                  {categoryGroup.category
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollInView>
          ))}
        </div>

        {/* Featured Stats */}
        <ScrollInView
         useInView={true}
          className="mt-16 grid gap-8 rounded-2xl border border-theme-neutral-800 bg-background p-8 md:grid-cols-3"
        >
          {[
            {
              label: "Total Articles",
              value: articles.length,
              icon: Book,
            },
            {
              label: "Active Categories",
              value: Object.keys(groupedArticles).length,
              icon: Star,
            },
            {
              label: "Helpful Votes",
              value: articles.reduce(
                (sum, article) => sum + (article.helpful || 0),
                0,
              ),
              icon: Users,
            },
          ].map((stat, index) => (
            <ScrollInView
              key={stat.label}
              delay={0.1 * index}
              className="flex items-center gap-4"
            >
              <div className="rounded-xl bg-theme-primary-500/10 p-3">
                <stat.icon className="h-6 w-6 text-theme-primary-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </ScrollInView>
          ))}
        </ScrollInView>
      </div>
    </section>
  );
};
