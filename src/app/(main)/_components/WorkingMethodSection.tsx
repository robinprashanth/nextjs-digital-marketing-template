"use client";
import React, { FC } from "react";
import { motion } from "motion/react"; // Removed useInView since we're using whileInView
import { LineChart, Target, Users, BarChart3 } from "lucide-react";
import Image from "next/image";
import { MethodStepProps, WorkingStatCardProps } from "@/types";

const ExecutionSVG = () => (
  <svg viewBox="0 0 240 180" className="h-full w-full">
    <defs>
      <linearGradient id="execution-gradient" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#059669" stopOpacity="0.3" />
      </linearGradient>
    </defs>
    <rect
      x="40"
      y="30"
      width="160"
      height="120"
      rx="10"
      fill="url(#execution-gradient)"
    />
    <rect
      x="60"
      y="50"
      width="40"
      height="80"
      rx="4"
      fill="#10B981"
      opacity="0.8"
    />
    <rect
      x="110"
      y="70"
      width="40"
      height="60"
      rx="4"
      fill="#10B981"
      opacity="0.6"
    />
    <rect
      x="160"
      y="90"
      width="40"
      height="40"
      rx="4"
      fill="#10B981"
      opacity="0.4"
    />
    <path
      d="M50 40 L60 40 M50 50 L65 50"
      stroke="#10B981"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const GrowthSVG = () => (
  <svg viewBox="0 0 240 180" className="h-full w-full">
    <defs>
      <linearGradient id="growth-gradient" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#D97706" stopOpacity="0.3" />
      </linearGradient>
    </defs>
    <rect
      x="30"
      y="30"
      width="180"
      height="120"
      rx="10"
      fill="url(#growth-gradient)"
    />
    <path
      d="M60 120 C100 120 100 80 140 80 C180 80 180 40 200 40"
      stroke="#F59E0B"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    />
    <circle cx="100" cy="80" r="6" fill="#F59E0B" opacity="0.8" />
    <circle cx="140" cy="80" r="6" fill="#F59E0B" opacity="0.8" />
    <circle cx="180" cy="40" r="6" fill="#F59E0B" opacity="0.8" />
    <path
      d="M45 45 L55 45 M45 55 L60 55"
      stroke="#F59E0B"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const MethodStep: FC<MethodStepProps> = ({
  number,
  title,
  description,
  image,
  delay = 0,
  isHighlighted = false,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className={`group relative ${
      isHighlighted
        ? "rounded-3xl bg-gradient-to-br from-purple-50/80 to-purple-50/40 backdrop-blur-sm"
        : ""
    }`}
  >
    <div className="flex flex-col items-start gap-6 p-6 md:flex-row md:p-8">
      {/* Number and Content */}
      <div className="flex-1">
        <div className="flex items-start gap-4 md:gap-6">
          <span className="bg-gradient-to-br from-theme-primary-400 to-theme-primary-600 bg-clip-text font-mono text-3xl font-bold text-transparent md:text-4xl">
            {number}
          </span>
          <div className="flex-1">
            <h3 className="mb-3 text-lg font-bold text-gray-900 md:text-xl">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-theme-neutral-600 md:text-base">
              {description}
            </p>
          </div>
        </div>

        {/* Icon */}
      </div>

      {/* Image Section */}
      {image && (
        <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-white/50 p-4 md:w-72">
          {/* If image is a component (SVG), render it directly */}
          {React.isValidElement(image) ? (
            image
          ) : (
            <Image
              src={image as string}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          )}
        </div>
      )}
    </div>

    {/* Connector Line */}
    <div className="absolute bottom-0 left-[2.5rem] -mb-8 hidden h-8 w-px bg-gradient-to-b from-purple-200 to-transparent md:block" />
  </motion.div>
);

export const WorkingMethodSection: FC = () => {
  const methods: MethodStepProps[] = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description:
        "We dive deep into your business ecosystem, analyzing market trends, competitor landscapes, and identifying unique opportunities for digital growth.",
      icon: <Users className="h-6 w-6" />,
      image: "/images/working-method/discovery.jpg", // Replace string with SVG component
    },
    {
      number: "02",
      title: "Strategic Blueprint",
      description:
        "Crafting a comprehensive digital strategy that aligns with your business objectives, incorporating data-driven insights and innovative approaches.",
      icon: <Target className="h-6 w-6" />,
      isHighlighted: true,
      image: "/images/working-method/person.png", // Replace string with SVG component
    },
    {
      number: "03",
      title: "Execution Excellence",
      description:
        "Implementing strategies with precision, continuously monitoring performance metrics, and optimizing campaigns for maximum impact.",
      icon: <LineChart className="h-6 w-6" />,
      image: <ExecutionSVG />,
    },
    {
      number: "04",
      title: "Growth & Scaling",
      description:
        "Leveraging successful outcomes to scale your digital presence, while maintaining transparency through comprehensive performance analytics.",
      icon: <BarChart3 className="h-6 w-6" />,
      image: <GrowthSVG />,
    },
  ];

  const stats: WorkingStatCardProps[] = [
    {
      title: "Data-Driven Decisions",
      value: "100%",
      description: "Strategic approach based on analytics",
    },
    {
      title: "Client Success Rate",
      value: "96%",
      description: "Achieving business objectives",
    },
    {
      title: "Performance Growth",
      value: "85%",
      description: "Average improvement in KPIs",
    },
  ];

  return (
    <section className="overflow-hidden bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <span className="mb-4 block bg-gradient-to-r from-red-500 to-theme-primary-500 bg-clip-text text-sm font-semibold tracking-wider text-transparent">
            OUR METHODOLOGY
          </span>
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-5xl">
            Transforming Vision
            <br />
            Into Digital Success
          </h2>
          <p className="text-base text-theme-neutral-600 md:text-lg">
            Our proven four-step methodology combines strategic thinking with
            technical expertise to deliver exceptional results in the digital
            landscape.
          </p>
        </motion.div>

        {/* Method Steps */}
        <div className="mx-auto max-w-5xl">
          {methods.map((method, index) => (
            <MethodStep key={index} {...method} delay={index * 0.15} />
          ))}
        </div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 grid gap-6 md:grid-cols-3"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="rounded-2xl bg-gradient-to-br from-gray-50 to-white p-6 text-center shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-2 bg-gradient-to-r from-theme-primary-600 to-theme-primary-400 bg-clip-text text-3xl font-bold text-transparent">
                {stat.value}
              </div>
              <div className="mb-1 font-medium text-gray-900">{stat.title}</div>
              <div className="text-sm text-theme-neutral-600">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
