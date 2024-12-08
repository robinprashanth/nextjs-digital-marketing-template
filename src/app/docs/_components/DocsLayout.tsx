"use client"

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface DocsLayoutProps {
  children: React.ReactNode;
}

const sidebarItems = [
  {
    title: 'Getting Started',
    items: [
      { href: '/docs', title: 'Introduction' },
      { href: '/docs/installation', title: 'Installation' },
      { href: '/docs/configuration', title: 'Configuration' },
      { href: '/docs/theming', title: 'Theme' },
      { href: '/docs/api-routes', title: 'API' },
    ],
  },
  {
    title: 'Components',
    items: [
      { href: '/docs/hero', title: 'Hero Section' },
      { href: '/docs/header', title: 'Header' },
      { href: '/docs/footer', title: 'Footer' },
      { href: '/docs/blog', title: 'Blog' },
      { href: '/docs/cta', title: 'CTAs' },
      { href: '/docs/testimonials', title: 'Testimonials' },
      { href: '/docs/headings', title: 'Headings' },
      { href: '/docs/contact-form', title: 'Contact Form' },
    ],
  },
  {
    title: 'Features',
    items: [
      { href: '/docs/animations', title: 'Animations' },
      { href: '/docs/seo', title: 'SEO' },
    ],
  },
  {
    title: 'Guides',
    items: [
      { href: '/docs/deployment', title: 'Deployment' }
    ],
  },
];

const DocsSidebar = () => {
  const pathname = usePathname();

  return (
    <ScrollArea className="h-screen py-6 pl-4 pr-6">
      <div className="space-y-6">
        {sidebarItems.map((section, i) => (
          <div key={i} className="space-y-2">
            <h4 className="font-medium text-sm text-theme-neutral-500">
              {section.title}
            </h4>
            <div className="space-y-1">
              {section.items.map((item, j) => (
                <Link key={j} href={item.href}>
                  <Button
                    variant="ghost"
                    className={cn(
                      'w-full justify-start text-sm font-normal',
                      pathname === item.href
                        ? 'bg-theme-primary-500/10 text-theme-primary-500'
                        : 'text-theme-neutral-600 hover:text-theme-primary-500'
                    )}
                  >
                    {item.title}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen">
      {/* Mobile Sidebar */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] p-0">
            <DocsSidebar />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <aside className="fixed top-0 left-0 hidden h-screen w-[240px] border-r border-border bg-background md:block">
        <DocsSidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-0 md:ml-[240px]">
        <div className="container max-w-3xl py-6 mx-auto">
          <div className="space-y-2">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}