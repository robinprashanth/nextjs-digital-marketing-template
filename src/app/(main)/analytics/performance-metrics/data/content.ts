export interface PerformanceData {
  month: string;
  visitors: number;
  conversions: number;
  revenue: number;
}

export interface MetricCard {
  title: string;
  value: string;
  change: string;
  icon: string;
  color: string;
}

export interface ChartLegend {
  label: string;
  color: string;
}

export interface ChartConfig {
  title: string;
  subtitle: string;
  legends?: ChartLegend[];
  colors: {
    [key: string]: string;
  };
}

export interface AdditionalMetric {
  title: string;
  value: string;
  icon: string;
  color: string;
  bgColor: string;
}

export interface PageConfig {
  title: string;
  description: string;
}
export const pageConfig: PageConfig = {
  title: "Performance Metrics",
  description:
    "Track and analyze your marketing performance metrics in real-time",
};

export const performanceData: PerformanceData[] = [
  { month: "Jan", visitors: 2400, conversions: 1800, revenue: 12400 },
  { month: "Feb", visitors: 3600, conversions: 2800, revenue: 18600 },
  { month: "Mar", visitors: 4200, conversions: 3200, revenue: 22400 },
  { month: "Apr", visitors: 5800, conversions: 4600, revenue: 32600 },
  { month: "May", visitors: 7400, conversions: 5900, revenue: 42800 },
  { month: "Jun", visitors: 8900, conversions: 7200, revenue: 58400 },
];

export const keyMetrics: MetricCard[] = [
  {
    title: "Total Visitors",
    value: "48.5K",
    change: "+12.5% vs last month",
    icon: "Users",
    color: "text-theme-ocean-600",
  },
  {
    title: "Conversion Rate",
    value: "8.72%",
    change: "+2.4% vs last month",
    icon: "Target",
    color: "text-theme-primary-600",
  },
  {
    title: "Avg. Session Duration",
    value: "3m 45s",
    change: "+0.8% vs last month",
    icon: "Clock",
    color: "text-emerald-600",
  },
  {
    title: "Revenue",
    value: "$187.3K",
    change: "+18.2% vs last month",
    icon: "DollarSign",
    color: "text-orange-600",
  },
];

export const chartConfigs: Record<string, ChartConfig> = {
  trafficOverview: {
    title: "Traffic Overview",
    subtitle: "Visitors and conversions over time",
    legends: [
      { label: "Visitors", color: "bg-theme-ocean-500" },
      { label: "Conversions", color: "bg-theme-primary-500" },
    ],
    colors: {
      visitors: "#3B82F6",
      conversions: "#8B5CF6",
    },
  },
  revenueTrends: {
    title: "Revenue Trends",
    subtitle: "Monthly revenue performance",
    colors: {
      revenue: "#10B981",
    },
  },
};

export const additionalMetrics: AdditionalMetric[] = [
  {
    title: "Click-Through Rate",
    value: "4.28%",
    icon: "MousePointer",
    color: "text-theme-ocean-600",
    bgColor: "bg-theme-ocean-500/10",
  },
  {
    title: "Social Shares",
    value: "2,845",
    icon: "Share2",
    color: "text-theme-primary-600",
    bgColor: "bg-theme-primary-500/10",
  },
  {
    title: "Growth Rate",
    value: "+22.4%",
    icon: "LineChart",
    color: "text-emerald-600",
    bgColor: "bg-emerald-500/10",
  },
];
