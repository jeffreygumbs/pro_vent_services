"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Phone, Timer, Flame, Sparkles } from "lucide-react";
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

export default function ResidentialDryerVentPage() {
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
          src="/images/dryer-vent-cleaning-process.jpg"
          alt="Residential Dryer Vent Cleaning"
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
            Residential Dryer
            <br />
            Vent Cleaning
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-lg sm:text-xl text-gray-200 max-w-2xl mb-8"
          >
            Professional dryer vent cleaning services to keep your home safe and your dryer running efficiently.
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
          Benefits of Regular Dryer Vent Cleaning
        </motion.h2>
        <motion.div 
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Safety First</CardTitle>
              <CardDescription>
                Prevent fire hazards in your home
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Reduces fire risk",
                  "Removes lint buildup",
                  "Prevents overheating",
                  "Regular inspections"
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
              <CardTitle>Energy Efficiency</CardTitle>
              <CardDescription>
                Optimize your dryer&apos;s performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Faster drying times",
                  "Lower energy bills",
                  "Extended appliance life",
                  "Better performance"
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
              <CardTitle>Home Protection</CardTitle>
              <CardDescription>
                Safeguard your home and family
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Prevents moisture damage",
                  "Reduces allergens",
                  "Improves air quality",
                  "Protects your home"
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

      {/* Warning Signs Section */}
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
            Warning Signs You Need Cleaning
          </motion.h2>
          <motion.div 
            variants={fadeIn}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Timer,
                title: "Long Drying Times",
                description: "Clothes taking longer than usual to dry"
              },
              {
                icon: Flame,
                title: "Burning Smell",
                description: "Unusual odors during dryer operation"
              },
              {
                icon: Sparkles,
                title: "Excess Lint",
                description: "Visible lint accumulation around vents"
              }
            ].map((sign, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm"
              >
                <sign.icon className="h-12 w-12 text-primary mb-4" />
                <motion.h3 
                  variants={fadeIn}
                  className="text-xl font-semibold mb-2"
                >
                  {sign.title}
                </motion.h3>
                <motion.p 
                  variants={fadeIn}
                  className="text-muted-foreground"
                >
                  {sign.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Service Process Section */}
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
          Our Cleaning Process
        </motion.h2>
        <motion.div 
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {[
            {
              step: "1",
              title: "Inspection",
              description: "Thorough examination of your dryer vent system"
            },
            {
              step: "2",
              title: "Cleaning",
              description: "Professional cleaning with specialized equipment"
            },
            {
              step: "3",
              title: "Testing",
              description: "Airflow and system performance verification"
            },
            {
              step: "4",
              title: "Maintenance Tips",
              description: "Professional advice for ongoing care"
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
          Protect Your Home Today
        </motion.h2>
        <motion.p 
          variants={fadeIn}
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Don&apos;t let a clogged dryer vent put your family&apos;s safety at risk
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
    </motion.div>
  );
}
