import { ScrollInView } from "@/components/motion/ScrollInView";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FC } from "react";

const ButtonsPage: FC = () => {
  return (
    <div className="container relative mx-auto px-4 py-24 sm:px-6">
      {/* Page Header */}
      <ScrollInView>
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold">Buttons</h1>
          <p className="text-lg text-muted-foreground">
            A collection of button components used throughout the application.
          </p>
        </div>
      </ScrollInView>

      {/* Button Variants */}
      <section className="space-y-6">
        <ScrollInView>
          <h2 className="text-xl font-semibold">Button Variants</h2>
          <div className="mt-4 flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="action">Action</Button>
            <Button variant="white-action">White Action</Button>
            <Button variant="cta">CTA</Button>
            <Button variant="cta2">CTA 2</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="glass">Glass</Button>
          </div>

          <div className="mt-6 rounded-lg border border-border p-4">
            <pre className="text-sm">
              <code>{`<Button variant="default">Default</Button>
<Button variant="action">Action</Button>
<Button variant="white-action">White Action</Button>
<Button variant="cta">CTA</Button>
<Button variant="cta2">CTA 2</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="outline">Outline</Button>
<Button variant="glass">Glass</Button>`}</code>
            </pre>
          </div>
        </ScrollInView>
      </section>

      {/* Button Sizes */}
      <section className="space-y-6">
        <ScrollInView>
          <h2 className="text-xl font-semibold">Button Sizes</h2>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
            <Button size="fluid">Fluid</Button>
          </div>

          <div className="mt-6 rounded-lg border border-border p-4">
            <pre className="text-sm">
              <code>{`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
<Button size="fluid">Fluid</Button>`}</code>
            </pre>
          </div>
        </ScrollInView>
      </section>

      {/* Button States */}
      <section className="space-y-6">
        <ScrollInView>
          <h2 className="text-xl font-semibold">Button States</h2>
          <div className="mt-4 flex flex-wrap gap-4">
            <Button>Normal</Button>
            <Button disabled>Disabled</Button>
          </div>

          <div className="mt-6 rounded-lg border border-border p-4">
            <pre className="text-sm">
              <code>{`<Button>Normal</Button>
<Button disabled>Disabled</Button>
<Button loading>Loading</Button>`}</code>
            </pre>
          </div>
        </ScrollInView>
      </section>

      {/* Button with Icons */}
      <section className="space-y-6">
        <ScrollInView>
          <h2 className="text-xl font-semibold">Button with Icons</h2>
          <div className="mt-4 flex flex-wrap gap-4">
            <Button>
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button>
              <ArrowRight className="mr-2 h-4 w-4" /> Previous
            </Button>
          </div>

          <div className="mt-6 rounded-lg border border-border p-4">
            <pre className="text-sm">
              <code>{`<Button>
  Next <ArrowRight className="ml-2 h-4 w-4" />
</Button>
<Button>
  <ArrowRight className="mr-2 h-4 w-4" /> Previous
</Button>`}</code>
            </pre>
          </div>
        </ScrollInView>
      </section>
    </div>
  );
};

export default ButtonsPage;
