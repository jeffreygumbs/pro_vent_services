"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  Flame,
  Gauge,
  Shield,
  Sparkles,
  ArrowRight,
  Phone,
} from "lucide-react";

const benefits = [
  {
    title: "Enhanced Efficiency",
    description:
      "Remove insulating soot and scale deposits to maximize heat transfer and reduce fuel consumption.",
    icon: Gauge,
  },
  {
    title: "Extended Lifespan",
    description:
      "Prevent premature heat exchanger corrosion and mechanical wear with scheduled descaling.",
    icon: Shield,
  },
  {
    title: "Verified Safety",
    description:
      "Comprehensive combustion, pressure relief, and carbon monoxide safety control checks.",
    icon: Flame,
  },
  {
    title: "Lower Operating Costs",
    description:
      "Cut monthly heating bills and avoid costly mid-winter emergency breakdowns.",
    icon: Sparkles,
  },
];

const features = [
  "Complete hydronic system & boiler inspection",
  "Scale, soot, and sediment removal",
  "Heat exchanger brushing & chemical cleaning",
  "Burner assembly cleaning and calibration",
  "Safety relief valve & control testing",
  "Flue gas & combustion efficiency optimization",
  "Detailed post-service inspection report",
  "Preventive maintenance recommendations",
];

const boilerSubPages = [
  {
    title: "Residential Boiler Cleaning",
    description: "Keep your home's hydronic heating & radiant floor system operating quietly and efficiently.",
    href: "/services/boiler-cleaning/residential",
  },
  {
    title: "Commercial & Industrial Boilers",
    description: "High-capacity boiler descaling, tube brushing, and compliance documentation for facilities.",
    href: "/services/boiler-cleaning/commercial",
  },
  {
    title: "Annual Maintenance Plans",
    description: "Predictable annual and bi-annual inspection packages with priority emergency support.",
    href: "/services/boiler-cleaning/maintenance",
  },
];

export default function BoilerCleaningPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-950 text-white">
        <Image
          src="/commercial-boiler-benefits.jpg"
          alt="Professional Boiler Cleaning Services"
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
              <Gauge className="h-3.5 w-3.5" />
              <span>Hydronic & Steam Boiler Maintenance</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Professional Boiler Cleaning Services
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed">
              Maximize your boiler&apos;s thermal efficiency and extend its service life with expert heat exchanger cleaning, descaling, and burner tuning.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                className="rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold"
                asChild
              >
                <Link href="/services-quote-form">
                  Request Boiler Service
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/25 bg-white/10 text-white hover:bg-white hover:text-slate-950"
                asChild
              >
                <Link href="/services/boiler-cleaning/maintenance">
                  View Maintenance Plans
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/40 border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Why Choose Our Boiler Cleaning Service?
            </h2>
            <p className="text-muted-foreground">
              Even a thin layer of soot or scale inside your heat exchanger can increase fuel usage by 10–25%.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-primary/40 transition-all">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Specialized Pages Section */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Our 8-Point Boiler Cleaning Process
              </h2>
              <p className="text-muted-foreground">
                Every residential and commercial boiler service follows a rigorous checklist to ensure safe, reliable winter heating.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-2xl border border-border/60 bg-card"
                  >
                    <CheckCircle2 className="text-primary h-5 w-5 shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-2xl font-bold">Explore Boiler Solutions</h3>
              {boilerSubPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group block rounded-2xl border border-border/60 bg-card p-6 shadow-soft hover:border-primary/40 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                      {page.title}
                    </h4>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {page.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-proventblue via-slate-900 to-slate-950 p-10 sm:p-16 text-center text-white shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Improve Your Boiler&apos;s Efficiency?
            </h2>
            <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
              Contact us today for a free quote on residential or commercial boiler cleaning.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="rounded-full bg-white text-slate-950 hover:bg-slate-100 font-bold"
                asChild
              >
                <Link href="/services-quote-form">
                  Get Your Free Quote
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
