import type { IngredientItem } from "../types";

type IngId =
  | "butter"
  | "clarified_butter"
  | "oil"
  | "olive"
  | "lard"
  | "rendered_lard"
  | "margarine"
  | "peanut_butter";

export const iFAT: Record<IngId, IngredientItem> = {
  butter: {
    name: "Masło",
    type: "fat",
    subType: "but",
    color: "#F6E27A",
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
    subType: "but",
    color: "#FFD54F",
    kcalPer100g: 898,
    unitWeights: {
      lzi: 5,
      lz: 14,
      opak: 500,
    },
    nutrientsPer100g: [99.8, 0, 0],
    verified: true,
  },

  oil: {
    name: "Olej",
    type: "fat",
    color: "#E6C65B",
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
    color: "#556B2F",
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
    subType: "but",
    color: "#FFF176",
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
    subType: "but",
    color: "#F5E6D3",
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
    subType: "but",
    color: "#EED9C4",
    kcalPer100g: 900,
    unitWeights: {
      lzi: 5,
      lz: 14,
      kst: 200,
    },
    nutrientsPer100g: [100, 0, 0],
  },

  peanut_butter: {
    name: "Masło orzechowe",
    type: "fat",
    subType: "but",
    color: "#C68642",
    kcalPer100g: 588,
    unitWeights: {
      lz: 16,
      szk: 250,
    },
    nutrientsPer100g: [50, 20, 25],
  },
};
