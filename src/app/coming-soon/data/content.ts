import { Target, BarChart3,  TrendingUp, Users } from 'lucide-react';

// Feature type definition
export type MarketingFeature = {
  title: string;
  description: string;
  icon: React.FC<{ className?: string }>;
};

export const marketingFeatures: MarketingFeature[] = [
    {
      title: "Digital Strategy",
      description: "Strategic planning to maximize your online presence and ROI",
      icon: Target,
    },
    {
      title: "Social Media",
      description: "Engaging content and community management across platforms",
      icon: Users,
    },
    {
      title: "SEO Optimization",
      description: "Boost your search rankings and organic traffic",
      icon: TrendingUp,
    },
    {
      title: "Analytics",
      description: "Data-driven insights to optimize your marketing efforts",
      icon: BarChart3,
    },
  ];