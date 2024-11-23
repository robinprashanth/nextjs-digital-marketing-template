// /app/services/social-media/_components/SocialMediaPage.tsx
"use client";
import { FC } from "react";
import { motion } from "motion/react";
import {
  Instagram,
  Linkedin,
  Facebook,
  Video,
  FileText,
  Users,
  MessageCircle,
  LineChart,
  Shield,
  TrendingUp,
  Target,
  Settings,
  BarChart,
  PiSquare,
  ActivitySquare,
  DollarSign,
  Lightbulb,
  Calendar,
  BarChart2,
  PenTool,
  MessageSquare,
  ArrowUpRight,
  Camera,
} from "lucide-react";
import Image from "next/image";
import {
  metrics,
  platforms,
  services,
  processSteps,
  successStories,
  tools,
} from "../data/content";

const iconMap = {
  Instagram,
  Linkedin,
  Facebook,
  Video,
  Camera,
  FileText,
  Users,
  MessageCircle,
  LineChart,
  Shield,
  TrendingUp,
  Target,
  Settings,
  BarChart,
  PiSquare,
  ActivitySquare,
  DollarSign,
  Lightbulb,
  Calendar,
  BarChart2,
  PenTool,
  MessageSquare,
};

export const SocialMedia: FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0B1E] to-[#1A1A2E] opacity-50" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at top right, rgba(79, 70, 229, 0.1), transparent 50%)",
          }}
        />

        <div className="absolute left-1/4 top-1/4 h-24 w-24 rounded-full bg-indigo-500/20 blur-xl" />
        <div className="absolute right-1/4 top-1/3 h-32 w-32 rounded-full bg-blue-500/20 blur-xl" />

        <div className="container relative mx-auto px-4 py-24 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="mb-6 inline-block rounded-full bg-indigo-500/10 px-4 py-1 text-sm text-indigo-400">
              SOCIAL MEDIA MANAGEMENT
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Elevate Your Social
              <br />
              Media Presence
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-gray-400">
              Strategic social media management that builds engaged communities,
              drives brand awareness, and generates measurable results.
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
                  <p className="text-sm text-gray-400">{metric.label}</p>
                  <p className="text-2xl font-bold text-white">
                    {metric.value}
                  </p>
                  <p className="flex items-center gap-1 text-sm text-green-400">
                    <ArrowUpRight className="h-4 w-4" />
                    {metric.change}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platforms Grid */}
      <section className="bg-white py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <span className="mb-4 block bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent">
              PLATFORMS WE MANAGE
            </span>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Multi-Platform
              <br />
              Social Excellence
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Comprehensive social media management across all major platforms.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
                  className="group cursor-pointer"
                >
                  <div
                    className={`relative overflow-hidden rounded-3xl p-8 ${platform.gradient}`}
                  >
                    <div className="mb-4 rounded-xl bg-white/10 p-3">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="mb-2 text-xl font-bold text-white">
                      {platform.name}
                    </h3>
                    <p className="mb-6 text-white/90">{platform.description}</p>

                    <ul className="space-y-2">
                      {platform.features.map((feature, featureIndex) => (
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
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-24 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <span className="bg- 600 mb-4 block bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent">
              OUR SERVICES
            </span>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Comprehensive Social
              <br />
              Media Solutions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Full-service social media management tailored to your business
              goals.
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
                <p className="mb-8 text-gray-600 dark:text-gray-400">
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
                        <div className="rounded-xl bg-indigo-500/10 p-2 dark:bg-indigo-500/5">
                          <IconComponent className="h-5 w-5 text-indigo-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white">
                            {feature.name}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
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

      {/* Success Stories Section */}
      <section className="bg-white py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <span className="mb-4 block bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent">
              SUCCESS STORIES
            </span>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Real Results for
              <br />
              Real Brands
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${story.gradient} opacity-90`}
                  />

                  <div className="absolute inset-0 p-8">
                    <div className="flex h-full flex-col">
                      <div className="mb-4">
                        <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-sm text-white backdrop-blur-sm">
                          {story.platform}
                        </span>
                      </div>
                      <h3 className="mb-8 text-2xl font-bold text-white">
                        {story.title}
                      </h3>

                      <div className="mt-auto space-y-4">
                        {story.metrics.map((metric, metricIndex) => (
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
            <span className="mb-4 block bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-sm font-semibold tracking-wider text-transparent">
              OUR PROCESS
            </span>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
              How We Drive Social
              <br />
              Media Success
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
                  <div className="mb-4 text-3xl font-bold text-indigo-400">
                    {step.number}
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden h-1 w-8 bg-gradient-to-r from-indigo-400 to-transparent md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="bg-white py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <span className="mb-4 block bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent">
              TOOLS & TECHNOLOGY
            </span>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Professional Tools We Use
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-4">
            {tools.map((tool, index) => {
              const IconComponent = iconMap[tool.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-800"
                >
                  <div className="mb-4 rounded-xl bg-indigo-500/10 p-2 dark:bg-indigo-500/5">
                    <IconComponent className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="mb-2 font-bold text-gray-900 dark:text-white">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {tool.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
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
              Ready to Transform Your
              <br />
              Social Media Presence?
            </h2>
            <p className="mb-12 text-lg text-gray-400">
              Let&apos;s create engaging social media strategies that build your
              brand and drive measurable results.
            </p>
            <button className="rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Schedule a Strategy Call
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};
