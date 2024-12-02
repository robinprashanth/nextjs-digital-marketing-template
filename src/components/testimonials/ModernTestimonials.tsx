"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

const ModernTestimonials = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  const paginate = (newDirection: number) => {
    setIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    setDisplayText('');
    let i = 0;
    const text = testimonials[index].quote;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [index, testimonials]);

  const variants = {
    enter: {
      scale: 0.2,
      opacity: 0,
      zIndex: 0,
    },
    center: {
      scale: 1,
      opacity: 1,
      zIndex: 1,
      transition: { duration: 0.4 }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      zIndex: 0,
    }
  };

  return (
    <div className="container  mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          <div className="relative h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <Image
                  src={testimonials[index].src}
                  alt={testimonials[index].name}
                  width={400}
                  height={400}
                  className="h-full w-full rounded-2xl object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <motion.p className="text-lg text-gray-700 dark:text-gray-300">
              <span className="min-h-[150px]">{displayText}</span>
            </motion.p>
            
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-2"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {testimonials[index].name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {testimonials[index].designation}
              </p>
            </motion.div>

            <div className="flex gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => paginate(-1)}
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-purple-600 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => paginate(1)}
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-purple-600 hover:text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ModernTestimonials;