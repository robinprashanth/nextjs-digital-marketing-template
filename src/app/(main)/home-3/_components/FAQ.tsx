"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { FadeInStagger } from "@/components/motion/FadeInStagger";
import { FadeInStaggerItem } from "@/components/motion/FadeInStaggerItem";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, HelpCircle, Mail, MessageCircle, Phone } from "lucide-react";

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "How do I download and install the app?",
        answer: "Our app is available on both iOS App Store and Google Play Store. Simply search for our app name, download, and follow the installation prompts. The app requires iOS 13+ or Android 8+.",
      },
      {
        question: "Is there a free trial available?",
        answer: "Yes! We offer a 14-day free trial on all paid plans. You can start with our free plan and upgrade anytime to access premium features.",
      },
      {
        question: "How do I create an account?",
        answer: "You can create an account directly in the app using your email, or sign up with your Google or Apple account for faster access.",
      },
    ],
  },
  {
    category: "Features & Usage",
    questions: [
      {
        question: "Can I use the app offline?",
        answer: "Yes, most features work offline. Your data will automatically sync when you're back online.",
      },
      {
        question: "How secure is my data?",
        answer: "We use industry-standard encryption and security measures. Your data is encrypted both in transit and at rest, and we never share your information with third parties.",
      },
      {
        question: "Can I collaborate with my team?",
        answer: "Team collaboration is available on Pro and Enterprise plans. You can share projects, assign tasks, and communicate in real-time.",
      },
    ],
  },
  {
    category: "Billing & Support",
    questions: [
      {
        question: "How do I change my subscription plan?",
        answer: "You can change your plan anytime from the app settings. If you upgrade, the new features will be available immediately. For downgrades, changes take effect at the end of your billing cycle.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and Apple Pay/Google Pay where available.",
      },
      {
        question: "How can I get help if I'm stuck?",
        answer: "We offer 24/7 support through our in-app chat, email support, and comprehensive knowledge base. Premium users get priority support with faster response times.",
      },
    ],
  },
];

const supportChannels = [
  {
    name: "Live Chat",
    description: "Get instant help from our support team",
    icon: MessageCircle,
    action: "Start Chat",
    href: "#",
  },
  {
    name: "Email Support",
    description: "Send us a message anytime",
    icon: Mail,
    action: "Send Email",
    href: "mailto:support@example.com",
  },
  {
    name: "Phone Support",
    description: "Premium users get priority phone support",
    icon: Phone,
    action: "Call Now",
    href: "tel:+1234567890",
  },
];

export function FAQ() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-background">
      <div className="container relative z-10 px-4 py-24">
        <FadeIn className="text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-theme-primary-500">
            Support
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Need{" "}
            <span className="bg-gradient-to-r from-theme-primary-500 to-theme-secondary-500 bg-clip-text text-transparent">
              help?
            </span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-lg text-muted-foreground">
            Find answers to common questions or reach out to our support team.
          </p>
        </FadeIn>

        <div className="mx-auto max-w-4xl">
          <FadeInStagger>
            {faqs.map((category, i) => (
              <FadeInStaggerItem key={i}>
                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-semibold">
                    {category.category}
                  </h3>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, j) => (
                      <AccordionItem key={j} value={`item-${i}-${j}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>

          {/* Support Channels */}
          <FadeIn>
            <div className="mt-16 rounded-3xl border border-border bg-card p-8">
              <div className="mb-8 text-center">
                <HelpCircle className="mx-auto mb-4 h-12 w-12 text-theme-primary-500" />
                <h3 className="mb-2 text-xl font-semibold">
                  Still need help?
                </h3>
                <p className="text-muted-foreground">
                  Choose how you want to connect with us
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {supportChannels.map((channel, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-border bg-background p-6 transition-colors hover:border-theme-primary-500"
                  >
                    <channel.icon className="mb-4 h-8 w-8 text-theme-primary-500" />
                    <h4 className="mb-1 font-semibold">{channel.name}</h4>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {channel.description}
                    </p>
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full justify-between"
                    >
                      <a href={channel.href}>
                        {channel.action}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
} 