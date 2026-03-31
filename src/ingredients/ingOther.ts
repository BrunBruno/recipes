import type { IngredientItem } from "../types";

type IngId =
  | "water"
  | "sugar"
  | "powdered_sugar"
  | "vanilla_sugar"
  | "cocoa"
  | "honey"
  | "vanilla_extract"
  | "coffee"
  | "grain_coffee"
  | "citric_acid"
  | "baking_powder"
  | "baking_soda"
  | "spirit"
  | "yeast"
  | "instant_yeast"
  | "gelatin"
  | "food_coloring"
  | "walnuts"
  | "coconut_flakes"
  | "white_chocolate"
  | "dark_chocolate"
  | "chocolate_cream"
  | "cheese_snacks"
  | "ladyfingers"
  | "rosol";

export const iOTH: Record<IngId, IngredientItem> = {
  water: {
    name: "Woda",
    type: "wat",
    kcalPer100g: 0,
    unitWeights: {
      ml: 1,
      szk: 250,
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [0, 0, 0],
  },

  sugar: {
    name: "Cukier",
    type: "sug",
    kcalPer100g: 400,
    unitWeights: {
      lzi: 4,
      lz: 12,
      szk: 250,
    },
    nutrientsPer100g: [0, 100, 0],
  }, //

  powdered_sugar: {
    name: "Cukier puder",
    type: "sug",
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
    type: "sug",
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
    type: "sug",
    kcalPer100g: 304,
    unitWeights: {
      lzi: 7,
    },
    nutrientsPer100g: [0, 82, 0.3],
  },

  cocoa: {
    name: "Kakao",
    type: "oth",
    kcalPer100g: 228,
    unitWeights: {
      lz: 7.5,
      lzi: 2.5,
    },
    nutrientsPer100g: [13, 20, 20],
  },

  vanilla_extract: {
    name: "Ekstrakt waniliowy",
    type: "oth",
    kcalPer100g: 288,
    unitWeights: {
      ml: 1,
      lzi: 5,
    },
    nutrientsPer100g: [0, 12, 0],
  },

  coffee: {
    name: "Kawa",
    type: "oth",
    kcalPer100g: 2,
    unitWeights: {
      lz: 5,
    },
    nutrientsPer100g: [0, 0.5, 0.1],
  },

  grain_coffee: {
    name: "Kawa zbożowa",
    type: "oth",
    kcalPer100g: 360,
    unitWeights: {
      lz: 6,
      lzi: 2,
    },
    nutrientsPer100g: [0, 86, 0],
  },

  citric_acid: {
    name: "Kwasek cytrynowy",
    type: "oth",
    kcalPer100g: 0,
    unitWeights: {
      lzi: 5,
    },
    nutrientsPer100g: [0, 0, 0],
  },

  baking_powder: {
    name: "Proszek do pieczenia",
    type: "oth",
    kcalPer100g: 53,
    unitWeights: {
      lzi: 5,
    },
    nutrientsPer100g: [0, 28, 0],
  },

  baking_soda: {
    name: "Soda oczyszczona",
    type: "oth",
    kcalPer100g: 0,
    unitWeights: {
      lzi: 5,
    },
    nutrientsPer100g: [0, 0, 0],
  },

  spirit: {
    name: "Spirytus",
    type: "oth",
    kcalPer100g: 0,
    unitWeights: {
      ml: 1,
      lzi: 5,
      lz: 15,
    },
    nutrientsPer100g: [0, 0, 0],
  },

  yeast: {
    name: "Drożdże",
    type: "oth",
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
    kcalPer100g: 350,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [0, 0, 85],
  },

  food_coloring: {
    name: "Barwnik spożywczy",
    type: "oth",
    kcalPer100g: 0,
    unitWeights: {
      ml: 1,
    },
    nutrientsPer100g: [0, 0, 0],
  },

  //

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

  //

  white_chocolate: {
    name: "Biała czekolada",
    type: "oth",
    kcalPer100g: 540,
    unitWeights: {
      opak: 100,
    },
    nutrientsPer100g: [30, 59, 7],
  },

  dark_chocolate: {
    name: "Gorzka czekolada",
    type: "oth",
    kcalPer100g: 555,
    unitWeights: {
      kst: 10,
      opak: 100,
    },
    nutrientsPer100g: [45, 18, 11],
  }, //

  chocolate_cream: {
    name: "Krem czekoladowy",
    type: "oth",
    kcalPer100g: 550,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [34, 56.8, 2.9],
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
    type: "oth",
    kcalPer100g: 380,
    unitWeights: {
      opak: 200,
    },
    nutrientsPer100g: [6, 72, 8],
  },

  rosol: {
    name: "Rosół",
    type: "oth",
    kcalPer100g: 35,
    unitWeights: {
      ml: 1,
    },
    nutrientsPer100g: [5, 1.5, 1],
  },
};
