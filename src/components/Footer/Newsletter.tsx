"use client";

import { FC } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { newsletterSchema, type NewsletterFormData } from "@/lib/validation";

export const Newsletter: FC = () => {
  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: NewsletterFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Successfully subscribed to newsletter!", {
        description: `We'll send updates to ${data.email}`,
      });

      form.reset();
    } catch {
      toast.error("Failed to subscribe", {
        description: "Please try again later.",
      });
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent p-8 backdrop-blur-sm">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-20" />

      {/* Content */}
      <div className="relative z-10 space-y-6">
        {/* Header */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-xl font-bold text-transparent"
          >
            Stay Ahead of the Curve
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400"
          >
            Get exclusive digital marketing insights delivered to your inbox
          </motion.p>
        </div>

        {/* Form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="relative space-y-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex gap-3">
                      <div className="relative flex-1">
                        <Input
                          placeholder="Enter your email"
                          className="rounded-full border-purple-500/20 bg-white/5 pr-12 backdrop-blur-sm placeholder:text-gray-500 focus:border-purple-500/40 focus:ring-purple-500/40"
                          {...field}
                        />
                        {/* Email icon or validation status */}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                          {isSubmitting ? (
                            <Loader2 className="h-5 w-5 animate-spin text-purple-500" />
                          ) : form.formState.isValid && field.value ? (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="h-5 w-5 rounded-full bg-green-500/20 p-1"
                            >
                              <div className="h-full w-full rounded-full bg-green-500" />
                            </motion.div>
                          ) : null}
                        </div>
                      </div>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 hover:from-purple-700 hover:to-blue-700"
                      >
                        {isSubmitting ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <>
                            Subscribe
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage className="mt-2 text-sm text-red-400" />
                </FormItem>
              )}
            />
          </form>
        </Form>

        {/* Additional info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xs text-gray-500"
        >
          By subscribing, you agree to our Privacy Policy and consent to receive
          updates.
        </motion.p>
      </div>

      {/* Decorative elements */}
      <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl" />
      <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl" />
    </div>
  );
};
