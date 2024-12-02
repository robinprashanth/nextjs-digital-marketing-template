import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { DocMetadata, Doc } from "@/types";

const docsDirectory = path.join(process.cwd(), "src/app/docs/documents");

export async function getDocBySlug(slug: string): Promise<Doc> {
  const fullPath = path.join(docsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const frontMatter: DocMetadata = {
    title: data.title,
    description: data.description,
    category: data.category,
    tags: data.tags,
  };

  return {
    slug,
    frontMatter,
    content,
  };
}

export async function getAllDocs(): Promise<Doc[]> {
  const files = fs.readdirSync(docsDirectory);
  const docs = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const fullPath = path.join(docsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const slug = file.replace(/\.mdx$/, "");

      const frontMatter: DocMetadata = {
        title: data.title,
        description: data.description,
       
      };

      return {
        slug,
        frontMatter,
        content,
      };
    });

  return docs;
}

