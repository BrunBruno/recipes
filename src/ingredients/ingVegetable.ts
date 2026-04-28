import type { IngredientItem } from "../types";

type IngId =
  //// VEGETABLES ////
  | "potato"
  | "onion"
  | "tomato"
  | "cherry_tomato"
  | "roma_tomato"
  | "cucumber"
  | "bell_pepper"
  | "chili_pepper"
  | "red_bell_pepper"
  | "yellow_bell_pepper"
  | "green_bell_pepper"
  | "carrot"
  | "baby_carrot"
  | "parsley_root"
  | "leek"
  | "garlic"
  | "celery_root"
  | "red_onion"
  | "radish"
  | "beetroot"
  | "kohlrabi"
  | "corn"

  //// GREENS ////
  | "chives"
  | "parsley"
  | "spring_onion"
  | "lettuce"
  | "lettuce_romaine"
  | "lettuce_iceberg"
  | "lettuce_butter"
  | "chinese_cabbage"
  | "red_cabbage"
  | "savoy_cabbage"
  | "brussels_sprouts"
  | "cauliflower"
  | "broccoli"

  //// BEANS ////
  | "white_beans"
  | "green_beans"
  | "red_beans"

  //// MUSHROOMS ////
  | "mushrooms"
  | "forest_mushrooms"
  | "chanterelle"
  | "dried_mushrooms";

export const iVEG: Record<IngId, IngredientItem> = {
  //// VEGETABLES ////
  potato: {
    name: "Ziemniaki",
    type: "veg",
    subType: "pot",
    color: "#B79268",
    kcalPer100g: 77,
    unitWeights: {
      szt: 150,
    },
    nutrientsPer100g: [0.1, 17, 2],
  },

  onion: {
    name: "Cebula",
    type: "veg",
    subType: "oni",
    color: "#EB9C5A",
    kcalPer100g: 40,
    unitWeights: {
      szt: 120,
    },
    nutrientsPer100g: [0.1, 9, 1.1],
  },

  red_onion: {
    name: "Czerwona cebula",
    type: "veg",
    subType: "oni",
    color: "#AD1457",
    kcalPer100g: 40,
    unitWeights: {
      szt: 120,
    },
    nutrientsPer100g: [0.1, 9, 1.1],
  },

  garlic: {
    name: "Czosnek",
    type: "veg",
    subType: "oni",
    color: "#F5F5F0",
    kcalPer100g: 149,
    unitWeights: {
      zbk: 5,
    },
    nutrientsPer100g: [0.5, 33, 6.4],
  },

  tomato: {
    name: "Pomidor",
    type: "veg",
    subType: "tom",
    color: "#E53935",
    kcalPer100g: 18,
    unitWeights: {
      szt: 170,
    },
    nutrientsPer100g: [0.2, 3.9, 0.9],
  },

  cherry_tomato: {
    name: "Pomidorki koktajlowe",
    type: "veg",
    subType: "tom",
    color: "#E53935",
    kcalPer100g: 18,
    nutrientsPer100g: [0.9, 0.2, 3.9],
  },

  roma_tomato: {
    name: "Pomidor malinowy",
    type: "veg",
    subType: "tom",
    color: "#EF5350",
    kcalPer100g: 19,
    nutrientsPer100g: [0.9, 0.2, 4.1],
  },

  cucumber: {
    name: "Ogórek zielony",
    type: "veg",
    subType: "cuc",
    color: "#66BB6A",
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
    color: "#E32227 ",
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
    color: "#C62828",
    kcalPer100g: 40,
    unitWeights: {
      szt: 15,
    },
    nutrientsPer100g: [0.4, 9, 2],
  },

  red_bell_pepper: {
    name: "Papryka czerwona",
    type: "veg",
    subType: "pep",
    color: "#D32F2F",
    kcalPer100g: 31,
    nutrientsPer100g: [1.0, 0.3, 6.0],
  },

  yellow_bell_pepper: {
    name: "Papryka żółta",
    type: "veg",
    subType: "pep",
    color: "#FBC02D",
    kcalPer100g: 27,
    nutrientsPer100g: [1.0, 0.2, 6.3],
  },

  green_bell_pepper: {
    name: "Papryka zielona",
    type: "veg",
    subType: "pep",
    color: "#43A047",
    kcalPer100g: 20,
    nutrientsPer100g: [0.9, 0.2, 4.6],
  },

  carrot: {
    name: "Marchew",
    type: "veg",
    subType: "car",
    color: "#FB8C00",
    kcalPer100g: 41,
    unitWeights: {
      szt: 150,
    },
    nutrientsPer100g: [0.2, 10, 0.9],
  },

  baby_carrot: {
    name: "Marchew mini",
    type: "veg",
    subType: "car",
    color: "#FB8C00",
    kcalPer100g: 35,
    nutrientsPer100g: [0.8, 0.2, 8.2],
  },

  parsley_root: {
    name: "Pietruszka",
    type: "veg",
    subType: "car",
    color: "#E6D8A8",
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
    color: "#7CB342",
    kcalPer100g: 61,
    unitWeights: {
      szt: 200,
    },
    nutrientsPer100g: [0.3, 14.2, 1.5],
  },

  celery_root: {
    name: "Seler",
    type: "veg",
    subType: "bet",
    color: "#DCE3C8",
    kcalPer100g: 42,
    unitWeights: {
      szt: 200,
    },
    nutrientsPer100g: [0.3, 9.2, 1.5],
  },

  radish: {
    name: "Rzodkiewka",
    type: "veg",
    subType: "bet",
    color: "#F06292",
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
    color: "#8E244D",
    kcalPer100g: 43,
    unitWeights: {
      szt: 150,
    },
    nutrientsPer100g: [0.2, 10, 1.6],
  },

  kohlrabi: {
    name: "Kalarepa",
    type: "veg",
    subType: "bet",
    color: "#9CCC65",
    kcalPer100g: 27,
    unitWeights: {
      szt: 300,
    },
    nutrientsPer100g: [0.1, 6.2, 1.7],
  },

  corn: {
    name: "Kukurydza",
    type: "veg",
    subType: "crn",
    color: "#FDD835",
    kcalPer100g: 86,
    unitWeights: {
      opak: 285,
    },
    nutrientsPer100g: [1.5, 19, 3.4],
  },

  //// GREENS ////

  chives: {
    name: "Szczypiorek",
    type: "veg",
    subType: "fhr",
    color: "#4CAF50",
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
    color: "#2E7D32",
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
    color: "#81C784",
    kcalPer100g: 32,
    unitWeights: {
      peto: 100,
    },
    nutrientsPer100g: [1.8, 7.3, 2.6],
  },

  lettuce: {
    name: "Sałata",
    type: "veg",
    subType: "gee",
    color: "#AED581",
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
    color: "#7CB342",
    kcalPer100g: 17,
    unitWeights: {
      szt: 5,
      opak: 300,
    },
    nutrientsPer100g: [0.3, 3.3, 1.2],
  },

  lettuce_iceberg: {
    name: "Sałata lodowa",
    type: "veg",
    subType: "gee",
    color: "#C5E1A5",
    kcalPer100g: 14,
    unitWeights: {
      szt: 5,
      opak: 500,
    },
    nutrientsPer100g: [0.1, 3, 1],
  },

  lettuce_butter: {
    name: "Sałata masłowa",
    type: "veg",
    subType: "gee",
    color: "#AED581",
    kcalPer100g: 14,
    unitWeights: {
      szt: 10,
      opak: 300,
    },
    nutrientsPer100g: [1.4, 0.2, 2.9],
  },

  chinese_cabbage: {
    name: "Kapusta pekińska",
    type: "veg",
    subType: "gee",
    color: "#DCE775",
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
    color: "#6A1B9A",
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
    color: "#689F38",
    kcalPer100g: 27,
    unitWeights: {
      szt: 800,
    },
    nutrientsPer100g: [0.1, 6, 2],
  },

  brussels_sprouts: {
    name: "Brukselka",
    type: "veg",
    subType: "gee",
    color: "#558B2F",
    kcalPer100g: 43,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [0.3, 9, 3.4],
  },

  cauliflower: {
    name: "Kalafior",
    type: "veg",
    color: "#F8F8F2",
    kcalPer100g: 25,
    unitWeights: {
      szt: 800,
    },
    nutrientsPer100g: [0.3, 5, 2],
  },

  broccoli: {
    name: "Brokuł",
    type: "veg",
    color: "#2E7D32",
    kcalPer100g: 34,
    unitWeights: {
      szt: 500,
    },
    nutrientsPer100g: [0.4, 7, 2.8],
  },

  //// BEANS ////

  white_beans: {
    name: "Fasola biała",
    type: "veg",
    subType: "ben",
    color: "#F1E9DA",
    kcalPer100g: 333,
    unitWeights: {
      szk: 200,
      opak: 400,
    },
    nutrientsPer100g: [1.2, 60, 21],
  },

  green_beans: {
    name: "Fasolka szparagowa",
    type: "veg",
    subType: "ben",
    color: "#4CAF50",
    kcalPer100g: 31,
    unitWeights: {
      opak: 250,
    },
    nutrientsPer100g: [0.2, 7, 1.8],
  },

  red_beans: {
    name: "Czerwona fasola",
    type: "veg",
    subType: "ben",
    color: "#672422",
    kcalPer100g: 127,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [0.5, 22.8, 8.7],
  },

  //// MUSHROOMS ////

  mushrooms: {
    name: "Pieczarki",
    type: "veg",
    subType: "msh",
    color: "#CED4DA",
    kcalPer100g: 22,
    unitWeights: {
      opak: 250,
    },
    nutrientsPer100g: [0.3, 3.3, 3.1],
  },

  forest_mushrooms: {
    name: "Grzyby leśne",
    type: "veg",
    subType: "msh",
    color: "#6D4C41",
    kcalPer100g: 34,
    unitWeights: {
      opak: 250,
    },
    nutrientsPer100g: [0.5, 6, 3],
  },

  chanterelle: {
    name: "Kurki",
    type: "veg",
    subType: "msh",
    color: "#FFB300",
    kcalPer100g: 38,
    unitWeights: {
      opak: 200,
    },
    nutrientsPer100g: [0.5, 6, 1.5],
  },

  dried_mushrooms: {
    name: "Grzyby suszone",
    type: "veg",
    subType: "msh",
    color: "#8D6E63",
    kcalPer100g: 280,
    unitWeights: {
      opak: 50,
    },
    nutrientsPer100g: [9, 60, 3],
    verified: false,
  },
};
