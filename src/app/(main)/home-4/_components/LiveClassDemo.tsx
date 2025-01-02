"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { motion } from "motion/react";

import Image from "next/image";
import { Camera, Mic, Share2, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export function LiveClassDemo() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        {/* Main Content Container */}
        <div className="overflow-hidden rounded-[20px] sm:rounded-[40px] bg-gradient-to-br from-purple-100 via-white to-blue-100 p-6 sm:p-12 shadow-xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <FadeIn>
              <div className="relative">
                <h2 className="mb-4 sm:mb-6 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-800">
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
                <p className="mb-6 sm:mb-8 text-base sm:text-lg text-gray-600">
                  Join our interactive live classes with real-time collaboration,
                  instant feedback, and engaging discussions.
                </p>

                {/* Features Grid */}
                <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                  {[
                    {
                      icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" />,
                      title: "Interactive Sessions",
                      description: "Engage with instructors and peers in real-time",
                      bgColor: "bg-purple-50",
                      iconColor: "text-purple-500",
                    },
                    {
                      icon: <Camera className="h-5 w-5 sm:h-6 sm:w-6" />,
                      title: "HD Video Quality",
                      description: "Crystal clear video streaming experience",
                      bgColor: "bg-blue-50",
                      iconColor: "text-blue-500",
                    },
                    {
                      icon: <Share2 className="h-5 w-5 sm:h-6 sm:w-6" />,
                      title: "Screen Sharing",
                      description: "Share your work for instant feedback",
                      bgColor: "bg-pink-50",
                      iconColor: "text-pink-500",
                    },
                    {
                      icon: <Mic className="h-5 w-5 sm:h-6 sm:w-6" />,
                      title: "Clear Audio",
                      description: "High-quality audio for better learning",
                      bgColor: "bg-indigo-50",
                      iconColor: "text-indigo-500",
                    },
                  ].map((feature, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="relative overflow-hidden rounded-xl sm:rounded-2xl p-4 sm:p-6"
                      style={{ backgroundColor: feature.bgColor }}
                    >
                      <div className={cn(
                        "mb-3 sm:mb-4 rounded-xl p-2 sm:p-3 w-fit",
                        feature.iconColor,
                        feature.bgColor
                      )}>
                        {feature.icon}
                      </div>
                      <h3 className="mb-1 sm:mb-2 text-base sm:text-lg font-semibold">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Right Content - Live Class Interface */}
            <FadeIn>
              <div className="relative mt-8 lg:mt-0">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="relative rounded-2xl sm:rounded-3xl bg-gray-800 overflow-hidden"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between bg-gray-900 px-4 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-500" />
                      <span className="text-sm sm:text-base font-medium text-green-200">Live Now</span>
                    </div>
                    <div className="flex gap-2 sm:gap-3">
                      <button className="rounded-full bg-gray-700 p-1.5 sm:p-2 text-white">
                        <Mic className="h-4 w-4 sm:h-5 sm:w-5" />
                      </button>
                      <button className="rounded-full bg-gray-700 p-1.5 sm:p-2 text-white">
                        <Camera className="h-4 w-4 sm:h-5 sm:w-5" />
                      </button>
                      <button className="rounded-full bg-gray-700 p-1.5 sm:p-2 text-white">
                        <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
                      </button>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="p-4 sm:p-6">
                    {/* Video Grid */}
                    <div className="grid gap-3 sm:gap-4">
                      {/* Instructor - Takes full width */}
                      <div className="relative aspect-video w-full overflow-hidden rounded-xl sm:rounded-2xl bg-purple-100">
                        <Image
                          src="/images/homepage4/live-class/instructor.jpeg"
                          alt="Instructor"
                          fill
                          className="object-cover"
                        />
                        {/* Instructor Label */}
                        <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 rounded-lg bg-purple-600/90 px-2 py-1 sm:px-3 sm:py-1.5">
                          <span className="text-xs sm:text-sm font-medium text-white">
                            Instructor
                          </span>
                        </div>
                      </div>

                      {/* Students Grid - 2x2 */}
                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        {[1, 2, 3, 4].map((i) => (
                          <div 
                            key={i} 
                            className="relative aspect-video overflow-hidden rounded-xl sm:rounded-2xl bg-purple-100"
                          >
                            <Image
                              src={`/images/homepage4/live-class/student-${i}.jpeg`}
                              alt={`Student ${i}`}
                              fill
                              className="object-cover"
                            />
                            {/* Student Label */}
                            <div className="absolute bottom-2 left-2 rounded-lg bg-gray-900/75 px-2 py-1">
                              <span className="text-xs text-white">
                                Student {i}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Chat/Questions Overlay */}
                    <div className="absolute bottom-16 right-4 sm:bottom-20 sm:right-6">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 sm:px-4 sm:py-2 backdrop-blur-sm"
                      >
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                        </span>
                        <span className="text-xs sm:text-sm text-white">
                          12 questions
                        </span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between bg-gray-800 px-4 sm:px-6 py-3 sm:py-4">
                    <span className="text-xs sm:text-sm font-medium text-purple-200">24 Participants</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="rounded-full bg-red-500 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white transition-colors hover:bg-red-600"
                    >
                      End Class
                    </motion.button>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -right-4 -top-4 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-gradient-to-br from-purple-200 to-blue-200 opacity-50" />
                <div className="absolute -bottom-4 -left-4 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 opacity-50" />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements - Hide on mobile */}
      <div className="hidden sm:block">
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
      </div>
    </section>
  );
} 