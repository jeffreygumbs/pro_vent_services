/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { Building2, CheckCircle2, Factory, Gauge, Settings, Shield } from "lucide-react";

const industries = [
  {
    title: "Manufacturing",
    icon: Factory,
    description: "Specialized cleaning for industrial boilers in manufacturing facilities",
  },
  {
    title: "Commercial Buildings",
    icon: Building2,
    description: "Comprehensive services for office buildings and commercial spaces",
  },
  {
    title: "Healthcare Facilities",
    icon: Shield,
    description: "Strict compliance with healthcare facility requirements",
  },
  {
    title: "Industrial Plants",
    icon: Settings,
    description: "Expert cleaning for high-capacity industrial boiler systems",
  },
];

const benefits = [
  "Improved system efficiency",
  "Reduced energy costs",
  "Extended equipment life",
  "Minimized downtime",
  "Compliance with regulations",
  "24/7 emergency support",
  "Customized maintenance plans",
  "Detailed documentation",
];

const features = [
  {
    title: "Comprehensive Inspection",
    description: "Thorough assessment of your commercial boiler system",
  },
  {
    title: "Professional Cleaning",
    description: "Advanced cleaning techniques for optimal performance",
  },
  {
    title: "Performance Testing",
    description: "Detailed testing and efficiency measurements",
  },
  {
    title: "Safety Compliance",
    description: "Ensuring adherence to all safety regulations",
  },
];

export default function CommercialBoilerCleaningPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/commercial-boiler-hero.jpg"
          alt="Commercial Boiler Cleaning Services"
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
                Commercial Boiler Cleaning Services
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Professional cleaning solutions for commercial and industrial boiler systems
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-proventblue hover:bg-proventblue-50" asChild>
                  <Link href="/services-quote-form">
                    Request Service
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white/40 bg-white/10 hover:bg-white hover:text-slate-900" asChild>
                  <Link href="/services/boiler-cleaning/maintenance">
                    View Plans
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our expert team provides specialized boiler cleaning services across various commercial and industrial sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <industry.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                    <p className="text-muted-foreground">{industry.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Commercial Service?</h2>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary h-5 w-5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/commercial-boiler-benefits.jpg"
                alt="Commercial Boiler Cleaning Benefits"
                width={600}
                height={400}
                className="rounded-2xl shadow-soft"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Service Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive commercial boiler cleaning services tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Ready to Optimize Your Commercial Boiler System?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today for a customized service quote
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-proventblue hover:bg-gray-100">
              <Link href="/services-quote-form">
                Get Your Custom Quote
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}