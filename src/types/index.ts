import { StaticImageData } from "next/image";

export interface Testimonials {
  author: string;
  role: string;
  company: string;
  companyLogo: StaticImageData;
  image: StaticImageData;
  quote: string;
  rating: number;
} 