import { MetadataRoute } from "next";
import { siteConfig } from "@/config";

type ChangeFreq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = `https://${siteConfig.domainName}`;

  // Main pages
  const mainRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/contact",
    "/case-studies",
    "/blog",
    "/current-openings",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "daily" : "weekly" as ChangeFreq,
    priority: route === "" ? 1 : 0.8,
  }));

  // Service pages
  const serviceRoutes: MetadataRoute.Sitemap = [
    "/services/digital-marketing",
    "/services/seo",
    "/services/social-media",
    "/services/content-marketing",
    "/services/email-marketing",
    "/services/ppc",
    "/services/web-design",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as ChangeFreq,
    priority: 0.9,
  }));

  // Blog posts - You can fetch these dynamically
  // const posts = await getPosts();
  // const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: post.updatedAt.toISOString(),
  //   changeFrequency: "monthly" as ChangeFreq,
  //   priority: 0.6,
  // }));

  // Case studies - You can fetch these dynamically
  // const caseStudies = await getCaseStudies();
  // const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
  //   url: `${baseUrl}/case-studies/${study.slug}`,
  //   lastModified: study.updatedAt.toISOString(),
  //   changeFrequency: "monthly" as ChangeFreq,
  //   priority: 0.7,
  // }));

  // Features pages
  const featureRoutes: MetadataRoute.Sitemap = [
    "/features/analytics",
    "/features/automation",
    "/features/reporting",
    "/features/team-collaboration",
    "/features/integrations",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as ChangeFreq,
    priority: 0.7,
  }));

  // Resources
  const resourceRoutes: MetadataRoute.Sitemap = [
    "/resources/guides",
    "/resources/templates",
    "/resources/tutorials",
    "/resources/case-studies",
    "/resources/webinars",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as ChangeFreq,
    priority: 0.6,
  }));

  // Legal pages
  const legalRoutes: MetadataRoute.Sitemap = [
    "/privacy-policy",
    "/terms-of-service",
    "/cookie-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "yearly" as ChangeFreq,
    priority: 0.3,
  }));

  return [
    ...mainRoutes,
    ...serviceRoutes,
    ...featureRoutes,
    ...resourceRoutes,
    ...legalRoutes,
    // ...blogRoutes, // Uncomment when implemented
    // ...caseStudyRoutes, // Uncomment when implemented
  ];
}