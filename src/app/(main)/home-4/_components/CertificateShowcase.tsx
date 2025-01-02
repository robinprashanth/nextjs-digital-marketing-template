"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { motion } from "motion/react";

import Image from "next/image";
import { Award, BadgeCheck, Download, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "Recognized Globally",
    description: "Our certificates are valued by top companies worldwide",
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  {
    icon: <BadgeCheck className="h-6 w-6" />,
    title: "Industry Standard",
    description: "Meets international certification standards",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Verified Skills",
    description: "Validates your expertise and achievements",
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
];

export function CertificateShowcase() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <div className="overflow-hidden rounded-[20px] sm:rounded-[40px] bg-gradient-to-br from-blue-100 via-white to-purple-100 p-6 sm:p-12 shadow-xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <FadeIn>
              <div className="relative">
                <h2 className="mb-4 sm:mb-6 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-800">
                  GET CERTIFIED &
                  <br />
                  <div className="relative inline-block">
                    <span className="relative z-10 text-blue-600">
                      STAND OUT
                    </span>
                    <motion.div
                      className="absolute -inset-2 -z-10 rounded-lg bg-blue-100"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 }}
                    />
                  </div>
                </h2>
                <p className="mb-6 sm:mb-8 text-base sm:text-lg text-gray-600">
                  Earn industry-recognized certificates and showcase your expertise to potential employers.
                </p>

                {/* Features Grid */}
                <div className="grid gap-4 sm:gap-6">
                  {features.map((feature, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className={cn(
                        "relative overflow-hidden rounded-xl sm:rounded-2xl p-4 sm:p-6",
                        feature.bgColor
                      )}
                    >
                      <div className="flex items-start gap-4">
                        <div className={cn(
                          "rounded-xl p-2 sm:p-3 w-fit",
                          feature.color,
                          feature.bgColor
                        )}>
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="mb-1 sm:mb-2 text-base sm:text-lg font-semibold">
                            {feature.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-600">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Download Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="mt-6 sm:mt-8 flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                  Sample Certificate
                </motion.button>
              </div>
            </FadeIn>

            {/* Right Content - Certificate Preview */}
            <FadeIn>
              <div className="relative mt-8 lg:mt-0">
                {/* Certificate Stack */}
                <div className="relative">
                  {/* Background Certificates */}
                  {[...Array(2)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute left-0 top-0 hidden sm:block"
                      style={{
                        transform: `rotate(${(i - 1) * 3}deg) translateY(${i * 8}px)`,
                        zIndex: 2 - i,
                      }}
                    >
                      <div className="relative aspect-[4/3] w-full max-w-[500px] overflow-hidden rounded-2xl bg-white shadow-lg">
                        <Image
                          src={`/images/homepage4/certificates/certificate-${i + 1}.jpeg`}
                          alt={`Certificate ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ))}

                  {/* Main Certificate */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative z-10 overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-xl"
                  >
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src="/images/homepage4/certificates/certificate-main.jpeg"
                        alt="Certificate Sample"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>

                    {/* Certificate Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                        <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 sm:px-4 sm:py-2 backdrop-blur-sm">
                          <BadgeCheck className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                          <span className="text-xs sm:text-sm font-medium">
                            Verified Certificate
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Certificate Shine Effect */}
                    <motion.div
                      animate={{
                        x: ["0%", "100%"],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                      className="absolute inset-0 z-10 rotate-45 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -right-4 -top-4 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 opacity-50" />
                <div className="absolute -bottom-4 -left-4 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-gradient-to-br from-yellow-200 to-blue-200 opacity-50" />
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
          className="absolute right-10 bottom-20"
        >
          <div className="h-20 w-20 rounded-full bg-blue-200/50" />
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute left-20 top-20"
        >
          <div className="h-16 w-16 rounded-full bg-purple-200/50" />
        </motion.div>
      </div>
    </section>
  );
} 