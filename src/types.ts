export type MealType =
  | "dinner"
  | "snack"
  | "soup"
  | "dessert"
  | "salad"
  | "other";

export type IngredientType =
  | "met" // meats / fishes / eggs
  | "dir" // diary / cheese
  | "fat" // fats / butter
  | "veg" // vegetables / greens / fresh herbs / mushrooms
  | "frt" // fruits / nuts
  | "grn" // grains / bakery
  | "spc" // spices
  | "jar" // preserves / juices / sauces
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
  verified?: boolean;
};

export type Ingredient = {
  ing: IngredientItem;
  amount?: number | string;
  unit?: UnitType;
  exclude?: boolean;
  invisible?: boolean;
  alt?: boolean;
};

export type RecipeIngredientGroup = {
  title: string;
  items: Ingredient[];
};

export type RecipeStepGroup = {
  title: string;
  steps: string[];
};

export type NonEmptyArray<T> = [T, ...T[]];
export type Recipe = {
  name: string;
  description: string;
  type: MealType;
  images: NonEmptyArray<string>;
  portions: number;
  time: number;
  executionDifficulty: number | null;
  ingredients: RecipeIngredientGroup[];
  steps: RecipeStepGroup[];
  keyWords?: KeyWord[];
};
