"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "motion/react";
import { sendContactEmail } from "@/lib/actions/send-email";
import { FormEvent, useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

type FormState = {
  status: "idle" | "submitting" | "submitted" | "error";
  message?: string;
};

export default function ContactForm() {
  const { toast } = useToast();
  const [formState, setFormState] = useState<FormState>({
    status: "idle",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState({ status: "submitting" });
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await sendContactEmail(formData);

      if ("error" in response) {
        toast({
          title: "Error",
          description: response.error,
          variant: "destructive",
        });
        setFormState({ status: "error", message: response.error });
      } else {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. Our team will be in touch shortly.",
        });
        setFormState({ status: "submitted" });
        form.reset();
      }
    } catch (e) {
      console.error("Error submitting form:", e);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
      setFormState({ status: "error" });
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-border/60 bg-card p-8 sm:p-10 shadow-soft"
    >
      <div className="mb-8 space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Send Us a Message
        </h2>
        <p className="text-sm text-muted-foreground">
          Fill out the form below and our service coordinators will get back to you promptly.
        </p>
      </div>

      {formState.status === "submitted" && (
        <div className="mb-6 flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-700 dark:text-emerald-300">
          <CheckCircle2 className="h-5 w-5 shrink-0" />
          <span>Thank you! Your message has been received. We&apos;ll be in touch soon.</span>
        </div>
      )}

      <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm font-medium">
              First Name <span className="text-destructive">*</span>
            </label>
            <Input
              id="firstName"
              name="name"
              placeholder="Jane"
              className="h-11 rounded-xl"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm font-medium">
              Last Name
            </label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Doe"
              className="h-11 rounded-xl"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address <span className="text-destructive">*</span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="jane@example.com"
              className="h-11 rounded-xl"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(780) 686-6324"
              className="h-11 rounded-xl"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-medium">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            className="w-full h-11 px-3.5 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Select a service...</option>
            <option value="air-duct-cleaning">Air Duct & Furnace Cleaning</option>
            <option value="dryer-vent-cleaning">Dryer Vent Cleaning</option>
            <option value="boiler-cleaning">Boiler Cleaning & Maintenance</option>
            <option value="system-sanitizing">BioClean System Sanitizing</option>
            <option value="commercial">Commercial / Industrial Quote</option>
            <option value="other">Other Inquiry</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            How Can We Help? <span className="text-destructive">*</span>
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your property, HVAC system, or any questions you have..."
            className="w-full min-h-[130px] rounded-xl resize-none"
            required
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full rounded-xl h-12"
          disabled={formState.status === "submitting"}
        >
          {formState.status === "submitting" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
}
