import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog";
import { getSEOTags } from "@/lib/seo";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { BlogPostLayoutPop } from "../_components/BlogPostLayout";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const slug = (await params).slug;
    const { frontMatter } = await getBlogPostBySlug(slug);

    return getSEOTags({
      title: frontMatter.title,
      description: frontMatter.excerpt,
      canonicalUrlRelative: `/blog/theme-3/${slug}`,
      type: "article",
      publishedTime: frontMatter.date,
      // Structure images for social sharing
      images: [
        {
          url: frontMatter.coverImage,
          width: 1200,
          height: 630,
          alt: frontMatter.title,
        },
      ],
      // Additional article metadata
      authors: [{ name: frontMatter.author.name }],
      keywords: frontMatter.tags,
    });
  } catch {
    return getSEOTags({
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    });
  }
}

export default async function PopBlogPostPage({ params }: Props) {
  const slug = (await params).slug;
  try {
    const { frontMatter, content } = await getBlogPostBySlug(slug);
    return (
      <BlogPostLayoutPop metadata={frontMatter} slug={slug}>
        <MDXRemote source={content} />
      </BlogPostLayoutPop>
    );
  } catch {
    return notFound();
  }
}
