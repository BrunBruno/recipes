import type { IngredientItem } from "../types";

type IngId =
  | "milk"
  | "buttermilk"
  | "condensed_milk"
  | "cream"
  | "cream_18"
  | "cream_22"
  | "cream_30"
  | "cream_36"
  | "cream_cheese"
  | "cream_cheese_horseradish"
  | "mascarpone"
  | "yellow_cheese"
  | "lilliputian_cheese";

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
    kcalPer100g: 40,
    unitWeights: {
      szklanka: 250,
    },
  },

  condensed_milk: {
    name: "Mleko skondensowane",
    type: "dir",
    kcalPer100g: 321,
    unitWeights: {
      opak: 400,
    },
  },

  cream: {
    name: "Śmietana",
    type: "dir",
    kcalPer100g: 200,
    unitWeights: {
      łyżka: 15,
    },
  },

  cream_18: {
    name: "Śmietana 18%",
    type: "dir",
    kcalPer100g: 180,
    unitWeights: {
      ml: 1,
    },
  },

  cream_22: {
    name: "Śmietana 22%",
    type: "dir",
    kcalPer100g: 220,
    unitWeights: {
      ml: 1,
    },
  },

  cream_30: {
    name: "Śmietanka 30%",
    type: "dir",
    kcalPer100g: 340,
    unitWeights: {
      ml: 1,
    },
  },

  cream_36: {
    name: "Śmietanka 36%",
    type: "dir",
    kcalPer100g: 345,
    unitWeights: {
      ml: 1,
    },
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
    kcalPer100g: 430,
    unitWeights: {
      opak: 250,
    },
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
  }, //

  lilliputian_cheese: {
    name: "Ser Liliput",
    type: "che",
    kcalPer100g: 330,
    unitWeights: {
      opak: 350,
      plaster: 90,
    },
  },
};
