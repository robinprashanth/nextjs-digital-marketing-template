import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDocBySlug, getAllDocs } from '@/lib/docs';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { DocsLayout } from '../_components/DocsLayout';
import { Breadcrumb } from '../_components/Breadcrumb';
import { CodeBlock } from '../_components/CodeBlock';
type Props = {
    params: Promise<{ slug: string }>
  }
   


const components = {
  CodeBlock,
  // Add other custom components here
};

export async function generateMetadata(
    { params }: Props
  ): Promise<Metadata> {
     // read route params
     const slug = (await params).slug  
     const doc = await getDocBySlug(slug);
  
  if (!doc) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: `${doc.frontMatter.title} - Docs`,
    description: doc.frontMatter.description,
  };
}

export async function generateStaticParams() {
  const docs = await getAllDocs();
  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}

export default async function DocPage(
    { params }: Props
  ) {
    const slug = (await params).slug
  const doc = await getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  return (
    <DocsLayout>
      <div className="container mx-auto max-w-3xl py-6 px-4">
        <Breadcrumb items={[{ label: 'Docs', href: '/docs' }, { label: doc.frontMatter.title }]} />
        
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">{doc.frontMatter.title}</h1>
          <p className="text-lg text-muted-foreground">{doc.frontMatter.description}</p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none mt-8">
          <MDXRemote components={components} source={doc.content} />
        </div>
      </div>
    </DocsLayout>
  );
}