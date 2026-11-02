'use server'

import { z } from 'zod';
import { getAvailability } from '../booking/store';

const checkAvailabilitySchema = z.object({
  date: z.string().transform(str => new Date(str)),
});

export type TimeSlot = {
  startTime: string;
  endTime: string;
  available: boolean;
};

function addHour(startTime: string) {
  const [h, m] = startTime.split(':').map(Number);
  const nextHour = ((h ?? 0) + 1) % 24;
  return `${nextHour.toString().padStart(2, '0')}:${(m ?? 0).toString().padStart(2, '0')}`;
}

export async function checkAvailability(
  date: string
): Promise<{ success: boolean; data?: { timeSlots: TimeSlot[] }; error?: string }> {
  try {
    const { date: parsedDate } = checkAvailabilitySchema.parse({ date });
    const dateKey = new Date(parsedDate).toISOString().split('T')[0];
    const slots = await getAvailability(dateKey);

    const timeSlots: TimeSlot[] = slots.map(startTime => ({
      startTime,
      endTime: addHour(startTime),
      available: true,
    }));

    return { success: true, data: { timeSlots } };
  } catch (error) {
    console.error('Error checking availability:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to check availability',
    };
  }
}
