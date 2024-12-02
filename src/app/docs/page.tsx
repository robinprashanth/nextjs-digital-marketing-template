
import { Metadata } from 'next';
import { DocsLayout } from './_components/DocsLayout';
import { 
  Code2, Palette, Search, Smartphone, 
  Zap, Box, Headphones, RefreshCw,
  FileCode2, PuzzleIcon, Lightbulb, BookOpen
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Documentation | Digital Marketing Template',
  description: 'Learn how to use and customize the Digital Marketing template.',
};

const features = [
  {
    icon: FileCode2,
    title: "Built with Next.js, Tailwind CSS and Framer Motion",
    description: "A well structured template that is super easy to customize and play with.",
  },
  {
    icon: Palette,
    title: "Modern, Minimal and Clean Design",
    description: "A modern, minimal and clean design that is tastefully filled with microinteractions to keep your users engaged.",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description: "Optimized for search engines, with a focus on SEO best practices.",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Ensures optimal viewing experience across all devices and screen sizes.",
  },
  {
    icon: Code2,
    title: "TypeScript",
    description: "Built with TypeScript, ensuring type safety and autocomplete for your code.",
  },
  {
    icon: Zap,
    title: "Easy to Deploy and Customize",
    description: "Easily deploy your website to Vercel, Netlify, or any other platform.",
  },
  {
    icon: Headphones,
    title: "Help and Support",
    description: "We have a support chat where you can ask questions and get help from our community or our team directly.",
  },
  {
    icon: RefreshCw,
    title: "Future Updates",
    description: "We regularly update the templates with new features and improvements.",
  },
];

const quickLinks = [
  {
    icon: Box,
    title: "Installation",
    description: "Quick start guide to set up and run the template.",
  },
  {
    icon: PuzzleIcon,
    title: "Components",
    description: "Explore and customize pre-built components.",
  },
  {
    icon: Lightbulb,
    title: "Features",
    description: "Learn about built-in features and capabilities.",
  },
  {
    icon: BookOpen,
    title: "Guides",
    description: "Step-by-step guides for common customizations.",
  },
];

export default function DocsPage() {
  return (
    <DocsLayout>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div>
          <h1 className="text-4xl font-bold mb-6">Digital Marketing Template Documentation</h1>
          <p className="text-xl text-theme-neutral-600 dark:text-theme-neutral-400 mb-12 max-w-3xl">
            Learn how to use and customize our Digital Marketing template to create stunning marketing websites.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid gap-6 md:grid-cols-2 mb-16" >
          {quickLinks.map((item, i) => (
            <div key={i}>
              <div className="group relative rounded-xl border border-theme-neutral-200 dark:border-theme-neutral-800 bg-white dark:bg-theme-neutral-900 p-6 hover:border-theme-primary-500 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-theme-primary-500/10 text-theme-primary-500">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-theme-neutral-900 dark:text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-theme-neutral-600 dark:text-theme-neutral-400">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-8">Features & Benefits</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" >
            {features.map((feature, i) => (
              <div key={i}>
                <div className="h-full rounded-xl border border-theme-neutral-200 dark:border-theme-neutral-800 bg-white dark:bg-theme-neutral-900 p-6">
                  <div className="flex flex-col gap-4">
                    <div className="p-2 w-fit rounded-lg bg-theme-primary-500/10 text-theme-primary-500">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-theme-neutral-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-theme-neutral-600 dark:text-theme-neutral-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}