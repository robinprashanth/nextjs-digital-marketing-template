import { TestimonialCardProps } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { FC, useState } from "react";

interface TestimonialCarouselProps {
  testimonials: TestimonialCardProps[];
}

export const TestimonialCarousel: FC<TestimonialCarouselProps> = ({
  testimonials,
}) => {
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

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) =>
      newDirection === 1
        ? (prevIndex + 1) % testimonials.length
        : prevIndex - 1 < 0
          ? testimonials.length - 1
          : prevIndex - 1,
    );
  };

  return (
    <div className="absolute right-10 top-32">
      <div className="relative h-[220px] w-64">
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
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute w-64 rounded-2xl border border-white/10 bg-[#1A1A2E] p-6 backdrop-blur-lg"
          >
            <div className="flex items-start gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                  sizes="48px"
                  priority
                />
              </div>
              <div>
                <div className="font-medium text-white">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-sm text-theme-neutral-400">
                  {testimonials[currentIndex].role}
                </div>
                <div className="mt-1 flex items-center gap-1">
                  {Array.from({
                    length: testimonials[currentIndex].rating,
                  }).map((_, i) => (
                    <div key={i} className="text-theme-sunflower-400">
                      ★
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm text-theme-neutral-300">
              {testimonials[currentIndex].quote}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-4">
          <button
            onClick={() => paginate(-1)}
            className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-6 bg-theme-primary-400"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
