export type mealType =
  | "dinner"
  | "snack"
  | "soup"
  | "dessert"
  | "salad"
  | "sauce";

export type IngredientType =
  | "met" // meat
  | "fsh" // fish
  | "dir" // diary
  | "fat" // fats
  | "veg" // vegetables
  | "frt" // fruits
  | "grn" // grains
  | "spc" // spices
  | "sau" // sauces
  | "egg" // eggs
  | "che" // cheese
  | "wat" // water
  | "oth";

export type UnitType =
  | "g"
  | "ml"
  | "szt"
  | "łyżka"
  | "łyżeczka"
  | "szklanka"
  | "opak"
  | "kostka"
  | "plaster"
  | "ząbek"
  | "listek"
  | "ziarno"
  | "pęto";

export type Ingredient = {
  name: string;
  amount: number | string | null;
  unit: UnitType | null;
  type: IngredientType;
};

export type Recipe = {
  name: string;
  type: mealType;
  image: string;
  kcal: number;
  portions: number;
  time: number;
  ingredients: Ingredient[];
  steps: string[];
};
