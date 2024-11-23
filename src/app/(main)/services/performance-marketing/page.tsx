import { Benefits } from "@/components/service/Benefits";
import { CaseStudies, CTA, FAQ, Pricing } from "@/components/service/FAQItem";
import { Features } from "@/components/service/Features";
import { Methodology } from "@/components/service/Methodology";
import { MetricsDashboard } from "@/components/service/MetricsDashboard";
import { ServiceHero } from "@/components/service/ServiceHero";
import {
  Search,
  BarChart2,
  Target,
  Users,
  Lightbulb,
  TrendingUp,
  PieChart,
  Settings,
  LineChart,
  Zap,
  Globe,
  MessageSquare,
  Database,
  Share2,
  ShieldCheck,
} from "lucide-react";

export default function PerformanceMarketingPage() {
  // Benefits Section Data
  const benefits = [
    {
      icon: <Target className="h-6 w-6 text-purple-400" />,
      title: "Precision Targeting",
      description:
        "Reach your ideal customers with data-driven targeting based on demographics, behavior, and intent signals.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-purple-400" />,
      title: "Measurable Results",
      description:
        "Track and measure every aspect of your campaigns with comprehensive analytics and reporting.",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-purple-400" />,
      title: "Strategic Optimization",
      description:
        "Continuous optimization using AI and machine learning to maximize campaign performance and ROI.",
    },
    {
      icon: <PieChart className="h-6 w-6 text-purple-400" />,
      title: "Budget Efficiency",
      description:
        "Maximize your marketing budget with smart bid strategies and cost-efficient campaign management.",
    },
    {
      icon: <Share2 className="h-6 w-6 text-purple-400" />,
      title: "Cross-Channel Integration",
      description:
        "Seamlessly integrate campaigns across multiple platforms for consistent messaging and better results.",
    },
    {
      icon: <Database className="h-6 w-6 text-purple-400" />,
      title: "Data-Driven Insights",
      description:
        "Make informed decisions with comprehensive data analysis and actionable insights.",
    },
  ];

  // Methodology Steps
  const methodologySteps = [
    {
      number: 1,
      title: "Research & Discovery",
      description:
        "Deep dive into your business, market, and competition to identify opportunities and target audience.",
    },
    {
      number: 2,
      title: "Strategy Development",
      description:
        "Create a comprehensive performance marketing strategy aligned with your business goals and budget.",
    },
    {
      number: 3,
      title: "Campaign Setup",
      description:
        "Build and configure campaigns with optimal targeting, bidding strategies, and creative assets.",
    },
    {
      number: 4,
      title: "Testing & Launch",
      description:
        "Conduct thorough testing across all campaign elements before full-scale launch.",
    },
    {
      number: 5,
      title: "Monitoring & Optimization",
      description:
        "Continuous monitoring and optimization of campaigns to maximize performance and ROI.",
    },
    {
      number: 6,
      title: "Analysis & Reporting",
      description:
        "Regular analysis and detailed reporting with insights and recommendations for improvement.",
    },
  ];

  // Features
  const features = [
    {
      icon: <Settings className="h-6 w-6 text-purple-400" />,
      title: "Advanced Campaign Management",
      description:
        "Sophisticated campaign management tools and strategies for optimal performance across all channels.",
    },
    {
      icon: <LineChart className="h-6 w-6 text-purple-400" />,
      title: "Real-Time Analytics",
      description:
        "Live tracking and analytics dashboards providing instant insights into campaign performance.",
    },
    {
      icon: <Zap className="h-6 w-6 text-purple-400" />,
      title: "Automated Optimization",
      description:
        "AI-powered optimization algorithms that automatically adjust campaigns for best results.",
    },
    {
      icon: <Globe className="h-6 w-6 text-purple-400" />,
      title: "Multi-Channel Campaigns",
      description:
        "Integrated campaigns across search, social, display, and video platforms.",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-purple-400" />,
      title: "Dynamic Creative",
      description:
        "Personalized ad creative and messaging that adapts to your target audience.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-purple-400" />,
      title: "Brand Safety",
      description:
        "Advanced brand safety measures and fraud prevention systems.",
    },
  ];

  // Metrics Dashboard
  const metrics = [
    {
      icon: <BarChart2 className="h-6 w-6 text-purple-400" />,
      label: "Average ROI",
      value: "300%",
      trend: 15,
    },
    {
      icon: <Users className="h-6 w-6 text-purple-400" />,
      label: "Click-Through Rate",
      value: "4.2%",
      trend: 8,
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-purple-400" />,
      label: "Conversion Rate",
      value: "12.5%",
      trend: 10,
    },
    {
      icon: <PieChart className="h-6 w-6 text-purple-400" />,
      label: "Cost Per Acquisition",
      value: "-35%",
      trend: -35,
    },
  ];

  // // Tools & Platforms
  // const tools = [
  //   {
  //     name: "Google Ads",
  //     logo: "/images/tools/google-ads.png",
  //     description:
  //       "Premier Partner with advanced Google Ads campaign management capabilities.",
  //   },
  //   {
  //     name: "Meta Ads",
  //     logo: "/images/tools/meta-ads.png",
  //     description:
  //       "Certified partner for Facebook & Instagram advertising solutions.",
  //   },
  //   {
  //     name: "LinkedIn Ads",
  //     logo: "/images/tools/linkedin-ads.png",
  //     description:
  //       "Specialized in B2B advertising and lead generation campaigns.",
  //   },
  //   {
  //     name: "TikTok Ads",
  //     logo: "/images/tools/tiktok-ads.png",
  //     description: "Expert in engaging Gen Z and Millennial audiences.",
  //   },
  //   {
  //     name: "Analytics Suite",
  //     logo: "/images/tools/analytics.png",
  //     description: "Comprehensive analytics and reporting platforms.",
  //   },
  //   {
  //     name: "Automation Tools",
  //     logo: "/images/tools/automation.png",
  //     description: "Advanced automation and optimization tools.",
  //   },
  // ];

  // Case Studies
  const cases = [
    {
      client: "TechStart",
      industry: "SaaS",
      challenge:
        "Needed to reduce customer acquisition costs while scaling growth across multiple markets.",
      solution:
        "Implemented AI-driven multi-channel campaign strategy with dynamic optimization.",
      results: [
        {
          label: "CAC Reduction",
          value: "-45%",
          change: "45% decrease",
        },
        {
          label: "Lead Volume",
          value: "+125%",
          change: "125% increase",
        },
        {
          label: "ROI",
          value: "350%",
          change: "350% increase",
        },
        {
          label: "Market Expansion",
          value: "5X",
          change: "500% growth",
        },
      ],
      image: "/images/case-studies/techstart.jpg",
    },
    {
      client: "GlobalCommerce",
      industry: "E-commerce",
      challenge:
        "Struggling to maintain ROAS while scaling ad spend across multiple product lines.",
      solution:
        "Developed automated campaign structure with dynamic product ads and custom audiences.",
      results: [
        {
          label: "ROAS",
          value: "4.2x",
          change: "108% increase",
        },
        {
          label: "Revenue",
          value: "+150%",
          change: "150% growth",
        },
        {
          label: "Ad Spend",
          value: "2.5M",
          change: "150% increase",
        },
        {
          label: "New Customers",
          value: "+85%",
          change: "85% increase",
        },
      ],
      image: "/images/case-studies/globalcommerce.jpg",
    },
  ];

  // Pricing Tiers
  const pricingTiers = [
    {
      name: "Starter",
      price: "$2,999",
      description:
        "Perfect for small businesses looking to start with performance marketing.",
      features: [
        "Up to $10k monthly ad spend",
        "2 advertising platforms",
        "Weekly optimization",
        "Monthly reporting",
        "Email support",
        "Basic analytics dashboard",
      ],
    },
    {
      name: "Professional",
      price: "$4,999",
      description:
        "Ideal for growing businesses seeking comprehensive marketing solutions.",
      features: [
        "Up to $50k monthly ad spend",
        "4 advertising platforms",
        "Daily optimization",
        "Weekly reporting",
        "Priority support",
        "Advanced analytics & insights",
        "A/B testing",
        "Custom audience creation",
      ],
      isPopular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large-scale marketing operations.",
      features: [
        "Unlimited ad spend",
        "All advertising platforms",
        "Real-time optimization",
        "24/7 dedicated support",
        "Custom reporting",
        "Full-suite analytics",
        "Advanced automation",
        "Strategic consulting",
      ],
    },
  ];

  // FAQs
  const faqs = [
    {
      question: "What is performance marketing?",
      answer:
        "Performance marketing is a data-driven approach to digital advertising where you only pay for specific actions or results, such as clicks, leads, or sales. It combines various channels like paid search, social media advertising, and display advertising to achieve measurable business outcomes.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Initial results can typically be seen within the first month, but optimal performance is usually achieved within 2-3 months as we gather data and optimize campaigns. However, timeline can vary based on factors like industry, competition, and campaign objectives.",
    },
    {
      question: "What platforms do you work with?",
      answer:
        "We work with all major advertising platforms including Google Ads, Meta (Facebook & Instagram), LinkedIn, TikTok, Twitter, and programmatic advertising networks. The specific mix is determined by your target audience and business goals.",
    },
    {
      question: "How do you measure success?",
      answer:
        "Success is measured through key performance indicators (KPIs) aligned with your business goals, such as ROAS, CPA, conversion rates, and revenue growth. We provide comprehensive reporting and analytics to track all relevant metrics.",
    },
    {
      question: "What's your optimization process?",
      answer:
        "We use a combination of AI-driven tools and expert analysis to continuously optimize campaigns. This includes regular bid adjustments, audience refinement, creative testing, and performance analysis to maximize results.",
    },
  ];

  return (
    <main className="bg-background">
      <ServiceHero
        title="Performance Marketing"
        description="Data-driven campaigns that maximize your ROI through targeted advertising, analytics, and continuous optimization across all digital channels."
        icon={<Search className="h-8 w-8 text-white" />}
        gradient="bg-[linear-gradient(45deg,#FF8145,#FF6B2B)]"
        stats={[
          { value: "300%", label: "Average ROI" },
          { value: "200M+", label: "Ad Spend Managed" },
          { value: "95%", label: "Client Retention" },
          { value: "50+", label: "Active Campaigns" },
        ]}
      />
      <Benefits benefits={benefits} />
      <Methodology steps={methodologySteps} />
      <Features features={features} />
      <MetricsDashboard metrics={metrics} />
      {/* <Tools tools={tools} /> */}
      <CaseStudies cases={cases} />
      <Pricing tiers={pricingTiers} />
      <FAQ faqs={faqs} />
      <CTA />
    </main>
  );
}
