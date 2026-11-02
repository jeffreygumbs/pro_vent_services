import { Metadata } from "next";
import { ServicesQuoteForm } from "@/components/forms/services-quote/services-quote-form";
import { Sparkles, ShieldCheck, Clock, Calculator } from "lucide-react";

export const metadata: Metadata = {
  title: "Instant HVAC Quote & Online Booking | Pro-Vent Services",
  description:
    "Calculate an instant estimate for residential and commercial air duct cleaning, dryer vent cleaning, and BioClean sanitization, and book your live appointment slot.",
};

export default function ServicesQuotePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Banner */}
      <section className="relative py-16 lg:py-20 border-b border-border/50 bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Instant Online Estimator & Scheduler</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Request Your Service Quote
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Configure your property details below for an instant itemized estimate and select a live appointment time that works for you.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calculator className="h-4 w-4 text-primary" />
              <span>Real-Time Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>Live Calendar Availability</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span>No Hidden Fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Container */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ServicesQuoteForm />
        </div>
      </section>
    </div>
  );
}
