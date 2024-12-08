import { ScrollInView } from "@/components/motion/ScrollInView";
import { CaseStudy } from "@/types";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

export const CaseStudyCard: FC<CaseStudyCardProps> = ({ caseStudy, index }) => (
  <ScrollInView
    useInView={true}
    delay={index * 0.1}
    className="group cursor-pointer"
  >
    <Link href={`/case-studies/${caseStudy.slug}`}>
      <div
        className={`relative overflow-hidden rounded-3xl ${caseStudy.color} p-1`}
      >
        <div className="relative flex flex-col overflow-hidden rounded-2xl bg-card">
          {/* Image Section */}
          <div className="relative h-64 overflow-hidden">
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div
              className={`absolute inset-0 ${caseStudy.gradient} opacity-40`}
            />

            {/* Category Tag */}
            <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1 text-sm font-medium backdrop-blur-sm">
              {caseStudy.category}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {caseStudy.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {caseStudy.client}
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="rounded-full bg-theme-primary-500/10 p-2"
              >
                <ArrowUpRight className="h-4 w-4 text-theme-primary-400" />
              </motion.div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {caseStudy.metrics.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    {metric.label}
                  </p>
                  <p className="text-lg font-bold text-foreground">
                    {metric.value}
                  </p>
                  <p className="flex items-center gap-1 text-sm text-theme-tulip-500">
                    <TrendingUp className="h-4 w-4" />
                    {metric.change}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  </ScrollInView>
);
