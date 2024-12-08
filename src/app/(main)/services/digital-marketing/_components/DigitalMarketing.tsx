"use client";
import { FC } from "react";
import {
  BarChart,
  Users,
  Mail,
  LineChart,
  Search,
  PenTool,
  ArrowUpRight,
  FacebookIcon,
  LinkedinIcon,
  Video,
  Target,
  FileText,
  BarChart2,
} from "lucide-react";
import {
  features,
  metrics,
  processSteps,
  platforms,
  successStories,
  services,
  testimonials,
} from "../data/content";
import { ScrollInView } from "@/components/motion/ScrollInView";
import { DigitalMarketingCTA } from "@/components/cta/Presets";
import ModernTestimonials from "@/components/testimonials/ModernTestimonials";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { PlatformCard } from "@/components/PlatformCard";

const iconMap = {
  BarChart,
  Users,
  Mail,
  LineChart,
  Search,
  PenTool,
  FacebookIcon,
  LinkedinIcon,
  Video,
  Target,
  FileText,
  BarChart2,
};

export const DigitalMarketing: FC = () => {
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
              "radial-gradient(circle at top right, rgba(147, 51, 234, 0.1), transparent 50%)",
          }}
        />

        {/* Floating Shapes */}
        <div className="absolute left-1/4 top-1/4 h-24 w-24 rounded-full bg-theme-primary-500/20 blur-xl" />
        <div className="absolute right-1/4 top-1/3 h-32 w-32 rounded-full bg-pink-500/20 blur-xl" />

        {/* Content */}
        <div className="container relative mx-auto px-4 py-24 sm:px-6">
          <ScrollInView
            className="max-w-4xl"
          >
            <div className="mb-6 inline-block rounded-full bg-theme-primary-500/10 px-4 py-1 text-sm text-theme-primary-400">
              DIGITAL MARKETING SOLUTIONS
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Transform Your Digital
              <br />
              Marketing Strategy
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-muted-foreground">
              Data-driven digital marketing solutions that drive growth,
              engagement, and measurable results across all digital channels.
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

      {/* Services Grid */}
      <section className="bg-white py-24 dark:bg-theme-neutral-900">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedHeading
            title="OUR SERVICESs"
            heading="Comprehensive Digital Marketing Solutions"
            description="Integrated marketing strategies that drive growth."
          />

          <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
        <ServiceCard
          key={index}
          service={service}
          iconMap={iconMap}
          index={index}
        />
      ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="bg-gray-50 py-24 dark:bg-theme-neutral-900/50">
        <div className="container mx-auto px-4 sm:px-6">
        <AnimatedHeading
            title="ADVERTISING PLATFORMS"
            heading=" Multi-Platform Advertising Excellence"
          />
          

          <div className="grid gap-6 md:grid-cols-4">
          {platforms.map((platform, index) => (
        <PlatformCard
          key={index}
          platform={platform}
          iconMap={iconMap}
          index={index}
        />
      ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="bg-white py-24 dark:bg-theme-neutral-900">
        <div className="container mx-auto px-4 sm:px-6">
        <AnimatedHeading
            title=" SUCCESS STORIES"
            heading=" Real Results for  Real Businesses"
            description="See how our digital marketing strategies have transformed
              businesses across different industries."
          />
          

          <div className="grid gap-8 md:grid-cols-3">
            {successStories.map((story, index) => (
              <ScrollInView
                key={index}
                delay={index * 0.1}
                className="group relative overflow-hidden rounded-3xl bg-gray-50 p-8 dark:bg-theme-neutral-800"
              >
                <div
                  className={`bg-gradient-to-r ${story.gradient} mb-6 inline-block rounded-full px-4 py-1 text-sm text-white`}
                >
                  {story.industry}
                </div>
                <h3 className="mb-6 text-xl font-bold text-theme-neutral-900 dark:text-white">
                  {story.title}
                </h3>

                <div className="space-y-4">
                  {story.results.map((result, resultIndex) => (
                    <div key={resultIndex}>
                      <p className="text-sm text-theme-neutral-600 dark:text-theme-neutral-400">
                        {result.metric}
                      </p>
                      <p className="text-2xl font-bold text-theme-neutral-900 dark:text-white">
                        {result.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-sm text-theme-neutral-500">
                  Achieved in {story.duration}
                </div>

                <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-r from-theme-primary-500/10 to-pink-500/10 blur-xl transition-all duration-500 group-hover:scale-150" />
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative overflow-hidden bg-navy py-24">
        <div className="container relative mx-auto px-4 sm:px-6">
        <AnimatedHeading
  title="OUR PROCESS"
  heading="Strategic Approach to Digital Success"
  theme="secondary"
/>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <ScrollInView
              useInView={true}
                key={index}
                delay={index * 0.1}
                className="relative"
              >
                <div className="rounded-3xl bg-white/5 p-8 backdrop-blur-lg">
                  <div className="mb-4 text-3xl font-bold text-theme-primary-400">
                    {step.number}
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-theme-neutral-400">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden h-1 w-8 bg-gradient-to-r from-theme-primary-400 to-transparent md:block" />
                )}
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-white py-24 dark:bg-theme-neutral-900">
        <div className="container mx-auto px-4 sm:px-6">
        <AnimatedHeading
  title="KEY FEATURES"
  heading="Advanced Marketing Capabilities"
  description="Cutting-edge features and tools to maximize your marketing performance."
  theme="primary"
/>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <ServiceCard
              key={index}
              service={feature}
              iconMap={iconMap}
              index={index}
            />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-theme-neutral-900">
        <div className="container mx-auto px-4 sm:px-6">
        <AnimatedHeading
  title="SUCCESS STORIES"
  heading="Real Results for Real Businesses"
  description="See how our digital marketing strategies have transformed businesses across different industries."
  theme="primary"
/>

          <ModernTestimonials testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <DigitalMarketingCTA />
    </main>
  );
};
