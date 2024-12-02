"use client";

import React, { FC, useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { ScrollInView } from "@/components/motion/ScrollInView";

interface AnimatedTestimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
  companyLogo?: React.ReactNode;
}

const testimonials: AnimatedTestimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    content: "Working with this team has been transformative for our digital presence. Their strategic approach and attention to detail resulted in a 200% increase in our online engagement.",
    image: "/assets/profile1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "Innovate Labs",
    content: "The ROI we've seen since partnering with them has been incredible. They took the time to understand our unique challenges and crafted solutions that perfectly aligned with our goals.",
    image: "/assets/profile2.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "James Rodriguez",
    role: "Product Lead",
    company: "Future Tech",
    content: "Their innovative approach to problem-solving and dedication to excellence has made them an invaluable partner. The results speak for themselves - our user engagement has doubled.",
    image: "/assets/profile4.jpg",
    rating: 5,
  },
];

export const AnimatedTestimonialSection: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-theme-neutral-900/10 py-24">
      <div className="container mx-auto px-4">
        <ScrollInView useInView={true} className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-foreground">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">Discover why leading companies choose to work with us</p>
        </ScrollInView>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 right-4 top-1/2 z-10 flex -translate-y-1/2 justify-between">
            <button
              onClick={prevTestimonial}
              className="rounded-full bg-background p-2 shadow-lg transition-all hover:bg-theme-primary-500/10 hover:text-theme-primary-400"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="rounded-full bg-background p-2 shadow-lg transition-all hover:bg-theme-primary-500/10 hover:text-theme-primary-400"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="relative">
                <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                  {testimonials[activeIndex].content}
                </p>

                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full ring-4 ring-theme-primary-500/20">
                    <Image
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="text-center">
                    <h4 className="font-semibold text-foreground">{testimonials[activeIndex].name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                    </p>
                  </div>

                  <div className="flex gap-1">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-theme-primary-400 text-theme-primary-400" />
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-theme-primary-400"
                    : "w-2 bg-theme-primary-400/20 hover:bg-theme-primary-400/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedTestimonialSection;
