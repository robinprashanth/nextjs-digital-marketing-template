import React from "react";
import { ShoppingBag, Stethoscope } from "lucide-react";
import type { Industry } from "@/types";

export const IndustriesData: Industry[] = [
  {
    id: 1,
    name: "E-commerce",
    description: "Digital solutions for online retail success",
    icon: React.createElement(ShoppingBag, {
      className: "h-6 w-6 text-theme-primary-600",
    }),
    image: "/images/industries/ecommerce.jpg",
    expertise: 95,
    metrics: [
      { label: "Revenue Growth", value: "150", suffix: "%" },
      { label: "Conversion Rate", value: "4.8", suffix: "%" },
      { label: "Client Base", value: "200", suffix: "+" },
      { label: "ROI Average", value: "3.5", prefix: "x" },
    ],
    cases: [
      {
        clientName: "FashionHub",
        logo: "/images/clients/fashion-hub.jpg",
        result: "200% increase in online sales through targeted campaigns",
      },
      {
        clientName: "TechStore",
        logo: "/images/clients/tech-store.jpg",
        result: "45% improvement in cart abandonment rate",
      },
      {
        clientName: "HomeDecor",
        logo: "/images/clients/home-decor.jpg",
        result: "3x ROI on advertising spend",
      },
    ],
  },
  {
    id: 2,
    name: "Healthcare",
    description: "Digital marketing for healthcare providers",
    icon: React.createElement(Stethoscope, {
      className: "h-6 w-6 text-theme-primary-600",
    }),
    image: "/images/industries/healthcare.jpg",
    expertise: 90,
    metrics: [
      { label: "Patient Acquisition", value: "85", suffix: "%" },
      { label: "Engagement Rate", value: "92", suffix: "%" },
      { label: "Client Base", value: "150", suffix: "+" },
      { label: "ROI Average", value: "2.8", prefix: "x" },
    ],
    cases: [
      {
        clientName: "MedCenter",
        logo: "/images/clients/med-center.jpg",
        result: "65% increase in patient inquiries",
      },
      {
        clientName: "HealthCare Plus",
        logo: "/images/clients/healthcare-plus.jpg",
        result: "40% boost in appointment bookings",
      },
      {
        clientName: "WellnessPro",
        logo: "/images/clients/wellness-pro.jpg",
        result: "75% improvement in patient engagement",
      },
    ],
  },
  // You can add more industries following the same pattern
];
