// iMET, iDIR, iFAT, iGRN, iVEG, iSPC, iOTH

export type MealType =
  | "dinner"
  | "snack"
  | "soup"
  | "dessert"
  | "salad"
  | "other";

export type IngredientType =
  // iMET
  | "met" // meat
  | "pou" // drób
  | "fsh" // fish
  | "egg" // eggs

  // iDIR
  | "dir" // diary
  | "che" // cheese

  // iFAT
  | "fat" // fats

  // iVEG
  | "veg" // vegetables
  | "gee" // greens
  | "jar" // preserves
  | "msh" // mushroom
  | "pot" // potatoes

  // iFRT
  | "frt" // fruits
  | "nut" // orzechy

  // iGRN
  | "grn" // grains
  | "bun" // baking

  // iSPC
  | "spc" // spices
  | "hrb" // herbs
  | "sau" // sauces

  // iOTH
  | "wat" // water
  | "sug" // sugars
  | "oth";

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
  | "xxx"
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
  kcalPer100g: number;
  unitWeights?: Partial<Record<UnitType, number>>;
  nutrientsPer100g: [number, number, number]; // fat-carb-prot
  verified?: boolean;
};

export type Ingredient = {
  ingredient: IngredientItem;
  amount?: number | string;
  unit?: UnitType;
  excludeFromCalc?: boolean;
  invisible?: boolean;
};

export type RecipeIngredientGroup = {
  title: string;
  items: Ingredient[];
};

export type RecipeStepGroup = {
  title: string;
  steps: string[];
};

export type Recipe = {
  name: string;
  description: string;
  type: MealType;
  images: string[];
  portions: number;
  time: number;
  ingredients: RecipeIngredientGroup[];
  steps: RecipeStepGroup[];
  keyWords?: KeyWord[];
};
