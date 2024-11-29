"use client";

import { FC, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare } from "lucide-react";

interface ContactDialogProps {
  trigger?: React.ReactNode;
}

export const ContactDialog: FC<ContactDialogProps> = ({ trigger }) => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Add your contact form logic here
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSent(true);
    setLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" className="gap-2">
            <MessageSquare className="h-4 w-4" /> Contact Us
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 transform">
          <div className="rounded-full bg-gradient-to-r from-theme-primary-500 to-purple-700 p-3">
            <MessageSquare className="h-6 w-6 text-white" />
          </div>
        </div>
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">Get in Touch</DialogTitle>
          <DialogDescription className="text-center">
            Have a question or project in mind? Let&apos;s discuss how we can help.
          </DialogDescription>
        </DialogHeader>
        {!sent ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Input placeholder="Name" required className="h-12 bg-muted" />
              </div>
              <div>
                <Input type="email" placeholder="Email" required className="h-12 bg-muted" />
              </div>
            </div>
            <div>
              <Input placeholder="Subject" required className="h-12 bg-muted" />
            </div>
            <div>
              <Textarea
                placeholder="Your message"
                required
                className="min-h-[120px] bg-muted"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-theme-primary-500 to-purple-700 text-white"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-r-transparent" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        ) : (
          <div className="space-y-4 py-6 text-center">
            <div className="mx-auto w-fit rounded-full bg-theme-tulip-500/10 p-3">
              <svg
                className="h-6 w-6 text-theme-tulip-500"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <h3 className="mb-1 text-lg font-semibold">Message Sent!</h3>
              <p className="text-muted-foreground">
                We&apos;ll get back to you as soon as possible.
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};