import { PricingPlan } from "@/types";

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: "Starter",
    description: "Perfect for small businesses starting their digital journey",
    monthlyPrice: 999,
    yearlyPrice: 799,
    features: [
      {
        id: 1,
        title: "Social Media Management",
        description: "Management of 2 social media platforms",
        included: 2,
      },
      {
        id: 2,
        title: "Content Creation",
        description: "8 social media posts per month",
        included: 8,
      },
      {
        id: 3,
        title: "SEO Optimization",
        description: "Basic SEO setup and monthly reporting",
        included: "partial",
      },
      {
        id: 4,
        title: "Email Marketing",
        description: "Monthly newsletter setup and management",
        included: true,
      },
      {
        id: 5,
        title: "Performance Analytics",
        description: "Basic analytics dashboard and monthly reports",
        included: true,
      },
    ],
    cta: {
      text: "Get Started",
      href: "/contact?plan=starter",
    },
  },
  {
    id: 2,
    name: "Growth",
    description: "Ideal for growing businesses seeking expanded reach",
    monthlyPrice: 1999,
    yearlyPrice: 1599,
    isPopular: true,
    features: [
      {
        id: 1,
        title: "Social Media Management",
        description:
          "Management of 4 social media platforms with customized strategies",
        included: 4,
      },
      {
        id: 2,
        title: "Content Creation",
        description: "20 social media posts per month with premium graphics",
        included: 20,
      },
      {
        id: 3,
        title: "SEO Optimization",
        description:
          "Advanced SEO strategy with weekly reporting and competitor analysis",
        included: true,
      },
      {
        id: 4,
        title: "Email Marketing",
        description: "Bi-weekly newsletters with automation workflows",
        included: true,
      },
      {
        id: 5,
        title: "Performance Analytics",
        description:
          "Advanced analytics with competitor tracking and custom reports",
        included: true,
      },
      {
        id: 6,
        title: "Ad Campaign Management",
        description: "Managed advertising campaigns with budget optimization",
        included: true,
      },
      {
        id: 7,
        title: "Content Strategy",
        description: "Comprehensive content calendar and strategy planning",
        included: true,
      },
    ],
    cta: {
      text: "Get Started",
      href: "/contact?plan=growth",
    },
  },
  {
    id: 3,
    name: "Enterprise",
    description: "Comprehensive solution for established businesses",
    monthlyPrice: 3999,
    yearlyPrice: 3199,
    features: [
      {
        id: 1,
        title: "Social Media Management",
        description:
          "Full-service management of all major social platforms with dedicated team",
        included: true,
      },
      {
        id: 2,
        title: "Content Creation",
        description:
          "Unlimited social media posts with custom photography and design",
        included: true,
      },
      {
        id: 3,
        title: "SEO Optimization",
        description:
          "Enterprise-level SEO with daily monitoring and optimization",
        included: true,
      },
      {
        id: 4,
        title: "Email Marketing",
        description:
          "Advanced email automation with segmentation and A/B testing",
        included: true,
      },
      {
        id: 5,
        title: "Performance Analytics",
        description: "Real-time analytics dashboard with custom KPI tracking",
        included: true,
      },
      {
        id: 6,
        title: "Ad Campaign Management",
        description: "Multi-channel advertising with AI-powered optimization",
        included: true,
      },
      {
        id: 7,
        title: "Content Strategy",
        description:
          "Strategic content planning with market research and analysis",
        included: true,
      },
      {
        id: 8,
        title: "Dedicated Account Manager",
        description: "Priority support with dedicated strategy consultant",
        included: true,
      },
      {
        id: 9,
        title: "Brand Development",
        description: "Comprehensive brand strategy and guidelines development",
        included: true,
      },
      {
        id: 10,
        title: "Custom Development",
        description: "Custom marketing technology solutions and integrations",
        included: true,
      },
    ],
    cta: {
      text: "Contact Sales",
      href: "/contact?plan=enterprise",
    },
  },
];
