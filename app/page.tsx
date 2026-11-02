"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Wind,
  Flame,
  Gauge,
  ShieldCheck,
  ArrowRight,
  Phone,
  CheckCircle2,
  Sparkles,
  Star,
  Clock,
  Award,
  Leaf,
  Calculator,
  CalendarCheck,
} from "lucide-react";

const services = [
  {
    title: "Air Duct & Furnace Cleaning",
    badge: "Most Popular",
    description:
      "High-pressure power whip duct cleaning that removes built-up dust, allergens, and debris to restore peak airflow.",
    href: "/services/air-duct-cleaning",
    icon: Wind,
    highlights: ["Power-whip main lines", "Blower & coil care", "Residential & Commercial"],
  },
  {
    title: "Dryer Vent Cleaning",
    badge: "Fire Prevention",
    description:
      "Eliminate hazardous lint accumulation, shorten drying cycles, and protect your property from dryer vent fires.",
    href: "/services/dryer-vent-cleaning",
    icon: Flame,
    highlights: ["Multi-story & roof access", "Airflow verification", "Reduces energy bills"],
  },
  {
    title: "Boiler Cleaning & Tuning",
    badge: "Efficiency",
    description:
      "Scale and sediment removal, heat exchanger cleaning, and safety testing for residential and commercial boilers.",
    href: "/services/boiler-cleaning",
    icon: Gauge,
    highlights: ["Heat exchanger descaling", "Burner optimization", "Annual maintenance plans"],
  },
  {
    title: "BioClean System Sanitizing",
    badge: "Hospital-Grade",
    description:
      "Eco-friendly, hypoallergenic sanitization and UV-C purification that eliminates 99.99% of bacteria, mold, and odors.",
    href: "/services/system-sanitizing",
    icon: ShieldCheck,
    highlights: ["99.9999% efficacy BioClean", "UV-C light options", "Non-toxic & fragrance-free"],
  },
];

const stats = [
  { value: "99.99%", label: "BioClean Pathogen Efficacy", icon: Leaf },
  { value: "2–4 hrs", label: "Typical Home Service Time", icon: Clock },
  { value: "100%", label: "Satisfaction Guaranteed", icon: Award },
  { value: "24/7", label: "Emergency Support Available", icon: Phone },
];

const processSteps = [
  {
    step: "01",
    title: "Instant Online Estimate",
    description:
      "Select your property size, furnace count, and optional add-ons to see transparent, real-time pricing in seconds.",
    icon: Calculator,
  },
  {
    step: "02",
    title: "Live Availability Booking",
    description:
      "Pick a convenient date and real-time appointment slot that fits seamlessly into your schedule.",
    icon: CalendarCheck,
  },
  {
    step: "03",
    title: "Deep Power-Whip & Sanitize",
    description:
      "Our certified technicians arrive on time with state-of-the-art negative pressure equipment and leave your space spotless.",
    icon: Sparkles,
  },
];

const testimonials = [
  {
    content:
      "I just wanted to say how much I appreciate the excellent quality of work done by your staff. Without worry, I know that I will have a clean home to come home to after you are finished. It isn't often that you will have a service provider perform the tasks you hired them for and have the job done well.",
    author: "Ian A. Johnson",
    role: "Small Business Owner",
    rating: 5,
  },
  {
    content:
      "Mario was very friendly and thorough. Explained everything he was doing. Reasonably priced and great communication from start to finish!",
    author: "Robin",
    role: "Commercial Client",
    rating: 5,
  },
  {
    content:
      "Excellent service and very professional. Would highly recommend their services to anyone looking for quality duct cleaning and dryer vent maintenance.",
    author: "Sarah M.",
    role: "Homeowner",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <Image
          src="/homepage-hero.jpeg"
          alt="Pro-Vent Services - Professional HVAC & Air Duct Cleaning"
          fill
          className="object-cover scale-105 transition-transform duration-1000"
          priority
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-500/20 via-transparent to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-sky-200 backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-sky-400" />
                <span>Residential & Commercial HVAC Cleaning Across Alberta</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                Breathe Cleaner,{" "}
                <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-white bg-clip-text text-transparent">
                  Healthier Air
                </span>{" "}
                Every Day.
              </h1>

              <p className="text-lg sm:text-xl text-slate-200/90 max-w-2xl leading-relaxed">
                Restore your HVAC system to peak efficiency with high-powered negative pressure duct cleaning, fire-safe dryer vent service, and hospital-grade BioClean sanitization.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  size="lg"
                  className="rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-8 h-14 text-base shadow-lg shadow-sky-500/25"
                  asChild
                >
                  <Link href="/services-quote-form">
                    Get Instant Online Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/25 bg-white/10 text-white hover:bg-white hover:text-slate-950 h-14 px-8 text-base backdrop-blur-md"
                  asChild
                >
                  <a href="tel:780-686-6324">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 780-686-6324
                  </a>
                </Button>
              </div>

              <div className="pt-6 grid grid-cols-3 gap-4 max-w-lg border-t border-white/15 text-white/85">
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0" />
                  <span>Transparent Pricing</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0" />
                  <span>Live Online Booking</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0" />
                  <span>Eco-Safe BioClean</span>
                </div>
              </div>
            </motion.div>

            {/* Right Interactive Highlight Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="rounded-3xl border border-white/15 bg-slate-900/75 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl text-white space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                      Instant Estimator
                    </span>
                    <h2 className="text-xl font-bold mt-0.5">
                      Transparent Residential Pricing
                    </h2>
                  </div>
                  <div className="h-11 w-11 rounded-2xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300">
                    <Calculator className="h-5 w-5" />
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 border border-white/10">
                    <span className="text-slate-200">800 – 1,500 sq. ft. Home</span>
                    <span className="font-bold text-sky-300">$320 + GST</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 border border-white/10">
                    <span className="text-slate-200">1,500 – 2,500 sq. ft. Home</span>
                    <span className="font-bold text-sky-300">$380 – $420 + GST</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 border border-white/10">
                    <span className="text-slate-200">Dryer Vent Cleaning Add-On</span>
                    <span className="font-bold text-sky-300">From $45 + GST</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 border border-white/10">
                    <span className="text-slate-200">BioClean System Sanitizer</span>
                    <span className="font-bold text-sky-300">$45 + GST</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full rounded-xl bg-white text-slate-950 hover:bg-slate-100 font-bold h-12"
                  asChild
                >
                  <Link href="/services-quote-form">
                    Customize Your Exact Quote & Book
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="relative z-20 -mt-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 rounded-3xl border border-border/60 bg-card/95 p-6 sm:p-8 shadow-soft backdrop-blur-xl">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 p-2"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                <span>Specialized HVAC Care</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Complete Indoor Air & Ventilation Solutions
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                Engineered for homeowners, property managers, and commercial facilities seeking measurable improvements in air quality and system longevity.
              </p>
            </div>
            <Button variant="outline" className="rounded-full self-start md:self-auto" asChild>
              <Link href="/services-quote-form">
                Compare Services & Pricing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/60 bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-7 w-7" />
                      </div>
                      <span className="rounded-full bg-secondary px-3.5 py-1 text-xs font-semibold text-secondary-foreground">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-2.5 mb-8">
                      {service.highlights.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-foreground/90">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
                    >
                      Explore Service Details
                      <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href="/services-quote-form"
                      className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Book Now →
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works / Process Section */}
      <section className="py-24 bg-muted/40 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <span>Simple 3-Step Workflow</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              How Pro-Vent Services Works
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              No guesswork, no hidden fees—just straightforward pricing and certified workmanship.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative rounded-3xl border border-border/60 bg-card p-8 shadow-soft"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-4xl font-black text-primary/15">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Pro-Vent Split Feature Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                <span>The Pro-Vent Standard</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                Ready for Your Commercial or Residential Space to Feel Rejuvenated?
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Our team is trained with highly qualified experts in professional HVAC, boiler, and dryer vent cleaning. When you choose Pro-Vent Services, you get industrial-strength negative pressure vacuums paired with eco-safe BioClean sanitization.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {[
                  "Power-Whip Agitation Tools",
                  "Hospital-Grade BioClean",
                  "NADCA-Aligned Protocols",
                  "Upfront Online Quotes",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 rounded-xl border border-border/50 bg-muted/30 p-3.5"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm font-semibold">{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="rounded-full" asChild>
                  <Link href="/services-quote-form">
                    Get a Quote Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full" asChild>
                  <Link href="/about">Learn About Our Methods</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="relative h-[440px] sm:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-border/60">
                <Image
                  src="/images/hvac-service.jpeg"
                  alt="Pro-Vent HVAC Technician Performing Duct Cleaning"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-slate-900/80 p-5 backdrop-blur-xl text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                        Eco & Human Friendly
                      </p>
                      <p className="text-sm sm:text-base font-bold mt-0.5">
                        BioClean 99.9999% Disinfection Standard
                      </p>
                    </div>
                    <Leaf className="h-8 w-8 text-sky-400 shrink-0" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/30 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <span>Client Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Trusted by Homeowners & Businesses
            </h2>
            <p className="text-muted-foreground">
              See what our residential and commercial clients have to say about working with Pro-Vent Services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col justify-between rounded-3xl border border-border/60 bg-card p-8 shadow-soft"
              >
                <div>
                  <div className="flex items-center gap-1 mb-5 text-amber-400">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground/90 leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>
                <div className="border-t border-border/50 pt-4">
                  <div className="font-bold text-foreground">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-proventblue via-slate-900 to-slate-950 p-10 sm:p-16 text-center text-white shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-sky-400/20 via-transparent to-transparent" />
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Ready to Schedule Your Service?
              </h2>
              <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto">
                Get an instant online quote with live calendar availability or speak directly with our St. Albert & Edmonton service specialists.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
                <Button
                  size="lg"
                  className="rounded-full bg-white text-slate-950 hover:bg-slate-100 font-bold px-8 h-14"
                  asChild
                >
                  <Link href="/services-quote-form">
                    Build Your Instant Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/30 bg-white/10 text-white hover:bg-white hover:text-slate-950 px-8 h-14"
                  asChild
                >
                  <a href="tel:780-686-6324">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 780-686-6324
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
