"use client";

import type { Industry } from "@/types";
import { Code2, LineChart, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { IndustryCard } from "./IndustryCard";

const sampleIndustries: Industry[] = [
  {
    id: 1,
    name: "Technology",
    description: "Software development and IT solutions for modern businesses",
    icon: <Code2 className="h-6 w-6 text-theme-primary-600" />,
    image: "/images/industries/tech.jpg",
    metrics: [
      { label: "Projects", value: "200+", prefix: "" },
      { label: "Clients", value: "50+", prefix: "" },
    ],
    cases: [
      { clientName: "TechCorp", logo: "/logos/tech.png", result: "40% Growth" },
    ],
    expertise: 95,
  },
  {
    id: 2,
    name: "E-commerce",
    description: "Digital retail solutions and online marketplace development",
    icon: <ShoppingBag className="h-6 w-6 text-theme-primary-600" />,
    image: "/images/industries/ecommerce.jpg",
    metrics: [
      { label: "Stores", value: "150+", prefix: "" },
      { label: "Revenue", value: "2M", prefix: "$" },
    ],
    cases: [
      { clientName: "ShopHub", logo: "/logos/shop.png", result: "65% Growth" },
    ],
    expertise: 88,
  },
  {
    id: 3,
    name: "Finance",
    description: "Financial technology solutions and banking systems",
    icon: <LineChart className="h-6 w-6 text-theme-primary-600" />,
    image: "/images/industries/finance.jpg",
    metrics: [
      { label: "Transactions", value: "1M+", prefix: "" },
      { label: "Volume", value: "5B", prefix: "$" },
    ],
    cases: [
      { clientName: "FinBank", logo: "/logos/bank.png", result: "45% Growth" },
    ],
    expertise: 92,
  },
];

export const Industries = () => {
  const [activeIndustry, setActiveIndustry] = useState<number>(1);

  return (
    <>
      {sampleIndustries.map((industry, index) => (
        <IndustryCard
          key={industry.id}
          industry={industry}
          isActive={activeIndustry === industry.id}
          onClick={() => setActiveIndustry(industry.id)}
          delay={index * 0.1}
        />
      ))}
    </>
  );
};
