import type { IngredientItem } from "../types";

type IngId =
  //// BAKERY ////
  | "kaiser_roll"
  | "multigrain_kaiser_roll"
  | "graham_roll"
  | "rye_bread"
  | "sunflower_bread"
  | "morning_roll"
  | "wheat_bread"
  | "nan_bread"
  | "tortilla"
  | "tortilla_mini"
  | "taco_shell_corn"
  | "toast_bread"
  | "hamburger_buns"
  | "chicken_buns"
  | "hotdog_buns"
  | "french_hotdog_buns"

  //// SNACKS ////
  | "snail_pastry_custard"
  | "frusta_prosciutto"
  | "berlinki_hot_dog";

export const iBAK: Record<IngId, IngredientItem> = {
  //// BAKERY ////

  kaiser_roll: {
    name: "Kajzerka",
    type: "bak",
    color: "#E0A96D",
    kcalPer100g: 275,
    unitWeights: {
      szt: 70,
    },
    nutrientsPer100g: [3, 54, 8.5],
    price: 6.2,
  },

  multigrain_kaiser_roll: {
    name: "Kajzerka wieloziarnista",
    type: "bak",
    color: "#C8925B",
    kcalPer100g: 265,
    unitWeights: {
      szt: 75,
    },
    nutrientsPer100g: [4.5, 46, 10],
    price: 6.9,
  },

  graham_roll: {
    name: "Bułka grahamka",
    type: "bak",
    color: "#B68452",
    kcalPer100g: 255,
    unitWeights: {
      szt: 80,
      opak: 400,
    },
    nutrientsPer100g: [3, 48, 9],
  },

  morning_roll: {
    name: "Bułka poranna",
    type: "bak",
    color: "#D9A066",
    kcalPer100g: 270,
    unitWeights: {
      szt: 62,
    },
    nutrientsPer100g: [3.5, 52, 8],
    price: 12.8,
  },

  rye_bread: {
    name: "Chleb żytni",
    type: "bak",
    subType: "brd",
    color: "#7A5A3A",
    kcalPer100g: 230,
    unitWeights: {
      krom: 35,
      szt: 500,
    },
    nutrientsPer100g: [2.5, 43, 6],
  },

  sunflower_bread: {
    name: "Chleb słonecznikowy",
    type: "bak",
    subType: "brd",
    color: "#9A6B3F",
    kcalPer100g: 285,
    unitWeights: {
      krom: 40,
      szt: 550,
    },
    nutrientsPer100g: [9, 38, 10],
  },

  wheat_bread: {
    name: "Chleb pszenny",
    type: "bak",
    subType: "brd",
    color: "#D6A15F",
    kcalPer100g: 255,
    unitWeights: {
      krom: 35,
      szt: 500,
    },
    nutrientsPer100g: [3, 49, 8],
  },

  nan_bread: {
    name: "Chlebek Naan",
    type: "bak",
    color: "#EBCB93",
    kcalPer100g: 310,
    unitWeights: {
      szt: 90,
    },
    nutrientsPer100g: [5, 55, 9],
  },

  tortilla: {
    name: "Tortilla",
    type: "bak",
    color: "#F3D7A3",
    kcalPer100g: 312,
    unitWeights: {
      szt: 60,
    },
    nutrientsPer100g: [6.9, 52, 9],
    price: 13,
    verified: true,
  },

  tortilla_mini: {
    name: "Mini tortilla",
    type: "bak",
    color: "#F6E0B5",
    kcalPer100g: 310,
    unitWeights: {
      szt: 30,
    },
    nutrientsPer100g: [7, 50, 8],
  },

  taco_shell_corn: {
    name: "Muszla kukurydziana",
    type: "bak",
    color: "#FBC02D",
    kcalPer100g: 480,
    unitWeights: {
      szt: 12,
    },
    nutrientsPer100g: [24, 64, 6],
  },

  toast_bread: {
    name: "Tosty",
    type: "bak",
    subType: "brd",
    color: "#E6B98C",
    kcalPer100g: 267,
    unitWeights: {
      opak: 500,
      szt: 22,
      krom: 22,
    },
    nutrientsPer100g: [3.2, 50, 8.6],
    price: 8,
    verified: true,
  },

  hamburger_buns: {
    name: "Bułki hamburgerowe",
    type: "bak",
    color: "#DFA46B",
    kcalPer100g: 277,
    unitWeights: {
      szt: 80,
      opak: 320,
    },
    nutrientsPer100g: [4.3, 48, 10],
  },

  chicken_buns: {
    name: "Bułki do chickerów",
    type: "bak",
    color: "#E8B97A",
    kcalPer100g: 280,
    unitWeights: {
      szt: 57,
      opak: 228,
    },
    nutrientsPer100g: [4.8, 49, 9.2],
    price: 22.8,
    verified: true,
  },

  hotdog_buns: {
    name: "Bułki hotdogowe",
    type: "bak",
    color: "#E0A060",
    kcalPer100g: 316,
    unitWeights: {
      szt: 70,
    },
    nutrientsPer100g: [8.3, 51, 7.7],
    verified: true,
  },

  french_hotdog_buns: {
    name: "Bułki do hot dogów francuskich",
    type: "bak",
    color: "#D18F4F",
    kcalPer100g: 316,
    unitWeights: {
      szt: 85,
    },
    nutrientsPer100g: [8.3, 51, 7.7],
  },

  //// SNACKS ////

  snail_pastry_custard: {
    name: "Ślimaczek z budyniem",
    type: "bak",
    subType: "snk",
    color: "#fde58b",
    kcalPer100g: 315,
    unitWeights: {
      szt: 110,
    },
    nutrientsPer100g: [7.1, 56, 6.4],
    price: 28.5,
    verified: true,
  },

  frusta_prosciutto: {
    name: "Frusta Prosciutto",
    type: "bak",
    subType: "snk",
    color: "#E8B97A",
    kcalPer100g: 207,
    unitWeights: {
      szt: 190,
    },
    nutrientsPer100g: [4.4, 30.8, 9.7],
    price: 39,
    verified: true,
  },

  berlinki_hot_dog: {
    name: "Hot dog z Berlinką",
    type: "bak",
    subType: "snk",
    color: "#c17e2d",
    kcalPer100g: 352,
    unitWeights: {
      szt: 120,
    },
    nutrientsPer100g: [23.8, 24.2, 9.6],
    price: 34,
    verified: true,
  },
};
