"use client";

import { FC } from "react";
import { ScrollInView } from "@/components/motion/ScrollInView";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ColorSampleProps {
  label: string;
  color: string;
  className?: string;
}

const ColorSample: FC<ColorSampleProps> = ({ label, color, className }) => (
  <div className="flex flex-col gap-2">
    <div className={cn(
      "h-16 w-full rounded-lg border border-border",
      className
    )} />
    <div className="flex justify-between text-sm">
      <span className="font-medium">{label}</span>
      <span className="font-mono text-muted-foreground">{color}</span>
    </div>
  </div>
);

const ColorGradientExample: FC<{ className: string; title: string }> = ({ className, title }) => (
  <Button 
    className={cn(
      "w-full text-white",
      className
    )}
  >
    {title}
  </Button>
);

const ColorsPage: FC = () => {
  return (
    <div className="container relative mx-auto px-4 py-24 sm:px-6">
      {/* Page Header */}
      <ScrollInView>
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold">Colors</h1>
          <p className="text-lg text-muted-foreground">
            A comprehensive guide to the color system used throughout the application.
          </p>
        </div>
      </ScrollInView>

      {/* Theme Primary Colors */}
      <section className="space-y-6">
        <ScrollInView>
          <h2 className="mb-6 text-2xl font-semibold">Primary Theme (Purple)</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <ColorSample 
              label="Primary 300" 
              color="var(--theme-primary-300)"
              className="bg-theme-primary-300" 
            />
            <ColorSample 
              label="Primary 400" 
              color="var(--theme-primary-400)"
              className="bg-theme-primary-400" 
            />
            <ColorSample 
              label="Primary 500" 
              color="var(--theme-primary-500)"
              className="bg-theme-primary-500" 
            />
            <ColorSample 
              label="Primary 600" 
              color="var(--theme-primary-600)"
              className="bg-theme-primary-600" 
            />
            <ColorSample 
              label="Primary 700" 
              color="var(--theme-primary-700)"
              className="bg-theme-primary-700" 
            />
          </div>
        </ScrollInView>
      </section>

      {/* Secondary Colors (Orange) */}
      <section className="space-y-6">
        <ScrollInView>
          <h2 className="mb-6 text-2xl font-semibold">Secondary Theme (Orange)</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <ColorSample 
              label="Secondary 300" 
              color="var(--theme-secondary-300)"
              className="bg-theme-secondary-300" 
            />
            <ColorSample 
              label="Secondary 400" 
              color="var(--theme-secondary-400)"
              className="bg-theme-secondary-400" 
            />
            <ColorSample 
              label="Secondary 500" 
              color="var(--theme-secondary-500)"
              className="bg-theme-secondary-500" 
            />
            <ColorSample 
              label="Secondary 600" 
              color="var(--theme-secondary-600)"
              className="bg-theme-secondary-600" 
            />
          </div>
        </ScrollInView>
      </section>

      {/* Accent Colors */}
      <section className="space-y-6">
        <ScrollInView>
          <h2 className="mb-6 text-2xl font-semibold">Accent Colors</h2>
          <div className="grid gap-8">
            {/* Sunflower */}
            <div>
              <h3 className="mb-4 text-xl font-medium">Sunflower (Yellow)</h3>
              <div className="grid gap-4 sm:grid-cols-3">
                {[400, 500, 600].map((weight) => (
                  <ColorSample 
                    key={weight}
                    label={`Sunflower ${weight}`} 
                    color={`-theme-sunflower-${weight}`}
                    className={`bg-theme-sunflower-${weight}`} 
                  />
                ))}
              </div>
            </div>

            {/* Tulip */}
            <div>
              <h3 className="mb-4 text-xl font-medium">Tulip (Green)</h3>
              <div className="grid gap-4 sm:grid-cols-3">
                {[400, 500, 600].map((weight) => (
                  <ColorSample 
                    key={weight}
                    label={`Tulip ${weight}`} 
                    color={`var(--theme-tulip-${weight})`}
                    className={`bg-theme-tulip-${weight}`} 
                  />
                ))}
              </div>
            </div>

            {/* Ocean */}
            <div>
              <h3 className="mb-4 text-xl font-medium">Ocean (Blue)</h3>
              <div className="grid gap-4 sm:grid-cols-4">
                {[400, 500, 600, 700].map((weight) => (
                  <ColorSample 
                    key={weight}
                    label={`Ocean ${weight}`} 
                    color={`var(--theme-ocean-${weight})`}
                    className={`bg-theme-ocean-${weight}`} 
                  />
                ))}
              </div>
            </div>

            {/* Rose */}
            <div>
              <h3 className="mb-4 text-xl font-medium">Rose</h3>
              <div className="grid gap-4 sm:grid-cols-4">
                {[300, 400, 500, 600].map((weight) => (
                  <ColorSample 
                    key={weight}
                    label={`Rose ${weight}`} 
                    color={`var(--theme-rose-${weight})`}
                    className={`bg-theme-rose-${weight}`} 
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollInView>
      </section>

      {/* Neutral Colors */}
      <section className="space-y-6">
        <ScrollInView>
          <h2 className="mb-6 text-2xl font-semibold">Neutral Colors</h2>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight) => (
              <ColorSample 
                key={weight}
                label={`Neutral ${weight}`} 
                color={`var(--theme-neutral-${weight})`}
                className={`bg-theme-neutral-${weight}`} 
              />
            ))}
          </div>
        </ScrollInView>
      </section>

      {/* Gradients */}
      <section className="space-y-6">
        <ScrollInView>
          <h2 className="mb-6 text-2xl font-semibold">Gradients</h2>
          <div className="grid gap-6">
            <div>
              <h3 className="mb-4 text-xl font-medium">Pre-defined Gradients</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <ColorGradientExample 
                  className="bg-gradient-primary"
                  title="Primary Gradient"
                />
                <ColorGradientExample 
                  className="bg-gradient-dark"
                  title="Dark Gradient"
                />
                <ColorGradientExample 
                  className="bg-gradient-pop"
                  title="Pop Gradient"
                />
                <ColorGradientExample 
                  className="pop-gradient"
                  title="Theme Gradient"
                />
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-medium">Text Gradients</h3>
              <div className="space-y-4">
                <p className="text-3xl font-bold">
                  <span className="text-gradient-primary">Primary Gradient Text</span>
                </p>
                <p className="text-3xl font-bold">
                  <span className="text-gradient-pop">Pop Gradient Text</span>
                </p>
                <p className="text-3xl font-bold">
                  <span className="gradient-text">Theme Gradient Text</span>
                </p>
              </div>
            </div>
          </div>
        </ScrollInView>
      </section>

      {/* Usage Examples */}
      <section className="space-y-6">
        <ScrollInView>
          <h2 className="mb-6 text-2xl font-semibold">Usage Examples</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="pop-card">
              <h3 className="mb-4 text-xl font-medium">Pop Card</h3>
              <p className="text-muted-foreground">Example of card with hover effects and border.</p>
            </div>
            <div className="pop-card pop-gradient text-white">
              <h3 className="mb-4 text-xl font-medium">Gradient Card</h3>
              <p className="text-white/80">Card with gradient background.</p>
            </div>
          </div>
        </ScrollInView>
      </section>
    </div>
  );
};

export default ColorsPage;