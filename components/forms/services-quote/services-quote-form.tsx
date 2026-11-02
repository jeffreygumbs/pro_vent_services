"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { servicesQuoteSchema, type ServicesQuoteFormData } from "@/lib/schemas/services-quote";
import { submitServicesQuote } from "@/lib/actions/services-quote";
import { checkAvailability } from "@/lib/actions/booking";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  CalendarIcon,
  Loader2,
  Home,
  Sparkles,
  User,
  MapPin,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Receipt,
} from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

type TimeSlot = {
  startTime: string;
  endTime: string;
  available: boolean;
};

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

const canadianProvinces = [
  { value: "AB", label: "Alberta" },
  { value: "BC", label: "British Columbia" },
  { value: "MB", label: "Manitoba" },
  { value: "NB", label: "New Brunswick" },
  { value: "NL", label: "Newfoundland and Labrador" },
  { value: "NS", label: "Nova Scotia" },
  { value: "ON", label: "Ontario" },
  { value: "PE", label: "Prince Edward Island" },
  { value: "QC", label: "Quebec" },
  { value: "SK", label: "Saskatchewan" },
  { value: "NT", label: "Northwest Territories" },
  { value: "NU", label: "Nunavut" },
  { value: "YT", label: "Yukon" },
];

export function ServicesQuoteForm({ onSuccess }: { onSuccess?: () => void }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);
  const [availableTimeSlots, setAvailableTimeSlots] = useState<TimeSlot[]>([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState<{
    basePrice: number;
    gst: number;
    totalPrice: number;
  }>({
    basePrice: 0,
    gst: 0,
    totalPrice: 0,
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm<ServicesQuoteFormData>({
    resolver: zodResolver(servicesQuoteSchema),
    defaultValues: {
      furnaces: "1",
      buildingType: undefined,
      squareFootage: undefined,
      dryerVentCleaning: false,
      dryerVentLocation: undefined,
      centralAirConditioning: "not sure",
      hrv: "not sure",
      centralVac: "No",
      systemSanitizer: "No",
      preferredDate1: undefined,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      additionalNotes: "",
      address: {
        street: "",
        street2: "",
        city: "",
        province: "AB",
        postalCode: "",
        country: "Canada",
      },
    },
  });

  const calculateEstimatedPrice = (data: DeepPartial<ServicesQuoteFormData>) => {
    let basePrice = 0;

    switch (data.squareFootage) {
      case "800 - 1500sqf":
        basePrice = 320;
        break;
      case "1500 - 2000sqf":
        basePrice = 380;
        break;
      case "2000 - 2500sqf":
        basePrice = 420;
        break;
      case "2500 - 3000sqf":
        basePrice = 500;
        break;
      case "3000 - 4000sqf":
        basePrice = 600;
        break;
    }

    if (data.furnaces === "2") basePrice += 150;
    if (data.furnaces === "3") basePrice += 150;

    if (data.dryerVentCleaning && data.dryerVentLocation) {
      switch (data.dryerVentLocation) {
        case "Main Floor":
          basePrice += 45;
          break;
        case "Side of the Building up to 10FT / 3m":
          basePrice += 45;
          break;
        case "above 10FT / 3m up to 30FT / 10m":
          basePrice += 85;
          break;
        case "Roof Access":
          basePrice += 125;
          break;
      }
    }

    if (data.centralAirConditioning === "Yes") basePrice += 50;
    if (data.hrv === "Yes") basePrice += 85;
    if (data.centralVac === "Yes") basePrice += 85;
    if (data.systemSanitizer === "Yes") basePrice += 45;

    const gst = basePrice * 0.05;
    const totalPrice = basePrice + gst;

    setEstimatedPrice({ basePrice, gst, totalPrice });
  };

  useEffect(() => {
    const subscription = form.watch((value) => {
      calculateEstimatedPrice(value);
    });
    return () => subscription.unsubscribe();
  }, [form, form.watch]);

  const handleDateChange = async (date: Date | undefined) => {
    if (!date) return;

    setIsCheckingAvailability(true);

    try {
      form.setValue("preferredDate1", date);
      const result = await checkAvailability(date.toISOString());

      if (result.success && result.data) {
        const availableSlots = result.data.timeSlots.filter((slot) => slot.available);

        if (availableSlots.length > 0) {
          setAvailableTimeSlots(availableSlots);
          toast.success(`Found ${availableSlots.length} available time slots`);
        } else {
          setAvailableTimeSlots([]);
          toast.info("No available time slots found for the selected date.");
        }
      } else {
        toast.error(result.error || "Failed to check availability");
        setAvailableTimeSlots([]);
      }
    } catch (error) {
      console.error("Error checking availability:", error);
      toast.error("An error occurred while checking availability.");
      setAvailableTimeSlots([]);
    } finally {
      setIsCheckingAvailability(false);
    }
  };

  const formatPhoneNumber = (value: string) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    }
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  async function onSubmit(data: ServicesQuoteFormData) {
    setIsLoading(true);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value === undefined || value === null) {
          return;
        }
        if (value instanceof Date) {
          formData.append(key, value.toISOString());
        } else if (typeof value === "object") {
          formData.append(key, JSON.stringify(value));
        } else {
          formData.append(key, String(value));
        }
      });

      if (data.preferredDate1 && selectedTimeSlot) {
        const timeParts = selectedTimeSlot.match(/(\d+):(\d+)\s*(AM|PM)/);
        if (timeParts) {
          let hours = parseInt(timeParts[1], 10);
          const minutes = parseInt(timeParts[2], 10);
          const ampm = timeParts[3];

          if (ampm === "PM" && hours < 12) hours += 12;
          if (ampm === "AM" && hours === 12) hours = 0;

          const selectedDateTime = new Date(data.preferredDate1);
          selectedDateTime.setHours(hours, minutes, 0, 0);

          formData.append("selectedTime", format(selectedDateTime, "yyyy-MM-dd'T'HH:mm:ss"));
        } else {
          const preferredDateTimeString = `${format(data.preferredDate1, "PPP")} at ${selectedTimeSlot}`;
          formData.append("preferredTime", preferredDateTimeString);
        }
      } else if (data.preferredDate1) {
        formData.append("preferredTime", format(data.preferredDate1, "PPP"));
      }

      let formattedNote = "";
      formattedNote += `Furnaces: ${data.furnaces}\n`;
      formattedNote += `Building Type: ${data.buildingType}\n`;
      formattedNote += `Preferred Date: ${format(data.preferredDate1, "PPP")}\n`;

      if (selectedTimeSlot) {
        formattedNote += `Preferred Time: ${selectedTimeSlot}\n`;
      }

      formattedNote += `Central Air Conditioning: ${data.centralAirConditioning}\n`;
      formattedNote += `Dryer Vent Cleaning: ${data.dryerVentCleaning ? "Yes" : "No"}\n`;

      if (data.hrv) {
        formattedNote += `HRV: ${data.hrv}\n`;
      }
      if (data.centralVac) {
        formattedNote += `Central Vac: ${data.centralVac}\n`;
      }
      if (data.systemSanitizer) {
        formattedNote += `System Sanitizer: ${data.systemSanitizer}\n`;
      }
      if (data.squareFootage) {
        formattedNote += `Square Footage: ${data.squareFootage}\n`;
      }
      if (data.dryerVentCleaning && data.dryerVentLocation) {
        formattedNote += `Dryer Vent Location: ${data.dryerVentLocation}\n`;
      }
      if (data.additionalNotes) {
        formattedNote += `\nCustomer Notes: ${data.additionalNotes}`;
      }

      formData.append("note", formattedNote);

      let serviceType = "Air Duct Cleaning";
      if (data.dryerVentCleaning) {
        serviceType += " + Dryer Vent Cleaning";
      }
      if (data.systemSanitizer === "Yes") {
        serviceType += " + System Sanitizing";
      }
      formData.append("serviceType", serviceType);

      const quoteResult = await submitServicesQuote(formData);
      if (!quoteResult.success) {
        throw new Error(quoteResult.error || "Failed to submit quote");
      }

      toast.success("Service quote submitted successfully!");
      form.reset();
      setSelectedTimeSlot("");
      onSuccess?.();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error instanceof Error ? error.message : "Failed to submit form");
    } finally {
      setIsLoading(false);
    }
  }

  const watchedValues = form.watch();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Form Steps */}
            <div className="lg:col-span-8 space-y-8">
              {/* Step 1: Property & System Configuration */}
              <div className="rounded-3xl border border-border/60 bg-card p-6 sm:p-8 shadow-soft space-y-6">
                <div className="flex items-center gap-3.5 border-b border-border/50 pb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Home className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Step 1 of 4
                    </span>
                    <h2 className="text-xl font-bold">Property & HVAC System</h2>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="buildingType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Building Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-11 rounded-xl">
                              <SelectValue placeholder="Select building type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="House">Single Family House</SelectItem>
                            <SelectItem value="Townhouse">Townhouse</SelectItem>
                            <SelectItem value="Duplex">Duplex</SelectItem>
                            <SelectItem value="Appartment">Apartment / Condo</SelectItem>
                            <SelectItem value="Other">Commercial / Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="squareFootage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Approximate Square Footage</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-11 rounded-xl">
                              <SelectValue placeholder="Select square footage" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="800 - 1500sqf">800 – 1,500 sq. ft. ($320 + GST)</SelectItem>
                            <SelectItem value="1500 - 2000sqf">1,500 – 2,000 sq. ft. ($380 + GST)</SelectItem>
                            <SelectItem value="2000 - 2500sqf">2,000 – 2,500 sq. ft. ($420 + GST)</SelectItem>
                            <SelectItem value="2500 - 3000sqf">2,500 – 3,000 sq. ft. ($500 + GST)</SelectItem>
                            <SelectItem value="3000 - 4000sqf">3,000 – 4,000 sq. ft. ($600 + GST)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="furnaces"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Furnaces</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-11 rounded-xl">
                              <SelectValue placeholder="Select furnaces" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">1 Furnace (Included)</SelectItem>
                            <SelectItem value="2">2 Furnaces (+$150 + GST)</SelectItem>
                            <SelectItem value="3">3 Furnaces (+$150 + GST)</SelectItem>
                            <SelectItem value="non">Dryer Vent Cleaning Only</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="centralAirConditioning"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Central Air Conditioning (A/C Coil +$50)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-11 rounded-xl">
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Yes">Yes (+$50)</SelectItem>
                            <SelectItem value="No">No</SelectItem>
                            <SelectItem value="not sure">Not Sure</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Step 2: Optional Add-Ons & Sanitization */}
              <div className="rounded-3xl border border-border/60 bg-card p-6 sm:p-8 shadow-soft space-y-6">
                <div className="flex items-center gap-3.5 border-b border-border/50 pb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Step 2 of 4
                    </span>
                    <h2 className="text-xl font-bold">Dryer Vent & System Add-Ons</h2>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="dryerVentCleaning"
                    render={({ field }) => (
                      <FormItem className="space-y-3 rounded-2xl border border-border/50 bg-muted/30 p-4">
                        <FormLabel className="text-base font-semibold">
                          Include Dryer Vent Cleaning?
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={(value) => field.onChange(value === "true")}
                            defaultValue={field.value ? "true" : "false"}
                            className="flex flex-row space-x-6 pt-1"
                          >
                            <FormItem className="flex items-center space-x-2">
                              <FormControl>
                                <RadioGroupItem value="true" />
                              </FormControl>
                              <FormLabel className="font-medium cursor-pointer">Yes</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-2">
                              <FormControl>
                                <RadioGroupItem value="false" />
                              </FormControl>
                              <FormLabel className="font-medium cursor-pointer">No</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="systemSanitizer"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>BioClean System Sanitizer (+$45)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-11 rounded-xl">
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Yes">Yes – Add BioClean Sanitizer (+$45)</SelectItem>
                            <SelectItem value="No">No</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {form.watch("dryerVentCleaning") && (
                  <FormField
                    control={form.control}
                    name="dryerVentLocation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Where is your Dryer Vent Outlet Located?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-11 rounded-xl">
                              <SelectValue placeholder="Select exterior vent outlet location" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Main Floor">Main Floor ($45 + GST)</SelectItem>
                            <SelectItem value="Side of the Building up to 10FT / 3m">
                              Side of Building up to 10 FT / 3m ($45 + GST)
                            </SelectItem>
                            <SelectItem value="above 10FT / 3m up to 30FT / 10m">
                              Above 10 FT / 3m up to 30 FT / 10m ($85 + GST)
                            </SelectItem>
                            <SelectItem value="Roof Access">Roof Access ($125 + GST)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="hrv"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>HRV Cleaning (+$85)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-11 rounded-xl">
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Yes">Yes (+$85)</SelectItem>
                            <SelectItem value="No">No</SelectItem>
                            <SelectItem value="not sure">Not Sure</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="centralVac"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Central Vacuum Cleaning (+$85)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-11 rounded-xl">
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Yes">Yes (+$85)</SelectItem>
                            <SelectItem value="No">No</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Step 3: Preferred Date & Time */}
              <div className="rounded-3xl border border-border/60 bg-card p-6 sm:p-8 shadow-soft space-y-6">
                <div className="flex items-center gap-3.5 border-b border-border/50 pb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <CalendarIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Step 3 of 4
                    </span>
                    <h2 className="text-xl font-bold">Preferred Appointment Date & Time</h2>
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="preferredDate1"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Select Date & Check Live Availability</FormLabel>
                      <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full h-12 px-4 text-left font-normal rounded-xl justify-between",
                                !field.value && "text-muted-foreground",
                                field.value && "border-primary bg-primary/5"
                              )}
                            >
                              {field.value ? (
                                isMounted ? (
                                  <div className="flex items-center gap-2.5">
                                    <CalendarIcon className="h-4 w-4 text-primary" />
                                    <span className="font-semibold text-foreground">
                                      {format(field.value, "PPP")}
                                    </span>
                                    {selectedTimeSlot && (
                                      <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-semibold text-primary">
                                        {selectedTimeSlot}
                                      </span>
                                    )}
                                  </div>
                                ) : (
                                  <span>Loading date...</span>
                                )
                              ) : (
                                <div className="flex items-center gap-2">
                                  <CalendarIcon className="h-4 w-4 text-primary" />
                                  <span>Click to choose a date and time slot</span>
                                </div>
                              )}
                              <span className="text-xs font-semibold text-primary">
                                Change
                              </span>
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent
                          className="w-auto p-0 rounded-2xl shadow-2xl border border-border/60"
                          align="start"
                        >
                          <div className="flex flex-col md:flex-row">
                            <div className="md:border-r border-b md:border-b-0 border-border/50">
                              <div className="bg-muted/50 p-2.5 text-center text-xs font-semibold uppercase tracking-wider text-primary">
                                Select a Date
                              </div>
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={(date) => {
                                  field.onChange(date);
                                  handleDateChange(date);
                                }}
                                disabled={(date) =>
                                  date < new Date() || date < new Date("1900-01-01")
                                }
                                initialFocus
                              />
                            </div>
                            <div className="w-full md:w-[240px] p-4 h-[320px] md:h-[346px] overflow-y-auto">
                              <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                                Available Times
                              </div>
                              {isCheckingAvailability ? (
                                <div className="flex flex-col items-center justify-center h-4/5">
                                  <Loader2 className="h-7 w-7 animate-spin text-primary mb-2" />
                                  <span className="text-xs text-muted-foreground">
                                    Checking live schedule...
                                  </span>
                                </div>
                              ) : availableTimeSlots.length > 0 ? (
                                <div className="grid grid-cols-2 gap-2">
                                  {availableTimeSlots.map((slot) => (
                                    <Button
                                      key={slot.startTime}
                                      type="button"
                                      variant={
                                        selectedTimeSlot === slot.startTime
                                          ? "default"
                                          : "outline"
                                      }
                                      size="sm"
                                      className="rounded-lg text-xs font-semibold"
                                      onClick={() => {
                                        setSelectedTimeSlot(slot.startTime);
                                        const date = form.getValues("preferredDate1");
                                        if (date) {
                                          const [hours, minutes] =
                                            slot.startTime.split(":");
                                          const isPM = slot.startTime
                                            .toLowerCase()
                                            .includes("pm");
                                          let hour = parseInt(hours);
                                          if (isPM && hour !== 12) hour += 12;
                                          if (!isPM && hour === 12) hour = 0;

                                          const newDate = new Date(date);
                                          newDate.setHours(
                                            hour,
                                            parseInt(minutes),
                                            0,
                                            0
                                          );
                                          form.setValue("preferredDate1", newDate);
                                        }
                                        toast.success(
                                          `Selected time: ${slot.startTime}`
                                        );
                                        setCalendarOpen(false);
                                      }}
                                    >
                                      {slot.startTime}
                                    </Button>
                                  ))}
                                </div>
                              ) : field.value ? (
                                <div className="flex flex-col items-center justify-center h-4/5 text-center px-2">
                                  <p className="text-sm font-semibold text-foreground">
                                    Date Selected
                                  </p>
                                  <p className="text-xs text-muted-foreground mt-1">
                                    Our coordinator will confirm the best arrival window for {format(field.value, "MMM d")}.
                                  </p>
                                  <Button
                                    type="button"
                                    size="sm"
                                    variant="secondary"
                                    className="mt-4 rounded-full text-xs"
                                    onClick={() => setCalendarOpen(false)}
                                  >
                                    Confirm Date
                                  </Button>
                                </div>
                              ) : (
                                <div className="flex flex-col items-center justify-center h-4/5 text-center">
                                  <CalendarIcon className="h-6 w-6 text-muted-foreground mb-2" />
                                  <p className="text-xs text-muted-foreground">
                                    Pick a date on the calendar to view available arrival windows
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Step 4: Contact & Service Address */}
              <div className="rounded-3xl border border-border/60 bg-card p-6 sm:p-8 shadow-soft space-y-6">
                <div className="flex items-center gap-3.5 border-b border-border/50 pb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Step 4 of 4
                    </span>
                    <h2 className="text-xl font-bold">Contact & Service Address</h2>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane" className="h-11 rounded-xl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" className="h-11 rounded-xl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="jane@example.com"
                            className="h-11 rounded-xl"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="780-686-6324"
                            className="h-11 rounded-xl"
                            onChange={(e) => {
                              const formattedValue = formatPhoneNumber(e.target.value);
                              field.onChange(formattedValue);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="space-y-4 pt-2 border-t border-border/40">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Service Location</span>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <FormField
                        control={form.control}
                        name="address.street"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Street Address</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="123 Main Street"
                                className="h-11 rounded-xl"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="address.street2"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Unit / Suite (Optional)</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Unit 104"
                              className="h-11 rounded-xl"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="address.city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="St. Albert"
                              className="h-11 rounded-xl"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="address.province"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Province</FormLabel>
                          <FormControl>
                            <Select onValueChange={field.onChange} value={field.value || "AB"}>
                              <SelectTrigger className="h-11 rounded-xl">
                                <SelectValue placeholder="Select province" />
                              </SelectTrigger>
                              <SelectContent>
                                {canadianProvinces.map((province) => (
                                  <SelectItem key={province.value} value={province.value}>
                                    {province.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="address.postalCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Postal Code</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="T8N 4B3"
                              className="h-11 rounded-xl"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="additionalNotes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Notes or Special Instructions</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Gate codes, pets, parking instructions, or commercial specifications..."
                          className="resize-none rounded-xl min-h-[90px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Right Column: Sticky Live Estimate Summary */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div className="rounded-3xl border border-border/60 bg-card p-6 sm:p-8 shadow-soft space-y-6">
                <div className="flex items-center justify-between border-b border-border/50 pb-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Live Summary
                    </span>
                    <h3 className="text-xl font-bold">Estimated Quote</h3>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Receipt className="h-5 w-5" />
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Property Size:</span>
                    <span className="font-medium text-foreground">
                      {watchedValues.squareFootage || "Select sq. ft."}
                    </span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Furnaces:</span>
                    <span className="font-medium text-foreground">
                      {watchedValues.furnaces === "non"
                        ? "Dryer Vent Only"
                        : `${watchedValues.furnaces} Furnace(s)`}
                    </span>
                  </div>
                  {watchedValues.dryerVentCleaning && (
                    <div className="flex justify-between text-muted-foreground">
                      <span>Dryer Vent Cleaning:</span>
                      <span className="font-medium text-primary">Included</span>
                    </div>
                  )}
                  {watchedValues.systemSanitizer === "Yes" && (
                    <div className="flex justify-between text-muted-foreground">
                      <span>BioClean Sanitizer:</span>
                      <span className="font-medium text-primary">+$45.00</span>
                    </div>
                  )}
                  {watchedValues.centralAirConditioning === "Yes" && (
                    <div className="flex justify-between text-muted-foreground">
                      <span>Central A/C Coil:</span>
                      <span className="font-medium text-primary">+$50.00</span>
                    </div>
                  )}
                  {watchedValues.hrv === "Yes" && (
                    <div className="flex justify-between text-muted-foreground">
                      <span>HRV Unit Cleaning:</span>
                      <span className="font-medium text-primary">+$85.00</span>
                    </div>
                  )}
                  {watchedValues.centralVac === "Yes" && (
                    <div className="flex justify-between text-muted-foreground">
                      <span>Central Vac Cleaning:</span>
                      <span className="font-medium text-primary">+$85.00</span>
                    </div>
                  )}
                </div>

                <div className="rounded-2xl bg-muted/50 p-4 space-y-2 border border-border/50">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal:</span>
                    <span className="font-semibold">
                      ${estimatedPrice.basePrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Estimated GST (5%):</span>
                    <span>${estimatedPrice.gst.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-baseline pt-2 border-t border-border/60">
                    <span className="font-bold text-base">Estimated Total:</span>
                    <span className="text-2xl font-extrabold text-primary">
                      ${estimatedPrice.totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading || isCheckingAvailability}
                  className="w-full rounded-xl h-13 text-base font-bold shadow-md"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting Request...
                    </span>
                  ) : (
                    "Submit Quote & Request Booking"
                  )}
                </Button>

                <div className="space-y-2 pt-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>No payment required upfront</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                    <span>100% Satisfaction Guarantee</span>
                  </div>
                </div>
              </div>

              {/* Direct Call Assistance Box */}
              <div className="rounded-2xl border border-border/60 bg-muted/30 p-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Need a Commercial Quote?
                  </p>
                  <p className="text-sm font-bold mt-0.5">Call 780-686-6324</p>
                </div>
                <Button variant="outline" size="sm" className="rounded-full" asChild>
                  <a href="tel:780-686-6324">
                    <Phone className="mr-1.5 h-3.5 w-3.5 text-primary" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </motion.div>
  );
}
