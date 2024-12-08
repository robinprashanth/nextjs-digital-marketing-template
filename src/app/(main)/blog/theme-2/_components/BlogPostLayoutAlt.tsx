import { FadeInStagger } from "@/components/motion/FadeInStagger";
import { FadeInStaggerItem } from "@/components/motion/FadeInStaggerItem";
import { ScrollInView } from "@/components/motion/ScrollInView";
import { SocialShareMinimal } from "@/components/SocialShareMinimal";
import { BlogPostMetadata } from "@/types";
import { format } from "date-fns";
import { ArrowLeft, Clock, Hash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

interface BlogPostLayoutAltProps extends PropsWithChildren {
  metadata: BlogPostMetadata;
  slug: string;
}

export const BlogPostLayoutAlt: FC<BlogPostLayoutAltProps> = ({
  metadata,
  slug,
  children,
}) => {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Split Hero Section */}
      <section className="relative flex min-h-[80vh] flex-col lg:flex-row">
        {/* Left Side - Content */}
        <div className="relative flex w-full items-center bg-background p-6 lg:w-1/2 lg:p-12">
          <div className="relative z-10 w-full">
            <ScrollInView>
              {/* Back Button */}
              <Link
                href="/blog"
                className="mb-12 inline-flex items-center gap-2 rounded-full bg-theme-primary-500/5 px-4 py-2 text-sm font-medium text-theme-primary-500 transition-colors hover:bg-theme-primary-500/10"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>

              {/* Meta Info */}
              <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <time dateTime={metadata.date}>
                  {format(new Date(metadata.date), "MMMM d, yyyy")}
                </time>
                <div className="h-1 w-1 rounded-full bg-border" />
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {metadata.readTime}
                </div>
              </div>

              {/* Title */}
              <h1 className="mb-8 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl">
                {metadata.title}
              </h1>

              {/* Category & Tags */}
              <FadeInStagger className="mb-8 flex flex-wrap gap-3">
                <FadeInStaggerItem>
                  <span className="rounded-full bg-theme-primary-500/10 px-4 py-1.5 text-sm font-medium text-theme-primary-500">
                    {metadata.category}
                  </span>
                </FadeInStaggerItem>
                {metadata.tags.map((tag) => (
                  <FadeInStaggerItem key={tag}>
                    <span className="flex items-center gap-1 rounded-full border border-border bg-background px-3 py-1 text-sm text-muted-foreground">
                      <Hash className="h-3 w-3" />
                      {tag}
                    </span>
                  </FadeInStaggerItem>
                ))}
              </FadeInStagger>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-border">
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
            </ScrollInView>
          </div>

          {/* Decorative Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--theme-primary-500))_0%,transparent_60%)] opacity-[0.03]" />
        </div>

        {/* Right Side - Image */}
        <div className="relative w-full lg:w-1/2">
          <div className="relative h-full min-h-[40vh] lg:min-h-full">
            <Image
              src={metadata.coverImage}
              alt={metadata.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent lg:bg-gradient-to-l" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-3xl">
          {/* Article */}
          <article className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-theme-primary-500 hover:prose-a:text-theme-primary-400 prose-pre:border prose-pre:border-border prose-pre:bg-theme-neutral-900/50">
            {children}
          </article>

          <div className="mt-12 border-t border-border pt-8">
            <SocialShareMinimal
              url={`/blog/theme-1/${slug}`}
              title={metadata.title}
              description={metadata.excerpt}
            />
          </div>

          {/* Newsletter */}
          <div className="mt-16 rounded-2xl border border-border bg-card p-8">
            <h3 className="mb-4 text-2xl font-bold text-foreground">
              Subscribe to Our Newsletter
            </h3>
            <p className="mb-6 text-muted-foreground">
              Get notified about new articles and insights.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-theme-primary-500 focus:outline-none focus:ring-1 focus:ring-theme-primary-500"
              />
              <button className="rounded-lg bg-theme-primary-500 px-6 py-2.5 font-medium text-white hover:bg-theme-primary-600 focus:outline-none focus:ring-2 focus:ring-theme-primary-500 focus:ring-offset-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
