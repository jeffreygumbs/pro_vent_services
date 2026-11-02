"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, Phone, Sparkles, Wind, Flame, Gauge, ShieldCheck, ArrowUpRight, User } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

const services = [
  {
    title: "Air Duct Cleaning",
    href: "/services/air-duct-cleaning",
    icon: Wind,
    description: "Power-whip furnace & duct cleaning for healthier indoor air.",
    subServices: [
      { title: "Residential", href: "/services/air-duct-cleaning/residential" },
      { title: "Commercial", href: "/services/air-duct-cleaning/commercial" },
      { title: "High Dusting", href: "/services/air-duct-cleaning/high-dusting" },
      { title: "Exhaust Systems", href: "/services/air-duct-cleaning/exhaust" },
    ],
  },
  {
    title: "Dryer Vent Cleaning",
    href: "/services/dryer-vent-cleaning",
    icon: Flame,
    description: "Eliminate lint fire hazards and cut drying cycle times.",
    subServices: [
      { title: "Residential", href: "/services/dryer-vent-cleaning/residential" },
      { title: "Commercial", href: "/services/dryer-vent-cleaning/commercial" },
    ],
  },
  {
    title: "Boiler Cleaning",
    href: "/services/boiler-cleaning",
    icon: Gauge,
    description: "Scale removal, burner tuning & maintenance plans.",
    subServices: [
      { title: "Residential", href: "/services/boiler-cleaning/residential" },
      { title: "Commercial", href: "/services/boiler-cleaning/commercial" },
      { title: "Maintenance Plans", href: "/services/boiler-cleaning/maintenance" },
    ],
  },
  {
    title: "System Sanitizing",
    href: "/services/system-sanitizing",
    icon: ShieldCheck,
    description: "Hospital-grade BioClean & UV-C light air purification.",
    subServices: [
      { title: "UV Light Treatment", href: "/services/system-sanitizing/uv-light" },
      { title: "Antimicrobial Treatment", href: "/services/system-sanitizing/antimicrobial" },
      { title: "Deep Cleaning", href: "/services/system-sanitizing/deep-cleaning" },
    ],
  },
];

const navLinkBase =
  "group inline-flex h-10 w-max items-center justify-center rounded-full bg-transparent px-4 py-2 text-sm font-medium tracking-wide text-foreground/80 transition-all duration-200 hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/10 data-[active]:text-primary data-[state=open]:bg-primary/10 data-[state=open]:text-primary";

const clientPortalUrl =
  process.env.NEXT_PUBLIC_CLIENT_PORTAL_URL || "http://localhost:3000";

export function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          {mounted ? (
            <Image
              src={
                resolvedTheme === "dark"
                  ? "/logo/Pro-Vent-Services-Logo-Dark-Mode.svg"
                  : "/logo/Pro-Vent-Services-Logo.svg"
              }
              alt="Pro-Vent Services Logo"
              width={155}
              height={42}
              priority
              className="h-10 w-auto transition-opacity duration-300"
            />
          ) : (
            <div className="h-10 w-36 rounded-lg bg-muted/60 animate-pulse" />
          )}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavigationMenu className="gap-1">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navLinkBase,
                    pathname === "/" && "bg-primary/10 text-primary font-semibold"
                  )}
                >
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    navLinkBase,
                    pathname.startsWith("/services") &&
                      pathname !== "/services-quote-form" &&
                      "bg-primary/10 text-primary font-semibold"
                  )}
                >
                  <span>Services</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-[24rem] rounded-2xl border border-border/60 bg-popover/95 p-6 shadow-2xl backdrop-blur-2xl md:w-[46rem]">
                  <div className="mb-4 flex items-center justify-between border-b border-border/50 pb-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                        Professional HVAC Solutions
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Residential, commercial & industrial services across Alberta
                      </p>
                    </div>
                    <Link
                      href="/services-quote-form"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                    >
                      Instant Price Calculator
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                  <ul className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <li
                          key={service.title}
                          className="group/item flex flex-col justify-between rounded-xl border border-border/50 bg-muted/30 p-4 transition-all duration-200 hover:border-primary/30 hover:bg-muted/60"
                        >
                          <div>
                            <NavigationMenuLink asChild>
                              <Link
                                href={service.href}
                                className="flex items-start gap-3.5 outline-none"
                              >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover/item:bg-primary group-hover/item:text-primary-foreground">
                                  <Icon className="h-5 w-5" />
                                </div>
                                <div>
                                  <div className="flex items-center gap-1 text-sm font-semibold text-foreground group-hover/item:text-primary transition-colors">
                                    {service.title}
                                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 transition-all group-hover/item:opacity-100" />
                                  </div>
                                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                                    {service.description}
                                  </p>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </div>

                          {service.subServices && service.subServices.length > 0 && (
                            <div className="mt-3.5 flex flex-wrap gap-1.5 border-t border-border/40 pt-3">
                              {service.subServices.map((subService) => (
                                <Link
                                  key={subService.title}
                                  href={subService.href}
                                  className="inline-flex items-center rounded-md bg-background/80 px-2.5 py-1 text-xs font-medium text-muted-foreground border border-border/40 transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                                >
                                  {subService.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navLinkBase,
                    pathname === "/about" && "bg-primary/10 text-primary font-semibold"
                  )}
                >
                  <Link href="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navLinkBase,
                    (pathname === "/faqs" || pathname === "/faq") &&
                      "bg-primary/10 text-primary font-semibold"
                  )}
                >
                  <Link href="/faqs">FAQs</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navLinkBase,
                    pathname === "/contact" && "bg-primary/10 text-primary font-semibold"
                  )}
                >
                  <Link href="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-2.5">
          <a
            href="tel:780-686-6324"
            className="hidden xl:inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-semibold text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
          >
            <Phone className="h-3.5 w-3.5 text-primary" />
            <span>780-686-6324</span>
          </a>
          <ModeToggle />
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="rounded-full px-3.5 text-xs font-medium text-muted-foreground hover:text-foreground"
          >
            <a href={`${clientPortalUrl}/auth/signin`}>
              <User className="mr-1.5 h-3.5 w-3.5" />
              Portal
            </a>
          </Button>
          <Button
            asChild
            className="rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-200 hover:bg-primary/90 hover:shadow-glow hover:-translate-y-0.5"
          >
            <Link href="/services-quote-form">
              <Sparkles className="mr-1.5 h-4 w-4" />
              Get Instant Quote
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button
            size="sm"
            asChild
            className="rounded-full px-3.5 text-xs font-semibold sm:inline-flex hidden"
          >
            <Link href="/services-quote-form">Get a Quote</Link>
          </Button>
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[330px] border-l border-border/50 bg-background/95 p-6 backdrop-blur-2xl sm:w-[400px] overflow-y-auto"
            >
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              </SheetHeader>
              {mounted && (
                <div className="mb-6 flex items-center justify-between border-b border-border/40 pb-4">
                  <Image
                    src={
                      resolvedTheme === "dark"
                        ? "/logo/Pro-Vent-Services-Logo-Dark-Mode.svg"
                        : "/logo/Pro-Vent-Services-Logo.svg"
                    }
                    alt="Pro-Vent Services Logo"
                    width={140}
                    height={36}
                    priority
                    className="h-8 w-auto"
                  />
                </div>
              )}

              <div className="flex flex-col space-y-5">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-semibold tracking-tight transition-colors hover:text-primary",
                    pathname === "/" && "text-primary"
                  )}
                >
                  Home
                </Link>

                <div className="space-y-4 border-y border-border/40 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Our Services
                  </p>
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <div key={service.title} className="space-y-2">
                        <Link
                          href={service.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex items-center gap-2.5 text-base font-semibold text-foreground transition-colors hover:text-primary",
                            pathname === service.href && "text-primary"
                          )}
                        >
                          <Icon className="h-4 w-4 text-primary" />
                          {service.title}
                        </Link>
                        {service.subServices && (
                          <div className="ml-6 flex flex-wrap gap-1.5">
                            {service.subServices.map((subService) => (
                              <Link
                                key={subService.title}
                                href={subService.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                  "rounded-md bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary",
                                  pathname === subService.href &&
                                    "bg-primary/15 text-primary font-semibold"
                                )}
                              >
                                {subService.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-semibold tracking-tight transition-colors hover:text-primary",
                    pathname === "/about" && "text-primary"
                  )}
                >
                  About
                </Link>
                <Link
                  href="/faqs"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-semibold tracking-tight transition-colors hover:text-primary",
                    pathname === "/faqs" && "text-primary"
                  )}
                >
                  FAQs
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-semibold tracking-tight transition-colors hover:text-primary",
                    pathname === "/contact" && "text-primary"
                  )}
                >
                  Contact
                </Link>

                <div className="pt-4 space-y-3 border-t border-border/40">
                  <Button
                    className="w-full rounded-full shadow-md"
                    size="lg"
                    asChild
                  >
                    <Link
                      href="/services-quote-form"
                      onClick={() => setIsOpen(false)}
                    >
                      <Sparkles className="mr-2 h-4 w-4" />
                      Get Instant Quote
                    </Link>
                  </Button>
                  <Button
                    className="w-full rounded-full"
                    variant="outline"
                    asChild
                  >
                    <a
                      href="tel:780-686-6324"
                      onClick={() => setIsOpen(false)}
                    >
                      <Phone className="mr-2 h-4 w-4 text-primary" />
                      Call 780-686-6324
                    </a>
                  </Button>
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <Button
                      className="w-full rounded-full text-xs"
                      variant="ghost"
                      size="sm"
                      asChild
                    >
                      <a
                        href={`${clientPortalUrl}/auth/signin`}
                        onClick={() => setIsOpen(false)}
                      >
                        Client Sign In
                      </a>
                    </Button>
                    <Button
                      className="w-full rounded-full text-xs"
                      variant="ghost"
                      size="sm"
                      asChild
                    >
                      <a
                        href={`${clientPortalUrl}/auth/signup`}
                        onClick={() => setIsOpen(false)}
                      >
                        Create Account
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
