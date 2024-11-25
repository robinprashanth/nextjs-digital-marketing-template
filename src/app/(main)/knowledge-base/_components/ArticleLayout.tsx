import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock } from "lucide-react";
import { ArticleMetadata } from "@/types";

interface ArticleLayoutProps {
  metadata: ArticleMetadata;
  children: React.ReactNode;
}

export const ArticleLayout: FC<ArticleLayoutProps> = ({
  metadata,
  children,
}) => {
  return (
    <article className="min-h-screen bg-background">
      {/* Article Hero */}
      <div className="relative bg-[linear-gradient(45deg,#0B0B1E,#1A1A2E)] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(147,51,234,0.1),transparent)] opacity-70" />
        <div className="container relative mx-auto px-4 sm:px-6">
          <Link
            href="/knowledge-base"
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Knowledge Base
          </Link>

          <div className="mx-auto max-w-3xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex items-center gap-2 text-white/60">
                <Clock className="h-4 w-4" />
                {metadata.readTime}
              </div>
              <div className="flex gap-2">
                {metadata.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-theme-primary-500/10 px-3 py-1 text-sm text-theme-primary-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              {metadata.title}
            </h1>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={metadata.author.avatar}
                    alt={metadata.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-white">{metadata.author.name}</div>
                  <div className="text-sm text-white/60">
                    {new Date(metadata.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 200"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-background"
          >
            <path d="M0 120l48 13.3c48 13.4 144 40 240 40s192-26.6 288-40c96-13.3 192-13.3 288 0s192 40 288 40 192-26.7 240-40l48-13.3v80H0z" />
          </svg>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-16 sm:px-6">
        <div className="prose prose-lg mx-auto max-w-3xl dark:prose-invert prose-headings:text-foreground prose-a:text-theme-primary-400 prose-blockquote:border-theme-primary-400">
          {children}
        </div>

        {/* Article Footer */}
        <div className="mx-auto mt-16 max-w-3xl border-t border-gray-800 pt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/knowledge-base"
                className="text-sm text-theme-primary-400 hover:text-purple-300"
              >
                Browse more articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
