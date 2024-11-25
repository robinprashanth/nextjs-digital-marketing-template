export interface TeamStat {
  value: string;
  label: string;
  change: string;
  icon: string;
  color: string;
}

export interface CollaborationFeature {
  title: string;
  description: string;
  icon: string;
  color: string;
  benefits: string[];
}

export interface TeamTool {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  features: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  status: "online" | "busy" | "away" | "offline";
}

export const pageConfig = {
  title: "Team Tools",
  description:
    "Powerful collaboration tools to help your team work better together",
};

export const teamStats: TeamStat[] = [
  {
    value: "98%",
    label: "Team Efficiency",
    change: "+25% vs last month",
    icon: "Zap",
    color: "text-blue-600",
  },
  {
    value: "2.8x",
    label: "Faster Delivery",
    change: "+45% vs last month",
    icon: "Timer",
    color: "text-theme-primary-600",
  },
  {
    value: "45%",
    label: "Time Saved",
    change: "+18% vs last month",
    icon: "Clock",
    color: "text-emerald-600",
  },
  {
    value: "24/7",
    label: "Team Availability",
    change: "+35% coverage",
    icon: "Globe",
    color: "text-orange-600",
  },
];

export const collaborationFeatures: CollaborationFeature[] = [
  {
    title: "Real-time Collaboration",
    description: "Work together seamlessly with your team in real-time",
    icon: "Users",
    color: "text-blue-500",
    benefits: [
      "Live document editing",
      "Instant messaging",
      "Video conferencing",
      "Screen sharing",
    ],
  },
  {
    title: "Project Management",
    description:
      "Keep track of projects and tasks with powerful management tools",
    icon: "FolderKanban",
    color: "text-theme-primary-500",
    benefits: [
      "Kanban boards",
      "Task tracking",
      "Timeline views",
      "Project templates",
    ],
  },
  {
    title: "Document Sharing",
    description: "Share and manage documents with advanced version control",
    icon: "FileText",
    color: "text-emerald-500",
    benefits: [
      "Version history",
      "File organization",
      "Access control",
      "Quick sharing",
    ],
  },
  {
    title: "Team Communication",
    description: "Stay connected with integrated communication tools",
    icon: "MessageSquare",
    color: "text-orange-500",
    benefits: [
      "Team channels",
      "Direct messaging",
      "Thread discussions",
      "File sharing",
    ],
  },
];

export const teamTools: TeamTool[] = [
  {
    title: "Task Management",
    description: "Organize and track team tasks efficiently",
    icon: "CheckSquare",
    gradient: "bg-[linear-gradient(45deg,#FF8145,#FF6B2B)]",
    features: [
      "Task assignments",
      "Due dates",
      "Priority levels",
      "Progress tracking",
    ],
  },
  {
    title: "Team Chat",
    description: "Real-time communication for teams",
    icon: "MessageCircle",
    gradient: "bg-[linear-gradient(45deg,#8A6FF9,#6B4FD9)]",
    features: [
      "Group channels",
      "Direct messages",
      "File sharing",
      "Video calls",
    ],
  },
  {
    title: "Document Hub",
    description: "Central repository for team documents",
    icon: "FileText",
    gradient: "bg-[linear-gradient(45deg,#10B981,#059669)]",
    features: [
      "File storage",
      "Version control",
      "Collaboration",
      "Search functionality",
    ],
  },
  {
    title: "Team Calendar",
    description: "Coordinate team schedules and events",
    icon: "Calendar",
    gradient: "bg-[linear-gradient(45deg,#3B82F6,#2563EB)]",
    features: [
      "Event scheduling",
      "Meeting planner",
      "Availability view",
      "Reminders",
    ],
  },
];

export const integrations = [
  { name: "Slack", icon: "MessageSquare" },
  { name: "Google Workspace", icon: "Mail" },
  { name: "Microsoft Teams", icon: "Users" },
  { name: "Zoom", icon: "Video" },
  { name: "Asana", icon: "CheckSquare" },
  { name: "Trello", icon: "Trello" },
];
