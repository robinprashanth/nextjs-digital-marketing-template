import React, { PropsWithChildren, ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";

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

export interface ClientAvatarProps {
  image: string;
  index: number;
}

export interface TestimonialProps {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
  companyLogo: string;
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
  slug: string;
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

export interface DocMetadata {
  title: string;
  description: string;
  category?: string;
  tags?: string[];
  author?: {
    name: string;
    avatar: string;
  };
  date?: string;
  readTime?: string;
}

export interface Doc {
  slug: string;
  frontMatter: DocMetadata;
  content: string;
}

export interface DocCategory {
  title: string;
  items: Doc[];
}

export interface Testimonial {
  author: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating?: number;
}

export interface JobPosting {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  experience: string;
  salary: string;
  posted: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export interface Testimonials {
  id?: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string | StaticImageData;
  companyLogo: string | StaticImageData;
  rating: number;
}
