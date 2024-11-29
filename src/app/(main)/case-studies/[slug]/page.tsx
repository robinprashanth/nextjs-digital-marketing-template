import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/case-studies";
import { CaseStudyLayout } from "../_components/CaseStudyLayout";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { Metadata } from "next";

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
    const { frontMatter } = await getCaseStudyBySlug(slug);
    return {
      title: `${frontMatter.title} | Blog`,
      description: frontMatter.excerpt,
      openGraph: {
        title: frontMatter.title,
        description: frontMatter.excerpt,
        images: [
          {
            url: frontMatter.image,
            width: 1200,
            height: 630,
            alt: frontMatter.title,
          },
        ],
      },
    };
  } catch {
    return {
      title: 'Case Study Not Found',
      description: 'The requested case study could not be found.',
    };
  }
}

// Generate static paths
export async function generateStaticParams() {
  const caseStudies = await getAllCaseStudies();
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}


export default async function CaseStudyPage(
  { params }: Props
) {
  const slug = (await params).slug

  try {
    const { frontMatter, content } = await getCaseStudyBySlug(slug);

    return (
      <CaseStudyLayout metadata={frontMatter} slug={slug}>
        <div className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-pre:bg-theme-neutral-800 prose-pre:border prose-pre:border-theme-neutral-700 prose-img:rounded-xl max-w-none">
          <MDXRemote source={content} />
        </div>
      </CaseStudyLayout>
    );
  } catch {
    return notFound();
  }
}