import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "..", "..", "data");
const PORTAL_FILE = path.join(DATA_DIR, "portal.json");

export type Job = {
  id: string;
  service: string;
  location: string;
  date: string;
  status: "scheduled" | "completed" | "in-progress";
};

export type ServiceQuoteDetails = {
  furnaces: string;
  buildingType: string;
  squareFootage?: string;
  dryerVentCleaning: boolean;
  dryerVentLocation?: string;
  centralAirConditioning: string;
  hrv: string;
  centralVac: string;
  systemSanitizer: string;
  additionalNotes?: string;
  preferredDate?: string;
};

export type Quote = {
  id: string;
  service: string;
  property: string;
  amount: number;
  status: "pending" | "approved" | "declined";
  details?: ServiceQuoteDetails;
  breakdown?: { base: number; gst: number; total: number };
};

export type Invoice = {
  id: string;
  service: string;
  date: string;
  amount: number;
  status: "paid" | "pending";
  url?: string;
  stripeInvoiceId?: string;
  quoteId?: string;
};

export type Message = {
  id: string;
  from: string;
  subject: string;
  text: string;
  time: string;
  status: "read" | "unread";
};

export type Address = {
  street: string;
  street2?: string;
  city: string;
  province: string;
  postalCode: string;
  country?: string;
};

export type DashboardData = {
  user: { name: string; company: string; phone?: string; address?: Address; type?: "individual" | "company" };
  stats: {
    totalJobs: number;
    activeQuotes: number;
    pendingInvoices: number;
    nextVisit: string;
  };
  jobs: Job[];
  quotes: Quote[];
  messages: Message[];
};

export type PortalRecord = {
  user: { name: string; company: string; phone?: string; address?: Address; type?: "individual" | "company" };
  jobs: Job[];
  quotes: Quote[];
  invoices: Invoice[];
  messages: Message[];
};

export type PortalStore = Record<string, PortalRecord>;

const defaultRecord = (email: string): PortalRecord => ({
  user: {
    name: email.split("@")[0] || "Client",
    company: "",
    address: undefined,
    type: "individual",
  },
  jobs: [],
  quotes: [],
  invoices: [],
  messages: [],
});

async function ensureStore(): Promise<PortalStore> {
  try {
    await mkdir(DATA_DIR, { recursive: true });
  } catch {
    // ignore
  }

  try {
    const content = await readFile(PORTAL_FILE, "utf-8");
    return JSON.parse(content || "{}") as PortalStore;
  } catch {
    const seed: PortalStore = {
      "user@example.com": {
        user: { name: "Demo Client", company: "Johnson Family Residence" },
        jobs: [
          { id: "JOB-1024", service: "Commercial Air Duct Cleaning", location: "Downtown Office", date: "Oct 24, 2026", status: "scheduled" },
          { id: "JOB-1022", service: "HVAC System Sanitizing", location: "Main Building", date: "Oct 18, 2026", status: "in-progress" },
          { id: "JOB-1019", service: "Dryer Vent Cleaning", location: "Laundry Room", date: "Sep 30, 2026", status: "completed" },
          { id: "JOB-1015", service: "Boiler Maintenance", location: "Basement", date: "Sep 12, 2026", status: "completed" },
          { id: "JOB-1008", service: "Residential Duct Cleaning", location: "123 Maple Dr", date: "Aug 28, 2026", status: "completed" },
          { id: "JOB-1003", service: "Furnace Inspection", location: "Main Floor", date: "Aug 05, 2026", status: "completed" },
        ],
        quotes: [
          { id: "Q-2409", service: "Exhaust Hood Cleaning", property: "Downtown Restaurant", amount: 1840, status: "pending" },
          { id: "Q-2405", service: "UV Light Installation", property: "Main Office", amount: 975, status: "approved" },
          { id: "Q-2401", service: "High Dusting", property: "Warehouse", amount: 2200, status: "declined" },
          { id: "Q-2398", service: "Annual HVAC Service", property: "Home", amount: 650, status: "approved" },
          { id: "Q-2392", service: "Antimicrobial Fogging", property: "Main Office", amount: 450, status: "approved" },
        ],
        invoices: [
          { id: "INV-3314", service: "Boiler Maintenance", date: "Sep 12, 2026", amount: 425, status: "paid" },
          { id: "INV-3312", service: "Dryer Vent Cleaning", date: "Sep 30, 2026", amount: 275, status: "pending" },
          { id: "INV-3309", service: "HVAC System Sanitizing", date: "Oct 18, 2026", amount: 890, status: "pending" },
          { id: "INV-3301", service: "Residential Duct Cleaning", date: "Aug 28, 2026", amount: 650, status: "paid" },
        ],
        messages: [
          { id: "MSG-42", from: "Mario", subject: "Schedule Update", text: "Your service has been rescheduled to next Tuesday at 9 AM.", time: "2h ago", status: "unread" },
          { id: "MSG-41", from: "Pro-Vent Team", subject: "Quote Approved", text: "Quote Q-2405 has been approved. We will reach out to book installation.", time: "1d ago", status: "read" },
          { id: "MSG-40", from: "Billing", subject: "Payment Reminder", text: "Invoice INV-3312 is due on Nov 1.", time: "2d ago", status: "unread" },
          { id: "MSG-39", from: "Mario", subject: "Service Complete", text: "Your dryer vent cleaning is complete. Let us know if you have any questions.", time: "5d ago", status: "read" },
        ],
      },
    };
    await writeFile(PORTAL_FILE, JSON.stringify(seed, null, 2));
    return seed;
  }
}

async function getRecord(email: string): Promise<PortalRecord> {
  const store = await ensureStore();
  return store[email.toLowerCase()] ?? defaultRecord(email);
}

export async function getStore(): Promise<PortalStore> {
  return ensureStore();
}

export async function saveStore(store: PortalStore): Promise<void> {
  await writeFile(PORTAL_FILE, JSON.stringify(store, null, 2));
}

export async function getDashboard(email: string): Promise<DashboardData> {
  const record = await getRecord(email);
  const upcoming = record.jobs.find((j) => j.status === "scheduled");
  const pendingInvoices = record.invoices.filter((i) => i.status === "pending").length;

  return {
    user: { ...record.user },
    stats: {
      totalJobs: record.jobs.length,
      activeQuotes: record.quotes.filter((q) => q.status === "pending").length,
      pendingInvoices,
      nextVisit: upcoming ? upcoming.date : "—",
    },
    jobs: record.jobs.slice(0, 4),
    quotes: record.quotes.slice(0, 4),
    messages: record.messages.slice(0, 3),
  };
}

export async function getJobs(email: string): Promise<Job[]> {
  const record = await getRecord(email);
  return record.jobs;
}

export async function getQuotes(email: string): Promise<Quote[]> {
  const record = await getRecord(email);
  return record.quotes;
}

export async function getInvoices(email: string): Promise<Invoice[]> {
  const record = await getRecord(email);
  return record.invoices;
}

export async function getMessages(email: string): Promise<Message[]> {
  const record = await getRecord(email);
  return record.messages ?? [];
}

export async function addMessage(email: string, message: Message): Promise<void> {
  const store = await getStore();
  const key = email.toLowerCase();
  const record = store[key] ?? {
    user: { name: "", company: "" },
    jobs: [],
    quotes: [],
    invoices: [],
    messages: [],
  };
  record.messages.push(message);
  store[key] = record;
  await saveStore(store);
}

export async function approveQuote(email: string, quoteId: string): Promise<Quote | null> {
  const store = await getStore();
  const record = store[email.toLowerCase()] ?? defaultRecord(email);
  const quote = record.quotes.find((q) => q.id === quoteId);
  if (!quote || quote.status !== "pending") return null;
  quote.status = "approved";
  store[email.toLowerCase()] = record;
  await saveStore(store);
  return quote;
}

export async function addInvoice(email: string, invoice: Invoice): Promise<void> {
  const store = await getStore();
  const record = store[email.toLowerCase()] ?? defaultRecord(email);
  record.invoices.push(invoice);
  store[email.toLowerCase()] = record;
  await saveStore(store);
}

export async function getUserProfile(email: string): Promise<PortalRecord["user"]> {
  const record = await getRecord(email);
  return record.user;
}

export async function updateUserProfile(
  email: string,
  updates: Partial<PortalRecord["user"]>
): Promise<void> {
  const store = await getStore();
  const record = store[email.toLowerCase()] ?? defaultRecord(email);
  record.user = { ...record.user, ...updates };
  store[email.toLowerCase()] = record;
  await saveStore(store);
}
