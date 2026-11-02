'use server'

import { format } from 'date-fns';
import { randomUUID } from 'crypto';
import { servicesQuoteSchema, type ServicesQuoteFormData } from '../schemas/services-quote';
import { getStore, saveStore, type Quote, type Message } from '../portal/store';

const calculatePrice = (data: ServicesQuoteFormData) => {
  let basePrice = 0;

  switch (data.squareFootage) {
    case "800 - 1500sqf": basePrice = 320; break;
    case "1500 - 2000sqf": basePrice = 380; break;
    case "2000 - 2500sqf": basePrice = 420; break;
    case "2500 - 3000sqf": basePrice = 500; break;
    case "3000 - 4000sqf": basePrice = 600; break;
  }

  if (data.furnaces === "2") basePrice += 150;
  if (data.furnaces === "3") basePrice += 150;

  if (data.dryerVentCleaning && data.dryerVentLocation) {
    switch (data.dryerVentLocation) {
      case "Main Floor": basePrice += 45; break;
      case "Side of the Building up to 10FT / 3m": basePrice += 45; break;
      case "above 10FT / 3m up to 30FT / 10m": basePrice += 85; break;
      case "Roof Access": basePrice += 125; break;
    }
  }

  if (data.centralAirConditioning === "Yes") basePrice += 50;
  if (data.hrv === "Yes") basePrice += 85;
  if (data.centralVac === "Yes") basePrice += 85;
  if (data.systemSanitizer === "Yes") basePrice += 45;

  const gst = basePrice * 0.05;
  const totalPrice = basePrice + gst;

  return { basePrice, gst, totalPrice };
};

export async function submitServicesQuote(formData: FormData) {
  try {
    const formEntries = Object.fromEntries(formData.entries());

    let addressData;
    if (formEntries['address.street']) {
      addressData = {
        street: formEntries['address.street'] as string,
        street2: (formEntries['address.street2'] as string) || undefined,
        city: formEntries['address.city'] as string,
        province: formEntries['address.province'] as string,
        postalCode: formEntries['address.postalCode'] as string,
        country: (formEntries['address.country'] as string) || 'Canada',
      };
    } else if (typeof formEntries.address === 'string' && formEntries.address.startsWith('{')) {
      try {
        addressData = JSON.parse(formEntries.address as string);
      } catch (e) {
        console.error('Failed to parse address JSON:', e);
        addressData = {};
      }
    } else {
      addressData = {
        street: formEntries.street as string,
        street2: (formEntries.street2 as string) || undefined,
        city: formEntries.city as string,
        province: formEntries.province as string,
        postalCode: formEntries.postalCode as string,
        country: (formEntries.country as string) || 'Canada',
      };
    }

    const validatedData = servicesQuoteSchema.parse({
      ...formEntries,
      preferredDate1: new Date(formEntries.preferredDate1 as string),
      preferredDate2: formEntries.preferredDate2 ? new Date(formEntries.preferredDate2 as string) : undefined,
      preferredDate3: formEntries.preferredDate3 ? new Date(formEntries.preferredDate3 as string) : undefined,
      dryerVentCleaning: formEntries.dryerVentCleaning === "true",
      address: addressData,
    });

    const pricing = calculatePrice(validatedData);

    let serviceType = "Air Duct Cleaning";
    if (validatedData.dryerVentCleaning) {
      serviceType += " + Dryer Vent Cleaning";
    }
    if (validatedData.systemSanitizer === "Yes") {
      serviceType += " + System Sanitizing";
    }

    const property = `${validatedData.address.street}${validatedData.address.street2 ? `, ${validatedData.address.street2}` : ''}, ${validatedData.address.city}, ${validatedData.address.province}`;

    const quote: Quote = {
      id: `Q-${randomUUID().slice(0, 6).toUpperCase()}`,
      service: serviceType,
      property,
      amount: pricing.totalPrice,
      status: 'pending',
      details: {
        furnaces: validatedData.furnaces,
        buildingType: validatedData.buildingType,
        squareFootage: validatedData.squareFootage,
        dryerVentCleaning: validatedData.dryerVentCleaning,
        dryerVentLocation: validatedData.dryerVentLocation,
        centralAirConditioning: validatedData.centralAirConditioning,
        hrv: validatedData.hrv,
        centralVac: validatedData.centralVac,
        systemSanitizer: validatedData.systemSanitizer,
        additionalNotes: validatedData.additionalNotes,
        preferredDate: validatedData.preferredDate1
          ? format(validatedData.preferredDate1, 'PPP')
          : undefined,
      },
      breakdown: {
        base: pricing.basePrice,
        gst: pricing.gst,
        total: pricing.totalPrice,
      },
    };

    const message: Message = {
      id: `MSG-${randomUUID().slice(0, 6).toUpperCase()}`,
      from: `${validatedData.firstName} ${validatedData.lastName}`,
      subject: `Quote Request - ${serviceType}`,
      text: `New quote request from ${validatedData.firstName} ${validatedData.lastName} (${validatedData.email}, ${validatedData.phone}). Preferred date: ${validatedData.preferredDate1 ? format(validatedData.preferredDate1, 'PPP') : 'Not selected'}. Total: $${pricing.totalPrice.toFixed(2)}. Notes: ${validatedData.additionalNotes || 'None'}`,
      time: new Date().toISOString(),
      status: 'unread',
    };

    const store = await getStore();
    const email = validatedData.email.toLowerCase();
    const record = store[email] ?? {
      user: { name: `${validatedData.firstName} ${validatedData.lastName}`, company: validatedData.companyName || '', address: undefined },
      jobs: [],
      quotes: [],
      invoices: [],
      messages: [],
    };
    record.user.name = `${validatedData.firstName} ${validatedData.lastName}`;
    record.user.company = validatedData.companyName || record.user.company || '';
    record.user.type = validatedData.companyName ? 'company' : 'individual';
    record.user.address = addressData;
    record.quotes.push(quote);
    record.messages.push(message);
    store[email] = record;
    await saveStore(store);

    return { success: true, pricing, quoteId: quote.id };
  } catch (error) {
    console.error('Error submitting services quote:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to submit quote request',
    };
  }
}
