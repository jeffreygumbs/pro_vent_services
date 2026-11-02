import { z } from "zod";

export const servicesQuoteSchema = z.object({
  furnaces: z.enum(["1", "2", "3", "non"]),
  buildingType: z.enum(["House", "Appartment", "Townhouse", "Duplex", "Other"]),
  squareFootage: z.enum([
    "800 - 1500sqf",
    "1500 - 2000sqf",
    "2000 - 2500sqf",
    "2500 - 3000sqf",
    "3000 - 4000sqf"
  ]).optional(),
  dryerVentCleaning: z.boolean(),
  dryerVentLocation: z.string()
    .transform(val => val === "undefined" ? undefined : val)
    .pipe(
      z.enum([
        "Main Floor",
        "Side of the Building up to 10FT / 3m",
        "above 10FT / 3m up to 30FT / 10m",
        "Roof Access"
      ]).optional()
    ),
  centralAirConditioning: z.string()
    .transform(val => val === "undefined" ? "not sure" : val)
    .pipe(z.enum(["Yes", "No", "not sure"])),
  hrv: z.string()
    .transform(val => val === "undefined" ? "not sure" : val)
    .pipe(z.enum(["Yes", "No", "not sure"])),
  centralVac: z.string()
    .transform(val => val === "undefined" ? "No" : val)
    .pipe(z.enum(["Yes", "No"])),
  systemSanitizer: z.string()
    .transform(val => val === "undefined" ? "No" : val)
    .pipe(z.enum(["Yes", "No"])),
  additionalNotes: z.string().optional(),
  preferredDate1: z.date(),
  preferredDate2: z.date().optional(),
  preferredTime2: z.string().optional(),
  preferredDate3: z.date().optional(),
  preferredTime3: z.string().optional(),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  companyName: z.string().optional(),
  email: z.string().email(),
  phone: z.string().regex(/^(\d{3}-\d{3}-\d{4}|\d{10})$/),
  address: z.object({
    street: z.string(),
    street2: z.string().optional(),
    city: z.string(),
    province: z.string(),
    postalCode: z.string(),
    country: z.string()
  })
});

export type ServicesQuoteFormData = z.infer<typeof servicesQuoteSchema>;
