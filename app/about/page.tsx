"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle2,
  Shield,
  Leaf,
  Award,
  Clock,
  Wrench,
  ArrowRight,
  Phone,
  Sparkles,
} from "lucide-react";

const corePillars = [
  {
    icon: Shield,
    title: "Certified Technicians",
    description:
      "Highly trained HVAC hygiene specialists adhering to strict NADCA and commercial safety standards.",
  },
  {
    icon: Clock,
    title: "24/7 Support & Flexibility",
    description:
      "After-hours commercial scheduling and responsive residential service when you need us.",
  },
  {
    icon: Wrench,
    title: "Negative-Pressure Equipment",
    description:
      "State-of-the-art power whip agitation and HEPA-filtered collection systems.",
  },
  {
    icon: Award,
    title: "Satisfaction Guaranteed",
    description:
      "Transparent pricing, thorough post-service walkthroughs, and lasting results on every job.",
  },
];

const bioCleanBenefits = [
  "Broad-spectrum disinfectant with 99.9999% efficacy",
  "Non-corrosive, non-flammable, and phosphate-free formula",
  "Fragrance-free, hypoallergenic, and gentle around children & pets",
  "Breaks down the molecular structure of smoke, fumes, and chemical vapors",
  "Safe for all interior ductwork, coils, and sensitive HVAC components",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-950 text-white">
        <Image
          src="/images/hvac-service.jpeg"
          alt="About Pro-Vent Services"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/60" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-300 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              <span>About Pro-Vent Services Inc.</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Setting the Standard for Clean Indoor Air Across Alberta
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Your trusted partner in residential, commercial, and industrial HVAC, air duct, dryer vent, and boiler cleaning—committed to healthier environments and peak energy efficiency.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                className="rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold"
                asChild
              >
                <Link href="/services-quote-form">
                  Get an Instant Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/25 bg-white/10 text-white hover:bg-white hover:text-slate-950"
                asChild
              >
                <Link href="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                <span>Who We Are</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Precision Equipment. Certified Craftsmanship.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Whether it&apos;s your family home, multi-unit residential building, or a large commercial facility, Pro-Vent Services delivers thorough, measurable HVAC cleaning results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By combining experienced technicians with high-velocity power whip systems and hospital-grade sanitization, we help you lower utility bills, extend equipment life, and protect indoor air quality.
              </p>
              <div className="pt-2">
                <Button size="lg" className="rounded-full" asChild>
                  <Link href="/services-quote-form">
                    Schedule Service Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
              {corePillars.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full border-border/60 hover:border-primary/40 hover:-translate-y-1 transition-all">
                      <CardHeader>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-2">
                          <Icon className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Products & Eco Commitment Section */}
      <section className="bg-muted/40 py-24 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Leaf className="h-3.5 w-3.5" />
              <span>Eco & Human-Friendly Chemistry</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Our Products & Sanitization Methods
            </h2>
            <p className="text-muted-foreground">
              We use only hospital-grade, biodegradable formulas that are tough on pathogens and completely safe for people, pets, and equipment.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="p-2 border-border/60">
              <CardHeader>
                <CardTitle className="text-2xl">
                  BioClean Disinfection Technology
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  For system sanitization, we utilize BioClean: a non-corrosive, non-flammable, phosphate-free, hypoallergenic, and fully biodegradable formulation engineered for HVAC distribution networks.
                </p>
                <ul className="space-y-3.5">
                  {bioCleanBenefits.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-foreground/90">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="p-2 border-border/60 flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Atomized Application & Zero Residue
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  BioClean can safely come into direct contact with skin without causing irritation and requires no rinsing or wiping to prevent surface damage.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  For comprehensive coverage, we apply BioClean using specialized atomization sprayers that reach every interior surface of your supply and return ductwork.
                </p>
                <div className="rounded-2xl bg-primary/10 border border-primary/20 p-6 flex items-center gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <Leaf className="h-7 w-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">
                      100% Biodegradable & EPA Approved
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Safe for residential homes, healthcare clinics, schools, and commercial offices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-proventblue via-slate-900 to-slate-950 p-10 sm:p-16 text-center text-white shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Experience the Pro-Vent Difference?
            </h2>
            <p className="text-slate-200 mb-8 text-lg max-w-2xl mx-auto">
              When you choose us as your HVAC hygiene partner, we bring certified expertise and transparent pricing as our standard.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="rounded-full bg-white text-slate-950 hover:bg-slate-100 font-bold"
                asChild
              >
                <Link href="/services-quote-form">
                  Get Service Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/30 bg-white/10 text-white hover:bg-white hover:text-slate-950"
                asChild
              >
                <a href="tel:780-686-6324">
                  <Phone className="mr-2 h-4 w-4" />
                  780-686-6324
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
