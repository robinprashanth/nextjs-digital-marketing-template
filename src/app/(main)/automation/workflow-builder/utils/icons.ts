import {
  Users,
  Target,
  Clock,
  DollarSign,
  LineChart,
  MousePointer,
  Share2,
} from "lucide-react";

const iconMap = {
  Users,
  Target,
  Clock,
  DollarSign,
  LineChart,
  MousePointer,
  Share2,
};

export const getIcon = (name: string) => {
  return iconMap[name as keyof typeof iconMap] || Users;
};
