export type mealType = "dinner" | "snack" | "soup" | "dessert";

export type Ingredient = {
  name: string;
  amount?: number | string;
  unit?: string;
};

export type Recipe = {
  name: string;
  type: mealType;
  image: string;
  ingredients: Ingredient[];
  steps: string[];
};
