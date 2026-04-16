import type { IngredientItem } from "../types";

type IngId =
  //// GRAINS ////
  | "flour"
  | "breadcrumbs"
  | "rice"
  | "couscous"
  | "semolina"
  | "bulgur"
  | "buckwheat"
  | "millet_groats"
  | "barley_groats"

  //// PASTA ////
  | "fusilli_pasta"
  | "spaghetti_pasta"
  | "thin_pasta"
  | "lazanki_pasta"
  | "gnocchi"
  | "silesian_dumplings"
  | "steamed_dumplings"

  //// BAKERY ////
  | "kaiser_roll"
  | "tortilla"
  | "tortilla_mini"
  | "taco_shell_corn"
  | "toast_bread"
  | "hamburger_buns"
  | "chicken_buns"
  | "hotdog_buns"
  | "french_hotdog_buns"

  //// SEEDS ////
  | "cocoa"
  | "coffee"
  | "grain_coffee"

  //// PROCESSED ////
  | "cornflakes"
  | "cheese_snacks"

  //// SWEETS ////
  | "white_chocolate"
  | "dark_chocolate"
  | "chocolate_cream"
  | "nutella"
  | "ladyfingers";

export const iGRN: Record<IngId, IngredientItem> = {
  //// GRAINS ////
  flour: {
    name: "Mąka",
    type: "grn",
    color: "#F5F5F0",
    kcalPer100g: 345,
    unitWeights: {
      lz: 12,
      szk: 160,
      opak: 500,
    },
    nutrientsPer100g: [1.2, 71, 11],
    verified: true,
  },

  breadcrumbs: {
    name: "Bułka tarta",
    type: "grn",
    color: "#D7A86E",
    kcalPer100g: 351,
    unitWeights: {
      lz: 10,
    },
    nutrientsPer100g: [1.5, 4.4, 12],
    verified: true,
  },

  rice: {
    name: "Ryż",
    type: "grn",
    color: "#FAFAFA",
    kcalPer100g: 350,
    unitWeights: {
      szt: 100,
      opak: 400,
    },
    nutrientsPer100g: [1.1, 75, 8.9],
    verified: true,
  },

  couscous: {
    name: "Kasza kuskus",
    type: "grn",
    color: "#F0D9A7",
    kcalPer100g: 347,
    unitWeights: {
      opak: 250,
    },
    nutrientsPer100g: [2.3, 67, 13],
  },

  semolina: {
    name: "Kasza manna",
    type: "grn",
    color: "#F4C96B",
    kcalPer100g: 360,
    unitWeights: {
      lz: 13,
    },
    nutrientsPer100g: [1, 73, 12],
  },

  bulgur: {
    name: "Kasza bulgur",
    type: "grn",
    color: "#DDBB72",
    kcalPer100g: 342,
    unitWeights: {
      szk: 200,
      opak: 400,
    },
    nutrientsPer100g: [1.3, 76, 12],
  },

  buckwheat: {
    name: "Kasza gryczana",
    type: "grn",
    color: "#8D6E63",
    kcalPer100g: 343,
    unitWeights: {
      szk: 180,
      opak: 100,
    },
    nutrientsPer100g: [3.4, 72, 13],
  },

  millet_groats: {
    name: "Kasza jaglana",
    type: "grn",
    color: "#FDD835",
    kcalPer100g: 378,
    unitWeights: {
      lz: 15,
      szk: 200,
      opak: 100,
    },
    nutrientsPer100g: [11, 73, 4],
  },

  barley_groats: {
    name: "Kasza jęczmienna",
    type: "grn",
    color: "#D7CCC8",
    kcalPer100g: 354,
    unitWeights: {
      lz: 15,
      szk: 200,
      opak: 100,
    },
    nutrientsPer100g: [10, 74, 2],
  },

  //// PASTA ////

  fusilli_pasta: {
    name: "Makaron świderki",
    type: "grn",
    color: "#F6D365",
    kcalPer100g: 375,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [2.1, 74, 13],
    verified: true,
  },

  spaghetti_pasta: {
    name: "Makaron spaghetti",
    type: "grn",
    color: "#F4D03F",
    kcalPer100g: 359,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [1.9, 72, 12],
    verified: true,
  },

  thin_pasta: {
    name: "Makaron nitki",
    type: "grn",
    color: "#F7DC6F",
    kcalPer100g: 361,
    unitWeights: {
      opak: 250,
    },
    nutrientsPer100g: [1.2, 73, 11],
    verified: true,
  },

  lazanki_pasta: {
    name: "Makaron łazanki",
    type: "grn",
    color: "#E6C15A",
    kcalPer100g: 354,
    unitWeights: {
      opak: 500,
      szk: 250,
    },
    nutrientsPer100g: [1.5, 71, 12],
    verified: true,
  },

  ////

  gnocchi: {
    name: "Kopytka",
    type: "grn",
    subType: "bun",
    color: "#EED9B7",
    kcalPer100g: 148,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [1.2, 30, 3],
    verified: true,
  },

  silesian_dumplings: {
    name: "Kluski śląskie",
    type: "grn",
    subType: "bun",
    color: "#F0E0B0",
    kcalPer100g: 160,
    unitWeights: {
      szt: 30,
    },
    nutrientsPer100g: [0.5, 36, 4],
  },

  steamed_dumplings: {
    name: "Kluski na parze",
    type: "grn",
    subType: "bun",
    color: "#F5E6C8",
    kcalPer100g: 220,
    unitWeights: {
      szt: 80,
      opak: 400,
    },
    nutrientsPer100g: [2, 42, 6],
  },

  //// BAKERY ////

  kaiser_roll: {
    name: "Kajzerka",
    type: "grn",
    subType: "bun",
    color: "#E0A96D",
    kcalPer100g: 275,
    unitWeights: {
      szt: 70,
      opak: 350,
    },
    nutrientsPer100g: [3, 54, 8.5],
  },

  tortilla: {
    name: "Tortilla",
    type: "grn",
    subType: "bun",
    color: "#F3D7A3",
    kcalPer100g: 300,
    unitWeights: {
      szt: 60,
    },
    nutrientsPer100g: [6.7, 49, 8.8],
  },

  tortilla_mini: {
    name: "Mini tortilla",
    type: "grn",
    subType: "bun",
    color: "#F6E0B5",
    kcalPer100g: 310,
    unitWeights: {
      szt: 30,
    },
    nutrientsPer100g: [7, 50, 8],
  },

  taco_shell_corn: {
    name: "Muszla kukurydziana do taco",
    type: "grn",
    subType: "bun",
    color: "#FBC02D",
    kcalPer100g: 480,
    unitWeights: {
      szt: 12,
    },
    nutrientsPer100g: [24, 64, 6],
  },

  toast_bread: {
    name: "Tosty",
    type: "grn",
    subType: "brd",
    color: "#E6B98C",
    kcalPer100g: 267,
    unitWeights: {
      opak: 500,
      szt: 22,
      krom: 22,
    },
    nutrientsPer100g: [3.2, 50, 8.6],
    verified: true,
  },

  hamburger_buns: {
    name: "Bułki hamburgerowe",
    type: "grn",
    subType: "bun",
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
    type: "grn",
    subType: "bun",
    color: "#E8B97A",
    kcalPer100g: 282,
    unitWeights: {
      szt: 80,
    },
    nutrientsPer100g: [9.2, 49, 4.8],
  },

  hotdog_buns: {
    name: "Bułki hotdogowe",
    type: "grn",
    subType: "bun",
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
    type: "grn",
    subType: "bun",
    color: "#D18F4F",
    kcalPer100g: 316,
    unitWeights: {
      szt: 85,
    },
    nutrientsPer100g: [8.3, 51, 7.7],
  },

  //// SEEDS ////

  cocoa: {
    name: "Kakao",
    type: "grn",
    subType: "ben",
    color: "#5D4037",
    kcalPer100g: 228,
    unitWeights: {
      lz: 7.5,
      lzi: 2.5,
    },
    nutrientsPer100g: [13, 20, 20],
  },

  coffee: {
    name: "Kawa",
    type: "grn",
    subType: "ben",
    color: "#3E2723",
    kcalPer100g: 2,
    unitWeights: {
      lz: 5,
    },
    nutrientsPer100g: [0, 0.5, 0.1],
  },

  grain_coffee: {
    name: "Kawa zbożowa",
    type: "grn",
    subType: "ben",
    color: "#6D4C41",
    kcalPer100g: 360,
    unitWeights: {
      lz: 6,
      lzi: 2,
    },
    nutrientsPer100g: [0, 86, 0],
  },

  //// PROCESSED ////

  cornflakes: {
    name: "Płatki kukurydziane",
    type: "grn",
    subType: "bag",
    color: "#FDD835",
    kcalPer100g: 383,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [1.4, 83, 7.5],
  },

  cheese_snacks: {
    name: "Chrupki serowe",
    type: "grn",
    subType: "bag",
    color: "#FFCA28",
    kcalPer100g: 513,
    unitWeights: {
      opak: 130,
    },
    nutrientsPer100g: [28, 58, 5.8],
    verified: true,
  },

  //// SWEETS ////

  white_chocolate: {
    name: "Biała czekolada",
    type: "grn",
    subType: "cho",
    color: "#FFFDE7",
    kcalPer100g: 540,
    unitWeights: {
      opak: 100,
    },
    nutrientsPer100g: [30, 59, 7],
  },

  dark_chocolate: {
    name: "Gorzka czekolada",
    type: "grn",
    subType: "cho",
    color: "#3E2723",
    kcalPer100g: 555,
    unitWeights: {
      kst: 10,
      opak: 100,
    },
    nutrientsPer100g: [45, 18, 11],
    verified: true,
  },

  chocolate_cream: {
    name: "Krem czekoladowy",
    type: "grn",
    subType: "cho",
    color: "#6D4C41",
    kcalPer100g: 550,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [34, 56.8, 2.9],
    verified: true,
  },

  nutella: {
    name: "Nutella",
    type: "grn",
    subType: "cho",
    color: "#5A3A2E",
    kcalPer100g: 539,
    unitWeights: {
      lz: 15,
      szk: 300,
    },
    nutrientsPer100g: [31, 57, 6],
  },

  ladyfingers: {
    name: "Biszkopty",
    type: "grn",
    subType: "bis",
    color: "#E6B98C",
    kcalPer100g: 380,
    unitWeights: {
      opak: 200,
    },
    nutrientsPer100g: [6, 72, 8],
  },
};
