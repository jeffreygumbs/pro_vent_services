"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, Shield } from "lucide-react";

const maintenancePlans = [
  {
    title: "Basic Plan",
    price: "199",
    description: "Essential maintenance for residential boilers",
    features: [
      "Annual boiler inspection",
      "Basic cleaning service",
      "Safety checks",
      "Performance testing",
      "Written report",
      "10% discount on repairs",
    ],
  },
  {
    title: "Premium Plan",
    price: "299",
    description: "Comprehensive care for optimal performance",
    features: [
      "Bi-annual boiler inspection",
      "Deep cleaning service",
      "Complete system analysis",
      "Priority scheduling",
      "24/7 emergency support",
      "20% discount on repairs",
      "Extended warranty coverage",
      "Preventive maintenance",
    ],
    recommended: true,
  },
  {
    title: "Commercial Plan",
    price: "Custom",
    description: "Tailored solutions for commercial boilers",
    features: [
      "Quarterly inspections",
      "Comprehensive cleaning",
      "System optimization",
      "Emergency response",
      "Dedicated account manager",
      "Custom maintenance schedule",
      "Performance monitoring",
      "Compliance documentation",
    ],
  },
];

export default function MaintenancePlansPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="/boiler-maintenance-hero.jpg"
          alt="Boiler Maintenance Plans"
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
                Boiler Maintenance Plans
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Protect your investment with our comprehensive maintenance plans
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select the maintenance plan that best suits your needs and ensure your boiler&apos;s optimal performance year-round
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {maintenancePlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`h-full flex flex-col justify-between ${plan.recommended ? 'border-primary shadow-glow' : ''}`}>
                  <div>
                    <CardHeader>
                      {plan.recommended && (
                        <div className="text-primary text-xs uppercase tracking-wider font-bold mb-2">
                          <Shield className="inline-block w-4 h-4 mr-1" />
                          Most Popular Plan
                        </div>
                      )}
                      <CardTitle>{plan.title}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-extrabold">${plan.price}</span>
                        {plan.price !== "Custom" && <span className="text-muted-foreground">/year</span>}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <CheckCircle2 className="text-primary h-5 w-5 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                  <CardFooter>
                    <Button
                      className="w-full rounded-xl"
                      variant={plan.recommended ? 'default' : 'outline'}
                      asChild
                    >
                      <Link href="/services-quote-form">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Why Choose Our Maintenance Plans?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Peace of Mind</h3>
                  <p className="text-muted-foreground">
                    Regular maintenance by certified technicians ensures your boiler operates safely and efficiently
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Cost Savings</h3>
                  <p className="text-muted-foreground">
                    Prevent expensive repairs and reduce energy costs with proactive maintenance
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
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
              Ready to Protect Your Investment?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today to discuss the best maintenance plan for your needs
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-proventblue hover:bg-gray-100">
              <Link href="/services-quote-form">
                Get Started Today
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
