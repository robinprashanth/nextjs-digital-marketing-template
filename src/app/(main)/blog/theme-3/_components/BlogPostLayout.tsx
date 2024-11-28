import { FC, PropsWithChildren } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { Clock, ArrowLeft, Hash, Share2 } from 'lucide-react';
import { BlogPostMetadata } from '@/types';
import { SocialShareMinimal } from '@/components/SocialShareMinimal';
import { FadeInStagger } from '@/components/motion/FadeInStagger';
import { FadeInStaggerItem } from '@/components/motion/FadeInStaggerItem';

interface BlogPostLayoutPopProps extends PropsWithChildren {
  metadata: BlogPostMetadata;
  slug: string;
}

export const BlogPostLayoutPop: FC<BlogPostLayoutPopProps> = ({
  metadata,
  slug,
  children,
}) => {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero Section */}
      <div className="relative">
        {/* Gradient Background */}
        <div className="absolute inset-0 h-[70vh] bg-gradient-to-br from-theme-primary-400 via-theme-secondary-400 to-theme-primary-500">
          {/* Pattern Overlay */}
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)`,
            backgroundSize: '100px 100px',
            opacity: 0.5
          }} />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        </div>

        {/* Content Container */}
        <div className="container relative mx-auto px-4 pt-24 sm:px-6">
          {/* Back Button */}
          <Link 
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Main Content Card */}
          <div className="mx-auto max-w-4xl">
            <div>
              <div className="overflow-hidden rounded-3xl bg-background shadow-2xl ring-1 ring-border/5">
                {/* Cover Image */}
                <div className="relative aspect-[21/9]">
                  <Image
                    src={metadata.coverImage}
                    alt={metadata.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute right-6 top-6">
                    <span className="inline-flex items-center rounded-full bg-theme-primary-500 px-4 py-1.5 text-sm font-medium text-white">
                      {metadata.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 sm:p-12">
                  {/* Meta Info */}
                  <div className="mb-6 flex flex-wrap items-center gap-4">
                    <time 
                      dateTime={metadata.date}
                      className="text-sm text-muted-foreground"
                    >
                      {format(new Date(metadata.date), "MMMM d, yyyy")}
                    </time>
                    <span className="h-1 w-1 rounded-full bg-theme-primary-500/50" />
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {metadata.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h1 className="mb-8 bg-gradient-to-br from-theme-primary-500 via-theme-secondary-500 to-theme-primary-600 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl">
                    {metadata.title}
                  </h1>

                  {/* Author */}
                  <div className="mb-12 flex items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-theme-primary-500/20">
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
                      <div className="text-sm text-muted-foreground">
                        Author
                      </div>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="prose prose-lg dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-theme-primary-500 hover:prose-a:text-theme-primary-600 prose-strong:text-foreground prose-code:text-theme-primary-500 max-w-none">
                    {children}
                  </div>

                  {/* Tags */}
                  <div className="mt-12 border-t border-border pt-8">
                    <FadeInStagger className="flex flex-wrap gap-2" delayStep={0.1}>
                      {metadata.tags.map((tag) => (
                        <FadeInStaggerItem key={tag}>
                          <span className="inline-flex items-center gap-1 rounded-full bg-theme-primary-500/10 px-3 py-1 text-sm text-theme-primary-500">
                            <Hash className="h-3 w-3" />
                            {tag}
                          </span>
                        </FadeInStaggerItem>
                      ))}
                    </FadeInStagger>
                  </div>

                  {/* Share Section */}
                  <div className="mt-12 rounded-2xl bg-gradient-to-br from-theme-primary-500/5 via-theme-secondary-500/5 to-theme-primary-500/5 p-8">
                    <div className="mb-6 flex items-center gap-2 text-theme-primary-500">
                      <Share2 className="h-5 w-5" />
                      <span className="font-medium">Share this article</span>
                    </div>
                    <SocialShareMinimal 
                      url={slug}
                      title={metadata.title}
                      description={metadata.excerpt}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      {/* <section className="mt-24 bg-gradient-to-br from-theme-primary-500/[0.03] via-theme-secondary-500/[0.03] to-theme-primary-500/[0.03] py-24">
        <div className="container px-4 sm:px-6">
          <ScrollInView className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-theme-primary-500/10 px-4 py-1.5 text-sm font-medium text-theme-primary-500">
              STAY UPDATED
            </span>
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Subscribe to Our Newsletter
            </h2>
            <p className="mb-8 text-muted-foreground">
              Get the latest articles and insights delivered straight to your inbox.
            </p>
            <form className="flex flex-col gap-4 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-theme-primary-500 focus:outline-none focus:ring-2 focus:ring-theme-primary-500/20"
              />
              <button className="rounded-lg bg-theme-primary-500 px-6 py-3 font-medium text-white transition-colors hover:bg-theme-primary-600 focus:outline-none focus:ring-2 focus:ring-theme-primary-500 focus:ring-offset-2">
                Subscribe
              </button>
            </form>
          </ScrollInView>
        </div>
      </section> */}
    </div>
  );
};