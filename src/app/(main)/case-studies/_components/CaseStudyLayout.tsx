"use client";

import { FC } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  ArrowLeft,
  TrendingUp,
  Building2,
  Calendar,
  Clock,
  Share2,
} from "lucide-react";
import { CaseStudyMetadata } from "@/types";

interface CaseStudyLayoutProps {
  metadata: CaseStudyMetadata;
  children: React.ReactNode;
}

export const CaseStudyLayout: FC<CaseStudyLayoutProps> = ({
  metadata,
  children,
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto -mb-16 grid max-w-4xl gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {metadata.metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
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
              </motion.div>
            ))}
          </motion.div>
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
          <div className="sticky top-8 z-10 mb-12 flex items-center justify-between rounded-2xl border border-gray-800 bg-card/80 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">
                Share this case study:
              </span>
              {/* Share buttons */}
              <div className="flex gap-2">
                {[
                  { name: "Twitter", icon: "twitter.svg" },
                  { name: "LinkedIn", icon: "linkedin.svg" },
                  { name: "Email", icon: "mail.svg" },
                ].map((platform) => (
                  <button
                    key={platform.name}
                    className="rounded-full bg-theme-primary-500/10 p-2 text-theme-primary-400 transition-colors hover:bg-theme-primary-500/20"
                    aria-label={`Share on ${platform.name}`}
                  >
                    <Share2 className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              10 min read
            </div>
          </div>

          {/* Main Content */}
          {children}

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 rounded-2xl bg-gradient-to-r from-theme-primary-500 to-purple-700 p-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white">
              Ready to Achieve Similar Results?
            </h2>
            <p className="mb-8 text-lg text-white/80">
              Let&apos;s discuss how we can help transform your business with
              our proven strategies.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="rounded-full bg-white px-8 py-3 text-base font-semibold text-theme-primary-600 transition-all hover:bg-gray-100"
              >
                Start Your Project
              </Link>
              <Link
                href="/case-studies"
                className="rounded-full border border-white/30 bg-white/10 px-8 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                View More Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="border-t border-gray-800 bg-card">
        <div className="container mx-auto px-4 py-8 sm:px-6">
          <div className="flex items-center justify-between">
            <Link
              href="/case-studies"
              className="flex items-center gap-2 text-theme-primary-400 hover:text-purple-300"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Case Studies
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
