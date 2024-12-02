"use client";

import { FC } from "react";
import { motion } from "motion/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollInView } from "@/components/motion/ScrollInView";
import { ContactFormData, contactFormPageSchema } from "@/lib/validation";

const Contact: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormPageSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);
    console.log(data);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSuccess(true);
      reset();
    } catch {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    "Digital Marketing",
    "SEO",
    "Social Media",
    "Content Marketing",
    "PPC Advertising",
    "Email Marketing",
  ];

  const budgetOptions = [
    { value: "<10k", label: "Less than $10,000" },
    { value: "10k-25k", label: "$10,000 - $25,000" },
    { value: "25k-50k", label: "$25,000 - $50,000" },
    { value: "50k+", label: "$50,000+" },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[linear-gradient(45deg,#8A6FF9,#6B4FD9)]">
        <div className="container relative mx-auto px-4 py-24 sm:px-6">
          <ScrollInView
            className="mx-auto max-w-3xl text-center"
          >
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
              GET IN TOUCH
            </span>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Let&apos;s Start Your Digital
              <br />
              Success Story
            </h1>
            <p className="text-lg text-white/80">
              Ready to transform your digital presence? We&apos;re here to help
              you achieve your business goals.
            </p>
          </ScrollInView>
        </div>

        {/* Wave Divider */}
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 200"
            className="fill-background"
          >
            <path
              fillOpacity="1"
              d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative -mt-20 pb-24">
        <div className="container mx-auto px-4 pt-28 sm:px-6 md:pt-0">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground">
                  Have a project in mind? Let&apos;s discuss how we can help you
                  achieve your digital marketing goals.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Call Us",
                    details: ["+1 (555) 123-4567", "+1 (555) 765-4321"],
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    details: [
                      "info@digitalagency.com",
                      "support@digitalagency.com",
                    ],
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    details: ["123 Digital Avenue", "Tech City, TC 12345"],
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    details: [
                      "Monday - Friday: 9:00 AM - 6:00 PM",
                      "Weekend: Closed",
                    ],
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-2xl border border-theme-neutral-800 bg-card p-6 transition-all duration-300 hover:border-theme-primary-500/20"
                  >
                    <div className="rounded-xl bg-theme-primary-500/10 p-3">
                      <item.icon className="h-6 w-6 text-theme-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">
                        {item.title}
                      </h3>
                      {item.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className="mt-1 text-sm text-muted-foreground"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl border border-theme-neutral-800 bg-card p-8"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Your Name
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    className="w-full rounded-lg border border-theme-neutral-800 bg-background px-4 py-2.5 text-foreground focus:border-theme-primary-500 focus:outline-none focus:ring-1 focus:ring-theme-primary-500"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-theme-rose-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Email Address
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full rounded-lg border border-theme-neutral-800 bg-background px-4 py-2.5 text-foreground focus:border-theme-primary-500 focus:outline-none focus:ring-1 focus:ring-theme-primary-500"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-theme-rose-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Phone Number
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    className="w-full rounded-lg border border-theme-neutral-800 bg-background px-4 py-2.5 text-foreground focus:border-theme-primary-500 focus:outline-none focus:ring-1 focus:ring-theme-primary-500"
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-theme-rose-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Company Field */}
                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Company Name (Optional)
                  </label>
                  <input
                    {...register("company")}
                    type="text"
                    className="w-full rounded-lg border border-theme-neutral-800 bg-background px-4 py-2.5 text-foreground focus:border-theme-primary-500 focus:outline-none focus:ring-1 focus:ring-theme-primary-500"
                    placeholder="Your Company"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Subject
                  </label>
                  <input
                    {...register("subject")}
                    type="text"
                    className="w-full rounded-lg border border-theme-neutral-800 bg-background px-4 py-2.5 text-foreground focus:border-theme-primary-500 focus:outline-none focus:ring-1 focus:ring-theme-primary-500"
                    placeholder="How can we help?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-theme-rose-500">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Services Field */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Services Interested In
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((service) => (
                      <label key={service} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          value={service}
                          {...register("services")}
                          className="rounded border-theme-neutral-800 bg-background text-theme-primary-500 focus:ring-theme-primary-500"
                        />
                        <span className="text-sm text-muted-foreground">
                          {service}
                        </span>
                      </label>
                    ))}
                  </div>
                  {errors.services && (
                    <p className="mt-1 text-sm text-theme-rose-500">
                      {errors.services.message}
                    </p>
                  )}
                </div>

                {/* Budget Field */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Budget Range
                  </label>
                  <select
                    {...register("budget")}
                    className="w-full rounded-lg border border-theme-neutral-800 bg-background px-4 py-2.5 text-foreground focus:border-theme-primary-500 focus:outline-none focus:ring-1 focus:ring-theme-primary-500"
                  >
                    <option value="">Select a budget range</option>
                    {budgetOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p className="mt-1 text-sm text-theme-rose-500">
                      {errors.budget.message}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Your Message
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full rounded-lg border border-theme-neutral-800 bg-background px-4 py-2.5 text-foreground focus:border-theme-primary-500 focus:outline-none focus:ring-1 focus:ring-theme-primary-500"
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-theme-rose-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Success/Error Messages */}
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg bg-theme-tulip-500/10 p-4"
                  >
                    <div className="flex items-center gap-2 text-theme-tulip-500">
                      <CheckCircle2 className="h-5 w-5" />
                      <p className="text-sm font-medium">
                        Your message has been sent successfully! We&apos;ll get
                        back to you soon.
                      </p>
                    </div>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg bg-theme-rose-500/10 p-4"
                  >
                    <div className="flex items-center gap-2 text-theme-rose-500">
                      <AlertCircle className="h-5 w-5" />
                      <p className="text-sm font-medium">{error}</p>
                    </div>
                  </motion.div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="action"
                  size="lg"
                  disabled={isSubmitting}
                  className="relative w-full rounded-lg bg-theme-primary-500 px-8 py-3 text-white transition-all hover:bg-theme-primary-600 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span
                    className={`flex items-center justify-center gap-2 ${
                      isSubmitting ? "invisible" : ""
                    }`}
                  >
                    <Send className="h-5 w-5" />
                    Send Message
                  </span>
                  {isSubmitting && (
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    </div>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="border-t border-theme-neutral-800">
        <div className="container mx-auto px-4 py-24 sm:px-6">
          <ScrollInView
          useInView={true}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Visit Our Office
            </h2>
            <p className="text-muted-foreground">
              Come by and say hello at our office headquarters.
            </p>
          </ScrollInView>

          <ScrollInView
            className="relative aspect-video overflow-hidden rounded-2xl border border-theme-neutral-800"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926!3d48.8583736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1644027036840!5m2!1sen!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale"
            />
          </ScrollInView>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-theme-neutral-800 bg-card">
        <div className="container mx-auto px-4 py-24 sm:px-6">
          <ScrollInView
          useInView={true}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Have questions? We&apos;ve got answers.
            </p>
          </ScrollInView>

          <div className="mx-auto grid max-w-3xl gap-6">
            {[
              {
                question: "What is your typical response time?",
                answer:
                  "We aim to respond to all inquiries within 24 hours during business days. For urgent matters, you can reach us by phone.",
              },
              {
                question: "Do you offer customized solutions?",
                answer:
                  "Yes, we tailor our digital marketing strategies to meet your specific business needs and objectives.",
              },
              {
                question: "What is your minimum project budget?",
                answer:
                  "Our minimum project budget starts at $5,000, but we can discuss flexible options based on your needs.",
              },
              {
                question: "Do you sign NDAs?",
                answer:
                  "Yes, we&apos;re happy to sign NDAs to protect your confidential information and project details.",
              },
            ].map((faq, index) => (
              <ScrollInView
              useInView={true}
                key={index}
                delay={index * 0.1}
                className="rounded-2xl border border-theme-neutral-800 bg-background p-6"
              >
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
