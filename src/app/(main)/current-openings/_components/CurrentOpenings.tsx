"use client";
import { FC, useState } from "react";
import { motion } from "motion/react";
import {
  Search,
  MapPin,
  Briefcase,
  Clock,
  ChevronRight,
  DollarSign,
  Users,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  experience: string;
  salary: string;
  posted: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

const CurrentOpenings: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedLocation, setSelectedLocation] = useState<string>("All");

  // Sample job postings data
  const jobPostings: JobPosting[] = [
    {
      id: "1",
      title: "Senior Digital Marketing Strategist",
      department: "Marketing",
      location: "New York, USA",
      type: "Full-time",
      experience: "5+ years",
      salary: "$80,000 - $120,000",
      posted: "2 days ago",
      description:
        "We&apos;re seeking an experienced Digital Marketing Strategist to lead our client campaigns and drive exceptional results.",
      requirements: [
        "5+ years of digital marketing experience",
        "Proven track record of successful campaigns",
        "Experience with Google Analytics, Google Ads, and Meta Ads",
        "Strong analytical and strategic thinking skills",
        "Excellent communication and presentation abilities",
      ],
      benefits: [
        "Competitive salary and bonus structure",
        "Health, dental, and vision insurance",
        "Flexible work hours and remote options",
        "Professional development budget",
        "Company equity options",
      ],
    },
    {
      id: "2",
      title: "SEO Specialist",
      department: "SEO",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "$60,000 - $90,000",
      posted: "1 week ago",
      description:
        "Join our SEO team to help clients achieve top rankings and drive organic growth through innovative strategies.",
      requirements: [
        "3+ years of SEO experience",
        "Strong technical SEO knowledge",
        "Experience with SEO tools (Ahrefs, SEMrush)",
        "Content optimization expertise",
        "Understanding of Google&apos;s algorithms",
      ],
      benefits: [
        "Remote work flexibility",
        "Health insurance coverage",
        "Annual learning allowance",
        "Performance bonuses",
        "Team retreats",
      ],
    },
    {
      id: "3",
      title: "Social Media Manager",
      department: "Social Media",
      location: "London, UK",
      type: "Full-time",
      experience: "2+ years",
      salary: "£35,000 - £50,000",
      posted: "3 days ago",
      description:
        "Create and manage engaging social media campaigns for our diverse client portfolio.",
      requirements: [
        "2+ years managing social media accounts",
        "Experience with social media management tools",
        "Strong copywriting skills",
        "Creative visual content creation",
        "Analytics and reporting expertise",
      ],
      benefits: [
        "Competitive salary package",
        "Private healthcare",
        "Flexible working hours",
        "Training and development",
        "Office perks and events",
      ],
    },
    {
      id: "4",
      title: "Content Marketing Specialist",
      department: "Content",
      location: "Remote",
      type: "Contract",
      experience: "2+ years",
      salary: "$50,000 - $75,000",
      posted: "5 days ago",
      description:
        "Create compelling content strategies and execute content marketing campaigns for our clients.",
      requirements: [
        "Strong writing and editing skills",
        "SEO content optimization experience",
        "Content strategy development",
        "Editorial calendar management",
        "Performance tracking and analysis",
      ],
      benefits: [
        "Flexible work schedule",
        "Project completion bonuses",
        "Professional development",
        "Team collaboration tools",
        "Healthcare stipend",
      ],
    },
    {
      id: "5",
      title: "PPC Campaign Manager",
      department: "Paid Media",
      location: "San Francisco, USA",
      type: "Full-time",
      experience: "4+ years",
      salary: "$70,000 - $100,000",
      posted: "1 day ago",
      description:
        "Manage and optimize paid search and social campaigns for maximum ROI.",
      requirements: [
        "4+ years of PPC experience",
        "Google Ads certification",
        "Experience with bid management tools",
        "Budget management expertise",
        "Strong analytical skills",
      ],
      benefits: [
        "Competitive base salary",
        "Performance bonuses",
        "Full benefits package",
        "Stock options",
        "Professional growth opportunities",
      ],
    },
  ];

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

  // Filter jobs based on search and filters
  const filteredJobs = jobPostings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      selectedDepartment === "All" || job.department === selectedDepartment;
    const matchesType = selectedType === "All" || job.type === selectedType;
    const matchesLocation =
      selectedLocation === "All" || job.location === selectedLocation;

    return matchesSearch && matchesDepartment && matchesType && matchesLocation;
  });

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[linear-gradient(45deg,#8A6FF9,#6B4FD9)]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.4))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container relative mx-auto px-4 py-24 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
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
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 200"
            className="fill-background"
          >
            <path
              fillOpacity="1"
              d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="relative -mt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-gray-800 bg-card p-6 md:p-8"
          >
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search positions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-lg border border-gray-800 bg-background py-2.5 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:border-theme-primary-500 focus:outline-none focus:ring-1 focus:ring-theme-primary-500"
                />
              </div>

              {/* Department Filter */}
              <div>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full rounded-lg border border-gray-800 bg-background px-4 py-2.5 text-foreground focus:border-theme-primary-500 focus:outline-none focus:ring-1 focus:ring-theme-primary-500"
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
                  className="w-full rounded-lg border border-gray-800 bg-background px-4 py-2.5 text-foreground focus:border-theme-primary-500 focus:outline-none focus:ring-1 focus:ring-theme-primary-500"
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
                  className="w-full rounded-lg border border-gray-800 bg-background px-4 py-2.5 text-foreground focus:border-theme-primary-500 focus:outline-none focus:ring-1 focus:ring-theme-primary-500"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          {filteredJobs.length > 0 ? (
            <div className="grid gap-6">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer rounded-2xl border border-gray-800 bg-card p-6 transition-all duration-300 hover:border-theme-primary-500/20"
                >
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
                      <p className="text-muted-foreground">{job.description}</p>
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
                        type="submit"
                        variant="action"
                        size="sm-rounded"
                        rounded="full"
                      >
                        Apply Now
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-2xl border border-gray-800 bg-card p-12 text-center"
            >
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
            </motion.div>
          )}
        </div>
      </section>
      {/* Benefits Section */}
      <section className="border-t border-gray-800 bg-card">
        <div className="container mx-auto px-4 py-24 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Building2,
                title: "Flexible Work Environment",
                description:
                  "Work from home, office, or hybrid options available. We believe in giving you the freedom to work where you&apos;re most productive.",
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
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-gray-800 bg-background p-6"
              >
                <div className="mb-4 w-fit rounded-xl bg-theme-primary-500/10 p-3">
                  <benefit.icon className="h-6 w-6 text-theme-primary-400" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-24 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.1 }}
                className="group relative aspect-square overflow-hidden rounded-2xl"
              >
                <img
                  src={`/images/culture/image-${item}.jpg`}
                  alt={`Culture Image ${item}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="border-t border-gray-800 bg-card">
        <div className="container mx-auto px-4 py-24 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
          </motion.div>

          <div className="mx-auto max-w-3xl">
            {[
              {
                step: "01",
                title: "Application Review",
                description:
                  "Our talent team reviews your application within 48 hours.",
              },
              {
                step: "02",
                title: "Initial Screen",
                description:
                  "Brief video call to discuss your experience and aspirations.",
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
            ].map((step, index, array) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex gap-8 pb-12"
              >
                <div className="relative flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-theme-primary-500/10 text-xl font-bold text-theme-primary-400">
                    {step.step}
                  </div>
                  {index !== array.length - 1 && (
                    <div className="mt-4 h-full w-px bg-gradient-to-b from-theme-primary-500/50 to-transparent" />
                  )}
                </div>
                <div className="flex-1 rounded-2xl border border-gray-800 bg-background p-6">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-24 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-theme-primary-500 to-purple-700 p-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Don&apos;t See the Right Role?
            </h2>
            <p className="mb-8 text-lg text-white/80">
              We&apos;re always looking for talented individuals to join our
              team. Send us your resume and we&apos;ll keep you in mind for
              future opportunities.
            </p>
            <button className="rounded-full bg-white px-8 py-3 text-base font-semibold text-theme-primary-600 transition-all hover:bg-gray-100">
              Send Your Resume
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default CurrentOpenings;
