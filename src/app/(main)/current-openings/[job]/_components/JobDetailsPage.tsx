"use client";
import { FC } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Building2,
  Clock,
  DollarSign,
  Upload,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

// Form Schema
const applicationSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
      "Please enter a valid phone number",
    )
    .min(10, "Phone number must be at least 10 digits"),
  linkedin: z.string().url("Please enter a valid LinkedIn URL").optional(),
  portfolio: z.string().url("Please enter a valid portfolio URL").optional(),
  currentCompany: z.string().optional(),
  yearsOfExperience: z.string(),
  resumeFile: z.any(),
  coverLetter: z
    .string()
    .min(100, "Cover letter must be at least 100 characters"),
  heardAbout: z.string(),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

// Get the job data (you would typically fetch this from an API)
const getJobData = (id: string) => {
  console.log(id);
  const jobs = {
    "senior-digital-marketing-strategist": {
      id: "senior-digital-marketing-strategist",
      title: "Senior Digital Marketing Strategist",
      department: "Marketing",
      location: "New York, USA",
      type: "Full-time",
      experience: "5+ years",
      salary: "$80,000 - $120,000",
      posted: "2 days ago",
      description:
        "We're seeking an experienced Digital Marketing Strategist to lead our client campaigns and drive exceptional results.",
      responsibilities: [
        "Develop and execute comprehensive digital marketing strategies",
        "Lead client communications and presentations",
        "Manage and mentor junior team members",
        "Analyze campaign performance and optimize for results",
        "Stay current with digital marketing trends and best practices",
        "Collaborate with cross-functional teams",
        "Create detailed reports and recommendations",
        "Manage campaign budgets and ROI tracking",
      ],
      requirements: [
        "5+ years of digital marketing experience",
        "Proven track record of successful campaigns",
        "Experience with Google Analytics, Google Ads, and Meta Ads",
        "Strong analytical and strategic thinking skills",
        "Excellent communication and presentation abilities",
        "Experience with marketing automation tools",
        "Knowledge of SEO and content marketing",
        "Project management experience",
      ],
      benefits: [
        "Competitive salary and bonus structure",
        "Health, dental, and vision insurance",
        "Flexible work hours and remote options",
        "Professional development budget",
        "Company equity options",
        "401(k) matching",
        "Paid time off and holidays",
        "Team building events",
      ],
    },
    // Add more jobs here...
  };

  return jobs["senior-digital-marketing-strategist"];
};

const JobDetailsPage: FC<{ params: { job: string } }> = ({ params }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const job = getJobData(params.job);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
  });

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);
    setError(null);
    console.log(data);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSuccess(true);
      reset();
    } catch {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!job) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Job not found</h1>
          <Link
            href="/current-openings"
            className="mt-4 inline-flex items-center text-purple-400 hover:text-purple-500"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all openings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[linear-gradient(45deg,#8A6FF9,#6B4FD9)]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.4))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container relative mx-auto px-4 py-24 sm:px-6">
          <Link
            href="/current-openings"
            className="mb-8 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all openings
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              {job.title}
            </h1>
            <div className="flex flex-wrap gap-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
                <MapPin className="h-4 w-4" />
                {job.location}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
                <Building2 className="h-4 w-4" />
                {job.department}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
                <Clock className="h-4 w-4" />
                {job.type}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
                <DollarSign className="h-4 w-4" />
                {job.salary}
              </div>
            </div>
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

      {/* Job Details */}
      <section className="relative -mt-20 pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Column - Job Details */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                {/* Overview */}
                <div className="rounded-2xl border border-gray-800 bg-card p-6">
                  <h2 className="mb-4 text-2xl font-bold text-foreground">
                    Overview
                  </h2>
                  <p className="text-muted-foreground">{job.description}</p>
                </div>

                {/* Responsibilities */}
                <div className="rounded-2xl border border-gray-800 bg-card p-6">
                  <h2 className="mb-4 text-2xl font-bold text-foreground">
                    Responsibilities
                  </h2>
                  <ul className="space-y-3">
                    {job.responsibilities.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-purple-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div className="rounded-2xl border border-gray-800 bg-card p-6">
                  <h2 className="mb-4 text-2xl font-bold text-foreground">
                    Requirements
                  </h2>
                  <ul className="space-y-3">
                    {job.requirements.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-purple-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="rounded-2xl border border-gray-800 bg-card p-6">
                  <h2 className="mb-4 text-2xl font-bold text-foreground">
                    Benefits
                  </h2>
                  <ul className="space-y-3">
                    {job.benefits.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-purple-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Application Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-gray-800 bg-card p-6"
            >
              <h2 className="mb-6 text-2xl font-bold text-foreground">
                Apply Now
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      First Name
                    </label>
                    <input
                      {...register("firstName")}
                      type="text"
                      className="w-full rounded-lg border border-gray-800 bg-background px-4 py-2.5 text-foreground focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Last Name
                    </label>
                    <input
                      {...register("lastName")}
                      type="text"
                      className="w-full rounded-lg border border-gray-800 bg-background px-4 py-2.5 text-foreground focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full rounded-lg border border-gray-800 bg-background px-4 py-2.5 text-foreground focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Phone
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className="w-full rounded-lg border border-gray-800 bg-background px-4 py-2.5 text-foreground focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Professional Information */}
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      LinkedIn Profile
                    </label>
                    <input
                      {...register("linkedin")}
                      type="url"
                      className="w-full rounded-lg border border-gray-800 bg-background px-4 py-2.5 text-foreground focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                      placeholder="https://linkedin.com/in/..."
                    />
                    {errors.linkedin && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.linkedin.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Portfolio Website (Optional)
                    </label>
                    <input
                      {...register("portfolio")}
                      type="url"
                      className="w-full rounded-lg border border-gray-800 bg-background px-4 py-2.5 text-foreground focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                      placeholder="https://..."
                    />
                    {errors.portfolio && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.portfolio.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Current Company (Optional)
                    </label>
                    <input
                      {...register("currentCompany")}
                      type="text"
                      className="w-full rounded-lg border border-gray-800 bg-background px-4 py-2.5 text-foreground focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Years of Experience
                    </label>
                    <select
                      {...register("yearsOfExperience")}
                      className="w-full rounded-lg border border-gray-800 bg-background px-4 py-2.5 text-foreground focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    >
                      <option value="">Select experience</option>
                      <option value="0-2">0-2 years</option>
                      <option value="2-5">2-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                    {errors.yearsOfExperience && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.yearsOfExperience.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Resume/CV
                  </label>
                  <div className="rounded-lg border border-dashed border-gray-800 bg-background p-4 text-center">
                    <input
                      {...register("resumeFile")}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      id="resume-upload"
                    />
                    <label
                      htmlFor="resume-upload"
                      className="cursor-pointer space-y-2"
                    >
                      <div className="mx-auto w-fit rounded-full bg-purple-500/10 p-3">
                        <Upload className="h-6 w-6 text-purple-400" />
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span className="text-purple-400">Click to upload</span>{" "}
                        or drag and drop
                      </div>
                      <div className="text-xs text-muted-foreground">
                        PDF, DOC, DOCX (MAX. 5MB)
                      </div>
                    </label>
                  </div>
                </div>

                {/* Cover Letter */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Cover Letter
                  </label>
                  <textarea
                    {...register("coverLetter")}
                    rows={5}
                    className="w-full rounded-lg border border-gray-800 bg-background px-4 py-2.5 text-foreground focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    placeholder="Tell us why you're interested in this position..."
                  />
                  {errors.coverLetter && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.coverLetter.message}
                    </p>
                  )}
                </div>

                {/* How did you hear about us */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    How did you hear about this position?
                  </label>
                  <select
                    {...register("heardAbout")}
                    className="w-full rounded-lg border border-gray-800 bg-background px-4 py-2.5 text-foreground focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  >
                    <option value="">Select an option</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="indeed">Indeed</option>
                    <option value="glassdoor">Glassdoor</option>
                    <option value="referral">Employee Referral</option>
                    <option value="website">Company Website</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.heardAbout && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.heardAbout.message}
                    </p>
                  )}
                </div>

                {/* Success/Error Messages */}
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg bg-green-500/10 p-4"
                  >
                    <div className="flex items-center gap-2 text-green-500">
                      <CheckCircle2 className="h-5 w-5" />
                      <p className="text-sm font-medium">
                        Your application has been submitted successfully!
                        We&apos;ll be in touch soon.
                      </p>
                    </div>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg bg-red-500/10 p-4"
                  >
                    <div className="flex items-center gap-2 text-red-500">
                      <AlertCircle className="h-5 w-5" />
                      <p className="text-sm font-medium">{error}</p>
                    </div>
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full rounded-lg bg-purple-500 px-8 py-3 text-white transition-all hover:bg-purple-600 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span
                    className={`flex items-center justify-center gap-2 ${
                      isSubmitting ? "invisible" : ""
                    }`}
                  >
                    <Send className="h-5 w-5" />
                    Submit Application
                  </span>
                  {isSubmitting && (
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    </div>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default JobDetailsPage;
