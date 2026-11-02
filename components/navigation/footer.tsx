"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="relative border-t border-border/60 bg-card/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Banner */}
        <div className="py-12 border-b border-border/50 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Breathe Cleaner, Healthier Indoor Air</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Ready for an Instant Online Estimate?
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Calculate your quote in under 60 seconds and check live appointment availability.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg" className="rounded-full shadow-md" asChild>
              <Link href="/services-quote-form">
                Get Instant Quote
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <a href="tel:780-686-6324">
                <Phone className="mr-2 h-4 w-4 text-primary" />
                780-686-6324
              </a>
            </Button>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              {mounted ? (
                <Image
                  src={
                    resolvedTheme === "dark"
                      ? "/logo/Pro-Vent-Services-Logo-Dark-Mode.svg"
                      : "/logo/Pro-Vent-Services-Logo.svg"
                  }
                  alt="Pro-Vent Services Logo"
                  width={160}
                  height={44}
                  className="h-10 w-auto"
                />
              ) : (
                <span className="text-xl font-bold tracking-tight text-primary">
                  Pro-Vent Services
                </span>
              )}
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Alberta&apos;s trusted specialists in residential, commercial, and industrial HVAC air duct cleaning, dryer vent maintenance, boiler cleaning, and hospital-grade system sanitization.
            </p>
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground pt-1">
              <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
              <span>NADCA Standards • Eco-Friendly BioClean • Fully Insured</span>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services/air-duct-cleaning" className="text-muted-foreground hover:text-primary transition-colors">
                  Air Duct & Furnace Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/air-duct-cleaning/residential" className="text-muted-foreground hover:text-primary transition-colors">
                  Residential HVAC Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/air-duct-cleaning/commercial" className="text-muted-foreground hover:text-primary transition-colors">
                  Commercial & Industrial Ducts
                </Link>
              </li>
              <li>
                <Link href="/services/dryer-vent-cleaning" className="text-muted-foreground hover:text-primary transition-colors">
                  Dryer Vent Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/boiler-cleaning" className="text-muted-foreground hover:text-primary transition-colors">
                  Boiler Cleaning & Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services/system-sanitizing" className="text-muted-foreground hover:text-primary transition-colors">
                  BioClean System Sanitizing
                </Link>
              </li>
            </ul>
          </div>

          {/* Specialized & Company Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services/air-duct-cleaning/high-dusting" className="text-muted-foreground hover:text-primary transition-colors">
                  High Dusting
                </Link>
              </li>
              <li>
                <Link href="/services/air-duct-cleaning/exhaust" className="text-muted-foreground hover:text-primary transition-colors">
                  Exhaust Systems
                </Link>
              </li>
              <li>
                <Link href="/services/system-sanitizing/uv-light" className="text-muted-foreground hover:text-primary transition-colors">
                  UV Light Purification
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact & Hours
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <a href="tel:780-686-6324" className="font-medium text-foreground hover:text-primary transition-colors">
                    780-686-6324
                  </a>
                  <p className="text-xs text-muted-foreground">24/7 Emergency Support Available</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <a href="mailto:info@proventservices.ca" className="hover:text-primary transition-colors">
                  info@proventservices.ca
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>
                  22 Rowland Crescent<br />
                  St. Albert, AB T8N 4B3
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>Mon – Fri: 8:00 AM – 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Pro-Vent Services Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/services-quote-form" className="hover:text-primary transition-colors">
              Online Booking
            </Link>
            <Link href="/faqs" className="hover:text-primary transition-colors">
              Help & FAQs
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
