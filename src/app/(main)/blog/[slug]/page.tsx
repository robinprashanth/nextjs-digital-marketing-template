import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog";
import { BlogPostLayout } from "../_components/BlogPostLayout";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const { frontMatter, content } = await getBlogPostBySlug(params.slug);

    return (
      <BlogPostLayout metadata={frontMatter}>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <MDXRemote source={content} />
        </div>
      </BlogPostLayout>
    );
  } catch {
    return notFound();
  }
}
