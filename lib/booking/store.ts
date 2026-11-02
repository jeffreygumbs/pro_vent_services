import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";

const DATA_DIR = path.join(process.cwd(), "..", "..", "data");
const BOOKING_FILE = path.join(DATA_DIR, "booking.json");

export type Appointment = {
  id: string;
  email: string;
  name: string;
  service: string;
  date: string;
  time: string;
  status: "scheduled" | "cancelled";
};

export type Availability = Record<string, string[]>;

export type BookingStore = {
  availability: Availability;
  appointments: Appointment[];
};

const defaultTimes = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00"];

function formatDate(d: Date): string {
  return d.toISOString().split("T")[0];
}

function seedAvailability(): Availability {
  const availability: Availability = {};
  const today = new Date();
  for (let i = 0; i < 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    availability[formatDate(d)] = [...defaultTimes];
  }
  return availability;
}

async function ensureStore(): Promise<BookingStore> {
  try {
    await mkdir(DATA_DIR, { recursive: true });
  } catch {
    // ignore
  }

  try {
    const content = await readFile(BOOKING_FILE, "utf-8");
    return JSON.parse(content || "{}") as BookingStore;
  } catch {
    const seed: BookingStore = {
      availability: seedAvailability(),
      appointments: [],
    };
    await writeFile(BOOKING_FILE, JSON.stringify(seed, null, 2));
    return seed;
  }
}

export async function getBookingStore(): Promise<BookingStore> {
  return ensureStore();
}

export async function saveBookingStore(store: BookingStore): Promise<void> {
  await writeFile(BOOKING_FILE, JSON.stringify(store, null, 2));
}

export async function getAvailability(date: string): Promise<string[]> {
  const store = await getBookingStore();
  return store.availability[date] ?? [];
}

export async function setAvailability(
  date: string,
  slots: string[]
): Promise<void> {
  const store = await getBookingStore();
  store.availability[date] = [...new Set(slots)].sort();
  await saveBookingStore(store);
}

export async function getAppointments(email?: string): Promise<Appointment[]> {
  const store = await getBookingStore();
  if (!email) return store.appointments;
  return store.appointments
    .filter((a) => a.email.toLowerCase() === email.toLowerCase())
    .sort((a, b) => `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`));
}

export async function getAllAppointments(): Promise<Appointment[]> {
  const store = await getBookingStore();
  return store.appointments.sort((a, b) =>
    `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`)
  );
}

export async function bookAppointment(
  data: Omit<Appointment, "id" | "status">
): Promise<Appointment | null> {
  const store = await getBookingStore();
  const slots = store.availability[data.date] ?? [];
  if (!slots.includes(data.time)) return null;

  store.availability[data.date] = slots.filter((t) => t !== data.time);

  const appointment: Appointment = {
    ...data,
    id: `APT-${randomUUID().slice(0, 8).toUpperCase()}`,
    status: "scheduled",
  };

  store.appointments.push(appointment);
  await saveBookingStore(store);
  return appointment;
}

export async function cancelAppointment(id: string): Promise<void> {
  const store = await getBookingStore();
  const apt = store.appointments.find((a) => a.id === id);
  if (!apt) return;
  apt.status = "cancelled";
  if (!store.appointments.some((a) => a.date === apt.date && a.time === apt.time && a.status === "scheduled")) {
    store.availability[apt.date] = [...(store.availability[apt.date] ?? []), apt.time]
      .sort();
  }
  await saveBookingStore(store);
}
