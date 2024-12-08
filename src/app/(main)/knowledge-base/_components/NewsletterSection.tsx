import { ScrollInView } from "@/components/motion/ScrollInView";
import { FC, useState } from "react";

export const NewsletterSection: FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <section className="border-t border-theme-neutral-800 bg-card">
      <div className="container mx-auto px-4 py-24 sm:px-6">
        <ScrollInView
          useInView={true}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Stay Updated
          </h2>
          <p className="mb-8 text-muted-foreground">
            Subscribe to our newsletter for the latest updates, tutorials, and
            tips.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 rounded-full border border-theme-neutral-800 bg-background px-6 py-3 text-foreground placeholder:text-muted-foreground focus:border-theme-primary-500 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-theme-primary-500 px-8 py-3 font-semibold text-white transition-all hover:bg-theme-primary-600"
            >
              Subscribe
            </button>
          </form>
        </ScrollInView>
      </div>
    </section>
  );
};
