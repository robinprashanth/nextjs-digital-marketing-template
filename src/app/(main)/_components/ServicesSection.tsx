"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  BarChart3,
  Mail,
  Globe,
  MonitorSmartphone,
  MessageSquareText,
  ArrowUpRight,
} from "lucide-react";
import { FadeInStaggerItem } from "@/components/motion/FadeInStaggerItem";
import { FadeInStagger } from "@/components/motion/FadeInStagger";
import { FadeIn } from "@/components/motion/FadeIn";
// Types
interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  gradient: string;
  href: string;
}

interface Stat {
  number: string;
  text: string;
}

// Data
const services: Service[] = [
  {
    icon: <Search className="h-6 w-6 text-white" />,
    title: "Performance Marketing",
    description:
      "Data-driven campaigns that maximize your ROI through targeted advertising, analytics, and continuous optimization across all digital channels.",
    color: "bg-gradient-to-br from-orange-500 to-orange-600",
    gradient: "bg-[linear-gradient(45deg,#FF8145,#FF6B2B)]",
    href: "/services/performance-marketing",
  },
  {
    icon: <MonitorSmartphone className="h-6 w-6 text-white" />,
    title: "Digital Presence",
    description:
      "Comprehensive digital strategy including website optimization, UX improvements, and cross-platform brand consistency to enhance your online presence.",
    color: "bg-gradient-to-br from-theme-primary-500 to-theme-primary-600",
    gradient: "bg-[linear-gradient(45deg,#8A6FF9,#6B4FD9)]",
    href: "/services/digital-marketing",
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-white" />,
    title: "Analytics & Insights",
    description:
      "Transform data into actionable insights with advanced tracking, custom reporting, and strategic recommendations for growth.",
    color: "bg-gradient-to-br from-red-500 to-red-600",
    gradient: "bg-[linear-gradient(45deg,#FF4D4D,#FF3333)]",
    href: "/services/analytics",
  },
  {
    icon: <Mail className="h-6 w-6 text-white" />,
    title: "Email Marketing",
    description:
      "Strategic email campaigns that nurture leads, boost engagement, and drive conversions through personalized communication flows.",
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
    gradient: "bg-[linear-gradient(45deg,#3B82F6,#2563EB)]",
    href: "/services/email-marketing",
  },
  {
    icon: <Globe className="h-6 w-6 text-white" />,
    title: "SEO Excellence",
    description:
      "Boost your organic visibility with technical SEO, content optimization, and strategic keyword targeting that drives quality traffic.",
    color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    gradient: "bg-[linear-gradient(45deg,#10B981,#059669)]",
    href: "/services/seo",
  },
  {
    icon: <MessageSquareText className="h-6 w-6 text-white" />,
    title: "Content Strategy",
    description:
      "Compelling content that tells your story, engages your audience, and establishes your brand as an industry authority.",
    color: "bg-gradient-to-br from-pink-500 to-pink-600",
    gradient: "bg-[linear-gradient(45deg,#EC4899,#DB2777)]",
    href: "/services/content-strategy",
  },
] as const;

const stats: Stat[] = [
  { number: "95%", text: "Client Retention Rate" },
  { number: "480+", text: "Successful Campaigns" },
  { number: "15M+", text: "Ad Spend Managed" },
] as const;

// Components
const ServiceCard: FC<Service> = ({
  icon,
  title,
  description,
  color,
  gradient,
  href,
}) => {
  const router = useRouter();

  return (
    <FadeInStaggerItem>
      <div
        onClick={() => router.push(href)}
        className={`${color} ${gradient} group relative z-10 h-full cursor-pointer overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
      >
        {/* Top Content */}
        <div className="mb-6 flex items-start justify-between">
          <div className="rounded-2xl bg-white/10 p-3">{icon}</div>
          <ArrowUpRight className="h-6 w-6 transform text-white/50 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
        </div>

        {/* Title and Description */}
        <div>
          <h3 className="mb-4 text-2xl font-bold text-white">{title}</h3>
          <p className="leading-relaxed text-white/75">{description}</p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-white/5 blur-xl transition-all duration-500 group-hover:scale-150" />
      </div>
    </FadeInStaggerItem>
  );
};

const StatItem: FC<Stat> = ({ number, text }) => (
  <FadeInStaggerItem className="p-6">
    <div className="mb-2 text-4xl font-bold text-gray-900">{number}</div>
    <div className="text-theme-neutral-600">{text}</div>
  </FadeInStaggerItem>
);

// Main Component
export const ServicesSection: FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <FadeIn className="flex flex-col gap-4">
            <span className="text-sm font-semibold uppercase tracking-wider text-red-500">
              Comprehensive Solutions
            </span>
            <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              Digital Marketing Excellence
              <br />
              Tailored to Your Growth
            </h2>
            <p className="text-lg text-theme-neutral-600">
              We combine strategic thinking, cutting-edge technology, and creative
              expertise to deliver measurable results that accelerate your business
              growth in the digital landscape.
            </p>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <FadeInStagger
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          delayStep={0.1}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </FadeInStagger>

        {/* Bottom Stats */}
        <FadeInStagger
          className="mt-20 grid gap-8 text-center md:grid-cols-3"
          delayStep={0.1}
          initialDelay={0.4}
        >
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
};