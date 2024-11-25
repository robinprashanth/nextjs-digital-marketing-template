// /app/collaboration/team-tools/_components/TeamToolsPage.tsx
"use client";
import { FC } from "react";
import { motion } from "motion/react";
import { Users, Check, Play, ArrowRight, ArrowUpRight } from "lucide-react";
import { getIcon } from "../utils/icons";
import {
  teamStats,
  collaborationFeatures,
  teamTools,
  integrations,
} from "../data/content";
import { Button } from "@/components/ui/button";

export const TeamTools: FC = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] bg-[#8B5CF6]">
        {/* Subtle Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="container relative mx-auto px-4 py-24 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-4xl text-center"
          >
            {/* Title Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2">
              <Users className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">
                TEAM COLLABORATION
              </span>
            </div>

            {/* Main Title */}
            <h1 className="mt-12 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
              Better Tools for
              <br />
              Better Teamwork
            </h1>

            {/* Description */}
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80">
              Empower your team with powerful collaboration tools designed to
              enhance productivity and streamline communication.
            </p>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <button className="group relative inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-theme-primary-600 transition-all hover:scale-105">
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10">
                <Play className="h-5 w-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats Grid */}
            <div className="mx-auto mt-24 grid max-w-4xl grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
              {teamStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  <div className="text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-white/60">{stat.label}</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-emerald-300">
                    <ArrowUpRight className="h-3 w-3" />
                    {stat.change}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <span className="mb-4 inline-block text-sm font-semibold text-theme-primary-600">
              KEY FEATURES
            </span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Everything You Need for
              <br />
              Seamless Collaboration
            </h2>
            <p className="mt-4 text-theme-neutral-600 dark:text-theme-neutral-400">
              Powerful features to help your team work better together
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {collaborationFeatures.map((feature, index) => {
              const IconComponent = getIcon(feature.icon);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-theme-primary-500/20 dark:border-gray-800 dark:bg-gray-900"
                >
                  <div
                    className={`mb-6 inline-block rounded-xl ${feature.color.replace("text", "bg")}/10 p-3`}
                  >
                    <IconComponent className={`h-6 w-6 ${feature.color}`} />
                  </div>

                  <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mb-6 text-theme-neutral-600 dark:text-theme-neutral-400">
                    {feature.description}
                  </p>

                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="flex items-center gap-2 text-sm text-theme-neutral-600 dark:text-theme-neutral-400"
                      >
                        <Check className="h-4 w-4 text-theme-primary-600" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="bg-gray-50 py-24 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <span className="mb-4 inline-block text-sm font-semibold text-theme-primary-600">
              TEAM TOOLS
            </span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Everything Your Team Needs
              <br />
              In One Place
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {teamTools.map((tool, index) => {
              const IconComponent = getIcon(tool.icon);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-900"
                >
                  <div
                    className={`mb-6 inline-block rounded-xl ${tool.gradient.replace("bg-", "bg-opacity-10")} p-3`}
                  >
                    <IconComponent className="h-6 w-6 text-theme-primary-600" />
                  </div>

                  <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                    {tool.title}
                  </h3>
                  <p className="mb-6 text-theme-neutral-600 dark:text-theme-neutral-400">
                    {tool.description}
                  </p>

                  <ul className="space-y-3">
                    {tool.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-theme-neutral-600 dark:text-theme-neutral-400"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-theme-primary-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <span className="mb-4 inline-block text-sm font-semibold text-theme-primary-600">
              INTEGRATIONS
            </span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Works With Your
              <br />
              Favorite Tools
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
            {integrations.map((integration, index) => {
              const IconComponent = getIcon(integration.icon);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer rounded-2xl border border-gray-200 bg-white p-6 text-center transition-all hover:border-theme-primary-500/20 dark:border-theme-neutral-700 dark:bg-gray-900"
                >
                  <div className="mx-auto mb-4 rounded-xl bg-theme-primary-500/10 p-3 transition-colors group-hover:bg-theme-primary-500/20">
                    <IconComponent className="mx-auto h-6 w-6 text-theme-primary-500" />
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {integration.name}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-theme-primary-600 py-24">
        <div className="container relative mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="mb-8 text-3xl font-bold text-white md:text-5xl">
              Ready to Transform Your
              <br />
              Team Collaboration?
            </h2>
            <p className="mb-12 text-lg text-white/80">
              Join thousands of teams already using our tools to work better
              together.
            </p>
            <Button variant="white-action" size="xl">
              Get Started Now
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};
