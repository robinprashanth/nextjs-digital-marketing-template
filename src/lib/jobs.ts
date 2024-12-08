import { JobPosting } from "@/types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const jobsDirectory = path.join(
  process.cwd(),
  "src/app/(main)/current-openings/listings",
);

export async function getJobBySlug(slug: string): Promise<JobPosting> {
  const fullPath = path.join(jobsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  const job: JobPosting = {
    id: data.id || slug,
    slug,
    title: data.title,
    department: data.department,
    location: data.location,
    type: data.type,
    experience: data.experience,
    salary: data.salary,
    posted: data.posted,
    description: data.description,
    responsibilities: data.responsibilities || [],
    requirements: data.requirements || [],
    benefits: data.benefits || [],
  };
  return job;
}

export async function getAllJobs(page: number = 1, limit: number = 5) {
  if (!fs.existsSync(jobsDirectory)) {
    console.error(`Directory not found: ${jobsDirectory}`);
    return { jobs: [], total: 0, hasMore: false };
  }

  try {
    const files = fs.readdirSync(jobsDirectory);
    const allJobs = files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => {
        const fullPath = path.join(jobsDirectory, file);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);
        const slug = file.replace(/\.mdx$/, "");

        const job: JobPosting = {
          id: data.id || slug,
          slug,
          title: data.title,
          department: data.department,
          location: data.location,
          type: data.type,
          experience: data.experience,
          salary: data.salary,
          posted: data.posted,
          description: data.description,
          responsibilities: data.responsibilities || [],
          requirements: data.requirements || [],
          benefits: data.benefits || [],
        };

        return job;
      })
      .sort(
        (a, b) => new Date(b.posted).getTime() - new Date(a.posted).getTime(),
      );

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedJobs = allJobs.slice(startIndex, endIndex);
    const total = allJobs.length;
    const hasMore = endIndex < total;

    return {
      jobs: paginatedJobs,
      total,
      hasMore,
    };
  } catch (error) {
    console.error("Error reading jobs:", error);
    return {
      jobs: [],
      total: 0,
      hasMore: false,
    };
  }
}
