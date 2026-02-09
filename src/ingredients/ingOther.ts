import type { IngredientItem } from "../types";

type IngId =
  | "water"
  | "sugar"
  | "powdered_sugar"
  | "cocoa"
  | "honey"
  | "coffee"
  | "grain_coffee"
  | "baking_powder"
  | "baking_soda"
  | "dark_chocolate"
  | "cheese_snacks"
  | "ladyfingers";

export const iOTH: Record<IngId, IngredientItem> = {
  water: {
    name: "Woda",
    type: "wat",
    kcalPer100g: 0,
    unitWeights: {
      ml: 1,
      szklanka: 250,
    },
    defaultUnit: "ml",
  },

  sugar: {
    name: "Cukier",
    type: "oth",
    kcalPer100g: 400,
    unitWeights: {
      łyżeczka: 4,
      łyżka: 12,
      szklanka: 250,
    },
    nutrientsPer100g: [0, 100, 0],
  }, //

  powdered_sugar: {
    name: "Cukier puder",
    type: "oth",
    kcalPer100g: 400,
    unitWeights: {
      łyżeczka: 5,
      szklanka: 160,
    },
  },

  cocoa: {
    name: "Kakao",
    type: "oth",
    kcalPer100g: 228,
    unitWeights: {
      łyżka: 7.5,
      łyżeczka: 2.5,
    },
  },

  honey: {
    name: "Miód",
    type: "oth",
    kcalPer100g: 304,
    unitWeights: {
      łyżeczka: 7,
    },
  },

  coffee: {
    name: "Kawa",
    type: "oth",
    kcalPer100g: 2,
    unitWeights: {
      łyżka: 5,
    },
  },

  grain_coffee: {
    name: "Kawa zbożowa",
    type: "oth",
    kcalPer100g: 360,
    unitWeights: {
      łyżka: 6,
      łyżeczka: 2,
    },
  },

  baking_powder: {
    name: "Proszek do pieczenia",
    type: "oth",
    kcalPer100g: 53,
    unitWeights: {
      łyżeczka: 5,
    },
  },

  baking_soda: {
    name: "Soda oczyszczona",
    type: "oth",
    kcalPer100g: 0,
    unitWeights: {
      łyżeczka: 5,
    },
  },

  //

  dark_chocolate: {
    name: "Czekolada gorzka",
    type: "oth",
    kcalPer100g: 555,
    unitWeights: {
      kostka: 10,
      opak: 100,
    },
    nutrientsPer100g: [45, 18, 11],
  }, //

  cheese_snacks: {
    name: "Chrupki serowe",
    type: "oth",
    kcalPer100g: 513,
    unitWeights: {
      opak: 130,
    },
    nutrientsPer100g: [28, 58, 5.8],
  }, //

  ladyfingers: {
    name: "Biszkopty",
    type: "grn",
    kcalPer100g: 380,
    unitWeights: {
      opak: 200,
    },
  },
};
