import { Category } from "@/types";
import {
  Book,
  FileText,
  Video,
  Code,
  Settings,
  MessagesSquare,
} from "lucide-react";

export const categories: Category[] = [
  {
    id: "getting-started",
    name: "Getting Started",
    description: "Essential guides to help you get up and running quickly",
    icon: Book,
    articleCount: 12,
  },
  {
    id: "user-guides",
    name: "User Guides",
    description: "Detailed instructions for using platform features",
    icon: FileText,
    articleCount: 25,
  },
  {
    id: "tutorials",
    name: "Video Tutorials",
    description: "Step-by-step video guides for common tasks",
    icon: Video,
    articleCount: 18,
  },
  {
    id: "api-docs",
    name: "API Documentation",
    description: "Technical documentation for developers",
    icon: Code,
    articleCount: 30,
  },
  {
    id: "troubleshooting",
    name: "Troubleshooting",
    description: "Solutions for common issues and errors",
    icon: Settings,
    articleCount: 22,
  },
  {
    id: "faq",
    name: "FAQ",
    description: "Frequently asked questions and answers",
    icon: MessagesSquare,
    articleCount: 45,
  },
];
