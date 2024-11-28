"use client";
import { FC } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Home, ArrowRight } from "lucide-react";
import { useWindowSize } from "@/hooks/useWindowSize";
import { FadeInStaggerItem } from "@/components/motion/FadeInStaggerItem";
import { FadeInStagger } from "@/components/motion/FadeInStagger";

// Quick links data
const quickLinks = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

// Background Circle component for reusability
const BackgroundCircle: FC<{
  className: string;
  initialScale: number;
  delay?: number;
}> = ({ className, initialScale, delay = 0 }) => (
  <motion.div
    initial={{ scale: initialScale, opacity: 0.5 }}
    animate={{
      scale: [initialScale, initialScale < 1 ? 1.2 : 0.8, initialScale],
      opacity: [0.5, 0.8, 0.5],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
    className={className}
  />
);

// Particle component
const Particle: FC<{ width: number; height: number; index: number }> = ({
  width,
  height,
}) => (
  <motion.div
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
    className="absolute h-1 w-1 rounded-full bg-white/80"
  />
);

const NotFound: FC = () => {
  const { width, height } = useWindowSize();

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8B5CF6,#6366F1)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />

      {/* Animated Background Circles */}
      <div className="absolute inset-0">
        <BackgroundCircle
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-theme-primary-500/20 blur-3xl"
          initialScale={0.8}
        />
        <BackgroundCircle
          className="absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"
          initialScale={1.2}
          delay={0.5}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
        <FadeInStagger delayStep={0.1} initialDelay={0.1}>
          {/* Glitch Effect 404 */}
          <FadeInStaggerItem>
            <div className="relative mb-8 text-[150px] font-bold leading-none text-white md:text-[200px]">
              <span className="relative inline-block animate-pulse before:absolute before:left-0.5 before:top-0.5 before:-z-10 before:text-theme-primary-500/50 before:content-['404'] after:absolute after:-left-0.5 after:-top-0.5 after:-z-10 after:text-indigo-500/50 after:content-['404']">
                404
              </span>
            </div>
          </FadeInStaggerItem>

          {/* Message */}
          <FadeInStaggerItem className="mb-8 space-y-4">
            <h1 className="text-3xl font-bold text-white md:text-4xl">
              Page Not Found
            </h1>
            <p className="text-lg text-white/80">
              Oops! It seems you&apos;ve ventured into digital space where no page
              exists. Let&apos;s get you back on track.
            </p>
          </FadeInStaggerItem>

          {/* Actions */}
          <FadeInStaggerItem className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-theme-primary-600 transition-all hover:bg-gray-100 hover:shadow-lg"
            >
              <Home className="h-5 w-5" />
              Back to Home
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeInStaggerItem>

          {/* Quick Links */}
          <FadeInStaggerItem className="mt-12">
            <p className="mb-4 text-sm text-white/60">Popular Destinations</p>
            <div className="flex flex-wrap justify-center gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-full bg-white/10 px-4 py-1 text-sm text-white/80 backdrop-blur-sm transition-all hover:bg-white/20 hover:shadow-lg"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </FadeInStaggerItem>
        </FadeInStagger>
      </div>

      {/* Animated Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Particle key={i} width={width} height={height} index={i} />
      ))}
    </div>
  );
};

export default NotFound;