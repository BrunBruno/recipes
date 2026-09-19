import type { IngredientItem } from "../types";

type IngId =
  //// VEGETABLES ////
  | "potato"
  | "young_potatoes"
  | "sweet_potato"
  | "onion"
  | "tomato"
  | "cherry_tomato"
  | "strawberry_tomatoes"
  | "tomato_roma"
  | "tomato_raspberry"
  | "sun_dried_tomatoes"
  | "cucumber"
  | "ground_cucumber"
  | "zucchini"
  | "eggplant"
  | "bell_pepper"
  | "sweet_pepper"
  | "chili_pepper"
  | "peperoni_pepper"
  | "red_bell_pepper"
  | "yellow_bell_pepper"
  | "green_bell_pepper"
  | "carrot"
  | "baby_carrot"
  | "parsley_root"
  | "leek"
  | "vegetable_soup_vegetables"
  | "garlic"
  | "celery_root"
  | "celery_stalk"
  | "ginger"
  | "red_onion"
  | "shallot"
  | "radish"
  | "radish_peeled"
  | "daikon_oshinko"
  | "beetroot"
  | "kohlrabi"
  | "turnip"
  | "pumpkin"
  | "bottle_gourd"
  | "corn"

  //// GREENS ////
  | "lettuce"
  | "lettuce_romaine"
  | "lettuce_iceberg"
  | "lettuce_butter"
  | "arugula"
  | "cabbage"
  | "young_cabbage"
  | "chinese_cabbage"
  | "red_cabbage"
  | "savoy_cabbage"
  | "brussels_sprouts"
  | "pak_choy"
  | "cauliflower"
  | "broccoli"
  | "asparagus"
  | "spinach"
  | "nori"

  //// BEANS ////
  | "white_beans"
  | "green_beans"
  | "red_beans"

  //// MUSHROOMS ////
  | "mushrooms"
  | "mushrooms_mini"
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
      kg: 1000,
    },
    nutrientsPer100g: [0.1, 17, 2],
    price: 3.6,
  },

  young_potatoes: {
    name: "Młode ziemniaki",
    type: "veg",
    subType: "pot",
    color: "#E8D8B0",
    kcalPer100g: 69,
    unitWeights: {
      szt: 80,
    },
    nutrientsPer100g: [0.1, 15.7, 1.8],
  },

  sweet_potato: {
    name: "Bataty",
    type: "veg",
    subType: "pot",
    color: "#E58A45",
    kcalPer100g: 86,
    unitWeights: { szt: 250 },
    nutrientsPer100g: [0.1, 20, 1.6],
  },

  onion: {
    name: "Cebula",
    group: "onion",
    type: "veg",
    isVeg: true,
    subType: "oni",
    color: "#EB9C5A",
    kcalPer100g: 40,
    unitWeights: {
      szt: 120,
    },
    nutrientsPer100g: [0.1, 9, 1.1],
    price: 5,
  },

  red_onion: {
    name: "Czerwona cebula",
    group: "onion",
    type: "veg",
    isVeg: true,
    subType: "oni",
    color: "#AD1457",
    kcalPer100g: 40,
    unitWeights: {
      szt: 120,
    },
    nutrientsPer100g: [0.1, 9, 1.1],
    price: 8,
  },

  shallot: {
    name: "Szalotka",
    group: "onion",
    type: "veg",
    isVeg: true,
    subType: "oni",
    color: "#C9A0A0",
    kcalPer100g: 72,
    unitWeights: {
      szt: 30,
    },
    nutrientsPer100g: [0.1, 16.8, 2.5],
  },

  garlic: {
    name: "Czosnek",
    type: "veg",
    isVeg: true,
    subType: "oni",
    color: "#F5F5F0",
    kcalPer100g: 149,
    unitWeights: {
      zbk: 5,
    },
    nutrientsPer100g: [0.5, 33, 6.4],
    price: 32,
  },

  tomato: {
    name: "Pomidor",
    group: "tomato",
    type: "veg",
    isVeg: true,
    subType: "tom",
    color: "#E53935",
    kcalPer100g: 18,
    unitWeights: {
      szt: 170,
      plas: 15,
    },
    nutrientsPer100g: [0.2, 3.9, 0.9],
    price: 8,
  },

  tomato_raspberry: {
    name: "Pomidor malinowy",
    group: "tomato",
    type: "veg",
    isVeg: true,
    subType: "tom",
    color: "#E85C5C",
    kcalPer100g: 18,
    unitWeights: {
      szt: 180,
    },
    nutrientsPer100g: [0.2, 3.9, 0.9],
  },

  tomato_roma: {
    name: "Pomidor rzymski",
    group: "tomato",
    type: "veg",
    isVeg: true,
    subType: "tom",
    color: "#D94B45",
    kcalPer100g: 18,
    unitWeights: {
      szt: 100,
    },
    nutrientsPer100g: [0.2, 3.5, 0.9],
  },

  sun_dried_tomatoes: {
    name: "Suszone pomidory",
    type: "veg",
    group: "dry-tomatoes",
    isVeg: true,
    subType: "tom",
    color: "#B71C1C",
    kcalPer100g: 178,
    unitWeights: {
      szt: 5,
      opak: 100,
    },
    nutrientsPer100g: [1.2, 15, 5.8],
    price: 90,
    verified: true,
  },

  cherry_tomato: {
    name: "Pomidorki koktajlowe",
    type: "veg",
    isVeg: true,
    subType: "crt",
    color: "#E53935",
    kcalPer100g: 18,
    unitWeights: {
      szt: 15,
    },
    nutrientsPer100g: [0.2, 3.9, 0.9],
    price: 40,
  },

  strawberry_tomatoes: {
    name: "Pomidorki truskawkowe",
    type: "veg",
    isVeg: true,
    subType: "crt",
    color: "#E53935",
    kcalPer100g: 18,
    unitWeights: {
      szt: 15,
    },
    nutrientsPer100g: [0.2, 3.9, 0.9],
    price: 24,
  },

  cucumber: {
    name: "Ogórek zielony",
    type: "veg",
    isVeg: true,
    subType: "cuc",
    color: "#66BB6A",
    kcalPer100g: 16,
    unitWeights: {
      szt: 300,
      plas: 10,
    },
    nutrientsPer100g: [0.1, 3.6, 0.7],
    price: 7,
  },

  ground_cucumber: {
    name: "Ogórek gruntowy",
    type: "veg",
    isVeg: true,
    subType: "cuc",
    color: "#7CB342",
    kcalPer100g: 14,
    nutrientsPer100g: [0.1, 2.4, 0.7],
    unitWeights: {
      szt: 100,
    },
    price: 9,
  },

  zucchini: {
    name: "Cukinia",
    type: "veg",
    isVeg: true,
    subType: "cuc",
    color: "#9ACD6A",
    kcalPer100g: 17,
    unitWeights: {
      szt: 300,
    },
    nutrientsPer100g: [0, 3, 1],
    price: 5,
  },

  eggplant: {
    name: "Bakłażan",
    type: "veg",
    isVeg: true,
    subType: "egp",
    color: "#7B4B7A",
    kcalPer100g: 25,
    unitWeights: {
      szt: 350,
    },
    nutrientsPer100g: [0, 6, 1],
    price: 9,
  },

  bell_pepper: {
    name: "Papryka",
    type: "veg",
    isVeg: true,
    subType: "pep",
    color: "#E32227 ",
    kcalPer100g: 31,
    unitWeights: {
      szt: 150,
    },
    nutrientsPer100g: [0.3, 6, 1],
    price: 13,
  },

  sweet_pepper: {
    name: "Słodka Papryka",
    type: "veg",
    isVeg: true,
    subType: "pep",
    color: "#D7261E",
    kcalPer100g: 27,
    unitWeights: {
      szt: 180,
    },
    nutrientsPer100g: [1.0, 6.3, 1.3],
    price: 20,
  },

  red_bell_pepper: {
    name: "Papryka czerwona",
    type: "veg",
    isVeg: true,
    subType: "pep",
    color: "#D32F2F",
    kcalPer100g: 31,
    nutrientsPer100g: [0.3, 6, 1],
    unitWeights: {
      szt: 150,
    },
    price: 13,
  },

  yellow_bell_pepper: {
    name: "Papryka żółta",
    type: "veg",
    isVeg: true,
    subType: "pep",
    color: "#FBC02D",
    kcalPer100g: 27,
    nutrientsPer100g: [0.2, 6.3, 1],
  },

  green_bell_pepper: {
    name: "Papryka zielona",
    type: "veg",
    isVeg: true,
    subType: "pep",
    color: "#43A047",
    kcalPer100g: 20,
    nutrientsPer100g: [0.2, 4.6, 0.9],
    price: 20,
  },

  chili_pepper: {
    name: "Papryczka chili",
    type: "veg",
    isVeg: true,
    subType: "chl",
    color: "#C62828",
    kcalPer100g: 40,
    unitWeights: {
      szt: 22,
    },
    nutrientsPer100g: [0.4, 9, 2],
    price: 59,
  },

  peperoni_pepper: {
    name: "Papryka peperoni",
    type: "veg",
    isVeg: true,
    subType: "chl",
    color: "#AA4400",
    kcalPer100g: 31,
    unitWeights: {
      szt: 25,
    },
    price: 40,
    nutrientsPer100g: [0.3, 6, 1],
  },

  carrot: {
    name: "Marchew",
    type: "veg",
    isVeg: true,
    subType: "car",
    color: "#FB8C00",
    kcalPer100g: 41,
    unitWeights: {
      szt: 150,
    },
    nutrientsPer100g: [0.2, 10, 0.9],
    price: 5,
  },

  baby_carrot: {
    name: "Marchew mini",
    type: "veg",
    isVeg: true,
    subType: "car",
    color: "#FB8C00",
    kcalPer100g: 35,
    nutrientsPer100g: [0.2, 8.2, 0.8],
  },

  parsley_root: {
    name: "Pietruszka",
    type: "veg",
    isVeg: true,
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
    isVeg: true,
    subType: "lek",
    color: "#7CB342",
    kcalPer100g: 61,
    unitWeights: {
      szt: 200,
    },
    nutrientsPer100g: [0.3, 14.2, 1.5],
    price: 22.5,
  },

  vegetable_soup_vegetables: {
    name: "Włoszczyzna",
    type: "veg",
    isVeg: true,
    subType: "lek",
    color: "#8BC34A",
    kcalPer100g: 35,
    nutrientsPer100g: [0.2, 7, 1.2],
    unitWeights: {
      szt: 500,
    },
    price: 8,
  },

  celery_stalk: {
    name: "Seler naciowy",
    type: "veg",
    isVeg: true,
    subType: "lek",
    color: "#8FBF72",
    kcalPer100g: 14,
    unitWeights: {
      szt: 40,
    },
    nutrientsPer100g: [0.2, 3.0, 0.7],
  },

  ginger: {
    name: "Imbir",
    type: "veg",
    isVeg: true,
    subType: "gng",
    color: "#D7A86E",
    kcalPer100g: 80,
    unitWeights: {
      szt: 50,
      plas: 5,
    },
    nutrientsPer100g: [0.8, 17.8, 1.8],
    price: 25,
  },

  celery_root: {
    name: "Seler",
    type: "veg",
    isVeg: true,
    subType: "bet",
    color: "#DCE3C8",
    kcalPer100g: 42,
    unitWeights: {
      szt: 200,
    },
    nutrientsPer100g: [0.3, 9.2, 1.5],
    price: 4.8,
  },

  radish: {
    name: "Rzodkiewka",
    type: "veg",
    isVeg: true,
    subType: "bet",
    color: "#F06292",
    kcalPer100g: 16,
    unitWeights: {
      szt: 20,
      opak: 150,
    },
    nutrientsPer100g: [0.1, 3.4, 0.7],
    price: 16,
  },

  radish_peeled: {
    name: "Rzodkiew obrana",
    type: "veg",
    isVeg: true,
    subType: "bet",
    color: "#F48FB1",
    kcalPer100g: 16,
    unitWeights: {
      szt: 15,
    },
    nutrientsPer100g: [0.1, 3.4, 0.7],
    price: 16,
  },

  daikon_oshinko: {
    name: "Rzodkiew Oshinko",
    type: "veg",
    isVeg: true,
    subType: "bet",
    color: "#E5D8B8",
    kcalPer100g: 30,
    nutrientsPer100g: [0.2, 6, 0.8],
  },

  beetroot: {
    name: "Burak czerwony",
    type: "veg",
    isVeg: true,
    subType: "bet",
    color: "#8E244D",
    kcalPer100g: 43,
    unitWeights: {
      szt: 300,
    },
    nutrientsPer100g: [0.2, 10, 1.6],
    price: 3,
  },

  kohlrabi: {
    name: "Kalarepa",
    type: "veg",
    isVeg: true,
    subType: "bet",
    color: "#9CCC65",
    kcalPer100g: 27,
    unitWeights: {
      szt: 300,
    },
    nutrientsPer100g: [0.1, 6.2, 1.7],
  },

  turnip: {
    name: "Rzepa",
    type: "veg",
    isVeg: true,
    subType: "bet",
    color: "#D9C4B0",
    kcalPer100g: 28,
    unitWeights: { szt: 150 },
    nutrientsPer100g: [0.1, 6, 0.9],
  },

  pumpkin: {
    name: "Dynia",
    type: "veg",
    isVeg: true,
    subType: "pup",
    color: "#E58A3A",
    kcalPer100g: 26,
    unitWeights: { szt: 1500 },
    nutrientsPer100g: [0.1, 6.5, 1],
  },

  bottle_gourd: {
    name: "Tykwa",
    type: "veg",
    isVeg: true,
    subType: "pup",
    color: "#A8B879",
    kcalPer100g: 14,
    unitWeights: { szt: 1000 },
    nutrientsPer100g: [0.02, 3.4, 0.6],
  },

  corn: {
    name: "Kukurydza",
    type: "veg",
    isVeg: true,
    subType: "crn",
    color: "#FDD835",
    kcalPer100g: 86,
    unitWeights: {
      opak: 285,
    },
    nutrientsPer100g: [1.5, 19, 3.4],
  },

  //// GREENS ////
  lettuce: {
    name: "Sałata",
    type: "veg",
    isVeg: true,
    subType: "gee",
    color: "#AED581",
    kcalPer100g: 15,
    unitWeights: {
      opak: 150,
      lst: 5,
    },
    nutrientsPer100g: [0.2, 2.9, 1.4],
    price: 27.5,
  },

  lettuce_romaine: {
    name: "Sałata rzymska",
    type: "veg",
    isVeg: true,
    subType: "gee",
    color: "#7CB342",
    kcalPer100g: 17,
    unitWeights: {
      lst: 5,
      opak: 300,
    },
    nutrientsPer100g: [0.3, 3.3, 1.2],
  },

  lettuce_iceberg: {
    name: "Sałata lodowa",
    type: "veg",
    isVeg: true,
    subType: "gee",
    color: "#C5E1A5",
    kcalPer100g: 14,
    unitWeights: {
      lst: 5,
      opak: 500,
    },
    nutrientsPer100g: [0.1, 3, 1],
    price: 17,
  },

  lettuce_butter: {
    name: "Sałata masłowa",
    type: "veg",
    isVeg: true,
    subType: "gee",
    color: "#AED581",
    kcalPer100g: 14,
    unitWeights: {
      lst: 10,
      opak: 300,
    },
    nutrientsPer100g: [0.2, 2.9, 1.4],
    price: 27.5,
  },

  arugula: {
    name: "Rukola",
    type: "veg",
    isVeg: true,
    subType: "gee",
    color: "#4CAF50",
    kcalPer100g: 25,
    nutrientsPer100g: [0.7, 3.7, 2.6],
    price: 47.9,
  },

  cabbage: {
    name: "Kapusta",
    type: "veg",
    isVeg: true,
    subType: "gee",
    color: "#7CB342",
    kcalPer100g: 25,
    unitWeights: {
      szt: 1000,
    },
    nutrientsPer100g: [0.1, 5.8, 1.3],
    price: 3,
  },

  young_cabbage: {
    name: "Młoda kapusta",
    type: "veg",
    isVeg: true,
    subType: "gee",
    color: "#A8C98A",
    kcalPer100g: 27,
    unitWeights: {
      szt: 700,
    },
    nutrientsPer100g: [0.1, 6.0, 1.3],
  },

  chinese_cabbage: {
    name: "Kapusta pekińska",
    type: "veg",
    isVeg: true,
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
    isVeg: true,
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
    isVeg: true,
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
    isVeg: true,
    subType: "gee",
    color: "#558B2F",
    kcalPer100g: 43,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [0.3, 9, 3.4],
  },

  pak_choy: {
    name: "Pak Choy",
    type: "veg",
    isVeg: true,
    subType: "gee",
    color: "#72A85A",
    unitWeights: { szt: 250 },
    kcalPer100g: 13,
    nutrientsPer100g: [0.2, 2.2, 1.5],
  },

  cauliflower: {
    name: "Kalafior",
    type: "veg",
    isVeg: true,
    color: "#F8F8F2",
    kcalPer100g: 25,
    unitWeights: {
      szt: 800,
    },
    nutrientsPer100g: [0.3, 5, 2],
  },

  broccoli: {
    name: "Brokuł",
    group: "broccoli",
    type: "veg",
    isVeg: true,
    color: "#2E7D32",
    kcalPer100g: 34,
    unitWeights: {
      szt: 500,
    },
    nutrientsPer100g: [0.4, 7, 2.8],
    price: 12,
  },

  asparagus: {
    name: "Szparagi",
    type: "veg",
    isVeg: true,
    subType: "asp",
    color: "#75A85B",
    unitWeights: { szt: 20 },
    kcalPer100g: 20,
    nutrientsPer100g: [0.1, 3.9, 2.2],
  },

  spinach: {
    name: "Szpinak",
    type: "veg",
    isVeg: true,
    subType: "spi",
    color: "#4F7942",
    unitWeights: {
      opak: 200,
    },
    kcalPer100g: 23,
    nutrientsPer100g: [0.4, 3.6, 2.9],
  },

  nori: {
    name: "Nori",
    type: "veg",
    subType: "sea",
    color: "#364A3B",
    kcalPer100g: 350,
    unitWeights: {
      szt: 3,
    },
    nutrientsPer100g: [3, 40, 40],
  },

  //// BEANS ////

  white_beans: {
    name: "Fasola biała",
    type: "veg",
    isVeg: true,
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
    isVeg: true,
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
    isVeg: true,
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
    isVeg: true,
    subType: "msh",
    color: "#CED4DA",
    kcalPer100g: 22,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [0.3, 3.3, 3.1],
    price: 16,
  },

  mushrooms_mini: {
    name: "Pieczarki mini",
    type: "veg",
    isVeg: true,
    subType: "msh",
    color: "#CED4DA",
    kcalPer100g: 43,
    unitWeights: {
      opak: 250,
    },
    nutrientsPer100g: [0.4, 3.9, 2.7],
    price: 22,
  },

  forest_mushrooms: {
    name: "Grzyby leśne",
    type: "veg",
    isVeg: true,
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
    isVeg: true,
    subType: "msh",
    color: "#FFB300",
    kcalPer100g: 38,
    unitWeights: {
      opak: 200,
    },
    nutrientsPer100g: [0.5, 6, 1.5],
    price: 75,
  },

  dried_mushrooms: {
    name: "Grzyby suszone",
    type: "veg",
    isVeg: true,
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
