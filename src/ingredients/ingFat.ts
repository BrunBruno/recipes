import type { IngredientItem } from "../types";

type IngId =
  //// FATS ////
  | "oil"
  | "rapeseed_oil"
  | "sunflower_oil"
  | "olive"
  | "olive_oil_extra_virgin"
  | "butter"
  | "clarified_butter"
  | "lard"
  | "rendered_lard"
  | "margarine"
  | "butter_salted"
  | "garlic_butter"
  | "peanut_butter";

export const iFAT: Record<IngId, IngredientItem> = {
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

  rapeseed_oil: {
    name: "Olej rzepakowy",
    type: "fat",
    color: "#F2D16B",
    kcalPer100g: 884,
    unitWeights: {
      lz: 10,
      szk: 220,
    },
    nutrientsPer100g: [100, 0, 0],
  },

  sunflower_oil: {
    name: "Olej słonecznikowy",
    type: "fat",
    color: "#F5C542",
    kcalPer100g: 884,
    unitWeights: {
      lz: 10,
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

  olive_oil_extra_virgin: {
    name: "Oliwa z oliwek extra virgin",
    type: "fat",
    color: "#C9B458",
    kcalPer100g: 884,
    unitWeights: {
      lz: 10,
      szk: 220,
    },
    nutrientsPer100g: [100, 0, 0],
  },

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

  butter_salted: {
    name: "Masło solone",
    type: "fat",
    subType: "but",
    color: "#F7E27E",
    kcalPer100g: 717,
    unitWeights: {
      kst: 200,
      plas: 10,
    },
    nutrientsPer100g: [81, 0.9, 0.9],
  },

  garlic_butter: {
    name: "Masło czosnkowe",
    type: "fat",
    subType: "but",
    color: "#F3E28A",
    kcalPer100g: 720,
    unitWeights: {
      plas: 10,
      opak: 100,
    },
    nutrientsPer100g: [80, 2, 1],
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
