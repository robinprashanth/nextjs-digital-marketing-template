"use client";

import { FloatIn } from "@/components/motion/FloatIn";
import Image from "next/image";

interface TeamMember {
  image: string;
  name: string;
}

interface TeamAvatarsProps {
  members: TeamMember[];
  label?: string;
}

export const TeamAvatars = ({ 
  members, 
  label = "Expert Team of Digital Innovators" 
}: TeamAvatarsProps) => {
  return (
    <div className="flex items-center gap-4 sm:gap-6">
      <div className="flex -space-x-4">
        {members.map((member, i) => (
          <FloatIn 
            key={i}
            delay={i * 0.2}
            duration={2}
            y={5}
          >
            <div className="relative w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-white p-0.5">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 40px, 56px"
                />
              </div>
            </div>
          </FloatIn>
        ))}
      </div>
      <span className="text-sm sm:text-base text-gray-400">{label}</span>
    </div>
  );
}; 