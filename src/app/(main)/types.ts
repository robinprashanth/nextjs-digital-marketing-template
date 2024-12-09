import { LucideIcon } from "lucide-react";

export interface StatCardProps {
  icon: string;
  title: string;
  value: string;
  gradient: string;
  borderColor: string;
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

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  articleCount: number;
}
