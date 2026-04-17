import type { IngredientItem } from "../types";

type IngId =
  //// FRUITS ////
  | "apple"
  | "pear"
  | "fig"
  | "pineapple"
  | "kiwi"
  | "passion_fruit"
  | "peach"
  | "nectarine"
  | "plum"
  | "apricot"
  | "mango"
  | "papaya"
  | "melon"
  | "watermelon"
  | "pomegranate"
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
  | "redcurrant"
  | "blackcurrant"
  | "cranberry"
  | "gooseberry"
  | "olives"
  | "avocado"
  | "raisins"

  //// NUTS ////
  | "walnuts"
  | "coconut_flakes"
  | "almonds"
  | "hazelnuts"
  | "cashews"
  | "peanuts"
  | "pistachios"
  | "coconut";

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

  fig: {
    name: "Figa",
    type: "frt",
    subType: "per",
    color: "#8B5E3C",
    kcalPer100g: 74,
    unitWeights: {
      szt: 50,
    },
    nutrientsPer100g: [0.3, 19, 0.8],
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

  passion_fruit: {
    name: "Marakuja",
    type: "frt",
    subType: "kwi",
    color: "#6A0DAD",
    kcalPer100g: 97,
    unitWeights: {
      szt: 18,
    },
    nutrientsPer100g: [0.7, 23, 2.2],
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

  plum: {
    name: "Śliwka",
    type: "frt",
    subType: "plu",
    color: "#7B3F8C",
    kcalPer100g: 46,
    unitWeights: {
      szt: 55,
    },
    nutrientsPer100g: [0.3, 11, 0.7],
  },

  apricot: {
    name: "Morela",
    type: "frt",
    subType: "plu",
    color: "#F4A460",
    kcalPer100g: 48,
    unitWeights: {
      szt: 35,
    },
    nutrientsPer100g: [0.4, 11, 1.4],
  },

  mango: {
    name: "Mango",
    type: "frt",
    subType: "man",
    color: "#FFB347",
    kcalPer100g: 60,
    unitWeights: {
      szt: 300,
    },
    nutrientsPer100g: [0.4, 15, 0.8],
  },

  papaya: {
    name: "Papaja",
    type: "frt",
    subType: "man",
    color: "#FFA07A",
    kcalPer100g: 43,
    unitWeights: {
      szt: 500,
    },
    nutrientsPer100g: [0.3, 11, 0.5],
  },

  melon: {
    name: "Melon",
    type: "frt",
    subType: "mel",
    color: "#E6D690",
    kcalPer100g: 34,
    unitWeights: {
      szt: 1000,
    },
    nutrientsPer100g: [0.2, 8, 0.8],
  },

  watermelon: {
    name: "Arbuz",
    type: "frt",
    subType: "mel",
    color: "#FC6C6C",
    kcalPer100g: 30,
    unitWeights: {
      szt: 3000,
    },
    nutrientsPer100g: [0.2, 8, 0.6],
  },

  pomegranate: {
    name: "Granat",
    type: "frt",
    subType: "gra",
    color: "#C72C48",
    kcalPer100g: 83,
    unitWeights: {
      szt: 280,
    },
    nutrientsPer100g: [1.2, 19, 1.7],
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
    type: "frt",
    subType: "brr",
    color: "#4B5CC4",
    kcalPer100g: 57,
    unitWeights: {
      szk: 150,
    },
    nutrientsPer100g: [0.3, 14, 0.7],
  },

  cranberry: {
    name: "Żurawina",
    type: "frt",
    subType: "brr",
    color: "#B22222",
    kcalPer100g: 46,
    unitWeights: {
      szk: 100,
    },
    nutrientsPer100g: [0.1, 12, 0.4],
  },

  blackcurrant: {
    name: "Czarna porzeczka",
    type: "frt",
    subType: "brr",
    color: "#2E003E",
    kcalPer100g: 63,
    unitWeights: {
      szk: 100,
    },
    nutrientsPer100g: [0.4, 15, 1.4],
  },

  redcurrant: {
    name: "Czerwona porzeczka",
    type: "frt",
    subType: "brr",
    color: "#D7263D",
    kcalPer100g: 56,
    unitWeights: {
      szk: 100,
    },
    nutrientsPer100g: [0.2, 14, 1.4],
  },

  gooseberry: {
    name: "Agrest",
    type: "frt",
    subType: "brr",
    color: "#A3C585",
    kcalPer100g: 44,
    unitWeights: {
      szk: 100,
    },
    nutrientsPer100g: [0.6, 10, 0.9],
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

  almonds: {
    name: "Migdały",
    type: "frt",
    subType: "nut",
    color: "#D2B48C",
    kcalPer100g: 579,
    unitWeights: {
      lz: 10,
      opak: 200,
    },
    nutrientsPer100g: [50, 22, 21],
  },

  hazelnuts: {
    name: "Orzechy laskowe",
    type: "frt",
    subType: "nut",
    color: "#A0522D",
    kcalPer100g: 628,
    unitWeights: {
      lz: 10,
      opak: 200,
    },
    nutrientsPer100g: [61, 17, 15],
  },

  cashews: {
    name: "Orzechy nerkowca",
    type: "frt",
    subType: "nut",
    color: "#E6BE8A",
    kcalPer100g: 553,
    unitWeights: {
      lz: 10,
      opak: 200,
    },
    nutrientsPer100g: [44, 30, 18],
  },

  peanuts: {
    name: "Orzeszki ziemne",
    type: "frt",
    subType: "nut",
    color: "#C68642",
    kcalPer100g: 567,
    unitWeights: {
      lz: 10,
      opak: 200,
    },
    nutrientsPer100g: [49, 16, 26],
  },

  pistachios: {
    name: "Pistacje",
    type: "frt",
    subType: "nut",
    color: "#93C572",
    kcalPer100g: 560,
    unitWeights: {
      lz: 10,
      opak: 200,
    },
    nutrientsPer100g: [45, 28, 20],
  },

  coconut: {
    name: "Kokos",
    type: "frt",
    subType: "nut",
    color: "#F5F5DC",
    kcalPer100g: 354,
    unitWeights: {
      szt: 500,
    },
    nutrientsPer100g: [33, 15, 3],
  },
};
