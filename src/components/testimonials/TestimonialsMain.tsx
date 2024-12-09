"use client";

import { BackgroundPattern } from "@/components/SVG/TestimonialSVGs";
import { TestimonialCard } from "@/components/TestimonialCard";
import { TestimonialProps } from "@/types";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { FC, useState } from "react";
import { SectionHeading } from "../ui/SectionHeading";

export interface TestimonialSectionProps {
  testimonials: TestimonialProps[];
  companyLogos: string[];
  heading?: {
    label: string;
    title: string;
    description: string;
  };
  className?: string;
}

export const TestimonialsMain: FC<TestimonialSectionProps> = ({
  testimonials,
  companyLogos,
  heading = {
    label: "CLIENT SUCCESS STORIES",
    title: "What Our Clients Say",
    description:
      "Discover how we've helped businesses achieve their digital marketing goals and drive remarkable results.",
  },
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  // Double the logos array for seamless infinite scroll
  const duplicatedLogos = [...companyLogos, ...companyLogos];

  const marqueeVariants = {
    animate: {
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        },
      },
    },
    pause: {
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section
      className={`relative overflow-hidden bg-gray-50 py-24 dark:bg-theme-neutral-900 ${className}`}
    >
      <BackgroundPattern />

      <div className="container relative mx-auto px-4 sm:px-6">
        <SectionHeading
          alignment="center"
          title={[`${heading.label}`]}
          subtitle={`${heading.label}`}
          subtitleColor="rose"
          animated={true}
          paragraph={`${heading.description}`}
        />

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="absolute left-0 right-0 top-1/2 z-10 flex -translate-y-1/2 justify-between px-4">
            <button
              onClick={prevTestimonial}
              className="rounded-full bg-white p-3 shadow-lg transition-all hover:scale-110 dark:bg-theme-neutral-800"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="rounded-full bg-white p-3 shadow-lg transition-all hover:scale-110 dark:bg-theme-neutral-800"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>

          <TestimonialCard {...testimonials[currentIndex]} />

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-6 bg-theme-primary-600"
                    : "w-2 bg-theme-neutral-300 hover:bg-theme-neutral-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Animated Client Logos */}
        <div className="relative mt-16">
          <div className="relative mx-auto max-w-5xl overflow-hidden">
            <motion.div
              className="flex gap-8 opacity-60"
              variants={marqueeVariants}
              animate="animate"
              whileHover="pause"
            >
              {duplicatedLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  className="relative flex h-12 w-40 shrink-0 items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={logo}
                    alt={`Client logo ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
