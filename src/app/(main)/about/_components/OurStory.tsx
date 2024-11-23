"use client";
import { FC } from "react";
import { motion } from "motion/react";

interface MilestoneProps {
  year: string;
  title: string;
  description: string;
  stats?: {
    label: string;
    value: string;
  }[];
  isLeft?: boolean;
  delay?: number;
}

const Milestone: FC<MilestoneProps> = ({
  year,
  title,
  description,
  stats,
  isLeft = false,
  delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`flex w-full ${isLeft ? "md:justify-end" : ""}`}
  >
    <div
      className={`relative w-full md:w-[calc(50%-2rem)] ${isLeft ? "md:text-right" : ""}`}
    >
      {/* Card */}
      <div className="relative rounded-2xl border border-gray-800 bg-card p-6">
        {/* Year Badge */}
        <div className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1">
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-sm font-semibold text-transparent">
            {year}
          </span>
        </div>

        {/* Content */}
        <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>

        {/* Stats if available */}
        {stats && (
          <div className={`mt-4 grid grid-cols-${stats.length} gap-4`}>
            {stats.map((stat, index) => (
              <div key={index} className="space-y-1">
                <div className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-2xl font-bold text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Connector Line */}
        <div
          className={`absolute top-8 ${
            isLeft
              ? "right-[-2rem] md:right-[-3rem]"
              : "left-[-2rem] md:left-[-3rem]"
          } h-px w-8 bg-gradient-to-r from-purple-500/50 to-transparent`}
        />

        {/* Dot */}
        <div
          className={`absolute top-8 ${
            isLeft ? "right-[-2.25rem]" : "left-[-2.25rem]"
          } h-3 w-3 rounded-full bg-purple-500`}
        >
          <div className="absolute inset-0 animate-ping rounded-full bg-purple-500 opacity-75" />
        </div>
      </div>
    </div>
  </motion.div>
);

export const OurStory: FC = () => {
  const milestones = [
    {
      year: "2014",
      title: "The Beginning",
      description:
        "Started as a small team of digital enthusiasts with a vision to transform the digital marketing landscape.",
      stats: [
        { value: "3", label: "Team Members" },
        { value: "5", label: "Clients" },
      ],
    },
    {
      year: "2016",
      title: "Expanding Horizons",
      description:
        "Opened our first international office and expanded our services to include comprehensive digital solutions.",
      stats: [
        { value: "25+", label: "Team Size" },
        { value: "50+", label: "Projects" },
      ],
    },
    {
      year: "2019",
      title: "Digital Innovation Hub",
      description:
        "Launched our proprietary marketing analytics platform and established partnerships with major tech companies.",
      stats: [
        { value: "100+", label: "Clients" },
        { value: "95%", label: "Success Rate" },
      ],
    },
    {
      year: "2022",
      title: "Global Impact",
      description:
        "Recognized as a leading digital marketing agency with a global presence and diverse client portfolio.",
      stats: [
        { value: "150+", label: "Team Members" },
        { value: "500+", label: "Projects Delivered" },
      ],
    },
    {
      year: "2024",
      title: "Future Forward",
      description:
        "Pioneering AI-driven marketing solutions and expanding our reach to emerging markets worldwide.",
      stats: [
        { value: "10+", label: "Global Offices" },
        { value: "1000+", label: "Success Stories" },
      ],
    },
  ];

  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-semibold text-purple-400">
            Our Journey
          </span>
          <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            A Decade of Digital{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From our humble beginnings to becoming a global digital force, our
            journey has been defined by innovation, growth, and an unwavering
            commitment to client success.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line - Desktop */}
          <div className="absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-gradient-to-b from-purple-500/50 via-purple-500/25 to-transparent md:block" />

          {/* Milestones */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <Milestone
                key={index}
                year={milestone.year}
                title={milestone.title}
                description={milestone.description}
                stats={milestone.stats}
                isLeft={index % 2 === 0}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
