import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import * as SecureStore from 'expo-secure-store';

export interface Profile {
  id?: string;
  email?: string;
  age?: number;
  gender?: string;
}

const persistOptions = {
  name: 'profile',
  getStorage: () => ({
    getItem: SecureStore.getItemAsync,
    setItem: SecureStore.setItemAsync,
    removeItem: SecureStore.deleteItemAsync,
  }),
};

export const useProfileStore = create<{
  profile: Profile | null;
  setProfile: (p: Profile) => void;
}>(
  persist(
    (set) => ({
      profile: null,
      setProfile: (p) => set({ profile: p }),
    }),
    persistOptions
  )
);
