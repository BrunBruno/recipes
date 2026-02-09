// iMET, iDIR, iFAT, iGRN, iVEG, iSAU, iSPC, iOTH

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
  | "msh" // mushroom
  | "pot" // potatoes
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
  kcal: number;
  portions: number;
  time: number;
  ingredients: Ingredient[];
  steps: string[] | RecipeStepGroup[];
};

export const calculateRecipeKcal = (recipe: Recipe): number => {
  const DEFAULT_FAT_GRAMS = 15;

  let totalKcal = 0;

  for (const item of recipe.ingredients) {
    const { ingredient, amount, unit } = item;

    let grams = 0;

    if (!amount) {
      if (ingredient.type === "fat") {
        grams = DEFAULT_FAT_GRAMS;
      } else {
        continue;
      }
    } else if (typeof amount === "string") {
      const parts = amount.split("-").map(Number);
      const avg = parts.reduce((a, b) => a + b, 0) / parts.length;

      if (unit && ingredient.unitWeights?.[unit]) {
        grams = avg * ingredient.unitWeights[unit]!;
      } else if (!unit || unit === "g") {
        grams = avg;
      } else {
        console.warn(
          `No unit ${unit} for ${ingredient.name}, using amount as grams`,
        );
        grams = avg;
      }
    } else {
      if (!unit || unit === "g") {
        grams = amount;
      } else if (ingredient.unitWeights?.[unit]) {
        grams = amount * ingredient.unitWeights[unit];
      } else {
        console.warn(
          `No unit ${unit} for ${ingredient.name}, using amount as grams`,
        );
        grams = amount;
      }
    }

    totalKcal += (grams / 100) * ingredient.kcalPer100g;
  }

  return Math.round(recipe.portions ? totalKcal / recipe.portions : totalKcal);
};
