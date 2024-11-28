import { Metadata } from "next";
import { Mail, ChevronRight, ExternalLink, Github, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Buttons - UI Components",
  description:
    "A showcase of various button styles and variants using shadcn/ui buttons.",
};

export default function ButtonsPage() {
  return (
    <div className="container relative mx-auto px-4 py-24 sm:px-6">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Button Components
          </h1>
          <p className="mx-auto max-w-[700px] text-theme-neutral-500 dark:text-theme-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A collection of beautiful and functional button components for your
            application.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-5xl py-12">
        {/* Basic Buttons */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Basic Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button>Default Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="mt-4 rounded-lg bg-theme-slate-950 p-4">
            <pre className="text-sm text-theme-neutral-100">
              {`<Button>Default Button</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
            </pre>
          </div>
        </section>

        {/* Gradient Buttons */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Gradient Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="gradient">Gradient</Button>
            <Button variant="premium">Premium</Button>
            <Button variant="submit">Submit</Button>
            <Button variant="cta">Call to Action</Button>
            <Button variant="cta2">CTA Style 2</Button>
          </div>
          <div className="mt-4 rounded-lg bg-theme-slate-950 p-4">
            <pre className="text-sm text-theme-neutral-100">
              {`<Button variant="gradient">Gradient</Button>
<Button variant="premium">Premium</Button>
<Button variant="submit">Submit</Button>
<Button variant="cta">Call to Action</Button>
<Button variant="cta2">CTA Style 2</Button>`}
            </pre>
          </div>
        </section>

        {/* Button Sizes */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Button Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
            <Button size="icon">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-4 rounded-lg bg-theme-slate-950 p-4">
            <pre className="text-sm text-theme-neutral-100">
              {`<Button size="sm">Small</Button>
<Button>Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
<Button size="icon">
  <Plus className="h-4 w-4" />
</Button>`}
            </pre>
          </div>
        </section>

        {/* Buttons with Icons */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Buttons with Icons</h2>
          <div className="flex flex-wrap gap-4">
            <Button>
              <Mail className="mr-2 h-4 w-4" /> Email
            </Button>
            <Button variant="outline">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Button>
            <Button variant="gradient" className="group">
              Next{" "}
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="soft" className="group">
              External <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="mt-4 rounded-lg bg-theme-slate-950 p-4">
            <pre className="text-sm text-theme-neutral-100">
              {`<Button>
  <Mail className="mr-2 h-4 w-4" /> Email
</Button>
<Button variant="outline">
  <Github className="mr-2 h-4 w-4" /> GitHub
</Button>
<Button variant="gradient" className="group">
  Next <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
</Button>
<Button variant="soft" className="group">
  External <ExternalLink className="ml-2 h-4 w-4" />
</Button>`}
            </pre>
          </div>
        </section>

        {/* Action Buttons */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Action Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="action">Action Button</Button>
            <Button variant="white-action">White Action</Button>
            <Button variant="glass">Glass Effect</Button>
            <Button variant="tag">Tag Style</Button>
          </div>
          <div className="mt-4 rounded-lg bg-theme-slate-950 p-4">
            <pre className="text-sm text-theme-neutral-100">
              {`<Button variant="action">Action Button</Button>
<Button variant="white-action">White Action</Button>
<Button variant="glass">Glass Effect</Button>
<Button variant="tag">Tag Style</Button>`}
            </pre>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Usage Examples</h2>
          <div className="rounded-lg bg-theme-slate-950 p-4">
            <pre className="text-sm text-theme-neutral-100">
              {`// Import the button component
import { Button } from "@/components/ui/button"

// Basic usage
<Button>Click me</Button>

// With variants and sizes
<Button variant="gradient" size="lg">
  Large Gradient Button
</Button>

// With icons
<Button>
  <Mail className="mr-2 h-4 w-4" /> 
  Contact Us
</Button>

// With custom className
<Button className="w-full">
  Full Width Button
</Button>

// As a link
<Button asChild>
  <Link href="/about">About Page</Link>
</Button>`}
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}
