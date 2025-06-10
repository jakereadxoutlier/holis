import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import * as SecureStore from 'expo-secure-store';

export interface Reminder {
  id: string;
  time: string; // HH:MM
  enabled: boolean;
}

const persistOptions = {
  name: 'reminders',
  getStorage: () => ({
    getItem: SecureStore.getItemAsync,
    setItem: SecureStore.setItemAsync,
    removeItem: SecureStore.deleteItemAsync,
  }),
};

export const useReminderStore = create<{
  reminders: Reminder[];
  setReminders: (r: Reminder[]) => void;
}>(
  persist(
    (set) => ({
      reminders: [],
      setReminders: (r) => set({ reminders: r }),
    }),
    persistOptions
  )
);
