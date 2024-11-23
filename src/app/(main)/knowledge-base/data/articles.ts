import { Article } from "@/types";

export const articles: Article[] = [
  {
    id: "quick-start-guide",
    title: "Quick Start Guide: Setting Up Your First Campaign",
    excerpt:
      "Learn how to create and launch your first digital marketing campaign in under 30 minutes.",
    category: "getting-started",
    tags: ["beginners", "campaigns", "setup"],
    readTime: "5 min read",
    author: {
      name: "Sarah Johnson",
      avatar: "/images/team/sarah.jpg",
    },
    helpful: 128,
    lastUpdated: "2 days ago",
    featured: true,
  },
  {
    id: "analytics-setup",
    title: "Setting Up Advanced Analytics Tracking",
    excerpt:
      "A comprehensive guide to implementing advanced analytics tracking for better insights.",
    category: "user-guides",
    tags: ["analytics", "tracking", "setup"],
    readTime: "8 min read",
    author: {
      name: "Michael Chen",
      avatar: "/images/team/sarah.jpg",
    },
    helpful: 95,
    lastUpdated: "1 week ago",
    featured: true,
  },
  // Add more articles as needed
];
