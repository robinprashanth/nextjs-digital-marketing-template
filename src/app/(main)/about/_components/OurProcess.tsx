"use client";
import { FC } from "react";
import { motion } from "motion/react";
import {
  Search,
  BarChart2,
  Lightbulb,
  Rocket,
  Settings,
  LineChart,
  CheckCircle,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProcessStep {
  icon: typeof Search;
  phase: string;
  title: string;
  description: string;
  duration: string;
  deliverables: string[];
}

interface ProcessCardProps extends ProcessStep {
  index: number;
  totalSteps: number;
}

const ProcessCard: FC<ProcessCardProps> = ({
  icon: Icon,
  phase,
  title,
  description,
  duration,
  deliverables,
  index,
  totalSteps,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="relative flex flex-col md:flex-row md:gap-8"
  >
    {/* Left side with icon and connector */}
    <div className="flex flex-col items-center md:w-32">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-theme-primary-500/10">
        <Icon className="h-8 w-8 text-theme-primary-400" />
      </div>
      {index !== totalSteps - 1 && (
        <div className="mt-4 h-full w-px bg-gradient-to-b from-theme-primary-500/50 to-transparent" />
      )}
    </div>

    {/* Right side content */}
    <div className="flex-1 pb-12">
      <div className="rounded-2xl border border-gray-800 bg-card p-6 transition-all duration-300 hover:border-theme-primary-500/20 hover:shadow-[0_0_30px_2px_rgba(147,51,234,0.1)]">
        {/* Phase badge */}
        <div className="mb-4 inline-flex rounded-full bg-theme-primary-500/10 px-3 py-1">
          <span className="text-sm font-semibold text-theme-primary-400">
            Phase {index + 1}: {phase}
          </span>
        </div>

        <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
        <p className="mb-4 text-muted-foreground">{description}</p>

        {/* Duration */}
        <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>Typical Duration: {duration}</span>
        </div>

        {/* Deliverables */}
        <div className="space-y-2">
          <h4 className="font-medium text-foreground">Key Deliverables:</h4>
          <ul className="grid gap-2">
            {deliverables.map((deliverable, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-theme-primary-400" />
                <span className="text-sm text-muted-foreground">
                  {deliverable}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </motion.div>
);

export const OurProcess: FC = () => {
  const processSteps: ProcessStep[] = [
    {
      icon: Search,
      phase: "Discovery",
      title: "Research & Analysis",
      description:
        "Deep dive into your business, market, and competitors to develop a comprehensive understanding of your digital landscape.",
      duration: "1-2 weeks",
      deliverables: [
        "Comprehensive Market Analysis",
        "Competitor Benchmark Report",
        "Digital Opportunity Assessment",
        "Current Performance Audit",
      ],
    },
    {
      icon: BarChart2,
      phase: "Strategy",
      title: "Strategic Planning",
      description:
        "Develop a customized digital strategy aligned with your business objectives and market opportunities.",
      duration: "2-3 weeks",
      deliverables: [
        "Digital Marketing Roadmap",
        "Channel Strategy Document",
        "KPI Definition Framework",
        "Budget Allocation Plan",
      ],
    },
    {
      icon: Lightbulb,
      phase: "Creation",
      title: "Creative Development",
      description:
        "Transform strategy into compelling creative assets and campaigns that resonate with your target audience.",
      duration: "3-4 weeks",
      deliverables: [
        "Creative Brief & Concepts",
        "Content Calendar",
        "Campaign Assets",
        "Marketing Collateral",
      ],
    },
    {
      icon: Rocket,
      phase: "Launch",
      title: "Implementation",
      description:
        "Execute the strategy across chosen channels with precision and attention to detail.",
      duration: "2-3 weeks",
      deliverables: [
        "Campaign Setup",
        "Platform Integration",
        "Quality Assurance Report",
        "Launch Checklist",
      ],
    },
    {
      icon: Settings,
      phase: "Optimize",
      title: "Monitoring & Optimization",
      description:
        "Continuously monitor performance and optimize campaigns for maximum ROI.",
      duration: "Ongoing",
      deliverables: [
        "Performance Analytics",
        "Optimization Reports",
        "A/B Testing Results",
        "ROI Analysis",
      ],
    },
    {
      icon: LineChart,
      phase: "Scale",
      title: "Growth & Scaling",
      description:
        "Scale successful strategies and explore new opportunities for growth and expansion.",
      duration: "Ongoing",
      deliverables: [
        "Growth Opportunities Report",
        "Scaling Strategy",
        "Market Expansion Plan",
        "Performance Projections",
      ],
    },
  ];

  return (
    <section className="relative border-t border-gray-800 py-24">
      <div className="container relative mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-theme-primary-500/10 px-4 py-1.5 text-sm font-semibold text-theme-primary-400">
            Our Process
          </span>
          <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            Our{" "}
            <span className="bg-gradient-to-r from-theme-primary-400 to-theme-primary-600 bg-clip-text text-transparent">
              Proven Methodology
            </span>{" "}
            for Success
          </h2>
          <p className="text-lg text-muted-foreground">
            A systematic approach to digital marketing that ensures consistent
            results and sustainable growth for your business.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative mx-auto max-w-4xl">
          {processSteps.map((step, index) => (
            <ProcessCard
              key={index}
              {...step}
              index={index}
              totalSteps={processSteps.length}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-3xl text-center"
        >
          <Button variant="cta" size="fluid" asChild>
            <Link href="/contact" className="group">
              Start Your Project
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurProcess;
