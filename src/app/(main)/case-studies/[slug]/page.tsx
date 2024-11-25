import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/case-studies";
import { CaseStudyLayout } from "../_components/CaseStudyLayout";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const caseStudies = await getAllCaseStudies();
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const { frontMatter, content } = await getCaseStudyBySlug(params.slug);

    return (
      <CaseStudyLayout metadata={frontMatter}>
        <div className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-pre:bg-gray-800 prose-pre:border prose-pre:border-theme-neutral-700 prose-img:rounded-xl max-w-none">
          <MDXRemote source={content} />
        </div>
      </CaseStudyLayout>
    );
  } catch {
    return notFound();
  }
}
