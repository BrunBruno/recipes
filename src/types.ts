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
  | "liść"
  | "listek"
  | "ziarno"
  | "pęto";

type KeyWord =
  | "ciasto"
  | "deser"
  | "biszkopt"
  | "czekolada"
  | "wanilia"
  | "mięso"
  | "wołowina"
  | "wieprzowina"
  | "schab"
  | "kurczak"
  | "drób"
  | "makaron"
  | "spaghetti"
  | "ryż"
  | "jajko"
  | "naleśnik"
  | "tortilla"
  | "ziemniak"
  | "owoce"
  | "warzywa"
  | "sos"
  | "krem"
  | "ser"
  | "zupa"
  | "tost"
  | "sałatka"
  //
  | "fast food"
  | "słodkie"
  | "gotowane"
  | "duszone"
  | "smażone"
  | "pieczone"
  | "grillowane"
  | "panierowane"
  | "piekarnik"
  | "mikrofala"
  | "azjatyckie"
  | "włoskie";

export type IngredientItem = {
  name: string;
  type: IngredientType;
  kcalPer100g: number;
  unitWeights?: Partial<Record<UnitType, number>>;
  defaultUnit?: UnitType;
  nutrientsPer100g?: [number, number, number]; // fat-carb-prot
};

export type Ingredient = {
  ingredient: IngredientItem;
  amount?: number | string;
  unit?: UnitType;
};

export type RecipeStepGroup = {
  title: string;
  steps: string[];
};

export type Recipe = {
  name: string;
  type: mealType;
  image: string;
  portions: number;
  time: number;
  ingredients: Ingredient[];
  // steps: string[] | RecipeStepGroup[];
  steps: RecipeStepGroup[];
  keyWords?: KeyWord[];
};
