import type { IngredientType, mealType, Recipe } from "./types";

export const mealTypesData: Record<mealType, { label: string; color: string }> =
  {
    dinner: { label: "Obiad", color: "#f59f00" },
    snack: { label: "Przekąska", color: "#f03e3e" },
    soup: { label: "Zupa", color: "#37b24d" },
    dessert: { label: "Deser", color: "#1c7ed6" },
    salad: { label: "Sałatka", color: "#ae3ec9" },
    other: { label: "Inne", color: "#f76707" },
  };

export const ingredientTypeLabels: Record<IngredientType, string> = {
  met: "Mięso",
  fsh: "Ryby",
  dir: "Nabiał",
  fat: "Tłuszcze",
  veg: "Warzywa",
  frt: "Owoce",
  grn: "Zboża",
  spc: "Przyprawy",
  sau: "Sosy",
  egg: "Jajka",
  che: "Sery",
  wat: "Woda",
  msh: "Grzyby",
  pot: "Ziemniaki",
  nut: "Orzechy",
  hrb: "Zioła",
  oth: "Inne",
};

export const calculateRecipeKcal = (recipe: Recipe): number => {
  const DEFAULT_FAT_GRAMS = 15;

  let totalKcal = 0;

  for (const group of recipe.ingredients) {
    if (group.excludeFromCalc) continue;

    for (const item of group.items) {
      const { ingredient, amount, unit } = item;

      let grams = 0;
      let value = amount;

      if (typeof amount === "string") {
        if (amount.includes("×")) {
          const parts = amount.split("×").map(Number);
          value = parts.reduce((a, b) => a * b, 1);
        } else if (amount.includes("-")) {
          const parts = amount.split("-").map(Number);
          value = parts.reduce((a, b) => a + b, 0) / parts.length;
        } else {
          console.warn(`Incorrect amount ${amount}`);
          continue;
        }
      }

      if (!value || typeof value === "string") {
        if (ingredient.type === "fat")
          grams = DEFAULT_FAT_GRAMS * recipe.portions; // ???
        else continue;
      } else {
        if (!unit && ingredient.defaultUnit) {
          const weight = ingredient.unitWeights?.[ingredient.defaultUnit];
          if (weight !== undefined) {
            grams = value * weight;
          } else {
            console.warn(`No ${ingredient.defaultUnit} for ${ingredient.name}`);
            grams = value;
          }
        } else if (!unit) {
          grams = value;
        } else if (ingredient.unitWeights?.[unit]) {
          grams = value * ingredient.unitWeights[unit];
        } else {
          if (unit !== "g")
            console.warn(`No unit ${unit} for ${ingredient.name}`);
          grams = value;
        }
      }

      totalKcal += (grams / 100) * ingredient.kcalPer100g;
    }
  }

  return Math.round(recipe.portions ? totalKcal / recipe.portions : totalKcal);
};
