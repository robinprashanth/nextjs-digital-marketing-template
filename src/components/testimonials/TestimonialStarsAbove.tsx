import { Star } from "lucide-react";
import Image from "next/image";
import { ScrollInView } from "../motion/ScrollInView";

export type TestimonialStars = {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
};
export type Testimonials = {
  delay: number;
  testimonial: TestimonialStars;
};

const TestimonialStarsAbove = ({ testimonial, delay }: Testimonials) => {
  return (
    <ScrollInView
      useInView={true}
      delay={delay * 0.1}
      className="rounded-2xl border border-theme-neutral-800 bg-background p-6"
    >
      <div className="mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="inline-block h-5 w-5 fill-theme-primary-400 text-theme-primary-400"
          />
        ))}
      </div>
      <p className="mb-6 text-muted-foreground">
        &ldquo;{testimonial.quote}&ldquo;
      </p>
      <div className="flex items-center gap-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <Image
            src={testimonial.image}
            alt={`${testimonial.author} - ${testimonial.role}`}
            fill
            className="object-cover"
            sizes="(max-width: 48px) 100vw, 48px"
          />
        </div>
        <div>
          <div className="font-medium text-foreground">
            {testimonial.author}
          </div>
          <div className="text-sm text-muted-foreground">
            {testimonial.role}, {testimonial.company}
          </div>
        </div>
      </div>
    </ScrollInView>
  );
};

export default TestimonialStarsAbove;
