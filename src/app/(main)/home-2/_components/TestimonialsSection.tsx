import { FadeIn } from "@/components/motion/FadeIn";
import { TestimonialCarousel2 } from "@/components/testimonials/TestimonialCarousel2";
import { Testimonials } from "@/types";

const testimonials: Testimonials[] = [
  {
    quote: "The team's innovative approach...",
    author: "Sarah Chen",
    role: "Chief Technology Officer",
    company: "TechCorp Global",
    image: "/images/testimonials/sarah.jpg",
    companyLogo: "/images/clients/wellness-pro.jpg",
    rating: 5,
  },
  {
    quote: "Their strategic vision...",
    author: "Michael Rodriguez",
    role: "VP of Digital",
    company: "Innovation Labs",
    image: "/images/testimonials/michael.jpg",
    companyLogo: "/images/clients/techcorp.jpg",
    rating: 5,
  },
  {
    quote: "Working with them has been transformative...",
    author: "Emily Zhang",
    role: "Marketing Director",
    company: "Future Systems",
    image: "/images/testimonials/emily.jpg",
    companyLogo: "/images/clients/globaltrade.jpg",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <FadeIn className="mx-auto mb-24 max-w-2xl text-center">
          <span className="mb-4 block font-mono text-sm tracking-wider text-purple-600">
            TESTIMONIALS
          </span>
          <h2 className="mb-6 text-4xl font-bold text-black sm:text-5xl">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600">
            See what our clients say about their experience working with us
          </p>
        </FadeIn>

        <TestimonialCarousel2 testimonials={testimonials} />
      </div>
    </section>
  );
}
