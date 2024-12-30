"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import { Camera, Mic, Share2, Users } from "lucide-react";

export function LiveClassDemo() {
  return (
    <section className="relative py-24">
      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        {/* Main Content Container */}
        <div className="overflow-hidden rounded-[40px] bg-gradient-to-br from-purple-100 via-white to-blue-100 p-12 shadow-xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <FadeIn>
              <div className="relative">
                <h2 className="mb-6 text-6xl font-black tracking-tight text-gray-800">
                  EXPERIENCE OUR
                  <br />
                  <div className="relative inline-block">
                    <span className="relative z-10 text-purple-600">LIVE CLASSES</span>
                    <motion.div
                      className="absolute -inset-2 -z-10 rounded-lg bg-purple-100"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 }}
                    />
                  </div>
                </h2>
                <p className="mb-8 text-lg text-gray-600">
                  Join our interactive live classes with real-time collaboration,
                  instant feedback, and engaging discussions.
                </p>

                {/* Features Grid */}
                <div className="grid gap-6 sm:grid-cols-2">
                  {[
                    {
                      icon: <Users className="h-6 w-6" />,
                      title: "Interactive Sessions",
                      description: "Engage with instructors and peers in real-time",
                      bgColor: "bg-purple-50",
                      iconColor: "text-purple-500",
                    },
                    {
                      icon: <Camera className="h-6 w-6" />,
                      title: "HD Video Quality",
                      description: "Crystal clear video streaming experience",
                      bgColor: "bg-blue-50",
                      iconColor: "text-blue-500",
                    },
                    {
                      icon: <Share2 className="h-6 w-6" />,
                      title: "Screen Sharing",
                      description: "Share your work for instant feedback",
                      bgColor: "bg-pink-50",
                      iconColor: "text-pink-500",
                    },
                    {
                      icon: <Mic className="h-6 w-6" />,
                      title: "Clear Audio",
                      description: "High-quality audio for better learning",
                      bgColor: "bg-indigo-50",
                      iconColor: "text-indigo-500",
                    },
                  ].map((feature, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className={`rounded-2xl ${feature.bgColor} p-6 shadow-sm`}
                    >
                      <div className={`mb-4 inline-flex rounded-full bg-white p-3 ${feature.iconColor}`}>
                        {feature.icon}
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-gray-800">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Right Content - Live Class Interface */}
            <FadeIn>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="relative rounded-[40px] bg-white p-8 shadow-2xl"
              >
                {/* Video Interface */}
                <div className="overflow-hidden rounded-3xl bg-gray-900">
                  {/* Header */}
                  <div className="flex items-center justify-between bg-purple-600 px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="h-3 w-3 animate-pulse rounded-full bg-green-400" />
                      <span className="text-sm font-medium text-white">Live Now</span>
                    </div>
                    <div className="flex items-center gap-4">
                      {[Mic, Camera, Share2].map((Icon, i) => (
                        <motion.button
                          key={i}
                          whileHover={{ scale: 1.1 }}
                          className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                        >
                          <Icon className="h-5 w-5" />
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Main Video Area */}
                  <div className="aspect-video bg-gray-800 p-4">
                    <div className="grid h-full grid-cols-2 gap-4">
                      {/* Instructor */}
                      <div className="relative col-span-2 overflow-hidden rounded-2xl bg-purple-100">
                        <Image
                          src="/images/homepage4/live-class/instructor.jpeg"
                          alt="Instructor"
                          fill
                          className="rounded-2xl object-cover"
                        />
                        <div className="absolute bottom-4 left-4 rounded-lg bg-purple-600/90 px-3 py-1 text-sm font-medium text-white">
                          Instructor
                        </div>
                      </div>
                      
                      {/* Students */}
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="relative overflow-hidden rounded-2xl bg-purple-100">
                          <Image
                            src={`/images/homepage4/live-class/student-${i}.jpeg`}
                            alt={`Student ${i}`}
                            fill
                            className="rounded-2xl object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between bg-gray-800 px-6 py-4">
                    <span className="text-sm font-medium text-purple-200">24 Participants</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-600"
                    >
                      End Class
                    </motion.button>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-purple-200 to-blue-200 opacity-50" />
                <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 opacity-50" />
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute left-10 bottom-20"
      >
        <div className="h-20 w-20 rounded-full bg-purple-200/50" />
      </motion.div>
      
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute right-20 top-20"
      >
        <div className="h-16 w-16 rounded-full bg-blue-200/50" />
      </motion.div>
    </section>
  );
} 