import type { IngredientItem } from "../types";

type IngId =
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

  //// FRESH ////
  | "chives"
  | "parsley"
  | "spring_onion"
  | "cress"
  | "fresh_basil"
  | "lemongrass"
  | "fresh_coriander";

export const iHRB: Record<IngId, IngredientItem> = {
  //// HERBS ////

  dill: {
    name: "Koperek",
    type: "hrb",
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
    type: "hrb",
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
    type: "hrb",
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
    type: "hrb",

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
    type: "hrb",
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
    type: "hrb",
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
    type: "hrb",
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
    type: "hrb",
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
    type: "hrb",
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
    type: "hrb",
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
    type: "hrb",
    color: "#81C784",
    kcalPer100g: 298,
    unitWeights: {
      lzi: 1,
      lz: 3,
    },
    nutrientsPer100g: [18, 55, 12],
  },

  //// FRESH ////

  chives: {
    name: "Szczypiorek",
    type: "hrb",
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
    type: "hrb",
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
    name: "Cebulka zielona",
    type: "hrb",
    subType: "fhr",
    color: "#81C784",
    kcalPer100g: 32,
    unitWeights: {
      peto: 100,
    },
    nutrientsPer100g: [1.8, 7.3, 2.6],
  },

  cress: {
    name: "Rzeżucha",
    type: "hrb",
    subType: "fhr",
    color: "#66BB6A",
    kcalPer100g: 32,
    unitWeights: {
      g: 10,
    },
    nutrientsPer100g: [0.7, 5.5, 2.6],
  },

  fresh_basil: {
    name: "Bazylia",
    type: "hrb",
    subType: "fhr",
    color: "#43A047",
    kcalPer100g: 23,
    unitWeights: {
      lz: 2,
      peto: 30,
    },
    nutrientsPer100g: [0.6, 2.7, 3.2],
  },

  lemongrass: {
    name: "Trawa cytrynowa",
    type: "hrb",
    subType: "fhr",
    color: "#8BC34A",
    kcalPer100g: 99,
    unitWeights: {
      szt: 20,
    },
    nutrientsPer100g: [0.5, 25.3, 1.8],
  },

  fresh_coriander: {
    name: "Świeża kolendra",
    type: "hrb",
    subType: "fhr",
    color: "#4CAF50",
    kcalPer100g: 23,
    unitWeights: {
      lz: 1,
      peto: 30,
    },
    nutrientsPer100g: [0.5, 3.7, 2.1],
  },
};
