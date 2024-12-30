"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { FadeInStagger } from "@/components/motion/FadeInStagger";
import { FadeInStaggerItem } from "@/components/motion/FadeInStaggerItem";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Calendar, Gift, Sparkles, Timer } from "lucide-react";

const updates = [
  {
    version: "3.2.0",
    date: "March 2024",
    type: "Latest Release",
    badge: "New",
    badgeColor: "bg-theme-primary-500",
    features: [
      "Enhanced biometric authentication with Face ID support",
      "Real-time collaboration features for team workspaces",
      "Dark mode improvements and custom theme options",
      "Performance optimizations for faster load times",
    ],
  },
  {
    version: "3.1.0",
    date: "February 2024",
    type: "Major Update",
    features: [
      "Offline mode with automatic sync",
      "Advanced data encryption for enhanced security",
      "New dashboard widgets and customization options",
      "Improved notification system with smart alerts",
    ],
  },
  {
    version: "3.0.0",
    date: "January 2024",
    type: "Major Release",
    features: [
      "Complete UI redesign for better user experience",
      "Integration with cloud storage providers",
      "Advanced analytics and reporting features",
      "New mobile-first responsive design",
    ],
  },
];

const upcomingFeatures = [
  {
    title: "AI-Powered Insights",
    description: "Smart recommendations and automated workflows based on your usage patterns.",
    icon: Sparkles,
    eta: "Q2 2024",
  },
  {
    title: "Advanced Team Features",
    description: "Enhanced collaboration tools and team management capabilities.",
    icon: Gift,
    eta: "Q3 2024",
  },
  {
    title: "Custom Workflows",
    description: "Build and automate your own workflows with our new automation engine.",
    icon: Timer,
    eta: "Q4 2024",
  },
];

export function Updates() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-background">
      <div className="container relative z-10 px-4 py-24">
        <FadeIn className="text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-theme-primary-500">
            Updates
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Always{" "}
            <span className="bg-gradient-to-r from-theme-primary-500 to-theme-secondary-500 bg-clip-text text-transparent">
              improving
            </span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-lg text-muted-foreground">
            We&apos;re constantly working to make your experience better. Check out our
            latest updates and upcoming features.
          </p>
        </FadeIn>

        <div className="mx-auto max-w-5xl">
          {/* Version History */}
          <FadeInStagger>
            <div className="mb-16 space-y-8">
              {updates.map((update, i) => (
                <FadeInStaggerItem key={i}>
                  <div className="rounded-3xl border border-border bg-card p-8">
                    <div className="mb-6 flex flex-wrap items-center gap-4">
                      <h3 className="text-2xl font-bold">v{update.version}</h3>
                      {update.badge && (
                        <span
                          className={cn(
                            "rounded-full px-3 py-1 text-xs font-medium text-white",
                            update.badgeColor
                          )}
                        >
                          {update.badge}
                        </span>
                      )}
                      <div className="ml-auto flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {update.date}
                      </div>
                    </div>

                    <div className="space-y-4">
                      {update.features.map((feature, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-theme-primary-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeInStaggerItem>
              ))}
            </div>
          </FadeInStagger>

          {/* Upcoming Features */}
          <FadeIn>
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="mb-8 text-center">
                <h3 className="mb-2 text-2xl font-bold">Coming Soon</h3>
                <p className="text-muted-foreground">
                  Here&apos;s what we&apos;re working on next
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {upcomingFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-border bg-background p-6"
                  >
                    <feature.icon className="mb-4 h-8 w-8 text-theme-primary-500" />
                    <h4 className="mb-2 font-semibold">{feature.title}</h4>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Timer className="h-4 w-4" />
                      Expected: {feature.eta}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn className="mt-16 text-center">
            <Button
              size="lg"
              className="rounded-full bg-theme-primary-500 text-white hover:bg-theme-primary-600"
            >
              View Full Changelog
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
} 