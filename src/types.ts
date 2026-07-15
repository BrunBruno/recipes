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
  | "veg" // vegetables / greens / mushrooms
  | "frt" // fruits
  | "nut" // nuts
  | "grn" // grains / bakery
  | "sau" // sauces
  | "jar" // preserves
  | "liq" // liquids
  | "snk" // snacks
  | "hrb" // herbs
  | "spc" // spices
  | "oth"; // other / sugars

export type UnitType =
  | "g" // gram
  | "ml" // mililitr
  | "szt" // sztuka
  | "lz" // łyżka
  | "lzi" // łyżeczka
  | "szk" // szklanka
  | "opak" // opakowanie
  | "kst" // kostka
  | "plas" // plaster
  | "krom" // kromka
  | "zbk" // ząbek
  | "lst" // listel
  | "ziar" // ziarno
  | "peto"; // pęto

export type CookingMethod =
  | "raw" // bez obróbki
  | "boiled" // gotowanie
  | "steamed" // gotowanie na parze
  | "fried" // smażenie
  | "deep-fried" // smażenie w głębokim tłuszczu
  | "baked" // pieczenie
  | "grilled" // grillowanie
  | "stewed" // duszenie
  | "roasted" // pieczenie mięsa/warzyw
  | "microwaved" // mikrofalówka
  | "toasted"
  | "air-fried";

export type KeyWord =
  // MEAT
  | "mięso"
  | "wołowina"
  | "wieprzowina"
  | "kurczak"
  | "indyk"
  | "kiełbasa"
  | "boczek"
  | "parówka"
  | "szynka"

  //
  | "ciasto"
  | "deser"
  | "biszkopt"
  | "makaron"
  | "ryż"
  | "kasza"
  | "ziemniak"
  | "jajko"
  | "naleśnik"
  | "tortilla"
  | "owoce"
  | "warzywa"
  | "sos"
  | "krem"
  | "ser"
  | "sałatka"
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

type CookingMethodEntry =
  | [CookingMethod, number]
  | [CookingMethod, number, number];

export type NonEmptyArray<T> = [T, ...T[]];
export type Recipe = {
  name: string;
  fileName?: string;
  type: MealType;
  cookingMethods: CookingMethodEntry[];
  images: NonEmptyArray<string>;
  portions: number;
  time: number;
  taste: number | null;
  difficulty: number | null;
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
