"use client";

import { Dumbbell, Fan, Shield, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HighDustingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src="/high-dusting-hero.jpg"
          alt="High Dusting Services"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="container relative z-10 flex h-full flex-col justify-center space-y-4 px-4 md:px-6 lg:px-8 text-white"
        >
          <motion.h1 
            variants={fadeIn}
            className="text-4xl font-bold md:text-5xl lg:text-6xl"
          >
            Professional High Dusting Services
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="max-w-2xl text-lg md:text-xl"
          >
            Expert cleaning solutions for those hard-to-reach areas, ensuring a
            cleaner and healthier environment for your space.
          </motion.p>
          <motion.div 
            variants={fadeIn}
            className="flex flex-wrap gap-4 pt-2"
          >
            <Button size="lg" className="rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold" asChild>
              <Link href="/services-quote-form">
                Get a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-white/25 bg-white/10 text-white hover:bg-white hover:text-slate-950" asChild>
              <Link href="/services/air-duct-cleaning">
                All Air Duct Services
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-3xl font-bold tracking-tight"
          >
            Why Choose Our High Dusting Service?
          </motion.h2>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid gap-8 md:grid-cols-3"
          >
            {[
              {
                icon: <Shield className="h-8 w-8 text-primary" />,
                title: "Safety First",
                description: "Our team uses professional-grade equipment and follows strict safety protocols to ensure thorough cleaning without any risks."
              },
              {
                icon: <Fan className="h-8 w-8 text-primary" />,
                title: "Advanced Equipment",
                description: "We utilize specialized high-reach equipment and HEPA-filtered vacuums to effectively remove dust from elevated surfaces."
              },
              {
                icon: <Dumbbell className="h-8 w-8 text-primary" />,
                title: "Expert Team",
                description: "Our trained professionals have years of experience in handling high-dusting challenges in various commercial settings."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="flex flex-col items-center space-y-4 rounded-2xl border border-border/60 bg-card p-8 text-center shadow-soft"
              >
                <div className="rounded-2xl bg-primary/10 p-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="bg-muted/40 py-20 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid gap-12 md:grid-cols-2 items-center"
          >
            <motion.div 
              variants={fadeIn}
              className="space-y-5"
            >
              <h2 className="text-3xl font-bold tracking-tight">
                Comprehensive High Dusting Solutions
              </h2>
              <p className="text-lg text-muted-foreground">
                Our high dusting service addresses those hard-to-reach areas that
                often accumulate dust and debris over time. We specialize in
                cleaning:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Ceiling beams and trusses</li>
                <li>High windows and ledges</li>
                <li>Light fixtures and ceiling fans</li>
                <li>Exposed spiral HVAC vents and ductwork</li>
                <li>Warehouse racking systems</li>
                <li>Industrial overhead equipment</li>
              </ul>
              <div className="pt-2">
                <Button size="lg" className="rounded-full" asChild>
                  <Link href="/services-quote-form">
                    Schedule Service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            <motion.div 
              variants={fadeIn}
              className="relative h-[400px] overflow-hidden rounded-3xl border border-border/60 shadow-soft"
            >
              <Image
                src="/high-dusting-detail.jpg"
                alt="High Dusting Process"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-proventblue py-16 text-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="container mx-auto px-4 md:px-6 lg:px-8 text-center"
        >
          <motion.h2 
            variants={fadeIn}
            className="mb-4 text-3xl font-bold"
          >
            Ready to Get Started with Professional High Dusting?
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="mb-8 text-lg text-white/85"
          >
            Contact us today for a free consultation and quote.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Button size="lg" variant="secondary" className="rounded-full bg-white text-slate-950 hover:bg-slate-100 font-bold" asChild>
              <Link href="/services-quote-form">
                Get Your Free Quote
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}