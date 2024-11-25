import {
  BarChart,
  Settings,
  Shield,
  Terminal,
  MessageSquare,
  Users,
  Rocket,
  Target,
  TrendingUp,
} from "lucide-react";
import type { MegaMenuSection, NavLink, NavSection } from "@/types";

export const features: NavSection[] = [
  {
    title: "Analytics",
    items: [
      {
        title: "Performance Metrics",
        href: "analytics/performance-metrics",
        description: "Track and analyze your marketing performance",
        icon: BarChart,
      },
      {
        title: "Campaign Management",
        href: "/",
        description: "Manage all your campaigns in one place",
        icon: Target,
      },
      {
        title: "ROI Tracking",
        href: "/",
        description: "Monitor and optimize your return on investment",
        icon: TrendingUp,
      },
    ],
  },
  {
    title: "Automation",
    items: [
      {
        title: "Workflow Builder",
        href: "automation/workflow-builder",
        description: "Create automated marketing workflows",
        icon: Settings,
      },
      {
        title: "Integration Hub",
        href: "/",
        description: "Connect with your favorite tools",
        icon: Terminal,
      },
      {
        title: "Security",
        href: "/",
        description: "Enterprise-grade security features",
        icon: Shield,
      },
    ],
  },
  {
    title: "Collaboration",
    items: [
      {
        title: "Team Tools",
        href: "/collaboration/team-tools",
        description: "Tools for team collaboration",
        icon: Users,
      },
      {
        title: "Communication",
        href: "/",
        description: "Built-in team communication tools",
        icon: MessageSquare,
      },
      {
        title: "Growth Tools",
        href: "/",
        description: "Tools to accelerate your growth",
        icon: Rocket,
      },
    ],
  },
];

export const services: NavLink[] = [
  {
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    description: "Comprehensive digital marketing solutions",
  },
  {
    title: "SEO Optimization",
    href: "/services/seo",
    description: "Search engine optimization services",
  },
  {
    title: "Content Strategy",
    href: "/services/content-strategy",
    description: "Content creation and strategy services",
  },
  {
    title: "Social Media",
    href: "/services/social-media",
    description: "Social media management and growth",
  },
  {
    title: "Performance Marketing",
    href: "/services/performance-marketing",
    description: "Data-driven campaign optimization",
  },
  {
    title: "Email Marketing",
    href: "/services/email-marketing",
    description: "Strategic email campaign management",
  },
];

export const more: NavLink[] = [
  {
    title: "Case Studies",
    href: "/case-studies",
    description: "Success Case Studies",
  },
  {
    title: "Knowledge Base",
    href: "/knowledge-base",
    description: "Knowledge base",
  },
  {
    title: "Blog",
    href: "/Blog",
    description: "Blog Content",
  },
];

export const moreMenuSections: MegaMenuSection[] = [
  {
    title: "Main Pages",
    items: [
      {
        title: "Case Studies",
        href: "/case-studies",
        description: "Success stories and results",
      },
      {
        title: "Blog",
        href: "/blog",
        description: "Latest insights and updates",
      },
      {
        title: "Knowledge Base",
        href: "/knowledge-base",
        description: "Guides and documentation",
      },
      {
        title: "FAQs",
        href: "/faqs",
        description: "Frequently asked questions",
        badge: "new",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Documentation",
        href: "/docs",
        description: "API and integration guides",
      },
      {
        title: "Resources",
        href: "/resources",
        description: "Downloads and templates",
      },
      {
        title: "Partners",
        href: "/partners",
        description: "Partner ecosystem",
        badge: "new",
      },
    ],
  },
  {
    title: "UI Components",
    items: [
      {
        title: "Buttons",
        href: "/user-interface/buttons",
        description: "Interactive button styles and variants",
        badge: "new",
      },
      {
        title: "Cards",
        href: "/user-interface/cards",
        description: "Versatile card components and layouts",
        badge: "new",
      },
      {
        title: "Animations",
        href: "/user-interface/animations",
        description: "Motion and transition effects",
        badge: "new",
      },
    ],
  },
  {
    title: "Company",
    items: [
      {
        title: "Careers",
        href: "/careers",
        description: "Join our team",
        badge: "hiring",
      },
      {
        title: "Press",
        href: "/press",
        description: "News and media",
      },
      {
        title: "Terms",
        href: "/terms",
        description: "Terms and conditions",
      },
    ],
  },
] as const;
