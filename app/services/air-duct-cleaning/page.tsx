"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  Phone,
  Clock,
  MapPin,
  ArrowRight,
  AlertCircle,
  Wind,
  Sparkles,
} from "lucide-react";

const serviceFeatures = [
  "Checking the fan belts for wear and proper tension",
  "Deep cleaning the furnace blower assembly",
  "Cleaning the heat exchangers for optimal heat transfer",
  "Replacing (disposable) or washing (permanent) furnace filter",
  "Cutting a precision access port in the plenum if required",
  "Removing, hand-cleaning & replacing all vent covers & registers",
  "Power Whipping all hot air supply vents & branch lines",
  "Cleaning inside all return air vents",
  "Power Whipping all main trunk lines under negative pressure",
  "Sanitizing & wiping interior and exterior furnace surfaces",
];

const subServiceLinks = [
  {
    href: "/services/air-duct-cleaning/residential",
    label: "Residential Air Duct Cleaning",
    desc: "Single-family homes, townhomes & condos",
  },
  {
    href: "/services/air-duct-cleaning/commercial",
    label: "Commercial HVAC Cleaning",
    desc: "Offices, retail, schools & industrial spaces",
  },
  {
    href: "/services/air-duct-cleaning/high-dusting",
    label: "High Dusting Services",
    desc: "Exposed ceilings, beams, rafters & warehouse racks",
  },
  {
    href: "/services/air-duct-cleaning/exhaust",
    label: "Exhaust System Cleaning",
    desc: "Bathroom, kitchen & commercial exhaust runs",
  },
];

export default function AirDuctCleaningPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-950 text-white">
        <Image
          src="/images/air-duct-cleaning-hero.jpg"
          alt="Air Duct Cleaning Service"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/50" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-300 backdrop-blur-md">
              <Wind className="h-3.5 w-3.5" />
              <span>Power-Whip Furnace & Duct Cleaning</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Professional Air Duct Cleaning Services
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed">
              Improve your indoor air quality, eliminate airborne allergens, and restore your HVAC system to peak efficiency with our negative-pressure Power Whip cleaning package.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                className="rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold"
                asChild
              >
                <Link href="/services-quote-form">
                  Get Instant Online Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/25 bg-white/10 text-white hover:bg-white hover:text-slate-950"
                asChild
              >
                <a href="tel:780-686-6324">
                  <Phone className="mr-2 h-4 w-4" />
                  Call 780-686-6324
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column - Service Description */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-10"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Peak HVAC Performance</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  The Importance of Furnace & Duct Cleaning
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  Over time, dust, pet dander, construction debris, and allergens restrict airflow across key components of your HVAC system. This forces your furnace to run longer and consume more energy. Pro-Vent Services Furnace & Duct Cleaning restores unrestricted airflow and helps lower utility costs.
                </p>
              </div>

              <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6 flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-foreground">
                    Winter Appointment Preparation Note
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Please raise your thermostat for 15 minutes prior to your appointment during winter months, as the furnace will be turned off during cleaning. Due to negative pressure created by our vacuum equipment, please do not use fireplaces or woodstoves during the service.
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <h3 className="text-2xl font-bold tracking-tight">
                  Our 10-Point Power Whip Package Includes:
                </h3>
                <div className="grid sm:grid-cols-2 gap-3.5">
                  {serviceFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-2xl border border-border/60 bg-card shadow-sm"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm font-medium leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Specialized Links & Contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 space-y-6 lg:sticky lg:top-28"
            >
              <Card className="p-2">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">
                    Specialized Duct & Ventilation Services
                  </h3>
                  <div className="space-y-3">
                    {subServiceLinks.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="group flex items-center justify-between p-4 rounded-2xl border border-border/50 bg-muted/40 hover:border-primary/40 hover:bg-primary/5 transition-all"
                      >
                        <div>
                          <div className="font-semibold text-sm group-hover:text-primary transition-colors">
                            {service.label}
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5">
                            {service.desc}
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="p-2">
                <CardContent className="p-6 space-y-5">
                  <h3 className="text-xl font-bold">Direct Dispatch & Support</h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-center gap-3.5">
                      <div className="bg-primary/10 p-2.5 rounded-xl">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Phone</p>
                        <a
                          href="tel:780-686-6324"
                          className="font-bold text-base hover:text-primary transition-colors"
                        >
                          780-686-6324
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3.5">
                      <div className="bg-primary/10 p-2.5 rounded-xl">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Hours</p>
                        <p className="font-semibold">Mon – Fri: 8:00 AM – 5:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3.5">
                      <div className="bg-primary/10 p-2.5 rounded-xl">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Location</p>
                        <p className="font-semibold">
                          22 Rowland Crescent, St. Albert, AB T8N 4B3
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full rounded-xl h-12 font-bold" size="lg" asChild>
                    <Link href="/services-quote-form">
                      Calculate Your Quote Online
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
