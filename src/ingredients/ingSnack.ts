import type { IngredientItem } from "../types";

type IngId =
  //// CHIPS ////
  | "snack_day_paprika"
  | "cheese_snacks"

  //// CHOCOLATE ////
  | "white_chocolate"
  | "dark_chocolate"
  | "chocolate_cream"
  | "nutella"
  | "pryncypalki"

  //// COOKIES ////
  | "ladyfingers";

export const iSNK: Record<IngId, IngredientItem> = {
  snack_day_paprika: {
    name: "Snack Day Papryka",
    type: "snk",
    subType: "bag",
    color: "#D32F2F",
    kcalPer100g: 551,
    nutrientsPer100g: [34, 56, 3.5],
    unitWeights: {
      opak: 175,
    },
    price: 40,
    verified: true,
  },

  cheese_snacks: {
    name: "Chrupki serowe",
    type: "snk",
    subType: "bag",
    color: "#FFCA28",
    kcalPer100g: 513,
    unitWeights: {
      opak: 130,
    },
    nutrientsPer100g: [28, 58, 5.8],
    verified: true,
  },

  ////

  white_chocolate: {
    name: "Biała czekolada",
    type: "snk",
    subType: "cho",
    color: "#FFFDE7",
    kcalPer100g: 540,
    unitWeights: {
      opak: 100,
    },
    nutrientsPer100g: [30, 59, 7],
  },

  dark_chocolate: {
    name: "Gorzka czekolada",
    type: "snk",
    subType: "cho",
    color: "#3E2723",
    kcalPer100g: 555,
    unitWeights: {
      kst: 10,
      opak: 100,
    },
    nutrientsPer100g: [45, 18, 11],
    verified: true,
  },

  chocolate_cream: {
    name: "Krem czekoladowy",
    type: "snk",
    subType: "cho",
    color: "#6D4C41",
    kcalPer100g: 550,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [34, 56.8, 2.9],
    verified: true,
  },

  nutella: {
    name: "Nutella",
    type: "snk",
    subType: "cho",
    color: "#5A3A2E",
    kcalPer100g: 539,
    unitWeights: {
      lz: 15,
      szk: 300,
    },
    nutrientsPer100g: [31, 57, 6],
  },

  ////

  pryncypalki: {
    name: "Pryncypałki",
    type: "snk",
    subType: "bis",
    color: "#8B4513",
    kcalPer100g: 553,
    unitWeights: {
      szt: 33,
    },
    nutrientsPer100g: [32, 60, 5.1],
    price: 29,
    verified: true,
  },

  ladyfingers: {
    name: "Biszkopty",
    type: "snk",
    subType: "bis",
    color: "#E6B98C",
    kcalPer100g: 380,
    unitWeights: {
      opak: 200,
    },
    nutrientsPer100g: [6, 72, 8],
  },
};
