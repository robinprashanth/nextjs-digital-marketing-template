"use client";

import { ProjectCTA } from "@/components/cta/Presets";
import { ScrollInView } from "@/components/motion/ScrollInView";
import { SocialShareMinimal } from "@/components/SocialShareMinimal";
import { CaseStudyMetadata } from "@/types";
import {
  ArrowLeft,
  Building2,
  Calendar,
  Clock,
  Share2,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface CaseStudyLayoutProps {
  metadata: CaseStudyMetadata;
  children: React.ReactNode;
  slug: string;
}

export const CaseStudyLayout: FC<CaseStudyLayoutProps> = ({
  metadata,
  children,
  slug,
}) => {
  return (
    <article className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className={`relative ${metadata.gradient}`}>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.4))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container relative mx-auto px-4 py-24 sm:px-6">
          {/* Back Link */}
          <Link
            href="/case-studies"
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </Link>

          <div className="mx-auto max-w-4xl">
            {/* Category & Meta */}
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <span className="rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white backdrop-blur-sm">
                {metadata.category}
              </span>
              <div className="flex items-center gap-2 text-white/60">
                <Calendar className="h-4 w-4" />
                {new Date(metadata.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
            </div>

            {/* Title */}
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {metadata.title}
            </h1>

            {/* Client Info */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-white/80">
                <Building2 className="h-5 w-5" />
                {metadata.client}
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Share2 className="h-5 w-5" />
                {metadata.industry}
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Section */}
        <div className="container relative mx-auto px-4 sm:px-6">
          <ScrollInView className="mx-auto -mb-16 grid max-w-4xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {metadata.metrics.map((metric, index) => (
              <ScrollInView
                delay={index * 0.1}
                key={metric.label}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg"
              >
                <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-white/10 blur-2xl" />
                <div className="relative">
                  <div className="text-2xl font-bold text-white">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-sm text-white/60">
                    {metric.label}
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-sm text-theme-tulip-400">
                    <TrendingUp className="h-4 w-4" />
                    {metric.change}
                  </div>
                </div>
              </ScrollInView>
            ))}
          </ScrollInView>
        </div>

        {/* Wave Divider */}
        <div className="relative">
          <svg
            viewBox="0 0 1440 200"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-background"
          >
            <path d="M0 120l48 13.3c48 13.4 144 40 240 40s192-26.6 288-40c96-13.3 192-13.3 288 0s192 40 288 40 192-26.7 240-40l48-13.3v80H0z" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-4xl">
          {/* Share Buttons */}
          <div className="sticky top-16 z-10 mb-12 flex items-center justify-between rounded-2xl border border-theme-neutral-800 bg-card/80 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">
                Share this case study:
              </span>
              {/* Share buttons */}
              <SocialShareMinimal
                url={`/blog/theme-1/${slug}`}
                title={metadata.title}
                description={metadata.excerpt}
              />
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              10 min read
            </div>
          </div>

          {/* Main Content */}
          {children}

          {/* Call to Action */}
          <ProjectCTA />
        </div>
      </div>
    </article>
  );
};
