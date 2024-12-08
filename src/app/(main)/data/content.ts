import { TestimonialProps } from "@/types";

export const decorativeShapes = [
  {
    type: "blur",
    position: "left-[10%] top-[20%]",
    size: "h-16 w-16 md:h-24 md:w-24",
    color: "bg-theme-primary-500/20",
    delay: 0,
  },
  {
    type: "blur",
    position: "right-[15%] top-[15%]",
    size: "h-20 w-20 md:h-28 md:w-28",
    color: "bg-orange-500/20",
    delay: 0.2,
  },
  {
    type: "blur",
    position: "bottom-[20%] left-[20%]",
    size: "h-24 w-24",
    color: "bg-theme-ocean-500/20",
    delay: 0.4,
  },
  {
    type: "star",
    position: "bottom-[80%] right-[40%]",
    color: "text-theme-primary-400",
    delay: 0.6,
  },
  {
    type: "star",
    position: "bottom-[40%] right-[20%]",
    color: "text-theme-primary-400",
    delay: 0.6,
  },
  {
    type: "plus",
    position: "left-[40%] top-[30%]",
    color: "text-orange-400",
    delay: 0.8,
  },
  {
    type: "plus",
    position: "right-[40%] top-[30%]",
    color: "text-orange-400",
    delay: 0.8,
  },
];

export const testimonials: TestimonialProps[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    content:
      "Working with this team has been transformative for our digital presence. Their strategic approach and attention to detail resulted in a 200% increase in our online engagement. They're not just service providers; they're growth partners.",
    image: "/assets/profile1.jpg",
    rating: 5,
    companyLogo: "/images/clients/techcore.svg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "Greenleaf Labs",
    content:
      "The ROI we've seen since partnering with them has been incredible. They took the time to understand our unique challenges and crafted solutions that perfectly aligned with our goals. Their data-driven approach made all the difference.",
    image: "/assets/profile1.jpg",
    rating: 5,
    companyLogo: "/images/clients/greenleaf.svg",
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "E-commerce Manager",
    company: "Wellness Pro",
    content:
      "Their expertise in digital marketing has been instrumental in our growth. They helped us achieve a 150% increase in online sales through targeted campaigns and optimization. Their team is responsive, creative, and truly cares about our success.",
    image: "/assets/profile1.jpg",
    rating: 5,
    companyLogo: "/images/clients/quantumflow.svg",
  },
];

export const companyLogos = [
  "/images/clients/greenleaf.svg",
  "/images/clients/quantumflow.svg",
  "/images/clients/techcore.svg",
  "/images/clients/redpulse.svg",
  "/images/clients/skybridge.svg",
];

export interface TimelineStat {
  value: string;
  label: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  icon: "Rocket" | "Globe" | "Lightbulb" | "Trophy" | "Sparkles";
  stats: TimelineStat[];
  gradient: string;
}

export interface CompanyTimeline {
  title: string;
  subtitle: string;
  description: string;
  milestones: TimelineMilestone[];
}

// content.ts
export const companyTimeline: CompanyTimeline = {
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
