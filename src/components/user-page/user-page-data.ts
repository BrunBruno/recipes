import type { Recipe } from "../../types";

export interface DayRecord {
  date: string;

  breakfast: string[];
  lunch: string[];
  dinner: string[];

  kcal: number;

  protein: number;
  fat: number;
  carbs: number;
}

export interface MealEntry {
  recipe: Recipe;
  portions: number;
}

export interface IngredientSummary {
  name: string;
  grams: number;
}
