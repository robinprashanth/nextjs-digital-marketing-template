import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ArticleMetadata, KnowledgeArticle } from "@/types";

// Update this line to match your project structure
const articlesDirectory = path.join(
  process.cwd(),
  "src/app/(main)/knowledge-base/articles",
);

// or if you're not using src folder:
// const articlesDirectory = path.join(process.cwd(), 'app/knowledge-base/articles');

export async function getArticleBySlug(slug: string) {
  const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Ensure the data matches ArticleMetadata type
  const frontMatter: ArticleMetadata = {
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    author: {
      name: data.author.name,
      avatar: data.author.avatar,
    },
    category: data.category,
    tags: data.tags,
    readTime: data.readTime,
  };

  return {
    frontMatter,
    content,
  };
}
export async function getAllArticles(): Promise<KnowledgeArticle[]> {
  const files = fs.readdirSync(articlesDirectory);
  const articles = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const fullPath = path.join(articlesDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      const slug = file.replace(/\.mdx$/, "");

      return {
        ...data,
        slug,
        id: slug,
      } as KnowledgeArticle;
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .sort((a, b) => (new Date(b.date) as any) - (new Date(a.date) as any));

  return articles;
}
