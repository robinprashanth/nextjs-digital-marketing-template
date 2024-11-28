import { NextRequest, NextResponse } from "next/server";
import { getAllJobs } from "@/lib/jobs";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "5");

  try {
    const { jobs, total, hasMore } = await getAllJobs(page, limit);

    // Validate jobs before sending
    const validatedJobs = jobs.map(job => ({
      id: job.id,
      slug: job.slug,
      title: job.title,
      department: job.department,
      location: job.location,
      type: job.type,
      experience: job.experience,
      salary: job.salary,
      posted: job.posted,
      description: job.description,
      requirements: job.requirements,
      benefits: job.benefits,
      responsibilities: job.responsibilities
    }));

    return NextResponse.json({
      jobs: validatedJobs,
      total,
      hasMore,
      currentPage: page
    });
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return NextResponse.json(
      { error: "Failed to fetch jobs" },
      { status: 500 }
    );
  }
}