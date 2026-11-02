import { randomUUID } from "crypto";
import { getUsers } from "@/lib/auth/users";
import {
  getDashboard,
  getJobs,
  getQuotes,
  getInvoices,
  getMessages,
  getStore,
  saveStore,
  type Job,
  type Quote,
  type Invoice,
  type Message,
  type Address,
} from "@/lib/portal/store";

export type ClientSummary = {
  id: string;
  email: string;
  name: string;
  company: string;
  phone?: string;
  address?: Address;
  type?: "individual" | "company";
  role?: string;
  totalJobs: number;
  pendingInvoices: number;
  activeQuotes: number;
};

export type ManagementDashboard = {
  totalClients: number;
  totalJobs: number;
  activeQuotes: number;
  pendingInvoices: number;
  totalMessages: number;
  clients: ClientSummary[];
};

export async function getClients(): Promise<ClientSummary[]> {
  const users = await getUsers();
  const userMap = new Map<string, { id: string; name: string; email: string; role?: string }>();
  for (const user of users) {
    userMap.set(user.email.toLowerCase(), user);
  }

  const store = await getStore();
  const clients: ClientSummary[] = [];
  const seen = new Set<string>();

  // Include every registered non-admin user, even if they have no portal record yet.
  for (const user of users) {
    if (user.role === "admin") continue;
    const email = user.email.toLowerCase();
    seen.add(email);
    const record = store[email] ?? {
      user: { name: user.name, company: "" },
      jobs: [],
      quotes: [],
      invoices: [],
      messages: [],
    };

    clients.push({
      id: user.id,
      email: user.email,
      name: user.name || record.user.name || email.split("@")[0] || "Client",
      company: record.user.company || "",
      phone: record.user.phone,
      address: record.user.address,
      type: record.user.type,
      role: user.role,
      totalJobs: record.jobs.length,
      pendingInvoices: record.invoices.filter((i) => i.status === "pending").length,
      activeQuotes: record.quotes.filter((q) => q.status === "pending").length,
    });
  }

  // Also surface any non-registered client records from the store.
  for (const [email, record] of Object.entries(store)) {
    const key = email.toLowerCase();
    if (seen.has(key)) continue;

    const user = userMap.get(key);
    if (user?.role === "admin") continue;

    clients.push({
      id: user?.id || key,
      email: user?.email || email,
      name: user?.name || record.user.name || email.split("@")[0] || "Client",
      company: record.user.company || "",
      phone: record.user.phone,
      address: record.user.address,
      type: record.user.type,
      role: user?.role,
      totalJobs: record.jobs.length,
      pendingInvoices: record.invoices.filter((i) => i.status === "pending").length,
      activeQuotes: record.quotes.filter((q) => q.status === "pending").length,
    });
  }

  return clients;
}

export async function getManagementDashboard(): Promise<ManagementDashboard> {
  const clients = await getClients();
  const messages = await getAllMessages();

  const totalJobs = clients.reduce((sum, c) => sum + c.totalJobs, 0);
  const activeQuotes = clients.reduce((sum, c) => sum + c.activeQuotes, 0);
  const pendingInvoices = clients.reduce((sum, c) => sum + c.pendingInvoices, 0);

  return {
    totalClients: clients.length,
    totalJobs,
    activeQuotes,
    pendingInvoices,
    totalMessages: messages.length,
    clients,
  };
}

export type ManagementJob = Job & { client: string; clientEmail: string };
export type ManagementQuote = Quote & { client: string; clientEmail: string };
export type ManagementInvoice = Invoice & { client: string; clientEmail: string };
export type ManagementMessage = Message & { client: string; clientEmail: string };

async function getUserMap(): Promise<Map<string, { name: string; role?: string; email: string }>> {
  const users = await getUsers();
  const map = new Map<string, { name: string; role?: string; email: string }>();
  for (const user of users) {
    map.set(user.email.toLowerCase(), { name: user.name, role: user.role, email: user.email });
  }
  return map;
}

async function aggregate<T extends Record<string, unknown>, R>(
  picker: (record: { user: { name: string; company: string }; jobs: Job[]; quotes: Quote[]; invoices: Invoice[]; messages: Message[] }) => T[],
  map: (item: T, client: string, clientEmail: string) => R
): Promise<R[]> {
  const store = await getStore();
  const userMap = await getUserMap();
  const results: R[] = [];

  for (const [email, record] of Object.entries(store)) {
    const user = userMap.get(email.toLowerCase());
    if (user?.role === "admin") continue;
    const clientName = user?.name || record.user?.name || email.split("@")[0] || "Client";
    const clientEmail = user?.email || email;
    for (const item of picker(record)) {
      results.push(map(item as T, clientName, clientEmail));
    }
  }

  return results;
}

export async function getAllJobs(): Promise<ManagementJob[]> {
  return aggregate(
    (record) => record.jobs,
    (job, client, clientEmail) => ({ ...job, client, clientEmail })
  );
}

export async function getAllQuotes(): Promise<ManagementQuote[]> {
  return aggregate(
    (record) => record.quotes,
    (quote, client, clientEmail) => ({ ...quote, client, clientEmail })
  );
}

export async function getAllInvoices(): Promise<ManagementInvoice[]> {
  return aggregate(
    (record) => record.invoices,
    (invoice, client, clientEmail) => ({ ...invoice, client, clientEmail })
  );
}

export async function getAllMessages(): Promise<ManagementMessage[]> {
  return aggregate(
    (record) => record.messages,
    (message, client, clientEmail) => ({ ...message, client, clientEmail })
  );
}

export async function updateJobStatus(jobId: string, status: Job["status"]): Promise<void> {
  const store = await getStore();
  for (const record of Object.values(store)) {
    const job = record.jobs.find((j) => j.id === jobId);
    if (job) {
      job.status = status;
      await saveStore(store);
      return;
    }
  }
  throw new Error("Job not found");
}

export async function updateQuoteStatus(quoteId: string, status: Quote["status"]): Promise<void> {
  const store = await getStore();
  for (const record of Object.values(store)) {
    const quote = record.quotes.find((q) => q.id === quoteId);
    if (quote) {
      quote.status = status;
      await saveStore(store);
      return;
    }
  }
  throw new Error("Quote not found");
}

export async function updateInvoiceStatus(invoiceId: string, status: Invoice["status"]): Promise<void> {
  const store = await getStore();
  for (const record of Object.values(store)) {
    const invoice = record.invoices.find((i) => i.id === invoiceId);
    if (invoice) {
      invoice.status = status;
      await saveStore(store);
      return;
    }
  }
  throw new Error("Invoice not found");
}

export async function createQuote(clientEmail: string, quote: Omit<Quote, "id"> & { id?: string }): Promise<void> {
  const store = await getStore();
  const email = clientEmail.toLowerCase();
  const record = store[email] ?? {
    user: { name: "", company: "" },
    jobs: [],
    quotes: [],
    invoices: [],
    messages: [],
  };
  const id = quote.id ?? `Q-${randomUUID().slice(0, 8).toUpperCase()}`;
  record.quotes.push({ ...quote, id });
  store[email] = record;
  await saveStore(store);
}

export async function createInvoice(clientEmail: string, invoice: Omit<Invoice, "id"> & { id?: string }): Promise<void> {
  const store = await getStore();
  const email = clientEmail.toLowerCase();
  const record = store[email] ?? {
    user: { name: "", company: "" },
    jobs: [],
    quotes: [],
    invoices: [],
    messages: [],
  };
  const id = invoice.id ?? `INV-${randomUUID().slice(0, 8).toUpperCase()}`;
  record.invoices.push({ ...invoice, id });
  store[email] = record;
  await saveStore(store);
}

export async function updateMessageStatus(messageId: string, status: Message["status"]): Promise<void> {
  const store = await getStore();
  for (const record of Object.values(store)) {
    const message = record.messages.find((m) => m.id === messageId);
    if (message) {
      message.status = status;
      await saveStore(store);
      return;
    }
  }
  throw new Error("Message not found");
}
