"use client";
import { FC } from "react";
import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { ContactForm } from "./Contact/ContactForm";
import { ScrollInView } from "@/components/motion/ScrollInView";

const ContactInfo = () => (
  <div className="space-y-6">
    <div className="flex items-center gap-4">
      <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/30">
        <Phone className="h-6 w-6 text-theme-primary-600" />
      </div>
      <div>
        <h3 className="font-semibold text-theme-neutral-900 dark:text-white">Phone</h3>
        <p className="text-theme-neutral-600 dark:text-theme-neutral-400">+1 (555) 000-0000</p>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/30">
        <Mail className="h-6 w-6 text-theme-primary-600" />
      </div>
      <div>
        <h3 className="font-semibold text-theme-neutral-900 dark:text-white">Email</h3>
        <p className="text-theme-neutral-600 dark:text-theme-neutral-400">
          contact@youragency.com
        </p>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/30">
        <MapPin className="h-6 w-6 text-theme-primary-600" />
      </div>
      <div>
        <h3 className="font-semibold text-theme-neutral-900 dark:text-white">Address</h3>
        <p className="text-theme-neutral-600 dark:text-theme-neutral-400">
          123 Marketing St, Digital City, DC 12345
        </p>
      </div>
    </div>

    <div className="mt-8 border-t border-theme-neutral-200 pt-8 dark:border-theme-neutral-700">
      <h3 className="mb-4 font-semibold text-theme-neutral-900 dark:text-white">
        Follow Us
      </h3>
      <div className="flex gap-4">
        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
          <a
            key={index}
            href="#"
            className="rounded-full bg-theme-neutral-100 p-3 text-theme-neutral-600 transition-colors hover:bg-purple-100 hover:text-theme-primary-600 dark:bg-theme-neutral-800 dark:text-theme-neutral-400 dark:hover:bg-purple-900/30 dark:hover:text-theme-primary-400"
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    </div>
  </div>
);

export const ContactSection: FC = () => {
  return (
    <section className="bg-gray-50 py-24 dark:bg-theme-neutral-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <ScrollInView
        useInView={true}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 block bg-gradient-to-r from-theme-primary-600 to-theme-ocean-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent">
            GET IN TOUCH
          </span>
          <h2 className="mb-6 text-3xl font-bold text-theme-neutral-900 dark:text-white md:text-5xl">
            Let&apos;s Discuss Your Project
          </h2>
          <p className="text-lg text-theme-neutral-600 dark:text-theme-neutral-400">
            We&apos;re here to help you grow your business. Tell us about your
            project, and we&apos;ll get back to you with a customized solution.
          </p>
        </ScrollInView>

        {/* Contact Grid */}
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-theme-neutral-800 md:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ContactInfo />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
