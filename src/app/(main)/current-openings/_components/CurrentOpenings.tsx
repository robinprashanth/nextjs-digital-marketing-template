"use client";

import { ScrollInView } from "@/components/motion/ScrollInView";
import { Button } from "@/components/ui/button";
import type { JobPosting } from "@/types";
import {
  Briefcase,
  Building2,
  ChevronRight,
  Clock,
  DollarSign,
  MapPin,
  Search,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, useCallback, useEffect, useState } from "react";
import { cultureImages } from "../data/content";

interface CurrentOpeningsProps {
  initialJobs: JobPosting[];
  hasMore: boolean;
  totalJobs: number;
}

const departments = [
  "All",
  "Marketing",
  "SEO",
  "Social Media",
  "Content",
  "Paid Media",
];
const jobTypes = ["All", "Full-time", "Part-time", "Contract", "Remote"];
const locations = [
  "All",
  "New York, USA",
  "London, UK",
  "San Francisco, USA",
  "Remote",
];

const benefits = [
  {
    icon: Building2,
    title: "Flexible Work Environment",
    description:
      "Work from home, office, or hybrid options available. We believe in giving you the freedom to work where you're most productive.",
  },
  {
    icon: Users,
    title: "Health & Wellness",
    description:
      "Comprehensive health insurance, mental health support, wellness programs, and gym membership reimbursement.",
  },
  {
    icon: DollarSign,
    title: "Competitive Compensation",
    description:
      "Above-market salary packages, performance bonuses, and equity options for all full-time employees.",
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description:
      "Flexible hours, unlimited PTO, paid parental leave, and company-wide wellness days.",
  },
  {
    icon: Briefcase,
    title: "Career Growth",
    description:
      "Professional development budget, mentorship programs, and clear career progression paths.",
  },
  {
    icon: Users,
    title: "Team Events",
    description:
      "Regular team building activities, annual retreats, and social events to foster strong relationships.",
  },
];

const hiringSteps = [
  {
    step: "01",
    title: "Application Review",
    description: "Our talent team reviews your application within 48 hours.",
  },
  {
    step: "02",
    title: "Initial Screen",
    description: "Brief video call to discuss your experience and aspirations.",
  },
  {
    step: "03",
    title: "Skills Assessment",
    description:
      "Complete a relevant task or challenge to showcase your expertise.",
  },
  {
    step: "04",
    title: "Team Interview",
    description:
      "Meet your potential teammates and learn about the role in detail.",
  },
  {
    step: "05",
    title: "Final Interview",
    description:
      "Discussion with leadership about culture fit and future growth.",
  },
];

const CurrentOpenings: FC<CurrentOpeningsProps> = ({
  initialJobs,
  hasMore: initialHasMore,
  totalJobs: initialTotalJobs,
}) => {
  // State
  const [jobs, setJobs] = useState<JobPosting[]>(initialJobs);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedLocation, setSelectedLocation] = useState<string>("All");
  const [totalJobs, setTotalJobs] = useState(initialTotalJobs);
  const [isFiltering, setIsFiltering] = useState(false);

  // Function to fetch jobs with filters
  const fetchJobs = useCallback(
    async (newPage: number = 1) => {
      setLoading(true);
      try {
        const searchParams = new URLSearchParams({
          page: newPage.toString(),
          limit: "5",
          search: searchTerm,
          department: selectedDepartment,
          type: selectedType,
          location: selectedLocation,
        });

        const response = await fetch(`/api/jobs?${searchParams.toString()}`);

        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }

        const data = await response.json();

        if (newPage === 1) {
          setJobs(data.jobs);
          setIsFiltering(data.total !== data.totalUnfiltered);
        } else {
          setJobs((prev) => [...prev, ...data.jobs]);
        }

        setPage(newPage);
        setHasMore(data.hasMore);
        setTotalJobs(data.total);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    },
    [searchTerm, selectedDepartment, selectedType, selectedLocation],
  );

  // Load more handler
  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      fetchJobs(page + 1);
    }
  }, [fetchJobs, loading, hasMore, page]);

  // Effect to handle filters change
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchJobs(1);
    }, 300);

    return () => clearTimeout(timer);
  }, [
    searchTerm,
    selectedDepartment,
    selectedType,
    selectedLocation,
    fetchJobs,
  ]);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[linear-gradient(45deg,#8A6FF9,#6B4FD9)]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.4))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container relative mx-auto px-4 py-24 sm:px-6">
          <ScrollInView className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
              CAREERS
            </span>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Join Our Team of
              <br />
              Digital Innovators
            </h1>
            <p className="text-lg text-white/80">
              Be part of a team that&apos;s shaping the future of digital
              marketing. Explore our current opportunities below.
            </p>
          </ScrollInView>
        </div>

        <div className="relative">
          <svg
            viewBox="0 0 1440 200"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-background"
          >
            <path d="M0 120l48 13.3c48 13.4 144 40 240 40s192-26.6 288-40c96-13.3 192-13.3 288 0s192 40 288 40 192-26.7 240-40l48-13.3v80H0z" />
          </svg>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="relative -mt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollInView className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search positions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:border-theme-primary-500 focus:outline-none focus:ring-1 focus:ring-theme-primary-500"
                />
              </div>

              {/* Department Filter */}
              <div>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground focus:border-theme-primary-500 focus:outline-none focus:ring-1 focus:ring-theme-primary-500"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept} Department
                    </option>
                  ))}
                </select>
              </div>

              {/* Job Type Filter */}
              <div>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground focus:border-theme-primary-500 focus:outline-none focus:ring-1 focus:ring-theme-primary-500"
                >
                  {jobTypes.map((type) => (
                    <option key={type} value={type}>
                      {type} Positions
                    </option>
                  ))}
                </select>
              </div>

              {/* Location Filter */}
              <div>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground focus:border-theme-primary-500 focus:outline-none focus:ring-1 focus:ring-theme-primary-500"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </ScrollInView>
        </div>
      </section>

      {/* Jobs Count Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium text-foreground">
                {jobs.length} of {totalJobs} positions available
              </span>
              {isFiltering && (
                <span className="text-sm text-muted-foreground">
                  (Filtered results)
                </span>
              )}
            </div>
            {jobs.length > 0 && (
              <div className="text-sm text-muted-foreground">
                Showing {Math.min(page * 5, jobs.length)} of {totalJobs}{" "}
                positions
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          {jobs.length > 0 ? (
            <>
              <div className="grid gap-6">
                {jobs.map((job, index) => (
                  <ScrollInView key={job.id} delay={index * 0.1}>
                    <Link href={`/current-openings/${job.slug}`}>
                      <div className="group cursor-pointer rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-theme-primary-500/20">
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                          <div className="space-y-4">
                            <div className="flex items-center gap-4">
                              <div className="rounded-xl bg-theme-primary-500/10 p-3">
                                <Briefcase className="h-6 w-6 text-theme-primary-400" />
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold text-foreground">
                                  {job.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  {job.department}
                                </p>
                              </div>
                            </div>
                            <p className="text-muted-foreground">
                              {job.description}
                            </p>
                          </div>

                          <div className="flex flex-wrap items-center gap-4 lg:flex-col lg:items-end">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              {job.location}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              {job.type}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <DollarSign className="h-4 w-4" />
                              {job.salary}
                            </div>
                            <Button
                              variant="action"
                              size="sm-rounded"
                              rounded="full"
                            >
                              Apply Now
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </ScrollInView>
                ))}
              </div>

              {/* Load More Button */}
              {hasMore && (
                <div className="mt-12 text-center">
                  <Button
                    onClick={loadMore}
                    disabled={loading}
                    variant="outline"
                    size="lg"
                    rounded="full"
                    className="bg-background hover:bg-muted"
                  >
                    {loading ? (
                      <>
                        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-theme-primary-500 border-r-transparent"></span>
                        Loading...
                      </>
                    ) : (
                      <>
                        Load More Jobs
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Showing {jobs.length} of {totalJobs} positions
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="rounded-2xl border border-border bg-card p-12 text-center">
              <div className="mx-auto mb-4 w-16">
                <Search className="h-16 w-16 text-muted-foreground" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                No Positions Found
              </h3>
              <p className="text-muted-foreground">
                We couldn&apos;t find any positions matching your criteria. Try
                adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-t border-border bg-card">
        <div className="container mx-auto px-4 py-24 sm:px-6">
          <ScrollInView
            useInView={true}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <span className="mb-4 inline-block rounded-full bg-theme-primary-500/10 px-4 py-1.5 text-sm font-semibold text-theme-primary-400">
              BENEFITS & PERKS
            </span>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              Why You&apos;ll Love Working With Us
            </h2>
            <p className="text-muted-foreground">
              We offer a comprehensive benefits package designed to support your
              growth, health, and work-life balance.
            </p>
          </ScrollInView>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <ScrollInView
                useInView={true}
                key={index}
                delay={index * 0.1}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <div className="mb-4 w-fit rounded-xl bg-theme-primary-500/10 p-3">
                  <benefit.icon className="h-6 w-6 text-theme-primary-400" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6">
          <ScrollInView
            useInView={true}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <span className="mb-4 inline-block rounded-full bg-theme-primary-500/10 px-4 py-1.5 text-sm font-semibold text-theme-primary-400">
              OUR CULTURE
            </span>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              Life at Our Agency
            </h2>
            <p className="text-muted-foreground">
              Get a glimpse of our vibrant company culture and what makes our
              team special.
            </p>
          </ScrollInView>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cultureImages.map((image) => (
              <ScrollInView
                useInView={true}
                key={image.id}
                delay={image.id * 0.1}
                className="group relative aspect-square overflow-hidden rounded-2xl"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    quality={90}
                    priority={image.id <= 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="border-t border-border bg-card">
        <div className="container mx-auto px-4 py-24 sm:px-6">
          <ScrollInView
            useInView={true}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <span className="mb-4 inline-block rounded-full bg-theme-primary-500/10 px-4 py-1.5 text-sm font-semibold text-theme-primary-400">
              HIRING PROCESS
            </span>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              Our Recruitment Journey
            </h2>
            <p className="text-muted-foreground">
              A transparent look at our hiring process from application to
              offer.
            </p>
          </ScrollInView>

          <div className="mx-auto max-w-3xl">
            {hiringSteps.map((step, index, array) => (
              <ScrollInView
                useInView={true}
                key={index}
                delay={index * 0.1}
                className="relative flex gap-8"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-theme-primary-500/10 text-xl font-bold text-theme-primary-400">
                    {step.step}
                  </div>
                  {index !== array.length - 1 && (
                    <div className="mt-4 h-full w-px bg-gradient-to-b from-theme-primary-500/50 to-transparent" />
                  )}
                </div>

                <div className="flex-1 pb-12">
                  <div className="rounded-2xl border border-border bg-background p-6">
                    <h3 className="mb-2 text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6">
          <ScrollInView className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-theme-primary-500 to-purple-700 p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Don&apos;t See the Right Role?
            </h2>
            <p className="mb-8 text-lg text-white/80">
              We&apos;re always looking for talented individuals to join our
              team. Send us your resume and we&apos;ll keep you in mind for
              future opportunities.
            </p>
            <Button
              variant="secondary"
              size="lg"
              rounded="full"
              className="bg-white px-8 text-theme-primary-600 hover:bg-theme-neutral-100"
            >
              Send Your Resume
            </Button>
          </ScrollInView>
        </div>
      </section>
    </main>
  );
};

export default CurrentOpenings;
