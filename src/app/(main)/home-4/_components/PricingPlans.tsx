"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { FadeInStagger } from "@/components/motion/FadeInStagger";
import { FadeInStaggerItem } from "@/components/motion/FadeInStaggerItem";
import { motion } from "motion/react";

import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for getting started",
    bgColor: "#4A90E2",
    popular: false,
    features: [
      "Access to free courses",
      "Basic learning tools",
      "Community support",
      "Mobile access",
      "Course completion certificates",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "Most popular for professionals",
    bgColor: "#7E57C2",
    popular: true,
    features: [
      "All Basic features",
      "Unlimited course access",
      "Live mentoring sessions",
      "Priority support",
      "Ad-free experience",
      "Downloadable resources",
      "Group study rooms",
      "Career guidance",
    ],
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For teams and organizations",
    bgColor: "#FF7043",
    popular: false,
    features: [
      "All Pro features",
      "Custom learning paths",
      "API access",
      "Dedicated support",
      "Custom certificates",
      "Team analytics",
      "Bulk licensing",
      "SSO integration",
    ],
  },
];

export function PricingPlans() {
  return (
    <section className="relative py-24">
      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        {/* Header */}
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-6xl font-black tracking-tight">
              CHOOSE YOUR
            </h2>
            <div className="relative inline-block">
              <span className="relative z-10 px-6 text-4xl font-bold">
                LEARNING PLAN
              </span>
              <motion.div
                className="absolute -inset-2 -z-10 rounded-lg bg-[#90EE90]"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              />
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
              Flexible plans to meet your learning needs. Start free or
              unlock more features with our premium plans.
            </p>
          </div>
        </FadeIn>

        {/* Pricing Cards */}
        <FadeInStagger>
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan, i) => (
              <FadeInStaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="relative overflow-hidden rounded-[40px] p-2"
                  style={{ backgroundColor: plan.bgColor }}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute right-8 top-0 z-10">
                      <div className="flex items-center gap-1 rounded-b-lg bg-yellow-400 px-3 py-1 text-sm font-semibold text-yellow-900">
                        <Star className="h-4 w-4 fill-yellow-900" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="relative rounded-[32px] bg-white/95 p-8">
                    <div className="mb-8 text-center">
                      <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                      <p className="mb-6 text-gray-500">{plan.description}</p>
                      <div className="mb-6">
                        <span className="text-5xl font-bold">{plan.price}</span>
                        {plan.period && (
                          <span className="text-gray-500">{plan.period}</span>
                        )}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="w-full rounded-full bg-gray-900 px-8 py-4 font-semibold text-white transition-colors hover:bg-gray-800"
                      >
                        Get Started
                      </motion.button>
                    </div>

                    {/* Features List */}
                    <div className="space-y-4">
                      {plan.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <div
                            className="rounded-full p-1"
                            style={{ backgroundColor: plan.bgColor }}
                          >
                            <Check className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
                  <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/10" />
                </motion.div>
              </FadeInStaggerItem>
            ))}
          </div>
        </FadeInStagger>

        {/* Special Offer */}
        <FadeIn>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 rounded-3xl bg-gradient-to-r from-purple-500 to-blue-500 p-24 text-center text-white"
          >
            <h3 className="mb-2 text-2xl font-bold">
              Special Offer! 🎉
            </h3>
            <p className="mb-4">
              Get 20% off annual plans with code{" "}
              <span className="rounded-lg bg-white/20 px-2 py-1 font-mono">
                EARLYBIRD
              </span>
            </p>
            <p className="text-sm text-white/80">
              Limited time offer. Terms and conditions apply.
            </p>
          </motion.div>
        </FadeIn>
      </div>

      {/* Decorative Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute right-10 bottom-20"
      >
        <div className="h-20 w-20 rounded-full bg-purple-600/20" />
      </motion.div>
      
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute left-20 top-20"
      >
        <div className="h-16 w-16 rounded-full bg-blue-500/20" />
      </motion.div>
    </section>
  );
} 