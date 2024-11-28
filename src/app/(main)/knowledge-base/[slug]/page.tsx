import { getArticleBySlug, getAllArticles } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArticleLayout } from "../_components/ArticleLayout";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>
}

// Generate metadata for the page
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
   // read route params
   const slug = (await params).slug
  try {
    const { frontMatter } = await getArticleBySlug(slug);
    return {
      title: `${frontMatter.title} | Knowledge`,
      description: frontMatter.excerpt,
      authors: [{ name: frontMatter.author.name }],
      openGraph: {
        title: frontMatter.title,
        description: frontMatter.excerpt,
      },
    };
  } catch {
    return {
      title: 'Knowledge base Not Found',
      description: 'The requested Knowledge base could not be found.',
    };
  }
}

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage(
  { params }: Props
) {
  const slug = (await params).slug
  try {
  const { frontMatter, content } = await getArticleBySlug(slug);

  // Now frontMatter is properly typed as ArticleMetadata
  return (
    <ArticleLayout metadata={frontMatter}>
      <div className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-pre:bg-theme-neutral-800 prose-pre:border prose-pre:border-theme-neutral-700 prose-img:rounded-xl max-w-none">
        <MDXRemote source={content} />
      </div>
    </ArticleLayout>
  );
} catch {
  return notFound();
}
}
