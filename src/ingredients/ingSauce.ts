import type { IngredientItem } from "../types";

type IngId =
  | "ketchup"
  | "mustard"
  | "sarepska_mustard"
  | "mayonnaise"
  | "garlic_sauce"
  | "sriracha"
  | "barbecue_sauce"
  | "curry_sauce"
  | "tomato_paste"
  | "sweet_sour_sauce"
  | "sechuan_chili_fusion";

export const iSAU: Record<IngId, IngredientItem> = {
  ketchup: {
    name: "Ketchup",
    type: "sau",
    kcalPer100g: 109,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [0, 25, 1.7],
  }, //

  mustard: {
    name: "Musztarda",
    type: "sau",
    kcalPer100g: 96,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [5.5, 3.1, 5.2],
  }, //

  sarepska_mustard: {
    name: "Musztarda sarepska",
    type: "sau",
    kcalPer100g: 101,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [5.1, 8.3, 3.7],
  }, //

  mayonnaise: {
    name: "Majonez",
    type: "sau",
    kcalPer100g: 631,
    unitWeights: {
      lz: 15,
      lzi: 5,
      opak: 500,
    },
    nutrientsPer100g: [68, 2.3, 1.9],
  }, //

  garlic_sauce: {
    name: "Sos czosnkowy",
    type: "sau",
    kcalPer100g: 371,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [35, 11, 1.9],
  }, //

  sriracha: {
    name: "Sos sriracha",
    type: "sau",
    kcalPer100g: 87,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [0.5, 19, 1.6],
  }, //

  barbecue_sauce: {
    name: "Sos barbecue",
    type: "sau",
    kcalPer100g: 142,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [0.2, 34, 0.8],
  }, //

  curry_sauce: {
    name: "Sos curry",
    type: "sau",
    kcalPer100g: 328,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [28, 18, 1.6],
  }, //

  tomato_paste: {
    name: "Koncentrat pomidorowy",
    type: "sau",
    kcalPer100g: 82,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [0.3, 18, 4],
  },

  // gotowe

  sweet_sour_sauce: {
    name: "Sos słodko-kwaśny",
    type: "sau",
    kcalPer100g: 120,
    unitWeights: {
      opak: 250,
    },
    nutrientsPer100g: [2, 24, 1],
  },

  sechuan_chili_fusion: {
    name: "Seczuański chili fusion",
    type: "sau",
    kcalPer100g: 71,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [0, 18, 1],
  },
};
