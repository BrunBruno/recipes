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
  | "radish"
  | "lettuce"
  | "chives"
  | "parsley"
  | "frozen_spinach"
  | "frozen_fries"
  | "frozen_vegetable_mix"
  | "canned_tomatoes"
  | "canned_corn"
  | "canned_peas"
  | "pickled_cucumber"
  | "sauerkraut"
  | "fried_onion"
  | "olives"
  | "coleslaw"
  | "fried_beets"
  | "beets_shredded"
  | "beets_whole_vinegar"
  | "mushrooms";

export const iVEG: Record<IngId, IngredientItem> = {
  potato: {
    name: "Ziemniaki",
    type: "pot",
    kcalPer100g: 77,
    unitWeights: {
      szt: 150,
    },
    nutrientsPer100g: [0.1, 17, 2],
  },

  onion: {
    name: "Cebula",
    type: "veg",
    kcalPer100g: 40,
    unitWeights: {
      szt: 120,
    },
    nutrientsPer100g: [0.1, 9, 1.1],
  },

  tomato: {
    name: "Pomidor",
    type: "veg",
    kcalPer100g: 18,
    unitWeights: {
      szt: 170,
    },
    nutrientsPer100g: [0.2, 3.9, 0.9],
  },

  cucumber: {
    name: "Ogórek zielony",
    type: "veg",
    kcalPer100g: 16,
    unitWeights: {
      szt: 300,
      plaster: 10,
    },
    nutrientsPer100g: [0.1, 3.6, 0.7],
  },

  bell_pepper: {
    name: "Papryka",
    type: "veg",
    kcalPer100g: 31,
    unitWeights: {
      szt: 150,
    },
    nutrientsPer100g: [0.3, 6, 1],
  },

  carrot: {
    name: "Marchew",
    type: "veg",
    kcalPer100g: 41,
    unitWeights: {
      szt: 150,
    },
    nutrientsPer100g: [0.2, 10, 0.9],
  },

  parsley_root: {
    name: "Pietruszka",
    type: "veg",
    kcalPer100g: 36,
    unitWeights: {
      szt: 100,
    },
    nutrientsPer100g: [0.6, 6.3, 3.3],
  },

  leek: {
    name: "Por",
    type: "veg",
    kcalPer100g: 61,
    unitWeights: {
      szt: 200,
    },
    nutrientsPer100g: [0.3, 14.2, 1.5],
  },

  garlic: {
    name: "Czosnek",
    type: "veg",
    kcalPer100g: 149,
    unitWeights: {
      ząbek: 5,
    },
    nutrientsPer100g: [0.5, 33, 6.4],
  },

  celery_root: {
    name: "Seler",
    type: "veg",
    kcalPer100g: 42,
    unitWeights: {
      szt: 200,
    },
    nutrientsPer100g: [0.3, 9.2, 1.5],
  },

  red_onion: {
    name: "Czerwona cebula",
    type: "veg",
    kcalPer100g: 40,
    unitWeights: {
      szt: 120,
    },
    nutrientsPer100g: [0.1, 9, 1.1],
  },

  radish: {
    name: "Rzodkiewka",
    type: "veg",
    kcalPer100g: 16,
    unitWeights: {
      szt: 20,
      opak: 150,
    },
    nutrientsPer100g: [0.1, 3.4, 0.7],
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
    nutrientsPer100g: [0.2, 2.9, 1.4],
  },

  chives: {
    name: "Szczypiorek",
    type: "veg",
    kcalPer100g: 30,
    unitWeights: {
      łyżka: 3,
      pęto: 50,
    },
    nutrientsPer100g: [0.7, 4.4, 3.3],
  },

  parsley: {
    name: "Pietruszka Zielona",
    type: "veg",
    kcalPer100g: 36,
    unitWeights: {
      pęto: 30,
      listek: 1,
    },
    nutrientsPer100g: [0.8, 6.3, 3],
  },

  //

  frozen_spinach: {
    name: "Mrożony szpinak",
    type: "veg",
    kcalPer100g: 23,
    unitWeights: {
      opak: 450,
    },
    nutrientsPer100g: [0.4, 3.6, 2.9],
  },

  frozen_fries: {
    name: "Frytki z piekarnika",
    type: "pot",
    kcalPer100g: 150,
    unitWeights: {
      opak: 1000,
    },
    nutrientsPer100g: [5, 25, 3],
  },

  frozen_vegetable_mix: {
    name: "Mrożona mieszanka warzyw",
    type: "veg",
    kcalPer100g: 40,
    nutrientsPer100g: [0.5, 7, 2.5],
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
    nutrientsPer100g: [0.2, 4.8, 1.1],
  },

  canned_corn: {
    name: "Kukurydza",
    type: "veg",
    kcalPer100g: 86,
    unitWeights: {
      opak: 200,
    },
    nutrientsPer100g: [1.4, 19, 3.2],
  },

  canned_peas: {
    name: "Groszek konserwowy",
    type: "veg",
    kcalPer100g: 81,
    unitWeights: {
      opak: 250,
    },
    nutrientsPer100g: [0.4, 14, 5],
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
    nutrientsPer100g: [0.1, 4.3, 0.9],
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
    nutrientsPer100g: [11, 6, 0.8],
  },

  coleslaw: {
    name: "Colesław",
    type: "veg",
    kcalPer100g: 150,
    unitWeights: {
      opak: 250,
    },
    nutrientsPer100g: [12, 10, 1.5],
  },

  fried_beets: {
    name: "Buraczki zasmażane",
    type: "veg",
    kcalPer100g: 64,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [0.6, 12.4, 1.3],
  }, //

  beets_shredded: {
    name: "Buraczki wiórki",
    type: "veg",
    kcalPer100g: 43,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [0.2, 9.6, 1.6],
  },

  beets_whole_vinegar: {
    name: "Buraczki całe z octu",
    type: "veg",
    kcalPer100g: 25,
    unitWeights: {
      szt: 15,
      opak: 500,
    },
    nutrientsPer100g: [0.1, 5.5, 1.2],
  },

  //

  mushrooms: {
    name: "Pieczarki",
    type: "msh",
    kcalPer100g: 22,
    unitWeights: {
      opak: 250,
    },
    nutrientsPer100g: [0.3, 3.3, 3.1],
  },
};
