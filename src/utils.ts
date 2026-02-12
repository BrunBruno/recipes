import type { mealType, Recipe } from "./types";

export const mealTypesData: Record<mealType, { label: string; color: string }> =
  {
    dinner: { label: "Obiad", color: "#f59f00" },
    snack: { label: "Przekąska", color: "#f03e3e" },
    soup: { label: "Zupa", color: "#37b24d" },
    dessert: { label: "Deser", color: "#1c7ed6" },
    salad: { label: "Sałatka", color: "#ae3ec9" },
    other: { label: "Inne", color: "#f76707" },
  };

export const calculateRecipeKcal = (recipe: Recipe): number => {
  const DEFAULT_FAT_GRAMS = 15;

  let totalKcal = 0;

  for (const item of recipe.ingredients) {
    const { ingredient, amount, unit } = item;

    let grams = 0;

    if (!amount) {
      if (ingredient.type === "fat") {
        // grams = DEFAULT_FAT_GRAMS;
        grams = DEFAULT_FAT_GRAMS * recipe.portions;
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
