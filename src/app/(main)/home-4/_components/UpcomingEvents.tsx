"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, Video } from "lucide-react";

const events = [
  {
    title: "Advanced Web Development Workshop",
    type: "Workshop",
    date: "March 15, 2024",
    time: "2:00 PM - 4:00 PM",
    instructor: "Sarah Johnson",
    attendees: 45,
    bgColor: "#4A90E2",
    icon: <Video className="h-6 w-6" />,
  },
  {
    title: "UI/UX Design Principles Webinar",
    type: "Webinar",
    date: "March 18, 2024",
    time: "1:00 PM - 3:00 PM",
    instructor: "Michael Chen",
    attendees: 120,
    bgColor: "#FF80AB",
    icon: <Video className="h-6 w-6" />,
  },
  {
    title: "Data Science Expert Session",
    type: "Expert Session",
    date: "March 20, 2024",
    time: "11:00 AM - 12:30 PM",
    instructor: "Emily Parker",
    attendees: 75,
    bgColor: "#7E57C2",
    icon: <Video className="h-6 w-6" />,
  },
];

export function UpcomingEvents() {
  return (
    <section className="relative py-24">
      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        {/* Header */}
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-6xl font-black tracking-tight">
              UPCOMING
            </h2>
            <div className="relative inline-block">
              <span className="relative z-10 px-6 text-4xl font-bold">
                LIVE EVENTS
              </span>
              <motion.div
                className="absolute -inset-2 -z-10 rounded-lg bg-[#90EE90]"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              />
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
              Join our live sessions with industry experts and enhance your learning experience
            </p>
          </div>
        </FadeIn>

        {/* Events Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[32px] p-1"
              style={{ backgroundColor: event.bgColor }}
            >
              <div className="relative rounded-[28px] bg-white p-6">
                {/* Event Type Badge */}
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1">
                  {event.icon}
                  <span className="text-sm font-medium">{event.type}</span>
                </div>

                {/* Event Details */}
                <h3 className="mb-4 text-xl font-bold">{event.title}</h3>
                
                <div className="mb-6 space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-5 w-5" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-5 w-5" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="h-5 w-5" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>

                {/* Register Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="w-full rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
                >
                  Register Now
                </motion.button>

                {/* Decorative Elements */}
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-current opacity-10" />
                <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-current opacity-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Calendar View Button */}
        <FadeIn>
          <div className="mt-12 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 rounded-full bg-theme-primary-500 px-8 py-4 font-semibold text-white transition-colors hover:bg-theme-primary-600"
            >
              <Calendar className="h-5 w-5" />
              View Full Calendar
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