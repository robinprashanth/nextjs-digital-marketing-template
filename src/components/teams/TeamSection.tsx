"use client";
import { FC } from "react";
import Image from "next/image";
import { Twitter, Github, Dribbble } from "lucide-react";
import { TeamMember } from "@/types";
import { ScrollInView } from "@/components/motion/ScrollInView";
import { JoinTeamCTA } from "@/components/cta/Presets";

const socialIcons = {
  twitter: Twitter,
  github: Github,
  dribbble: Dribbble,
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alex Mitchell",
    role: "CEO & Strategic Director",
    image: "/images/team/alex.jpg",
    bio: "10+ years of experience in digital transformation and marketing strategy.",
    expertise: ["Strategic Planning", "Digital Innovation", "Team Leadership"],
    socials: [{ platform: "twitter", url: "#" }],
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Creative Director",
    image: "/images/team/sarah.jpg",
    bio: "Award-winning creative director with a passion for breakthrough digital experiences.",
    expertise: ["Brand Strategy", "UX Design", "Creative Direction"],
    socials: [{ platform: "dribbble", url: "#" }],
  },
  {
    id: 3,
    name: "James Wilson",
    role: "Technical Lead",
    image: "/images/team/james.jpg",
    bio: "Full-stack developer specializing in scalable marketing solutions.",
    expertise: ["Web Development", "Marketing Tech", "Analytics"],
    socials: [{ platform: "github", url: "#" }],
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Marketing Strategist",
    image: "/images/team/emily.jpg",
    bio: "Data-driven marketer with expertise in growth and acquisition strategies.",
    expertise: ["Growth Marketing", "Data Analytics", "Campaign Management"],
    socials: [{ platform: "twitter", url: "#" }],
  },
];

const TeamCard: FC<{ member: TeamMember }> = ({ member }) => (
  <ScrollInView
  useInView={true}
    className="group relative overflow-hidden rounded-2xl bg-white p-4 shadow-lg transition-all hover:shadow-xl dark:bg-theme-neutral-800"
  >
    {/* Image Container */}
    <div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-xl">
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* Overlay with social links */}
      <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {member.socials.map((social) => {
          const Icon = socialIcons[social.platform];
          return (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white p-2 text-theme-neutral-900 transition-transform hover:scale-110"
            >
              <Icon className="h-5 w-5" />
            </a>
          );
        })}
      </div>
    </div>

    {/* Content */}
    <div className="space-y-2 text-center">
      <h3 className="text-xl font-bold text-theme-neutral-900 dark:text-white">
        {member.name}
      </h3>
      <p className="text-theme-primary-600 dark:text-theme-primary-400">{member.role}</p>
      <p className="text-sm text-theme-neutral-600 dark:text-theme-neutral-300">{member.bio}</p>

      {/* Expertise Tags */}
      <div className="flex flex-wrap justify-center gap-2 pt-2">
        {member.expertise.map((skill, index) => (
          <span
            key={index}
            className="rounded-full bg-purple-50 px-3 py-1 text-xs text-theme-primary-600 dark:bg-purple-900/30 dark:text-theme-primary-400"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </ScrollInView>
);

export const TeamSection: FC = () => {
  return (
    <section className="bg-gray-50 py-24 dark:bg-theme-neutral-900">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <ScrollInView
        useInView={true}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 block bg-gradient-to-r from-theme-primary-600 to-theme-ocean-600 bg-clip-text text-sm font-semibold tracking-wider text-transparent">
            OUR EXPERTS
          </span>
          <h2 className="mb-6 text-3xl font-bold text-theme-neutral-900 dark:text-white md:text-5xl">
            Meet Our Leadership Team
          </h2>
          <p className="text-lg text-theme-neutral-600 dark:text-theme-neutral-400">
            We bring together expertise across strategy, design, and technology
            to deliver exceptional results for our clients.
          </p>
        </ScrollInView>

        {/* Team Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        {/* Join the Team CTA */}
        <JoinTeamCTA />
      </div>
    </section>
  );
};
