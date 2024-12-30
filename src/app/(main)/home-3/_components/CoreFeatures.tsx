"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { FadeInStagger } from "@/components/motion/FadeInStagger";
import { FadeInStaggerItem } from "@/components/motion/FadeInStaggerItem";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { 
  ArrowRight, 
  Fingerprint, 
  Bell, 
  Zap, 
  Shield 
} from "lucide-react";

const features = [
  {
    title: "Biometric Security",
    description: "Secure your data with advanced fingerprint and face recognition authentication.",
    icon: Fingerprint,
    image: "/images/app/features/biometric.jpeg",
    gradient: "from-theme-primary-500/10 to-theme-secondary-500/10",
  },
  {
    title: "Smart Notifications",
    description: "Stay updated with intelligent push notifications and real-time alerts.",
    icon: Bell,
    image: "/images/app/features/notifications.jpeg",
    gradient: "from-theme-ocean-500/10 to-theme-tulip-500/10",
  },
  {
    title: "Offline Mode",
    description: "Work seamlessly offline with automatic sync when connection is restored.",
    icon: Zap,
    image: "/images/app/features/offline.jpeg",
    gradient: "from-theme-secondary-500/10 to-theme-ocean-500/10",
  },
  {
    title: "Data Protection",
    description: "End-to-end encryption and secure cloud backup for your sensitive information.",
    icon: Shield,
    image: "/images/app/features/security.jpeg",
    gradient: "from-theme-tulip-500/10 to-theme-indigo-500/10",
  },
];

export function CoreFeatures() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#FEF1E7] py-24">
      <div className="container relative z-10 px-4 py-24">
        <FadeIn className="text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-theme-primary-500">
            Core Features
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Built for{" "}
            <span className="bg-gradient-to-r from-theme-primary-500 to-theme-secondary-500 bg-clip-text text-transparent">
              mobile-first
            </span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-lg text-muted-foreground">
            Advanced features that make your mobile experience seamless and secure.
            Available for iOS and Android.
          </p>
        </FadeIn>

        <div className="mx-auto max-w-7xl">
          <FadeInStagger>
            <div className="grid gap-8 lg:grid-cols-2">
              {features.map((feature, i) => (
                <FadeInStaggerItem key={i}>
                  <div className="group relative overflow-hidden rounded-3xl border border-border bg-card">
                    {/* Feature Content */}
                    <div className="relative z-10 flex items-start gap-4 p-8">
                      <div className={cn(
                        "rounded-2xl p-3",
                        "bg-gradient-to-br",
                        feature.gradient
                      )}>
                        <feature.icon className="h-6 w-6 text-theme-primary-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2 text-xl font-semibold">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Feature Image - Mobile Screenshot */}
                    <div className="relative mx-auto w-2/3 p-8">
                      <div className="aspect-[9/16] overflow-hidden rounded-[2.5rem] border-[8px] border-border bg-card ring-1 ring-border">
                        <div className="relative h-full w-full">
                          <Image
                            src={feature.image}
                            alt={feature.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInStaggerItem>
              ))}
            </div>
          </FadeInStagger>

          {/* CTA */}
          <FadeIn className="mt-16 text-center">
            <Button 
              size="lg"
              className="rounded-full bg-theme-primary-500 text-white hover:bg-theme-primary-600"
            >
              Download App
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
} 