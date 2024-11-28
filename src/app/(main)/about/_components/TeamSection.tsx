"use client";
import { FC } from "react";
import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScrollInView } from "@/components/motion/ScrollInView";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  department: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

interface TeamMemberCardProps extends TeamMember {
  index: number;
}

const TeamMemberCard: FC<TeamMemberCardProps> = ({
  name,
  role,
  image,
  bio,
  department,
  socials,
  index,
}) => (
  <ScrollInView  delay={ index * 0.1}
    className="group relative"
  >
    <div className="relative overflow-hidden rounded-2xl border border-theme-neutral-800 bg-card transition-all duration-300 hover:border-theme-primary-500/20 hover:shadow-[0_0_30px_2px_rgba(147,51,234,0.1)]">
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Department Badge */}
        <div className="mb-4 inline-flex rounded-full bg-theme-primary-500/10 px-3 py-1">
          <span className="text-sm text-theme-primary-400">{department}</span>
        </div>

        <h3 className="text-xl font-semibold text-foreground">{name}</h3>
        <p className="mt-1 text-muted-foreground">{role}</p>

        {/* Bio */}
        <p className="mt-4 text-sm text-muted-foreground">{bio}</p>

        {/* Social Links */}
        <div className="mt-6 flex gap-4">
          {socials.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-theme-primary-500/10 p-2 text-theme-primary-400 transition-colors hover:bg-theme-primary-500/20"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {socials.twitter && (
            <a
              href={socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-theme-primary-500/10 p-2 text-theme-primary-400 transition-colors hover:bg-theme-primary-500/20"
            >
              <Twitter className="h-5 w-5" />
            </a>
          )}
          {socials.email && (
            <a
              href={`mailto:${socials.email}`}
              className="rounded-full bg-theme-primary-500/10 p-2 text-theme-primary-400 transition-colors hover:bg-theme-primary-500/20"
            >
              <Mail className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  </ScrollInView>
);

export const TeamSection: FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      department: "Leadership",
      image: "/images/team/sarah.jpg",
      bio: "15+ years of digital marketing expertise, leading innovation and growth strategies.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "sarah@example.com",
      },
    },
    {
      name: "Michael Chen",
      role: "Creative Director",
      department: "Creative",
      image: "/images/team/michael.jpg",
      bio: "Award-winning creative director with a passion for breakthrough digital experiences.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Strategy",
      department: "Strategy",
      image: "/images/team/emily.jpg",
      bio: "Data-driven strategist specializing in growth marketing and client success.",
      socials: {
        linkedin: "https://linkedin.com",
        email: "emily@example.com",
      },
    },
    // Add more team members as needed
  ];

  const departments = [
    "All",
    "Leadership",
    "Creative",
    "Strategy",
    "Development",
  ];

  return (
    <section className="relative border-t border-theme-neutral-800 py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <ScrollInView
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-theme-primary-500/10 px-4 py-1.5 text-sm font-semibold text-theme-primary-400">
            Our Team
          </span>
          <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            Meet the{" "}
            <span className="bg-gradient-to-r from-theme-primary-400 to-theme-primary-600 bg-clip-text text-transparent">
              Minds
            </span>{" "}
            Behind Our Success
          </h2>
          <p className="text-lg text-muted-foreground">
            A diverse team of passionate individuals dedicated to transforming
            businesses through innovative digital solutions.
          </p>
        </ScrollInView>

        {/* Department Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {departments.map((dept, index) => (
            <Button
              variant="tag"
              key={index}
              className="rounded-full bg-theme-primary-500/10 px-6 py-2 text-sm font-medium text-theme-primary-400 transition-colors hover:bg-theme-primary-500/20"
            >
              {dept}
            </Button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} index={index} />
          ))}
        </div>

        {/* Join the Team CTA */}
        <ScrollInView
          className="mx-auto mt-20 max-w-3xl rounded-2xl border border-theme-neutral-800 bg-card p-8 text-center md:p-12"
        >
          <h3 className="mb-4 text-2xl font-bold text-foreground">
            Join Our Team
          </h3>
          <p className="mb-6 text-muted-foreground">
            We&apos;re always looking for talented individuals to join our
            growing team. Check out our open positions and become part of our
            success story.
          </p>
          <Button variant="cta" size="fluid" asChild>
            <Link href="/contact" className="group">
              View Open Positions
            </Link>
          </Button>
        </ScrollInView>
      </div>
    </section>
  );
};
