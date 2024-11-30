import React from 'react';
import { Card } from '@/components/ui/card';
import { CheckSquare, MessageCircle, FileText, Calendar } from 'lucide-react';

type TeamTool = {
  title: string;
  description: string;
  icon: string;
  features: string[];
  rating?: number;
  progress?: number;
};

interface BentoGridProps {
  items: TeamTool[];
  className?: string;
}

const IconMap = {
  CheckSquare,
  MessageCircle,
  FileText,
  Calendar,
};

const cardStyles = [
  {
    bg: "bg-theme-rose-400",
    pattern: `bg-[radial-gradient(ellipse_at_bottom_right,theme-rose-300_0%,transparent_70%)]`,
    shapes: (
      <>
        <circle className="absolute right-12 top-12 h-20 w-20 fill-white/10" cx="50%" cy="50%" r="40%" />
        <path 
          className="absolute left-8 bottom-8 fill-white/10" 
          d="M0,25 L25,0 L50,25 L25,50 Z"
        />
      </>
    ),
  },
  {
    bg: "bg-theme-tulip-600",
    pattern: `bg-[radial-gradient(ellipse_at_top_left,theme-tulip-300_0%,transparent_70%)]`,
    shapes: (
      <>
        <circle className="absolute left-16 top-16 h-16 w-16 fill-white/10" cx="50%" cy="50%" r="40%" />
        <circle className="absolute right-8 bottom-8 h-24 w-24 fill-white/10" cx="50%" cy="50%" r="40%" />
      </>
    ),
  },
  {
    bg: "bg-theme-secondary-400",
    pattern: `bg-[radial-gradient(circle_at_bottom_left,theme-secondary-300_0%,transparent_70%)]`,
    shapes: (
      <>
        <path 
          className="absolute right-12 top-12 fill-white/10" 
          d="M0,0 L40,0 L40,40 Z"
        />
        <circle className="absolute left-8 bottom-8 h-20 w-20 fill-white/10" cx="50%" cy="50%" r="40%" />
      </>
    ),
  },
  {
    bg: "bg-theme-ocean-600",
    pattern: `bg-[radial-gradient(ellipse_at_center,theme-ocean-300_0%,transparent_70%)]`,
    shapes: (
      <>
        <path 
          className="absolute left-12 top-12 fill-white/10" 
          d="M20,0 L40,20 L20,40 L0,20 Z"
        />
        <circle className="absolute right-8 bottom-8 h-16 w-16 fill-white/10" cx="50%" cy="50%" r="40%" />
      </>
    ),
  },
];

export const BentoGrid = ({ items, className = '' }: BentoGridProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 p-6 ${className}`}>
      {items.map((item, i) => {
        const Icon = IconMap[item.icon as keyof typeof IconMap];
        const style = cardStyles[i % cardStyles.length];
        
        return (
          <Card
            key={i}
            className={`
              relative overflow-hidden rounded-3xl border-0
              ${style.bg} hover:shadow-xl transition-all duration-500
              ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}
              group
            `}
          >
            {/* Pattern overlay */}
            <div className={`absolute inset-0 opacity-20 ${style.pattern}`} />
            
            {/* Background shapes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {style.shapes}
            </svg>

            {/* Curved lines pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute w-full h-full"
                   style={{
                     backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`
                   }}
              />
            </div>
            
            {/* Card content */}
            <div className="relative z-10 p-6">
            
              <h3 className="text-2xl font-bold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-white/80 text-sm mb-4">
                {item.description}
              </p>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <span className="text-white">★</span>
                  <span className="text-white/90 text-sm">
                    {item.rating || "4.5"}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-white">○</span>
                  <span className="text-white/90 text-sm">
                    {item.progress || "32%"}
                  </span>
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-white/20 p-2.5 rounded-full backdrop-blur-sm">
                {Icon && <Icon className="h-5 w-5 text-white" />}
              </div>
            </div>

            {/* Hover effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-white/0 via-white/50 to-white/0" />
          </Card>
        );
      })}
    </div>
  );
};