"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Phone, Shield, Droplets, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function AntimicrobialPage() {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="min-h-screen bg-background"
    >
      {/* Hero Section */}
      <motion.div 
        variants={fadeIn}
        className="relative h-[70vh] w-full"
      >
        <Image
          src="/images/system-sanitizing-hero.jpg"
          alt="Antimicrobial Treatment Services"
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
            Antimicrobial
            <br />
            Treatment Services
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-lg sm:text-xl text-gray-200 max-w-2xl mb-8"
          >
            Professional antimicrobial treatment for long-lasting protection against harmful microorganisms in your HVAC system.
          </motion.p>
          <motion.div 
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" asChild>
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

      {/* Benefits Section */}
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
          Benefits of Antimicrobial Treatment
        </motion.h2>
        <motion.div 
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Long-Lasting Protection</CardTitle>
              <CardDescription>
                Durable antimicrobial coating for extended protection
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Continuous protection",
                  "Prevents microbial growth",
                  "Reduces recontamination",
                  "Lasting effectiveness"
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
              <CardTitle>Health Benefits</CardTitle>
              <CardDescription>
                Enhanced protection for healthier indoor environments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Reduces allergens",
                  "Controls bacteria",
                  "Prevents mold growth",
                  "Improves air quality"
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
              <CardTitle>System Benefits</CardTitle>
              <CardDescription>
                Protect and optimize your HVAC system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Extends system life",
                  "Improves efficiency",
                  "Reduces maintenance",
                  "Prevents corrosion"
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

      {/* Features Section */}
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
            Why Choose Our Antimicrobial Treatment?
          </motion.h2>
          <motion.div 
            variants={fadeIn}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Shield,
                title: "EPA Registered",
                description: "Safe and approved antimicrobial solutions for your peace of mind"
              },
              {
                icon: Droplets,
                title: "Complete Coverage",
                description: "Thorough application ensuring protection throughout the system"
              },
              {
                icon: Clock,
                title: "Long-Term Results",
                description: "Lasting protection that continues working for months"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm"
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <motion.h3 
                  variants={fadeIn}
                  className="text-xl font-semibold mb-2"
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  variants={fadeIn}
                  className="text-muted-foreground"
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Process Section */}
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
          Our Treatment Process
        </motion.h2>
        <motion.div 
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {[
            {
              step: "1",
              title: "Initial Assessment",
              description: "Thorough inspection of your HVAC system to determine treatment needs"
            },
            {
              step: "2",
              title: "System Preparation",
              description: "Cleaning and preparation of surfaces for optimal treatment adhesion"
            },
            {
              step: "3",
              title: "Treatment Application",
              description: "Professional application of antimicrobial solution throughout the system"
            },
            {
              step: "4",
              title: "Quality Check",
              description: "Final inspection to ensure complete coverage and effectiveness"
            }
          ].map((process, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              className="flex items-start gap-4 p-6 bg-card rounded-lg"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                {process.step}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            </motion.div>
          ))}
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
          Protect Your Space Today
        </motion.h2>
        <motion.p 
          variants={fadeIn}
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Get long-lasting antimicrobial protection for your HVAC system. Contact us to schedule your treatment.
        </motion.p>
        <motion.div 
          variants={fadeIn}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" asChild>
            <Link href="/services-quote-form">
              Get Your Free Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
