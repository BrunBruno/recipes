export interface DayRecord {
  date: string;
  kcal: number;
  protein: number;
  fat: number;
  carbs: number;
}

export const STORAGE_KEY = "day_records";
