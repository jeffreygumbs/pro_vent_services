/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "motion/react";
import { sendContactEmail } from "@/lib/actions/send-email";
import { FormEvent } from "react";

type FormState = {
  status: "idle" | "submitting" | "submitted" | "error";
  message?: string;
};

export default function ContactForm() {
  const { toast } = useToast();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await sendContactEmail(formData);
      
      if ('error' in response) {
        toast({
          title: "Error",
          description: response.error,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success!",
          description: "Thank you for your message. We'll be in touch soon!",
        });
        form.reset();
      }
    } catch (e) {
      console.error("Error submitting form:", e);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-card p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
      <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm font-medium">
              First Name
            </label>
            <Input
              id="firstName"
              name="name"
              placeholder="John"
              className="w-full"
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
              className="w-full"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            className="w-full"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(780) 686-6324"
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-medium">
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
          >
            <option value="">Select a service</option>
            <option value="air-duct-cleaning">Air Duct Cleaning</option>
            <option value="dryer-vent-cleaning">Dryer Vent Cleaning</option>
            <option value="boiler-cleaning">Boiler Cleaning</option>
            <option value="system-sanitizing">System Sanitizing</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your needs..."
            className="w-full min-h-[100px]"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </motion.div>
  );
}
