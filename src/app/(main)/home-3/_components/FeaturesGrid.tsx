"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { FadeInStagger } from "@/components/motion/FadeInStagger";
import { FadeInStaggerItem } from "@/components/motion/FadeInStaggerItem";
import { cn } from "@/lib/utils";
import { 
  MessageSquare, 
  Calendar, 
  Bell, 
  ArrowRight,
  Users,
  Shield,
} from "lucide-react";

const features = [
  {
    title: "Smart Messaging",
    description: "Chat with your team in real-time. Share files, create group chats, and never miss important conversations.",
    icon: MessageSquare,
    gradient: "from-theme-primary-500/10 via-theme-primary-500/5 to-transparent",
    iconColor: "text-theme-primary-500",
  },
  {
    title: "Task Planning",
    description: "Plan your day with an intuitive calendar. Set reminders and organize tasks with drag-and-drop simplicity.",
    icon: Calendar,
    gradient: "from-theme-secondary-500/10 via-theme-secondary-500/5 to-transparent",
    iconColor: "text-theme-secondary-500",
  },
  {
    title: "Smart Notifications",
    description: "Stay updated with intelligent notifications. Customize alerts for what matters most to you.",
    icon: Bell,
    gradient: "from-theme-ocean-500/10 via-theme-ocean-500/5 to-transparent",
    iconColor: "text-theme-ocean-500",
  },
  {
    title: "Team Collaboration",
    description: "Work together seamlessly with shared workspaces, task assignments, and progress tracking.",
    icon: Users,
    gradient: "from-theme-tulip-500/10 via-theme-tulip-500/5 to-transparent",
    iconColor: "text-theme-tulip-500",
  },
  {
    title: "Secure Data",
    description: "Your data is protected with enterprise-grade security. End-to-end encryption and regular backups.",
    icon: Shield,
    gradient: "from-theme-indigo-500/10 via-theme-indigo-500/5 to-transparent",
    iconColor: "text-theme-indigo-500",
  },
];

export function FeaturesGrid() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-background py-24">
      <div className="container relative z-10 px-4">
        <FadeIn className="text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-theme-primary-500">
            App Features
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Designed for{" "}
            <span className="bg-gradient-to-r from-theme-primary-500 to-theme-secondary-500 bg-clip-text text-transparent">
              productivity
            </span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-lg text-muted-foreground">
            Everything you need to stay organized, focused, and get more done,
            right at your fingertips.
          </p>
        </FadeIn>

        <FadeInStagger>
          <div className="mx-auto max-w-5xl grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <FadeInStaggerItem key={i}>
                <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg">
                  {/* Gradient Background */}
                  <div className={cn(
                    "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                    "bg-gradient-to-br",
                    feature.gradient
                  )} />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="mb-8 flex items-center justify-between">
                      <div className={cn(
                        "rounded-2xl bg-background p-3",
                        "shadow-sm transition-colors duration-300",
                        "group-hover:bg-white"
                      )}>
                        <feature.icon className={cn(
                          "h-6 w-6",
                          feature.iconColor
                        )} />
                      </div>
                      <ArrowRight className={cn(
                        "h-5 w-5 opacity-0 transition-all duration-300",
                        "group-hover:opacity-100 group-hover:translate-x-0",
                        "-translate-x-4",
                        feature.iconColor
                      )} />
                    </div>

                    <h3 className="mb-3 text-xl font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </FadeInStaggerItem>
            ))}
          </div>
        </FadeInStagger>
      </div>
    </section>
  );
} 