"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { FadeInStagger } from "@/components/motion/FadeInStagger";
import { FadeInStaggerItem } from "@/components/motion/FadeInStaggerItem";
import { FloatingShape } from "@/components/motion/FloatingShape";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Mail } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Form Schema
const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

const decorativeShapes = [
  {
    type: "blur",
    color: "bg-theme-primary-400/30",
    size: "w-64 h-64",
    position: "top-20 -right-32",
    delay: 0.2,
  },
  {
    type: "star",
    color: "text-theme-rose-400",
    position: "top-40 left-20",
    delay: 0.4,
  },
  {
    type: "plus",
    color: "text-theme-ocean-400",
    position: "bottom-32 right-48",
    delay: 0.6,
  },
  {
    type: "blur",
    color: "bg-theme-secondary-400/30",
    size: "w-96 h-96",
    position: "-bottom-48 -left-48",
    delay: 0.8,
  },
];

export default function ComingSoon() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // Handle form submission
  };

  const renderShape = (shape: (typeof decorativeShapes)[0]) => {
    let content;
    switch (shape.type) {
      case "blur":
        content = (
          <div
            className={`rounded-full blur-lg ${shape.size} ${shape.color}`}
          />
        );
        break;
      case "star":
        content = <div className={`text-4xl ${shape.color}`}>✦</div>;
        break;
      case "plus":
        content = <div className={`text-3xl ${shape.color}`}>+</div>;
        break;
    }

    return (
      <FloatingShape className={shape.position} delay={shape.delay}>
        {content}
      </FloatingShape>
    );
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[conic-gradient(from_45deg_at_50%_50%,#0B0B1E_0%,#1A1A2E_100%)]">
      {/* Render decorative shapes */}
      {decorativeShapes.map((shape, index) => (
        <React.Fragment key={`${shape.type}-${index}`}>
          {renderShape(shape)}
        </React.Fragment>
      ))}

      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid h-full w-full grid-cols-6 gap-4 p-4">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="rounded-lg bg-white/10" />
          ))}
        </div>
      </div>

      <div className="container relative mx-auto flex min-h-screen items-center px-4 sm:px-6">
        <div className="relative max-w-[90%] py-20 lg:max-w-[60%]">
          <FadeIn className="mb-6 inline-block rounded-full bg-theme-rose-500/10 px-4 py-1 text-sm text-theme-rose-400">
            Coming Soon
          </FadeIn>

          <div className="space-y-4">
            <FadeInStagger delayStep={0.1} initialDelay={0.2}>
              <FadeInStaggerItem>
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                  <span className="text-white">TRANSFORMING</span>
                  <br />
                  <span className="text-theme-primary-400">DIGITAL</span>
                  <br />
                  <span className="scale-105 text-orange-400">LANDSCAPES</span>
                </h1>
              </FadeInStaggerItem>

              <FadeInStaggerItem>
                <p className="mt-8 max-w-xl text-lg text-theme-neutral-400">
                  We&apos;re crafting a new era of digital marketing excellence.
                  Join us on this journey to revolutionize your brand&apos;s
                  digital presence.
                </p>
              </FadeInStaggerItem>

              <FadeInStaggerItem>
                <div className="mt-10">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="flex max-w-md flex-col gap-4 sm:flex-row"
                    >
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input
                                placeholder="Enter your email"
                                {...field}
                                className="h-14 border-white/20 bg-white/10 text-white placeholder:text-white/50"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        size="lg"
                        className="h-14 rounded-full bg-white px-8 text-black hover:bg-theme-neutral-100"
                      >
                        Notify Me <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </Form>
                </div>
              </FadeInStaggerItem>

              <FadeInStaggerItem>
                <div className="mt-8 flex items-center gap-3 text-theme-neutral-400">
                  <Mail className="h-5 w-5" />
                  <span className="text-sm">
                    Get notified when we launch. No spam, just updates.
                  </span>
                </div>
              </FadeInStaggerItem>
            </FadeInStagger>
          </div>
        </div>
      </div>
    </div>
  );
}
