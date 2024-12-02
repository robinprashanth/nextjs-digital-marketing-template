import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog";
import { BlogPostLayout } from "../_components/BlogPostLayout";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getSEOTags } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>
}
 
// Generate metadata for each blog post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const slug = (await params).slug;
    const { frontMatter } = await getBlogPostBySlug(slug);
    
    return getSEOTags({
      title: frontMatter.title,
      description: frontMatter.excerpt,
      canonicalUrlRelative: `/blog/theme-1/${slug}`,
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


// Generate static paths
export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage(
  { params }: Props
) {
  const slug = (await params).slug
  try {
    const { frontMatter, content } = await getBlogPostBySlug(slug);

    return (
      <BlogPostLayout metadata={frontMatter} slug={slug}>
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <MDXRemote source={content} />
        </article>
      </BlogPostLayout>
    );
  } catch {
    return notFound();
  }
}