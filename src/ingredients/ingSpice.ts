import type { IngredientItem } from "../types";

type IngId =
  //// SPICES ////
  | "salt"
  | "black_pepper"
  | "cayenne_pepper"
  | "granulated_garlic"
  | "sweet_paprika"
  | "hot_paprika"
  | "smoked_paprika"
  | "chilli"
  | "curry"
  | "cinnamon"
  | "nutmeg"
  | "allspice"
  | "black_sesame"
  | "cumin"
  | "garam_masala"

  //// HERBS ////
  | "dill"
  | "thyme"
  | "marjoram"
  | "herbes_de_provence"
  | "wild_garlic"
  | "bay_leaf"
  | "caraway"
  | "savory"
  | "oregano"
  | "basil"
  | "coriander"

  //// SEASONINGS ////
  | "vegetable_seasoning"
  | "potato_seasoning"
  | "meat_seasoning"
  | "gyros_spice"
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
  //
  | "knorr_bolognese_chili_fix"
  | "knorr_chinese_fired_rice_fix"
  | "knorr_sweet_sour_chicken_fix"
  | "knorr_pork_ala_stroganoff_fix"
  | "knorr_four_cheese_spaghetti_fix"
  | "knorr_chicken_pasta_fix"
  //
  | "winiary_tomato_sauce_fix"
  | "winiary_pork_neck_fix"
  | "winiary_chicken_fix"
  //
  | "winiary_dark_roast_sauce_fix"
  | "winiary_peasant_stew_fix"
  //
  | "kamis_penne_fix";

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
  },

  sweet_paprika: {
    name: "Papryka słodka",
    type: "spc",
    color: "#E53935",
    kcalPer100g: 282,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [13, 54, 14],
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
  },

  black_sesame: {
    name: "Czarny sezam",
    type: "spc",
    color: "#4F4F4F",
    kcalPer100g: 573,
    unitWeights: {
      lzi: 3,
    },
    nutrientsPer100g: [50, 23, 18],
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
  },

  //// SEASONINGS ////

  vegetable_seasoning: {
    name: "Jarzynka",
    type: "spc",
    color: "#FCC419",
    kcalPer100g: 200,
    unitWeights: {
      lzi: 3,
    },
    nutrientsPer100g: [1, 40, 5],
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
  },

  knorr_bouillon_cube: {
    name: "Kostka rosołowa Knorr",
    type: "spc",
    color: "#FFEB3B",
    kcalPer100g: 6,
    unitWeights: {
      opak: 120,
      szt: 10,
    },
    nutrientsPer100g: [0.5, 0.5, 0.5],
  },

  knorr_goulash_fix: {
    name: "Fix Knorr gulasz węgierski",
    type: "spc",
    color: "#D84315",
    kcalPer100g: 318,
    unitWeights: {
      opak: 46,
    },
    nutrientsPer100g: [3.9, 60, 6.9],
    price: 98,
    verified: true,
  },

  knorr_chinese_fix: {
    name: "Fix Knorr do dań po chińsku",
    type: "spc",
    color: "#FF7043",
    kcalPer100g: 250,
    unitWeights: {
      opak: 40,
    },
    nutrientsPer100g: [3, 50, 8],
  },

  knorr_bolognese_fix: {
    name: "Fix Knorr bolognese",
    type: "spc",
    color: "#C62828",
    kcalPer100g: 141,
    unitWeights: {
      opak: 40,
    },
    nutrientsPer100g: [3.8, 18, 8.1],
    verified: true,
  },

  knorr_crispy_chicken_fix: {
    name: "Fix Knorr chrupiący kurczak",
    type: "spc",
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
    name: "Fix Knorr spaghetti carbonara",
    type: "spc",
    color: "#FFFD8D",
    kcalPer100g: 500,
    unitWeights: {
      opak: 38,
    },
    nutrientsPer100g: [32, 35, 17],
    verified: true,
  },

  knorr_napoli_fix: {
    name: "Fix Napoli",
    type: "spc",
    color: "#E53935",
    kcalPer100g: 280,
    unitWeights: {
      opak: 40,
    },
    nutrientsPer100g: [6, 60, 5],
  },

  knorr_mushroom_sauce_fix: {
    name: "Knorr Fix Sos Pieczarkowy",
    type: "spc",
    color: "#8D6E63",
    kcalPer100g: 320,
    unitWeights: {
      opak: 37,
    },
    nutrientsPer100g: [6.5, 5.5, 63],
  },

  knorr_jalapeno_chicken_fix: {
    name: "Przyprawa do kurczaka jalapeno",
    type: "spc",
    color: "#C65A2E",
    kcalPer100g: 250,
    unitWeights: {
      opak: 30,
    },
    nutrientsPer100g: [5, 40, 10],
  },

  knorr_meatballs_fix: {
    name: "Knorr Fix Soczyste Kotlety Mielone",
    type: "spc",
    color: "#C68642",
    kcalPer100g: 316,
    unitWeights: {
      opak: 70,
    },
    nutrientsPer100g: [4.6, 50, 20],
    verified: true,
  },

  knorr_mac_and_cheese_fix: {
    name: "Knorr Fix Mac'n Cheese",
    type: "spc",
    color: "#F2B94B",
    kcalPer100g: 435,
    unitWeights: {
      opak: 43,
    },
    nutrientsPer100g: [20, 48, 14],
    verified: true,
  },

  knorr_bolognese_chili_fix: {
    name: "Knorr Spaghetti Bolognese Chili Fix",
    type: "spc",
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
    name: "Knorr Smażony Ryż po Chińsku Fix",
    type: "spc",
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
    name: "Knorr Kurczak Słodko-Kwaśny Fix",
    type: "spc",
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
    name: "Knorr Schab à'la Stroganoff Fix",
    type: "spc",
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
    name: "Knorr Spaghetti 4 Sery Fix",
    type: "spc",
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
    name: "Knorr Chicken Pasta Fix",
    type: "spc",
    color: "#FFE0B2",
    kcalPer100g: 307,
    unitWeights: {
      opak: 48,
    },
    nutrientsPer100g: [3.9, 55, 11],
    price: 94,
    verified: true,
  },

  winiary_tomato_sauce_fix: {
    name: "Winiary Sos Pomidorowy",
    type: "spc",
    color: "#D94C3A",
    kcalPer100g: 320,
    unitWeights: {
      opak: 33,
    },
    nutrientsPer100g: [4, 68, 8],
    price: 77,
  },

  winiary_dark_roast_sauce_fix: {
    name: "Winiary Sos Pieczeniowy Ciemny",
    type: "spc",
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
    name: "Winiary Soczysty Kurczak Fix",
    type: "spc",
    color: "#BE5A33",
    kcalPer100g: 274,
    unitWeights: {
      opak: 28,
    },
    nutrientsPer100g: [6.5, 1.0, 10.8],
  },

  winiary_pork_neck_fix: {
    name: "Winiary Karkówka Fix",
    type: "spc",
    color: "#BE5A33",
    kcalPer100g: 143,
    unitWeights: {
      opak: 30,
    },
    nutrientsPer100g: [7.6, 11.3, 6.5],
  },

  winiary_peasant_stew_fix: {
    name: "Winiary Chłopski Garnek Fix",
    type: "spc",
    color: "#6D4C41",
    kcalPer100g: 91,
    unitWeights: {
      opak: 40,
    },
    nutrientsPer100g: [4.2, 7.6, 5],
    price: 112.5,
    verified: true,
  },

  kamis_penne_fix: {
    name: "Kamis Penne Fix",
    type: "spc",
    color: "#FFCC80",
    kcalPer100g: 331,
    unitWeights: {
      opak: 35,
    },
    nutrientsPer100g: [5.2, 60, 7.6],
    price: 85.5,
    verified: true,
  },

  //// HERBS ////

  dill: {
    name: "Koperek",
    type: "spc",
    subType: "hrb",
    color: "#4CAF50",
    kcalPer100g: 43,
    unitWeights: {
      lzi: 1,
      lz: 3,
    },
    nutrientsPer100g: [1.1, 7, 3.5],
  },

  thyme: {
    name: "Tymianek",
    type: "spc",
    subType: "hrb",
    color: "#6D8F4E",
    kcalPer100g: 276,
    unitWeights: {
      lzi: 1,
      lz: 3,
    },
    nutrientsPer100g: [7.4, 63, 9],
  },

  marjoram: {
    name: "Majeranek",
    type: "spc",
    subType: "hrb",
    color: "#7CB342",
    kcalPer100g: 271,
    unitWeights: {
      lzi: 1,
      lz: 3,
    },
    nutrientsPer100g: [7, 61, 13],
  },

  herbes_de_provence: {
    name: "Zioła prowansalskie",
    type: "spc",
    subType: "hrb",
    color: "#8BC34A",
    kcalPer100g: 241,
    unitWeights: {
      lzi: 1,
      lz: 3,
    },
    nutrientsPer100g: [6, 50, 10],
  },

  wild_garlic: {
    name: "Czosnek niedźwiedzi",
    type: "spc",
    subType: "hrb",
    color: "#66BB6A",
    kcalPer100g: 42,
    unitWeights: {
      lzi: 1,
      lz: 3,
    },
    nutrientsPer100g: [0.7, 8, 2.4],
  },

  bay_leaf: {
    name: "Liść laurowy",
    type: "spc",
    subType: "hrb",
    color: "#5D8C3A",
    kcalPer100g: 313,
    unitWeights: {
      lst: 1,
      szt: 1,
    },
    nutrientsPer100g: [8.4, 75, 8],
  },

  caraway: {
    name: "Kminek",
    type: "spc",
    subType: "hrb",
    color: "#795548",
    kcalPer100g: 333,
    unitWeights: {
      lzi: 1,
      lz: 3,
    },
    nutrientsPer100g: [14.6, 50, 20],
  },

  savory: {
    name: "Cząber",
    type: "spc",
    subType: "hrb",
    color: "#689F38",
    kcalPer100g: 287,
    unitWeights: {
      lzi: 1,
      lz: 3,
    },
    nutrientsPer100g: [5.9, 69, 6.7],
  },

  oregano: {
    name: "Oregano",
    type: "spc",
    subType: "hrb",
    color: "#558B2F",
    kcalPer100g: 306,
    unitWeights: {
      lzi: 1,
      lz: 3,
    },
    nutrientsPer100g: [10, 64, 11],
  },

  basil: {
    name: "Bazylia",
    type: "spc",
    subType: "hrb",
    color: "#2E7D32",
    kcalPer100g: 233,
    unitWeights: {
      lzi: 1,
      lz: 3,
    },
    nutrientsPer100g: [4, 61, 23],
  },

  coriander: {
    name: "Kolendra",
    type: "spc",
    subType: "hrb",
    color: "#81C784",
    kcalPer100g: 298,
    unitWeights: {
      lzi: 1,
      lz: 3,
    },
    nutrientsPer100g: [18, 55, 12],
  },
};
