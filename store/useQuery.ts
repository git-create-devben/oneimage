import { create } from "zustand";

interface QueryState {
  query: string;
  setQuery: (query: string) => void;
}

export const useQuery = create<QueryState>((set) => ({
  query: "",
  setQuery: (query) => set({ query }),
}));
