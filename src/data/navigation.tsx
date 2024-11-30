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
        href: "/analytics/performance-metrics",
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
  }
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
      },
      {
        title: "Blog (Classic)",
        href: "/blog/theme-1/technical-seo-guide2",
      },
      {
        title: "Blog Theme 2",
        href: "/blog/theme-2/technical-seo-guide2",
      },
      {
        title: "Blog Theme 3",
        href: "/blog/theme-3/technical-seo-guide2",
      },
      {
        title: "Knowledge Base",
        href: "/knowledge-base",
      },
      {
        title: "FAQs",
        href: "/faqs",
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
        badge: "new",
      },
      {
        title: "Cards",
        href: "/user-interface/cards",
        badge: "new",
      },
      {
        title: "Animations",
        href: "/user-interface/animations",
        badge: "new",
      },
    ],
  },
  {
    title: "Company",
    items: [
      {
        title: "Current Openings",
        href: "/current-openings",
        description: "Join our team",
        badge: "hiring",
      },
      {
        title: "Partners",
        href: "/partners",
        description: "News and media",
      },
      {
        title: "Collaboration",
        href: "/collaboration/team-tools",
        description: "Team tools",
      },
    ],
  },
] as const;
