"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { Testimonials } from "@/types";
import { TestimonialCard2 } from "./TestimonialCard2";

interface TestimonialCarouselProps {
  testimonials: Testimonials[];
  autoPlayInterval?: number;
}

export function TestimonialCarousel2({
  testimonials,
  autoPlayInterval = 5000,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex + newDirection + testimonials.length) %
          testimonials.length,
      );
    },
    [testimonials.length],
  );

  useEffect(() => {
    if (autoPlayInterval <= 0) return;

    const timer = setInterval(() => {
      paginate(1);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlayInterval, paginate]);

  return (
    <div className="relative mx-auto max-w-5xl">
      {/* Navigation Buttons */}
      <div className="absolute left-0 right-0 top-1/2 z-10 flex -translate-y-1/2 justify-between">
        <button
          onClick={() => paginate(-1)}
          className="group rounded-full bg-white/80 p-3 shadow-lg backdrop-blur transition-all hover:scale-110"
          aria-label="Previous testimonial"
        >
          <ArrowLeft className="h-5 w-5 text-gray-400 transition-colors group-hover:text-purple-600" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="group rounded-full bg-white/80 p-3 shadow-lg backdrop-blur transition-all hover:scale-110"
          aria-label="Next testimonial"
        >
          <ArrowRight className="h-5 w-5 text-gray-400 transition-colors group-hover:text-purple-600" />
        </button>
      </div>

      {/* Testimonial Cards */}
      <div className="relative h-[400px] w-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0"
          >
            <TestimonialCard2 testimonial={testimonials[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="mt-8 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "w-8 bg-purple-600"
                : "w-2 bg-gray-200 hover:bg-purple-200"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
