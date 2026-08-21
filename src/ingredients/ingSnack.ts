import type { IngredientItem } from "../types";

type IngId =
  //// CHIPS ////
  | "snack_day_paprika"
  | "snack_day_cream"
  | "cheese_snacks"
  | "lays_sweet_pepper"
  | "lays_green_onion"
  | "ready_popcorn"

  //// CHOCOLATE ////
  | "chocolate_white"
  | "chocolate_white_28"
  | "chocolate_milk"
  | "chocolate_dark"
  | "chocolate_dark_80"
  | "chocolate_cream"
  | "nutella"

  //// COOKIES ////
  | "pryncypalki"
  | "ladyfingers"
  | "wafers_cream"
  | "delicje"
  | "milka_choco_cookies"
  | "gingerbread_with_icing"
  | "snickers"
  | "twix"
  | "vanilla_halva"
  | "mini_croissant"

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

  lays_sweet_pepper: {
    name: "Lay's Słodka Papryka",
    type: "snk",
    subType: "bag",
    color: "#E67E22",
    kcalPer100g: 530,
    unitWeights: {
      opak: 130,
    },
    nutrientsPer100g: [33, 52, 6],
  },

  lays_green_onion: {
    name: "Lay's Cebulka Zielona",
    type: "snk",
    subType: "bag",
    color: "#8BC34A",
    kcalPer100g: 530,
    unitWeights: {
      opak: 130,
    },
    nutrientsPer100g: [33, 52, 6],
  },

  ready_popcorn: {
    name: "Popcorn",
    type: "snk",
    subType: "bag",
    color: "#FFF176",
    kcalPer100g: 480,
    unitWeights: {
      opak: 100,
    },
    nutrientsPer100g: [24, 55, 7],
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
    kcalPer100g: 564,
    unitWeights: {
      kst: 5,
      opak: 80,
    },
    nutrientsPer100g: [35, 56, 6.1],
    price: 100,
    verified: true,
  },

  chocolate_white_28: {
    name: "Czekolada biała 28%",
    type: "snk",
    subType: "cho",
    color: "#FFF8E7",
    kcalPer100g: 540,
    unitWeights: {
      kst: 100,
    },
    nutrientsPer100g: [32, 58, 6],
  },

  chocolate_milk: {
    name: "Czekolada mleczna",
    type: "snk",
    subType: "cho",
    color: "#8D6E63",
    kcalPer100g: 535,
    unitWeights: {
      kst: 100,
    },
    nutrientsPer100g: [30, 58, 7],
  },

  chocolate_dark: {
    name: "Gorzka czekolada",
    type: "snk",
    subType: "cho",
    color: "#3E2723",
    kcalPer100g: 555,
    unitWeights: {
      kst: 5,
      opak: 80,
    },
    nutrientsPer100g: [45, 21, 11],
    price: 100,
    verified: true,
  },

  chocolate_dark_80: {
    name: "Gorzka czekolada 80%",
    type: "snk",
    subType: "cho",
    color: "#3E2723",
    kcalPer100g: 555,
    unitWeights: {
      kst: 5,
      opak: 80,
    },
    nutrientsPer100g: [45, 21, 10],
    price: 100,
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
      opak: 235,
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

  gingerbread_with_icing: {
    name: "Pierniczki z lukrem",
    type: "snk",
    subType: "bis",
    color: "#A1887F",
    kcalPer100g: 390,
    unitWeights: {
      opak: 100,
    },
    nutrientsPer100g: [8, 72, 6],
  },

  snickers: {
    name: "Snickers",
    type: "snk",
    subType: "bis",
    color: "#6B3E26",
    kcalPer100g: 489,
    unitWeights: {
      opak: 75,
    },
    nutrientsPer100g: [23, 60, 8.6],
    verified: true,
  },

  twix: {
    name: "Twix",
    type: "snk",
    subType: "bis",
    color: "#C68642",
    kcalPer100g: 493,
    unitWeights: {
      opak: 75,
    },
    nutrientsPer100g: [24, 65, 4.5],
    verified: true,
  },

  vanilla_halva: {
    name: "Chałwa waniliowa",
    type: "snk",
    subType: "bis",
    color: "#F5E6C8",
    kcalPer100g: 520,
    unitWeights: {
      kst: 100,
    },
    nutrientsPer100g: [32, 52, 12],
  },

  mini_croissant: {
    name: "Rogalik",
    type: "snk",
    subType: "bis",
    color: "#D4A373",
    kcalPer100g: 230,
    unitWeights: {
      szt: 48,
      opak: 240,
    },
    nutrientsPer100g: [28.5, 46.9, 7.2],
    price: 29.2,
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

  ////
};
