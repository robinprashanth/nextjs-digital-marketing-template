import { FC, PropsWithChildren } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { Clock, ArrowLeft, ChevronRight } from 'lucide-react';
import { BlogPostMetadata } from '@/types';
import { ScrollInView } from '@/components/motion/ScrollInView';
import { SocialShareModern } from '@/components/SocialShareModern';


interface BlogPostLayoutProps extends PropsWithChildren {
  metadata: BlogPostMetadata;
  slug: string;
}

export const BlogPostLayout: FC<BlogPostLayoutProps> = ({
  metadata,
  slug,
  children,
}) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <header className="relative overflow-hidden bg-[linear-gradient(to_b,hsl(var(--theme-primary-600))_0%,hsl(var(--background))_100%)] pb-20 pt-24">
        {/* Grid Background */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)',
            backgroundSize: '4rem 4rem'
          }}
        />

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_hsl(var(--background))_100%)] opacity-40" />

        <div className="container relative mx-auto px-4 sm:px-6">
          {/* Back Button */}
          <ScrollInView className="mb-8">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/5 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-background/10"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </ScrollInView>

          {/* Content */}
          <div className="mx-auto max-w-4xl">
            <ScrollInView>
              {/* Category & Date */}
              <div className="mb-6 flex flex-wrap items-center gap-4">
                <div className="flex items-center">
                  <span className="rounded-full bg-theme-primary-500/10 px-4 py-1.5 text-sm font-medium text-theme-primary-500">
                    {metadata.category}
                  </span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
                <time 
                  dateTime={metadata.date}
                  className="text-sm text-muted-foreground"
                >
                  {format(new Date(metadata.date), "MMMM d, yyyy")}
                </time>
              </div>

              {/* Title */}
              <h1 className="mb-8 text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
                {metadata.title}
              </h1>

              {/* Author and Read Time */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border border-border">
                    <Image
                      src={metadata.author.avatar}
                      alt={metadata.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="font-medium text-foreground">
                    {metadata.author.name}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {metadata.readTime}
                </div>
              </div>
            </ScrollInView>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative mx-auto max-w-4xl">
          {/* Cover Image */}
          <ScrollInView className="-mt-20 mb-16">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg my-10">
              <div className="relative aspect-[16/9]">
                <Image
                  src={metadata.coverImage}
                  alt={metadata.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </ScrollInView>

          {/* Article Content */}
          <main>
            <article className="prose prose-lg dark:prose-invert max-w-none">
              {children}
            </article>
          </main>

          <div className="mt-12 mb-16">
  <SocialShareModern 
    url={`/blog/theme-2/${slug}`}
    title={metadata.title}
    description={metadata.excerpt}
  />
</div>

          {/* Tags */}
          <footer className="my-12">
            <div className="flex flex-wrap gap-2">
              {metadata.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};