import { FC } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, Tag } from "lucide-react";
import { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export const BlogCard: FC<BlogCardProps> = ({ post, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group cursor-pointer"
  >
    <Link href={`/blog/theme-1/${post.slug}`}>
      <div className="overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/20">
        {/* Cover Image */}
        <div className="relative h-60 overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

          {/* Category Badge */}
          <div className="absolute left-4 top-4 rounded-full bg-primary/10 px-4 py-1 backdrop-blur-sm">
            <span className="text-sm font-medium text-primary">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Meta Info */}
          <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </div>
          </div>

          {/* Title & Excerpt */}
          <h2 className="mb-2 text-2xl font-bold text-foreground group-hover:text-primary">
            {post.title}
          </h2>
          <p className="mb-4 text-muted-foreground">{post.excerpt}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </div>
            ))}
          </div>

          {/* Author */}
          <div className="mt-6 flex items-center gap-3 border-t border-border pt-6">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-medium text-foreground">
                {post.author.name}
              </div>
              <div className="text-sm text-muted-foreground">Author</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </motion.article>
);
