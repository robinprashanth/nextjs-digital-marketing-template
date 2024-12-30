"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { FadeInStagger } from "@/components/motion/FadeInStagger";
import { FadeInStaggerItem } from "@/components/motion/FadeInStaggerItem";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "This app has completely transformed how I manage my daily tasks. The interface is intuitive and the features are exactly what I needed.",
    author: "Sarah Chen",
    role: "Freelance Designer",
    image: "/images/testimonials/sarah.jpg",
    rating: 5,
    bgColor: "bg-theme-primary-500/10",
  },
  {
    quote: "The collaboration features are outstanding. My team's productivity has increased significantly since we started using this app.",
    author: "Michael Rodriguez",
    role: "Product Manager",
    image: "/images/testimonials/michael.jpg",
    rating: 5,
    bgColor: "bg-theme-secondary-500/10",
  },
  {
    quote: "Best investment for my small business. The automation features save me hours every week, and the mobile experience is flawless.",
    author: "Emily Zhang",
    role: "Small Business Owner",
    image: "/images/testimonials/emily.jpg",
    rating: 5,
    bgColor: "bg-theme-ocean-500/10",
  },
  {
    quote: "Finally, an app that understands what remote teams need. The real-time collaboration tools are game-changing.",
    author: "David Kim",
    role: "Remote Team Lead",
    image: "/images/testimonials/emily.jpg",
    rating: 5,
    bgColor: "bg-theme-tulip-500/10",
  },
];

export function SocialProofSection() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-background py-24">
      <div className="container relative z-10 px-4">
        <FadeIn className="text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-theme-primary-500">
            Testimonials
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Loved by{" "}
            <span className="bg-gradient-to-r from-theme-primary-500 to-theme-secondary-500 bg-clip-text text-transparent">
              thousands
            </span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-lg text-muted-foreground">
            Join the community of professionals who have transformed their work with our app
          </p>
        </FadeIn>

        <div className="mx-auto max-w-7xl">
          <FadeInStagger>
            <div className="grid gap-8 md:grid-cols-2">
              {testimonials.map((testimonial, i) => (
                <FadeInStaggerItem key={i}>
                  <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 opacity-40 ${testimonial.bgColor}`} />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Quote */}
                      <p className="mb-8 text-lg text-foreground/80">
                      &ldquo;{testimonial.quote}&ldquo;
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center gap-4">
                        {/* Profile Image */}
                        <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-border">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground">
                            {testimonial.author}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>

                        {/* Rating */}
                        <div className="ml-auto flex gap-1">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-5 w-5 fill-theme-primary-500 text-theme-primary-500"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInStaggerItem>
              ))}
            </div>
          </FadeInStagger>

          {/* Stats */}
          <div className="mt-20">
            <FadeIn>
              <div className="mx-auto max-w-4xl grid grid-cols-2 gap-8 rounded-3xl border border-border bg-card p-8 sm:grid-cols-4">
                {[
                  { label: "Active Users", value: "100K+" },
                  { label: "App Rating", value: "4.9/5" },
                  { label: "Reviews", value: "10K+" },
                  { label: "Countries", value: "150+" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
} 