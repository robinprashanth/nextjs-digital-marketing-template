import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog";
import { BlogPostLayoutAlt } from "../_components/BlogPostLayoutAlt";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
   // read route params
   const slug = (await params).slug
  try {
    const { frontMatter } = await getBlogPostBySlug(slug);
    return {
      title: `${frontMatter.title} | Blog`,
      description: frontMatter.excerpt,
      authors: [{ name: frontMatter.author.name }],
      openGraph: {
        title: frontMatter.title,
        description: frontMatter.excerpt,
        images: [
          {
            url: frontMatter.coverImage,
            width: 1200,
            height: 630,
            alt: frontMatter.title,
          },
        ],
      },
    };
  } catch {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function AltBlogPostPage( { params }: Props
) {
  const slug = (await params).slug
  try {
    const { frontMatter, content } = await getBlogPostBySlug(slug);

    return (
      <BlogPostLayoutAlt metadata={frontMatter} slug={slug}>
        <MDXRemote source={content} />
      </BlogPostLayoutAlt>
    );
  } catch {
    return notFound();
  }
}