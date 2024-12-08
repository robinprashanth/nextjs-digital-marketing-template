import { MetadataRoute } from "next";
import { siteConfig } from "@/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/_components/", "/user-interface/"],
    },
    sitemap: `https://${siteConfig.domainName}/sitemap.xml`,
  };
}
