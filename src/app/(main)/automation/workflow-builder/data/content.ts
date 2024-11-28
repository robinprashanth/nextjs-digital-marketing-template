export interface WorkflowTemplate {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  steps: number;
  category: string;
}

export interface AutomationFeature {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface WorkflowStep {
  title: string;
  description: string;
  icon: string;
}

export interface WorkflowStat {
  value: string;
  label: string;
  change: string;
  icon: string;
  color: string;
}

export const pageConfig = {
  title: "Workflow Builder",
  description:
    "Create powerful automated marketing workflows with our intuitive drag-and-drop builder",
};

export const workflowStats: WorkflowStat[] = [
  {
    value: "10M+",
    label: "Automations Run",
    change: "+45% vs last month",
    icon: "Zap",
    color: "text-theme-ocean-600",
  },
  {
    value: "2.5K",
    label: "Workflows Created",
    change: "+28% vs last month",
    icon: "GitBranch",
    color: "text-theme-primary-600",
  },
  {
    value: "98.5%",
    label: "Success Rate",
    change: "+12% vs last month",
    icon: "CheckCircle",
    color: "text-emerald-600",
  },
  {
    value: "150hrs",
    label: "Time Saved/Month",
    change: "+55% vs last month",
    icon: "Clock",
    color: "text-orange-600",
  },
];

export const workflowTemplates: WorkflowTemplate[] = [
  {
    id: "lead-nurture",
    title: "Lead Nurture",
    description:
      "Automated email sequence to nurture leads through your sales funnel",
    icon: "Users",
    gradient: "bg-[linear-gradient(45deg,#FF8145,#FF6B2B)]",
    steps: 5,
    category: "Email",
  },
  {
    id: "social-posting",
    title: "Social Media Posting",
    description: "Schedule and automate posts across multiple social platforms",
    icon: "Share2",
    gradient: "bg-[linear-gradient(45deg,#8A6FF9,#6B4FD9)]",
    steps: 4,
    category: "Social",
  },
  {
    id: "customer-onboarding",
    title: "Customer Onboarding",
    description: "Streamline your customer onboarding process with automation",
    icon: "UserPlus",
    gradient: "bg-[linear-gradient(45deg,#10B981,#059669)]",
    steps: 6,
    category: "Customer",
  },
  {
    id: "abandoned-cart",
    title: "Abandoned Cart",
    description: "Recover abandoned carts with automated follow-up sequences",
    icon: "ShoppingCart",
    gradient: "bg-[linear-gradient(45deg,#3B82F6,#2563EB)]",
    steps: 3,
    category: "eCommerce",
  },
  {
    id: "content-approval",
    title: "Content Approval",
    description: "Streamline content review and approval process",
    icon: "FileCheck",
    gradient: "bg-[linear-gradient(45deg,#EC4899,#DB2777)]",
    steps: 4,
    category: "Content",
  },
  {
    id: "lead-scoring",
    title: "Lead Scoring",
    description: "Automatically score and qualify leads based on actions",
    icon: "Target",
    gradient: "bg-[linear-gradient(45deg,#F59E0B,#D97706)]",
    steps: 5,
    category: "Sales",
  },
];

export const features: AutomationFeature[] = [
  {
    title: "Drag & Drop Builder",
    description:
      "Intuitive drag-and-drop interface for building complex workflows without code",
    icon: "MousePointer",
    color: "text-theme-ocean-500",
  },
  {
    title: "Conditional Logic",
    description:
      "Create sophisticated workflows with if/then conditions and branching paths",
    icon: "GitBranch",
    color: "text-theme-primary-500",
  },
  {
    title: "Multi-Channel",
    description: "Automate across email, SMS, social media, and other channels",
    icon: "Share",
    color: "text-theme-tulip-500",
  },
  {
    title: "Templates",
    description:
      "Start quickly with pre-built templates for common automation scenarios",
    icon: "Copy",
    color: "text-orange-500",
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    title: "Choose Template",
    description: "Start with a pre-built template or create from scratch",
    icon: "Template",
  },
  {
    title: "Configure Triggers",
    description: "Set up events that will start your workflow",
    icon: "Zap",
  },
  {
    title: "Add Actions",
    description: "Define the steps and actions in your workflow",
    icon: "ListChecks",
  },
  {
    title: "Set Conditions",
    description: "Add conditional logic and branching paths",
    icon: "GitBranch",
  },
  {
    title: "Test & Launch",
    description: "Test your workflow and launch when ready",
    icon: "Rocket",
  },
];

export const integrations = [
  { name: "Mailchimp", icon: "Mail" },
  { name: "Slack", icon: "MessageSquare" },
  { name: "HubSpot", icon: "Database" },
  { name: "Salesforce", icon: "BarChart2" },
  { name: "Zapier", icon: "Zap" },
  { name: "Google Analytics", icon: "PieChart" },
];
