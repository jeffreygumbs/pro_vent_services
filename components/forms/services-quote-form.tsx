"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  serviceType: z.string().min(1, "Please select a service type."),
  propertyType: z.string().min(1, "Please select a property type."),
  squareFootage: z.string().min(1, "Square footage is required"),
  numberOfVents: z.string().min(1, "Number of vents is required"),
  addOns: z.array(z.string()).optional(),
});

const baseRates = {
  residential: {
    airDuctCleaning: 299,
    dryerVentCleaning: 149,
    systemSanitizing: 199,
  },
  commercial: {
    airDuctCleaning: 499,
    dryerVentCleaning: 249,
    systemSanitizing: 399,
  },
};

const addOnServices = [
  {
    id: "sanitization",
    label: "Sanitization Treatment",
    price: 99,
  },
  {
    id: "deodorizing",
    label: "Deodorizing Treatment",
    price: 79,
  },
  {
    id: "uvLight",
    label: "UV Light Installation",
    price: 299,
  },
];

export function ServicesQuoteForm() {
  const [quote, setQuote] = useState<number | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      addOns: [],
    },
  });

  function calculateQuote(data: z.infer<typeof formSchema>) {
    const propertyType = data.propertyType as keyof typeof baseRates;
    const serviceType = data.serviceType as keyof (typeof baseRates)["residential"];
    let total = baseRates[propertyType][serviceType];

    // Adjust for square footage
    const sqft = parseInt(data.squareFootage);
    if (sqft > 2000) {
      total += Math.ceil((sqft - 2000) / 500) * 50;
    }

    // Adjust for number of vents
    const vents = parseInt(data.numberOfVents);
    if (vents > 10) {
      total += Math.ceil((vents - 10) / 5) * 25;
    }

    // Add selected add-ons
    if (data.addOns) {
      data.addOns.forEach((addOn) => {
        const service = addOnServices.find((s) => s.id === addOn);
        if (service) {
          total += service.price;
        }
      });
    }

    return total;
  }

  function onSubmit(data: z.infer<typeof formSchema>) {
    const total = calculateQuote(data);
    setQuote(total);
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Get an Instant Quote</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="airDuctCleaning">Air Duct Cleaning</SelectItem>
                      <SelectItem value="dryerVentCleaning">Dryer Vent Cleaning</SelectItem>
                      <SelectItem value="systemSanitizing">System Sanitizing</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="propertyType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Property Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
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
                  <FormLabel>Square Footage</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter square footage" {...field} />
                  </FormControl>
                  <FormDescription>
                    Additional charges apply for properties over 2,000 sq ft
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="numberOfVents"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Vents</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter number of vents" {...field} />
                  </FormControl>
                  <FormDescription>
                    Additional charges apply for more than 10 vents
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="addOns"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel>Additional Services</FormLabel>
                    <FormDescription>
                      Select any additional services you would like to add
                    </FormDescription>
                  </div>
                  {addOnServices.map((service) => (
                    <FormField
                      key={service.id}
                      control={form.control}
                      name="addOns"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={service.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(service.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value || [], service.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== service.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                {service.label} - ${service.price}
                              </FormLabel>
                            </div>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">Calculate Quote</Button>
          </form>
        </Form>

        {quote !== null && (
          <div className="mt-6 p-4 bg-primary/10 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Estimated Quote</h3>
            <p className="text-3xl font-bold text-primary">${quote}</p>
            <p className="text-sm text-muted-foreground mt-2">
              This is an estimated price. Final pricing may vary based on site inspection.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
