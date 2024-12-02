import { TestimonialProps } from "@/types";

export const decorativeShapes = [
    {
      type: 'blur',
      position: 'left-[10%] top-[20%]',
      size: 'h-16 w-16 md:h-24 md:w-24',
      color: 'bg-theme-primary-500/20',
      delay: 0,
    },
    {
      type: 'blur',
      position: 'right-[15%] top-[15%]',
      size: 'h-20 w-20 md:h-28 md:w-28',
      color: 'bg-orange-500/20',
      delay: 0.2,
    },
    {
      type: 'blur',
      position: 'bottom-[20%] left-[20%]',
      size: 'h-24 w-24',
      color: 'bg-theme-ocean-500/20',
      delay: 0.4,
    },
    {
      type: 'star',
      position: 'bottom-[80%] right-[40%]',
      color: 'text-theme-primary-400',
      delay: 0.6,
    },
    {
      type: 'star',
      position: 'bottom-[40%] right-[20%]',
      color: 'text-theme-primary-400',
      delay: 0.6,
    },
    {
      type: 'plus',
      position: 'left-[40%] top-[30%]',
      color: 'text-orange-400',
      delay: 0.8,
    },
    {
      type: 'plus',
      position: 'right-[40%] top-[30%]',
      color: 'text-orange-400',
      delay: 0.8,
    },
  ];

export const testimonials: TestimonialProps[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp",
      content:
        "Working with this team has been transformative for our digital presence. Their strategic approach and attention to detail resulted in a 200% increase in our online engagement. They're not just service providers; they're growth partners.",
      image: "/assets/profile1.jpg",
      rating: 5,
      companyLogo: "/images/clients/techcorp.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO",
      company: "Globaltrade Labs",
      content:
        "The ROI we've seen since partnering with them has been incredible. They took the time to understand our unique challenges and crafted solutions that perfectly aligned with our goals. Their data-driven approach made all the difference.",
      image: "/assets/profile1.jpg",
      rating: 5,
      companyLogo: "/images/clients/globaltrade.jpg",
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "E-commerce Manager",
      company: "Wellness Pro",
      content:
        "Their expertise in digital marketing has been instrumental in our growth. They helped us achieve a 150% increase in online sales through targeted campaigns and optimization. Their team is responsive, creative, and truly cares about our success.",
      image: "/assets/profile1.jpg",
      rating: 5,
      companyLogo: "/images/clients/wellness-pro.jpg",
    },
  ];