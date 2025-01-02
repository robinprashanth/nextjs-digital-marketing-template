"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { motion } from "motion/react";

import { Briefcase, FileCheck, GraduationCap, LineChart, Users2 } from "lucide-react";
import Image from "next/image";

const stats = [
  {
    value: "93%",
    label: "Job Placement Rate",
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    value: "150+",
    label: "Industry Partners",
    icon: <Users2 className="h-6 w-6" />,
  },
  {
    value: "85%",
    label: "Salary Increase",
    icon: <LineChart className="h-6 w-6" />,
  },
];

const services = [
  {
    title: "Resume Building",
    description: "Get expert help crafting a standout resume that highlights your skills and achievements",
    icon: <FileCheck className="h-8 w-8" />,
    bgColor: "#4A90E2",
  },
  {
    title: "Interview Prep",
    description: "Practice with mock interviews and receive feedback from industry professionals",
    icon: <Users2 className="h-8 w-8" />,
    bgColor: "#7E57C2",
  },
  {
    title: "Career Coaching",
    description: "One-on-one guidance to help you navigate your career path and achieve your goals",
    icon: <GraduationCap className="h-8 w-8" />,
    bgColor: "#FF7043",
  },
];

export function CareerSupport() {
  return (
    <section className="relative py-24">
      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <FadeIn>
            <div>
              <h2 className="mb-6 text-6xl font-black tracking-tight">
                LAUNCH YOUR
                <br />
                <div className="relative inline-block">
                  <span className="relative z-10 text-blue-600">DREAM CAREER</span>
                  <motion.div
                    className="absolute -inset-2 -z-10 rounded-lg bg-blue-100"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                  />
                </div>
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                Get the support you need to land your dream job. Our career services
                team is here to help you succeed.
              </p>

              {/* Stats */}
              <div className="mb-12 grid gap-8 sm:grid-cols-3">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="text-center"
                  >
                    <div className="mb-2 inline-flex rounded-full bg-blue-100 p-3 text-blue-600">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Services */}
              <div className="space-y-6">
                {services.map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-start gap-4 rounded-2xl p-6"
                    style={{ backgroundColor: `${service.bgColor}20` }}
                  >
                    <div
                      className="rounded-xl p-3 text-white"
                      style={{ backgroundColor: service.bgColor }}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="mb-1 text-xl font-bold">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right Content - Partner Logos */}
          <FadeIn>
            <div className="relative rounded-[40px] bg-white p-8 shadow-xl">
              <h3 className="mb-8 text-center text-2xl font-bold">
                Our Industry Partners
              </h3>
              <div className="grid grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 p-4"
                  >
                    <Image
                      src={`/images/homepage4/partners/partner-${i + 1}.jpeg`}
                      alt={`Partner ${i + 1}`}
                      fill
                      className="object-contain p-4"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 opacity-50" />
              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-gradient-to-br from-orange-200 to-red-200 opacity-50" />
            </div>
          </FadeIn>
        </div>
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
        <div className="h-20 w-20 rounded-full bg-blue-200/50" />
      </motion.div>
    </section>
  );
} 