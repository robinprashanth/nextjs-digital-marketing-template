"use client";
import { FC } from "react";
import {
  FileText,
  Video,
  Share2,
  Mail,
  Users,
  FileSearch,
  Search,
  Calendar,
  Image,
  Share,
  BarChart,
  TrendingUp,
  PieChart,
  Settings,
  Globe,
  ArrowUpRight,
  BarChart2,
} from "lucide-react";
import NextImage from "next/image";
import {
  metrics,
  contentTypes,
  services,
  processSteps,
  results,
  tools,
} from "../data/content";
import { ScrollInView } from "@/components/motion/ScrollInView";
import { ContentStrategyCTA } from "@/components/cta/Presets";

const iconMap = {
  FileText,
  Video,
  Share2,
  Mail,
  Users,
  FileSearch,
  Search,
  Calendar,
  Image,
  Share,
  BarChart,
  TrendingUp,
  PieChart,
  Settings,
  Globe,
  BarChart2,
};

export const ContentStrategy: FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0B1E] to-[#1A1A2E] opacity-50" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at top right, rgba(99, 102, 241, 0.1), transparent 50%)",
          }}
        />

        <div className="absolute left-1/4 top-1/4 h-24 w-24 rounded-full bg-theme-indigo-500/20 blur-xl" />
        <div className="absolute right-1/4 top-1/3 h-32 w-32 rounded-full bg-theme-violet-500/20 blur-xl" />

        <div className="container relative mx-auto px-4 py-24 sm:px-6">
          <ScrollInView
            className="max-w-4xl"
          >
            <div className="mb-6 inline-block rounded-full bg-theme-indigo-500/10 px-4 py-1 text-sm text-theme-indigo-400">
              CONTENT STRATEGY
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Strategic Content That
              <br />
              Drives Results
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-theme-neutral-400">
              Data-driven content strategy and creation that builds authority,
              engages audiences, and drives measurable business growth.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric, index) => (
                <ScrollInView
                  key={index}
                  delay={ index * 0.1}
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

      {/* Content Types Section */}
      <section className="bg-white py-24 dark:bg-theme-neutral-900">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollInView
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <span className="mb-4 block bg-gradient-to-r from-theme-indigo-600 to-theme-violet-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent">
              CONTENT TYPES
            </span>
            <h2 className="mb-6 text-3xl font-bold text-theme-neutral-900 dark:text-white md:text-5xl">
              Multi-Format Content
              <br />
              Excellence
            </h2>
            <p className="text-lg text-theme-neutral-600 dark:text-theme-neutral-400">
              Professional content creation across all formats and channels.
            </p>
          </ScrollInView>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contentTypes.map((type, index) => {
              const IconComponent = iconMap[type.icon as keyof typeof iconMap];
              return (
                <ScrollInView
                  key={index}
                  delay={index * 0.1}
                  className="group cursor-pointer"
                >
                  <div
                    className={`relative overflow-hidden rounded-3xl p-8 ${type.gradient}`}
                  >
                    <div className="mb-4 rounded-xl bg-white/10 p-3">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="mb-2 text-xl font-bold text-white">
                      {type.title}
                    </h3>
                    <p className="mb-6 text-white/90">{type.description}</p>

                    <ul className="space-y-2">
                      {type.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm text-white/80"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-white/60" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-white/10 blur-xl transition-all duration-500 group-hover:scale-150" />
                  </div>
                </ScrollInView>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-24 dark:bg-theme-neutral-900/50">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollInView
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <span className="mb-4 block bg-gradient-to-r from-theme-indigo-600 to-theme-violet-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent">
              OUR SERVICES
            </span>
            <h2 className="mb-6 text-3xl font-bold text-theme-neutral-900 dark:text-white md:text-5xl">
              Comprehensive Content
              <br />
              Solutions
            </h2>
            <p className="text-lg text-theme-neutral-600 dark:text-theme-neutral-400">
              End-to-end content strategy, creation, and distribution services.
            </p>
          </ScrollInView>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <ScrollInView
              useInView={true}
                key={index}
                delay={index * 0.1}
                className="rounded-3xl bg-white p-8 shadow-lg dark:bg-theme-neutral-800"
              >
                <h3 className="mb-4 text-2xl font-bold text-theme-neutral-900 dark:text-white">
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
                        <div className="rounded-xl bg-theme-indigo-500/10 p-2 dark:bg-theme-indigo-500/5">
                          <IconComponent className="h-5 w-5 text-theme-indigo-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-theme-neutral-900 dark:text-white">
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
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-white py-24 dark:bg-theme-neutral-900">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollInView
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <span className="mb-4 block bg-gradient-to-r from-theme-indigo-600 to-theme-violet-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent">
              SUCCESS STORIES
            </span>
            <h2 className="mb-6 text-3xl font-bold text-theme-neutral-900 dark:text-white md:text-5xl">
              Content That Drives
              <br />
              Business Results
            </h2>
          </ScrollInView>

          <div className="grid gap-8 md:grid-cols-3">
            {results.map((result, index) => (
              <ScrollInView
              useInView={true}
                key={index}
                delay={index * 0.1}
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
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-navy py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollInView
           useInView={true}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <span className="mb-4 block bg-gradient-to-r from-theme-indigo-400 to-theme-violet-400 bg-clip-text text-sm font-semibold tracking-wider text-transparent">
              OUR PROCESS
            </span>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
              How We Create
              <br />
              Winning Content
            </h2>
          </ScrollInView>

          <div className="grid gap-8 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <ScrollInView
              useInView={true}
                key={index}
                delay={index * 0.1}
                className="relative"
              >
                <div className="rounded-3xl bg-white/5 p-8 backdrop-blur-lg">
                  <div className="mb-4 text-3xl font-bold text-theme-indigo-400">
                    {step.number}
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-theme-neutral-400">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden h-1 w-8 bg-gradient-to-r from-theme-indigo-400 to-transparent md:block" />
                )}
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="bg-white py-24 dark:bg-theme-neutral-900">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollInView
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <span className="mb-4 block bg-gradient-to-r from-theme-indigo-600 to-theme-violet-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent">
              TOOLS & TECHNOLOGY
            </span>
            <h2 className="mb-6 text-3xl font-bold text-theme-neutral-900 dark:text-white md:text-4xl">
              Professional Tools We Use
            </h2>
          </ScrollInView>

          <div className="grid gap-6 md:grid-cols-4">
            {tools.map((tool, index) => {
              const IconComponent = iconMap[tool.icon as keyof typeof iconMap];
              return (
                <ScrollInView
                useInView={true}
                  key={index}
                  delay={ index * 0.1 }
                  className="rounded-2xl bg-gray-50 p-6 dark:bg-theme-neutral-800"
                >
                  <div className="mb-4 rounded-xl bg-theme-indigo-500/10 p-2 dark:bg-theme-indigo-500/5">
                    <IconComponent className="h-6 w-6 text-theme-indigo-600" />
                  </div>
                  <h3 className="mb-2 font-bold text-theme-neutral-900 dark:text-white">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-theme-neutral-600 dark:text-theme-neutral-400">
                    {tool.description}
                  </p>
                </ScrollInView>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContentStrategyCTA />

    </main>
  );
};
