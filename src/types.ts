// iMET, iDIR, iFAT, iGRN, iVEG, iSAU, iSPC, iOTH

export type mealType =
  | "dinner"
  | "snack"
  | "soup"
  | "dessert"
  | "salad"
  | "other";

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
  | "msh" // mushroom
  | "pot" // potatoes
  | "nut" // orzechy
  | "hrb" // herbs
  | "jar" // preserves
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
  | "kromka"
  | "ząbek"
  | "listek"
  | "ziarno"
  | "pęto";

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
  nutrientsPer100g?: [number, number, number]; // fat-carb-prot
};

export type Ingredient = {
  ingredient: IngredientItem;
  amount?: number | string;
  unit?: UnitType;
};

export type RecipeIngredientGroup = {
  title: string;
  items: Ingredient[];
  excludeFromCalc?: boolean;
};

export type RecipeStepGroup = {
  title: string;
  steps: string[];
};

export type Recipe = {
  name: string;
  type: mealType;
  images: string[];
  portions: number;
  time: number;
  ingredients: RecipeIngredientGroup[];
  steps: RecipeStepGroup[];
  keyWords?: KeyWord[];
};
