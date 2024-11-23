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
        href: "/features/metrics",
        description: "Track and analyze your marketing performance",
        icon: BarChart,
      },
      {
        title: "Campaign Management",
        href: "/features/campaigns",
        description: "Manage all your campaigns in one place",
        icon: Target,
      },
      {
        title: "ROI Tracking",
        href: "/features/roi",
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
        href: "/features/workflow",
        description: "Create automated marketing workflows",
        icon: Settings,
      },
      {
        title: "Integration Hub",
        href: "/features/integrations",
        description: "Connect with your favorite tools",
        icon: Terminal,
      },
      {
        title: "Security",
        href: "/features/security",
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
        href: "/features/team",
        description: "Tools for team collaboration",
        icon: Users,
      },
      {
        title: "Communication",
        href: "/features/communication",
        description: "Built-in team communication tools",
        icon: MessageSquare,
      },
      {
        title: "Growth Tools",
        href: "/features/growth",
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
    href: "/services/content",
    description: "Content creation and strategy services",
  },
  {
    title: "Social Media",
    href: "/services/social",
    description: "Social media management and growth",
  },
];
