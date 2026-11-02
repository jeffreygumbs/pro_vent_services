"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Phone, Fan, Shield, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, MotionConfig } from "motion/react";

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

export default function ExhaustPage() {
  return (
    <MotionConfig reducedMotion="user">
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
            src="/exhaust-hero.jpg"
            alt="Exhaust Cleaning Services"
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
              Professional Exhaust
              <br />
              Cleaning Services
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-lg sm:text-xl text-gray-200 max-w-2xl mb-8"
            >
              Expert exhaust system cleaning for your home or business. Prevent fire hazards and maintain optimal ventilation efficiency.
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

        {/* Main Services Section */}
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
            Our Exhaust Cleaning Services
          </motion.h2>
          <motion.div 
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Dryer Vent Cleaning</CardTitle>
                <CardDescription>
                  Professional cleaning for residential and commercial dryer vents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Prevent fire hazards",
                    "Improve drying efficiency",
                    "Reduce energy costs",
                    "Extended appliance life"
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
                <CardTitle>Kitchen Exhaust Cleaning</CardTitle>
                <CardDescription>
                  Complete cleaning of commercial kitchen exhaust systems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Meet safety codes",
                    "Remove grease buildup",
                    "Prevent fire risks",
                    "Improve ventilation"
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
                <CardTitle>Bathroom Exhaust Cleaning</CardTitle>
                <CardDescription>
                  Thorough cleaning of bathroom ventilation systems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Remove moisture buildup",
                    "Prevent mold growth",
                    "Improve air circulation",
                    "Better odor control"
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
              Why Choose Our Exhaust Cleaning?
            </motion.h2>
            <motion.div 
              variants={fadeIn}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: Fan,
                  title: "Advanced Equipment",
                  description: "State-of-the-art cleaning tools and technology"
                },
                {
                  icon: Shield,
                  title: "Safety First",
                  description: "Fully licensed and insured service providers"
                },
                {
                  icon: Clock,
                  title: "Flexible Scheduling",
                  description: "Convenient appointment times that work for you"
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
            Ready to Clean Your Exhaust System?
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Schedule your professional exhaust cleaning service today and ensure your ventilation systems are working safely and efficiently.
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
    </MotionConfig>
  );
}