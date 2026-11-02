import { z } from "zod";
import { servicesQuoteSchema } from "./services-quote";

export const managementQuoteSchema = servicesQuoteSchema
  .omit({
    preferredDate2: true,
    preferredDate3: true,
    preferredTime2: true,
    preferredTime3: true,
  })
  .extend({
    preferredDate1: z.date().optional(),
  });

export type ManagementQuoteFormData = z.infer<typeof managementQuoteSchema>;
