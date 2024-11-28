import * as z from "zod";

export const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address")
    .refine((email) => email.includes("."), {
      message: "Please enter a valid email domain",
    }),
});
export type NewsletterFormData = z.infer<typeof newsletterSchema>;

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const contactFormPageSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
      "Please enter a valid phone number",
    )
    .min(10, "Phone number must be at least 10 digits"),
  company: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  budget: z.enum(["<10k", "10k-25k", "25k-50k", "50k+"]),
});
export type ContactFormData = z.infer<typeof contactFormPageSchema>;

export const applicationSchema = z.object({
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

export type ApplicationFormData = z.infer<typeof applicationSchema>;