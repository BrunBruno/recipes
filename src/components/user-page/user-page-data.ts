import type { DayIngredientPair, DayMealType } from "../../types";

export interface DayRecord {
  date: string;
  kcal: number;
  protein: number;
  fat: number;
  carbs: number;
}

export const STORAGE_KEY = "day_records";
export const DAY_INGREDIENTS_KEY = "day_ingredients";

export const DUMMY_RECORDS: Record<DayMealType, DayIngredientPair[]> = {
  breakfast: [
    ["Jajko", 120],
    ["Kajzerka", 80],
    ["Masło", 12],
    ["Pomidor", 150],
    ["Twaróg", 100],
    ["Banan", 120],
  ],

  lunch: [
    ["Pierś z kurczaka", 45.5],
    ["Ryż", 180],
    ["Brokuł", 120],
    ["Oliwa", 10],
    ["Marchew", 80],
    ["Jogurt naturalny", 150],
  ],

  dinner: [
    ["Łosoś", 140],
    ["Ziemniaki", 250],
    ["Ogórek zielony", 100],
    ["Sałata", 60],
    ["Ser feta", 50],
    ["Awokado", 70],
  ],
};
