import type { IngredientItem } from "../types";

type IngId = "apple";

export const iFRT: Record<IngId, IngredientItem> = {
  apple: {
    name: "Jabłka",
    type: "frt",
    kcalPer100g: 52,
    unitWeights: {
      szt: 150,
    },
  },
};
