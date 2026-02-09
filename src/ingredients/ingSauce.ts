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
  | "tomato_passata"
  | "winiary_sweet_sour_sauce";

export const iSAU: Record<IngId, IngredientItem> = {
  ketchup: {
    name: "Ketchup",
    type: "sau",
    kcalPer100g: 109,
    unitWeights: {
      łyżka: 15,
      łyżeczka: 5,
    },
    nutrientsPer100g: [0, 25, 1.7],
  }, //

  mustard: {
    name: "Musztarda",
    type: "sau",
    kcalPer100g: 96,
    unitWeights: {
      łyżka: 15,
      łyżeczka: 5,
    },
    nutrientsPer100g: [5.5, 3.1, 5.2],
  }, //

  sarepska_mustard: {
    name: "Musztarda sarepska",
    type: "sau",
    kcalPer100g: 101,
    unitWeights: {
      łyżka: 15,
      łyżeczka: 5,
    },
    nutrientsPer100g: [5.1, 8.3, 3.7],
  }, //

  mayonnaise: {
    name: "Majonez",
    type: "sau",
    kcalPer100g: 631,
    unitWeights: {
      łyżka: 15,
      łyżeczka: 5,
      opak: 500,
    },
    nutrientsPer100g: [68, 2.3, 1.9],
  }, //

  garlic_sauce: {
    name: "Sos czosnkowy",
    type: "sau",
    kcalPer100g: 371,
    unitWeights: {
      łyżka: 15,
      łyżeczka: 5,
    },
    nutrientsPer100g: [35, 11, 1.9],
  }, //

  sriracha: {
    name: "Sos sriracha",
    type: "sau",
    kcalPer100g: 87,
    unitWeights: {
      łyżka: 15,
      łyżeczka: 5,
    },
    nutrientsPer100g: [0.5, 19, 1.6],
  }, //

  barbecue_sauce: {
    name: "Sos barbecue",
    type: "sau",
    kcalPer100g: 142,
    unitWeights: {
      łyżka: 15,
      łyżeczka: 5,
    },
    nutrientsPer100g: [0.2, 34, 0.8],
  }, //

  curry_sauce: {
    name: "Sos curry",
    type: "sau",
    kcalPer100g: 328,
    unitWeights: {
      łyżka: 15,
      łyżeczka: 5,
    },
    nutrientsPer100g: [28, 18, 1.6],
  }, //

  tomato_paste: {
    name: "Koncentrat pomidorowy",
    type: "sau",
    kcalPer100g: 82,
    unitWeights: {
      łyżka: 15,
      łyżeczka: 5,
    },
  },

  tomato_passata: {
    name: "Przecier pomidorowy",
    type: "sau",
    kcalPer100g: 29,
    unitWeights: {
      ml: 1,
      łyżka: 15,
      łyżeczka: 5,
      opak: 500,
    },
  },

  // gotowe

  winiary_sweet_sour_sauce: {
    name: "Sos słodko-kwaśny Winiary",
    type: "sau",
    kcalPer100g: 120,
    unitWeights: {
      opak: 250,
    },
  },
};
