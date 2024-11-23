// /app/collaboration/team-tools/_components/TeamToolsPage.tsx
"use client";
import { FC } from "react";
import { motion } from "motion/react";
import {
  Users,
  Zap,
  Timer,
  Clock,
  Globe,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import { getIcon } from "../utils/icons";
import {
  pageConfig,
  teamStats,
  collaborationFeatures,
  teamTools,
  integrations,
} from "../data/content";

export const TeamTools: FC = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] bg-[#8B5CF6]">
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-4xl text-center"
          >
            {/* Title Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2"
            >
              <Users className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">
                TEAM COLLABORATION
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-12"
            >
              <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
                Better Tools for
                <br />
                Better Teamwork
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80"
            >
              Empower your team with powerful collaboration tools designed to
              enhance productivity and streamline communication.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-4"
            >
              <button className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 transition-all hover:pr-12">
                <span className="font-semibold text-purple-600">
                  Get Started
                </span>
                <ArrowRight className="absolute right-4 h-5 w-5 transform opacity-0 transition-all group-hover:opacity-100" />
              </button>
              <button className="relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4">
                <span className="font-semibold text-white">Watch Demo</span>
              </button>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mx-auto mt-24 grid max-w-4xl grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4"
            >
              {teamStats.map((stat, index) => (
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
            </motion.div>
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
            <span className="mb-4 inline-block text-sm font-semibold text-purple-600">
              KEY FEATURES
            </span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Everything You Need for
              <br />
              Seamless Collaboration
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {collaborationFeatures.map((feature, index) => {
              const IconComponent = getIcon(feature.icon);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-purple-500/20 dark:border-gray-800 dark:bg-gray-900"
                >
                  <div
                    className={`mb-6 inline-block rounded-xl ${feature.color.replace("text", "bg")}/10 p-3`}
                  >
                    <IconComponent className={`h-6 w-6 ${feature.color}`} />
                  </div>

                  <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mb-6 text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>

                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-purple-600" />
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
    </main>
  );
};
