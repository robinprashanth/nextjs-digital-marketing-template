import { Zap, Shield, Award } from "lucide-react";

export interface PricingFeature {
    name: string;
    description: string;
    starter: boolean | string;
    professional: boolean | string;
    enterprise: boolean | string;
  }
  // Add this interface near your other interfaces
  interface CompanyLogo {
    name: string;
    logo: string;
    width: number;
    height: number;
  }
  
  // Add this array of company logos
  export const companyLogos: CompanyLogo[] = [
    {
      name: "Google",
      logo: "/images/logos/google.svg",
      width: 120,
      height: 40,
    },
    {
      name: "Microsoft",
      logo: "/images/logos/microsoft.svg",
      width: 120,
      height: 40,
    },
    {
      name: "Salesforce",
      logo: "/images/logos/salesforce.svg",
      width: 120,
      height: 40,
    },
  ];
  

export const pricingTiers = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups.",
      monthlyPrice: 999,
      annualPrice: 899,
      features: [
        "Up to 5 campaigns",
        "Basic analytics",
        "Email support",
        "2 team members",
        "5 automation workflows",
      ],
      cta: "Start Free Trial",
      popular: false,
      icon: Zap,
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses and teams.",
      monthlyPrice: 1999,
      annualPrice: 1799,
      features: [
        "Up to 15 campaigns",
        "Advanced analytics",
        "Priority support",
        "5 team members",
        "15 automation workflows",
        "Custom reporting",
        "API access",
      ],
      cta: "Start Free Trial",
      popular: true,
      icon: Shield,
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs.",
      monthlyPrice: "Custom",
      annualPrice: "Custom",
      features: [
        "Unlimited campaigns",
        "Custom analytics",
        "24/7 support",
        "Unlimited team members",
        "Unlimited automation",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantee",
      ],
      cta: "Contact Sales",
      popular: false,
      icon: Award,
    },
  ];

export  const features: PricingFeature[] = [
    {
      name: "Campaign Management",
      description: "Create and manage digital marketing campaigns",
      starter: "5 campaigns",
      professional: "15 campaigns",
      enterprise: "Unlimited",
    },
    {
      name: "Team Members",
      description: "Number of team members who can access the platform",
      starter: "2 users",
      professional: "5 users",
      enterprise: "Unlimited",
    },
    {
      name: "Analytics & Reporting",
      description: "Track and analyze campaign performance",
      starter: "Basic",
      professional: "Advanced",
      enterprise: "Custom",
    },
    {
      name: "Support",
      description: "Access to customer support",
      starter: "Email",
      professional: "Priority",
      enterprise: "24/7 Dedicated",
    },
    {
      name: "API Access",
      description: "Access to our API for custom integrations",
      starter: false,
      professional: true,
      enterprise: true,
    },
    {
      name: "Custom Integrations",
      description: "Integration with your existing tools",
      starter: false,
      professional: "Limited",
      enterprise: "Unlimited",
    },
    {
      name: "Automation Workflows",
      description: "Create automated marketing workflows",
      starter: "5 workflows",
      professional: "15 workflows",
      enterprise: "Unlimited",
    },
    {
      name: "Custom Branding",
      description: "Add your brand elements to campaigns",
      starter: false,
      professional: true,
      enterprise: true,
    },
  ];
