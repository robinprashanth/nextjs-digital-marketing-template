import { getAllBlogPosts } from "@/lib/blog";
import { Blogs } from "./_components/Blog";
import { Metadata } from "next";
import { getSEOTags } from "@/lib/seo";

// Generate metadata for SEO
export const metadata: Metadata = getSEOTags({
  title: "Blog | Digital Marketing Insights",
  description: "Explore our latest insights on digital marketing strategies, SEO, content marketing, and industry trends.",
  canonicalUrlRelative: "/blog",
  type: "website",
  images: [
    {
      url: "/images/blog/og-image.jpg", // Make sure this image exists in your public folder
      width: 1200,
      height: 630,
      alt: "Digital Marketing Blog",
    },
  ],
});

export default async function BlogPageWrapper() {
  const posts = await getAllBlogPosts();
  return <Blogs initialPosts={posts} />;
}
