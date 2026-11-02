"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

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

export default function ResidentialPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="relative h-[70vh] w-full"
      >
        <Image
          src="/residential-hero.jpg"
          alt="Residential HVAC Services"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/50" />
        <motion.div 
          variants={fadeIn}
          className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <motion.h1 
            variants={fadeIn}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Professional Residential
            <br />
            HVAC Cleaning Services
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-lg sm:text-xl text-gray-200 max-w-2xl mb-8"
          >
            Ensure your home&apos;s air quality is at its best with our professional air duct cleaning services.
          </motion.p>
          <motion.div 
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button className="bg-proventblue hover:bg-proventblue-50" size="lg" asChild>
              <Link href="/services-quote-form">
                Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white bg-white/10 hover:bg-white/20" asChild>
              <Link href="tel:780-686-6324" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Us: 780-686-6324
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Services Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.h2 
          variants={fadeIn}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Residential Services
        </motion.h2>
        <motion.div 
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div 
            variants={fadeIn}
            className="rounded-3xl border border-border/60 bg-card shadow-soft hover:border-primary/40 hover:-translate-y-1 transition-all"
          >
            <div className="p-8 space-y-4">
              <h3 className="text-xl font-bold">Air Duct Cleaning</h3>
              <p className="text-muted-foreground text-sm">
                Complete cleaning of your home&apos;s air distribution system
              </p>
              <ul className="space-y-3">
                {[
                  "Improve air quality",
                  "Remove dust and allergens",
                  "Enhance system efficiency",
                  "Reduce energy costs"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2.5 text-sm font-medium">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeIn}
            className="rounded-3xl border border-border/60 bg-card shadow-soft hover:border-primary/40 hover:-translate-y-1 transition-all"
          >
            <div className="p-8 space-y-4">
              <h3 className="text-xl font-bold">Dryer Vent Cleaning</h3>
              <p className="text-muted-foreground text-sm">
                Professional cleaning of your dryer ventilation system
              </p>
              <ul className="space-y-3">
                {[
                  "Prevent fire hazards",
                  "Improve drying efficiency",
                  "Reduce energy consumption",
                  "Extend dryer lifespan"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2.5 text-sm font-medium">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeIn}
            className="rounded-3xl border border-border/60 bg-card shadow-soft hover:border-primary/40 hover:-translate-y-1 transition-all"
          >
            <div className="p-8 space-y-4">
              <h3 className="text-xl font-bold">System Sanitizing</h3>
              <p className="text-muted-foreground text-sm">
                Advanced sanitization for optimal air quality
              </p>
              <ul className="space-y-3">
                {[
                  "Eliminate bacteria and viruses",
                  "Remove unpleasant odors",
                  "Improve indoor air quality",
                  "Protect your family's health"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2.5 text-sm font-medium">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="bg-muted py-16"
      >
        <motion.div 
          variants={fadeIn}
          className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl font-bold text-center mb-12"
          >
            Why Choose Pro Vent Services?
          </motion.h2>
          <motion.div 
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: "Experienced Team",
                description: "Our certified technicians bring years of experience to every job"
              },
              {
                title: "Modern Equipment",
                description: "We use the latest technology and equipment for optimal results"
              },
              {
                title: "Satisfaction Guaranteed",
                description: "Your satisfaction is our top priority on every service call"
              },
              {
                title: "Competitive Pricing",
                description: "Fair and transparent pricing with no hidden fees"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="text-center"
              >
                <motion.h3 
                  variants={fadeIn}
                  className="text-xl font-semibold mb-3"
                >
                  {item.title}
                </motion.h3>
                <motion.p 
                  variants={fadeIn}
                  className="text-muted-foreground"
                >
                  {item.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center"
      >
        <motion.h2 
          variants={fadeIn}
          className="text-3xl font-bold mb-6"
        >
          Ready to Breathe Easier?
        </motion.h2>
        <motion.p 
          variants={fadeIn}
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Schedule your residential HVAC cleaning service today and enjoy cleaner, healthier air in your home.
        </motion.p>
        <motion.div 
          variants={fadeIn}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button className="bg-proventblue hover:bg-proventblue-50" size="lg" asChild>
            <Link href="/services-quote-form">
              Get Your Free Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </motion.div>
      </motion.section>
    </div>
  );
}
