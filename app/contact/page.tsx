import { Phone, Mail, MapPin, Clock, Sparkles, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/contact/contact-form";
import { Button } from "@/components/ui/button";

const contactCards = [
  {
    icon: Phone,
    title: "Phone Support",
    value: "780-686-6324",
    subtext: "Call us directly for quotes or urgent service",
    href: "tel:780-686-6324",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info@proventservices.ca",
    subtext: "We respond within 1 business day",
    href: "mailto:info@proventservices.ca",
  },
  {
    icon: MapPin,
    title: "Headquarters",
    value: "22 Rowland Crescent",
    subtext: "St. Albert, AB T8N 4B3",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon – Fri: 8:00 AM – 5:00 PM",
    subtext: "Commercial after-hours scheduling available",
  },
];

export default async function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Banner */}
      <section className="relative py-20 border-b border-border/50 bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            We&apos;re Here to Help You Breathe Easier
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            Have a question about residential duct cleaning, commercial HVAC maintenance, or custom quotes? Reach out below or use our instant online estimator.
          </p>
          <div className="pt-2">
            <Button variant="outline" className="rounded-full" asChild>
              <Link href="/services-quote-form">
                Looking for instant pricing? Try our Quote Calculator
                <ArrowUpRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Contact Info & Map */}
            <div className="lg:col-span-6 space-y-8">
              <div className="grid sm:grid-cols-2 gap-4">
                {contactCards.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-border/60 bg-card p-6 shadow-soft transition-all hover:border-primary/40"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {item.title}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block text-base font-bold text-foreground hover:text-primary transition-colors break-words"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-base font-bold text-foreground">
                          {item.value}
                        </p>
                      )}
                      <p className="mt-1 text-xs text-muted-foreground">
                        {item.subtext}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Service Area & Map */}
              <div className="rounded-3xl border border-border/60 bg-card p-6 sm:p-8 shadow-soft space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold">Our Service Area</h2>
                    <p className="text-sm text-muted-foreground">
                      Proudly serving St. Albert, Edmonton, and surrounding Alberta communities.
                    </p>
                  </div>
                </div>

                <div className="w-full h-[340px] rounded-2xl overflow-hidden border border-border/50">
                  <iframe
                    title="Pro-Vent Services Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2973.6768774533807!2d-113.64757692289247!3d53.618163454350196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a02752e5b084a7%3A0x9566e63a8a2deb6b!2sPro%20Vent%20Services%20Inc.!5e1!3m2!1sen!2sca!4v1736222051343!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
