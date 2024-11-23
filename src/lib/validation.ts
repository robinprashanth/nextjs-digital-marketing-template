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
