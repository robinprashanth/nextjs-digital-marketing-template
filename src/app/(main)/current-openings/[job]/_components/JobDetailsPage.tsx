"use client";

import { FC } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Button } from "@/components/ui/button";
import { ScrollInView } from "@/components/motion/ScrollInView";
import { ApplicationFormData, applicationSchema } from "@/lib/validation";
import type { JobPosting } from "@/types";

interface JobDetailsPageProps {
  job: JobPosting;
}

const JobDetailsPage: FC<JobDetailsPageProps> = ({ job }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

    try {
      // Send application data to your API
      const response = await fetch('/api/jobs/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jobId: job.id,
          ...data,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      setIsSuccess(true);
      reset();
    } catch  {
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
            className="mt-4 inline-flex items-center text-theme-primary-400 hover:text-theme-primary-500"
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

          <ScrollInView
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
          </ScrollInView>
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
      <section className="relative -mt-36 pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Column - Job Details */}
            <div className="lg:col-span-2">
              <ScrollInView
                className="space-y-8"
              >
                {/* Overview */}
                <div className="rounded-2xl border border-theme-neutral-800 bg-card p-6">
                  <h2 className="mb-4 text-2xl font-bold text-foreground">
                    Overview
                  </h2>
                  <p className="text-muted-foreground">{job.description}</p>
                </div>

                {/* Responsibilities */}
                <div className="rounded-2xl border border-theme-neutral-800 bg-card p-6">
                  <h2 className="mb-4 text-2xl font-bold text-foreground">
                    Responsibilities
                  </h2>
                  <ul className="space-y-3">
                    {job.responsibilities.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-theme-primary-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div className="rounded-2xl border border-theme-neutral-800 bg-card p-6">
                  <h2 className="mb-4 text-2xl font-bold text-foreground">
                    Requirements
                  </h2>
                  <ul className="space-y-3">
                    {job.requirements.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-theme-primary-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="rounded-2xl border border-theme-neutral-800 bg-card p-6">
                  <h2 className="mb-4 text-2xl font-bold text-foreground">
                    Benefits
                  </h2>
                  <ul className="space-y-3">
                    {job.benefits.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-theme-primary-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollInView>
            </div>

            {/* Right Column - Application Form */}
            <ScrollInView
            useInView={true}
            delay={0.2}
              className="rounded-2xl border border-theme-neutral-800 bg-card p-6"
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
                      className="w-full rounded-lg border border-theme-neutral-800 bg-background px-4 py-2.5 text-foreground focus:border-theme-primary-500 focus:outline-none focus:ring-1 focus:ring-theme-primary-500"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-theme-rose-500">
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
                      className="w-full rounded-lg border border-theme-neutral-800 bg-background px-4 py-2.5 text-foreground focus:border-theme-primary-500 focus:outline-none focus:ring-1 focus:ring-theme-primary-500"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-theme-rose-500">
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
                      className="w-full rounded-lg border border-theme-neutral-800 bg-background px-4 py-2.5 text-foreground focus:border-theme-primary-500 focus:outline-none focus:ring-1 focus:ring-theme-primary-500"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-theme-rose-500">
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
                      className="w-full rounded-lg border border-theme-neutral-800 bg-background px-4 py-2.5 text-foreground focus:border-theme-primary-500 focus:outline-none focus:ring-1 focus:ring-theme-primary-500"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-theme-rose-500">
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
                      className="w-full rounded-lg border border-theme-neutral-800 bg-background px-4 py-2.5 text-foreground focus:border-theme-primary-500 focus:outline-none focus:ring-1 focus:ring-theme-primary-500"
                      placeholder="https://linkedin.com/in/..."
                    />
                    {errors.linkedin && (
                      <p className="mt-1 text-sm text-theme-rose-500">
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
                      className="w-full rounded-lg border border-theme-neutral-800 bg-background px-4 py-2.5 text-foreground focus:border-theme-primary-500 focus:outline-none focus:ring-1 focus:ring-theme-primary-500"
                      placeholder="https://..."
                    />
                    {errors.portfolio && (
                      <p className="mt-1 text-sm text-theme-rose-500">
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
                      className="w-full rounded-lg border border-theme-neutral-800 bg-background px-4 py-2.5 text-foreground focus:border-theme-primary-500 focus:outline-none focus:ring-1 focus:ring-theme-primary-500"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Years of Experience
                    </label>
                    <select
                      {...register("yearsOfExperience")}
                      className="w-full rounded-lg border border-theme-neutral-800 bg-background px-4 py-2.5 text-foreground focus:border-theme-primary-500 focus:outline-none focus:ring-1 focus:ring-theme-primary-500"
                    >
                      <option value="">Select experience</option>
                      <option value="0-2">0-2 years</option>
                      <option value="2-5">2-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                    {errors.yearsOfExperience && (
                      <p className="mt-1 text-sm text-theme-rose-500">
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
                  <div className="rounded-lg border border-dashed border-theme-neutral-800 bg-background p-4 text-center">
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
                      <div className="mx-auto w-fit rounded-full bg-theme-primary-500/10 p-3">
                        <Upload className="h-6 w-6 text-theme-primary-400" />
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span className="text-theme-primary-400">Click to upload</span>{" "}
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
                    className="w-full rounded-lg border border-theme-neutral-800 bg-background px-4 py-2.5 text-foreground focus:border-theme-primary-500 focus:outline-none focus:ring-1 focus:ring-theme-primary-500"
                    placeholder="Tell us why you're interested in this position..."
                  />
                  {errors.coverLetter && (
                    <p className="mt-1 text-sm text-theme-rose-500">
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
                    className="w-full rounded-lg border border-theme-neutral-800 bg-background px-4 py-2.5 text-foreground focus:border-theme-primary-500 focus:outline-none focus:ring-1 focus:ring-theme-primary-500"
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
                    <p className="mt-1 text-sm text-theme-rose-500">
                      {errors.heardAbout.message}
                    </p>
                  )}
                </div>

                {/* Success/Error Messages */}
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg bg-theme-tulip-500/10 p-4"
                  >
                    <div className="flex items-center gap-2 text-theme-tulip-500">
                      <CheckCircle2 className="h-5 w-5" />
                      <p className="text-sm font-medium">
                        Your application has been submitted successfully!
                        We&apos;ll be in touch soon.
                      </p>
                    </div>
                  </motion.div>
                )}

                {error && (
                  <ScrollInView
                    className="rounded-lg bg-theme-rose-500/10 p-4"
                  >
                    <div className="flex items-center gap-2 text-theme-rose-500">
                      <AlertCircle className="h-5 w-5" />
                      <p className="text-sm font-medium">{error}</p>
                    </div>
                  </ScrollInView>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="action"
                  size="lg"
                  disabled={isSubmitting}
                  className="relative w-full rounded-lg bg-theme-primary-500 px-8 py-3 text-white transition-all hover:bg-theme-primary-600 disabled:cursor-not-allowed disabled:opacity-70"
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
                </Button>
              </form>
            </ScrollInView>
          </div>
        </div>
      </section>
    </main>
  );
};

export default JobDetailsPage;
