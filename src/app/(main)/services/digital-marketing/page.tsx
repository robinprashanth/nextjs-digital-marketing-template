import { getSEOTags } from "@/lib/seo";
import { DigitalMarketing } from "./_components/DigitalMarketing";

export const metadata = getSEOTags({
  title: "Digital Marketing Services",
  description:
    "Transform your online presence with our data-driven digital marketing solutions",
  canonicalUrlRelative: "/services/digital-marketing",
  type: "article",
  images: [
    {
      url: "/images/industries/ecommerce.jpg",
      width: 1200,
      height: 630,
      alt: "Digital Marketing Services",
    },
  ],
});

export default function Page() {
  return <DigitalMarketing />;
}
