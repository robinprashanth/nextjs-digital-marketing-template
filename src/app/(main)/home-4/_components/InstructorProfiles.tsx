"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { FadeInStagger } from "@/components/motion/FadeInStagger";
import { FadeInStaggerItem } from "@/components/motion/FadeInStaggerItem";
import { motion } from "framer-motion";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const instructors = [
  {
    name: "Sarah Johnson",
    role: "Web Development",
    experience: "8+ Years Experience",
    image: "/images/homepage4/instructors/instructor-1.jpeg",
    rating: 4.9,
    students: "2.5k",
    courses: 12,
    bgColor: "#4A90E2",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Michael Chen",
    role: "UI/UX Design",
    experience: "6+ Years Experience",
    image: "/images/homepage4/instructors/instructor-2.jpeg",
    rating: 4.8,
    students: "1.8k",
    courses: 8,
    bgColor: "#FF80AB",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Emily Parker",
    role: "Data Science",
    experience: "7+ Years Experience",
    image: "/images/homepage4/instructors/instructor-3.jpeg",
    rating: 4.9,
    students: "3.2k",
    courses: 15,
    bgColor: "#FFD54F",
    social: {
      twitter: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];

export function InstructorProfiles() {
  return (
    <section className="relative py-24">
      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        {/* Header */}
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-6xl font-black tracking-tight">
              MEET OUR EXPERT
            </h2>
            <div className="relative inline-block">
              <span className="relative z-10 px-6 text-4xl font-bold">
                INSTRUCTORS
              </span>
              <motion.div
                className="absolute -inset-2 -z-10 rounded-lg bg-[#90EE90]"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              />
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
              Learn from industry experts who are passionate about teaching
              and helping you achieve your goals.
            </p>
          </div>
        </FadeIn>

        {/* Instructor Cards */}
        <FadeInStagger>
          <div className="grid gap-8 md:grid-cols-3">
            {instructors.map((instructor, i) => (
              <FadeInStaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-[40px]"
                  style={{ backgroundColor: instructor.bgColor }}
                >
                  {/* Main Content */}
                  <div className="relative z-10 p-8">
                    {/* Profile Image */}
                    <div className="mb-6 flex justify-center">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative h-48 w-48"
                      >
                        <div className="aspect-square overflow-hidden rounded-full border-4 border-white/50">
                          <Image
                            src={instructor.image}
                            alt={instructor.name}
                            width={200}
                            height={200}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </motion.div>
                    </div>

                    {/* Info */}
                    <div className="text-center text-white">
                      <h3 className="mb-1 text-2xl font-bold">{instructor.name}</h3>
                      <p className="mb-2 text-white/90">{instructor.role}</p>
                      <p className="mb-4 text-sm text-white/80">{instructor.experience}</p>

                      {/* Stats */}
                      <div className="mb-6 flex justify-center gap-6">
                        <div>
                          <p className="text-2xl font-bold">{instructor.rating}</p>
                          <p className="text-sm text-white/80">Rating</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold">{instructor.students}</p>
                          <p className="text-sm text-white/80">Students</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold">{instructor.courses}</p>
                          <p className="text-sm text-white/80">Courses</p>
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="flex justify-center gap-4">
                        {Object.entries(instructor.social).map(([platform, link]) => (
                          <motion.a
                            key={platform}
                            href={link}
                            whileHover={{ scale: 1.2 }}
                            className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
                          >
                            {platform === 'twitter' && <Twitter size={20} className="text-white" />}
                            {platform === 'facebook' && <Facebook size={20} className="text-white" />}
                            {platform === 'instagram' && <Instagram size={20} className="text-white" />}
                            {platform === 'linkedin' && <Linkedin size={20} className="text-white" />}
                          </motion.a>
                        ))}
                      </div>
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
        className="absolute left-10 top-20"
      >
        <div className="h-20 w-20 rounded-full bg-purple-600/20" />
      </motion.div>
    </section>
  );
} 