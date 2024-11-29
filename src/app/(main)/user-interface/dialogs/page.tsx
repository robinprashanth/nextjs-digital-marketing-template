"use client";

import { FC } from "react";
import { ScrollInView } from "@/components/motion/ScrollInView";
import { Button } from "@/components/ui/button";
import { SubscribeDialog } from "@/components/dialog/SubscribeDialog";
import { ContactDialog } from "@/components/dialog/ContactDialog";

const DialogsPage: FC = () => {
  return (
    <div className="container relative mx-auto px-4 py-24 sm:px-6">
      {/* Page Header */}
      <ScrollInView>
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold">Dialog Components</h1>
          <p className="text-lg text-muted-foreground">
            A collection of reusable dialog components with beautiful animations and modern styling.
          </p>
        </div>
      </ScrollInView>

      {/* Subscribe Dialog Section */}
      <section className="space-y-6">
        <ScrollInView>
          <h2 className="mb-6 text-2xl font-semibold">Subscribe Dialog</h2>
          
          <div className="flex flex-wrap gap-4">
            <SubscribeDialog />
            <SubscribeDialog 
              title="Join Our Newsletter"
              description="Get weekly insights on digital marketing trends."
              trigger={<Button variant="secondary">Custom Subscribe</Button>}
            />
          </div>

          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-medium">Usage</h3>
            <div className="rounded-lg border border-border p-4">
              <pre className="text-sm">
                <code>{`import { SubscribeDialog } from "@/components/dialog";

// Basic usage
<SubscribeDialog />

// With custom props
<SubscribeDialog 
  title="Join Our Newsletter"
  description="Get weekly insights on digital marketing trends."
  trigger={<Button variant="secondary">Custom Subscribe</Button>}
/>`}</code>
              </pre>
            </div>

            <div className="rounded-lg border border-border p-4">
              <h4 className="mb-2 font-medium">Props</h4>
              <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                <li><code className="text-primary">trigger?: React.ReactNode</code> - Custom trigger element</li>
                <li><code className="text-primary">title?: string</code> - Custom dialog title</li>
                <li><code className="text-primary">description?: string</code> - Custom dialog description</li>
              </ul>
            </div>
          </div>
        </ScrollInView>
      </section>

      {/* Contact Dialog Section */}
      <section className="space-y-6">
        <ScrollInView>
          <h2 className="mb-6 text-2xl font-semibold">Contact Dialog</h2>
          
          <div className="flex flex-wrap gap-4">
            <ContactDialog />
            <ContactDialog 
              trigger={<Button variant="secondary">Custom Contact Form</Button>}
            />
          </div>

          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-medium">Usage</h3>
            <div className="rounded-lg border border-border p-4">
              <pre className="text-sm">
                <code>{`import { ContactDialog } from "@/components/dialog";

// Basic usage
<ContactDialog />

// With custom trigger
<ContactDialog 
  trigger={<Button variant="secondary">Custom Contact Form</Button>}
/>`}</code>
              </pre>
            </div>

            <div className="rounded-lg border border-border p-4">
              <h4 className="mb-2 font-medium">Features</h4>
              <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                <li>Responsive form layout</li>
                <li>Input validation</li>
                <li>Loading states</li>
                <li>Success confirmation</li>
                <li>Gradient styling</li>
                <li>Floating icon header</li>
              </ul>
            </div>
          </div>
        </ScrollInView>
      </section>

      {/* Styling Information */}
      <section>
        <ScrollInView>
          <h2 className="mb-6 text-2xl font-semibold">Styling</h2>
          <div className="rounded-lg border border-border p-4">
            <h3 className="mb-4 text-xl font-medium">Common Features</h3>
            <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
              <li>Floating icon headers with gradient backgrounds</li>
              <li>Responsive layouts that work on all screen sizes</li>
              <li>Smooth animations and transitions</li>
              <li>Loading states with spinner animations</li>
              <li>Success states with checkmark animations</li>
              <li>Custom gradient buttons</li>
              <li>Backdrop blur effects</li>
              <li>Form validation and error states</li>
            </ul>
          </div>
        </ScrollInView>
      </section>
    </div>
  );
};

export default DialogsPage;