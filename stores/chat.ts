import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import * as SecureStore from 'expo-secure-store';

export interface ChatMessage {
  id: string;
  role: 'system' | 'user' | 'assistant';
  content: string;
}

const persistOptions = {
  name: 'chat',
  getStorage: () => ({
    getItem: SecureStore.getItemAsync,
    setItem: SecureStore.setItemAsync,
    removeItem: SecureStore.deleteItemAsync,
  }),
};

export const useChatStore = create<{
  messages: ChatMessage[];
  addMessage: (m: ChatMessage) => void;
}>(
  persist(
    (set, get) => ({
      messages: [],
      addMessage: (m) => set({ messages: [...get().messages, m] }),
    }),
    persistOptions
  )
);
