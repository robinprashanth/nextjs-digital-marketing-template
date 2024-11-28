"use client";
import React, { FC, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { TestimonialProps } from "@/types";
import {
  BackgroundPattern,
  CompanyLogos,
} from "@/components/SVG/TestimonialSVGs";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ScrollInView } from "@/components/motion/ScrollInView";

const testimonials: TestimonialProps[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    content:
      "Working with this team has been transformative for our digital presence. Their strategic approach and attention to detail resulted in a 200% increase in our online engagement. They're not just service providers; they're growth partners.",
    image: "/assets/profile1.jpg",
    rating: 5,
    companyLogo: <CompanyLogos.TechCorp />,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "Innovate Labs",
    content:
      "The ROI we've seen since partnering with them has been incredible. They took the time to understand our unique challenges and crafted solutions that perfectly aligned with our goals. Their data-driven approach made all the difference.",
    image: "/assets/profile1.jpg",
    rating: 5,
    companyLogo: <CompanyLogos.InnovateLabs />,
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "E-commerce Manager",
    company: "StyleHouse",
    content:
      "Their expertise in digital marketing has been instrumental in our growth. They helped us achieve a 150% increase in online sales through targeted campaigns and optimization. Their team is responsive, creative, and truly cares about our success.",
    image: "/assets/profile1.jpg",
    rating: 5,
    companyLogo: <CompanyLogos.StyleHouse />,
  },
];

export const TestimonialsSection: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  return (
    <section className="relative overflow-hidden bg-gray-50 py-24 dark:bg-gray-900">
      <BackgroundPattern />

      <div className="container relative mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <ScrollInView
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 block bg-gradient-to-r from-theme-primary-600 to-blue-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent">
            CLIENT SUCCESS STORIES
          </span>
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="text-lg text-theme-neutral-600 dark:text-theme-neutral-400">
            Discover how we&apos;ve helped businesses achieve their digital
            marketing goals and drive remarkable results.
          </p>
        </ScrollInView>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute left-0 right-0 top-1/2 z-10 flex -translate-y-1/2 justify-between px-4">
            <button
              onClick={prevTestimonial}
              className="rounded-full bg-white p-3 shadow-lg transition-all hover:scale-110 dark:bg-gray-800"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="rounded-full bg-white p-3 shadow-lg transition-all hover:scale-110 dark:bg-gray-800"
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
                    : "w-2 bg-gray-300 hover:bg-theme-neutral-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <ScrollInView
        delay={0.3}
          className="mt-16 grid grid-cols-2 gap-8 opacity-60 md:grid-cols-4 lg:grid-cols-6"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative flex h-12 items-center justify-center"
            >
              {testimonial.companyLogo}
            </div>
          ))}
        </ScrollInView>
      </div>
    </section>
  );
};
