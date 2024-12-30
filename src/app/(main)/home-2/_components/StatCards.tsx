"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { FadeInStagger } from "@/components/motion/FadeInStagger";
import { FadeInStaggerItem } from "@/components/motion/FadeInStaggerItem";
import { ScaleIn } from "@/components/motion/ScaleIn";

interface StatCardProps {
  title: string;
  value: string;
  color: string;
}

const StatCard = ({ title, value, color }: StatCardProps) => (
  <ScaleIn>
    <div
      className={`
        ${color}
        rounded-[1.5rem] sm:rounded-[2rem] 
        p-5 sm:p-6 md:p-8
        relative 
        overflow-hidden
        w-full
        min-h-[140px] sm:min-h-[160px] md:min-h-[180px]
        hover:shadow-lg
        transition-shadow
        duration-300
      `}
    >
      <div className="h-full flex flex-col justify-between">
        <FadeIn 
          delay={0.2}
          className="text-[13px] sm:text-sm md:text-base font-medium uppercase tracking-wide"
        >
          {title}
        </FadeIn>

        <FadeIn 
          delay={0.3}
          className="text-[2.5rem] sm:text-5xl md:text-6xl font-bold flex items-baseline"
        >
          {value}
          <span className="text-lg sm:text-2xl md:text-3xl ml-1 font-medium">+</span>
        </FadeIn>
      </div>
    </div>
  </ScaleIn>
);

export function StatCards() {
  const stats = [
    {
      section: "Projects",
      items: [
        {
          title: "SUCCESSFUL PROJECTS",
          value: "700",
          color: "bg-[#8B5CF6] text-white"
        },
        {
          title: "ONGOING PROJECTS",
          value: "25",
          color: "bg-[#3B82F6] text-white"
        }
      ]
    },
    {
      section: "Growth",
      items: [
        {
          title: "YEARS EXPERIENCE",
          value: "12",
          color: "bg-[#10B981] text-white"
        },
        {
          title: "HAPPY CLIENTS",
          value: "300",
          color: "bg-[#8B5CF6] text-white"
        }
      ]
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="space-y-10 sm:space-y-16">
        {stats.map((section) => (
          <div key={section.section} className="space-y-4">
            <FadeIn>
              <h3 className="text-xl text-gray-500 mb-6">{section.section}</h3>
            </FadeIn>
            
            <FadeInStagger>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {section.items.map((stat) => (
                  <FadeInStaggerItem key={stat.title}>
                    <StatCard
                      title={stat.title}
                      value={stat.value}
                      color={stat.color}
                    />
                  </FadeInStaggerItem>
                ))}
              </div>
            </FadeInStagger>
          </div>
        ))}
      </div>
    </div>
  );
} 