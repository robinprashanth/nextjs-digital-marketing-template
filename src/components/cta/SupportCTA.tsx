"use client";

import { ScrollInView } from "@/components/motion/ScrollInView";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare } from "lucide-react";
import { FC } from "react";

interface SupportCTAProps {
  className?: string;
  chatHref?: string;
  contactHref?: string;
  title?: string;
  description?: string;
}

export const SupportCTA: FC<SupportCTAProps> = ({
  className = "",
  chatHref = "/chat",
  contactHref = "/contact",
  title = "Still have questions?",
  description = "Can't find the answer you're looking for? Please chat to our friendly team.",
}) => {
  return (
    <ScrollInView
      className={`mx-auto mt-24 max-w-3xl rounded-2xl bg-gradient-to-r from-theme-primary-500 to-theme-primary-600 p-8 text-center ${className}`}
    >
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <p className="mt-2 text-white/80">{description}</p>
      <div className="mt-6 flex items-center justify-center gap-4">
        <Button variant="secondary" size="xl" asChild>
          <a href={chatHref}>
            <MessageSquare className="h-5 w-5" />
            Start Live Chat
          </a>
        </Button>
        <Button variant="glass" size="xl" asChild>
          <a href={contactHref}>
            <Mail className="h-5 w-5" />
            Contact Support
          </a>
        </Button>
      </div>
    </ScrollInView>
  );
};
