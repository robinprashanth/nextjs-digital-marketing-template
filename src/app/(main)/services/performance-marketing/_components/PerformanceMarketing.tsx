"use client";
import { FC } from "react";
import { motion } from "motion/react";
import {
  Search,
  Users,
  Target,
  Repeat,
  Share2,
  Wallet,
  Lightbulb,
  Rocket,
  Settings,
  PiSquare,
  TrendingUp,
  ActivitySquare,
  GitBranch,
  BarChart,
  FileText,
  Filter,
  Layout,
  Route,
  MousePointer,
  Facebook,
  Linkedin,
  Video,
  BarChart2,
  Eye,
  Database,
  PieChart,
  ArrowUpRight,
} from "lucide-react";
import NextImage from "next/image";
import {
  metrics,
  channels,
  services,
  processSteps,
  results,
  platforms,
  tools,
} from "../data/content";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const iconMap = {
  Search,
  Users,
  Target,
  Repeat,
  Share2,
  Wallet,
  Lightbulb,
  Rocket,
  Settings,
  PiSquare,
  TrendingUp,
  ActivitySquare,
  GitBranch,
  BarChart,
  FileText,
  Filter,
  Layout,
  Route,
  MousePointer,
  Facebook,
  Linkedin,
  Video,
  BarChart2,
  Eye,
  Database,
  PieChart,
};

export const PerformanceMarketing: FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0B1E] to-[#1A1A2E] opacity-50" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at top right, rgba(59, 130, 246, 0.1), transparent 50%)",
          }}
        />

        <div className="absolute left-1/4 top-1/4 h-24 w-24 rounded-full bg-blue-500/20 blur-xl" />
        <div className="absolute right-1/4 top-1/3 h-32 w-32 rounded-full bg-indigo-500/20 blur-xl" />

        <div className="container relative mx-auto px-4 py-24 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="mb-6 inline-block rounded-full bg-blue-500/10 px-4 py-1 text-sm text-blue-400">
              PERFORMANCE MARKETING
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Data-Driven Marketing
              <br />
              That Delivers Results
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-theme-neutral-400">
              Strategic performance marketing that maximizes ROI through
              advanced targeting, optimization, and analytics.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
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
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marketing Channels Section */}
      <section className="bg-white py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <span className="mb-4 block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent">
              MARKETING CHANNELS
            </span>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Multi-Channel Performance
              <br />
              Marketing Excellence
            </h2>
            <p className="text-lg text-theme-neutral-600 dark:text-theme-neutral-400">
              Maximize results across all major digital marketing channels.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {channels.map((channel, index) => {
              const IconComponent =
                iconMap[channel.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div
                    className={`relative overflow-hidden rounded-3xl p-8 ${channel.gradient}`}
                  >
                    <div className="mb-4 rounded-xl bg-white/10 p-3">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="mb-2 text-xl font-bold text-white">
                      {channel.title}
                    </h3>
                    <p className="mb-6 text-white/90">{channel.description}</p>

                    <ul className="space-y-2">
                      {channel.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm text-white/80"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-white/60" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Metrics Display */}
                    <div className="mt-8 grid grid-cols-2 gap-4 rounded-xl bg-white/10 p-4">
                      {Object.entries(channel.metrics).map(
                        ([key, value], i) => (
                          <div key={i}>
                            <p className="text-sm text-white/70">{key}</p>
                            <p className="text-lg font-bold text-white">
                              {value}
                            </p>
                          </div>
                        ),
                      )}
                    </div>

                    <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-white/10 blur-xl transition-all duration-500 group-hover:scale-150" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-24 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <span className="mb-4 block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent">
              OUR SERVICES
            </span>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Comprehensive Performance
              <br />
              Marketing Solutions
            </h2>
            <p className="text-lg text-theme-neutral-600 dark:text-theme-neutral-400">
              End-to-end performance marketing services that drive growth.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl bg-white p-8 shadow-lg dark:bg-gray-800"
              >
                <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mb-8 text-theme-neutral-600 dark:text-theme-neutral-400">
                  {service.description}
                </p>

                <div className="grid gap-6 sm:grid-cols-2">
                  {service.features.map((feature, featureIndex) => {
                    const IconComponent =
                      iconMap[feature.icon as keyof typeof iconMap];
                    return (
                      <div
                        key={featureIndex}
                        className="group flex items-start gap-4"
                      >
                        <div className="rounded-xl bg-blue-500/10 p-2 dark:bg-blue-500/5">
                          <IconComponent className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white">
                            {feature.name}
                          </h4>
                          <p className="text-sm text-theme-neutral-600 dark:text-theme-neutral-400">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-white py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <span className="mb-4 block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent">
              CLIENT RESULTS
            </span>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Performance That
              <br />
              Drives Growth
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl"
              >
                <div className="relative aspect-[4/5]">
                  <NextImage
                    src={result.image}
                    alt={result.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${result.gradient} opacity-90`}
                  />

                  <div className="absolute inset-0 p-8">
                    <div className="flex h-full flex-col">
                      <div className="mb-4">
                        <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-sm text-white backdrop-blur-sm">
                          {result.type}
                        </span>
                      </div>
                      <h3 className="mb-8 text-2xl font-bold text-white">
                        {result.title}
                      </h3>

                      <div className="mt-auto space-y-4">
                        {result.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex}>
                            <p className="text-sm text-white/80">
                              {metric.label}
                            </p>
                            <p className="text-2xl font-bold text-white">
                              {metric.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-navy py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <span className="mb-4 block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-sm font-semibold tracking-wider text-transparent">
              OUR PROCESS
            </span>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
              How We Drive
              <br />
              Performance Results
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="rounded-3xl bg-white/5 p-8 backdrop-blur-lg">
                  <div className="mb-4 text-3xl font-bold text-blue-400">
                    {step.number}
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-theme-neutral-400">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden h-1 w-8 bg-gradient-to-r from-blue-400 to-transparent md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms & Tools Section */}
      <section className="bg-white py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="mb-4 block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent">
                PLATFORMS
              </span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Advertising Platforms
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              {platforms.map((platform, index) => {
                const IconComponent =
                  iconMap[platform.icon as keyof typeof iconMap];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-800"
                  >
                    <div className="mb-4 rounded-xl bg-blue-500/10 p-2 dark:bg-blue-500/5">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="mb-2 font-bold text-gray-900 dark:text-white">
                      {platform.name}
                    </h3>
                    <p className="text-sm text-theme-neutral-600 dark:text-theme-neutral-400">
                      {platform.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="mb-4 block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent">
                TOOLS
              </span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Marketing Technology Stack
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              {tools.map((tool, index) => {
                const IconComponent =
                  iconMap[tool.icon as keyof typeof iconMap];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-800"
                  >
                    <div className="mb-4 rounded-xl bg-blue-500/10 p-2 dark:bg-blue-500/5">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="mb-2 font-bold text-gray-900 dark:text-white">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-theme-neutral-600 dark:text-theme-neutral-400">
                      {tool.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="mb-8 text-3xl font-bold text-white md:text-5xl">
              Ready to Maximize Your
              <br />
              Marketing Performance?
            </h2>
            <p className="mb-12 text-lg text-theme-neutral-400">
              Let&apos;s create data-driven campaigns that deliver measurable
              results and drive business growth.
            </p>
            <Button variant="glass" size="xl">
              <Link href="/contact" className="group">
                Schedule a Strategy Call
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};
