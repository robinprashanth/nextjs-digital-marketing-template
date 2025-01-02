"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { motion } from "motion/react";

import { Apple, Clock, Globe,  MessageSquare, PlayCircle, Wifi } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Learn Anytime",
    description: "Access courses 24/7, learn at your own pace",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Offline Access",
    description: "Download lessons for offline learning",
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Live Chat",
    description: "Connect with instructors and peers instantly",
  },
  {
    icon: <Wifi className="h-6 w-6" />,
    title: "Progress Sync",
    description: "Seamless syncing across all devices",
  },
];

export function MobileAppPromo() {
  return (
    <section className="relative py-24">
      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <FadeIn>
            <div>
              <h2 className="mb-6 text-6xl font-black tracking-tight">
                LEARN ON
                <br />
                <div className="relative inline-block">
                  <span className="relative z-10 text-blue-600">THE GO</span>
                  <motion.div
                    className="absolute -inset-2 -z-10 rounded-lg bg-blue-100"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                  />
                </div>
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                Download our mobile app and take your learning journey anywhere.
                Access courses, track progress, and connect with peers on the go.
              </p>

              {/* Features Grid */}
              <div className="mb-8 grid gap-6 sm:grid-cols-2">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-start gap-4 rounded-2xl bg-white/50 p-4 backdrop-blur-sm"
                  >
                    <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Download Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white"
                >
                  <Apple className="h-6 w-6" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white"
                >
                  <PlayCircle className="h-6 w-6" />
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </motion.a>
              </div>
            </div>
          </FadeIn>

          {/* Right Content - App Screenshots */}
          <FadeIn>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative z-10"
              >
                <Image
                  src="/images/homepage4/app/mobile-app-main.jpeg"
                  alt="Mobile App Screenshot"
                  width={400}
                  height={800}
                  className="mx-auto rounded-[40px] shadow-2xl"
                />
              </motion.div>

              {/* Floating Screenshots */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -left-16 top-20 z-0 w-48 rotate-[-12deg]"
              >
                <Image
                  src="/images/homepage4/app/mobile-app-screen-1.jpeg"
                  alt="App Feature"
                  width={200}
                  height={400}
                  className="rounded-[32px] shadow-xl"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -right-16 bottom-20 z-0 w-48 rotate-[12deg]"
              >
                <Image
                  src="/images/homepage4/app/mobile-app-screen-2.jpeg"
                  alt="App Feature"
                  width={200}
                  height={400}
                  className="rounded-[32px] shadow-xl"
                />
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute right-10 bottom-20"
      >
        <div className="h-20 w-20 rounded-full bg-blue-200/50" />
      </motion.div>
    </section>
  );
} 