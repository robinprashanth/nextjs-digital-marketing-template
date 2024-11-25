import { getArticleBySlug, getAllArticles } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArticleLayout } from "../_components/ArticleLayout";

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { frontMatter, content } = await getArticleBySlug(params.slug);

  // Now frontMatter is properly typed as ArticleMetadata
  return (
    <ArticleLayout metadata={frontMatter}>
      <div className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-pre:bg-gray-800 prose-pre:border prose-pre:border-theme-neutral-700 prose-img:rounded-xl max-w-none">
        <MDXRemote source={content} />
      </div>
    </ArticleLayout>
  );
}
