import type { DinnerSidesNames } from "./dinnerSides";
import type { IngGroups } from "./ingredientGroups";

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
  | "grn" // grains
  | "bak" // bakery
  | "sau" // sauces
  | "jar" // preserves / frozen
  | "liq" // liquids
  | "snk" // snacks
  | "hrb" // herbs
  | "spc" // spices
  | "oth"; // other / sugars

export type UnitType =
  | "g"
  | "kg"
  | "ml"
  | "l"
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

export type CountryCode =
  | "CHN" // Chiny
  | "DEU" // Germany
  | "CZE" // Czechy
  | "ESP" // Spain
  | "FRA" // Francja
  | "GBR" // United Kingdom
  | "GRC" // Grecja
  | "HUN" // Hungary
  | "IND" // Indie
  | "IDN" // Indonezja
  | "ITA" // Włochy
  | "JPN" // Japonia
  | "KOR" // South Korea
  | "LKA" // Sri Lanka
  | "MEX" // Meksyk
  | "MUS" // Mauritius
  | "POL" // Polska
  | "RUS" // Rosja
  | "SWE" // Szwecja
  | "THA" // Tajlandia
  | "TUR" // Turcja
  | "UKR" // Ukraine
  | "USA" // USA
  | "VNM"; // Vietnam

type MeatKeyWord =
  | "mięso"
  | "kurczak"
  | "wieprzowina"
  | "wołowina"
  | "indyk"
  | "jajka"
  | "boczek"
  | "kiełbasa"
  | "szynka"
  | "parówka"
  | "ryba"
  | "morskie";
type MethodKyWord =
  | "duszone"
  | "smażone"
  | "pieczone"
  | "gotowane"
  | "fast food"
  | "grill";
type OtherKeyWord = "sos" | "fix" | "ser";
type VegetableKeyWord = "grzyby" | "warzywa" | "owoce";
type BaseKeyWord =
  | "ryż"
  | "makaron"
  | "ziemniaki"
  | "kasza"
  | "pieczywo"
  | "kluski"
  | "naleśnik";
type DoughKeyWord = "ciasto" | "biszkopt" | "krem";
type MealKeyWord = "burger" | "zupa" | "deser";

export type KeyWord =
  | MeatKeyWord
  | BaseKeyWord
  | MethodKyWord
  | VegetableKeyWord
  | DoughKeyWord
  | OtherKeyWord
  | MealKeyWord;

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
  group?: IngGroups;
};

export type Ingredient = {
  ing: IngredientItem;
  amount?: number;
  unit?: UnitType;
  exclude?: true; // not count macro - only for display
  invisible?: true; // for counting macro - no display
  replaceable?: true; // default variants
  kw?: true; // keyword item
};

export type IngredientChoice = {
  type: "choice";
  options: Ingredient[];
  selected: number;
};

export type IngredientPlaceholder = {
  type: "placeholder";
  options?: Ingredient[];
  text?: string;
};

export type IngVariants = IngredientChoice | Ingredient | IngredientPlaceholder;

export type RecipeIngredientGroup = {
  title: string;
  isAdd?: boolean;
  items: IngVariants[];
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
  type: MealType;
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
  link?: string;
  country?: CountryCode;
  verified?: true;
  redo?: true;
};

export type DayIngredientPair = [string, number];
export type DayIngredients = {
  breakfast: DayIngredientPair[];
  lunch: DayIngredientPair[];
  dinner: DayIngredientPair[];
};
