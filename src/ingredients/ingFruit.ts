import type { IngredientItem } from "../types";

type IngId =
  | "apple"
  | "pineapple"
  | "raspberries"
  | "olives"
  | "raisins"
  | "lemon_juice"
  | "walnuts"
  | "coconut_flakes";

export const iFRT: Record<IngId, IngredientItem> = {
  apple: {
    name: "Jabłko",
    type: "frt",
    kcalPer100g: 52,
    unitWeights: {
      szt: 150,
    },
    nutrientsPer100g: [0.2, 2.4, 0.4],
  },

  pineapple: {
    name: "Ananas",
    type: "frt",
    kcalPer100g: 50,
    unitWeights: {
      plas: 80,
    },
    nutrientsPer100g: [0.1, 13, 0.5],
  },

  raspberries: {
    name: "Maliny",
    type: "frt",
    kcalPer100g: 52,
    unitWeights: {
      szk: 125,
    },
    nutrientsPer100g: [0.3, 12, 1.1],
  },

  olives: {
    name: "Oliwki",
    type: "frt",
    kcalPer100g: 115,
    unitWeights: {
      szt: 5,
    },
    nutrientsPer100g: [11, 6, 0.8],
  },

  ////////////////////////////////////

  raisins: {
    name: "Rodzynki",
    type: "frt",
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
    kcalPer100g: 21,
    unitWeights: {
      ml: 1,
      lzi: 5,
    },
    nutrientsPer100g: [0, 0.4, 0.1],
    verified: true,
  },

  ////////////////////////////////////

  walnuts: {
    name: "Orzechy włoskie",
    type: "nut",
    kcalPer100g: 654,
    unitWeights: {
      lz: 10,
    },
    nutrientsPer100g: [65, 13, 15],
  },

  coconut_flakes: {
    name: "Wiórki kokosowe",
    type: "nut",
    kcalPer100g: 660,
    unitWeights: {
      lz: 7,
    },
    nutrientsPer100g: [64, 24, 6],
  },
};
