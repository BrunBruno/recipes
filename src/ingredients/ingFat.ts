import type { IngredientItem } from "../types";

type IngId =
  | "butter"
  | "clarified_butter"
  | "oil"
  | "olive"
  | "lard"
  | "margarine";

export const iFAT: Record<IngId, IngredientItem> = {
  butter: {
    name: "Masło",
    type: "fat",
    kcalPer100g: 717,
    unitWeights: {
      kostka: 200,
      łyżka: 14,
    },
  },

  clarified_butter: {
    name: "Masło klarowane",
    type: "fat",
    kcalPer100g: 898,
    unitWeights: {
      łyżka: 14,
      opak: 500,
    },
    nutrientsPer100g: [99.8, 0, 0],
  }, //

  oil: {
    name: "Olej",
    type: "fat",
    kcalPer100g: 884,
    unitWeights: {
      łyżka: 10,
      łyżeczka: 4,
      ml: 0.9,
      szklanka: 220,
    },
  },

  olive: {
    name: "Oliwa",
    type: "fat",
    kcalPer100g: 884,
    unitWeights: {
      łyżka: 10,
      ml: 0.9,
    },
  },

  margarine: {
    name: "Margaryna",
    type: "fat",
    kcalPer100g: 717,
    unitWeights: {
      łyżka: 15,
    },
  },

  lard: {
    name: "Smalec",
    type: "fat",
    kcalPer100g: 717,
    unitWeights: {
      łyżka: 14,
    },
  },
};
