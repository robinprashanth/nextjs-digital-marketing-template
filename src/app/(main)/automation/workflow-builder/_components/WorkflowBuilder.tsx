"use client";

import { ScrollInView } from "@/components/motion/ScrollInView";
import { ArrowRight, ArrowUpRight, Plus, Zap } from "lucide-react";
import { motion } from "motion/react";
import { FC } from "react";
import {
  features,
  integrations,
  workflowStats,
  workflowSteps,
  workflowTemplates,
} from "../data/content";
import { getIcon } from "../utils/icons";

export const WorkflowBuilder: FC = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] bg-[#6366F1]">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        <div className="container relative mx-auto px-4 py-24 sm:px-6">
          <ScrollInView className="mx-auto max-w-4xl text-center">
            {/* Title Badge */}
            <ScrollInView
              delay={0.1}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2"
            >
              <Zap className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">
                WORKFLOW AUTOMATION
              </span>
            </ScrollInView>

            {/* Main Title */}
            <ScrollInView delay={0.2} className="mt-12">
              <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
                Build Powerful
                <br />
                Marketing Workflows
              </h1>
            </ScrollInView>

            {/* Description */}
            <ScrollInView
              delay={0.3}
              className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80"
            >
              Create sophisticated marketing automation workflows with our
              intuitive drag-and-drop builder. No coding required.
            </ScrollInView>

            {/* CTA Buttons */}
            <ScrollInView
              delay={0.4}
              className="mt-12 flex flex-wrap items-center justify-center gap-4"
            >
              <button className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 transition-all hover:pr-12">
                <span className="font-semibold text-theme-indigo-600">
                  Create Workflow
                </span>
                <ArrowRight className="absolute right-4 h-5 w-5 transform opacity-0 transition-all group-hover:opacity-100" />
              </button>
              <button className="relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4">
                <span className="font-semibold text-white">View Templates</span>
              </button>
            </ScrollInView>

            {/* Stats Grid */}
            <ScrollInView
              delay={0.5}
              className="mx-auto mt-24 grid max-w-4xl grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4"
            >
              {workflowStats.map((stat, index) => (
                <div key={index} className="group relative">
                  {/* Glass Background */}
                  <div className="absolute inset-0 rounded-2xl bg-white/[0.03] backdrop-blur-sm transition-colors group-hover:bg-white/[0.05]" />

                  {/* Gradient Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent p-px">
                    <div className="h-full w-full rounded-2xl bg-white/[0.02]" />
                  </div>

                  {/* Content */}
                  <div className="relative space-y-2 p-6">
                    <div className="text-3xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                    <div className="inline-flex items-center gap-1 text-xs text-emerald-300">
                      <ArrowUpRight className="h-3 w-3" />
                      <span>{stat.change}</span>
                    </div>
                  </div>
                </div>
              ))}
            </ScrollInView>
          </ScrollInView>
        </div>
      </section>

      {/* Templates Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollInView
            delay={0.5}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <span className="mb-4 inline-block text-sm font-semibold text-theme-primary-600">
              WORKFLOW TEMPLATES
            </span>
            <h2 className="text-3xl font-bold text-theme-neutral-900 dark:text-white md:text-4xl">
              Start with Pre-built Templates
            </h2>
            <p className="mt-4 text-lg text-theme-neutral-600 dark:text-theme-neutral-400">
              Choose from our library of pre-built templates or create your own
              custom workflow
            </p>
          </ScrollInView>

          {/* Templates Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {workflowTemplates.map((template, index) => {
              const IconComponent = getIcon(template.icon);
              return (
                <ScrollInView
                  useInView={true}
                  key={template.id}
                  delay={index * 0.1}
                  className="group cursor-pointer"
                >
                  <div
                    className={`relative overflow-hidden rounded-3xl p-8 ${template.gradient}`}
                  >
                    <div className="mb-4 flex items-start justify-between">
                      <div className="rounded-xl bg-white/10 p-3">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <span className="rounded-full bg-white/20 px-3 py-1 text-sm text-white backdrop-blur-sm">
                        {template.steps} Steps
                      </span>
                    </div>

                    <h3 className="mb-2 text-xl font-bold text-white">
                      {template.title}
                    </h3>
                    <p className="mb-6 text-white/90">{template.description}</p>

                    <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm text-white backdrop-blur-sm transition-all group-hover:bg-white/30">
                      <Plus className="h-4 w-4" />
                      Use Template
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-white/10 blur-xl transition-all duration-500 group-hover:scale-150" />
                  </div>
                </ScrollInView>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative bg-gray-50/50 py-24 dark:bg-theme-neutral-800/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Features List */}
            <ScrollInView useInView={true} x={-20} className="space-y-6">
              <span className="text-sm font-semibold text-theme-primary-600">
                KEY FEATURES
              </span>
              <h2 className="text-3xl font-bold text-theme-neutral-900 dark:text-white md:text-4xl">
                Everything You Need to
                <br />
                Automate Your Marketing
              </h2>
              <p className="text-lg text-theme-neutral-600 dark:text-theme-neutral-400">
                Powerful features that make it easy to build, test, and optimize
                your marketing workflows
              </p>

              <div className="mt-8 grid gap-6">
                {features.map((feature, index) => {
                  const IconComponent = getIcon(feature.icon);
                  return (
                    <ScrollInView
                      useInView={true}
                      key={index}
                      delay={index * 0.1}
                      className="flex items-start gap-4 rounded-2xl border border-theme-neutral-200 bg-white p-6 dark:border-theme-neutral-700 dark:bg-theme-neutral-900"
                    >
                      <div
                        className={`rounded-xl ${feature.color.replace("text", "bg")}/10 p-3`}
                      >
                        <IconComponent className={`h-6 w-6 ${feature.color}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-theme-neutral-900 dark:text-white">
                          {feature.title}
                        </h3>
                        <p className="mt-1 text-theme-neutral-600 dark:text-theme-neutral-400">
                          {feature.description}
                        </p>
                      </div>
                    </ScrollInView>
                  );
                })}
              </div>
            </ScrollInView>

            {/* Process Steps */}
            <ScrollInView useInView={true} className="relative">
              <div className="sticky top-24 space-y-8">
                <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-theme-neutral-900">
                  <h3 className="mb-6 text-xl font-bold text-theme-neutral-900 dark:text-white">
                    How It Works
                  </h3>
                  <div className="space-y-6">
                    {workflowSteps.map((step, index) => {
                      const IconComponent = getIcon(step.icon);
                      return (
                        <div key={index} className="flex items-start gap-4">
                          <div className="rounded-full bg-theme-primary-500/10 p-3">
                            <IconComponent className="h-5 w-5 text-theme-primary-500" />
                          </div>
                          <div>
                            <h4 className="font-bold text-theme-neutral-900 dark:text-white">
                              {step.title}
                            </h4>
                            <p className="text-sm text-theme-neutral-600 dark:text-theme-neutral-400">
                              {step.description}
                            </p>
                          </div>
                          {index < workflowSteps.length - 1 && (
                            <div className="absolute left-6 mt-12 h-16 w-px bg-gradient-to-b from-theme-primary-500/50 to-transparent" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </ScrollInView>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollInView
            useInView={true}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <span className="mb-4 inline-block text-sm font-semibold text-theme-primary-600">
              INTEGRATIONS
            </span>
            <h2 className="text-3xl font-bold text-theme-neutral-900 dark:text-white md:text-4xl">
              Connect with Your Favorite Tools
            </h2>
            <p className="mt-4 text-lg text-theme-neutral-600 dark:text-theme-neutral-400">
              Seamlessly integrate with popular marketing and business tools
            </p>
          </ScrollInView>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
            {integrations.map((integration, index) => {
              const IconComponent = getIcon(integration.icon);
              return (
                <ScrollInView
                  useInView={true}
                  key={index}
                  delay={index * 0.1}
                  className="group cursor-pointer rounded-2xl border border-theme-neutral-200 bg-white p-6 text-center transition-all hover:border-theme-primary-500/20 dark:border-theme-neutral-700 dark:bg-theme-neutral-900"
                >
                  <div className="mx-auto mb-4 rounded-xl bg-theme-primary-500/10 p-3 transition-colors group-hover:bg-theme-primary-500/20">
                    <IconComponent className="mx-auto h-6 w-6 text-theme-primary-500" />
                  </div>
                  <h3 className="font-medium text-theme-neutral-900 dark:text-white">
                    {integration.name}
                  </h3>
                </ScrollInView>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-[linear-gradient(45deg,#8A6FF9,#6B4FD9)] py-24">
        <div className="container relative mx-auto px-4 sm:px-6">
          <ScrollInView
            useInView={true}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="mb-8 text-3xl font-bold text-white md:text-5xl">
              Ready to Automate Your
              <br />
              Marketing Workflows?
            </h2>
            <p className="mb-12 text-lg text-white/80">
              Start building powerful automation workflows today. No coding
              required.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="rounded-full bg-white px-8 py-4 font-semibold text-theme-primary-600 shadow-lg transition-shadow hover:shadow-xl"
            >
              Get Started Now
            </motion.button>
          </ScrollInView>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-theme-primary-500/20 blur-3xl" />
          <div className="absolute right-1/4 top-1/2 h-96 w-96 rounded-full bg-theme-ocean-500/20 blur-3xl" />
        </div>
      </section>
    </main>
  );
};
