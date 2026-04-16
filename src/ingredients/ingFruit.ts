import type { IngredientItem } from "../types";

type IngId =
  | "apple"
  | "pear"
  | "pineapple"
  | "kiwi"
  | "peach"
  | "nectarine"
  | "banana"
  | "lime"
  | "lemon"
  | "orange"
  | "mandarin"
  | "grapefruit"
  | "grapes_red"
  | "grapes_white"
  | "cherries_sour"
  | "cherries_sweet"
  | "strawberry"
  | "wild_strawberry"
  | "raspberries"
  | "blackberry"
  | "blueberry"
  | "olives"
  | "avocado"
  | "raisins"
  | "walnuts"
  | "coconut_flakes";

export const iFRT: Record<IngId, IngredientItem> = {
  //// FRUITS ////
  apple: {
    name: "Jabłko",
    type: "frt",
    color: "#D32F2F",
    kcalPer100g: 52,
    unitWeights: {
      szt: 150,
    },
    nutrientsPer100g: [0.2, 2.4, 0.4],
  },

  pear: {
    name: "Gruszka",
    type: "frt",
    subType: "per",
    color: "#A3C853",
    kcalPer100g: 57,
    unitWeights: {
      szt: 180,
    },
    nutrientsPer100g: [0.1, 15, 0.4],
  },

  pineapple: {
    name: "Ananas",
    type: "frt",
    subType: "ana",
    color: "#F4C542",
    kcalPer100g: 50,
    unitWeights: {
      plas: 80,
    },
    nutrientsPer100g: [0.1, 13, 0.5],
  },

  kiwi: {
    name: "Kiwi",
    type: "frt",
    subType: "kwi",
    color: "#6D9F3A",
    kcalPer100g: 61,
    unitWeights: {
      szt: 75,
    },
    nutrientsPer100g: [0.5, 15, 1.1],
  },

  peach: {
    name: "Brzoskwinia",
    type: "frt",
    subType: "pea",
    color: "#FFB07C",
    kcalPer100g: 39,
    unitWeights: {
      szt: 150,
    },
    nutrientsPer100g: [0.3, 10, 0.9],
  },

  nectarine: {
    name: "Nektarynka",
    type: "frt",
    subType: "pea",
    color: "#FF8C42",
    kcalPer100g: 44,
    unitWeights: {
      szt: 150,
    },
    nutrientsPer100g: [0.3, 11, 1.1],
  },

  banana: {
    name: "Banan",
    type: "frt",
    subType: "ban",
    color: "#F7E26B",
    kcalPer100g: 89,
    unitWeights: {
      szt: 120,
    },
    nutrientsPer100g: [0.3, 23, 1.1],
  },

  lime: {
    name: "Limonka",
    type: "frt",
    subType: "cit",
    color: "#7ED957",
    kcalPer100g: 30,
    unitWeights: {
      szt: 60,
    },
    nutrientsPer100g: [0.2, 11, 0.7],
  },

  lemon: {
    name: "Cytryna",
    type: "frt",
    subType: "cit",
    color: "#FFD84D",
    kcalPer100g: 29,
    unitWeights: {
      szt: 120,
    },
    nutrientsPer100g: [0.3, 9, 1.1],
  },

  orange: {
    name: "Pomarańcza",
    type: "frt",
    subType: "ora",
    color: "#FF9800",
    kcalPer100g: 47,
    unitWeights: {
      szt: 180,
    },
    nutrientsPer100g: [0.1, 12, 0.9],
  },

  mandarin: {
    name: "Mandarynka",
    type: "frt",
    subType: "ora",
    color: "#FFB347",
    kcalPer100g: 53,
    unitWeights: {
      szt: 80,
    },
    nutrientsPer100g: [0.3, 13, 0.8],
  },

  grapefruit: {
    name: "Grejpfrut",
    type: "frt",
    subType: "ora",
    color: "#FF6F61",
    kcalPer100g: 42,
    unitWeights: {
      szt: 300,
    },
    nutrientsPer100g: [0.1, 11, 0.8],
  },

  grapes_red: {
    name: "Winogrona czerwone",
    type: "frt",
    subType: "grp",
    color: "#8E44AD",
    kcalPer100g: 69,
    nutrientsPer100g: [0.2, 18, 0.7],
  },

  grapes_white: {
    name: "Winogrona białe",
    type: "frt",
    subType: "grp",
    color: "#D4E157",
    kcalPer100g: 67,
    nutrientsPer100g: [0.2, 17, 0.6],
  },

  cherries_sour: {
    name: "Wiśnie",
    type: "frt",
    subType: "che",
    color: "#C21833",
    kcalPer100g: 50,
    nutrientsPer100g: [0.3, 12, 1],
  },

  cherries_sweet: {
    name: "Czereśnie",
    type: "frt",
    subType: "che",
    color: "#8B0000",
    kcalPer100g: 63,
    nutrientsPer100g: [0.2, 16, 1.1],
  },

  strawberry: {
    name: "Truskawki",
    type: "frt",
    subType: "str",
    color: "#E53935",
    kcalPer100g: 32,
    nutrientsPer100g: [0.3, 7.7, 0.7],
  },

  wild_strawberry: {
    name: "Poziomka",
    type: "frt",
    subType: "str",
    color: "#C62828",
    kcalPer100g: 41,
    nutrientsPer100g: [0.4, 9, 0.8],
  },

  raspberries: {
    name: "Maliny",
    type: "frt",
    subType: "rbr",
    color: "#D81B60",
    kcalPer100g: 52,
    unitWeights: {
      szk: 125,
    },
    nutrientsPer100g: [0.3, 12, 1.1],
  },

  blackberry: {
    name: "Jeżyny",
    type: "frt",
    subType: "rbr",
    color: "#4A235A",
    kcalPer100g: 43,
    nutrientsPer100g: [0.5, 10, 1.4],
  },

  blueberry: {
    name: "Borówki",
    type: "oth",
    subType: "brr",
    color: "#4B5CC4",
    kcalPer100g: 57,
    unitWeights: {
      szk: 150,
    },
    nutrientsPer100g: [0.3, 14, 0.7],
  },

  olives: {
    name: "Oliwki",
    type: "frt",
    subType: "oli",
    color: "#556B2F",
    kcalPer100g: 115,
    unitWeights: {
      szt: 5,
    },
    nutrientsPer100g: [11, 6, 0.8],
  },

  avocado: {
    name: "Awokado",
    type: "frt",
    subType: "avc",
    color: "#7CB342",
    kcalPer100g: 160,
    unitWeights: {
      szt: 250,
    },
    nutrientsPer100g: [15, 9, 2],
  },

  //// DRIED ////

  raisins: {
    name: "Rodzynki",
    type: "frt",
    subType: "alm",
    color: "#755562",
    kcalPer100g: 314,
    unitWeights: {
      lz: 10,
    },
    nutrientsPer100g: [0.7, 72, 3],
  },

  //// NUTS ////

  walnuts: {
    name: "Orzechy włoskie",
    type: "frt",
    subType: "nut",
    color: "#8D6E63",
    kcalPer100g: 654,
    unitWeights: {
      lz: 10,
    },
    nutrientsPer100g: [65, 13, 15],
  },

  coconut_flakes: {
    name: "Wiórki kokosowe",
    type: "frt",
    subType: "nut",
    color: "#F5F5F5",
    kcalPer100g: 660,
    unitWeights: {
      lz: 7,
    },
    nutrientsPer100g: [64, 24, 6],
  },
};
