"use client";
import React, { FC } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Check, ChevronDown } from "lucide-react";

// Additional Types
interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

interface CaseStudyProps {
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
    change: string;
  }[];
  image: string;
}

interface FAQ {
  question: string;
  answer: string;
}

// FAQ Accordion Component
const FAQItem: FC<FAQ & { isOpen: boolean; toggle: () => void }> = ({
  question,
  answer,
  isOpen,
  toggle,
}) => (
  <div className="border-b border-gray-800">
    <button
      onClick={toggle}
      className="flex w-full items-center justify-between py-6 text-left"
    >
      <span className="text-lg font-medium text-foreground">{question}</span>
      <ChevronDown
        className={`h-5 w-5 text-purple-400 transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    {isOpen && (
      <div className="pb-6">
        <p className="text-muted-foreground">{answer}</p>
      </div>
    )}
  </div>
);

// Pricing Component
export const Pricing: FC<{ tiers: PricingTier[] }> = ({ tiers }) => (
  <section className="border-t border-gray-800 py-24">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-16 max-w-3xl text-center"
      >
        <span className="mb-4 inline-block rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-semibold text-purple-400">
          Pricing
        </span>
        <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
          Simple,{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Transparent
          </span>{" "}
          Pricing
        </h2>
        <p className="text-lg text-muted-foreground">
          Choose the perfect plan for your business needs
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative rounded-2xl border ${
              tier.isPopular
                ? "border-purple-500 shadow-[0_0_30px_2px_rgba(147,51,234,0.1)]"
                : "border-gray-800"
            } bg-card p-8`}
          >
            {tier.isPopular && (
              <div className="absolute -top-4 right-6 rounded-full bg-purple-500 px-4 py-1 text-sm font-medium text-white">
                Most Popular
              </div>
            )}

            <h3 className="text-xl font-semibold text-foreground">
              {tier.name}
            </h3>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold text-foreground">
                {tier.price}
              </span>
              <span className="ml-1 text-muted-foreground">/month</span>
            </div>
            <p className="mt-4 text-muted-foreground">{tier.description}</p>

            <ul className="mt-8 space-y-4">
              {tier.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-purple-400" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`mt-8 w-full rounded-full ${
                tier.isPopular
                  ? "bg-purple-500 text-white hover:bg-purple-600"
                  : "border border-purple-500 text-purple-400 hover:bg-purple-500/10"
              } px-6 py-3 font-medium transition-colors`}
            >
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// Case Studies Component
export const CaseStudies: FC<{ cases: CaseStudyProps[] }> = ({ cases }) => (
  <section className="border-t border-gray-800 py-24">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-16 max-w-3xl text-center"
      >
        <span className="mb-4 inline-block rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-semibold text-purple-400">
          Case Studies
        </span>
        <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
          Client{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Success
          </span>{" "}
          Stories
        </h2>
      </motion.div>

      <div className="grid gap-12">
        {cases.map((study, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-8 rounded-2xl border border-gray-800 bg-card p-8 md:grid-cols-2"
          >
            <div>
              <div className="mb-4 inline-flex rounded-full bg-purple-500/10 px-3 py-1">
                <span className="text-sm font-medium text-purple-400">
                  {study.industry}
                </span>
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-foreground">
                {study.client}
              </h3>

              <div className="mb-6 space-y-4">
                <div>
                  <h4 className="mb-2 font-medium text-foreground">
                    Challenge
                  </h4>
                  <p className="text-muted-foreground">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="mb-2 font-medium text-foreground">Solution</h4>
                  <p className="text-muted-foreground">{study.solution}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {study.results.map((result, idx) => (
                  <div key={idx} className="rounded-xl bg-purple-500/5 p-4">
                    <div className="text-2xl font-bold text-purple-400">
                      {result.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {result.label}
                    </div>
                    <div className="mt-1 text-sm text-green-500">
                      ↑ {result.change}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[400px] overflow-hidden rounded-xl">
              <Image
                src={study.image}
                alt={study.client}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// FAQ Component
export const FAQ: FC<{ faqs: FAQ[] }> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = React.useState<number>(0);

  return (
    <section className="border-t border-gray-800 py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-semibold text-purple-400">
            FAQ
          </span>
          <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
// CTA Component
export const CTA: FC = () => (
  <section className="border-t border-gray-800 py-24">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-purple-500 to-purple-700 p-12 text-center"
      >
        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
          Ready to Transform Your Digital Presence?
        </h2>
        <p className="mb-8 text-lg text-white/80">
          Let&apos;s discuss how we can help you achieve your business goals
          with our expert digital marketing solutions.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="/contact"
            className="rounded-full bg-white px-8 py-3 text-base font-semibold text-purple-600 transition-all hover:bg-gray-100"
          >
            Get Started
          </a>
          <a
            href="/contact"
            className="rounded-full border border-white/30 bg-white/10 px-8 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
          >
            Schedule a Call
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default {
  Pricing,
  CaseStudies,
  FAQ,
  CTA,
};
