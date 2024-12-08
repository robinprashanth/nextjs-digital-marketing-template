"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { FC, useState } from "react";

interface SubscribeDialogProps {
  trigger?: React.ReactNode;
  title?: string;
  description?: string;
}

export const SubscribeDialog: FC<SubscribeDialogProps> = ({
  trigger,
  title = "Stay Ahead of the Curve",
  description = "Subscribe to our newsletter for the latest digital marketing insights delivered to your inbox.",
}) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Add your subscription logic here
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubscribed(true);
    setLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" className="gap-2">
            <Mail className="h-4 w-4" /> Subscribe
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 transform">
          <div className="rounded-full bg-gradient-to-r from-theme-primary-500 to-theme-ocean-500 p-3">
            <Mail className="h-6 w-6 text-white" />
          </div>
        </div>
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            {title}
          </DialogTitle>
          <DialogDescription className="text-center">
            {description}
          </DialogDescription>
        </DialogHeader>
        {!subscribed ? (
          <form onSubmit={handleSubscribe} className="space-y-4">
            <div className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-muted pl-12"
                required
              />
              <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-muted-foreground" />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-theme-primary-500 to-theme-ocean-500 text-white"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-r-transparent" />
                  Subscribing...
                </>
              ) : (
                "Subscribe Now"
              )}
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates.
            </p>
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
              <h3 className="mb-1 text-lg font-semibold">
                Thanks for subscribing!
              </h3>
              <p className="text-muted-foreground">
                Check your email to confirm your subscription.
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
