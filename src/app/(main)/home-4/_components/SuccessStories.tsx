"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { FadeInStagger } from "@/components/motion/FadeInStagger";
import { FadeInStaggerItem } from "@/components/motion/FadeInStaggerItem";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const successStories = [
  {
    name: "Alex Thompson",
    role: "Web Developer",
    company: "Tech Solutions Inc.",
    image: "/images/homepage4/success/student-1.jpeg",
    story: "After completing the web development course, I landed my dream job at a leading tech company. The practical projects and mentor support were invaluable.",
    rating: 5,
    bgColor: "#FFD54F",
    achievement: "Increased salary by 150%",
  },
  {
    name: "Maria Garcia",
    role: "UX Designer",
    company: "Creative Studio",
    image: "/images/homepage4/success/student-2.jpeg",
    story: "The UI/UX design program transformed my career. Within 6 months of graduation, I was hired as a lead designer.",
    rating: 5,
    bgColor: "#4A90E2",
    achievement: "Won Design Award 2023",
  },
  {
    name: "David Kim",
    role: "Data Analyst",
    company: "Global Analytics",
    image: "/images/homepage4/success/student-3.jpeg",
    story: "The data science course provided real-world experience. Now I'm leading data projects at a Fortune 500 company.",
    rating: 5,
    bgColor: "#FF80AB",
    achievement: "Project Leader in 1 Year",
  },
];

const metrics = [
  { label: "Success Rate", value: "95%" },
  { label: "Career Transition", value: "89%" },
  { label: "Salary Increase", value: "150%" },
  { label: "Job Placement", value: "92%" },
];

export function SuccessStories() {
  return (
    <section className="relative py-24">
      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        {/* Header */}
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-6xl font-black tracking-tight">
              STUDENT SUCCESS
            </h2>
            <div className="relative inline-block">
              <span className="relative z-10 px-6 text-4xl font-bold">
                STORIES
              </span>
              <motion.div
                className="absolute -inset-2 -z-10 rounded-lg bg-[#90EE90]"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              />
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
              Real stories from our students who transformed their careers
              through our programs.
            </p>
          </div>
        </FadeIn>

        {/* Success Metrics */}
        <FadeInStagger>
          <div className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            {metrics.map((metric, i) => (
              <FadeInStaggerItem key={i}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="rounded-3xl bg-white/5 p-6 text-center backdrop-blur-sm"
                >
                  <h3 className="mb-2 text-4xl font-bold text-theme-primary-500">
                    {metric.value}
                  </h3>
                  <p className="text-gray-400">{metric.label}</p>
                </motion.div>
              </FadeInStaggerItem>
            ))}
          </div>
        </FadeInStagger>

        {/* Success Stories Cards */}
        <FadeInStagger>
          <div className="grid gap-8 md:grid-cols-3">
            {successStories.map((story, i) => (
              <FadeInStaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-[40px]"
                  style={{ backgroundColor: story.bgColor }}
                >
                  {/* Main Content */}
                  <div className="relative z-10 p-8">
                    {/* Profile Image */}
                    <div className="mb-6 flex justify-center">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative h-32 w-32"
                      >
                        <div className="aspect-square overflow-hidden rounded-full border-4 border-white/50">
                          <Image
                            src={story.image}
                            alt={story.name}
                            width={200}
                            height={200}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="text-center text-white">
                      <div className="mb-4 flex justify-center gap-1">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className="fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="mb-6 text-lg italic">&ldquo;{story.story}&ldquo;</p>
                      <h3 className="mb-1 text-2xl font-bold">{story.name}</h3>
                      <p className="mb-1 text-white/90">{story.role}</p>
                      <p className="mb-4 text-sm text-white/80">{story.company}</p>
                      
                      {/* Achievement Badge */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="mx-auto w-fit rounded-full bg-white/10 px-4 py-2"
                      >
                        <p className="text-sm font-semibold">{story.achievement}</p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />
                  <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/10" />
                </motion.div>
              </FadeInStaggerItem>
            ))}
          </div>
        </FadeInStagger>
      </div>

      {/* Decorative Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute right-10 top-20"
      >
        <div className="h-20 w-20 rounded-full bg-purple-600/20" />
      </motion.div>
    </section>
  );
} 