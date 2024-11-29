export interface FAQCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags?: string[];
}

export interface SearchState {
  query: string;
  category: string;
}
export const pageConfig = {
  title: "Frequently Asked Questions",
  description:
    "Find quick answers to common questions about our platform and services",
};

export const categories: FAQCategory[] = [
  {
    id: "general",
    name: "General",
    icon: "HelpCircle",
    description: "Basic questions about our platform",
  },
  {
    id: "pricing",
    name: "Pricing",
    icon: "DollarSign",
    description: "Questions about our pricing and plans",
  },
  {
    id: "features",
    name: "Features",
    icon: "Settings",
    description: "Learn about platform features",
  },
  {
    id: "security",
    name: "Security",
    icon: "Shield",
    description: "Privacy and security information",
  },
  {
    id: "integrations",
    name: "Integrations",
    icon: "GitBranch",
    description: "Platform integrations and APIs",
  },
  {
    id: "support",
    name: "Support",
    icon: "LifeBuoy",
    description: "Getting help and support",
  },
];

export const faqs: FAQ[] = [
  {
    id: "1",
    category: "general",
    question: "What is Digitra and how does it work?",
    answer:
      "Digitra is a comprehensive digital marketing platform that combines automation, analytics, and content management tools. Our platform helps businesses streamline their marketing operations, improve efficiency, and drive better results through data-driven decisions.",
    tags: ["platform", "overview"],
  },
  {
    id: "2",
    category: "general",
    question: "How do I get started with Digitra?",
    answer:
      "Getting started is simple. Sign up for a free account, complete the onboarding process where we'll help you set up your first campaign, and start exploring our features. Our step-by-step guides and tutorials will help you make the most of the platform.",
    tags: ["getting started", "onboarding"],
  },
  // Add more FAQs for each category...
];

export const popularSearches = [
  "Getting started",
  "Pricing plans",
  "API integration",
  "Security features",
  "Account settings",
  "Billing information",
];
