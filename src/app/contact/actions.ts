"use server";

import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
} | {
  message: string;
  success: boolean;
};


export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data.",
      fields: formData as Record<string, string>,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  try {
    // In a real application, you would send an email or save to a database here
    console.log("Contact form submitted:", parsed.data);
    // Example: await sendEmail(parsed.data);

    return { message: "Thank you! Your message has been sent successfully.", success: true };
  } catch (error) {
    console.error("Failed to submit contact form:", error);
    return { message: "An unexpected error occurred. Please try again later.", success: false };
  }
}
