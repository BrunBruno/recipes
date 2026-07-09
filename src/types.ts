import type { DinnerSidesNames } from "./dinnerSides";

export type DayMealType = "breakfast" | "lunch" | "dinner";
export type MealType =
  | "breakfast"
  | "dinner"
  | "soup"
  | "dessert"
  | "snack"
  | "salad"
  | "other";

export type IngredientType =
  | "met" // meats / eggs
  | "fsh" // fishes
  | "dir" // diary
  | "fat" // fats
  | "veg" // vegetables / greens  / mushrooms
  | "frt" // fruits / nuts
  | "nut" // nuts
  | "grn" // grains / bakery
  | "sau" // sauces
  | "jar" // preserves
  | "liq" // liquids
  | "snk" // snacks
  | "hrb" // herbs
  | "spc" // spices
  | "oth"; // other / sugars / water

export type UnitType =
  | "g"
  | "ml"
  | "szt"
  | "lz"
  | "lzi"
  | "szk"
  | "opak"
  | "kst"
  | "plas"
  | "krom"
  | "zbk"
  | "lst"
  | "ziar"
  | "peto";

export type KeyWord =
  | "ciasto"
  | "deser"
  | "biszkopt"
  | "wołowina"
  | "wieprzowina"
  | "kurczak"
  | "makaron"
  | "ryż"
  | "ziemniak"
  | "jajko"
  | "naleśnik"
  | "owoce"
  | "warzywa"
  | "sos"
  | "krem"
  | "ser"
  | "sałatka"
  | "indyk"
  | "pieczywo"
  | "ryba"
  | "zupa";

export type IngredientItem = {
  name: string;
  type: IngredientType;
  subType?: string;
  color?: string;
  kcalPer100g: number;
  unitWeights?: Partial<Record<UnitType, number>>;
  nutrientsPer100g: [number, number, number]; // fat-carb-prot
  isVeg?: true; // is frt or veg
  price?: number; // zl/kg
  verified?: boolean;
};

export type Ingredient = {
  ing: IngredientItem;
  amount?: number;
  unit?: UnitType;
  exclude?: boolean;
  invisible?: boolean;
};

export type IngredientChoice = {
  type: "choice";
  options: Ingredient[];
  selected: number;
};

export type RecipeIngredientGroup = {
  title: string;
  isMain?: boolean;
  isAdd?: boolean;
  items: (IngredientChoice | Ingredient)[];
  // items: Ingredient[];
};

export type ExtrasIngredientGroup = {
  title: string;
  sideName: DinnerSidesNames;
  items: Ingredient[];
};

export type ExtrasIngredientOptions = {
  options: ExtrasIngredientGroup[];
  selected: number;
};

export type RecipeStepGroup = {
  title: string;
  steps: string[];
};

export type NonEmptyArray<T> = [T, ...T[]];
export type Recipe = {
  name: string;
  fileName?: string;
  description: string;
  type: MealType;
  images: NonEmptyArray<string>;
  portions: number;
  time: number;
  executionDifficulty: number | null;
  ingredients: RecipeIngredientGroup[];
  extrasMain?: ExtrasIngredientOptions;
  extrasVeg?: ExtrasIngredientOptions;
  steps: RecipeStepGroup[];
  keyWords?: KeyWord[];
};

export type DayIngredientPair = [string, number];
export type DayIngredients = {
  breakfast: DayIngredientPair[];
  lunch: DayIngredientPair[];
  dinner: DayIngredientPair[];
};
