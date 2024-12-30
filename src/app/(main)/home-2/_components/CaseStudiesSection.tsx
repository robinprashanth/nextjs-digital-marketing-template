"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { FadeInStagger } from "@/components/motion/FadeInStagger";
import { FadeInStaggerItem } from "@/components/motion/FadeInStaggerItem";
import { ScaleIn } from "@/components/motion/ScaleIn";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  description: string;
  results: string[];
  image: string;
  className?: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "E-Commerce Revolution",
    client: "TechStyle Fashion",
    description:
      "Complete digital transformation of a traditional retail business into a modern e-commerce powerhouse.",
    results: [
      "243% increase in online sales",
      "1.2M new customers",
      "98% mobile conversion rate",
    ],
    image: "/images/portfolio/ecom.jpeg",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: "2",
    title: "AI-Powered Analytics",
    client: "DataFlow Solutions",
    description:
      "Implementation of advanced analytics platform with predictive capabilities.",
    results: ["85% faster reporting", "60% cost reduction"],
    image: "/images/portfolio/analytics.jpeg",
  },
  {
    id: "3",
    title: "Mobile App Success",
    client: "HealthTech Plus",
    description:
      "Revolutionary healthcare app connecting patients with specialists instantly.",
    results: ["1M+ downloads", "4.9 star rating"],
    image: "/images/portfolio/mobile.jpeg",
    className: "md:col-span-2",
  },
  {
    id: "4",
    title: "Cloud Migration",
    client: "Enterprise Corp",
    description:
      "Seamless migration of legacy systems to cloud infrastructure.",
    results: ["99.99% uptime", "40% cost savings"],
    image: "/images/portfolio/cloud.jpeg",
  },
];

const CaseStudyCard = ({ study }: { study: CaseStudy }) => (
  <ScaleIn>
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm ${study.className || ""} `}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/50 via-transparent to-pink-500/50 p-[1px]">
        <div className="absolute inset-0 rounded-2xl bg-black" />
      </div>

      {/* Glowing corner accents */}
      <div className="absolute left-0 top-0 h-20 w-20">
        <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-purple-500 to-transparent" />
        <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-purple-500 to-transparent" />
      </div>
      <div className="absolute bottom-0 right-0 h-20 w-20">
        <div className="absolute bottom-0 right-0 h-full w-[1px] bg-gradient-to-t from-pink-500 to-transparent" />
        <div className="absolute bottom-0 right-0 h-[1px] w-full bg-gradient-to-l from-pink-500 to-transparent" />
      </div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <Image
          src={study.image}
          alt={study.title}
          fill
          className="object-cover opacity-60 transition-opacity group-hover:opacity-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col p-8">
        <div className="mb-auto space-y-4">
          <span className="inline-block rounded-full border border-purple-500/30 px-3 py-1 text-sm font-medium text-purple-300 backdrop-blur-sm">
            {study.client}
          </span>
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            {study.title}
          </h3>
          <p className="text-gray-300/90 backdrop-blur-sm">
            {study.description}
          </p>
        </div>

        {/* Results */}
        <div className="mt-8">
          <h4 className="mb-4 text-sm font-semibold tracking-wider text-purple-400">
            KEY RESULTS
          </h4>
          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {study.results.map((result, index) => (
              <div key={index} className="group/result relative">
                {/* Result item with animated border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/50 to-pink-500/50 opacity-0 transition-opacity group-hover/result:opacity-100" />
                <div className="relative rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
                  {result}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button className="group/btn relative mt-4 inline-flex items-center gap-2">
          <span className="relative z-10 font-medium text-white transition-colors group-hover/btn:text-purple-300">
            View Case Study
          </span>
          <ArrowUpRight className="h-4 w-4 text-purple-400 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
          {/* Button hover effect */}
          <div className="absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover/btn:w-full" />
        </button>
      </div>
    </div>
  </ScaleIn>
);

export function CaseStudiesSection() {
  return (
    <div className="bg-white">
      <div className="">
        <svg
          className="relative -mb-[2px] h-full w-full"
          width="1620"
          height="128"
          viewBox="0 0 1620 128"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 128V74.6535L91.3465 48.8153C101.082 46.0615 111.106 44.4536 121.215 44.0243L1146.47 0.489582C1154.14 0.163835 1161.83 0.518387 1169.44 1.54908L1620 62.5824V128H0Z"
            className="fill-[#000000]"
          ></path>
        </svg>
      </div>

      <section className="bg-black py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <FadeIn className="mx-auto mb-24 max-w-2xl text-center">
            <span className="mb-4 block font-mono text-sm tracking-wider text-purple-400">
              SUCCESS STORIES
            </span>
            <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
              Transforming Businesses Through Technology
            </h2>
            <p className="text-lg text-gray-400">
              Discover how we&apos;ve helped our clients achieve extraordinary
              results
            </p>
          </FadeIn>

          <FadeInStagger>
            <div className="grid min-h-[800px] gap-6 sm:gap-8 md:grid-cols-3">
              {caseStudies.map((study) => (
                <FadeInStaggerItem key={study.id} className={study.className}>
                  <CaseStudyCard study={study} />
                </FadeInStaggerItem>
              ))}
            </div>
          </FadeInStagger>
        </div>
      </section>
      <svg
        className="relative -mb-[2px] h-full w-full"
        width="1620"
        height="128"
        viewBox="0 0 1620 128"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1620 0V53.3465L1528.65 79.1847C1518.92 81.9385 1508.89 83.5464 1498.79 83.9757L473.53 127.51C465.858 127.836 458.173 127.482 450.564 126.451L0 65.4176V0H1620Z"
          className="fill-[#000000]"
        ></path>
      </svg>
    </div>
  );
}
