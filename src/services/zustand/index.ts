import create from "zustand";
import { BuzzerType } from "../../types/buzzer";

import { BuzzerStoreState } from "./types";

export const useBuzzerStore = create<BuzzerStoreState>((set) => ({
  buzzer: null,
  search_result: "",
  setBuzzer: (buzzer: BuzzerType) => set({ buzzer }),
  setSearchResult: (search_result: string) => set({ search_result }),
}));
