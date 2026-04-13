import type { IngredientItem } from "../types";

type IngId =
  | "potato"
  | "onion"
  | "tomato"
  | "cucumber"
  | "bell_pepper"
  | "chili_pepper"
  | "carrot"
  | "parsley_root"
  | "leek"
  | "garlic"
  | "celery_root"
  | "red_onion"
  | "radish"
  | "beetroot"
  | "lettuce"
  | "lettuce_romaine"
  | "lettuce_iceberg"
  | "chives"
  | "parsley"
  | "spring_onion"
  | "frozen_spinach"
  | "frozen_fries"
  | "frozen_vegetable_mix"
  | "canned_tomatoes"
  | "tomato_puree"
  | "canned_corn"
  | "canned_peas"
  | "canned_red_beans"
  | "pickled_cucumber"
  | "pickled_cucumber_vinegar"
  | "sauerkraut"
  | "fried_onion"
  | "chinese_cabbage"
  | "red_cabbage"
  | "savoy_cabbage"
  | "coleslaw"
  | "cucumber_salad"
  | "corn_salad"
  | "fried_beets"
  | "beets_shredded"
  | "beets_whole_vinegar"
  | "mushrooms"
  | "white_beans";

export const iVEG: Record<IngId, IngredientItem> = {
  potato: {
    name: "Ziemniaki",
    type: "veg",
    subType: "pot",
    color: "#b79268",
    kcalPer100g: 77,
    unitWeights: {
      szt: 150,
    },
    nutrientsPer100g: [0.1, 17, 2],
  },

  frozen_fries: {
    name: "Frytki mrożone",
    type: "veg",
    subType: "frs",
    color: "#fcc419",
    kcalPer100g: 150,
    unitWeights: {
      opak: 1000,
    },
    nutrientsPer100g: [5, 25, 3],
  },

  ///////////////////////////////

  onion: {
    name: "Cebula",
    type: "veg",
    subType: "oni",
    color: "#b79268",
    kcalPer100g: 40,
    unitWeights: {
      szt: 120,
    },
    nutrientsPer100g: [0.1, 9, 1.1],
  },

  tomato: {
    name: "Pomidor",
    type: "veg",
    subType: "tom",
    color: "#f03e3e",
    kcalPer100g: 18,
    unitWeights: {
      szt: 170,
    },
    nutrientsPer100g: [0.2, 3.9, 0.9],
  },

  cucumber: {
    name: "Ogórek zielony",
    type: "veg",
    subType: "cuc",
    kcalPer100g: 16,
    unitWeights: {
      szt: 300,
      plas: 10,
    },
    nutrientsPer100g: [0.1, 3.6, 0.7],
  },

  bell_pepper: {
    name: "Papryka",
    type: "veg",
    subType: "pep",
    color: "#f03e3e",
    kcalPer100g: 31,
    unitWeights: {
      szt: 150,
    },
    nutrientsPer100g: [0.3, 6, 1],
  },

  chili_pepper: {
    name: "Papryczka chili",
    type: "veg",
    subType: "pep",
    color: "#f03e3e",
    kcalPer100g: 40,
    unitWeights: {
      szt: 15,
    },
    nutrientsPer100g: [0.4, 9, 2],
  },

  carrot: {
    name: "Marchew",
    type: "veg",
    subType: "car",
    color: "#f76707",
    kcalPer100g: 41,
    unitWeights: {
      szt: 150,
    },
    nutrientsPer100g: [0.2, 10, 0.9],
  },

  parsley_root: {
    name: "Pietruszka",
    type: "veg",
    subType: "car",
    color: "#ffffff",
    kcalPer100g: 36,
    unitWeights: {
      szt: 100,
    },
    nutrientsPer100g: [0.6, 6.3, 3.3],
  },

  leek: {
    name: "Por",
    type: "veg",
    subType: "lek",
    kcalPer100g: 61,
    unitWeights: {
      szt: 200,
    },
    nutrientsPer100g: [0.3, 14.2, 1.5],
  },

  garlic: {
    name: "Czosnek",
    type: "veg",
    subType: "oni",
    color: "#ffffff",
    kcalPer100g: 149,
    unitWeights: {
      zbk: 5,
    },
    nutrientsPer100g: [0.5, 33, 6.4],
  },

  celery_root: {
    name: "Seler",
    type: "veg",
    subType: "bet",
    color: "#ffffff",
    kcalPer100g: 42,
    unitWeights: {
      szt: 200,
    },
    nutrientsPer100g: [0.3, 9.2, 1.5],
  },

  red_onion: {
    name: "Czerwona cebula",
    type: "veg",
    subType: "oni",
    color: "#a61e4d",
    kcalPer100g: 40,
    unitWeights: {
      szt: 120,
    },
    nutrientsPer100g: [0.1, 9, 1.1],
  },

  radish: {
    name: "Rzodkiewka",
    type: "veg",
    subType: "bet",
    color: "#a61e4d",
    kcalPer100g: 16,
    unitWeights: {
      szt: 20,
      opak: 150,
    },
    nutrientsPer100g: [0.1, 3.4, 0.7],
  },

  beetroot: {
    name: "Burak czerwony",
    type: "veg",
    subType: "bet",
    color: "#a61e4d",
    kcalPer100g: 43,
    unitWeights: {
      szt: 150,
    },
    nutrientsPer100g: [0.2, 10, 1.6],
  },

  ///////////////////////////////

  frozen_vegetable_mix: {
    name: "Mrożona mieszanka warzyw",
    type: "veg",
    kcalPer100g: 40,
    nutrientsPer100g: [0.5, 7, 2.5],
  },

  ///////////////////////////////

  chinese_cabbage: {
    name: "Kapusta pekińska",
    type: "veg",
    subType: "gee",
    kcalPer100g: 16,
    unitWeights: {
      szt: 800,
    },
    nutrientsPer100g: [0.2, 3.2, 1.2],
  },

  red_cabbage: {
    name: "Kapusta czerwona",
    type: "veg",
    subType: "gee",
    color: "#a61e4d",
    kcalPer100g: 31,
    unitWeights: {
      szt: 1000,
    },
    nutrientsPer100g: [0.2, 7.4, 1.4],
  },

  savoy_cabbage: {
    name: "Kapusta włoska",
    type: "veg",
    subType: "gee",
    kcalPer100g: 27,
    unitWeights: {
      szt: 800,
    },
    nutrientsPer100g: [0.1, 6, 2],
  },

  lettuce: {
    name: "Sałata",
    type: "veg",
    subType: "gee",
    kcalPer100g: 15,
    unitWeights: {
      opak: 150,
      szt: 5,
    },
    nutrientsPer100g: [0.2, 2.9, 1.4],
  },

  lettuce_romaine: {
    name: "Sałata rzymska",
    type: "veg",
    subType: "gee",
    kcalPer100g: 17,
    unitWeights: {
      szt: 300,
    },
    nutrientsPer100g: [0.3, 3.3, 1.2],
  },

  lettuce_iceberg: {
    name: "Sałata lodowa",
    type: "veg",
    subType: "gee",
    kcalPer100g: 14,
    unitWeights: {
      szt: 500,
    },
    nutrientsPer100g: [0.1, 3, 1],
  },

  chives: {
    name: "Szczypiorek",
    type: "veg",
    subType: "fhr",
    kcalPer100g: 30,
    unitWeights: {
      lz: 3,
      peto: 50,
    },
    nutrientsPer100g: [0.7, 4.4, 3.3],
  },

  parsley: {
    name: "Natka Pietruszki",
    type: "veg",
    subType: "fhr",
    kcalPer100g: 36,
    unitWeights: {
      peto: 30,
      lst: 1,
    },
    nutrientsPer100g: [0.8, 6.3, 3],
  },

  spring_onion: {
    name: "Cebulka Zielona",
    type: "veg",
    subType: "fhr",
    kcalPer100g: 32,
    unitWeights: {
      peto: 100,
    },
    nutrientsPer100g: [1.8, 7.3, 2.6],
  },

  ///////////////////////////////

  frozen_spinach: {
    name: "Mrożony szpinak",
    type: "veg",
    subType: "spi",
    kcalPer100g: 23,
    unitWeights: {
      opak: 450,
    },
    nutrientsPer100g: [0.4, 3.6, 2.9],
  },

  ///////////////////////////////

  canned_tomatoes: {
    name: "Pomidory z puszki",
    type: "veg",
    subType: "jar",
    color: "#f03e3e",
    kcalPer100g: 21,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [0.2, 4.8, 1.1],
  },

  tomato_puree: {
    name: "Przecier pomidorowy",
    type: "veg",
    subType: "jar",
    color: "#f03e3e",
    kcalPer100g: 38,
    unitWeights: {
      ml: 1,
    },
    nutrientsPer100g: [0.2, 8, 1.6],
  },

  canned_corn: {
    name: "Kukurydza konserwowa",
    type: "veg",
    subType: "jar",
    color: "#fcc419",
    kcalPer100g: 86,
    unitWeights: {
      opak: 200,
    },
    nutrientsPer100g: [1.4, 19, 3.2],
  },

  canned_peas: {
    name: "Groszek konserwowy",
    type: "veg",
    subType: "jar",
    kcalPer100g: 81,
    unitWeights: {
      opak: 250,
    },
    nutrientsPer100g: [0.4, 14, 5],
  },

  canned_red_beans: {
    name: "Fasola czerwona z puszki",
    type: "veg",
    subType: "jar",
    color: "#f03e3e",
    kcalPer100g: 110,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [0.5, 20, 7],
  },

  pickled_cucumber: {
    name: "Ogórek kiszony",
    type: "veg",
    subType: "jar",
    kcalPer100g: 8,
    unitWeights: {
      szt: 60,
    },
    nutrientsPer100g: [0.5, 1, 0.5],
    verified: true,
  },

  pickled_cucumber_vinegar: {
    name: "Ogórek konserwowy",
    type: "veg",
    subType: "jar",
    kcalPer100g: 15,
    unitWeights: {
      szt: 100,
      opak: 500,
    },
    nutrientsPer100g: [0.2, 3, 0.5],
  },

  sauerkraut: {
    name: "Kapusta kiszona",
    type: "veg",
    subType: "jar",
    kcalPer100g: 19,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [0.1, 4.3, 0.9],
  },

  fried_onion: {
    name: "Cebulka prażona",
    type: "veg",
    subType: "jar",
    color: "#b79268",
    kcalPer100g: 590,
    unitWeights: {
      lz: 10,
    },
    nutrientsPer100g: [44, 40, 6],
    verified: true,
  },

  coleslaw: {
    name: "Colesław",
    type: "veg",
    subType: "jar",
    color: "#ffd8a8",
    kcalPer100g: 150,
    unitWeights: {
      opak: 250,
    },
    nutrientsPer100g: [12, 10, 1.5],
  },

  cucumber_salad: {
    name: "Surówka z ogórkiem",
    type: "veg",
    subType: "jar",
    kcalPer100g: 101,
    unitWeights: {
      opak: 300,
    },
    nutrientsPer100g: [5.6, 9.9, 0.8],
  },

  corn_salad: {
    name: "Surówka z kukurydzą",
    type: "veg",
    subType: "jar",
    color: "#ffd8a8",
    kcalPer100g: 95,
    unitWeights: {
      opak: 450,
    },
    nutrientsPer100g: [5.1, 9.5, 1],
  },

  fried_beets: {
    name: "Buraczki zasmażane",
    type: "veg",
    subType: "jar",
    color: "#a61e4d",
    kcalPer100g: 64,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [0.6, 12.4, 1.3],
    verified: true,
  },

  beets_shredded: {
    name: "Buraczki wiórki",
    type: "veg",
    subType: "jar",
    color: "#a61e4d",
    kcalPer100g: 43,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [0.2, 9.6, 1.6],
  },

  beets_whole_vinegar: {
    name: "Buraczki całe z octu",
    type: "veg",
    subType: "jar",
    color: "#a61e4d",
    kcalPer100g: 25,
    unitWeights: {
      szt: 15,
      opak: 500,
    },
    nutrientsPer100g: [0.1, 5.5, 1.2],
  },

  /////////////////////////////////

  mushrooms: {
    name: "Pieczarki",
    type: "veg",
    subType: "msh",
    color: "#ced4da",
    kcalPer100g: 22,
    unitWeights: {
      opak: 250,
    },
    nutrientsPer100g: [0.3, 3.3, 3.1],
  },

  /////////////////////////////////

  white_beans: {
    name: "Fasola biała",
    type: "veg",
    subType: "ben",
    color: "#ffffff",
    kcalPer100g: 333,
    unitWeights: {
      szk: 200,
      opak: 400,
    },
    nutrientsPer100g: [1.2, 60, 21],
  },
};
