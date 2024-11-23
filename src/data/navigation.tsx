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
import type { NavLink, NavSection } from "@/types";

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
