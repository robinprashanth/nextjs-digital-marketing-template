import { getAllJobs, getJobBySlug } from "@/lib/jobs";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import JobDetailsPage from "./_components/JobDetailsPage";

type Props = {
  params: Promise<{ job: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const currentJob = (await params).job;
  try {
    const job = await getJobBySlug(currentJob);

    return {
      title: `${job.title} | Careers`,
      description: job.description,
      openGraph: {
        title: job.title,
        description: job.description,
        type: "website",
      },
    };
  } catch {
    return {
      title: "Job Not Found",
      description: "The requested job position could not be found.",
    };
  }
}

export async function generateStaticParams() {
  const { jobs } = await getAllJobs();
  return jobs.map((job) => ({
    slug: job.slug,
  }));
}

export default async function JobPage({ params }: Props) {
  const currentJob = (await params).job;
  try {
    const job = await getJobBySlug(currentJob);
    return <JobDetailsPage job={job} />;
  } catch {
    notFound();
  }
}
