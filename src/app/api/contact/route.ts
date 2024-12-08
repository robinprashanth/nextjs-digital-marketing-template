import { contactFormPageSchema } from "@/lib/validation";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

// Create email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Email HTML template
const createEmailHTML = (data: z.infer<typeof contactFormPageSchema>) => `
  <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Contact Form Submission</h2>
    
    <div style="margin: 20px 0;">
      <h3 style="color: #666;">Contact Information</h3>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
    </div>

    <div style="margin: 20px 0;">
      <h3 style="color: #666;">Project Details</h3>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Services Interested:</strong> ${data.services.join(", ")}</p>
      <p><strong>Budget Range:</strong> ${data.budget}</p>
    </div>

    <div style="margin: 20px 0;">
      <h3 style="color: #666;">Message</h3>
      <p style="white-space: pre-wrap;">${data.message}</p>
    </div>
  </div>
`;

export async function POST(req: Request) {
  try {
    // Parse and validate request body
    const body = await req.json();
    const validatedData = contactFormPageSchema.parse(body);

    // Prepare email data
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_EMAIL || "contact@gmail.com",
      subject: `New Contact Form Submission: ${validatedData.subject}`,
      html: createEmailHTML(validatedData),
      replyTo: validatedData.email, // Allow direct replies to the sender
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);

      // Return success response
      return NextResponse.json(
        {
          success: true,
          message: "Thank you for your message. We'll get back to you soon!",
        },
        { status: 200 },
      );
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      return NextResponse.json(
        {
          success: false,
          error: "Failed to send email. Please try again later.",
        },
        { status: 500 },
      );
    }
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid form data",
          issues: error.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
          })),
        },
        { status: 400 },
      );
    }

    // Handle other errors
    console.error("Unexpected error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 },
    );
  }
}
