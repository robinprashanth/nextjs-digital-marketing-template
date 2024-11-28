import { FC } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { TestimonialCardProps } from "@/types";

export const TestimonialCard: FC<TestimonialCardProps> = ({
  name,
  role,
  image,
  rating,
  quote,
}) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.5 }}
    className="absolute right-10 top-32 w-64 rounded-2xl border border-white/10 bg-[#1A1A2E] p-6 backdrop-blur-lg"
  >
    <div className="flex items-start gap-4">
      <div className="relative h-12 w-12 overflow-hidden rounded-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="48px"
          priority
        />
      </div>
      <div>
        <div className="font-medium text-white">{name}</div>
        <div className="text-sm text-theme-neutral-400">{role}</div>
        <div className="mt-1 flex items-center gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <div key={i} className="text-theme-sunflower-400">
              ★
            </div>
          ))}
        </div>
      </div>
    </div>
    <p className="mt-3 text-sm text-theme-neutral-300">{quote}</p>
  </motion.div>
);
