'use server'

import { getStore, saveStore } from '../portal/store';

export type AddressInput = {
  street: string;
  street2?: string;
  city: string;
  province: string;
  postalCode: string;
  country?: string;
};

export async function saveClientProfile(input: {
  email: string;
  name: string;
  company?: string;
  address: AddressInput;
}) {
  try {
    const store = await getStore();
    const email = input.email.toLowerCase();
    const record = store[email] ?? {
      user: { name: input.name, company: input.company || '', address: undefined },
      jobs: [],
      quotes: [],
      invoices: [],
      messages: [],
    };
    record.user.name = input.name;
    record.user.company = input.company || record.user.company || '';
    record.user.type = input.company ? 'company' : 'individual';
    record.user.address = input.address;
    store[email] = record;
    await saveStore(store);
    return { success: true };
  } catch (error) {
    console.error('Error saving client profile:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Failed to save profile' };
  }
}
