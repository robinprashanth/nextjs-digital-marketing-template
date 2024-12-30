"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { FadeInStagger } from "@/components/motion/FadeInStagger";
import { FadeInStaggerItem } from "@/components/motion/FadeInStaggerItem";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ArrowRight, Clock, HeadphonesIcon, MessageSquare, Users } from "lucide-react";

const supportChannels = [
  {
    name: "24/7 Live Chat",
    description: "Get instant help from our support team",
    responseTime: "< 5 minutes",
    icon: MessageSquare,
    available: true,
  },
  {
    name: "Priority Support",
    description: "Dedicated support for premium users",
    responseTime: "< 1 hour",
    icon: HeadphonesIcon,
    available: true,
  },
  {
    name: "Community Forum",
    description: "Get help from our community",
    responseTime: "< 24 hours",
    icon: Users,
    available: true,
  },
];

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function Support() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle form submission
    console.log(values);
  }

  return (
    <section className="flex min-h-screen items-center justify-center bg-background">
      <div className="container relative z-10 px-4 py-24">
        <FadeIn className="text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-theme-primary-500">
            Support
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            We&apos;re here to{" "}
            <span className="bg-gradient-to-r from-theme-primary-500 to-theme-secondary-500 bg-clip-text text-transparent">
              help
            </span>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-lg text-muted-foreground">
            Get the support you need, when you need it. Our team is available 24/7
            to assist you.
          </p>
        </FadeIn>

        <div className="mx-auto max-w-7xl">
          {/* Support Channels */}
          <FadeInStagger>
            <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {supportChannels.map((channel, i) => (
                <FadeInStaggerItem key={i}>
                  <div className="rounded-3xl border border-border bg-card p-8">
                    <channel.icon className="mb-4 h-8 w-8 text-theme-primary-500" />
                    <h3 className="mb-2 text-xl font-semibold">{channel.name}</h3>
                    <p className="mb-4 text-muted-foreground">
                      {channel.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-theme-primary-500" />
                      <span>Response time: {channel.responseTime}</span>
                    </div>
                  </div>
                </FadeInStaggerItem>
              ))}
            </div>
          </FadeInStagger>

          <div className="grid gap-16 lg:grid-cols-2">
            {/* Help Center */}
            <FadeIn>
              <div className="rounded-3xl border border-border bg-card p-8">
                <h3 className="mb-4 text-2xl font-bold">Help Center</h3>
                <p className="mb-6 text-muted-foreground">
                  Browse our comprehensive knowledge base for detailed guides,
                  tutorials, and FAQs.
                </p>
                <Button
                  className="rounded-full bg-theme-primary-500 text-white hover:bg-theme-primary-600"
                >
                  Visit Help Center
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn>
              <div className="rounded-3xl border border-border bg-card p-8">
                <h3 className="mb-4 text-2xl font-bold">Contact Us</h3>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your@email.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="How can we help?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us more about your issue..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full rounded-full bg-theme-primary-500 text-white hover:bg-theme-primary-600"
                    >
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
} 