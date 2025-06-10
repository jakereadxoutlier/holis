import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import * as SecureStore from 'expo-secure-store';

export interface IntakeLog {
  date: string; // YYYY-MM-DD
  taken: boolean;
}

const persistOptions = {
  name: 'intake',
  getStorage: () => ({
    getItem: SecureStore.getItemAsync,
    setItem: SecureStore.setItemAsync,
    removeItem: SecureStore.deleteItemAsync,
  }),
};

export const useIntakeStore = create<{
  logs: IntakeLog[];
  addLog: (log: IntakeLog) => void;
}>(
  persist(
    (set, get) => ({
      logs: [],
      addLog: (log) => set({ logs: [...get().logs, log] }),
    }),
    persistOptions
  )
);
