"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

export default function CommercialPage() {
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
          src="/commercial-hero.jpg"
          alt="Commercial HVAC Services"
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
            Professional Commercial
            <br />
            HVAC Cleaning Services
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-lg sm:text-xl text-gray-200 max-w-2xl mb-8"
          >
            Ensure your business&apos;s air quality is at its best with our professional cleaning services.
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
          Our Commercial Services
        </motion.h2>
        <motion.div 
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Commercial HVAC Cleaning</CardTitle>
              <CardDescription>
                Complete cleaning of your building&apos;s air distribution system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Improve indoor air quality",
                  "Reduce airborne contaminants",
                  "Enhance system performance",
                  "Lower operating costs"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Industrial Ventilation</CardTitle>
              <CardDescription>
                Professional cleaning of industrial ventilation systems
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Meet safety regulations",
                  "Improve system efficiency",
                  "Reduce maintenance costs",
                  "Extend equipment life"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Commercial Sanitization</CardTitle>
              <CardDescription>
                Advanced sanitization for optimal workplace air quality
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Eliminate pathogens",
                  "Remove odors",
                  "Improve workplace health",
                  "Meet health standards"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
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
            variants={fadeIn}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: "Industry Expertise",
                description: "Specialized in commercial and industrial HVAC systems"
              },
              {
                title: "Advanced Equipment",
                description: "State-of-the-art technology for optimal cleaning results"
              },
              {
                title: "Compliance Guaranteed",
                description: "Meet all industry standards and regulations"
              },
              {
                title: "Flexible Scheduling",
                description: "Work around your business hours to minimize disruption"
              }
            ].map((item, index) => (
              <motion.div 
                variants={fadeIn}
                key={index}
                className="text-center"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
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
          Ready to Improve Your Workplace Air Quality?
        </motion.h2>
        <motion.p 
          variants={fadeIn}
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Let&apos;s improve your building&apos;s air quality together
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
