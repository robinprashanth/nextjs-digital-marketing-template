"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { FadeInStagger } from "@/components/motion/FadeInStagger";
import { FadeInStaggerItem } from "@/components/motion/FadeInStaggerItem";
import Image from "next/image";
import { QrCode, Star, Download, Users } from "lucide-react";
import { AppStoreButton, PlayStoreButton } from "@/components/SVG/StoreButtons";

const stats = [
  { label: "Downloads", value: "1M+", icon: Download },
  { label: "Active Users", value: "500K+", icon: Users },
  { label: "App Rating", value: "4.8", icon: Star },
];

const storeButtons = [
  {
    name: "App Store",
    component: AppStoreButton,
    link: "#",
  },
  {
    name: "Play Store",
    component: PlayStoreButton,
    link: "#",
  },
];

export function AppDownload() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-background">
      <div className="container relative z-10 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            {/* Left Column - Content */}
            <FadeIn className="flex flex-col justify-center">
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-theme-primary-500">
                Download Now
              </span>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Get Started{" "}
                <span className="bg-gradient-to-r from-theme-primary-500 to-theme-secondary-500 bg-clip-text text-transparent">
                  Today
                </span>
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Join millions of users who trust our app for their daily tasks.
                Available on iOS and Android devices.
              </p>

              {/* Stats */}
              <div className="mb-8 grid grid-cols-3 gap-4">
                {stats.map((stat, i) => (
                  <FadeInStaggerItem key={i}>
                    <div className="text-center">
                      <div className="mb-2 flex justify-center">
                        <stat.icon className="h-6 w-6 text-theme-primary-500" />
                      </div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  </FadeInStaggerItem>
                ))}
              </div>

              {/* Store Buttons */}
              <FadeInStagger>
                <div className="mb-8 flex flex-wrap gap-4">
                  {storeButtons.map((button, i) => (
                    <FadeInStaggerItem key={i}>
                      <a
                        href={button.link}
                        className="transition-transform hover:scale-105"
                      >
                        <button.component />
                      </a>
                    </FadeInStaggerItem>
                  ))}
                </div>
              </FadeInStagger>

              {/* QR Code */}
              <FadeIn>
                <div className="flex items-center gap-6 rounded-2xl border border-border bg-card p-6">
                  <div className="relative h-24 w-24 overflow-hidden rounded-xl bg-white p-2">
                    <QrCode className="h-full w-full text-foreground" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Quick Download</h3>
                    <p className="text-sm text-muted-foreground">
                      Scan the QR code to download the app directly to your device
                    </p>
                  </div>
                </div>
              </FadeIn>
            </FadeIn>

            {/* Right Column - Phone Mockup */}
            <FadeIn className="relative mx-auto w-full max-w-[320px] lg:max-w-none">
              <div className="relative aspect-[9/16] w-full">
                <div className="absolute inset-0">
                  {/* Phone Frame */}
                  <div className="relative h-full w-full overflow-hidden rounded-[3rem] border-[12px] border-border bg-card ring-1 ring-border">
                    {/* App Screenshot */}
                    <Image
                      src="/images/app/installation.jpeg"
                      alt="App Installation"
                      fill
                      className="object-cover"
                    />
                    {/* Installation Progress Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                      <div className="text-center text-white">
                        <div className="mb-4 h-16 w-16 animate-pulse rounded-2xl bg-theme-primary-500" />
                        <div className="text-lg font-semibold">Installing...</div>
                        <div className="text-sm opacity-80">Almost there</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
} 