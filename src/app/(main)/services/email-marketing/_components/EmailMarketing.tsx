"use client";
import { FC } from "react";
import {
  Mail,
  Target,
  BarChart3,
  Users,
  Zap,
  LineChart,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { features, metrics, processSteps } from "../data/content";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScrollInView } from "@/components/motion/ScrollInView";

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
        <div className="absolute left-1/4 top-1/4 h-24 w-24 rounded-full bg-theme-primary-500/20 blur-xl" />
        <div className="absolute right-1/4 top-1/3 h-32 w-32 rounded-full bg-blue-500/20 blur-xl" />

        {/* Content */}
        <div className="container relative mx-auto px-4 py-24 sm:px-6">
          <ScrollInView
            className="max-w-4xl"
          >
            <div className="mb-6 inline-block rounded-full bg-theme-primary-500/10 px-4 py-1 text-sm text-theme-primary-400">
              EMAIL MARKETING SOLUTIONS
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Transform Your Email
              <br />
              Marketing Strategy
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-theme-neutral-400">
              Drive engagement, boost conversions, and build lasting
              relationships with your audience through data-driven email
              marketing campaigns.
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
      <section className="bg-white py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollInView
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <span className="mb-4 block bg-gradient-to-r from-theme-primary-600 to-blue-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent">
              FEATURES & CAPABILITIES
            </span>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Advanced Email Marketing
              <br />
              Platform Features
            </h2>
            <p className="text-lg text-theme-neutral-600 dark:text-theme-neutral-400">
              Our comprehensive suite of email marketing tools and features
              designed to maximize your campaign performance and ROI.
            </p>
          </ScrollInView>

          {/* Features Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const IconComponent =
                iconMap[feature.icon as keyof typeof iconMap];
              return (
                <ScrollInView
                  key={index}
                  delay={index * 0.1 }
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
                    <p className="text-theme-neutral-600 dark:text-theme-neutral-400">
                      {feature.description}
                    </p>

                    {/* Hover Effect */}
                    <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-r from-theme-primary-500/10 to-blue-500/10 blur-xl transition-all duration-500 group-hover:scale-150" />
                  </div>
                </ScrollInView>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="relative overflow-hidden bg-gray-50 py-24 dark:bg-gray-900">
        <div className="container relative mx-auto px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <ScrollInView
              className="max-w-xl"
            >
              <span className="mb-4 block bg-gradient-to-r from-theme-primary-600 to-blue-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent">
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
                  <ScrollInView
                    key={index}
                    delay={index * 0.1}
                    className="flex gap-4"
                  >
                    <span className="text-2xl font-bold text-theme-primary-600">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="mb-2 font-bold text-gray-900 dark:text-white">
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

            {/* Image/Visualization Section */}
            <ScrollInView
              className="relative"
            >
              <div className="relative h-[600px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/services/email-marketing-dashboard.jpg"
                  alt="Email Marketing Dashboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-theme-primary-600/20 to-blue-600/20" />
              </div>
            </ScrollInView>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollInView
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="mb-8 text-3xl font-bold text-white md:text-5xl">
              Ready to Transform Your
              <br />
              Email Marketing Strategy?
            </h2>
            <p className="mb-12 text-lg text-theme-neutral-400">
              Let&apos;s create data-driven email campaigns that engage your
              audience and drive measurable results.
            </p>
            <Button variant="cta2" size="fluid" rounded="full" asChild>
              <Link href="/contact" className="group">
                Schedule a Strategy Call
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </ScrollInView>
        </div>
      </section>
    </main>
  );
};
