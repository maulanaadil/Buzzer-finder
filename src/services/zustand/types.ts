import { BuzzerType } from "../../types/buzzer";

export type BuzzerStoreState = {
  buzzer?: BuzzerType | null;
  search_result?: string;
  setBuzzer: (buzzer: BuzzerType) => void;
  setSearchResult: (search_result: string) => void;
};
