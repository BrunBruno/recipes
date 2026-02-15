import type { IngredientItem } from "../types";

type IngId = "apple" | "pineapple" | "raspberries" | "raisins" | "lemon_juice";

export const iFRT: Record<IngId, IngredientItem> = {
  apple: {
    name: "Jabłko",
    type: "frt",
    kcalPer100g: 52,
    unitWeights: {
      szt: 150,
    },
  },

  pineapple: {
    name: "Ananas",
    type: "frt",
    kcalPer100g: 50,
    unitWeights: {
      plaster: 80,
    },
  },

  raspberries: {
    name: "Maliny",
    type: "frt",
    kcalPer100g: 52,
    unitWeights: {
      szklanka: 125,
    },
  },

  //

  raisins: {
    name: "Rodzynki",
    type: "frt",
    kcalPer100g: 299,
    unitWeights: {
      łyżka: 10,
    },
  },

  //

  lemon_juice: {
    name: "Sok z cytryny",
    type: "frt",
    kcalPer100g: 25,
    unitWeights: {
      ml: 1,
      łyżeczka: 5,
    },
    defaultUnit: "ml",
  },
};
