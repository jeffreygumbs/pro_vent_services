"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, Droplets, Lightbulb, Thermometer, Timer } from "lucide-react";

const benefits = [
  {
    title: "Energy Savings",
    icon: Lightbulb,
    description: "Reduce your energy bills with improved boiler efficiency",
  },
  {
    title: "Extended Lifespan",
    icon: Timer,
    description: "Prolong your boiler's life with regular maintenance",
  },
  {
    title: "Better Heating",
    icon: Thermometer,
    description: "Enjoy more consistent and efficient heating",
  },
  {
    title: "Water Efficiency",
    icon: Droplets,
    description: "Optimize water usage and reduce waste",
  },
];

const cleaningProcess = [
  {
    title: "Initial Inspection",
    description: "Thorough assessment of your boiler's condition",
    steps: [
      "Visual inspection of all components",
      "Performance evaluation",
      "Identification of potential issues",
      "Documentation of current state",
    ],
  },
  {
    title: "Deep Cleaning",
    description: "Professional cleaning of all vital components",
    steps: [
      "Scale and sediment removal",
      "Heat exchanger cleaning",
      "Burner cleaning",
      "Water treatment system check",
    ],
  },
  {
    title: "Safety Checks",
    description: "Comprehensive safety verification",
    steps: [
      "Carbon monoxide testing",
      "Pressure valve inspection",
      "Control system verification",
      "Ventilation check",
    ],
  },
  {
    title: "Final Testing",
    description: "Complete system performance verification",
    steps: [
      "Efficiency testing",
      "Temperature monitoring",
      "Pressure testing",
      "Operation verification",
    ],
  },
];

const commonIssues = [
  "Reduced heating efficiency",
  "Increased energy bills",
  "Unusual noises",
  "Inconsistent heating",
  "Frequent breakdowns",
  "Poor water pressure",
  "Strange odors",
  "Pilot light issues",
];

export default function ResidentialBoilerCleaningPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/boiler-maintenance-hero.jpg"
          alt="Residential Boiler Cleaning Services"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Residential Boiler Cleaning Services
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Keep your home&apos;s heating system running efficiently with our professional cleaning services
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-proventblue hover:bg-proventblue-50" asChild>
                  <Link href="/services-quote-form">
                    Schedule Service
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10 hover:bg-white hover:text-slate-900" asChild>
                  <Link href="/services/boiler-cleaning/maintenance">
                    View Maintenance Plans
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Benefits of Professional Cleaning</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover how our professional boiler cleaning service can improve your home&apos;s heating efficiency
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <benefit.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Cleaning Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive cleaning process ensures your boiler operates at peak efficiency
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cleaningProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{process.title}</CardTitle>
                    <CardDescription>{process.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {process.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="text-primary h-5 w-5 flex-shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Signs You Need Boiler Cleaning</h2>
              <div className="grid gap-4">
                {commonIssues.map((issue, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary h-5 w-5 flex-shrink-0" />
                    <span>{issue}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Schedule Your Service Today</h3>
                  <p className="text-muted-foreground mb-6">
                    Don&apos;t wait for these issues to worsen. Our professional cleaning service can help prevent costly repairs and ensure efficient operation.
                  </p>
                  <Button className="bg-proventblue hover:bg-proventblue-50 w-full text-lg py-6" size="lg" asChild>
                    <Link href="/services-quote-form">
                      Book Your Cleaning
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-proventblue">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Improve Your Home&apos;s Heating Efficiency?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule your professional boiler cleaning service today
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-proventblue hover:bg-gray-100">
              <Link href="/services-quote-form">
                Get Your Free Quote
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}