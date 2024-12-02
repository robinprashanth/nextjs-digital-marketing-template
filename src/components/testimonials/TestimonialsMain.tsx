"use client";
import React, { FC, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ScrollInView } from "@/components/motion/ScrollInView";
import { BackgroundPattern } from "@/components/SVG/TestimonialSVGs";
import { TestimonialProps } from "@/types";
import Image from "next/image";

export interface TestimonialSectionProps {
  testimonials: TestimonialProps[];
  heading?: {
    label: string;
    title: string;
    description: string;
  };
  className?: string;
 }
 
 export const TestimonialsMain: FC<TestimonialSectionProps> = ({ 
  testimonials,
  heading = {
    label: "CLIENT SUCCESS STORIES",
    title: "What Our Clients Say",
    description: "Discover how we've helped businesses achieve their digital marketing goals and drive remarkable results."
  },
  className = ""
 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
 
  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
 
  return (
    <section className={`relative overflow-hidden bg-gray-50 py-24 dark:bg-theme-neutral-900 ${className}`}>
      <BackgroundPattern />
 
      <div className="container relative mx-auto px-4 sm:px-6">
        <ScrollInView useInView={true} className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 block bg-gradient-to-r from-theme-primary-600 to-theme-ocean-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent">
            {heading.label}
          </span>
          <h2 className="mb-6 text-3xl font-bold text-theme-neutral-900 dark:text-white md:text-5xl">
            {heading.title}
          </h2>
          <p className="text-lg text-theme-neutral-600 dark:text-theme-neutral-400">
            {heading.description}
          </p>
        </ScrollInView>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
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

          {/* Testimonial Cards */}
          <TestimonialCard {...testimonials[currentIndex]} />

          {/* Navigation Dots */}
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

        {/* Client Logos */}
        <ScrollInView
 useInView={true}
 delay={0.3}
 className="mt-16 grid grid-cols-2 gap-8 opacity-60 md:grid-cols-4 lg:grid-cols-6"
>
 {testimonials.map((testimonial) => (
   <div
     key={testimonial.id}
     className="relative flex h-12 w-full items-center justify-center"
   >
     <Image
       src={testimonial.companyLogo}
       alt={`${testimonial.company} logo`}
       fill
       className="object-contain"
     />
   </div>
 ))}
</ScrollInView>
      </div>
    </section>
  );
};
