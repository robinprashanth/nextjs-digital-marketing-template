import { Benefits } from "@/components/service/Benefits";
import { CaseStudies, CTA, FAQ, Pricing } from "@/components/service/FAQItem";
import { Features } from "@/components/service/Features";
import { Methodology } from "@/components/service/Methodology";
import { MetricsDashboard } from "@/components/service/MetricsDashboard";
import { ServiceHero } from "@/components/service/ServiceHero";
import {
  Globe,
  BarChart2,
  Target,
  LineChart,
  Layout,
  Link,
  FileText,
  Smartphone,
  Code,
  Gauge,
  Share2,
  TrendingUp,
  Activity,
  BookOpen,
  Network,
} from "lucide-react";

export default function SEOExcellencePage() {
  // Benefits Section Data
  const benefits = [
    {
      icon: <Target className="h-6 w-6 text-purple-400" />,
      title: "Sustainable Growth",
      description:
        "Build long-term organic traffic growth with sustainable, white-hat SEO strategies.",
    },
    {
      icon: <LineChart className="h-6 w-6 text-purple-400" />,
      title: "Qualified Traffic",
      description:
        "Attract highly targeted visitors with genuine interest in your products or services.",
    },
    {
      icon: <Gauge className="h-6 w-6 text-purple-400" />,
      title: "Better ROI",
      description:
        "Lower customer acquisition costs through organic search visibility and targeted content.",
    },
    {
      icon: <Share2 className="h-6 w-6 text-purple-400" />,
      title: "Brand Authority",
      description:
        "Establish your brand as an industry authority through strategic content and backlinks.",
    },
    {
      icon: <Activity className="h-6 w-6 text-purple-400" />,
      title: "24/7 Visibility",
      description:
        "Maintain constant online presence and visibility for your target keywords.",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-purple-400" />,
      title: "Content Excellence",
      description:
        "Create valuable, optimized content that resonates with both users and search engines.",
    },
  ];

  // Methodology Steps
  const methodologySteps = [
    {
      number: 1,
      title: "Technical Audit",
      description:
        "Comprehensive analysis of your website's technical SEO elements, structure, and performance.",
    },
    {
      number: 2,
      title: "Keyword Research",
      description:
        "In-depth keyword research and competitive analysis to identify high-value targeting opportunities.",
    },
    {
      number: 3,
      title: "Content Strategy",
      description:
        "Development of a content strategy aligned with search intent and business objectives.",
    },
    {
      number: 4,
      title: "On-Page Optimization",
      description:
        "Implementation of technical and content optimizations based on best practices and analysis.",
    },
    {
      number: 5,
      title: "Link Building",
      description:
        "Strategic acquisition of high-quality backlinks from relevant, authoritative sources.",
    },
    {
      number: 6,
      title: "Performance Tracking",
      description:
        "Continuous monitoring of rankings, traffic, and conversions with regular optimization.",
    },
  ];

  // Features
  const features = [
    {
      icon: <Code className="h-6 w-6 text-purple-400" />,
      title: "Technical SEO",
      description:
        "Advanced technical optimization including site structure, schema markup, and core web vitals.",
    },
    {
      icon: <FileText className="h-6 w-6 text-purple-400" />,
      title: "Content Optimization",
      description:
        "Data-driven content strategies with keyword optimization and search intent alignment.",
    },
    {
      icon: <Link className="h-6 w-6 text-purple-400" />,
      title: "Link Building",
      description:
        "Strategic link acquisition from authoritative sources to boost domain authority.",
    },
    {
      icon: <Layout className="h-6 w-6 text-purple-400" />,
      title: "Local SEO",
      description:
        "Optimize local search presence for better visibility in geographical markets.",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-purple-400" />,
      title: "Mobile Optimization",
      description:
        "Ensure perfect mobile experience with responsive design and mobile-first indexing.",
    },
    {
      icon: <Network className="h-6 w-6 text-purple-400" />,
      title: "International SEO",
      description:
        "Multi-language and multi-region optimization for global reach.",
    },
  ];

  // Metrics Dashboard
  const metrics = [
    {
      icon: <TrendingUp className="h-6 w-6 text-purple-400" />,
      label: "Organic Traffic Growth",
      value: "180%",
      trend: 25,
    },
    {
      icon: <Target className="h-6 w-6 text-purple-400" />,
      label: "Keyword Rankings",
      value: "85%",
      trend: 15,
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-purple-400" />,
      label: "Domain Authority",
      value: "+45%",
      trend: 20,
    },
    {
      icon: <Activity className="h-6 w-6 text-purple-400" />,
      label: "Conversion Rate",
      value: "8.5%",
      trend: 12,
    },
  ];

  // Case Studies
  const cases = [
    {
      client: "TechHub Solutions",
      industry: "SaaS",
      challenge:
        "Low organic visibility and declining search traffic in a competitive market.",
      solution:
        "Implemented comprehensive technical SEO and content strategy focusing on product-led keywords.",
      results: [
        {
          label: "Organic Traffic",
          value: "+250%",
          change: "250% increase",
        },
        {
          label: "First Page Rankings",
          value: "180+",
          change: "200% increase",
        },
        {
          label: "Domain Authority",
          value: "65",
          change: "86% increase",
        },
        {
          label: "Organic Leads",
          value: "+175%",
          change: "175% increase",
        },
      ],
      image: "/images/case-studies/techhub.jpg",
    },
    {
      client: "Global Retail Co",
      industry: "E-commerce",
      challenge:
        "Poor local search visibility and technical SEO issues affecting multiple locations.",
      solution:
        "Developed location-based SEO strategy with technical optimization and local content.",
      results: [
        {
          label: "Local Rankings",
          value: "#1-3",
          change: "Top 3 positions",
        },
        {
          label: "Store Visits",
          value: "+120%",
          change: "120% increase",
        },
        {
          label: "Local Queries",
          value: "5K+",
          change: "150% increase",
        },
        {
          label: "Conversion Rate",
          value: "9.5%",
          change: "85% increase",
        },
      ],
      image: "/images/case-studies/globalretail.jpg",
    },
  ];

  // Pricing Tiers
  const pricingTiers = [
    {
      name: "Essential SEO",
      price: "$1,499",
      description:
        "Perfect for small businesses looking to improve their search presence.",
      features: [
        "Technical SEO audit",
        "Keyword research",
        "Monthly content optimization",
        "Basic link building",
        "Quarterly reporting",
        "Email support",
      ],
    },
    {
      name: "Professional SEO",
      price: "$2,999",
      description: "Comprehensive SEO solution for growing businesses.",
      features: [
        "Advanced technical optimization",
        "Content strategy & creation",
        "Authority link building",
        "Local SEO optimization",
        "Monthly reporting",
        "Priority support",
        "Competitor analysis",
        "Mobile optimization",
      ],
      isPopular: true,
    },
    {
      name: "Enterprise SEO",
      price: "Custom",
      description:
        "Full-scale SEO campaigns for large websites and organizations.",
      features: [
        "Custom SEO strategy",
        "International SEO",
        "Advanced technical SEO",
        "Content hub development",
        "Enterprise link building",
        "24/7 support",
        "Custom reporting",
        "Strategic consulting",
      ],
    },
  ];

  // FAQs
  const faqs = [
    {
      question: "How long does it take to see results from SEO?",
      answer:
        "SEO is a long-term strategy that typically shows initial improvements within 3-6 months. However, significant results are usually seen within 6-12 months, depending on factors like competition, current website status, and target keywords.",
    },
    {
      question: "What's included in your technical SEO audit?",
      answer:
        "Our technical audit covers site structure, crawlability, indexation, mobile responsiveness, site speed, core web vitals, schema markup, SSL, robots.txt, sitemap, redirects, and other technical elements affecting search performance.",
    },
    {
      question: "How do you approach link building?",
      answer:
        "We use white-hat link building strategies including content marketing, digital PR, broken link building, and strategic outreach to relevant, authoritative websites in your industry. All link building is done manually and follows Google's guidelines.",
    },
    {
      question: "Do you guarantee first page rankings?",
      answer:
        "While we can't guarantee specific rankings due to Google's ever-evolving algorithms, we have a proven track record of achieving and maintaining first page rankings through ethical SEO practices and comprehensive optimization strategies.",
    },
    {
      question: "What reports do you provide?",
      answer:
        "We provide detailed monthly reports covering rankings, organic traffic, conversions, technical improvements, backlinks acquired, and content performance. Reports include analysis and recommendations for continued improvement.",
    },
  ];

  return (
    <main className="bg-background">
      <ServiceHero
        title="SEO Excellence"
        description="Boost your organic visibility and drive sustainable growth with our comprehensive search engine optimization solutions."
        icon={<Globe className="h-8 w-8 text-white" />}
        gradient="bg-[linear-gradient(45deg,#10B981,#059669)]"
        stats={[
          { value: "250%", label: "Average Traffic Growth" },
          { value: "180+", label: "First Page Rankings" },
          { value: "95%", label: "Client Retention" },
          { value: "500+", label: "Projects Completed" },
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
