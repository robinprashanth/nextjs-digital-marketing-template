"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { FadeInStagger } from "@/components/motion/FadeInStagger";
import { FadeInStaggerItem } from "@/components/motion/FadeInStaggerItem";
import { motion } from "framer-motion";
import { BookOpen, Code2, FileText, Headphones, Layout, MessageSquare, PenTool, Video } from "lucide-react";

const tools = [
  {
    icon: <Video className="h-8 w-8" />,
    title: "Video Lectures",
    description: "HD quality video lessons with expert instructors",
    bgColor: "#FFD54F",
    iconColor: "text-yellow-600",
  },
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "Code Editor",
    description: "Built-in IDE for hands-on practice",
    bgColor: "#4A90E2",
    iconColor: "text-blue-600",
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Live Chat",
    description: "Real-time communication with mentors",
    bgColor: "#FF80AB",
    iconColor: "text-pink-600",
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Study Notes",
    description: "Comprehensive learning materials",
    bgColor: "#81C784",
    iconColor: "text-green-600",
  },
  {
    icon: <Layout className="h-8 w-8" />,
    title: "Dashboard",
    description: "Track your progress and achievements",
    bgColor: "#7E57C2",
    iconColor: "text-purple-600",
  },
  {
    icon: <PenTool className="h-8 w-8" />,
    title: "Practice Tests",
    description: "Self-assessment and quizzes",
    bgColor: "#FF7043",
    iconColor: "text-orange-600",
  },
  {
    icon: <Headphones className="h-8 w-8" />,
    title: "Audio Support",
    description: "Learn on the go with audio lessons",
    bgColor: "#26C6DA",
    iconColor: "text-cyan-600",
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Resources",
    description: "Additional learning materials",
    bgColor: "#9575CD",
    iconColor: "text-indigo-600",
  },
];

export function LearningTools() {
  return (
    <section className="relative py-24">
      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        {/* Header */}
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-6xl font-black tracking-tight">
              POWERFUL LEARNING
            </h2>
            <div className="relative inline-block">
              <span className="relative z-10 px-6 text-4xl font-bold">
                TOOLS & RESOURCES
              </span>
              <motion.div
                className="absolute -inset-2 -z-10 rounded-lg bg-[#90EE90]"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              />
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
              Everything you need to succeed in your learning journey,
              all in one place.
            </p>
          </div>
        </FadeIn>

        {/* Tools Grid */}
        <FadeInStagger>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool, i) => (
              <FadeInStaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-[32px] p-8"
                  style={{ backgroundColor: tool.bgColor }}
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`inline-flex rounded-2xl bg-white/90 p-4 ${tool.iconColor}`}
                    >
                      {tool.icon}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-white">
                      {tool.title}
                    </h3>
                    <p className="text-white/80">
                      {tool.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Decorative Elements */}
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
                  <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/10" />
                </motion.div>
              </FadeInStaggerItem>
            ))}
          </div>
        </FadeInStagger>

        {/* CTA Section */}
        <FadeIn>
          <div className="mt-16 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="rounded-full bg-theme-primary-500 px-8 py-4 font-semibold text-white transition-colors hover:bg-theme-primary-600"
            >
              Explore All Tools
            </motion.button>
          </div>
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