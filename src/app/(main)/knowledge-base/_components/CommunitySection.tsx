import { Button } from "@/components/ui/button";
import { Check, Users, Video } from "lucide-react";
import { motion } from "motion/react";
import { FC } from "react";

export const CommunitySection: FC = () => (
  <section className="border-t border-theme-neutral-800">
    <div className="container mx-auto px-4 py-24 sm:px-6">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Community Forums */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-theme-neutral-800 bg-card p-8"
        >
          <div className="mb-6 inline-flex rounded-xl bg-theme-primary-500/10 p-3">
            <Users className="h-6 w-6 text-theme-primary-400" />
          </div>
          <h3 className="mb-4 text-2xl font-bold text-foreground">
            Join Our Community
          </h3>
          <p className="mb-6 text-muted-foreground">
            Connect with other users, share experiences, and get help from the
            community.
          </p>
          <ul className="mb-8 space-y-4">
            <li className="flex items-center gap-2 text-muted-foreground">
              <Check className="h-5 w-5 text-theme-primary-400" />
              Access to community forums
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <Check className="h-5 w-5 text-theme-primary-400" />
              Weekly live Q&A sessions
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <Check className="h-5 w-5 text-theme-primary-400" />
              User groups & meetups
            </li>
          </ul>
          <Button variant="action" size="lg-rounded">
            Join Community
          </Button>
        </motion.div>

        {/* Video Tutorials */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-theme-neutral-800 bg-card p-8"
        >
          <div className="mb-6 inline-flex rounded-xl bg-theme-primary-500/10 p-3">
            <Video className="h-6 w-6 text-theme-primary-400" />
          </div>
          <h3 className="mb-4 text-2xl font-bold text-foreground">
            Video Tutorials
          </h3>
          <p className="mb-6 text-muted-foreground">
            Learn through our comprehensive video tutorials and webinars.
          </p>
          <ul className="mb-8 space-y-4">
            <li className="flex items-center gap-2 text-muted-foreground">
              <Check className="h-5 w-5 text-theme-primary-400" />
              Step-by-step guides
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <Check className="h-5 w-5 text-theme-primary-400" />
              Monthly webinars
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <Check className="h-5 w-5 text-theme-primary-400" />
              Expert tutorials
            </li>
          </ul>
          <Button variant="action" size="lg-rounded">
            Watch Tutorials
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);
