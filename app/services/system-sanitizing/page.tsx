"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  Sprout,
  Building2,
  Home,
  Hotel,
  Factory,
  ArrowRight,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const sanitizingSubPages = [
  {
    title: "UV-C Light Air Purification",
    description: "Continuous 24/7 germicidal UV-C light treatment installed inside your HVAC air handler.",
    href: "/services/system-sanitizing/uv-light",
  },
  {
    title: "Antimicrobial Treatment",
    description: "EPA-registered antimicrobial barrier coating that inhibits mold, bacteria, and odor regrowth.",
    href: "/services/system-sanitizing/antimicrobial",
  },
  {
    title: "Full System Deep Cleaning",
    description: "Comprehensive coil, blower, drain pan, and ductwork decontamination.",
    href: "/services/system-sanitizing/deep-cleaning",
  },
];

export default function SystemSanitizingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-950 text-white">
        <Image
          src="/images/system-sanitizing-hero.jpg"
          alt="System Sanitizing Service"
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
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300 backdrop-blur-md">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Hospital-Grade BioClean Disinfection</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              HVAC System Sanitizing & Air Purification
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed">
              Eliminate 99.9999% of bacteria, fungi, mold spores, and odor-causing microorganisms with eco-friendly, hypoallergenic BioClean atomization and UV-C purification.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                className="rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold"
                asChild
              >
                <Link href="/services-quote-form">
                  Add Sanitizing to Your Quote
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
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Why Choose BioClean HVAC Sanitization?
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  Our professional sanitization service uses BioClean, an environmentally friendly bactericidal, fungicidal, and virucidal deodorizer specifically formulated for HVAC air distribution networks. It neutralizes odors and microbial buildup at the molecular level without leaving harsh chemical residues.
                </p>
              </div>

              <Card>
                <CardContent className="p-6 sm:p-8 space-y-5">
                  <h3 className="text-xl font-bold">Key Benefits of System Sanitizing</h3>
                  <ul className="grid sm:grid-cols-2 gap-3.5">
                    {[
                      "Eliminates harmful bacteria, viruses & mold spores",
                      "Neutralizes pet, smoke, and cooking odors",
                      "Hypoallergenic, non-corrosive & fragrance-free",
                      "Safe for children, pets, and sensitive equipment",
                      "Atomized fogging reaches all duct surfaces",
                      "Only $45 + GST when added to duct cleaning",
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-sm font-medium">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <div className="grid sm:grid-cols-3 gap-4">
                {sanitizingSubPages.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className="group rounded-2xl border border-border/60 bg-card p-5 shadow-soft hover:border-primary/40 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="font-bold text-base group-hover:text-primary transition-colors mb-2">
                        {sub.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {sub.description}
                      </p>
                    </div>
                    <div className="mt-4 inline-flex items-center text-xs font-semibold text-primary">
                      Learn More
                      <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 space-y-6 lg:sticky lg:top-28"
            >
              <Card>
                <CardContent className="p-6 sm:p-8 space-y-5">
                  <h3 className="text-xl font-bold">Ideal Environments for Sanitizing</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      { icon: Home, text: "Residential Homes" },
                      { icon: Building2, text: "Commercial Offices" },
                      { icon: Hotel, text: "Hotels & Restaurants" },
                      { icon: Factory, text: "Industrial Facilities" },
                    ].map(({ icon: Icon, text }, index) => (
                      <div
                        key={index}
                        className="flex items-center p-4 border border-border/60 rounded-xl gap-3 bg-muted/30"
                      >
                        <Icon className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm font-semibold">{text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-emerald-500/30 bg-emerald-500/5">
                <CardContent className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                      <Sprout className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="mb-1.5 text-lg font-bold">100% Eco-Friendly Formula</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Our BioClean sanitizing solution is biodegradable, phosphate-free, and safe for your family, pets, and the planet.
                      </p>
                    </div>
                  </div>
                  <Button className="w-full rounded-xl h-12 font-bold" size="lg" asChild>
                    <Link href="/services-quote-form">
                      Schedule System Sanitizing
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
