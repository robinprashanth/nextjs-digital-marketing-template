"use client";

import SubTitleBadge from "@/components/badge/SubTitleBadge";
import { ContactCTA } from "@/components/cta/Presets";
import { ScrollInView } from "@/components/motion/ScrollInView";
import TestimonialStarsAbove from "@/components/testimonials/TestimonialStarsAbove";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Check, HelpCircle, X } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { FC, useState } from "react";
import { companyLogos, features, pricingTiers } from "../data/content";

const Pricing: FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[linear-gradient(45deg,#0B0B1E,#1A1A2E)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(147,51,234,0.1),transparent)] opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.1),transparent)] opacity-70" />

        <div className="container relative mx-auto px-4 py-24 sm:px-6">
          <ScrollInView className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-theme-primary-500/10 px-4 py-1.5 text-sm font-semibold text-theme-primary-400">
              Pricing Plans
            </span>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Choose the Right Plan for Your{" "}
              <span className="bg-gradient-to-r from-theme-primary-400 to-theme-primary-600 bg-clip-text text-transparent">
                Growth
              </span>
            </h1>
            <p className="text-lg text-white/80">
              Flexible pricing options designed to scale with your business
              needs. Start with a 14-day free trial, no credit card required.
            </p>
          </ScrollInView>

          {/* Billing Toggle */}
          <ScrollInView
            delay={0.2}
            className="mx-auto mt-12 flex justify-center"
          >
            <div className="inline-flex items-center rounded-full border border-theme-neutral-800 bg-background p-2">
              <button
                onClick={() => setIsAnnual(false)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  !isAnnual
                    ? "bg-theme-primary-500 text-white"
                    : "text-theme-neutral-400 hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  isAnnual
                    ? "bg-theme-primary-500 text-white"
                    : "text-theme-neutral-400 hover:text-white"
                }`}
              >
                Annual
                <span className="absolute -right-2 -top-2 rounded-full bg-theme-tulip-500 px-2 py-0.5 text-xs font-semibold text-white">
                  Save 20%
                </span>
              </button>
            </div>
          </ScrollInView>
        </div>

        {/* Wave Divider */}
        <div className="relative">
          <svg
            viewBox="0 0 1440 200"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-background"
          >
            <path d="M0 120l48 13.3c48 13.4 144 40 240 40s192-26.6 288-40c96-13.3 192-13.3 288 0s192 40 288 40 192-26.7 240-40l48-13.3v80H0z" />
          </svg>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative -mt-20 pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingTiers.map((tier, index) => (
              <ScrollInView
                key={tier.name}
                delay={index * 0.1}
                className={`relative rounded-2xl border ${
                  tier.popular
                    ? "border-theme-primary-500 shadow-[0_0_30px_2px_rgba(147,51,234,0.1)]"
                    : "border-theme-neutral-800"
                } bg-card p-8`}
              >
                {tier.popular && (
                  <div className="absolute -top-5 right-8 rounded-full bg-theme-primary-500 px-4 py-1 text-sm font-medium text-white">
                    Most Popular
                  </div>
                )}

                <div className="mb-6 inline-flex rounded-xl bg-theme-primary-500/10 p-3">
                  <tier.icon className="h-6 w-6 text-theme-primary-400" />
                </div>

                <h3 className="mb-2 text-2xl font-bold text-foreground">
                  {tier.name}
                </h3>
                <p className="mb-6 text-sm text-muted-foreground">
                  {tier.description}
                </p>

                <div className="mb-6">
                  {typeof tier.monthlyPrice === "number" ? (
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-foreground">
                        ${isAnnual ? tier.annualPrice : tier.monthlyPrice}
                      </span>
                      <span className="ml-2 text-muted-foreground">/month</span>
                    </div>
                  ) : (
                    <div className="text-4xl font-bold text-foreground">
                      {tier.monthlyPrice}
                    </div>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mb-8 w-full rounded-full ${
                    tier.popular
                      ? "bg-theme-primary-500 text-white hover:bg-theme-primary-600"
                      : "border border-theme-primary-500 text-theme-primary-400 hover:bg-theme-primary-500/10"
                  } px-6 py-3 font-medium transition-all`}
                >
                  {tier.cta}
                </motion.button>

                <ul className="space-y-4">
                  {tier.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <Check className="h-5 w-5 text-theme-primary-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="border-t border-theme-neutral-800 bg-card">
        <div className="container mx-auto px-4 py-24 sm:px-6">
          <ScrollInView
            useInView={true}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              Feature Comparison
            </h2>
            <p className="text-muted-foreground">
              Compare features across different plans to find the perfect fit
              for your business.
            </p>
          </ScrollInView>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr className="border-b border-theme-neutral-800">
                  <th className="py-4 text-left font-medium text-foreground">
                    Features
                  </th>
                  <th className="px-6 py-4 text-center font-medium text-foreground">
                    Starter
                  </th>
                  <th className="px-6 py-4 text-center font-medium text-foreground">
                    Professional
                  </th>
                  <th className="px-6 py-4 text-center font-medium text-foreground">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr
                    key={index}
                    className="border-b border-theme-neutral-800 text-sm"
                  >
                    <td className="py-4">
                      <Tooltip.Provider>
                        <Tooltip.Root>
                          <Tooltip.Trigger asChild>
                            <div className="flex items-center gap-2">
                              {feature.name}
                              <HelpCircle className="h-4 w-4 text-muted-foreground" />
                            </div>
                          </Tooltip.Trigger>
                          <Tooltip.Portal>
                            <Tooltip.Content
                              className="rounded-lg bg-card p-4 text-sm shadow-lg"
                              side="top"
                              sideOffset={5}
                            >
                              {feature.description}
                            </Tooltip.Content>
                          </Tooltip.Portal>
                        </Tooltip.Root>
                      </Tooltip.Provider>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.starter === "boolean" ? (
                        feature.starter ? (
                          <Check className="mx-auto h-5 w-5 text-theme-tulip-500" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-theme-rose-500" />
                        )
                      ) : (
                        <span className="text-muted-foreground">
                          {feature.starter}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.professional === "boolean" ? (
                        feature.professional ? (
                          <Check className="mx-auto h-5 w-5 text-theme-tulip-500" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-theme-rose-500" />
                        )
                      ) : (
                        <span className="text-muted-foreground">
                          {feature.professional}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.enterprise === "boolean" ? (
                        feature.enterprise ? (
                          <Check className="mx-auto h-5 w-5 text-theme-tulip-500" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-theme-rose-500" />
                        )
                      ) : (
                        <span className="text-muted-foreground">
                          {feature.enterprise}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* FAQs Section */}
      <section className="border-t border-theme-neutral-800">
        <div className="container mx-auto px-4 py-24 sm:px-6">
          <ScrollInView
            useInView={true}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <SubTitleBadge text="FAQ" />
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Get answers to common questions about our pricing and plans.
            </p>
          </ScrollInView>

          <div className="mx-auto grid max-w-3xl gap-6">
            {[
              {
                question: "Can I change plans at any time?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise plans.",
              },
              {
                question: "Is there a free trial available?",
                answer:
                  "Yes, we offer a 14-day free trial on all plans. No credit card required during the trial period.",
              },
              {
                question: "What happens after my free trial?",
                answer:
                  "After your trial ends, you can choose to subscribe to any of our plans or your account will be automatically downgraded to a limited free version.",
              },
              {
                question: "Do you offer custom plans?",
                answer:
                  "Yes, we offer custom enterprise plans for businesses with specific needs. Contact our sales team to discuss your requirements.",
              },
              {
                question: "Can I get a refund?",
                answer:
                  "We offer a 30-day money-back guarantee. If you're not satisfied with our service, contact support for a full refund.",
              },
            ].map((faq, index) => (
              <ScrollInView
                useInView={true}
                key={index}
                delay={index * 0.1}
                className="rounded-2xl border border-theme-neutral-800 bg-card p-6"
              >
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-theme-neutral-800 bg-card">
        <div className="container mx-auto px-4 py-24 sm:px-6">
          <ScrollInView
            useInView={true}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <SubTitleBadge text="TESTIMONIALS" />
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              Trusted by Industry Leaders
            </h2>
            <p className="text-muted-foreground">
              See what our clients say about their experience with our services.
            </p>
          </ScrollInView>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "The ROI we've seen since switching to their platform has been incredible. The professional plan perfectly suits our needs.",
                author: "Sarah Chen",
                role: "Marketing Director",
                company: "TechCorp",
                image: "/images/testimonials/sarah.jpg",
              },
              {
                quote:
                  "Their enterprise solution has transformed how we manage our digital marketing campaigns. The support team is exceptional.",
                author: "Michael Rodriguez",
                role: "CEO",
                company: "Global Retail Co",
                image: "/images/testimonials/michael.jpg",
              },
              {
                quote:
                  "Starting with the starter plan helped us grow, and upgrading to professional was seamless. Great value for money.",
                author: "Emily Thompson",
                role: "Founder",
                company: "StartUp Inc",
                image: "/images/testimonials/emily.jpg",
              },
            ].map((testimonial, index) => (
              <TestimonialStarsAbove
                testimonial={testimonial}
                delay={index}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-theme-neutral-800">
        <div className="container mx-auto px-4 py-24 sm:px-6">
          <ContactCTA />

          {/* Trust Badges */}
          <div className="mt-16 text-center">
            <ScrollInView useInView={true} className="space-y-8">
              <p className="text-sm text-muted-foreground">
                Trusted by leading companies worldwide
              </p>

              <div className="relative">
                {/* Gradient Edges */}
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent" />

                {/* Logos Marquee */}
                <div className="flex items-center justify-center gap-12 overflow-hidden py-4">
                  <div className="animate-marquee flex items-center gap-12">
                    {companyLogos.map((company, index) => (
                      <motion.div
                        key={`${company.name}-${index}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1, scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        className="relative grayscale transition-all duration-200 hover:grayscale-0"
                      >
                        <Image
                          src={company.logo}
                          alt={`${company.name} logo`}
                          width={company.width}
                          height={company.height}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Trust Metrics */}
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {[
                  { label: "Active Users", value: "100K+" },
                  { label: "Countries", value: "150+" },
                  { label: "Enterprise Clients", value: "500+" },
                  { label: "Success Rate", value: "99.9%" },
                ].map((metric, index) => (
                  <ScrollInView
                    useInView={true}
                    key={metric.label}
                    delay={index * 0.1}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-foreground">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {metric.label}
                    </div>
                  </ScrollInView>
                ))}
              </div>
            </ScrollInView>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
