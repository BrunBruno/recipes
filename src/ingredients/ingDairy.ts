import type { IngredientItem } from "../types";

type IngId =
  | "milk"
  | "buttermilk"
  | "condensed_milk"
  | "yogurt_natural"
  | "cream_12"
  | "cream_18"
  | "cream_30"
  | "cream_36"
  | "cream_cheese"
  | "cream_cheese_horseradish"
  | "mascarpone"
  | "yellow_cheese"
  | "lilliputian_cheese"
  | "parmigiano_reggiano";

export const iDIR: Record<IngId, IngredientItem> = {
  milk: {
    name: "Mleko",
    type: "dir",
    kcalPer100g: 60,
    unitWeights: {
      ml: 1,
      szklanka: 250,
    },
    nutrientsPer100g: [3.2, 4.7, 3.2],
  }, //

  buttermilk: {
    name: "Maślanka",
    type: "dir",
    kcalPer100g: 48,
    unitWeights: {
      szklanka: 250,
    },
    nutrientsPer100g: [1.5, 5, 3.5],
  },

  condensed_milk: {
    name: "Mleko skondensowane",
    type: "dir",
    kcalPer100g: 134,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [7.5, 11, 5.5],
  },

  yogurt_natural: {
    name: "Jogurt naturalny",
    type: "dir",
    kcalPer100g: 61,
    unitWeights: {
      ml: 1,
      opak: 180,
    },
    nutrientsPer100g: [3.5, 4.7, 10],
  },

  cream_12: {
    name: "Śmietana 12%",
    type: "dir",
    kcalPer100g: 136,
    unitWeights: {
      ml: 1,
      łyżka: 15,
    },
    nutrientsPer100g: [12, 4, 3],
  },

  cream_18: {
    name: "Śmietana 18%",
    type: "dir",
    kcalPer100g: 191,
    unitWeights: {
      ml: 1,
      łyżka: 15,
    },
    nutrientsPer100g: [18, 4.8, 2.5],
  },

  cream_30: {
    name: "Śmietanka 30%",
    type: "dir",
    kcalPer100g: 293,
    unitWeights: {
      ml: 1,
      łyżka: 15,
    },
    nutrientsPer100g: [30, 3.4, 2.3],
  }, //

  cream_36: {
    name: "Śmietanka 36%",
    type: "dir",
    kcalPer100g: 344,
    unitWeights: {
      ml: 1,
      łyżka: 15,
    },
    nutrientsPer100g: [36, 3, 2],
  },

  cream_cheese: {
    name: "Serek kremowy",
    type: "dir",
    kcalPer100g: 225,
    unitWeights: {
      opak: 150,
    },
  },

  cream_cheese_horseradish: {
    name: "Serek śmietankowy z chrzanem",
    type: "dir",
    kcalPer100g: 240,
    unitWeights: {
      opak: 200,
    },
  },

  mascarpone: {
    name: "Serek mascarpone",
    type: "dir",
    kcalPer100g: 392,
    unitWeights: {
      opak: 250,
    },
    nutrientsPer100g: [40, 4.9, 3.4],
  },

  yellow_cheese: {
    name: "Ser żółty",
    type: "che",
    kcalPer100g: 348,
    unitWeights: {
      plaster: 20,
      kostka: 250,
      opak: 500,
    },
    nutrientsPer100g: [28, 0, 24],
  },

  lilliputian_cheese: {
    name: "Ser Liliput",
    type: "che",
    kcalPer100g: 343,
    unitWeights: {
      opak: 350,
      plaster: 90,
    },
    nutrientsPer100g: [27, 0, 25],
  },

  parmigiano_reggiano: {
    name: "Ser Parmigiano Reggiano",
    type: "che",
    kcalPer100g: 402,
    unitWeights: {
      plaster: 10,
    },
    nutrientsPer100g: [30, 0, 32],
  },
};
