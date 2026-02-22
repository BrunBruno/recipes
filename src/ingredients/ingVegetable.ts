import type { IngredientItem } from "../types";

type IngId =
  | "potato"
  | "onion"
  | "tomato"
  | "cucumber"
  | "bell_pepper"
  | "carrot"
  | "parsley_root"
  | "leek"
  | "garlic"
  | "celery_root"
  | "red_onion"
  | "lettuce"
  | "chives"
  | "parsley"
  | "frozen_spinach"
  | "canned_tomatoes"
  | "canned_corn"
  | "canned_peas"
  | "pickled_cucumber"
  | "sauerkraut"
  | "fried_onion"
  | "olives"
  | "oven_fries"
  | "coleslaw"
  | "fried_beets"
  | "beets_shredded"
  | "beets_whole_vinegar"
  | "frozen_vegetable_mix"
  | "mushrooms";

export const iVEG: Record<IngId, IngredientItem> = {
  potato: {
    name: "Ziemniaki",
    type: "pot",
    kcalPer100g: 77,
    unitWeights: {
      szt: 150,
    },
  },

  onion: {
    name: "Cebula",
    type: "veg",
    kcalPer100g: 40,
    unitWeights: {
      szt: 120,
    },
  },

  tomato: {
    name: "Pomidor",
    type: "veg",
    kcalPer100g: 18,
    unitWeights: {
      szt: 170,
    },
  },

  cucumber: {
    name: "Ogórek zielony",
    type: "veg",
    kcalPer100g: 16,
    unitWeights: {
      szt: 300,
      plaster: 10,
    },
  },

  bell_pepper: {
    name: "Papryka",
    type: "veg",
    kcalPer100g: 31,
    unitWeights: {
      szt: 150,
    },
  },

  carrot: {
    name: "Marchew",
    type: "veg",
    kcalPer100g: 41,
    unitWeights: {
      szt: 150,
    },
  },

  parsley_root: {
    name: "Pietruszka",
    type: "veg",
    kcalPer100g: 36,
    unitWeights: {
      szt: 100,
    },
  },

  leek: {
    name: "Por",
    type: "veg",
    kcalPer100g: 61,
    unitWeights: {
      szt: 200,
    },
  },

  garlic: {
    name: "Czosnek",
    type: "veg",
    kcalPer100g: 149,
    unitWeights: {
      ząbek: 5,
    },
  },

  celery_root: {
    name: "Seler",
    type: "veg",
    kcalPer100g: 42,
    unitWeights: {
      szt: 200,
    },
  },

  red_onion: {
    name: "Czerwona cebula",
    type: "veg",
    kcalPer100g: 40,
    unitWeights: {
      szt: 120,
    },
  },

  //

  lettuce: {
    name: "Sałata",
    type: "veg",
    kcalPer100g: 15,
    unitWeights: {
      opak: 150,
      szt: 5,
    },
  },

  chives: {
    name: "Szczypiorek",
    type: "veg",
    kcalPer100g: 30,
    unitWeights: {
      łyżka: 3,
      pęto: 50,
    },
  },

  parsley: {
    name: "Pietruszka",
    type: "veg",
    kcalPer100g: 36,
    unitWeights: {
      pęto: 30,
      listek: 1,
    },
  },

  frozen_spinach: {
    name: "Mrożony szpinak",
    type: "veg",
    kcalPer100g: 23,
    unitWeights: {
      opak: 450,
    },
  },

  //

  canned_tomatoes: {
    name: "Pomidory z puszki",
    type: "veg",
    kcalPer100g: 21,
    unitWeights: {
      ml: 1,
      opak: 400,
    },
  },

  canned_corn: {
    name: "Kukurydza",
    type: "veg",
    kcalPer100g: 86,
    unitWeights: {
      opak: 200,
    },
  },

  canned_peas: {
    name: "Groszek konserwowy",
    type: "veg",
    kcalPer100g: 81,
    unitWeights: {
      opak: 250,
    },
  },

  pickled_cucumber: {
    name: "Ogórek kiszony",
    type: "veg",
    kcalPer100g: 8,
    unitWeights: {
      szt: 60,
    },
    nutrientsPer100g: [0.5, 1, 0.5],
  }, //

  sauerkraut: {
    name: "Kapusta kiszona",
    type: "veg",
    kcalPer100g: 19,
    unitWeights: {
      opak: 400,
    },
  },

  fried_onion: {
    name: "Cebulka prażona",
    type: "veg",
    kcalPer100g: 590,
    unitWeights: {
      łyżka: 10,
    },
    nutrientsPer100g: [44, 40, 6],
  }, //

  olives: {
    name: "Oliwki",
    type: "veg",
    kcalPer100g: 115,
    unitWeights: {
      szt: 5,
    },
  },

  oven_fries: {
    name: "Frytki z piekarnika",
    type: "pot",
    kcalPer100g: 150,
    unitWeights: {
      opak: 1000,
    },
  },

  coleslaw: {
    name: "Colesław",
    type: "veg",
    kcalPer100g: 150,
    unitWeights: {
      opak: 250,
    },
  },

  fried_beets: {
    name: "Buraczki zasmażane",
    type: "veg",
    kcalPer100g: 64,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [0.6, 12.4, 1.3],
  },

  beets_shredded: {
    name: "Buraczki wiórki",
    type: "veg",
    kcalPer100g: 43,
    unitWeights: {
      opak: 500,
    },
  },

  beets_whole_vinegar: {
    name: "Buraczki całe z octu",
    type: "veg",
    kcalPer100g: 25,
    unitWeights: {
      szt: 15,
      opak: 500,
    },
  },

  frozen_vegetable_mix: {
    name: "Mrożona mieszanka warzyw",
    type: "veg",
    kcalPer100g: 40,
  },

  //

  mushrooms: {
    name: "Pieczarki",
    type: "msh",
    kcalPer100g: 22,
    unitWeights: {
      opak: 250,
    },
  },
};
