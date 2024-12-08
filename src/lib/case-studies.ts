import { CaseStudy, CaseStudyMetadata } from "@/types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const caseStudiesDirectory = path.join(
  process.cwd(),
  "src/app/(main)/case-studies/studies",
);

export async function getCaseStudyBySlug(slug: string) {
  const fullPath = path.join(caseStudiesDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const frontMatter: CaseStudyMetadata = {
    title: data.title,
    category: data.category,
    excerpt: data.excerpt,
    date: data.date,
    client: data.client,
    industry: data.industry,
    image: data.image,
    color: data.color,
    gradient: data.gradient,
    metrics: data.metrics,
    featured: data.featured,
    slug: data.slug,
  };

  return {
    frontMatter,
    content,
  };
}

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  if (!fs.existsSync(caseStudiesDirectory)) {
    console.error(`Directory not found: ${caseStudiesDirectory}`);
    return [];
  }

  try {
    const files = fs.readdirSync(caseStudiesDirectory);
    const caseStudies = files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => {
        const fullPath = path.join(caseStudiesDirectory, file);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);
        const slug = file.replace(/\.mdx$/, "");

        return {
          ...data,
          slug,
        } as CaseStudy;
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .sort((a, b) => (new Date(b.date) as any) - (new Date(a.date) as any));

    return caseStudies;
  } catch (error) {
    console.error("Error reading case studies:", error);
    return [];
  }
}
