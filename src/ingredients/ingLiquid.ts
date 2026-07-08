import type { IngredientItem } from "../types";

type IngId =
  //// LIQUIDS ////
  | "water"
  | "warm_water"
  | "spirit"
  | "vodka"
  | "maple_syrup"
  | "food_coloring"
  | "vanilla_extract"
  | "honey"
  | "maggi"
  | "soy_sauce"

  //// JUICES ////
  | "lemon_juice"
  | "lime_juice"

  //// DECOCTION ////
  | "rosol"
  | "meat_stock";

export const iLIQ: Record<IngId, IngredientItem> = {
  //// LIQUIDS ////
  water: {
    name: "Woda",
    type: "liq",
    color: "#64B5F6",
    kcalPer100g: 0,
    unitWeights: {
      ml: 1,
      szk: 250,
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [0, 0, 0],
    price: 0.01,
    verified: true,
  },

  warm_water: {
    name: "Ciepła woda",
    type: "liq",
    color: "#64B5F6",
    kcalPer100g: 0,
    unitWeights: {
      ml: 1,
      szk: 250,
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [0, 0, 0],
    price: 0.01,
    verified: true,
  },

  spirit: {
    name: "Spirytus",
    type: "liq",
    color: "#BBDEFB",
    kcalPer100g: 657,
    unitWeights: {
      ml: 1,
      lzi: 5,
      lz: 15,
    },
    nutrientsPer100g: [0, 0, 0],
  },

  vodka: {
    name: "Wódka",
    type: "liq",
    color: "#E3F2FD",
    kcalPer100g: 231,
    unitWeights: {
      ml: 1,
      lzi: 5,
      lz: 15,
    },
    nutrientsPer100g: [0, 0, 0],
  },

  vanilla_extract: {
    name: "Ekstrakt waniliowy",
    type: "liq",
    color: "#6D4C41",
    kcalPer100g: 288,
    unitWeights: {
      ml: 1,
      lzi: 5,
    },
    nutrientsPer100g: [0, 12, 0],
  },

  maple_syrup: {
    name: "Syrop klonowy",
    type: "liq",
    color: "#D9A066",
    kcalPer100g: 260,
    unitWeights: {
      lz: 20,
      szk: 320,
    },
    nutrientsPer100g: [0, 67, 0],
  },

  food_coloring: {
    name: "Barwnik spożywczy",
    type: "liq",
    color: "#d6336c",
    kcalPer100g: 0,
    unitWeights: {
      ml: 1,
    },
    nutrientsPer100g: [0, 0, 0],
  },

  maggi: {
    name: "Maggi",
    type: "liq",
    color: "#4F3834",
    kcalPer100g: 16,
    unitWeights: {
      ml: 1,
      lz: 15,
    },
    nutrientsPer100g: [0, 3, 1],
  },

  soy_sauce: {
    name: "Sos sojowy",
    type: "liq",
    color: "#5D4037",
    kcalPer100g: 53,
    unitWeights: {
      ml: 1,
    },
    nutrientsPer100g: [0.6, 4.9, 8],
  },

  honey: {
    name: "Miód",
    type: "liq",
    color: "#F9A825",
    kcalPer100g: 304,
    unitWeights: {
      lzi: 7,
    },
    nutrientsPer100g: [0, 82, 0.3],
  },

  //// JUICES ////
  lemon_juice: {
    name: "Sok z cytryny",
    type: "liq",
    color: "#FFF176",
    kcalPer100g: 21,
    unitWeights: {
      ml: 1,
      lz: 10,
      lzi: 5,
    },
    nutrientsPer100g: [0, 0.4, 0.1],
    verified: true,
  },

  lime_juice: {
    name: "Sok z limonki",
    type: "liq",
    color: "#B2FF59",
    kcalPer100g: 25,
    unitWeights: {
      ml: 1,
      lz: 10,
      lzi: 5,
    },
    nutrientsPer100g: [0.1, 8, 0.4],
  },

  //// DECOCTION ////

  rosol: {
    name: "Rosół",
    type: "liq",
    color: "#FFD54F",
    kcalPer100g: 35,
    unitWeights: {
      ml: 1,
    },
    nutrientsPer100g: [5, 1.5, 1],
  },

  meat_stock: {
    name: "Wywar mięsny",
    type: "liq",
    color: "#BCAAA4",
    kcalPer100g: 45,
    unitWeights: {
      ml: 1,
      szk: 250,
    },
    nutrientsPer100g: [1.2, 0.6, 0.2],
  },
};
