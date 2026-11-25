import type { IngredientItem } from "../types";

type IngId =
  //// PRESERVES ////
  | "tomato_puree"
  | "tomato_paste"
  | "tomato_passata"
  | "tomato_sauce"
  | "pickled_cucumber"
  | "pickled_cucumber_vinegar"
  | "lightly_pickled_cucumber"
  | "pickles"
  | "gherkins"
  | "sauerkraut"
  | "fried_onion"
  | "fried_beets"
  | "beets_shredded"
  | "beets_whole_vinegar"
  | "cooked_beets"
  | "tomato_sun_dried_in_oil"
  | "sweet_sour_sauce"
  | "sweet_spicy_sauce"
  | "sechuan_chili_fusion"
  | "pickled_ginger"
  | "kanpyo"
  | "chipotle_peppers"
  | "apple_puree"
  | "dinner_salad_jar"
  | "pickled_pepper"
  | "pickled_mushrooms"
  | "pickled_pattypan"

  //// JAMS ////
  | "jam_strawberry"
  | "jam_cranberry"
  | "jam_currant"

  //// CANNED ////
  | "canned_tomatoes"
  | "canned_corn"
  | "canned_peas"
  | "canned_red_beans"
  | "pinto_beans"
  | "canned_peach"
  | "canned_pineapple"
  | "bean_sprouts"

  //// FROZEN ////
  | "frozen_fries"
  | "frozen_potatoes_boats"
  | "frozen_thin_fries"
  | "twisted_fries"
  | "frozen_spinach"
  | "frozen_vegetable_mix"
  | "frozen_stir_fry"
  | "frozen_stir_fry_oriental"
  | "frozen_stir_fry_potatoes"
  | "frozen_green_beans"
  | "frozen_strawberries"
  | "frozen_raspberries"
  | "frozen_broccoli"

  //// SALADS ////
  | "coleslaw"
  | "cucumber_salad"
  | "corn_salad"
  | "cabbage_red"
  | "salad_beets_grated";

export const iJAR: Record<IngId, IngredientItem> = {
  //// PRESERVES ////

  tomato_puree: {
    name: "Przecier pomidorowy",
    type: "jar",
    isVeg: true,
    color: "#C62828",
    kcalPer100g: 38,
    unitWeights: {
      ml: 1,
    },
    nutrientsPer100g: [0.2, 8, 1.6],
  },

  tomato_paste: {
    name: "Koncentrat pomidorowy",
    type: "jar",
    isVeg: true,
    color: "#B71C1C",
    kcalPer100g: 99,
    unitWeights: {
      lz: 20,
      lzi: 8,
      opak: 190,
    },
    nutrientsPer100g: [0.5, 17, 5.3],
    price: 26.3,
    verified: true,
  },

  tomato_passata: {
    name: "Passata pomidorowa",
    type: "jar",
    isVeg: true,
    color: "#D94C3A",
    kcalPer100g: 35,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [0.3, 4.9, 1.7],
    price: 9,
    verified: true,
  },

  tomato_sauce: {
    name: "Sos pomidorowy",
    type: "jar",
    color: "#D32F2F",
    kcalPer100g: 60,
    unitWeights: {
      opak: 400,
      ml: 1,
    },
    nutrientsPer100g: [3.1, 5.5, 1.4],
    price: 23.7,
    verified: true,
  },

  pickled_cucumber: {
    name: "Ogórek kiszony",
    type: "jar",
    group: "pickle",
    isVeg: true,
    color: "#6FAF3A",
    kcalPer100g: 8,
    unitWeights: {
      szt: 60,
    },
    nutrientsPer100g: [0.5, 1, 0.5],
    price: 17.4,
    verified: true,
  },

  pickled_cucumber_vinegar: {
    name: "Ogórek konserwowy",
    type: "jar",
    group: "pickle",
    isVeg: true,
    color: "#9CCC65",
    kcalPer100g: 15,
    unitWeights: {
      szt: 100,
      opak: 500,
    },
    nutrientsPer100g: [0.2, 3, 0.5],
  },

  lightly_pickled_cucumber: {
    name: "Ogórki małosolne",
    type: "jar",
    group: "pickle",
    isVeg: true,
    color: "#7FAE62",
    kcalPer100g: 11,
    unitWeights: {
      szt: 80,
    },
    nutrientsPer100g: [0.2, 1.5, 0.5],
  },

  pickles: {
    name: "Pikle",
    type: "jar",
    group: "pickle",
    isVeg: true,
    color: "#7E9F45",
    kcalPer100g: 25,
    unitWeights: {
      szt: 80,
      opak: 500,
    },
    nutrientsPer100g: [0.2, 5, 1],
  },

  gherkins: {
    name: "Korniszony",
    type: "jar",
    group: "pickle",
    isVeg: true,
    color: "#558B2F",
    kcalPer100g: 35,
    unitWeights: {
      szt: 15,
      opak: 400,
    },
    nutrientsPer100g: [0.3, 5.5, 1.2],
    price: 18.4,
    verified: true,
  },

  sauerkraut: {
    name: "Kapusta kiszona",
    type: "jar",
    isVeg: true,
    color: "#E6D690",
    kcalPer100g: 13,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [0, 1, 0.7],
    price: 8.2,
    verified: true,
  },

  fried_onion: {
    name: "Cebulka prażona",
    type: "jar",
    color: "#C58A3C",
    kcalPer100g: 590,
    unitWeights: {
      lz: 10,
    },
    nutrientsPer100g: [44, 40, 6],
    price: 68.3,
    verified: true,
  },

  fried_beets: {
    name: "Buraczki zasmażane",
    type: "jar",
    isVeg: true,
    color: "#8E244D",
    kcalPer100g: 64,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [0.6, 12.4, 1.3],
    price: 7.2,
    verified: true,
  },

  beets_shredded: {
    name: "Buraczki wiórki",
    type: "jar",
    isVeg: true,
    color: "#A8324A",
    kcalPer100g: 43,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [0.2, 9.6, 1.6],
  },

  beets_whole_vinegar: {
    name: "Buraczki z zalewy",
    type: "jar",
    isVeg: true,
    color: "#7B1E3A",
    kcalPer100g: 25,
    unitWeights: {
      szt: 15,
      opak: 500,
    },
    nutrientsPer100g: [0.1, 5.5, 1.2],
    price: 10,
  },

  cooked_beets: {
    name: "Buraki gotowane",
    type: "jar",
    isVeg: true,
    color: "#9C2542",
    kcalPer100g: 44,
    nutrientsPer100g: [0.2, 10.0, 1.7],
  },

  tomato_sun_dried_in_oil: {
    name: "Suszone pomidory w zalewie",
    type: "jar",
    group: "dry-tomatoes",
    isVeg: true,
    color: "#B71C1C",
    kcalPer100g: 178,
    unitWeights: {
      szt: 5,
      opak: 150,
    },
    nutrientsPer100g: [11, 12, 4],
    price: 50,
    verified: true,
  },

  sweet_sour_sauce: {
    name: "Sos słodko-kwaśny",
    type: "jar",
    color: "#D32F2F",
    kcalPer100g: 120,
    unitWeights: {
      opak: 250,
    },
    nutrientsPer100g: [2, 24, 1],
  },

  sweet_spicy_sauce: {
    name: "Sos słodko-pikantny",
    type: "jar",
    color: "#E64A19",
    kcalPer100g: 70,
    unitWeights: {
      opak: 250,
    },
    nutrientsPer100g: [0.1, 16, 0.9],
    price: 16.5,
    verified: true,
  },

  sechuan_chili_fusion: {
    name: "Seczuański chili fusion",
    type: "jar",
    color: "#D32F2F",
    kcalPer100g: 82,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [4.1, 9.7, 0.9],
    price: 19.5,
    verified: true,
  },

  pickled_ginger: {
    name: "Marynowany imbir",
    type: "jar",
    color: "#E8B9A4",
    kcalPer100g: 50,
    nutrientsPer100g: [0.1, 12, 0.5],
  },

  kanpyo: {
    name: "Kanpyō",
    type: "jar",
    color: "#D8C79E",
    kcalPer100g: 260,
    nutrientsPer100g: [0.5, 60, 7],
  },

  chipotle_peppers: {
    name: "Papryczki chipotle",
    type: "jar",
    isVeg: true,
    color: "#8B3A2B",
    kcalPer100g: 30,
    unitWeights: {
      szt: 15,
      opak: 200,
    },
    nutrientsPer100g: [0.5, 5, 1],
  },

  apple_puree: {
    name: "Przecier z jabłek",
    type: "jar",
    color: "#D4E157",
    kcalPer100g: 60,
    unitWeights: {
      lz: 15,
      opak: 300,
    },
    nutrientsPer100g: [0.2, 14, 0.4],
  },

  dinner_salad_jar: {
    name: "Sałatka obiadowa",
    type: "jar",
    color: "#81C784",
    kcalPer100g: 45,
    unitWeights: {
      lz: 20,
      opak: 500,
    },
    nutrientsPer100g: [0.5, 9, 1],
  },

  pickled_pepper: {
    name: "Papryka konserwowa",
    type: "jar",
    color: "#EF6C00",
    kcalPer100g: 30,
    unitWeights: {
      szt: 20,
      opak: 400,
    },
    nutrientsPer100g: [0.3, 6, 0.9],
  },

  pickled_mushrooms: {
    name: "Pieczarki marynowane",
    type: "jar",
    color: "#A1887F",
    kcalPer100g: 25,
    unitWeights: {
      szt: 10,
      opak: 300,
    },
    nutrientsPer100g: [0.5, 2.5, 2.2],
  },

  pickled_pattypan: {
    name: "Patisony konserwowe",
    type: "jar",
    color: "#DCE8A5",
    kcalPer100g: 25,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [0.2, 4.5, 1],
    price: 21,
  },

  //// JAMS ////

  jam_strawberry: {
    name: "Dżem truskawkowy",
    type: "jar",
    color: "#C62828",
    kcalPer100g: 250,
    unitWeights: {
      lz: 20,
      szk: 320,
      opak: 400,
    },
    nutrientsPer100g: [0.1, 60, 0.3],
  },

  jam_cranberry: {
    name: "Dżem żurawinowy",
    type: "jar",
    color: "#B71C1C",
    kcalPer100g: 260,
    unitWeights: {
      lz: 20,
      szk: 300,
    },
    nutrientsPer100g: [0.2, 65, 0.5],
    price: 30,
  },

  jam_currant: {
    name: "Dżem porzeczkowy",
    type: "jar",
    color: "#F31112",
    kcalPer100g: 138,
    unitWeights: {
      lz: 20,
      szk: 300,
    },
    nutrientsPer100g: [0.5, 32, 0.5],
    price: 17.8,
    verified: true,
  },

  //// CANNED ////

  canned_tomatoes: {
    name: "Pomidory z puszki",
    type: "jar",
    group: "tomato",
    isVeg: true,
    color: "#D84315",
    kcalPer100g: 26,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [0.2, 4, 1.3],
    price: 7.5,
    verified: true,
  },

  canned_corn: {
    name: "Kukurydza konserwowa",
    type: "jar",
    isVeg: true,
    color: "#FDD835",
    kcalPer100g: 69,
    unitWeights: {
      opak: 285,
    },
    nutrientsPer100g: [0.6, 11, 3.2],
    price: 15.75,
    verified: true,
  },

  canned_peas: {
    name: "Groszek konserwowy",
    type: "jar",
    isVeg: true,
    color: "#66BB6A",
    kcalPer100g: 120,
    unitWeights: {
      opak: 240,
    },
    nutrientsPer100g: [0.3, 19, 6.1],
    price: 10.6,
    verified: true,
  },

  canned_red_beans: {
    name: "Fasola czerwona z puszki",
    type: "jar",
    isVeg: true,
    color: "#672422 ",
    kcalPer100g: 110,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [0.5, 20, 7],
    price: 12,
  },

  pinto_beans: {
    name: "Fasola pinto",
    type: "jar",
    isVeg: true,
    color: "#B58A68",
    kcalPer100g: 143,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [0.7, 26, 9],
  },

  canned_peach: {
    name: "Brzoskwinia w puszce",
    type: "jar",
    group: "peach",
    isVeg: true,
    color: "#FFB74D",
    kcalPer100g: 68,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [0.2, 17, 0.5],
  },

  canned_pineapple: {
    name: "Ananas w puszce",
    group: "pineapple",
    type: "jar",
    isVeg: true,
    color: "#FFD54F",
    kcalPer100g: 63,
    unitWeights: {
      plas: 30,
      opak: 340,
    },
    nutrientsPer100g: [0, 15, 0.4],
    price: 22.9,
    verified: true,
  },

  bean_sprouts: {
    name: "Kiełki fasoli mung",
    type: "hrb",
    isVeg: true,
    subType: "spr",
    color: "#F4F5EE",
    kcalPer100g: 30,
    nutrientsPer100g: [0, 3, 1],
    unitWeights: {
      opak: 200,
    },
    price: 30.7,
    verified: true,
  },

  //// FROZEN ////

  frozen_fries: {
    name: "Frytki mrożone",
    type: "jar",
    subType: "fro",
    color: "#FBC02D",
    kcalPer100g: 165,
    unitWeights: {
      opak: 1000,
    },
    nutrientsPer100g: [5.5, 25, 2.5],
    price: 9.3,
    verified: true,
  },

  frozen_potatoes_boats: {
    name: "Łódeczki ziemniaczane",
    type: "jar",
    subType: "fro",
    color: "#FBC02D",
    kcalPer100g: 104,
    unitWeights: { opak: 1000 },
    nutrientsPer100g: [2.9, 15.7, 2.4],
    price: 8.7,
    verified: true,
  },

  frozen_thin_fries: {
    name: "Frytki długie cienkie",
    type: "jar",
    subType: "fro",
    color: "#FBC02D",
    kcalPer100g: 165,
    unitWeights: {
      opak: 1000,
    },
    nutrientsPer100g: [5.5, 25, 2.5],
    price: 9.3,
    verified: true,
  },

  twisted_fries: {
    name: "Zakręcone frytki",
    type: "jar",
    subType: "fro",
    color: "#E8B84A",
    kcalPer100g: 169,
    unitWeights: {},
    nutrientsPer100g: [5.3, 26, 2.8],
    price: 14.6,
    verified: true,
  },

  frozen_vegetable_mix: {
    name: "Mrożona mieszanka warzyw",
    type: "jar",
    isVeg: true,
    subType: "fro",
    color: "#81C784",
    kcalPer100g: 29,
    nutrientsPer100g: [0.5, 3.4, 2],
    unitWeights: {
      opak: 750,
    },
    verified: true,
  },

  frozen_stir_fry: {
    name: "Warzywa na patelnię",
    type: "jar",
    isVeg: true,
    subType: "fro",
    color: "#66BB6A",
    kcalPer100g: 50,
    nutrientsPer100g: [0.7, 8.5, 2.5],
  },

  frozen_stir_fry_oriental: {
    name: "Warzywa na patelnię orientalne",
    type: "jar",
    isVeg: true,
    subType: "fro",
    color: "#66BB6A",
    kcalPer100g: 33,
    nutrientsPer100g: [0.3, 3.9, 2.1],
    price: 16,
    verified: true,
  },

  frozen_stir_fry_potatoes: {
    name: "Warzywa na patelnię z ziemniakami",
    type: "jar",
    isVeg: true,
    subType: "fro",
    color: "#66BB6A",
    kcalPer100g: 50,
    nutrientsPer100g: [1, 7.1, 1.9],
    verified: true,
  },

  frozen_green_beans: {
    name: "Mrożona fasolka szparagowa",
    type: "jar",
    isVeg: true,
    subType: "fro",
    color: "#66BB6A",
    kcalPer100g: 42,
    nutrientsPer100g: [0.2, 6.8, 2.2],
    unitWeights: {
      opak: 450,
    },
    verified: true,
  },

  frozen_spinach: {
    name: "Mrożony szpinak",
    type: "jar",
    isVeg: true,
    subType: "fro",
    color: "#2E7D32",
    kcalPer100g: 19,
    unitWeights: {
      opak: 450,
    },
    nutrientsPer100g: [0.4, 0.4, 2.3],
    verified: true,
  },

  frozen_strawberries: {
    name: "Mrożone truskawki",
    type: "jar",
    isVeg: true,
    subType: "fro",
    color: "#EF5350",
    kcalPer100g: 35,
    unitWeights: {
      opak: 450,
    },
    nutrientsPer100g: [0.1, 7, 0.4],
    verified: true,
  },

  frozen_raspberries: {
    name: "Maliny mrożone",
    type: "jar",
    isVeg: true,
    subType: "fro",
    color: "#E5395F",
    kcalPer100g: 52,
    unitWeights: {
      szk: 150,
    },
    nutrientsPer100g: [0.7, 12, 1.2],
    price: 34,
  },

  frozen_broccoli: {
    name: "Mrożone brokuły",
    group: "broccoli",
    type: "jar",
    isVeg: true,
    subType: "fro",
    color: "#2E7D32",
    kcalPer100g: 34,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [0.4, 3.2, 2.9],
  },

  //// SALADS ////

  coleslaw: {
    name: "Colesław",
    type: "jar",
    subType: "sal",
    color: "#FFD8A8",
    kcalPer100g: 150,
    unitWeights: {
      opak: 250,
    },
    nutrientsPer100g: [12, 10, 1.5],
  },

  cucumber_salad: {
    name: "Surówka z ogórkiem",
    type: "jar",
    subType: "sal",
    color: "#AED581",
    kcalPer100g: 101,
    unitWeights: {
      opak: 300,
    },
    nutrientsPer100g: [5.6, 9.9, 0.8],
  },

  corn_salad: {
    name: "Surówka z kukurydzą",
    type: "jar",
    subType: "sal",
    color: "#FFF176",
    kcalPer100g: 95,
    unitWeights: {
      opak: 450,
    },
    nutrientsPer100g: [5.1, 9.5, 1],
  },

  cabbage_red: {
    name: "Modra Kapusta",
    type: "jar",
    subType: "sal",
    color: "#7E57C2",
    kcalPer100g: 72,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [1.4, 4.8, 1.2],
  },

  salad_beets_grated: {
    name: "Buraczki tarte",
    type: "jar",
    subType: "sal",
    color: "#A52A4A",
    kcalPer100g: 93,
    unitWeights: {},
    nutrientsPer100g: [3.7, 12.8, 1.0],
  },
};
