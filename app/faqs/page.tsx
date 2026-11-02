"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, MessageCircle, HelpCircle, ArrowRight, Phone } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface CategoryData {
  title: string;
  description: string;
  faqs: FAQ[];
}

interface FAQCategories {
  [key: string]: CategoryData;
}

const faqCategories: FAQCategories = {
  general: {
    title: "General Questions",
    description: "Why regular HVAC and duct cleaning matters for your property.",
    faqs: [
      {
        question: "Why is it necessary to have my furnace and ducts cleaned?",
        answer:
          "Air conditioning, ventilation, and heating systems collect bacteria, fungi, mold, pet dander, and construction dust that circulate through your indoor air. Left untreated, buildup reduces HVAC airflow efficiency and can aggravate allergies and respiratory conditions.",
      },
      {
        question: "What is sanitizing and when is it necessary?",
        answer:
          "Sanitizing applies our hospital-grade, biodegradable BioClean formula throughout your ductwork to eliminate bacteria, fungi, and odor-causing microorganisms. It is especially recommended after renovations, pet odors, smoke exposure, or for households with children, elderly residents, or allergy sufferers.",
      },
      {
        question: "How often should I have my air ducts cleaned?",
        answer:
          "The National Air Duct Cleaners Association (NADCA) recommends having your air ducts cleaned every 2 to 4 years, or sooner if you have pets, allergies, or recently completed home renovations.",
      },
    ],
  },
  service: {
    title: "Service & Preparation",
    description: "What to expect before and during your appointment.",
    faqs: [
      {
        question: "How long will the cleaning take?",
        answer:
          "A typical residential furnace and duct cleaning takes between 2 and 4 hours, depending on the square footage of your home, number of furnaces, and accessibility.",
      },
      {
        question: "Do you clean furnaces and ducts all year round?",
        answer:
          "Yes! We operate year-round across Alberta. During winter months, we simply ask that you raise your thermostat slightly 15 minutes prior to arrival since the furnace is switched off while we clean.",
      },
      {
        question: "What do I need to do to prepare for a residential cleaning?",
        answer:
          "Please ensure clear access to all supply and return vents as well as your furnace room. Remove fragile items near wall or floor registers so our technicians can safely maneuver equipment.",
      },
    ],
  },
  pricing: {
    title: "Pricing & Payment",
    description: "Transparent quotes and flexible payment methods.",
    faqs: [
      {
        question: "How much does a furnace and duct cleaning cost?",
        answer:
          "Our residential packages start at $320 + GST for homes 800–1,500 sq. ft. You can use our online Quote Calculator to get an instant, itemized estimate based on your exact square footage and optional add-ons.",
      },
      {
        question: "Is there a kilometer charge outside St. Albert / Edmonton?",
        answer:
          "Distance-based travel charges may apply for locations outside our primary service zone. Contact us or submit a quote request for exact details.",
      },
      {
        question: "What forms of payment do you accept?",
        answer:
          "We accept all major credit cards, debit, Interac e-Transfer, and cash payments. Gift certificates are also available!",
      },
    ],
  },
  maintenance: {
    title: "Maintenance & Care",
    description: "Keeping your system running efficiently between cleanings.",
    faqs: [
      {
        question: "How often should I change my furnace filter?",
        answer:
          "Standard 1-inch furnace filters should typically be replaced every 3 months, while thicker 4–5 inch media filters should be replaced every 6 to 12 months depending on pet hair and dust levels.",
      },
      {
        question: "How often should my dryer vent be cleaned?",
        answer:
          "Dryer vents should be professionally cleaned once a year to remove lint buildup, reduce drying cycle times, and prevent household dryer fires.",
      },
    ],
  },
};

export default function FAQsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filterFAQs = (faqs: FAQCategories): FAQCategories => {
    if (!searchQuery.trim()) return faqs;

    const filteredCategories: FAQCategories = {};
    Object.entries(faqs).forEach(([category, data]) => {
      const filteredFaqs = data.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filteredFaqs.length > 0) {
        filteredCategories[category] = {
          ...data,
          faqs: filteredFaqs,
        };
      }
    });
    return filteredCategories;
  };

  const filteredFAQs = filterFAQs(faqCategories);
  const hasResults = Object.keys(filteredFAQs).length > 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative border-b border-border/50 bg-gradient-to-b from-primary/10 via-background to-background py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto space-y-5"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Knowledge Base</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Find clear answers to common questions about our air duct, dryer vent, boiler cleaning, and BioClean sanitization services.
            </p>

            {/* Search Bar */}
            <div className="max-w-lg mx-auto relative pt-2">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground mt-1" />
              <Input
                type="text"
                placeholder="Search questions (e.g., pricing, BioClean, dryer vent)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11 h-12 rounded-full bg-card shadow-soft border-border/60"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {hasResults ? (
            <div className="grid gap-8 md:grid-cols-2">
              {Object.entries(filteredFAQs).map(
                ([category, data], categoryIndex) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                    className="rounded-3xl border border-border/60 bg-card p-6 sm:p-8 shadow-soft"
                  >
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold tracking-tight">
                        {data.title}
                      </h2>
                      <p className="text-sm text-muted-foreground mt-1">
                        {data.description}
                      </p>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                      {data.faqs.map((faq, index) => (
                        <AccordionItem
                          key={index}
                          value={`${category}-${index}`}
                          className="border-border/50"
                        >
                          <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-4">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </motion.div>
                )
              )}
            </div>
          ) : (
            <div className="text-center py-16 rounded-3xl border border-border/60 bg-card max-w-xl mx-auto p-8">
              <p className="text-lg font-semibold mb-2">
                No matching questions found
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Try searching with a different keyword or reach out directly to our support team.
              </p>
              <Button variant="outline" onClick={() => setSearchQuery("")}>
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-muted/40 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground">
            Can&apos;t find the answer you&apos;re looking for? Our friendly technicians are happy to walk you through our process or provide a custom quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full" asChild>
              <Link href="/contact">
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact Support
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <Link href="/services-quote-form">
                Get Instant Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="ghost" className="rounded-full" asChild>
              <a href="tel:780-686-6324">
                <Phone className="mr-2 h-4 w-4 text-primary" />
                780-686-6324
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
