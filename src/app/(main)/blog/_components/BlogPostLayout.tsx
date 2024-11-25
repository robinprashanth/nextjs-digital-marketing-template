import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  Share2,
  MessageSquare,
} from "lucide-react";
import { BlogPostMetadata } from "@/types";

interface BlogPostLayoutProps {
  metadata: BlogPostMetadata;
  children: React.ReactNode;
}

export const BlogPostLayout: FC<BlogPostLayoutProps> = ({
  metadata,
  children,
}) => {
  return (
    <article className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[600px] overflow-hidden">
        {/* Cover Image */}
        <Image
          src={metadata.coverImage}
          alt={metadata.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

        <div className="container relative mx-auto h-full px-4 sm:px-6">
          <div className="flex h-full flex-col justify-end pb-24">
            {/* Back Link */}
            <Link
              href="/blog"
              className="mb-8 inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary backdrop-blur-sm transition-colors hover:bg-primary/20"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <div className="mx-auto max-w-3xl">
              {/* Category & Meta */}
              <div className="mb-6 flex flex-wrap items-center gap-4">
                <span className="rounded-full bg-primary/10 px-4 py-1 backdrop-blur-sm">
                  <span className="text-sm font-medium text-primary">
                    {metadata.category}
                  </span>
                </span>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(metadata.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {metadata.readTime}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
                {metadata.title}
              </h1>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={metadata.author.avatar}
                    alt={metadata.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-foreground">
                    {metadata.author.name}
                  </div>
                  <div className="text-sm text-muted-foreground">Author</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-3xl">
          {/* Share Bar */}
          <div className="sticky top-8 z-10 mb-12 flex items-center justify-between rounded-2xl border border-border bg-card/80 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">
                Share this post:
              </span>
              <div className="flex gap-2">
                {[
                  { name: "Twitter", icon: "twitter.svg" },
                  { name: "LinkedIn", icon: "linkedin.svg" },
                  { name: "Facebook", icon: "facebook.svg" },
                ].map((platform) => (
                  <button
                    key={platform.name}
                    className="rounded-full bg-primary/10 p-2 text-primary transition-colors hover:bg-primary/20"
                    aria-label={`Share on ${platform.name}`}
                  >
                    <Share2 className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </div>
            <button className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary transition-colors hover:bg-primary/20">
              <MessageSquare className="h-4 w-4" />
              <span className="text-sm font-medium">Comment</span>
            </button>
          </div>

          {/* Main Content */}
          {children}

          {/* Tags */}
          <div className="mt-12 border-t border-border pt-8">
            <div className="flex flex-wrap gap-2">
              {metadata.tags.map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
                >
                  <Tag className="h-4 w-4" />
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 rounded-2xl border border-border bg-card p-8">
            <div className="flex items-start gap-6">
              <div className="relative h-20 w-20 overflow-hidden rounded-full">
                <Image
                  src={metadata.author.avatar}
                  alt={metadata.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {metadata.author.name}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="mt-4 flex gap-4">
                  {/* Add social media links here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
