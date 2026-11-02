"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  Building2,
  Home,
  Users,
  Building,
  Flame,
  ArrowRight,
  Phone,
} from "lucide-react";

const warningSignsList = [
  "Clothes are taking multiple cycles to dry, especially jeans & towels",
  "Little or no lint is visible on the lint trap screen",
  "The dryer repeatedly stops or faults during a drying cycle",
  "Clothes have a damp, musty odour after the cycle finishes",
  "Clothing feels unusually hot to the touch after drying",
  "The exterior top of the dryer is very hot while running",
  "Excessive lint accumulation around the exterior vent hood",
];

const whoNeedsList = [
  { icon: Home, text: "Single Family Homes", href: "/services/dryer-vent-cleaning/residential" },
  { icon: Home, text: "Townhomes & Duplexes", href: "/services/dryer-vent-cleaning/residential" },
  { icon: Users, text: "Condominiums", href: "/services/dryer-vent-cleaning/commercial" },
  { icon: Building, text: "Apartment Complexes", href: "/services/dryer-vent-cleaning/commercial" },
  { icon: Building2, text: "Commercial Laundromats", href: "/services/dryer-vent-cleaning/commercial" },
  { icon: Building2, text: "Hotels & Healthcare Facilities", href: "/services/dryer-vent-cleaning/commercial" },
];

export default function DryerVentCleaningPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-950 text-white">
        <Image
          src="/images/dryer-vent-cleaning-hero.jpg"
          alt="Dryer Vent Cleaning Service"
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
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-md">
              <Flame className="h-3.5 w-3.5" />
              <span>Fire Hazard Prevention & Efficiency</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Professional Dryer Vent Cleaning
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed">
              Protect your property from lint fire hazards, cut drying times in half, and extend the life of your dryer with annual professional vent line cleaning.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                className="rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold"
                asChild
              >
                <Link href="/services-quote-form">
                  Schedule Dryer Vent Service
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
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-10"
            >
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Why Annual Dryer Vent Cleaning Matters
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  Clogged dryer vents are one of the leading causes of preventable household and commercial laundry fires. Even when you clean your lint trap after every load, fine lint bypasses the screen and builds up inside long ductwork bends and exterior hoods.
                </p>
              </div>

              <Card className="border-amber-500/30 bg-amber-500/5">
                <CardContent className="p-6 sm:p-8 space-y-6">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400">
                      <AlertTriangle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">7 Warning Signs of a Clogged Dryer Vent</h3>
                      <p className="text-xs text-muted-foreground">
                        If you notice any of these symptoms, stop running heavy cycles and book an inspection
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-3">
                    {warningSignsList.map((sign, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-card border border-border/50"
                      >
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm font-medium">{sign}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="relative h-[360px] w-full rounded-3xl overflow-hidden shadow-soft border border-border/60">
                <Image
                  src="/images/dryer-vent-cleaning-process.jpg"
                  alt="Dryer Vent Cleaning Process"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 space-y-6 lg:sticky lg:top-28"
            >
              <Card className="p-2">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Transparent Dryer Vent Pricing</h3>
                  <p className="text-sm text-muted-foreground">
                    Add dryer vent cleaning to any furnace package or book it as a standalone service:
                  </p>
                  <div className="space-y-2.5 text-sm">
                    <div className="flex justify-between rounded-xl bg-muted/50 p-3.5">
                      <span>Main Floor / Up to 10 ft.</span>
                      <span className="font-bold text-primary">$45 + GST</span>
                    </div>
                    <div className="flex justify-between rounded-xl bg-muted/50 p-3.5">
                      <span>Second Story (10 ft. – 30 ft.)</span>
                      <span className="font-bold text-primary">$85 + GST</span>
                    </div>
                    <div className="flex justify-between rounded-xl bg-muted/50 p-3.5">
                      <span>Roof Access Outlet</span>
                      <span className="font-bold text-primary">$125 + GST</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-2">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Properties We Serve</h3>
                  <div className="grid gap-2.5">
                    {whoNeedsList.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="group flex items-center justify-between p-3.5 bg-muted/40 rounded-xl border border-border/40 hover:border-primary/40 hover:bg-primary/5 transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="h-5 w-5 text-primary" />
                          <span className="text-sm font-semibold">{item.text}</span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </Link>
                    ))}
                  </div>
                  <Button className="w-full rounded-xl h-12 font-bold mt-2" size="lg" asChild>
                    <Link href="/services-quote-form">
                      Schedule Dryer Vent Cleaning
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
