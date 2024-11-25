"use client";
import { FC } from "react";
import { motion } from "motion/react";
import {
  Star,
  ArrowUpRight,
  Quote,
  ChevronRight,
  TrendingUp,
  Users,
  Target,
  Globe,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Metric {
  label: string;
  value: string;
  icon: typeof TrendingUp;
}

interface Testimonial {
  author: string;
  role: string;
  company: string;
  image: string;
  content: string;
}

interface CaseStudy {
  client: string;
  industry: string;
  logo: string;
  title: string;
  description: string;
  metrics: Metric[];
  testimonial: Testimonial;
}

interface CaseStudyCardProps extends CaseStudy {
  index: number;
}

const ClientMetric: FC<Metric & { index: number }> = ({
  label,
  value,
  icon: Icon,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.1 * index }}
    className="flex flex-col items-center space-y-2 text-center"
  >
    <div className="rounded-full bg-purple-500/10 p-3">
      <Icon className="h-6 w-6 text-purple-400" />
    </div>
    <div className="text-2xl font-bold text-foreground">{value}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </motion.div>
);

const TestimonialCard: FC<Testimonial & { index: number }> = ({
  author,
  role,
  company,
  image,
  content,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2 * index }}
    className="relative rounded-2xl border border-gray-800 bg-card p-6"
  >
    <div className="mb-6">
      <Quote className="h-12 w-12 text-purple-400 opacity-20" />
    </div>
    <p className="mb-6 text-lg text-muted-foreground">{content}</p>
    <div className="flex items-center gap-4">
      <div className="relative h-12 w-12 overflow-hidden rounded-full">
        <Image src={image} alt={author} fill className="object-cover" />
      </div>
      <div>
        <div className="font-semibold text-foreground">{author}</div>
        <div className="text-sm text-muted-foreground">
          {role}, {company}
        </div>
      </div>
    </div>
    {/* Rating */}
    <div className="absolute right-6 top-6 flex">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-purple-400 text-purple-400" />
      ))}
    </div>
  </motion.div>
);

const CaseStudyCard: FC<CaseStudyCardProps> = ({
  client,
  industry,
  logo,
  title,
  description,
  metrics,
  testimonial,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.1 * index }}
    className="group rounded-2xl border border-gray-800 bg-card p-6 transition-all duration-300 hover:border-purple-500/20 hover:shadow-[0_0_30px_2px_rgba(147,51,234,0.1)]"
  >
    {/* Header */}
    <div className="mb-6 flex items-start justify-between">
      <div>
        <div className="mb-2 inline-flex rounded-full bg-purple-500/10 px-3 py-1">
          <span className="text-sm font-medium text-purple-400">
            {industry}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>
      <div className="relative h-12 w-12 overflow-hidden rounded-lg">
        <Image src={logo} alt={client} fill className="object-contain" />
      </div>
    </div>

    {/* Description */}
    <p className="mb-6 text-muted-foreground">{description}</p>

    {/* Metrics */}
    <div className="mb-6 grid grid-cols-3 gap-4">
      {metrics.map((metric, idx) => (
        <ClientMetric key={idx} {...metric} index={idx} />
      ))}
    </div>

    {/* Testimonial */}
    <TestimonialCard {...testimonial} index={index} />

    {/* View Case Study Button */}
    <div className="mt-6 text-right">
      <Button variant="text-link">
        View Case Study
        <ArrowUpRight />
      </Button>
    </div>
  </motion.div>
);

export const ClientSuccess: FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      client: "TechCorp",
      industry: "Technology",
      logo: "/images/clients/techcorp.jpg",
      title: "Driving 300% Growth in B2B Lead Generation",
      description:
        "Transformed TechCorp's digital presence and lead generation strategy, resulting in exceptional growth and market expansion.",
      metrics: [
        {
          label: "Increase in Leads",
          value: "300%",
          icon: TrendingUp,
        },
        {
          label: "New Customers",
          value: "1.2K+",
          icon: Users,
        },
        {
          label: "ROI",
          value: "450%",
          icon: Target,
        },
      ],
      testimonial: {
        author: "Sarah Chen",
        role: "Marketing Director",
        company: "TechCorp",
        image: "/assets/profile1.jpg",
        content:
          "The team's strategic approach and dedication to results transformed our digital marketing efforts. They didn't just meet our goals – they exceeded them consistently.",
      },
    },
    {
      client: "GlobalTrade",
      industry: "E-commerce",
      logo: "/images/clients/globaltrade.jpg",
      title: "Scaling E-commerce Revenue to $10M+",
      description:
        "Implemented comprehensive digital strategy that scaled GlobalTrade's e-commerce platform to new heights.",
      metrics: [
        {
          label: "Revenue Growth",
          value: "200%",
          icon: TrendingUp,
        },
        {
          label: "Markets Entered",
          value: "12+",
          icon: Globe,
        },
        {
          label: "ROAS",
          value: "380%",
          icon: Target,
        },
      ],
      testimonial: {
        author: "Michael Ross",
        role: "CEO",
        company: "GlobalTrade",
        image: "/assets/profile2.jpg",
        content:
          "Their expertise in e-commerce and digital marketing has been instrumental in our growth. The results speak for themselves – our revenue has more than doubled.",
      },
    },
  ];

  return (
    <section className="relative border-t border-gray-800 py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-semibold text-purple-400">
            Success Stories
          </span>
          <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            Delivering{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Exceptional Results
            </span>{" "}
            for Our Clients
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover how we&apos;ve helped businesses achieve remarkable growth
            through innovative digital marketing strategies.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} index={index} />
          ))}
        </div>

        {/* View More Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 flex max-w-3xl flex-col items-center space-y-8"
        >
          <Button variant="soft" size="fluid" className="group">
            View More Case Studies
            <ChevronRight />
          </Button>

          {/* Success Metrics */}
          <div className="grid w-full grid-cols-3 gap-8 rounded-2xl border border-gray-800 bg-card p-8">
            {[
              { label: "Client Satisfaction", value: "98%" },
              { label: "Projects Completed", value: "500+" },
              { label: "Revenue Generated", value: "$100M+" },
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-foreground">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientSuccess;
