"use server";

import { Resend } from "resend";
import ContactFormEmail from "../../emails/contact-form";
import ConfirmationEmail from "../../emails/confirmation-email";

const resend = new Resend(process.env.RESEND_API_KEY);

const PROVENT_EMAIL = "info@proventservices.ca";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;

  // Validate required fields
  if (!name || !email || !message) {
    return {
      error: "Please fill in all required fields.",
    };
  }

  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set in environment variables");
      return {
        error: "Email service configuration error.",
      };
    }

    // Send notification email to Pro-Vent Services
    console.log("Sending notification email to Pro-Vent Services...");
    const notificationResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: PROVENT_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      react: ContactFormEmail({ name, email, phone, service, message }),
    });

    if (notificationResult.error) {
      console.error("Failed to send notification email:", notificationResult.error);
      throw new Error("Failed to send notification email");
    }

    console.log("Notification email sent successfully:", notificationResult);

    // Send confirmation email to the customer
    console.log("Sending confirmation email to customer...");
    const confirmationResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Thank you for contacting Pro-Vent Services",
      react: ConfirmationEmail({ name, email }),
    });

    if (confirmationResult.error) {
      console.error("Failed to send confirmation email:", confirmationResult.error);
      throw new Error("Failed to send confirmation email");
    }

    console.log("Confirmation email sent successfully:", confirmationResult);

    return { 
      success: true,
      message: "Your message has been sent successfully. We'll get back to you soon!" 
    };
  } catch (e) {
    console.error("Failed to send email:", e);
    if (e instanceof Error) {
      return {
        error: `Failed to send email: ${e.message}`,
      };
    }
    return {
      error: "Failed to send email. Please try again later.",
    };
  }
}
