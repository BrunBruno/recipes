import type { IngredientItem } from "../types";

type IngId =
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
  | "black_sesame"
  | "cumin"
  | "dill"
  | "thyme"
  | "marjoram"
  | "herbes_de_provence"
  | "wild_garlic"
  | "bay_leaf"
  | "allspice"
  | "caraway"
  | "savory"
  | "oregano"
  | "basil"
  | "coriander"
  | "maggi"
  | "vegetable_seasoning"
  | "potato_seasoning"
  | "gyros_spice"
  | "knorr_bouillon_cube"
  | "knorr_goulash_fix"
  | "knorr_chinese_fix"
  | "knorr_bolognese_fix"
  | "ketchup"
  | "mustard"
  | "sarepska_mustard"
  | "mayonnaise"
  | "garlic_sauce"
  | "sriracha"
  | "barbecue_sauce"
  | "curry_sauce"
  | "tomato_paste"
  | "sweet_sour_sauce"
  | "sechuan_chili_fusion";

export const iSPC: Record<IngId, IngredientItem> = {
  salt: {
    name: "Sól",
    type: "spc",
    color: "#ffffff",
    kcalPer100g: 0,
    unitWeights: {
      lzi: 5,
    },
    nutrientsPer100g: [0, 0, 0],
  },

  black_pepper: {
    name: "Pieprz",
    type: "spc",
    kcalPer100g: 251,
    unitWeights: {
      lzi: 2,
      ziar: 0.2,
    },
    nutrientsPer100g: [3.3, 64, 10],
  },

  cayenne_pepper: {
    name: "Pieprz cayenne",
    color: "#f03e3e",
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
    color: "#ffffff",
    kcalPer100g: 331,
    unitWeights: {
      lzi: 3,
    },
    nutrientsPer100g: [0.7, 73, 17],
  },

  sweet_paprika: {
    name: "Papryka słodka",
    type: "spc",
    color: "#f03e3e",
    kcalPer100g: 282,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [13, 54, 14],
  },

  hot_paprika: {
    name: "Papryka ostra",
    type: "spc",
    color: "#f03e3e",
    kcalPer100g: 282,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [13, 54, 14],
  },

  smoked_paprika: {
    name: "Papryka wędzona",
    type: "spc",
    color: "#f03e3e",
    kcalPer100g: 282,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [13, 54, 14],
  },

  chilli: {
    name: "Chilli",
    type: "spc",
    color: "#f03e3e",
    kcalPer100g: 40,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [0.4, 9, 2],
  },

  curry: {
    name: "Curry",
    type: "spc",
    color: "#fcc419",
    kcalPer100g: 325,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [14, 58, 12],
  },

  cinnamon: {
    name: "Cynamon",
    type: "spc",
    color: "#b79268",
    kcalPer100g: 247,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [1.2, 81, 4],
  },

  nutmeg: {
    name: "Gałka muszkatołowa",
    type: "spc",
    color: "#b79268",
    kcalPer100g: 525,
    unitWeights: {
      ziar: 0.2,
    },
    nutrientsPer100g: [36, 49, 6],
  },

  allspice: {
    name: "Ziele angielskie",
    type: "spc",
    kcalPer100g: 263,
    unitWeights: {
      ziar: 0.2,
    },
    nutrientsPer100g: [8.7, 72, 6],
  },

  black_sesame: {
    name: "Czarny sezam",
    type: "spc",
    kcalPer100g: 573,
    unitWeights: {
      lzi: 3,
    },
    nutrientsPer100g: [50, 23, 18],
  },

  cumin: {
    name: "Kumin rzymski",
    type: "spc",
    color: "#fcc419",
    kcalPer100g: 375,
    unitWeights: {
      lzi: 2,
    },
    nutrientsPer100g: [22, 44, 18],
  },

  ///////////////////////////////////////

  vegetable_seasoning: {
    name: "Jarzynka",
    type: "spc",
    color: "#fcc419",
    kcalPer100g: 200,
    unitWeights: {
      lzi: 3,
    },
    nutrientsPer100g: [1, 40, 5],
  },

  potato_seasoning: {
    name: "Przyprawa do ziemniaków",
    type: "spc",
    color: "#f76707",
    kcalPer100g: 250,
    unitWeights: {
      lz: 10,
      lzi: 5,
    },
    nutrientsPer100g: [5, 45, 8],
  },

  gyros_spice: {
    name: "Przyprawa gyros",
    type: "spc",
    color: "#f76707",
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
    color: "#fcc419",
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
    kcalPer100g: 92,
    unitWeights: {
      opak: 40,
    },
    nutrientsPer100g: [4.6, 2.6, 9.8],
    verified: true,
  },

  knorr_chinese_fix: {
    name: "Fix Knorr do dań po chińsku",
    type: "spc",
    kcalPer100g: 250,
    unitWeights: {
      opak: 40,
    },
    nutrientsPer100g: [3, 50, 8],
  },

  knorr_bolognese_fix: {
    name: "Fix Knorr Bolognese",
    type: "spc",
    kcalPer100g: 141,
    unitWeights: {
      opak: 40,
    },
    nutrientsPer100g: [3.8, 18, 8.1],
    verified: true,
  },

  ///////////////////////////////////////

  dill: {
    name: "Koperek",
    type: "spc",
    subType: "hrb",
    color: "#40c057",
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
    color: "#40c057",
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
    color: "#40c057",
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
    color: "#40c057",
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
    color: "#40c057",
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
    color: "#40c057",
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
    color: "#b79268",
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
    color: "#40c057",
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
    color: "#40c057",
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
    color: "#40c057",
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
    color: "#40c057",
    kcalPer100g: 298,
    unitWeights: {
      lzi: 1,
      lz: 3,
    },
    nutrientsPer100g: [18, 55, 12],
  },

  ///////////////////////////////////////

  ketchup: {
    name: "Ketchup",
    type: "spc",
    subType: "sau",
    color: "#f03e3e",
    kcalPer100g: 109,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [0, 25, 1.7],
    verified: true,
  },

  mustard: {
    name: "Musztarda",
    type: "spc",
    subType: "sau",
    color: "#fcc419",
    kcalPer100g: 96,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [5.5, 3.1, 5.2],
    verified: true,
  },

  sarepska_mustard: {
    name: "Musztarda sarepska",
    type: "spc",
    subType: "sau",
    color: "#fcc419",
    kcalPer100g: 101,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [5.1, 8.3, 3.7],
    verified: true,
  },

  mayonnaise: {
    name: "Majonez",
    type: "spc",
    subType: "sau",
    color: "#ffffff",
    kcalPer100g: 631,
    unitWeights: {
      lz: 15,
      lzi: 5,
      opak: 500,
    },
    nutrientsPer100g: [68, 2.3, 1.9],
    verified: true,
  },

  garlic_sauce: {
    name: "Sos czosnkowy",
    type: "spc",
    subType: "sau",
    color: "#ffffff",
    kcalPer100g: 371,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [35, 11, 1.9],
    verified: true,
  },

  sriracha: {
    name: "Sos sriracha",
    type: "spc",
    subType: "sau",
    color: "#f03e3e",
    kcalPer100g: 87,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [0.5, 19, 1.6],
    verified: true,
  },

  barbecue_sauce: {
    name: "Sos barbecue",
    type: "spc",
    subType: "sau",
    color: "#f03e3e",
    kcalPer100g: 142,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [0.2, 34, 0.8],
    verified: true,
  },

  curry_sauce: {
    name: "Sos curry",
    type: "spc",
    subType: "sau",
    color: "#f76707",
    kcalPer100g: 328,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [28, 18, 1.6],
    verified: true,
  },

  tomato_paste: {
    name: "Koncentrat pomidorowy",
    type: "spc",
    subType: "sau",
    color: "#f03e3e",
    kcalPer100g: 82,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [0.3, 18, 4],
  },

  maggi: {
    name: "Maggi",
    type: "spc",
    subType: "sau",
    color: "#868e96",
    kcalPer100g: 16,
    unitWeights: {
      ml: 1,
      lz: 15,
    },
    nutrientsPer100g: [0, 3, 1],
  },

  ///////////////////////////////////////

  sweet_sour_sauce: {
    name: "Sos słodko-kwaśny",
    type: "spc",
    subType: "sau",
    color: "#f03e3e",
    kcalPer100g: 120,
    unitWeights: {
      opak: 250,
    },
    nutrientsPer100g: [2, 24, 1],
  },

  sechuan_chili_fusion: {
    name: "Seczuański chili fusion",
    type: "spc",
    subType: "sau",
    color: "#f03e3e",
    kcalPer100g: 71,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [0, 18, 1],
  },
};
