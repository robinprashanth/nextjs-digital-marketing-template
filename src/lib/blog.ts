import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost, BlogPostMetadata } from "@/types";

const postsDirectory = path.join(process.cwd(), "src/app/(main)/blog/posts");

export async function getBlogPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const frontMatter: BlogPostMetadata = {
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
    coverImage: data.coverImage,
    featured: data.featured,
  };

  return {
    frontMatter,
    content,
  };
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(postsDirectory)) {
    console.error(`Directory not found: ${postsDirectory}`);
    return [];
  }

  try {
    const files = fs.readdirSync(postsDirectory);
    const posts = files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => {
        const fullPath = path.join(postsDirectory, file);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);
        const slug = file.replace(/\.mdx$/, "");

        return {
          ...data,
          slug,
        } as BlogPost;
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .sort((a, b) => (new Date(b.date) as any) - (new Date(a.date) as any));

    return posts;
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return [];
  }
}
