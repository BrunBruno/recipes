import type { IngredientItem } from "../types";

type IngId =
  //// CHIPS ////
  | "snack_day_paprika"
  | "snack_day_cream"
  | "cheese_snacks"

  //// CHOCOLATE ////
  | "chocolate_white"
  | "chocolate_dark"
  | "chocolate_cream"
  | "nutella"

  //// COOKIES ////
  | "pryncypalki"
  | "ladyfingers"
  | "wafers_cream"
  | "delicje"
  | "milka_choco_cookies"

  //// ICE-CREAM ////
  | "cone_strawberry"
  | "vanilla_ice_cream"
  | "raspberry_sorbet";

export const iSNK: Record<IngId, IngredientItem> = {
  //// CHIPS ////
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

  snack_day_cream: {
    name: "Snack Day Śmietana i Cebula",
    type: "snk",
    subType: "bag",
    color: "#F5E6B3",
    kcalPer100g: 556,
    unitWeights: {
      opak: 175,
    },
    nutrientsPer100g: [35, 55, 3.6],
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

  //// CHOCOLATE ////

  chocolate_white: {
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

  chocolate_dark: {
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

  //// BISCUITS ////

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

  wafers_cream: {
    name: "Wafelki z kremem",
    type: "snk",
    subType: "bis",
    color: "#84563c",
    kcalPer100g: 533,
    unitWeights: {
      szt: 25,
      opak: 250,
    },
    nutrientsPer100g: [31.2, 52.3, 8.1],
    price: 30,
    verified: true,
  },

  delicje: {
    name: "Delicje",
    type: "snk",
    subType: "bis",
    color: "#8B5A2B",
    kcalPer100g: 389,
    unitWeights: {
      szt: 13,
      opak: 147,
    },
    nutrientsPer100g: [7.3, 74.2, 4.4],
  },

  milka_choco_cookies: {
    name: "Milka Choco Cookies",
    type: "snk",
    subType: "bis",
    color: "#6B3F99",
    kcalPer100g: 499,
    unitWeights: {
      szt: 13,
      opak: 135,
    },
    nutrientsPer100g: [25, 62, 6.3],
    price: 52,
    verified: true,
  },

  //// ICE-CREAM ////

  cone_strawberry: {
    name: "Rożek truskawkowy",
    type: "snk",
    subType: "ice",
    color: "#dfb2b2",
    kcalPer100g: 133,
    unitWeights: {
      ml: 0.9,
    },
    nutrientsPer100g: [4, 21, 2],
    price: 12.4,
  },

  vanilla_ice_cream: {
    name: "Lody waniliowe",
    type: "snk",
    subType: "ice",
    color: "#FFF8DC",
    kcalPer100g: 172,
    unitWeights: {
      ml: 0.65,
      opak: 475,
    },
    nutrientsPer100g: [9, 20, 2.5],
  },

  raspberry_sorbet: {
    name: "Sorbet malinowy",
    type: "snk",
    subType: "ice",
    color: "#E57373",
    kcalPer100g: 104,
    unitWeights: {
      ml: 0.9,
      opak: 600,
    },
    nutrientsPer100g: [0.1, 25, 0.4],
  },
};
