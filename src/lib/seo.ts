import { siteConfig } from "@/config";
import { Metadata } from "next";

interface SEOProps extends Partial<Metadata> {
  title?: string;
  description?: string;
  canonicalUrlRelative?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  images?: {
    url: string;
    alt: string;
    width?: number;
    height?: number;
  }[];
}

export function getSEOTags({
  title,
  description,
  canonicalUrlRelative,
  type = "website",
  publishedTime,
  modifiedTime,
  images,
  ...props
}: SEOProps = {}): Metadata {
  const metadataBase = new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : `https://${siteConfig.domainName}`,
  );

  const seoTitle = title
    ? `${title} | ${siteConfig.appName}`
    : `${siteConfig.appName} - Digital Marketing Agency`;

  const seoDescription = description || siteConfig.appDescription;

  return {
    metadataBase,
    title: seoTitle,
    description: seoDescription,

    // Basic metadata
    applicationName: siteConfig.appName,
    authors: [{ name: siteConfig.company.name }],
    generator: "Next.js",
    keywords: [
      "Digital Marketing",
      "SEO",
      "Content Marketing",
      "Social Media Marketing",
      "Digital Strategy",
      "Marketing Agency",
      siteConfig.appName,
    ],
    referrer: "origin-when-cross-origin",
    viewport: "width=device-width, initial-scale=1",

    // Open Graph
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: canonicalUrlRelative
        ? `${metadataBase}${canonicalUrlRelative}`
        : metadataBase.toString(),
      siteName: siteConfig.appName,
      locale: "en_US",
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      images: images || [
        {
          url: "/og-image.jpg", // Default OG image
          width: 1200,
          height: 630,
          alt: siteConfig.appName,
        },
      ],
    },

    // Twitter
    twitter: {
      card: "summary_large_image",
      site: siteConfig.social.twitter,
      creator: siteConfig.social.twitter,
      title: seoTitle,
      description: seoDescription,
      images: images?.map((img) => img.url) || ["/og-image.jpg"],
    },

    // Icons
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },

    // Canonical URL
    ...(canonicalUrlRelative && {
      alternates: {
        canonical: canonicalUrlRelative,
      },
    }),

    // Add any additional props
    ...props,
  };
}
