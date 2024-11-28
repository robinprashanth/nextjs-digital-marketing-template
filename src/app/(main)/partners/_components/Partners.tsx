"use client";
import { FC } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import {
  Shield,
  Award,
  Users,
  ArrowUpRight,
  CheckCircle2,
  Zap,
  Globe,
  BarChart,
  MessageSquare,
  Mail,
} from "lucide-react";
import PartnersHero from "./PartnersHero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScrollInView } from "@/components/motion/ScrollInView";

interface Partner {
  name: string;
  logo: string;
  type: "Technology" | "Agency" | "Platform";
  description: string;
  benefits: string[];
  level: "Gold" | "Platinum" | "Diamond";
  featured?: boolean;
}

const Partners: FC = () => {
  // Sample partners data
  const partners: Partner[] = [
    {
      name: "Google",
      logo: "/images/certifications/google.png",
      type: "Technology",
      description:
        "Premier Google Partner with advanced certification in Search, Display, and Video advertising.",
      benefits: [
        "Advanced API Access",
        "Beta Feature Testing",
        "Dedicated Support Team",
        "Co-marketing Opportunities",
      ],
      level: "Platinum",
      featured: true,
    },
    {
      name: "Meta",
      logo: "/images/certifications/meta.png",
      type: "Platform",
      description:
        "Business Partner specializing in Facebook and Instagram advertising solutions.",
      benefits: [
        "Agency Support",
        "Early Access Features",
        "Performance Insights",
        "Training Resources",
      ],
      level: "Diamond",
      featured: true,
    },
    {
      name: "HubSpot",
      logo: "/images/certifications/hubspot.jpg",
      type: "Platform",
      description:
        "Diamond Solutions Partner providing comprehensive marketing automation services.",
      benefits: [
        "Advanced Integrations",
        "Custom Solutions",
        "Priority Support",
        "Client Discounts",
      ],
      level: "Diamond",
      featured: true,
    },
    {
      name: "Salesforce",
      logo: "/images/partners/salesforce.png",
      type: "Technology",
      description:
        "Certified Salesforce Partner offering CRM and marketing cloud solutions.",
      benefits: [
        "Custom App Development",
        "Integration Expertise",
        "Consulting Services",
        "Training Programs",
      ],
      level: "Gold",
    },
    {
      name: "Adobe",
      logo: "/images/partners/adobe.png",
      type: "Technology",
      description:
        "Solution Partner specializing in Adobe Experience Cloud implementations.",
      benefits: [
        "Creative Cloud Integration",
        "Analytics Solutions",
        "Campaign Management",
        "Technical Support",
      ],
      level: "Platinum",
    },
    {
      name: "Shopify",
      logo: "/images/partners/shopify.png",
      type: "Platform",
      description:
        "Plus Partner providing advanced e-commerce marketing solutions.",
      benefits: [
        "Store Optimization",
        "Custom App Development",
        "Marketing Automation",
        "Analytics Integration",
      ],
      level: "Gold",
    },
  ];

  // Partnership levels data
  const partnershipLevels = [
    {
      name: "Gold Partner",
      description: "Entry-level partnership with basic benefits and support.",
      requirements: [
        "Minimum annual revenue of $500,000",
        "At least 2 certified professionals",
        "Proven track record of success",
        "Client satisfaction score > 90%",
      ],
    },
    {
      name: "Platinum Partner",
      description:
        "Advanced partnership with premium benefits and dedicated support.",
      requirements: [
        "Minimum annual revenue of $1,000,000",
        "At least 5 certified professionals",
        "Case studies and testimonials",
        "Client satisfaction score > 95%",
      ],
    },
    {
      name: "Diamond Partner",
      description:
        "Highest level of partnership with exclusive benefits and strategic collaboration.",
      requirements: [
        "Minimum annual revenue of $2,000,000",
        "At least 10 certified professionals",
        "Industry recognition and awards",
        "Client satisfaction score > 98%",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <PartnersHero />

      {/* Featured Partners */}
      <section className="relative -mt-20 pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {partners
              .filter((partner) => partner.featured)
              .map((partner, index) => (
                <ScrollInView
                delay={index * 0.1}
                  key={partner.name}
                  className="group relative rounded-2xl border border-gray-800 bg-card p-6 transition-all duration-300 hover:border-theme-primary-500/20"
                >
                  {/* Partner Level Badge */}
                  <div className="absolute right-6 top-6 rounded-full bg-theme-primary-500/10 px-3 py-1">
                    <span className="text-sm font-medium text-theme-primary-400">
                      {partner.level} Partner
                    </span>
                  </div>

                  {/* Logo */}
                  <div className="mb-6 flex h-16 items-center">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={150}
                      height={50}
                      className="object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-foreground">
                      {partner.name}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {partner.description}
                    </p>

                    {/* Benefits */}
                    <ul className="space-y-2">
                      {partner.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="h-4 w-4 text-theme-primary-400" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <Button variant="text-link">
                    Learn More
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </ScrollInView>
              ))}
          </div>
        </div>
      </section>

      {/* Partnership Levels */}
      <section className="border-t border-gray-800 bg-card">
        <div className="container mx-auto px-4 py-24 sm:px-6">
          <ScrollInView
            viewport={{ once: true }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <span className="mb-4 inline-block rounded-full bg-theme-primary-500/10 px-4 py-1.5 text-sm font-semibold text-theme-primary-400">
              PARTNERSHIP LEVELS
            </span>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              Choose Your Partnership Journey
            </h2>
            <p className="text-muted-foreground">
              Join our partner ecosystem and unlock exclusive benefits as you
              grow with us.
            </p>
          </ScrollInView>

          <div className="grid gap-8 md:grid-cols-3">
            {partnershipLevels.map((level, index) => (
              <ScrollInView
                key={level.name}
                delay={index * 0.1}
                className="rounded-2xl border border-gray-800 bg-background p-6"
              >
                <div className="mb-6 inline-flex rounded-xl bg-theme-primary-500/10 p-3">
                  <Shield className="h-6 w-6 text-theme-primary-400" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {level.name}
                </h3>
                <p className="mb-6 text-sm text-muted-foreground">
                  {level.description}
                </p>
                <div className="space-y-4">
                  {level.requirements.map((req, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-theme-primary-400" />
                      {req}
                    </div>
                  ))}
                </div>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-24 sm:px-6">
          <ScrollInView
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <span className="mb-4 inline-block rounded-full bg-theme-primary-500/10 px-4 py-1.5 text-sm font-semibold text-theme-primary-400">
              PARTNER BENEFITS
            </span>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              Why Partner With Us?
            </h2>
            <p className="text-muted-foreground">
              Discover the advantages of joining our partner ecosystem.
            </p>
          </ScrollInView>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Growth Acceleration",
                description:
                  "Access new markets and opportunities through our established network.",
              },
              {
                icon: Globe,
                title: "Market Reach",
                description:
                  "Expand your global presence with our international partnerships.",
              },
              {
                icon: Users,
                title: "Expert Support",
                description:
                  "Get dedicated support from our experienced partner success team.",
              },
              {
                icon: BarChart,
                title: "Revenue Growth",
                description:
                  "Unlock new revenue streams through joint ventures and referrals.",
              },
              {
                icon: MessageSquare,
                title: "Knowledge Sharing",
                description:
                  "Access exclusive training, resources, and industry insights.",
              },
              {
                icon: Award,
                title: "Recognition",
                description:
                  "Earn awards and certifications for your expertise and success.",
              },
            ].map((benefit, index) => (
              <ScrollInView
                key={index}
                delay={index * 0.1}
                className="rounded-2xl border border-gray-800 bg-card p-6"
              >
                <div className="mb-4 inline-flex rounded-xl bg-theme-primary-500/10 p-3">
                  <benefit.icon className="h-6 w-6 text-theme-primary-400" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-24 sm:px-6">
          <ScrollInView
            className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-theme-primary-500 to-purple-700 p-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Ready to Become a Partner?
            </h2>
            <p className="mb-8 text-lg text-white/80">
              Join our ecosystem of industry leaders and innovators. Let&apos;s
              create digital success stories together.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <button className="rounded-full bg-white px-8 py-3 text-base font-semibold text-theme-primary-600 transition-all hover:bg-gray-100">
                Apply Now
              </button>
              <Button variant="glass" size="xl">
                <Link href="/contact" className="group">
                  Schedule a Strategy Call
                </Link>
              </Button>
            </div>
          </ScrollInView>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-gray-800 bg-card">
        <div className="container mx-auto px-4 py-24 sm:px-6">
          <ScrollInView
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <span className="mb-4 inline-block rounded-full bg-theme-primary-500/10 px-4 py-1.5 text-sm font-semibold text-theme-primary-400">
              FAQs
            </span>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              Common Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to frequently asked questions about our partnership
              program.
            </p>
          </ScrollInView>

          <div className="mx-auto grid max-w-3xl gap-6">
            {[
              {
                question: "What are the requirements to become a partner?",
                answer:
                  "Partnership requirements vary by level but generally include revenue targets, certified professionals, and proven expertise in digital marketing services.",
              },
              {
                question: "How long does the application process take?",
                answer:
                  "The typical application process takes 2-4 weeks, including evaluation, interviews, and documentation review.",
              },
              {
                question: "What support do partners receive?",
                answer:
                  "Partners receive dedicated support, training resources, marketing materials, lead sharing opportunities, and access to exclusive events.",
              },
              {
                question: "Are there any partnership fees?",
                answer:
                  "Partnership fees vary by level and include access to resources, training, and support services. Contact us for detailed pricing information.",
              },
              {
                question: "How do partners level up?",
                answer:
                  "Partners can advance through levels by meeting performance criteria, expanding certifications, and demonstrating consistent growth.",
              },
            ].map((faq, index) => (
              <ScrollInView
                key={index}
                delay={index * 0.1 }
                className="rounded-2xl border border-gray-800 bg-background p-6"
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

      {/* Contact Section */}
      <section className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-24 sm:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-foreground">
                  Get in Touch
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Have questions about our partnership program? Our team is here
                  to help.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email Us",
                    details: [
                      "partnerships@company.com",
                      "support@company.com",
                    ],
                  },
                  {
                    icon: Users,
                    title: "Partnership Team",
                    details: ["Monday - Friday", "9:00 AM - 6:00 PM EST"],
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-2xl border border-gray-800 bg-card p-6"
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

            {/* Quick Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-800 bg-card p-8"
            >
              <h3 className="mb-6 text-xl font-semibold text-foreground">
                Quick Contact
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-800 bg-background px-4 py-2.5 text-foreground focus:border-theme-primary-500 focus:outline-none focus:ring-1 focus:ring-theme-primary-500"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-gray-800 bg-background px-4 py-2.5 text-foreground focus:border-theme-primary-500 focus:outline-none focus:ring-1 focus:ring-theme-primary-500"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-800 bg-background px-4 py-2.5 text-foreground focus:border-theme-primary-500 focus:outline-none focus:ring-1 focus:ring-theme-primary-500"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg border border-gray-800 bg-background px-4 py-2.5 text-foreground focus:border-theme-primary-500 focus:outline-none focus:ring-1 focus:ring-theme-primary-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-theme-primary-500 px-8 py-3 text-white transition-all hover:bg-theme-primary-600"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Partners;
