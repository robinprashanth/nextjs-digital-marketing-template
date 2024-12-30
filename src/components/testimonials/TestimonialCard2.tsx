import { Star } from "lucide-react";
import Image from "next/image";
import { Testimonials } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonials;
}

export function TestimonialCard2({ testimonial }: TestimonialCardProps) {
  return (
    <div className="group relative h-full">
      {/* Main card container */}
      <div className="relative h-full overflow-hidden rounded-2xl bg-white/50 p-8 shadow-lg backdrop-blur-sm before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-purple-500/20 before:to-pink-500/20 before:p-[1px] before:blur-sm before:transition-all hover:before:bg-gradient-to-b hover:before:from-purple-500/40 hover:before:to-pink-500/40 sm:p-12">
        {/* Glass effect background */}
        <div className="absolute inset-[1px] rounded-2xl bg-white/80 backdrop-blur-xl" />

        {/* Content wrapper */}
        <div className="relative z-10">
          {/* Company logo */}
          <div className="mb-8">
            <div className="relative h-8 w-24">
              <Image
                src={testimonial.companyLogo}
                alt={testimonial.company}
                fill
                className="object-contain opacity-70 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>
          </div>

          {/* Quote */}
          <div className="mb-12">
            <p className="text-2xl font-light leading-relaxed text-black/80 sm:text-3xl">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
          </div>

          {/* Author info section */}
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-purple-500/20 transition-all group-hover:ring-purple-500/40">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  fill
                  className="object-cover filter transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="space-y-1">
              <h4 className="text-lg font-medium text-black/80 transition-colors duration-300 group-hover:text-purple-600">
                {testimonial.author}
              </h4>
              <p className="text-sm text-black/60">{testimonial.role}</p>
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-purple-500/80 text-purple-500/80 transition-colors duration-300 group-hover:fill-purple-400 group-hover:text-purple-400"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
