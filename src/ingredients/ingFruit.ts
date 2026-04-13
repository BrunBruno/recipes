import type { IngredientItem } from "../types";

type IngId =
  | "apple"
  | "pineapple"
  | "lime"
  | "lemon"
  | "raspberries"
  | "olives"
  | "avocado"
  | "raisins"
  | "lemon_juice"
  | "lime_juice"
  | "walnuts"
  | "coconut_flakes";

export const iFRT: Record<IngId, IngredientItem> = {
  apple: {
    name: "Jabłko",
    type: "frt",
    color: "#f03e3e",
    kcalPer100g: 52,
    unitWeights: {
      szt: 150,
    },
    nutrientsPer100g: [0.2, 2.4, 0.4],
  },

  pineapple: {
    name: "Ananas",
    type: "frt",
    subType: "ana",
    color: "#fcc419",
    kcalPer100g: 50,
    unitWeights: {
      plas: 80,
    },
    nutrientsPer100g: [0.1, 13, 0.5],
  },

  lime: {
    name: "Limonka",
    type: "frt",
    subType: "cit",
    kcalPer100g: 30,
    unitWeights: {
      szt: 60,
    },
    nutrientsPer100g: [0.2, 11, 0.7],
  },

  lemon: {
    name: "Cytryna",
    type: "frt",
    subType: "cit",
    color: "#fcc419",
    kcalPer100g: 29,
    unitWeights: {
      szt: 120,
    },
    nutrientsPer100g: [0.3, 9, 1.1],
  },

  raspberries: {
    name: "Maliny",
    type: "frt",
    subType: "rbr",
    color: "#a61e4d",
    kcalPer100g: 52,
    unitWeights: {
      szk: 125,
    },
    nutrientsPer100g: [0.3, 12, 1.1],
  },

  olives: {
    name: "Oliwki",
    type: "frt",
    subType: "oli",
    color: "#808000",
    kcalPer100g: 115,
    unitWeights: {
      szt: 5,
    },
    nutrientsPer100g: [11, 6, 0.8],
  },

  avocado: {
    name: "Awokado",
    type: "frt",
    subType: "avc",
    kcalPer100g: 160,
    unitWeights: {
      szt: 250,
    },
    nutrientsPer100g: [15, 9, 2],
  },

  ////////////////////////////////////

  raisins: {
    name: "Rodzynki",
    type: "frt",
    subType: "alm",
    color: "#a61e4d",
    kcalPer100g: 314,
    unitWeights: {
      lz: 10,
    },
    nutrientsPer100g: [0.7, 72, 3],
  },

  ////////////////////////////////////

  lemon_juice: {
    name: "Sok z cytryny",
    type: "frt",
    subType: "jui",
    color: "#fcc419",
    kcalPer100g: 21,
    unitWeights: {
      ml: 1,
      lzi: 5,
    },
    nutrientsPer100g: [0, 0.4, 0.1],
    verified: true,
  },

  lime_juice: {
    name: "Sok z limonki",
    type: "frt",
    subType: "jui",
    kcalPer100g: 25,
    unitWeights: {
      lz: 10,
    },
    nutrientsPer100g: [0.1, 8, 0.4],
  },

  ////////////////////////////////////

  walnuts: {
    name: "Orzechy włoskie",
    type: "frt",
    subType: "nut",
    color: "#b79268",
    kcalPer100g: 654,
    unitWeights: {
      lz: 10,
    },
    nutrientsPer100g: [65, 13, 15],
  },

  coconut_flakes: {
    name: "Wiórki kokosowe",
    type: "frt",
    subType: "nut",
    color: "#ffffff",
    kcalPer100g: 660,
    unitWeights: {
      lz: 7,
    },
    nutrientsPer100g: [64, 24, 6],
  },
};
