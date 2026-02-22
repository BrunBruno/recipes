import type { IngredientItem } from "../types";

type IngId =
  | "butter"
  | "clarified_butter"
  | "oil"
  | "olive"
  | "lard"
  | "rendered_lard"
  | "margarine";

export const iFAT: Record<IngId, IngredientItem> = {
  butter: {
    name: "Masło",
    type: "fat",
    kcalPer100g: 744,
    unitWeights: {
      kostka: 200,
      łyżka: 14,
    },
    nutrientsPer100g: [82, 0.7, 0.7],
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
      kostka: 200,
    },
  },

  lard: {
    name: "Słonina",
    type: "fat",
    kcalPer100g: 902,
    unitWeights: {
      plaster: 30,
      opak: 250,
    },
  },

  rendered_lard: {
    name: "Smalec",
    type: "fat",
    kcalPer100g: 717,
    unitWeights: {
      łyżka: 14,
      kostka: 200,
    },
  },
};
