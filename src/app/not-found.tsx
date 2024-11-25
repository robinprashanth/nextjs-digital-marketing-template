"use client";
import { FC } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Home, ArrowRight } from "lucide-react";
import { useWindowSize } from "@/hooks/useWindowSize";

const NotFound: FC = () => {
  const { width, height } = useWindowSize();

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8B5CF6,#6366F1)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Animated Circles */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-theme-primary-500/20 blur-3xl"
        />
        <motion.div
          initial={{ scale: 1.2, opacity: 0.5 }}
          animate={{
            scale: [1.2, 0.8, 1.2],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
        {/* Glitch Effect 404 */}
        <div className="relative mb-8 text-[150px] font-bold leading-none text-white md:text-[200px]">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block before:absolute before:left-0.5 before:top-0.5 before:-z-10 before:text-theme-primary-500/50 before:content-['404'] after:absolute after:-left-0.5 after:-top-0.5 after:-z-10 after:text-indigo-500/50 after:content-['404']"
          >
            404
          </motion.span>
        </div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 space-y-4"
        >
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Page Not Found
          </h1>
          <p className="text-lg text-white/80">
            Oops! It seems you&apos;ve ventured into digital space where no page
            exists. Let&apos;s get you back on track.
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href="/"
            className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-theme-primary-600 transition-all hover:bg-gray-100"
          >
            <Home className="h-5 w-5" />
            Back to Home
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <p className="mb-4 text-sm text-white/60">Popular Destinations</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { label: "Case Studies", href: "/case-studies" },
              { label: "About Us", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full bg-white/10 px-4 py-1 text-sm text-white/80 backdrop-blur-sm transition-all hover:bg-white/20"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Animated Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            scale: 0,
            x: Math.random() * width,
            y: Math.random() * height,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: Math.random() * width,
            y: Math.random() * height,
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
          className="absolute h-1 w-1 rounded-full bg-white"
        />
      ))}
    </div>
  );
};

export default NotFound;
