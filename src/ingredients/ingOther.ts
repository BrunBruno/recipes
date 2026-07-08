import type { IngredientItem } from "../types";

type IngId =
  //// SUGARS ////
  | "sugar"
  | "powdered_sugar"
  | "vanilla_sugar"

  //// OTHER ////
  | "citric_acid"
  | "baking_powder"
  | "baking_soda"
  | "yeast"
  | "instant_yeast"
  | "gelatin"
  | "vanilla_pudding"
  | "strawberry_kissel"
  | "lemon_kissel"
  | "raspberry_kissel"
  | "forest_strawberry_kissel"
  | "cherry_kissel"
  | "raspberry_jelly"
  | "lemon_jelly"
  | "none";

export const iOTH: Record<IngId, IngredientItem> = {
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
    kcalPer100g: 398,
    unitWeights: {
      lz: 12,
      lzi: 4,
      opak: 30,
    },
    nutrientsPer100g: [0, 99, 0],
    verified: true,
  },

  //// OTHER ////
  citric_acid: {
    name: "Kwasek cytrynowy",
    type: "oth",
    color: "#E0F7FA",
    kcalPer100g: 0,
    unitWeights: {
      lzi: 5,
      opak: 20,
    },
    nutrientsPer100g: [0, 0, 0],
    verified: true,
  },

  baking_powder: {
    name: "Proszek do pieczenia",
    type: "oth",
    color: "#F5F5F5",
    kcalPer100g: 62,
    unitWeights: {
      lzi: 5,
      opak: 30,
    },
    nutrientsPer100g: [0.3, 13, 1.9],
    verified: true,
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
    verified: true,
  },

  vanilla_pudding: {
    name: "Budyń waniliowy",
    type: "oth",
    color: "#FFF3C4",
    kcalPer100g: 350,
    unitWeights: {
      opak: 40,
    },
    nutrientsPer100g: [1, 80, 0],
  },

  strawberry_kissel: {
    name: "Kisiel truskawkowy",
    type: "oth",
    color: "#F8BBD0",
    kcalPer100g: 350,
    unitWeights: {
      opak: 40,
    },
    nutrientsPer100g: [0, 85, 0],
  },

  lemon_kissel: {
    name: "Kisiel cytrynowy",
    type: "oth",
    color: "#FFF9C4",
    kcalPer100g: 350,
    unitWeights: {
      opak: 40,
    },
    nutrientsPer100g: [0, 85, 0],
  },

  raspberry_kissel: {
    name: "Kisiel malinowy",
    type: "oth",
    color: "#F48FB1",
    kcalPer100g: 350,
    unitWeights: {
      opak: 40,
    },
    nutrientsPer100g: [0, 85, 0],
  },

  forest_strawberry_kissel: {
    name: "Kisiel poziomkowy",
    type: "oth",
    color: "#F8BBD0",
    kcalPer100g: 350,
    unitWeights: {
      opak: 40,
    },
    nutrientsPer100g: [0, 85, 0],
  },

  cherry_kissel: {
    name: "Kisiel wiśniowy",
    type: "oth",
    color: "#D81B60",
    kcalPer100g: 350,
    unitWeights: {
      opak: 40,
    },
    nutrientsPer100g: [0, 85, 0],
  },

  raspberry_jelly: {
    name: "Galaretka malinowa",
    type: "oth",
    color: "#EF9A9A",
    kcalPer100g: 350,
    unitWeights: {
      opak: 75,
    },
    nutrientsPer100g: [0, 85, 8],
  },

  lemon_jelly: {
    name: "Galaretka cytrynowa",
    type: "oth",
    color: "#FFF176",
    kcalPer100g: 350,
    unitWeights: {
      opak: 75,
    },
    nutrientsPer100g: [0, 85, 8],
  },

  none: {
    name: "NIC",
    type: "oth",
    subType: "non",
    kcalPer100g: 0,
    nutrientsPer100g: [0, 0, 0],
    price: 0,
    verified: true,
  },
};
