import { NextRequest, NextResponse } from "next/server";
import { getAllJobs } from "@/lib/jobs";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "5");
  
  // Get filter parameters
  const searchTerm = searchParams.get("search") || "";
  const department = searchParams.get("department") || "All";
  const jobType = searchParams.get("type") || "All";
  const location = searchParams.get("location") || "All";

  try {
    const { jobs: allJobs, total: totalUnfiltered } = await getAllJobs(1, Number.MAX_SAFE_INTEGER);
    
    // Validate jobs before filtering
    const validatedJobs = allJobs.filter(job => 
      job && 
      typeof job === 'object' && 
      job.title && 
      job.description && 
      job.department && 
      job.type && 
      job.location
    );
    
    // Apply filters with safe string operations
    const filteredJobs = validatedJobs.filter(job => {
      const searchLower = searchTerm.toLowerCase();
      const titleLower = (job.title || "").toLowerCase();
      const descriptionLower = (job.description || "").toLowerCase();
      
      const matchesSearch = searchTerm === "" || 
        titleLower.includes(searchLower) ||
        descriptionLower.includes(searchLower);
        
      const matchesDepartment = department === "All" || 
        job.department === department;
        
      const matchesType = jobType === "All" || 
        job.type === jobType;
        
      const matchesLocation = location === "All" || 
        job.location === location;

      return matchesSearch && matchesDepartment && matchesType && matchesLocation;
    });

    // Apply pagination to filtered results
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedJobs = filteredJobs.slice(startIndex, endIndex);
    const total = filteredJobs.length;
    const hasMore = endIndex < total;

    // Ensure all job objects have required fields before sending
    const sanitizedJobs = paginatedJobs.map(job => ({
      id: job.id || '',
      slug: job.slug || '',
      title: job.title || '',
      department: job.department || '',
      location: job.location || '',
      type: job.type || '',
      experience: job.experience || '',
      salary: job.salary || '',
      posted: job.posted || '',
      description: job.description || '',
      requirements: job.requirements || [],
      benefits: job.benefits || [],
      responsibilities: job.responsibilities || [],
    }));

    return NextResponse.json({
      jobs: sanitizedJobs,
      total,
      hasMore,
      currentPage: page,
      totalUnfiltered
    });

  } catch (error) {
    console.error('Error fetching jobs:', error);
    return NextResponse.json(
      { error: "Failed to fetch jobs" },
      { status: 500 }
    );
  }
}