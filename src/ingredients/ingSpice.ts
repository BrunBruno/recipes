import type { IngredientItem } from "../types";

type IngId =
  //// SPICES ////
  | "salt"
  | "sea_salt"
  | "black_pepper"
  | "ground_pepper"
  | "pepper_grains"
  | "cayenne_pepper"
  | "granulated_garlic"
  | "granulated_onion"
  | "sweet_paprika"
  | "hot_paprika"
  | "smoked_paprika"
  | "chilli"
  | "curry"
  | "cinnamon"
  | "nutmeg"
  | "allspice"
  | "cumin"
  | "garam_masala"
  | "clove"
  | "juniper_berries"
  | "turmeric"
  | "herbal_pepper"
  | "star_anise"
  | "saffron_threads"
  | "tomato_sun_dried"
  | "chili_flakes"
  | "zaatar"
  | "colorful_pepper"
  | "orange_pepper"
  | "black_seed"
  | "cardamom"
  | "ground_ginger"
  | "fenugreek"
  | "savory_chubritza"
  | "ground_cloves"
  | "harissa"
  | "red_curry"
  | "white_mustard_seeds"
  | "anise_seeds"
  | "chinese_five_spice"
  | "minced_meat_seasoning"
  | "golden_chicken_seasoning"
  | "sumac"

  //// SEASONINGS ////
  | "vegetable_seasoning"
  | "potato_seasoning"
  | "meat_seasoning"
  | "gingerbread_seasoning"
  | "gyros_spice"
  | "marinade_prymat"
  | "goulash_seasoning"
  | "fish_seasoning"
  | "kebab_shoarma_seasoning"
  //
  | "knorr_bouillon_cube"
  | "knorr_goulash_fix"
  | "knorr_chinese_fix"
  | "knorr_bolognese_fix"
  | "knorr_crispy_chicken_fix"
  | "knorr_carbonara_fix"
  | "knorr_napoli_fix"
  | "knorr_mushroom_sauce_fix"
  | "knorr_jalapeno_chicken_fix"
  | "knorr_meatballs_fix"
  | "knorr_mac_and_cheese_fix"
  | "knorr_bolognese_chili_fix"
  | "knorr_chinese_fired_rice_fix"
  | "knorr_sweet_sour_chicken_fix"
  | "knorr_pork_ala_stroganoff_fix"
  | "knorr_four_cheese_spaghetti_fix"
  | "knorr_chicken_pasta_fix"
  | "knorr_chili_con_carne_fix"
  | "knorr_chicken_with_tomatoes_fix"
  | "knorr_alfredo_chicken_pasta_fix"
  | "knorr_ratatouille_fix"
  | "knorr_creamy_salmon_fix"
  | "knorr_creamy_salmon_fix"
  | "knorr_tagliatelle_chicken_fix"
  | "knorr_french_salad_fix"
  | "knorr_italian_salad_fix"
  | "knorr_greek_salad_fix"
  | "knorr_dill_herb_salad_fix"
  //
  | "winiary_tomato_sauce_fix"
  | "winiary_pork_neck_fix"
  | "winiary_chicken_fix"
  | "winiary_dark_roast_sauce_fix"
  | "winiary_peasant_stew_fix"
  | "winiary_juicy_ribs_fix"
  | "winiary_hunters_sauce_fix"
  | "winiary_hearty_pot_fix"
  | "winiary_chicken_creamy_herbs_fix"
  //
  | "kamis_penne_fix"
  | "kamis_chipotle_fix"
  //
  | "kania_curry_fix"
  | "kania_sechuan_fix"
  | "kania_pad_thai_fix";

export const iSPC: Record<IngId, IngredientItem> = {
  //// SPICES ////
  salt: {
    name: "Sól",
    type: "spc",
    color: "#FAFAFA",
    kcalPer100g: 0,
    unitWeights: {
      lzi: 5,
    },
    nutrientsPer100g: [0, 0, 0],
    price: 2,
    verified: true,
  },

  sea_salt: {
    name: "Sól morska",
    type: "spc",
    color: "#F5F5F5",
    kcalPer100g: 0,
    unitWeights: {
      lzi: 5,
    },
    nutrientsPer100g: [0, 0, 0],
    price: 4,
    verified: true,
  },

  black_pepper: {
    name: "Pieprz",
    type: "spc",
    color: "#444444",
    kcalPer100g: 251,
    unitWeights: {
      lzi: 2,
      ziar: 0.2,
    },
    nutrientsPer100g: [3.3, 64, 10],
    price: 50,
  },

  ground_pepper: {
    name: "Pieprz mielony",
    type: "spc",
    color: "#333333",
    kcalPer100g: 251,
    unitWeights: {
      lz: 7,
      lzi: 3,
    },
    nutrientsPer100g: [3.3, 64.8, 10.4],
    price: 50,
  },

  pepper_grains: {
    name: "Pieprz ziarnisty",
    type: "spc",
    color: "#333333",
    kcalPer100g: 251,
    unitWeights: {
      lz: 6,
      lzi: 2,
    },
    nutrientsPer100g: [3.3, 64.8, 10.4],
    price: 62.4,
  },

  cayenne_pepper: {
    name: "Pieprz cayenne",
    color: "#D32F2F",
    type: "spc",
    kcalPer100g: 318,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [17, 57, 12],
    price: 165,
  },

  granulated_garlic: {
    name: "Czosnek granulowany",
    type: "spc",
    color: "#F5E6C8",
    kcalPer100g: 331,
    unitWeights: {
      lzi: 3,
    },
    nutrientsPer100g: [0.7, 73, 17],
    price: 43,
  },

  granulated_onion: {
    name: "Cebula granulowana",
    type: "spc",
    color: "#E8D5B5",
    kcalPer100g: 341,
    unitWeights: {
      lzi: 3,
    },
    nutrientsPer100g: [1, 79, 10],
    price: 124,
  },

  sweet_paprika: {
    name: "Papryka słodka",
    type: "spc",
    color: "#E53935",
    kcalPer100g: 282,
    unitWeights: {
      lzi: 2,
      lz: 6,
    },
    nutrientsPer100g: [13, 54, 14],
    price: 43,
  },

  hot_paprika: {
    name: "Papryka ostra",
    type: "spc",
    color: "#C62828",
    kcalPer100g: 282,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [13, 54, 14],
    price: 104,
  },

  smoked_paprika: {
    name: "Papryka wędzona",
    type: "spc",
    color: "#8D3B2E",
    kcalPer100g: 282,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [13, 54, 14],
    price: 64.5,
  },

  chilli: {
    name: "Chilli",
    type: "spc",
    color: "#B71C1C",
    kcalPer100g: 40,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [0.4, 9, 2],
    price: 165,
  },

  curry: {
    name: "Curry",
    type: "spc",
    color: "#FBC02D",
    kcalPer100g: 325,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [14, 58, 12],
    price: 64.5,
  },

  cinnamon: {
    name: "Cynamon",
    type: "spc",
    color: "#8D6E63",
    kcalPer100g: 247,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [1.2, 81, 4],
    price: 207,
  },

  nutmeg: {
    name: "Gałka muszkatołowa",
    type: "spc",
    color: "#A1887F",
    kcalPer100g: 525,
    unitWeights: {
      ziar: 0.2,
    },
    nutrientsPer100g: [36, 49, 6],
    price: 276.7,
  },

  allspice: {
    name: "Ziele angielskie",
    type: "spc",
    color: "#6D4C41",
    kcalPer100g: 263,
    unitWeights: {
      ziar: 0.2,
    },
    nutrientsPer100g: [8.7, 72, 6],
    price: 107.5,
  },

  cumin: {
    name: "Kumin rzymski",
    type: "spc",
    color: "#C19A6B",
    kcalPer100g: 375,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [22, 44, 18],
    price: 165,
  },

  garam_masala: {
    name: "Garam masala",
    type: "spc",
    color: "#8D6E63",
    kcalPer100g: 250,
    unitWeights: {
      lzi: 5,
    },
    nutrientsPer100g: [13, 45, 12],
    price: 124,
  },

  clove: {
    name: "Goździk",
    type: "spc",
    color: "#795548",
    kcalPer100g: 274,
    unitWeights: {
      ziar: 0.1,
    },
    nutrientsPer100g: [13, 31, 6],
    price: 190,
  },

  juniper_berries: {
    name: "Ziarna jałowca",
    type: "spc",
    color: "#37474F",
    kcalPer100g: 280,
    unitWeights: {
      ziar: 0.2,
    },
    nutrientsPer100g: [15, 34, 6],
    price: 134,
  },

  turmeric: {
    name: "Kurkuma",
    type: "spc",
    color: "#D99A00",
    kcalPer100g: 312,
    nutrientsPer100g: [3.3, 67.1, 9.7],
    unitWeights: {
      lz: 7,
      lzi: 3,
    },
    price: 155,
  },

  herbal_pepper: {
    name: "Pieprz ziołowy",
    type: "spc",
    color: "#795548",
    kcalPer100g: 250,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [3.3, 45, 10],
    price: 165,
  },

  star_anise: {
    name: "Anyż gwiazdki",
    type: "spc",
    color: "#5D4037",
    kcalPer100g: 337,
    unitWeights: {
      ziar: 0.3,
      opak: 0.9,
    },
    nutrientsPer100g: [17.6, 50, 11.2],
    price: 1735,
  },

  saffron_threads: {
    name: "Szafran nitki",
    type: "spc",
    color: "#FF8F00",
    kcalPer100g: 310,
    unitWeights: {
      lzi: 0.5,
    },
    nutrientsPer100g: [11.4, 65.4, 5.9],
    price: 7190,
  },

  tomato_sun_dried: {
    name: "Pomidory suszone",
    type: "spc",
    color: "#C62828",
    kcalPer100g: 258,
    unitWeights: {
      lz: 5,
    },
    nutrientsPer100g: [14.1, 55.8, 3.0],
    price: 165,
  },

  chili_flakes: {
    name: "Chili w płatkach",
    type: "spc",
    color: "#D32F2F",
    kcalPer100g: 318,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [12.0, 56.0, 17.0],
    price: 285,
  },

  zaatar: {
    name: "Zatar",
    type: "spc",
    color: "#8D6E63",
    kcalPer100g: 330,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [12.0, 42.0, 18.0],
    price: 207,
  },

  colorful_pepper: {
    name: "Pieprz kolorowy",
    type: "spc",
    color: "#5C4033",
    kcalPer100g: 251,
    unitWeights: {
      ziar: 0.2,
    },
    nutrientsPer100g: [3.3, 64.8, 10.4],
    price: 142.5,
  },

  orange_pepper: {
    name: "Pieprz pomarańczowy",
    type: "spc",
    color: "#D87093",
    kcalPer100g: 251,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [3.3, 64.8, 10.4],
    price: 120,
  },

  black_seed: {
    name: "Czarnuszka",
    type: "spc",
    color: "#212121",
    kcalPer100g: 345,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [16.0, 35.0, 22.0],
    price: 114,
  },

  cardamom: {
    name: "Kardamon",
    type: "spc",
    color: "#A3B18A",
    kcalPer100g: 311,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [10.8, 68.5, 6.7],
    price: 378,
  },

  ground_ginger: {
    name: "Imbir mielony",
    type: "spc",
    color: "#D4A373",
    kcalPer100g: 335,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [8.9, 71.6, 4.2],
    price: 152,
  },

  fenugreek: {
    name: "Kozieradka",
    type: "spc",
    color: "#C2A649",
    kcalPer100g: 323,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [23.0, 58.0, 6.4],
    price: 152,
  },

  savory_chubritza: {
    name: "Czubryca",
    type: "spc",
    color: "#B08968",
    kcalPer100g: 270,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [8.0, 50.0, 8.0],
    price: 91.2,
  },

  ground_cloves: {
    name: "Goździk mielony",
    type: "spc",
    color: "#6F4E37",
    kcalPer100g: 274,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [13.0, 31.0, 6.0],
    price: 152,
  },

  harissa: {
    name: "Harissa",
    type: "spc",
    color: "#B71C1C",
    kcalPer100g: 280,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [10.0, 40.0, 12.0],
    price: 114,
  },

  red_curry: {
    name: "Red curry",
    type: "spc",
    color: "#C63F17",
    kcalPer100g: 320,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [12.0, 50.0, 12.0],
    price: 99,
  },

  white_mustard_seeds: {
    name: "Gorczyca biała cała",
    type: "spc",
    color: "#E9D8A6",
    kcalPer100g: 508,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [26.0, 28.0, 36.0],
    price: 82.7,
  },

  anise_seeds: {
    name: "Anyż nasiona",
    type: "spc",
    color: "#7F5539",
    kcalPer100g: 337,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [17.6, 50.0, 11.2],
    price: 94,
  },

  chinese_five_spice: {
    name: "Przyprawa chińska",
    type: "spc",
    color: "#B05D38",
    kcalPer100g: 290,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [8.0, 55.0, 9.0],
    price: 124,
  },

  sumac: {
    name: "Sumak",
    type: "spc",
    color: "#6A040F",
    kcalPer100g: 300,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [5.0, 60.0, 10.0],
    price: 228,
  },

  //// SEASONINGS ////

  minced_meat_seasoning: {
    name: "Przyprawa do mielonego",
    type: "spc",
    color: "#C94B3F",
    kcalPer100g: 250,
    unitWeights: {
      lzi: 3,
    },
    nutrientsPer100g: [5.0, 30.0, 10.0],
    price: 124,
  },

  golden_chicken_seasoning: {
    name: "Przyprawa złocisty kurczak",
    type: "spc",
    color: "#F4A261",
    kcalPer100g: 260,
    unitWeights: {
      lzi: 3,
    },
    nutrientsPer100g: [10.0, 45.0, 8.0],
    price: 99.2,
  },

  vegetable_seasoning: {
    name: "Jarzynka",
    type: "spc",
    color: "#FCC419",
    kcalPer100g: 200,
    unitWeights: {
      lzi: 3,
    },
    nutrientsPer100g: [1, 40, 5],
    price: 10,
  },

  potato_seasoning: {
    name: "Przyprawa do ziemniaków",
    type: "spc",
    color: "#F76707",
    kcalPer100g: 250,
    unitWeights: {
      lz: 10,
      lzi: 5,
    },
    nutrientsPer100g: [5, 45, 8],
    price: 99,
  },

  meat_seasoning: {
    name: "Przyprawa do mięs",
    type: "spc",
    color: "#C94B3F",
    kcalPer100g: 250,
    unitWeights: {
      lzi: 3,
    },
    nutrientsPer100g: [5, 30, 10],
    price: 29,
  },

  gingerbread_seasoning: {
    name: "Przyprawa do piernika",
    type: "spc",
    color: "#8D6E63",
    kcalPer100g: 350,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [3, 70, 6],
  },

  gyros_spice: {
    name: "Przyprawa gyros",
    type: "spc",
    color: "#C96F3B",
    kcalPer100g: 280,
    unitWeights: {
      lz: 10,
      lzi: 3,
    },
    nutrientsPer100g: [8, 45, 8],
    price: 124,
  },

  marinade_prymat: {
    name: "Marynata Prymat",
    type: "spc",
    color: "#D96B3B",
    kcalPer100g: 260,
    unitWeights: {
      opak: 20,
      lzi: 3,
    },
    nutrientsPer100g: [5, 55, 8],
    price: 124,
  },

  goulash_seasoning: {
    name: "Przyprawa do gulaszu",
    type: "spc",
    color: "#A65F3F",
    kcalPer100g: 250,
    unitWeights: {
      opak: 30,
    },
    nutrientsPer100g: [3, 45, 8],
    price: 99.2,
  },

  fish_seasoning: {
    name: "Przyprawa do ryb",
    type: "spc",
    color: "#D6C7A3",
    kcalPer100g: 210,
    unitWeights: {
      opak: 20,
    },
    nutrientsPer100g: [5.1, 26, 9.6],
    price: 124,
    verified: true,
  },

  kebab_shoarma_seasoning: {
    name: "Przyprawa kebab shoarma",
    type: "spc",
    color: "#B77B45",
    kcalPer100g: 215,
    unitWeights: {
      opak: 20,
    },
    nutrientsPer100g: [8.4, 16, 8.5],
    verified: true,
  },

  knorr_bouillon_cube: {
    name: "Kostka rosołowa Knorr",
    type: "spc",
    color: "#FFEB3B",
    kcalPer100g: 30,
    unitWeights: {
      opak: 120,
      szt: 10,
      kst: 10,
    },
    nutrientsPer100g: [2.5, 2.5, 2.5],
    price: 41,
    verified: true,
  },

  //// SACHETS ////

  knorr_goulash_fix: {
    name: "Fix Gulasz Węgierski",
    type: "spc",
    subType: "sah",
    color: "#D84315",
    kcalPer100g: 318,
    unitWeights: {
      opak: 46,
    },
    nutrientsPer100g: [3.9, 60, 6.9],
    price: 108.7,
    verified: true,
  },

  knorr_chinese_fix: {
    name: "Fix Dania po Chińsku",
    type: "spc",
    subType: "sah",
    color: "#FF7043",
    kcalPer100g: 306,
    unitWeights: {
      opak: 37,
    },
    nutrientsPer100g: [2.7, 56, 9.7],
    price: 135.14,
    verified: true,
  },

  knorr_bolognese_fix: {
    name: "Fix Bolognese",
    type: "spc",
    subType: "sah",
    color: "#C62828",
    kcalPer100g: 306,
    unitWeights: {
      opak: 41,
    },
    nutrientsPer100g: [2.7, 57, 9.9],
    price: 122,
    verified: true,
  },

  knorr_crispy_chicken_fix: {
    name: "Fix Chrupiący Kurczak",
    type: "spc",
    subType: "sah",
    color: "#FBC02D",
    kcalPer100g: 342,
    unitWeights: {
      opak: 70,
    },
    nutrientsPer100g: [1.6, 68, 12],
    price: 64,
    verified: true,
  },

  knorr_carbonara_fix: {
    name: "Fix Spaghetti Carbonara",
    type: "spc",
    subType: "sah",
    color: "#FFFD8D",
    kcalPer100g: 498,
    unitWeights: {
      opak: 38,
    },
    nutrientsPer100g: [32, 35, 17],
    price: 131.58,
    verified: true,
  },

  knorr_napoli_fix: {
    name: "Fix Napoli",
    type: "spc",
    subType: "sah",
    color: "#E53935",
    kcalPer100g: 315,
    unitWeights: {
      opak: 45,
    },
    nutrientsPer100g: [1.6, 65, 7.5],
    price: 111.1,
    verified: true,
  },

  knorr_mushroom_sauce_fix: {
    name: "Fix Sos Pieczarkowy",
    type: "spc",
    subType: "sah",
    color: "#8D6E63",
    kcalPer100g: 320,
    unitWeights: {
      opak: 37,
    },
    nutrientsPer100g: [6.5, 5.5, 63],
  },

  knorr_jalapeno_chicken_fix: {
    name: "Fix Kurczaka Jalapeno",
    type: "spc",
    subType: "sah",
    color: "#C65A2E",
    kcalPer100g: 250,
    unitWeights: {
      opak: 30,
    },
    nutrientsPer100g: [5, 40, 10],
  },

  knorr_meatballs_fix: {
    name: "Fix Soczyste Kotlety Mielone",
    type: "spc",
    subType: "sah",
    color: "#C68642",
    kcalPer100g: 316,
    unitWeights: {
      opak: 70,
    },
    nutrientsPer100g: [4.6, 50, 20],
    verified: true,
  },

  knorr_mac_and_cheese_fix: {
    name: "Fix Mac'n Cheese",
    type: "spc",
    subType: "sah",
    color: "#F2B94B",
    kcalPer100g: 435,
    unitWeights: {
      opak: 43,
    },
    nutrientsPer100g: [20, 48, 14],
    price: 116.3,
    verified: true,
  },

  knorr_bolognese_chili_fix: {
    name: "Fix Bolognese Chili",
    type: "spc",
    subType: "sah",
    color: "#8D6E63",
    kcalPer100g: 333,
    unitWeights: {
      opak: 46,
    },
    nutrientsPer100g: [4.2, 62, 8.6],
    price: 98,
    verified: true,
  },

  knorr_chinese_fired_rice_fix: {
    name: "Fix Smażony Ryż po Chińsku",
    type: "spc",
    subType: "sah",
    color: "#D7CCC8",
    kcalPer100g: 385,
    unitWeights: {
      opak: 27,
    },
    nutrientsPer100g: [6.1, 45, 11],
    price: 167,
    verified: true,
  },

  knorr_sweet_sour_chicken_fix: {
    name: "Fix Kurczak Słodko-Kwaśny",
    type: "spc",
    subType: "sah",
    color: "#EF9A9A",
    kcalPer100g: 371,
    unitWeights: {
      opak: 64,
    },
    nutrientsPer100g: [4, 76, 3.1],
    price: 70,
    verified: true,
  },

  knorr_pork_ala_stroganoff_fix: {
    name: "Fix Schab à'la Stroganoff",
    type: "spc",
    subType: "sah",
    color: "#A1887F",
    kcalPer100g: 379,
    unitWeights: {
      opak: 56,
    },
    nutrientsPer100g: [10, 55, 11],
    price: 80,
    verified: true,
  },

  knorr_four_cheese_spaghetti_fix: {
    name: "Fix Spaghetti 4 Sery",
    type: "spc",
    subType: "sah",
    color: "#FFF3E0",
    kcalPer100g: 450,
    unitWeights: {
      opak: 39,
    },
    nutrientsPer100g: [23, 45, 14],
    price: 115,
    verified: true,
  },

  knorr_chicken_pasta_fix: {
    name: "Fix Chicken Pasta",
    type: "spc",
    subType: "sah",
    color: "#FFE0B2",
    kcalPer100g: 307,
    unitWeights: {
      opak: 48,
    },
    nutrientsPer100g: [3.9, 55, 11],
    price: 94,
    verified: true,
  },

  knorr_chili_con_carne_fix: {
    name: "Fix Chili con Carne",
    type: "spc",
    subType: "sah",
    color: "#B23A2A",
    kcalPer100g: 295,
    unitWeights: {
      opak: 37,
    },
    nutrientsPer100g: [4.7, 50, 9.2],
    price: 135,
    verified: true,
  },

  knorr_chicken_with_tomatoes_fix: {
    name: "Fix Kurczak z Pomidorami",
    type: "spc",
    subType: "sah",
    color: "#E57373",
    kcalPer100g: 307,
    unitWeights: {
      opak: 48,
    },
    nutrientsPer100g: [3.9, 55, 11],
    price: 104,
    verified: true,
  },

  knorr_alfredo_chicken_pasta_fix: {
    name: "Fix Chicken Alfredo",
    type: "spc",
    subType: "sah",
    color: "#F5E6C8",
    kcalPer100g: 428,
    unitWeights: {
      opak: 42,
    },
    nutrientsPer100g: [18, 49, 14],
    price: 119,
    verified: true,
  },

  knorr_ratatouille_fix: {
    name: "Fix Ratatouille",
    type: "spc",
    subType: "sah",
    color: "#D97745",
    kcalPer100g: 308,
    unitWeights: {
      opak: 40,
    },
    nutrientsPer100g: [2.8, 57, 10],
    price: 125,
    verified: true,
  },

  knorr_creamy_salmon_fix: {
    name: "Fix Kremowy Łosoś",
    type: "spc",
    subType: "sah",
    color: "#D97745",
    kcalPer100g: 476,
    unitWeights: {
      opak: 35,
    },
    nutrientsPer100g: [27, 47, 9.6],
    verified: true,
  },

  knorr_tagliatelle_chicken_fix: {
    name: "Fix Tagliatelle z Kurczakiem",
    type: "spc",
    subType: "sah",
    color: "#D97745",
    kcalPer100g: 513,
    unitWeights: {
      opak: 36,
    },
    nutrientsPer100g: [34, 44, 7.2],
    verified: true,
  },

  knorr_french_salad_fix: {
    name: "Sos sałatkowy Knorr francuski",
    type: "spc",
    subType: "sah",
    color: "#D8C78B",
    kcalPer100g: 280,
    unitWeights: {
      opak: 8,
    },
    nutrientsPer100g: [10, 42, 5],
    price: 187.5,
  },

  knorr_italian_salad_fix: {
    name: "Sos sałatkowy Knorr włoski",
    type: "spc",
    subType: "sah",
    color: "#A7B77B",
    kcalPer100g: 250,
    unitWeights: {
      opak: 8,
    },
    nutrientsPer100g: [7, 42, 6],
    price: 187.5,
  },

  knorr_greek_salad_fix: {
    name: "Sos sałatkowy Knorr grecki",
    type: "spc",
    subType: "sah",
    color: "#D5C28A",
    kcalPer100g: 260,
    unitWeights: {
      opak: 9,
    },
    nutrientsPer100g: [8, 43, 5],
    price: 166.7,
  },

  knorr_dill_herb_salad_fix: {
    name: "Sos sałatkowy Knorr koperkowo-ziołowy",
    type: "spc",
    subType: "sah",
    color: "#9EBC7B",
    kcalPer100g: 240,
    unitWeights: {
      opak: 9,
    },
    nutrientsPer100g: [6, 40, 6],
    price: 166.7,
  },

  winiary_tomato_sauce_fix: {
    name: "Fix Sos Pomidorowy",
    type: "spc",
    subType: "sah",
    color: "#D94C3A",
    kcalPer100g: 320,
    unitWeights: {
      opak: 33,
    },
    nutrientsPer100g: [4, 68, 8],
    price: 77,
  },

  winiary_dark_roast_sauce_fix: {
    name: "Fix Sos Pieczeniowy Ciemny",
    type: "spc",
    subType: "sah",
    color: "#5D4037",
    kcalPer100g: 36,
    unitWeights: {
      opak: 30,
    },
    nutrientsPer100g: [0.9, 6.3, 0.7],
    price: 85,
    verified: true,
  },

  winiary_chicken_fix: {
    name: "Fix Soczysty Kurczak",
    type: "spc",
    subType: "sah",
    color: "#BE5A33",
    kcalPer100g: 274,
    unitWeights: {
      opak: 28,
    },
    nutrientsPer100g: [6.5, 1.0, 10.8],
  },

  winiary_pork_neck_fix: {
    name: "Fix Karkówka",
    type: "spc",
    subType: "sah",
    color: "#BE5A33",
    kcalPer100g: 143,
    unitWeights: {
      opak: 30,
    },
    nutrientsPer100g: [7.6, 11.3, 6.5],
    price: 166,
  },

  winiary_peasant_stew_fix: {
    name: "Fix Chłopski Garnek",
    type: "spc",
    subType: "sah",
    color: "#6D4C41",
    kcalPer100g: 91,
    unitWeights: {
      opak: 40,
    },
    nutrientsPer100g: [4.2, 7.6, 5],
    price: 112.5,
    verified: true,
  },

  winiary_juicy_ribs_fix: {
    name: "Soczyste Żeberka",
    type: "spc",
    subType: "sah",
    color: "#8D3A2E",
    kcalPer100g: 238,
    unitWeights: {
      opak: 28,
    },
    nutrientsPer100g: [17.6, 1.8, 17.8],
    price: 125,
    verified: true,
  },

  winiary_hunters_sauce_fix: {
    name: "Fix Sos Myśliwski",
    type: "spc",
    subType: "sah",
    color: "#D97745",
    kcalPer100g: 411,
    unitWeights: {
      opak: 30,
    },
    nutrientsPer100g: [12.2, 65.6, 3.3],
    verified: true,
  },

  winiary_hearty_pot_fix: {
    name: "Fix Sycący Garnek",
    type: "spc",
    subType: "sah",
    color: "#D97745",
    kcalPer100g: 97,
    unitWeights: {
      opak: 39,
    },
    nutrientsPer100g: [4, 55, 10],
  },

  winiary_chicken_creamy_herbs_fix: {
    name: "Fix Winiary kurczak śmietankowo-ziołowy",
    type: "spc",
    subType: "sah",
    color: "#E2D3B3",
    kcalPer100g: 370,
    nutrientsPer100g: [7.5, 62.0, 9.0],
    unitWeights: {
      opak: 30,
    },
    price: 116.7,
  },

  kamis_penne_fix: {
    name: "Fix Makaron Penne z Pomidorami",
    type: "spc",
    subType: "sah",
    color: "#FFCC80",
    kcalPer100g: 331,
    unitWeights: {
      opak: 35,
    },
    nutrientsPer100g: [5.2, 60, 7.6],
    price: 85.5,
    verified: true,
  },

  kamis_chipotle_fix: {
    name: "Fix dip chipotle",
    type: "spc",
    subType: "sah",
    color: "#D84315",
    kcalPer100g: 350,
    unitWeights: {
      opak: 30,
      lz: 10,
    },
    nutrientsPer100g: [5, 60, 10],
    price: 115,
  },

  kania_curry_fix: {
    name: "Fix Curry",
    type: "spc",
    subType: "sah",
    color: "#F4B942",
    kcalPer100g: 335,
    unitWeights: {
      opak: 49,
    },
    nutrientsPer100g: [6.7, 55.8, 7.9],
    price: 62,
    verified: true,
  },

  kania_sechuan_fix: {
    name: "Fix Seczuański",
    type: "spc",
    subType: "sah",
    color: "#C43A31",
    kcalPer100g: 296,
    unitWeights: {
      opak: 43,
    },
    nutrientsPer100g: [1.8, 57.4, 7.1],
    price: 70,
    verified: true,
  },

  kania_pad_thai_fix: {
    name: "Fix Pad Thai",
    type: "spc",
    subType: "sah",
    color: "#D89B4A",
    kcalPer100g: 297,
    unitWeights: {
      opak: 41,
    },
    nutrientsPer100g: [1, 61.6, 6.2],
    price: 73,
    verified: true,
  },
};
