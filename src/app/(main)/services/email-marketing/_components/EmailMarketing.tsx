"use client";
import { FC } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Target,
  BarChart3,
  Users,
  Zap,
  LineChart,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import { features, metrics, processSteps } from "../data/content";

const iconMap = {
  Mail,
  Target,
  BarChart3,
  Users,
  Zap,
  LineChart,
};

export const EmailMarketing: FC = () => {
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
              "radial-gradient(circle at top right, rgba(138, 111, 249, 0.1), transparent 50%)",
          }}
        />

        {/* Floating Shapes */}
        <div className="absolute left-1/4 top-1/4 h-24 w-24 rounded-full bg-purple-500/20 blur-xl" />
        <div className="absolute right-1/4 top-1/3 h-32 w-32 rounded-full bg-blue-500/20 blur-xl" />

        {/* Content */}
        <div className="container relative mx-auto px-4 py-24 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="mb-6 inline-block rounded-full bg-purple-500/10 px-4 py-1 text-sm text-purple-400">
              EMAIL MARKETING SOLUTIONS
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Transform Your Email
              <br />
              Marketing Strategy
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-gray-400">
              Drive engagement, boost conversions, and build lasting
              relationships with your audience through data-driven email
              marketing campaigns.
            </p>

            {/* Metrics Grid */}
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

      {/* Features Grid Section */}
      <section className="bg-white py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <span className="mb-4 block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent">
              FEATURES & CAPABILITIES
            </span>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Advanced Email Marketing
              <br />
              Platform Features
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our comprehensive suite of email marketing tools and features
              designed to maximize your campaign performance and ROI.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const IconComponent =
                iconMap[feature.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-3xl bg-gray-50 p-8 dark:bg-gray-800">
                    {/* Icon */}
                    <div
                      className={`mb-6 inline-block rounded-2xl p-3 ${feature.gradient}`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>

                    {/* Hover Effect */}
                    <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-xl transition-all duration-500 group-hover:scale-150" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="relative overflow-hidden bg-gray-50 py-24 dark:bg-gray-900">
        <div className="container relative mx-auto px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <span className="mb-4 block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent">
                OUR PROCESS
              </span>
              <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Strategic Approach to
                <br />
                Email Marketing Success
              </h2>

              {/* Process Steps */}
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <span className="text-2xl font-bold text-purple-600">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="mb-2 font-bold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image/Visualization Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[600px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/services/email-marketing-dashboard.jpg"
                  alt="Email Marketing Dashboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20" />
              </div>
            </motion.div>
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
              Email Marketing Strategy?
            </h2>
            <p className="mb-12 text-lg text-gray-400">
              Let&apos;s create data-driven email campaigns that engage your
              audience and drive measurable results.
            </p>
            <button className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Schedule a Strategy Call
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};
