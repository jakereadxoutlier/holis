import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import * as SecureStore from 'expo-secure-store';

export interface StackItem {
  id: string;
  name: string;
  dose: string;
  timing: 'morning' | 'noon' | 'night';
  notes?: string;
}

export interface Stack {
  id: string;
  title: string;
  description?: string;
  items: StackItem[];
}

const persistOptions = {
  name: 'stacks',
  getStorage: () => ({
    getItem: SecureStore.getItemAsync,
    setItem: SecureStore.setItemAsync,
    removeItem: SecureStore.deleteItemAsync,
  }),
};

export const useStackStore = create<{
  stacks: Stack[];
  setStacks: (s: Stack[]) => void;
}>(
  persist(
    (set) => ({
      stacks: [],
      setStacks: (s) => set({ stacks: s }),
    }),
    persistOptions
  )
);
