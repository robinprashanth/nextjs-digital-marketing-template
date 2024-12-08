"use client";
import { ScrollInView } from "@/components/motion/ScrollInView";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  BarChart,
  BarChart2,
  FileText,
  Globe,
  LinkIcon,
  MonitorCog,
  Search,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { features, metrics, processSteps, toolsUsed } from "../data/content";
import { FeatureCard } from "@/components/FeatureCard";

const iconMap = {
  Search,
  FileText,
  LinkIcon,
  BarChart2,
  Globe,
  Smartphone,
  BarChart,
  MonitorCog,
};

export const SEO: FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden bg-navy">
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0B1E] to-[#1A1A2E] opacity-50" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at top right, rgba(16, 185, 129, 0.1), transparent 50%)",
          }}
        />

        {/* Floating Shapes */}
        <div className="absolute left-1/4 top-1/4 h-24 w-24 rounded-full bg-emerald-500/20 blur-xl" />
        <div className="absolute right-1/4 top-1/3 h-32 w-32 rounded-full bg-theme-ocean-500/20 blur-xl" />

        {/* Content */}
        <div className="container relative mx-auto px-4 py-24 sm:px-6">
          <ScrollInView
            className="max-w-4xl"
          >
            <div className="mb-6 inline-block rounded-full bg-emerald-500/10 px-4 py-1 text-sm text-emerald-400">
              SEO EXCELLENCE
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Dominate Search Results
              <br />
              With Data-Driven SEO
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-theme-neutral-400">
              Boost your organic visibility and drive qualified traffic through
              strategic search engine optimization that delivers measurable
              results.
            </p>

            {/* Metrics Grid */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric, index) => (
                <ScrollInView
                  key={index}
                  delay={index * 0.1}
                  className="rounded-2xl bg-white/5 p-6 backdrop-blur-lg"
                >
                  <p className="text-sm text-theme-neutral-400">{metric.label}</p>
                  <p className="text-2xl font-bold text-white">
                    {metric.value}
                  </p>
                  <p className="flex items-center gap-1 text-sm text-theme-tulip-400">
                    <ArrowUpRight className="h-4 w-4" />
                    {metric.change}
                  </p>
                </ScrollInView>
              ))}
            </div>
          </ScrollInView>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="bg-white py-24 dark:bg-theme-neutral-900">
        <div className="container mx-auto px-4 sm:px-6">
        <AnimatedHeading
  title="COMPREHENSIVE SEO SERVICES"
  heading="Full-Spectrum SEO Solutions"
  description="Strategic SEO services designed to improve your search rankings, drive organic traffic, and increase conversions."
  theme="indigo"
/>
          {/* Features Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
        <FeatureCard
          key={index}
          feature={feature}
          iconMap={iconMap}
          index={index}
        />
      ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative overflow-hidden bg-gray-50 py-24 dark:bg-theme-neutral-900">
        <div className="container relative mx-auto px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <ScrollInView
            useInView={true}
            x={-20}
              className="max-w-xl"
            >
              <span className="mb-4 block bg-gradient-to-r from-emerald-600 to-theme-ocean-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent">
                OUR PROCESS
              </span>
              <h2 className="mb-8 text-3xl font-bold text-theme-neutral-900 dark:text-white md:text-4xl">
                Strategic Approach to
                <br />
                SEO Success
              </h2>

              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <ScrollInView
                  useInView={true}
                    key={index}
                    delay={index * 0.1 }
                    className="flex gap-4"
                  >
                    <span className="text-2xl font-bold text-emerald-600">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="mb-2 font-bold text-theme-neutral-900 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-theme-neutral-600 dark:text-theme-neutral-400">
                        {step.description}
                      </p>
                    </div>
                  </ScrollInView>
                ))}
              </div>
            </ScrollInView>

            {/* Tools Section */}
            <ScrollInView
            useInView={true}
              className="relative"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-theme-neutral-900 dark:text-white">
                  Professional Tools & Technology
                </h3>
                <div className="grid gap-6 sm:grid-cols-2">
                  {toolsUsed.map((tool, index) => {
                    const IconComponent =
                      iconMap[tool.icon as keyof typeof iconMap];
                    return (
                      <ScrollInView
                      useInView={true}
                        key={index}
                       delay={index * 0.1}
                        className="rounded-2xl bg-white p-6 shadow-lg dark:bg-theme-neutral-800"
                      >
                        <div className="mb-4 rounded-xl bg-emerald-500/10 p-2 dark:bg-emerald-500/5">
                          <IconComponent className="h-6 w-6 text-emerald-600" />
                        </div>
                        <h4 className="mb-2 font-bold text-theme-neutral-900 dark:text-white">
                          {tool.name}
                        </h4>
                        <p className="text-sm text-theme-neutral-600 dark:text-theme-neutral-400">
                          {tool.description}
                        </p>
                      </ScrollInView>
                    );
                  })}
                </div>
              </div>

              {/* Dashboard Preview */}
              <ScrollInView
              useInView={true}
                className="mt-12"
              >
                <div className="relative h-[400px] overflow-hidden rounded-3xl">
                  <Image
                    src="/images/services/seo-dashboard.jpg"
                    alt="SEO Dashboard"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 to-theme-ocean-600/20" />
                </div>
              </ScrollInView>
            </ScrollInView>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollInView
          useInView={true}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="mb-8 text-3xl font-bold text-white md:text-5xl">
              Ready to Improve Your
              <br />
              Search Rankings?
            </h2>
            <p className="mb-12 text-lg text-theme-neutral-400">
              Let&apos;s develop a customized SEO strategy that drives organic
              growth and delivers measurable results for your business.
            </p>
            <Button variant="action" size="xl">
              <Link href="/contact" className="group">
                Schedule a Strategy Call
              </Link>
            </Button>
          </ScrollInView>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-white py-24 dark:bg-theme-neutral-900">
        <div className="container mx-auto px-4 sm:px-6">
        <AnimatedHeading
  title="PROVEN RESULTS"
  heading="Real Results for Real Businesses"
  description="Our data-driven approach consistently delivers outstanding results across various industries and business sizes."
  theme="indigo"
/>

          {/* Results Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "E-commerce Growth",
                metric: "312%",
                description: "Increase in organic traffic",
                duration: "6 months",
                icon: "ShoppingCart",
              },
              {
                title: "Local Business",
                metric: "5X",
                description: "Increase in local pack visibility",
                duration: "3 months",
                icon: "MapPin",
              },
              {
                title: "SaaS Company",
                metric: "89%",
                description: "Growth in organic conversions",
                duration: "12 months",
                icon: "Box",
              },
            ].map((result, index) => (
              <ScrollInView
              useInView={true}
                key={index}
                delay={index * 0.1}
                className="relative overflow-hidden rounded-3xl bg-gray-50 p-8 dark:bg-theme-neutral-800"
              >
                <h3 className="mb-4 text-xl font-bold text-theme-neutral-900 dark:text-white">
                  {result.title}
                </h3>
                <div className="mb-2 text-4xl font-bold text-emerald-600">
                  {result.metric}
                </div>
                <p className="mb-2 text-theme-neutral-600 dark:text-theme-neutral-400">
                  {result.description}
                </p>
                <p className="text-sm text-theme-neutral-500">in {result.duration}</p>
                <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-emerald-500/5 blur-xl" />
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-24 dark:bg-theme-neutral-900/50">
        <div className="container mx-auto px-4 sm:px-6">
        <AnimatedHeading
  title="FAQ"
  heading="Frequently Asked Questions"
 theme="indigo"
/>

          <div className="mx-auto max-w-3xl space-y-6">
            {[
              {
                question: "How long does it take to see results from SEO?",
                answer:
                  "While initial improvements can be seen within 3-6 months, significant results typically manifest within 6-12 months. This timeline varies based on factors like competition, current site health, and target keywords.",
              },
              {
                question: "What makes your SEO services different?",
                answer:
                  "We combine technical expertise with data-driven strategies, custom reporting, and transparent communication. Our approach is holistic, covering technical SEO, content optimization, and strategic link building.",
              },
              {
                question: "Do you guarantee first page rankings?",
                answer:
                  "While we can't guarantee specific rankings due to search engines' ever-evolving algorithms, we guarantee a systematic, white-hat approach focused on sustainable growth and measurable improvements in visibility and traffic.",
              },
            ].map((faq, index) => (
              <ScrollInView
              useInView={true}
                key={index}
                delay={index * 0.1}
                className="rounded-2xl bg-white p-6 shadow-lg dark:bg-theme-neutral-800"
              >
                <h3 className="mb-3 text-lg font-bold text-theme-neutral-900 dark:text-white">
                  {faq.question}
                </h3>
                <p className="text-theme-neutral-600 dark:text-theme-neutral-400">{faq.answer}</p>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
