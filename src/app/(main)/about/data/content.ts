import { Testimonial } from "@/types";
import {
  LucideIcon,
  Trophy,
  Target,
  Heart,
  Users,
  Lightbulb,
  Shield,
  Rocket,
  Globe,
  Search,
  LineChart,
  Settings,
  BarChart2,
  TrendingUp,
  Star,
  Award,
  ExternalLink,
} from "lucide-react";

export const companyTimeline = {
  title: "A Decade of Digital Excellence",
  subtitle: "Our Journey",
  description:
    "From our humble beginnings to becoming a global digital force, our journey has been defined by innovation, growth, and an unwavering commitment to client success.",
  milestones: [
    {
      year: "2014",
      title: "The Beginning",
      description:
        "Started as a small team of digital enthusiasts with a vision to transform the digital marketing landscape.",
      icon: "Rocket",
      stats: [
        { value: "3", label: "Team Members" },
        { value: "5", label: "Clients" },
      ],
      gradient: "from-theme-primary-500 to-theme-ocean-600",
    },
    {
      year: "2016",
      title: "Expanding Horizons",
      description:
        "Opened our first international office and expanded our services to include comprehensive digital solutions.",
      icon: "Globe",
      stats: [
        { value: "25+", label: "Team Size" },
        { value: "50+", label: "Projects" },
      ],
      gradient: "from-theme-ocean-500 to-theme-indigo-600",
    },
    {
      year: "2019",
      title: "Digital Innovation Hub",
      description:
        "Launched our proprietary marketing analytics platform and established partnerships with major tech companies.",
      icon: "Lightbulb",
      stats: [
        { value: "100+", label: "Clients" },
        { value: "95%", label: "Success Rate" },
      ],
      gradient: "from-theme-primary-500 to-theme-secondary-500",
    },
    {
      year: "2022",
      title: "Global Impact",
      description:
        "Recognized as a leading digital marketing agency with a global presence and diverse client portfolio.",
      icon: "Trophy",
      stats: [
        { value: "150+", label: "Team Members" },
        { value: "500+", label: "Projects Delivered" },
      ],
      gradient: "from-theme-rose-500 to-theme-primary-600",
    },
    {
      year: "2024",
      title: "Future Forward",
      description:
        "Pioneering AI-driven marketing solutions and expanding our reach to emerging markets worldwide.",
      icon: "Sparkles",
      stats: [
        { value: "10+", label: "Global Offices" },
        { value: "1000+", label: "Success Stories" },
      ],
      gradient: "from-theme-secondary-500 to-theme-ocean-600",
    },
  ],
};

export interface CompanyValue {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  size?: "default" | "large";
  features?: string[];
}

export interface MissionContent {
  title: {
    prefix: string;
    highlighted: string;
    suffix?: string;
  };
  subtitle: string;
  description: string;
  mission: {
    title: string;
    statement: string;
  };
  bottomCTA: {
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

export const missionValuesContent: MissionContent = {
  title: {
    prefix: "Guided by ",
    highlighted: "Excellence",
  },
  subtitle: "Mission & Values",
  description:
    "Our mission is to empower businesses with innovative digital solutions that drive growth and create lasting impact.",
  mission: {
    title: "Our Mission",
    statement:
      "To revolutionize digital marketing through innovation and excellence, helping businesses thrive in the digital age while setting new standards for creativity, results, and client satisfaction.",
  },
  bottomCTA: {
    description:
      "Join us in our mission to transform the digital landscape and create meaningful impact for businesses worldwide.",
    buttonText: "Partner With Us",
    buttonLink: "/contact",
  },
};

export const companyValues: CompanyValue[] = [
  {
    icon: Target,
    title: "Result-Driven Approach",
    description:
      "We focus on delivering measurable results that drive business growth.",
    gradient: "from-theme-primary-500 to-theme-ocean-600",
    size: "large",
    features: [
      "Data-driven strategies",
      "ROI focused campaigns",
      "Performance tracking",
      "Continuous optimization",
    ],
  },
  {
    icon: Heart,
    title: "Client-Centric Focus",
    description: "Building lasting partnerships through trust and excellence.",
    gradient: "from-theme-rose-500 to-theme-primary-600",
    features: ["24/7 support", "Custom solutions", "Regular updates"],
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Pushing boundaries with cutting-edge solutions.",
    gradient: "from-theme-secondary-500 to-theme-ocean-600",
    size: "large",
    features: [
      "Latest technologies",
      "Creative solutions",
      "Industry trends",
      "Continuous research",
    ],
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "Strong teamwork delivering exceptional results.",
    gradient: "from-theme-ocean-500 to-theme-indigo-600",
    features: ["Team synergy", "Open communication", "Shared success"],
  },
  {
    icon: Shield,
    title: "Integrity & Trust",
    description: "Maintaining the highest professional standards.",
    gradient: "from-theme-tulip-500 to-theme-ocean-600",
    size: "large",
    features: [
      "Ethical practices",
      "Transparent communication",
      "Data security",
      "Privacy focus",
    ],
  },
  {
    icon: Rocket,
    title: "Continuous Growth",
    description: "Never-ending pursuit of excellence and improvement.",
    gradient: "from-theme-primary-500 to-theme-secondary-500",
    features: [
      "Learning culture",
      "Skill development",
      "Industry certifications",
    ],
  },
];

export interface Statistic {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  stats: Statistic[];
  gradient: string;
}

export interface WhyChooseUsContent {
  title: {
    prefix: string;
    highlighted: string;
    suffix: string;
  };
  subtitle: string;
  description: string;
  cta: {
    text: string;
    href: string;
  };
}

export const whyChooseUsContent: WhyChooseUsContent = {
  title: {
    prefix: "Driving ",
    highlighted: "Digital Excellence",
    suffix: " Through Innovation",
  },
  subtitle: "Why Choose Us",
  description:
    "We combine expertise, innovation, and proven methodologies to deliver exceptional results that drive your business forward in the digital age.",
  cta: {
    text: "Start Your Digital Journey",
    href: "/contact",
  },
};

export const features: Feature[] = [
  {
    icon: Trophy,
    title: "Industry Excellence",
    description:
      "Award-winning agency with a proven track record of delivering exceptional results across diverse industries.",
    gradient: "from-theme-primary-500 to-theme-ocean-600",
    stats: [
      { value: "50", suffix: "+", label: "Awards Won" },
      { value: "10", suffix: "+", label: "Years Experience" },
    ],
  },
  {
    icon: Rocket,
    title: "Innovation First",
    description:
      "Leveraging cutting-edge technologies and strategies to keep your business ahead of the digital curve.",
    gradient: "from-theme-rose-500 to-theme-primary-600",
    stats: [
      { value: "100", suffix: "%", label: "Success Rate" },
      { value: "24", suffix: "/7", label: "Support" },
    ],
  },
];

export interface ProcessStep {
  icon: LucideIcon;
  phase: string;
  title: string;
  description: string;
  duration: string;
  deliverables: string[];
}

export interface ProcessContent {
  title: {
    prefix: string;
    highlighted: string;
    suffix: string;
  };
  subtitle: string;
  description: string;
  cta: {
    text: string;
    href: string;
  };
}

export const processContent: ProcessContent = {
  title: {
    prefix: "Our ",
    highlighted: "Proven Methodology",
    suffix: " for Success",
  },
  subtitle: "Our Process",
  description:
    "A systematic approach to digital marketing that ensures consistent results and sustainable growth for your business.",
  cta: {
    text: "Start Your Project",
    href: "/contact",
  },
};

export const processSteps: ProcessStep[] = [
  {
    icon: Search,
    phase: "Discovery",
    title: "Research & Analysis",
    description:
      "Deep dive into your business, market, and competitors to develop a comprehensive understanding of your digital landscape.",
    duration: "1-2 weeks",
    deliverables: [
      "Comprehensive Market Analysis",
      "Competitor Benchmark Report",
      "Digital Opportunity Assessment",
      "Current Performance Audit",
    ],
  },
  {
    icon: BarChart2,
    phase: "Strategy",
    title: "Strategic Planning",
    description:
      "Develop a customized digital strategy aligned with your business objectives and market opportunities.",
    duration: "2-3 weeks",
    deliverables: [
      "Digital Marketing Roadmap",
      "Channel Strategy Document",
      "KPI Definition Framework",
      "Budget Allocation Plan",
    ],
  },
  {
    icon: Lightbulb,
    phase: "Creation",
    title: "Creative Development",
    description:
      "Transform strategy into compelling creative assets and campaigns that resonate with your target audience.",
    duration: "3-4 weeks",
    deliverables: [
      "Creative Brief & Concepts",
      "Content Calendar",
      "Campaign Assets",
      "Marketing Collateral",
    ],
  },
  {
    icon: Rocket,
    phase: "Launch",
    title: "Implementation",
    description:
      "Execute the strategy across chosen channels with precision and attention to detail.",
    duration: "2-3 weeks",
    deliverables: [
      "Campaign Setup",
      "Platform Integration",
      "Quality Assurance Report",
      "Launch Checklist",
    ],
  },
  {
    icon: Settings,
    phase: "Optimize",
    title: "Monitoring & Optimization",
    description:
      "Continuously monitor performance and optimize campaigns for maximum ROI.",
    duration: "Ongoing",
    deliverables: [
      "Performance Analytics",
      "Optimization Reports",
      "A/B Testing Results",
      "ROI Analysis",
    ],
  },
  {
    icon: LineChart,
    phase: "Scale",
    title: "Growth & Scaling",
    description:
      "Scale successful strategies and explore new opportunities for growth and expansion.",
    duration: "Ongoing",
    deliverables: [
      "Growth Opportunities Report",
      "Scaling Strategy",
      "Market Expansion Plan",
      "Performance Projections",
    ],
  },
];

export interface Metric {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface CaseStudy {
  client: string;
  industry: string;
  logo: string;
  title: string;
  description: string;
  metrics: Metric[];
  testimonial: Testimonial;
  href: string;
}

export interface SuccessMetric {
  label: string;
  value: string;
}

export const clientSuccessContent = {
  title: {
    prefix: "Delivering ",
    highlighted: "Exceptional Results",
    suffix: " for Our Clients",
  },
  subtitle: "Success Stories",
  description:
    "Discover how we've helped businesses achieve remarkable growth through innovative digital marketing strategies.",
  cta: {
    text: "View More Case Studies",
    href: "/case-studies",
  },
  successMetrics: [
    { label: "Client Satisfaction", value: "98%" },
    { label: "Projects Completed", value: "500+" },
    { label: "Revenue Generated", value: "$100M+" },
  ],
};

export const caseStudies: CaseStudy[] = [
  {
    client: "TechCorp Solutions",
    industry: "B2B Technology",
    logo: "/images/clients/techcorp.jpg",
    title: "300% Growth in Enterprise Lead Generation",
    description:
      "Transformed TechCorp's digital presence through an integrated marketing approach, combining SEO, content marketing, and targeted paid campaigns to dramatically increase qualified B2B leads.",
    href: "/case-studies/techcorp-solutions",
    metrics: [
      {
        label: "Lead Growth",
        value: "300%",
        icon: TrendingUp,
      },
      {
        label: "Enterprise Clients",
        value: "50+",
        icon: Users,
      },
      {
        label: "ROI",
        value: "450%",
        icon: Target,
      },
    ],
    testimonial: {
      author: "Sarah Chen",
      role: "Chief Marketing Officer",
      company: "TechCorp Solutions",
      image: "/assets/profile1.jpg",
      content:
        "The strategic approach and deep technical expertise transformed our B2B marketing efforts. We've not only hit our ambitious growth targets but consistently exceeded them quarter after quarter.",
      rating: 5,
    },
  },
  {
    client: "GlobalTrade",
    industry: "E-commerce",
    logo: "/images/clients/globaltrade.jpg",
    title: "Scaling E-commerce Revenue to $10M+",
    description:
      "Implemented a comprehensive digital strategy that scaled GlobalTrade's e-commerce platform across multiple markets, optimizing conversion rates and customer acquisition costs.",
    href: "/case-studies/globaltrade",
    metrics: [
      {
        label: "Revenue Growth",
        value: "200%",
        icon: TrendingUp,
      },
      {
        label: "New Markets",
        value: "12+",
        icon: Globe,
      },
      {
        label: "ROAS",
        value: "380%",
        icon: Target,
      },
    ],
    testimonial: {
      author: "Michael Ross",
      role: "CEO",
      company: "GlobalTrade",
      image: "/assets/profile2.jpg",
      content:
        "Their expertise in e-commerce and digital marketing has been instrumental in our international expansion. The results have exceeded our expectations, with our revenue more than doubling in just 18 months.",
      rating: 5,
    },
  },
];

export interface AwardType {
  name: string;
  organization: string;
  description: string;
  date: string;
  image: string;
  category?: string;
}

export interface Certification {
  name: string;
  organization: string;
  logo: string;
  validUntil: string;
}

export interface PressFeature {
  publication: string;
  title: string;
  date: string;
  logo: string;
  link: string;
}

export interface AchievementMetric {
  icon: LucideIcon;
  label: string;
  value: string;
}

export interface AwardsContent {
  title: {
    prefix: string;
    highlighted: string;
    suffix: string;
  };
  subtitle: string;
  description: string;
  sections: {
    awards: string;
    certifications: string;
    press: string;
  };
}

export const awardsContent: AwardsContent = {
  title: {
    prefix: "Our ",
    highlighted: "Achievements",
    suffix: " & Recognition",
  },
  subtitle: "Recognition",
  description:
    "Industry recognition and accolades that reflect our commitment to excellence and innovation in digital marketing.",
  sections: {
    awards: "Awards & Honors",
    certifications: "Professional Certifications",
    press: "Press & Media Features",
  },
};

export const awards: AwardType[] = [
  {
    name: "Best Digital Marketing Agency",
    organization: "Marketing Excellence Awards",
    description:
      "Recognized for outstanding achievement in digital marketing innovation and client results.",
    date: "2024",
    image: "/images/awards/marketing-excellence.jpg",
    category: "Agency of the Year",
  },
  {
    name: "Digital Innovation Award",
    organization: "Tech Industry Awards",
    description:
      "Awarded for groundbreaking use of AI in digital marketing campaigns.",
    date: "2024",
    image: "/images/awards/tech-innovation.jpg",
    category: "Innovation",
  },
  {
    name: "Client Success Award",
    organization: "Business Growth Forum",
    description: "Honored for delivering exceptional client results and ROI.",
    date: "2024",
    image: "/images/awards/client-success.jpg",
    category: "Client Results",
  },
];

export const certifications: Certification[] = [
  {
    name: "Google Premier Partner",
    organization: "Google",
    logo: "/images/certifications/google.png",
    validUntil: "2024",
  },
  {
    name: "Meta Business Partner",
    organization: "Meta",
    logo: "/images/certifications/meta.png",
    validUntil: "2024",
  },
  {
    name: "HubSpot Diamond Partner",
    organization: "HubSpot",
    logo: "/images/certifications/hubspot.jpg",
    validUntil: "2024",
  },
];
export const pressFeatures: PressFeature[] = [
  {
    publication: "TechCrunch",
    title: "Digital Agency Revolutionizes Marketing with AI Integration",
    date: "Dec 2023",
    logo: "/placeholders/placeholder.svg",
    link: "#",
  },
  {
    publication: "Forbes",
    title: "Leading the Digital Marketing Evolution",
    date: "Nov 2023",
    logo: "/placeholders/placeholder.svg",
    link: "#",
  },
  {
    publication: "Marketing Weekly",
    title: "Setting New Standards in Digital Excellence",
    date: "Oct 2023",
    logo: "/placeholders/placeholder.svg",
    link: "#",
  },
];

export const achievementMetrics: AchievementMetric[] = [
  { icon: Trophy, label: "Awards Won", value: "50+" },
  { icon: Star, label: "Recognition", value: "100+" },
  { icon: Award, label: "Certifications", value: "25+" },
  { icon: ExternalLink, label: "Features", value: "75+" },
];
