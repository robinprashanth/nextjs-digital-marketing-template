"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award, BadgeCheck, Download, Trophy } from "lucide-react";

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
    <section className="relative py-24">
      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <div className="overflow-hidden rounded-[40px] bg-gradient-to-br from-blue-100 via-white to-purple-100 p-12 shadow-xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <FadeIn>
              <div className="relative">
                <h2 className="mb-6 text-6xl font-black tracking-tight text-gray-800">
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
                <p className="mb-8 text-lg text-gray-600">
                  Earn industry-recognized certificates upon course completion.
                  Showcase your skills and boost your career opportunities.
                </p>

                {/* Features */}
                <div className="mb-8 space-y-6">
                  {features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 }}
                      className={`flex items-start gap-4 rounded-2xl ${feature.bgColor} p-6`}
                    >
                      <div className={`rounded-full bg-white p-3 ${feature.color}`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-semibold text-gray-800">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
                >
                  <Download className="h-5 w-5" />
                  Download Sample Certificate
                </motion.button>
              </div>
            </FadeIn>

            {/* Right Content - Certificate Display */}
            <FadeIn>
              <div className="relative">
                {/* Certificate Stack */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="relative"
                >
                  {/* Background Certificates */}
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute left-0 top-0"
                      style={{
                        transform: `rotate(${(i - 1) * 5}deg)`,
                        zIndex: 3 - i,
                      }}
                    >
                      <div className="relative h-[400px] w-[600px] overflow-hidden rounded-3xl bg-white shadow-2xl">
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
                    className="relative z-10 h-[400px] w-[600px] overflow-hidden rounded-3xl bg-white shadow-2xl"
                  >
                    <Image
                      src="/images/homepage4/certificates/certificate-main.jpeg"
                      alt="Main Certificate"
                      fill
                      className="object-cover"
                    />
                    
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
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 opacity-50" />
                <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-gradient-to-br from-yellow-200 to-blue-200 opacity-50" />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
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
    </section>
  );
} 