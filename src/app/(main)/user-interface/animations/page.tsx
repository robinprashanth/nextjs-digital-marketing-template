"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { FadeInStagger } from "@/components/motion/FadeInStagger";
import { FadeInStaggerItem } from "@/components/motion/FadeInStaggerItem";
import { FloatIn } from "@/components/motion/FloatIn";
import { GridPattern } from "@/components/motion/GridPattern";
import { ScaleIn } from "@/components/motion/ScaleIn";
import {
  ScrollInView,
  ScrollInViewStagger,
  ScrollInViewStaggerItem,
} from "@/components/motion/ScrollInView";
import { Button } from "@/components/ui/button";
import { FC } from "react";

const AnimationsPage: FC = () => {
  return (
    <div className="container relative mx-auto px-4 py-24 sm:px-6">
      {/* Page Header */}
      <FadeIn>
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold">Animations</h1>
          <p className="text-lg text-muted-foreground">
            A collection of reusable animation components for creating engaging
            user experiences.
          </p>
        </div>
      </FadeIn>

      {/* Basic Animations */}
      <section className="space-y-8">
        <ScrollInView>
          <h2 className="mb-6 text-2xl font-semibold">Basic Animations</h2>

          {/* FadeIn */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">FadeIn</h3>
            <div className="rounded-lg border border-border p-6">
              <FadeIn className="w-fit">
                <Button>Fade In Button</Button>
              </FadeIn>
            </div>
            <div className="rounded-lg border border-border p-4">
              <pre className="text-sm">
                <code>{`<FadeIn delay={0.2} y={20}>
  <Button>Fade In Button</Button>
</FadeIn>`}</code>
              </pre>
            </div>
          </div>

          {/* ScaleIn */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">ScaleIn</h3>
            <div className="rounded-lg border border-border p-6">
              <ScaleIn className="w-fit">
                <Button variant="secondary">Scale In Button</Button>
              </ScaleIn>
            </div>
            <div className="rounded-lg border border-border p-4">
              <pre className="text-sm">
                <code>{`<ScaleIn delay={0.2} duration={0.5}>
  <Button>Scale In Button</Button>
</ScaleIn>`}</code>
              </pre>
            </div>
          </div>

          {/* FloatIn */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">FloatIn</h3>
            <div className="rounded-lg border border-border p-6">
              <FloatIn y={10} duration={3}>
                <Button variant="outline">Floating Button</Button>
              </FloatIn>
            </div>
            <div className="rounded-lg border border-border p-4">
              <pre className="text-sm">
                <code>{`<FloatIn y={10} duration={3}>
  <Button>Floating Button</Button>
</FloatIn>`}</code>
              </pre>
            </div>
          </div>
        </ScrollInView>
      </section>

      {/* Scroll Animations */}
      <section className="space-y-8">
        <ScrollInView>
          <h2 className="mb-6 text-2xl font-semibold">Scroll Animations</h2>

          {/* ScrollInView */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">ScrollInView</h3>
            <div className="rounded-lg border border-border p-6">
              <div className="h-[200px] overflow-auto p-4">
                <div className="flex h-[400px] items-center justify-center">
                  Scroll down ↓
                </div>
                <ScrollInView useInView className="w-fit">
                  <Button>Revealed on Scroll</Button>
                </ScrollInView>
              </div>
            </div>
            <div className="rounded-lg border border-border p-4">
              <pre className="text-sm">
                <code>{`<ScrollInView useInView y={20}>
  <Button>Revealed on Scroll</Button>
</ScrollInView>`}</code>
              </pre>
            </div>
          </div>
        </ScrollInView>
      </section>

      {/* Stagger Animations */}
      <section className="space-y-8">
        <ScrollInView>
          <h2 className="mb-6 text-2xl font-semibold">Stagger Animations</h2>

          {/* FadeInStagger */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">FadeInStagger</h3>
            <div className="rounded-lg border border-border p-6">
              <FadeInStagger className="flex flex-col gap-2">
                <FadeInStaggerItem>
                  <Button variant="outline">First Item</Button>
                </FadeInStaggerItem>
                <FadeInStaggerItem>
                  <Button variant="outline">Second Item</Button>
                </FadeInStaggerItem>
                <FadeInStaggerItem>
                  <Button variant="outline">Third Item</Button>
                </FadeInStaggerItem>
              </FadeInStagger>
            </div>
            <div className="rounded-lg border border-border p-4">
              <pre className="text-sm">
                <code>{`<FadeInStagger>
  <FadeInStaggerItem>
    <Button>First Item</Button>
  </FadeInStaggerItem>
  {/* More items */}
</FadeInStagger>`}</code>
              </pre>
            </div>
          </div>

          {/* ScrollInViewStagger */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">ScrollInViewStagger</h3>
            <div className="rounded-lg border border-border p-6">
              <div className="h-[200px] overflow-auto p-4">
                <div className="flex h-[400px] items-center justify-center">
                  Scroll down ↓
                </div>
                <ScrollInViewStagger className="flex flex-col gap-2">
                  <ScrollInViewStaggerItem>
                    <Button>First Scroll Item</Button>
                  </ScrollInViewStaggerItem>
                  <ScrollInViewStaggerItem>
                    <Button>Second Scroll Item</Button>
                  </ScrollInViewStaggerItem>
                  <ScrollInViewStaggerItem>
                    <Button>Third Scroll Item</Button>
                  </ScrollInViewStaggerItem>
                </ScrollInViewStagger>
              </div>
            </div>
            <div className="rounded-lg border border-border p-4">
              <pre className="text-sm">
                <code>{`<ScrollInViewStagger>
  <ScrollInViewStaggerItem>
    <Button>First Scroll Item</Button>
  </ScrollInViewStaggerItem>
  {/* More items */}
</ScrollInViewStagger>`}</code>
              </pre>
            </div>
          </div>
        </ScrollInView>
      </section>

      {/* Pattern Animations */}
      <section className="space-y-8">
        <ScrollInView>
          <h2 className="mb-6 text-2xl font-semibold">Pattern Animations</h2>

          <div className="space-y-4">
            <h3 className="text-xl font-medium">GridPattern</h3>
            <div className="rounded-lg border border-border p-6">
              <div className="relative h-48">
                <GridPattern />
                <div className="relative z-10 flex h-full items-center justify-center">
                  Content over pattern
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border p-4">
              <pre className="text-sm">
                <code>{`<div className="relative">
  <GridPattern />
  <div className="relative z-10">
    Content
  </div>
</div>`}</code>
              </pre>
            </div>
          </div>
        </ScrollInView>
      </section>
    </div>
  );
};

export default AnimationsPage;
