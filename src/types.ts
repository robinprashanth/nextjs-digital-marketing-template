import React, { PropsWithChildren, ReactNode } from "react";
import { LucideIcon } from "lucide-react";

export interface FloatingShapeProps {
  className: string;
  children: React.ReactNode;
  delay?: number;
}

export interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  rating: number;
  quote: string;
}

export interface StatCardProps {
  icon: string;
  title: string;
  value: string;
  gradient: string;
  borderColor: string;
}

export interface ClientAvatarProps {
  image: string;
  index: number;
}

export interface MethodStepProps {
  number: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: React.ReactNode | string;
  delay?: number;
  isHighlighted?: boolean;
}

export interface WorkingStatCardProps {
  title: string;
  value: string;
  description: string;
}

export interface PortfolioItemProps {
  title: string;
  category: string;
  metrics: {
    label: string;
    value: string;
    change: string;
  }[];
  image: string;
  color: string;
  gradient: string;
}

export interface TestimonialProps {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
  companyLogo: React.ReactNode;
}

export interface TestimonialSectionCardProps extends TestimonialProps {
  isActive?: boolean;
}

export interface SocialLink {
  platform: "twitter" | "github" | "dribbble";
  url: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
  socials: SocialLink[];
}

interface PricingFeature {
  id: number;
  title: string;
  description: string;
  included: boolean | "partial" | number;
}

export interface PricingPlan {
  id: number;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: PricingFeature[];
  isPopular?: boolean;
  cta: {
    text: string;
    href: string;
  };
}

export interface ContactFormData {
  fullName: string;
  email: string;
  company: string;
  phone?: string;
  service: string;
  budget: string;
  message: string;
}

export interface TechTool {
  id: number;
  name: string;
  description: string;
  icon: string;
  category:
    | "analytics"
    | "marketing"
    | "social"
    | "seo"
    | "advertising"
    | "development";
  expertise: number; // 1-100
  certification?: string;
}

export interface IndustryMetric {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
}

export interface IndustryCase {
  clientName: string;
  logo: string;
  result: string;
}

export interface Industry {
  id: number;
  name: string;
  description: string;
  icon: ReactNode; // Changed from specific component type to ReactNode
  image: string;
  metrics: IndustryMetric[];
  cases: IndustryCase[];
  expertise: number;
}

export interface NavLink {
  title: string;
  href: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface NavSection {
  title: string;
  items: NavLink[];
}

export interface MegaMenuProps {
  sections: NavSection[];
  isOpen: boolean;
  onClose: () => void;
}

export interface DropdownMenuProps {
  items: NavLink[];
  isOpen: boolean;
  onClose: () => void;
}

// service section
export interface ServiceHeroProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
}

export interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface MethodologyStepProps {
  number: number;
  title: string;
  description: string;
}

export interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface MetricProps {
  label: string;
  value: string;
  trend: number;
  icon: React.ReactNode;
}

export interface ToolProps {
  name: string;
  logo: string;
  description: string;
}

export interface FAQProps {
  question: string;
  answer: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
  helpful: number;
  lastUpdated: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  articleCount: number;
}

export interface PopularTopic {
  title: string;
  views: string;
  category: string;
  articles: string[];
}

export interface ArticleMetadata {
  title: string;
  excerpt: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  readTime: string;
}

export interface KnowledgeArticle extends ArticleMetadata {
  slug: string;
  id: string;
  helpful?: number | undefined;
  featured?: boolean;
}

export interface KnowledgeCategory {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  articleCount: number;
}

// Case studies typing
export interface CaseStudyMetrics {
  label: string;
  value: string;
  change: string;
}

export interface CaseStudyMetadata {
  title: string;
  category: string;
  excerpt: string;
  date: string;
  client: string;
  industry: string;
  image: string;
  color: string;
  gradient: string;
  metrics: CaseStudyMetrics[];
  featured?: boolean;
}

export interface CaseStudy extends CaseStudyMetadata {
  slug: string;
}

// Blogs typing
export interface BlogPostMetadata {
  title: string;
  excerpt: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  readTime: string;
  coverImage: string;
  featured?: boolean;
}

export interface BlogPost extends BlogPostMetadata {
  slug: string;
}

export type BadgeType = "new" | "soon" | "beta" | "hiring";

export type StatusType =
  | "new"
  | "soon"
  | "beta"
  | "hiring"
  | "active"
  | "pending"
  | "closed"
  | "success"
  | "error"
  | "warning"
  | "info";

export interface MegaMenuItem {
  title: string;
  href: string;
  description?: string;
  badge?: StatusType;
}

export interface MegaMenuSection {
  title: string;
  items: MegaMenuItem[];
  layout?: "grid" | "list";
}

export interface AnimationProps extends PropsWithChildren {
  className?: string;
  y?: number;
  x?: number;
  duration?: number;
}