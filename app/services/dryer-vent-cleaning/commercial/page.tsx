"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Phone, Building2, ShieldCheck, Gauge } from "lucide-react";
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

export default function CommercialDryerVentPage() {
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
          src="/commercial-dryer-vent-hero.jpeg"
          alt="Commercial Dryer Vent Cleaning"
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
            Commercial Dryer
            <br />
            Vent Cleaning
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-lg sm:text-xl text-gray-200 max-w-2xl mb-8"
          >
            Professional dryer vent cleaning services for multi-unit buildings, laundromats, and commercial facilities.
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

      {/* Industries Served Section */}
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
          Industries We Serve
        </motion.h2>
        <motion.div 
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Multi-Unit Properties</CardTitle>
              <CardDescription>
                Comprehensive services for apartment buildings and condos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Apartment complexes",
                  "Condominiums",
                  "Student housing",
                  "Senior living facilities"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Laundry Facilities</CardTitle>
              <CardDescription>
                Specialized cleaning for commercial laundry operations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Laundromats",
                  "Hotel laundries",
                  "Industrial laundries",
                  "Healthcare facilities"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Commercial Buildings</CardTitle>
              <CardDescription>
                Services for various commercial establishments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Hotels and motels",
                  "Restaurants",
                  "Fitness centers",
                  "Educational institutions"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Benefits Section */}
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
            Why Choose Our Commercial Service?
          </motion.h2>
          <motion.div 
            variants={fadeIn}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Building2,
                title: "Large-Scale Capability",
                description: "Equipped to handle multiple units and complex systems"
              },
              {
                icon: ShieldCheck,
                title: "Code Compliance",
                description: "Meet all safety and building code requirements"
              },
              {
                icon: Gauge,
                title: "Minimal Disruption",
                description: "Efficient service with minimal business interruption"
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

      {/* Service Features Section */}
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
          Our Commercial Service Features
        </motion.h2>
        <motion.div 
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {[
            {
              title: "Professional Equipment",
              items: [
                "Industrial-grade cleaning tools",
                "Advanced inspection cameras",
                "Powerful vacuum systems",
                "Specialized brushing equipment"
              ]
            },
            {
              title: "Comprehensive Service",
              items: [
                "Complete system inspection",
                "Thorough vent cleaning",
                "Performance testing",
                "Detailed reporting"
              ]
            },
            {
              title: "Safety Compliance",
              items: [
                "Fire safety regulations",
                "Building code compliance",
                "Insurance requirements",
                "Safety documentation"
              ]
            },
            {
              title: "Flexible Scheduling",
              items: [
                "After-hours service",
                "Weekend availability",
                "Emergency response",
                "Preventive maintenance plans"
              ]
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              className="p-6 bg-card rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <ul className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
          Schedule Your Commercial Service
        </motion.h2>
        <motion.p 
          variants={fadeIn}
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Keep your commercial dryer vents clean, safe, and efficient. Contact us for a customized service plan.
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
