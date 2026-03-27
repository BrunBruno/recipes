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
      kst: 200,
      lzi: 5,
      lz: 14,
    },
    nutrientsPer100g: [82, 0.7, 0.7],
  },

  clarified_butter: {
    name: "Masło klarowane",
    type: "fat",
    kcalPer100g: 898,
    unitWeights: {
      lzi: 5,
      lz: 14,
      opak: 500,
    },
    nutrientsPer100g: [99.8, 0, 0],
  }, //

  oil: {
    name: "Olej",
    type: "fat",
    kcalPer100g: 884,
    unitWeights: {
      lz: 10,
      lzi: 4,
      ml: 0.9,
      szk: 220,
    },
    nutrientsPer100g: [100, 0, 0],
  },

  olive: {
    name: "Oliwa",
    type: "fat",
    kcalPer100g: 884,
    unitWeights: {
      lz: 10,
      lzi: 4,
      ml: 0.9,
      szk: 220,
    },
    nutrientsPer100g: [99, 0, 0],
  },

  margarine: {
    name: "Margaryna",
    type: "fat",
    kcalPer100g: 657,
    unitWeights: {
      lzi: 5,
      lz: 14,
      kst: 200,
    },
    nutrientsPer100g: [73, 0, 0],
  },

  lard: {
    name: "Słonina",
    type: "fat",
    kcalPer100g: 818,
    unitWeights: {
      lzi: 5,
      lz: 14,
      plas: 30,
      opak: 250,
    },
    nutrientsPer100g: [90, 1, 1],
  },

  rendered_lard: {
    name: "Smalec",
    type: "fat",
    kcalPer100g: 900,
    unitWeights: {
      lzi: 5,
      lz: 14,
      kst: 200,
    },
    nutrientsPer100g: [100, 0, 0],
  },
};
