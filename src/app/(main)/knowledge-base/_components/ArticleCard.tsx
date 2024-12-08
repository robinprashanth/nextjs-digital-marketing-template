import { KnowledgeArticle } from "@/types";
import { Clock, ThumbsUp } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ArticleCardProps {
  article: KnowledgeArticle;
  index: number;
}

export const ArticleCard: FC<ArticleCardProps> = ({ article, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group rounded-2xl border border-theme-neutral-800 bg-background p-6 transition-all duration-300 hover:border-theme-primary-500/20"
  >
    <Link href={`/knowledge-base/${article.slug}`}>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {article.readTime}
          </span>
        </div>
        {article.helpful && (
          <div className="flex items-center gap-2">
            <ThumbsUp className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {article.helpful}
            </span>
          </div>
        )}
      </div>

      <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-theme-primary-400">
        {article.title}
      </h3>
      <p className="mb-4 text-sm text-muted-foreground">{article.excerpt}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-theme-primary-500/10 px-2.5 py-0.5 text-xs font-medium text-theme-primary-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative h-6 w-6 overflow-hidden rounded-full">
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              width={24}
              height={24}
              className="object-cover"
            />
          </div>
          <span className="text-sm text-muted-foreground">
            {article.author.name}
          </span>
        </div>
        <span className="text-sm text-muted-foreground">
          {new Date(article.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      </div>
    </Link>
  </motion.article>
);
