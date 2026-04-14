import type { IngredientItem } from "../types";

type IngId =
  | "water"
  | "sugar"
  | "powdered_sugar"
  | "vanilla_sugar"
  | "honey"
  | "vanilla_extract"
  | "citric_acid"
  | "baking_powder"
  | "baking_soda"
  | "spirit"
  | "yeast"
  | "instant_yeast"
  | "gelatin"
  | "food_coloring"
  | "rosol";

export const iOTH: Record<IngId, IngredientItem> = {
  //// LIQUIDS ////
  water: {
    name: "Woda",
    type: "oth",
    subType: "wat",
    color: "#64B5F6",
    kcalPer100g: 0,
    unitWeights: {
      ml: 1,
      szk: 250,
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [0, 0, 0],
    verified: true,
  },

  spirit: {
    name: "Spirytus",
    type: "oth",
    subType: "wat",
    color: "#BBDEFB",
    kcalPer100g: 0,
    unitWeights: {
      ml: 1,
      lzi: 5,
      lz: 15,
    },
    nutrientsPer100g: [0, 0, 0],
  },

  vanilla_extract: {
    name: "Ekstrakt waniliowy",
    type: "oth",
    subType: "wat",
    color: "#6D4C41",
    kcalPer100g: 288,
    unitWeights: {
      ml: 1,
      lzi: 5,
    },
    nutrientsPer100g: [0, 12, 0],
  },

  //// SUGARS ////

  sugar: {
    name: "Cukier",
    type: "oth",
    subType: "sug",
    color: "#FAFAFA",
    kcalPer100g: 400,
    unitWeights: {
      lzi: 4,
      lz: 12,
      szk: 250,
    },
    nutrientsPer100g: [0, 100, 0],
    verified: true,
  },

  powdered_sugar: {
    name: "Cukier puder",
    type: "oth",
    subType: "sug",
    color: "#FFFFFF",
    kcalPer100g: 400,
    unitWeights: {
      lzi: 4,
      lz: 12,
      szk: 160,
    },
    nutrientsPer100g: [0, 100, 0],
  },

  vanilla_sugar: {
    name: "Cukier wanilinowy",
    type: "oth",
    subType: "sug",
    color: "#FFF8E1",
    kcalPer100g: 394,
    unitWeights: {
      lz: 12,
      lzi: 4,
      opak: 30,
    },
    nutrientsPer100g: [0, 98, 0],
  },

  honey: {
    name: "Miód",
    type: "oth",
    subType: "hon",
    color: "#F9A825",
    kcalPer100g: 304,
    unitWeights: {
      lzi: 7,
    },
    nutrientsPer100g: [0, 82, 0.3],
  },

  //// OTHER ////

  citric_acid: {
    name: "Kwasek cytrynowy",
    type: "oth",
    color: "#E0F7FA",
    kcalPer100g: 0,
    unitWeights: {
      lzi: 5,
    },
    nutrientsPer100g: [0, 0, 0],
  },

  baking_powder: {
    name: "Proszek do pieczenia",
    type: "oth",
    color: "#F5F5F5",
    kcalPer100g: 53,
    unitWeights: {
      lzi: 5,
    },
    nutrientsPer100g: [0, 28, 0],
  },

  baking_soda: {
    name: "Soda oczyszczona",
    type: "oth",
    color: "#ECEFF1",
    kcalPer100g: 0,
    unitWeights: {
      lzi: 5,
    },
    nutrientsPer100g: [0, 0, 0],
  },

  yeast: {
    name: "Drożdże",
    type: "oth",
    color: "#D7A86E",
    kcalPer100g: 105,
    unitWeights: {
      opak: 7,
      kst: 100,
    },
    nutrientsPer100g: [1, 10, 8],
  },

  instant_yeast: {
    name: "Drożdże błyskawiczne",
    type: "oth",
    color: "#C49A6C",
    kcalPer100g: 325,
    unitWeights: {
      lzi: 3,
      opak: 7,
    },
    nutrientsPer100g: [3, 35, 26],
  },

  gelatin: {
    name: "Żelatyna",
    type: "oth",
    color: "#E0E0E0",
    kcalPer100g: 350,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [0, 0, 85],
  },

  food_coloring: {
    name: "Barwnik spożywczy",
    type: "oth",
    color: "#228be6",
    kcalPer100g: 0,
    unitWeights: {
      ml: 1,
    },
    nutrientsPer100g: [0, 0, 0],
  },

  //

  

  rosol: {
    name: "Rosół",
    type: "oth",
    subType: "sup",
    color: "#FFD54F",
    kcalPer100g: 35,
    unitWeights: {
      ml: 1,
    },
    nutrientsPer100g: [5, 1.5, 1],
  },
};
