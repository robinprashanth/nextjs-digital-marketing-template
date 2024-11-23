import React, { FC } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Star } from "lucide-react";
import { QuoteIcon } from "./SVG/TestimonialSVGs";
import type { TestimonialSectionCardProps } from "@/types";

export const TestimonialCard: FC<TestimonialSectionCardProps> = ({
  name,
  role,
  company,
  content,
  image,
  rating,
  companyLogo,
  isActive = true,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="relative mx-auto max-w-3xl px-4"
  >
    <QuoteIcon />

    <div className="relative z-10 rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800">
      {/* Rating Stars */}
      <div className="mb-4 flex">
        {Array.from({ length: rating }).map((_, index) => (
          <Star
            key={index}
            className="h-5 w-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Testimonial Content */}
      <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        {content}
      </p>

      {/* Author Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white">{name}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {role} at {company}
            </p>
          </div>
        </div>
        {/* Company Logo */}
        {companyLogo && (
          <div className="relative h-8 w-24">
            {/* Check if companyLogo is a React node */}
            {React.isValidElement(companyLogo) ? (
              companyLogo
            ) : (
              <Image
                src={companyLogo as string}
                alt={company}
                fill
                className="object-contain"
              />
            )}
          </div>
        )}
      </div>
    </div>
  </motion.div>
);
