"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { motion, AnimatePresence } from "motion/react";
import { Bell, Mail, Send, Star } from "lucide-react";
import { useState } from "react";

const benefits = [
  {
    icon: <Bell className="h-5 w-5" />,
    text: "Course updates and new releases",
  },
  {
    icon: <Star className="h-5 w-5" />,
    text: "Exclusive learning resources",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    text: "Special offers and discounts",
  },
];

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="relative py-16 sm:py-24">
      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <div className="overflow-hidden rounded-[20px] sm:rounded-[40px] bg-green-200 p-6 sm:p-12 shadow-xl">
          <div className="mx-auto max-w-3xl text-center">
            {/* Header */}
            <FadeIn>
              <div className="mb-8 sm:mb-12">
                <h2 className="mb-4 text-3xl sm:text-6xl font-black tracking-tight text-gray-800">
                  STAY
                  <div className="relative inline-block px-2 sm:px-3">
                    <span className="relative z-10 text-purple-600">UPDATED</span>
                    <motion.div
                      className="absolute -inset-2 -z-10 rounded-lg bg-purple-100"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 }}
                    />
                  </div>
                </h2>
                <p className="text-base sm:text-lg text-gray-600">
                  Subscribe to our newsletter and never miss out on new courses,
                  special offers, and learning resources.
                </p>
              </div>

              {/* Benefits */}
              <div className="mb-6 sm:mb-8 flex flex-wrap justify-center gap-3 sm:gap-6">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-center gap-2 rounded-full bg-white px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm"
                  >
                    <div className="text-purple-500">{benefit.icon}</div>
                    <span className="text-xs sm:text-sm text-gray-600">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Subscription Form */}
              <form onSubmit={handleSubmit} className="relative">
                <div className="relative mx-auto max-w-xl">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full rounded-full bg-white py-3 sm:py-4 pl-4 sm:pl-6 pr-24 sm:pr-36 text-sm sm:text-base text-gray-800 shadow-sm transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-purple-600 px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-purple-700"
                    >
                      <span className="flex items-center gap-2">
                        Subscribe
                        <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                      </span>
                    </motion.button>
                  </div>

                  {/* Success Message */}
                  <AnimatePresence>
                    {isSubmitted && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-1/2 mt-3 sm:mt-4 -translate-x-1/2"
                      >
                        <div className="rounded-full bg-green-100 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-green-600">
                          Thanks for subscribing! 🎉
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Privacy Note */}
                  <p className="mt-4 text-xs sm:text-sm text-gray-500">
                    By subscribing, you agree to our Privacy Policy and consent to receive updates.
                  </p>
                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Decorative Elements - Hide on mobile */}
      <div className="hidden sm:block">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute right-10 bottom-20"
        >
          <div className="h-20 w-20 rounded-full bg-purple-200/50" />
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute left-20 top-20"
        >
          <div className="h-16 w-16 rounded-full bg-blue-200/50" />
        </motion.div>
      </div>
    </section>
  );
} 