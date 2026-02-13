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
  | "maggi"
  | "vegetable_seasoning"
  | "potato_seasoning"
  | "knorr_bouillon_cube"
  | "knorr_goulash_fix"
  | "knorr_chinese_fix"
  | "knorr_bolognese_fix";

export const iSPC: Record<IngId, IngredientItem> = {
  salt: {
    name: "Sól",
    type: "spc",
    kcalPer100g: 0,
    unitWeights: {
      łyżeczka: 5,
    },
    defaultUnit: "szklanka",
  },

  black_pepper: {
    name: "Pieprz",
    type: "spc",
    kcalPer100g: 251,
    unitWeights: {
      łyżeczka: 2,
    },
  },

  cayenne_pepper: {
    name: "Pieprz cayenne",
    type: "spc",
    kcalPer100g: 318,
    unitWeights: {
      łyżeczka: 2,
    },
  },

  granulated_garlic: {
    name: "Czosnek granulowany",
    type: "spc",
    kcalPer100g: 331,
    unitWeights: {
      łyżeczka: 3,
    },
  },

  sweet_paprika: {
    name: "Papryka słodka",
    type: "spc",
    kcalPer100g: 282,
    unitWeights: {
      łyżeczka: 2,
    },
  },

  hot_paprika: {
    name: "Papryka ostra",
    type: "spc",
    kcalPer100g: 282,
    unitWeights: {
      łyżeczka: 2,
    },
  },

  smoked_paprika: {
    name: "Papryka wędzona",
    type: "spc",
    kcalPer100g: 282,
    unitWeights: {
      łyżeczka: 2,
    },
  },

  chilli: {
    name: "Chilli",
    type: "spc",
    kcalPer100g: 40,
    unitWeights: {
      łyżeczka: 2,
    },
  },

  curry: {
    name: "Curry",
    type: "spc",
    kcalPer100g: 325,
    unitWeights: {
      łyżeczka: 2,
    },
  },

  cinnamon: {
    name: "Cynamon",
    type: "spc",
    kcalPer100g: 247,
    unitWeights: {
      łyżeczka: 2,
    },
  },

  nutmeg: {
    name: "Gałka muszkatołowa",
    type: "spc",
    kcalPer100g: 525,
  },

  allspice: {
    name: "Ziele angielskie",
    type: "spc",
    kcalPer100g: 263,
    unitWeights: {
      ziarno: 0.2,
    },
    defaultUnit: "ziarno",
  },

  black_sesame: {
    name: "Czarny sezam",
    type: "spc",
    kcalPer100g: 573,
    unitWeights: {
      łyżeczka: 3,
    },
  },

  //

  dill: {
    name: "Koperek",
    type: "hrb",
    kcalPer100g: 43,
    unitWeights: {
      łyżeczka: 1,
      łyżka: 3,
    },
  },

  thyme: {
    name: "Tymianek",
    type: "hrb",
    kcalPer100g: 276,
    unitWeights: {
      łyżeczka: 1,
      łyżka: 3,
    },
  },

  marjoram: {
    name: "Majeranek",
    type: "hrb",
    kcalPer100g: 271,
    unitWeights: {
      łyżeczka: 1,
      łyżka: 3,
    },
  },

  herbes_de_provence: {
    name: "Zioła prowansalskie",
    type: "hrb",
    kcalPer100g: 241,
    unitWeights: {
      łyżeczka: 1,
      łyżka: 3,
    },
  },

  wild_garlic: {
    name: "Niedźwiedzi czosnek",
    type: "hrb",
    kcalPer100g: 42,
    unitWeights: {
      łyżeczka: 1,
      łyżka: 3,
    },
  },

  bay_leaf: {
    name: "Liść laurowy",
    type: "hrb",
    kcalPer100g: 313,
    unitWeights: {
      listek: 1,
    },
    defaultUnit: "listek",
  },

  caraway: {
    name: "Kminek",
    type: "hrb",
    kcalPer100g: 333,
    unitWeights: {
      łyżeczka: 1,
      łyżka: 3,
    },
  },

  savory: {
    name: "Cząber",
    type: "hrb",
    kcalPer100g: 287,
    unitWeights: {
      łyżeczka: 1,
      łyżka: 3,
    },
  },

  oregano: {
    name: "Oregano",
    type: "hrb",
    kcalPer100g: 306,
    unitWeights: {
      łyżeczka: 1,
      łyżka: 3,
    },
  },

  basil: {
    name: "Bazylia",
    type: "hrb",
    kcalPer100g: 233,
    unitWeights: {
      łyżeczka: 1,
      łyżka: 3,
    },
  },

  //

  maggi: {
    name: "Maggi",
    type: "spc",
    kcalPer100g: 16,
    unitWeights: {
      ml: 1,
      łyżka: 15,
    },
    defaultUnit: "ml",
  },

  vegetable_seasoning: {
    name: "Jarzynka",
    type: "spc",
    kcalPer100g: 200,
    unitWeights: {
      łyżeczka: 3,
    },
  },

  potato_seasoning: {
    name: "Przyprawa do ziemniaków",
    type: "spc",
    kcalPer100g: 250,
    unitWeights: {
      łyżka: 10,
      łyżeczka: 5,
    },
  },

  knorr_bouillon_cube: {
    name: "Kostka rosołowa Knorr",
    type: "spc",
    kcalPer100g: 375,
    unitWeights: {
      szt: 10,
    },
    defaultUnit: "szt",
  },

  knorr_goulash_fix: {
    name: "Fix Knorr gulasz węgierski",
    type: "spc",
    kcalPer100g: 280,
    unitWeights: {
      opak: 40,
    },
    defaultUnit: "opak",
  },

  knorr_chinese_fix: {
    name: "Fix Knorr do dań po chińsku",
    type: "spc",
    kcalPer100g: 250,
    unitWeights: {
      szt: 40,
    },
    defaultUnit: "opak",
  },

  knorr_bolognese_fix: {
    name: "Fix Knorr Bolognese",
    type: "spc",
    kcalPer100g: 250,
    unitWeights: {
      opak: 40,
    },
    defaultUnit: "opak",
  },
};
