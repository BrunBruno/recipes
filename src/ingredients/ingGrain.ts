import type { IngredientItem } from "../types";

type IngId =
  //// GRAINS ////
  | "flour"
  | "potato_starch"
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
  | "penne_pasta"
  | "macaroni_pasta"

  //// READY ////
  | "kopytka"
  | "silesian_dumplings"
  | "steamed_dumplings"

  //// BAKERY ////
  | "kaiser_roll"
  | "multigrain_kaiser_roll"
  | "graham_roll"
  | "rye_bread"
  | "sunflower_bread"
  | "morning_roll"
  | "wheat_bread"
  | "tortilla"
  | "tortilla_mini"
  | "taco_shell_corn"
  | "toast_bread"
  | "hamburger_buns"
  | "chicken_buns"
  | "hotdog_buns"
  | "french_hotdog_buns"
  | "frusta_prosciutto"

  //// SEEDS ////
  | "cocoa"
  | "coffee"
  | "grain_coffee"

  //// PROCESSED ////
  | "cupcake_mix"
  | "oat_flakes"
  | "cornflakes";

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

  potato_starch: {
    name: "Mąka ziemniaczana",
    type: "grn",
    color: "#F5F5A1",
    kcalPer100g: 348,
    nutrientsPer100g: [0.3, 0.1, 86.0],
  },

  breadcrumbs: {
    name: "Bułka tarta",
    type: "grn",
    color: "#D7A86E",
    kcalPer100g: 351,
    unitWeights: {
      lz: 10,
      lzi: 3,
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

  penne_pasta: {
    name: "Makaron penne",
    type: "grn",
    color: "#E6C15A",
    kcalPer100g: 352,
    unitWeights: {
      opak: 500,
      szk: 250,
    },
    nutrientsPer100g: [1.5, 70, 12],
  },

  macaroni_pasta: {
    name: "Makaron macaroni",
    type: "grn",
    color: "#E4BE63",
    kcalPer100g: 360,
    unitWeights: {
      opak: 400,
      szk: 250,
    },
    nutrientsPer100g: [1.8, 72, 12],
  },

  ////

  kopytka: {
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
    price: 6.2,
  },

  multigrain_kaiser_roll: {
    name: "Kajzerka wieloziarnista",
    type: "grn",
    subType: "bun",
    color: "#C8925B",
    kcalPer100g: 265,
    unitWeights: {
      szt: 75,
      opak: 375,
    },
    nutrientsPer100g: [4.5, 46, 10],
    price: 6.9,
  },

  graham_roll: {
    name: "Bułka grahamka",
    type: "grn",
    subType: "bun",
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
    type: "grn",
    subType: "bun",
    color: "#D9A066",
    kcalPer100g: 270,
    unitWeights: {
      szt: 75,
      opak: 375,
    },
    nutrientsPer100g: [3.5, 52, 8],
  },

  rye_bread: {
    name: "Chleb żytni",
    type: "grn",
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
    type: "grn",
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
    type: "grn",
    subType: "brd",
    color: "#D6A15F",
    kcalPer100g: 255,
    unitWeights: {
      krom: 35,
      szt: 500,
    },
    nutrientsPer100g: [3, 49, 8],
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
    name: "Muszla kukurydziana",
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
    price: 8,
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

  frusta_prosciutto: {
    name: "Frusta Prosciutto",
    type: "grn",
    subType: "bun",
    kcalPer100g: 207,
    unitWeights: {
      szt: 190,
    },
    nutrientsPer100g: [4.4, 30.8, 9.7],
    price: 39,
    verified: true,
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

  oat_flakes: {
    name: "Płatki owsiane",
    type: "grn",
    color: "#D8B589",
    kcalPer100g: 364,
    nutrientsPer100g: [6.9, 55.1, 14.2],
    unitWeights: {
      szk: 120,
      opak: 500,
    },
    verified: true,
  },

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

  cupcake_mix: {
    name: "Mieszanka w proszku do babeczek",
    type: "grn",
    color: "#eaeaea",
    kcalPer100g: 354,
    nutrientsPer100g: [19, 40, 4.9],
    unitWeights: {
      opak: 300,
    },
  },
};
