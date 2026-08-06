import type { IngredientItem } from "../types";

type IngId =
  //// GRAINS ////
  | "flour"
  | "potato_starch"
  | "breadcrumbs"
  | "rice"
  | "rice_long_grain"
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
  | "lasagne_pasta"
  | "fettuccine_pasta"
  | "rice_noodles"

  //// PROCESSED ////
  | "cupcake_mix"
  | "oat_flakes"
  | "cornflakes"

  //// READY ////
  | "kopytka"
  | "silesian_dumplings"
  | "steamed_dumplings"

  //// SEEDS ////
  | "cocoa"
  | "coffee"
  | "grain_coffee";

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
    price: 1.7,
    verified: true,
  },

  potato_starch: {
    name: "Mąka ziemniaczana",
    type: "grn",
    color: "#F5F5A1",
    kcalPer100g: 348,
    unitWeights: {
      lzi: 4,
      lz: 12,
    },
    nutrientsPer100g: [0.3, 86.0, 0.1],
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
    nutrientsPer100g: [2, 76, 10],
    price: 7.3,
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
    price: 5,
    verified: true,
  },

  rice_long_grain: {
    name: "Ryż długoziarnisty",
    type: "grn",
    color: "#F5F0E6",
    kcalPer100g: 349,
    unitWeights: {
      szk: 185,
      lz: 15,
      szt: 100,
      opak: 400,
    },
    nutrientsPer100g: [0.7, 78.5, 7.2],
    price: 5,
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
    kcalPer100g: 329,
    unitWeights: {
      szk: 200,
      opak: 400,
    },
    nutrientsPer100g: [1.4, 62, 10],
    verified: true,
  },

  buckwheat: {
    name: "Kasza gryczana",
    type: "grn",
    color: "#8D6E63",
    kcalPer100g: 347,
    unitWeights: {
      szk: 180,
      opak: 100,
    },
    nutrientsPer100g: [3.1, 63.4, 13.5],
    verified: true,
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
    kcalPer100g: 375,
    unitWeights: {
      opak: 500,
      szk: 250,
    },
    nutrientsPer100g: [2.1, 74, 13],
    price: 6.8,
    verified: true,
  },

  macaroni_pasta: {
    name: "Makaron macaroni",
    type: "grn",
    color: "#F7DC6F",
    kcalPer100g: 353,
    unitWeights: {
      opak: 500,
      szk: 250,
    },
    nutrientsPer100g: [1.6, 71, 12],
    verified: true,
  },

  lasagne_pasta: {
    name: "Makaron lasagna",
    type: "grn",
    color: "#E4BE63",
    kcalPer100g: 348,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [1.1, 71, 12],
    verified: true,
  },

  fettuccine_pasta: {
    name: "Makaron Fettuccine",
    type: "grn",
    color: "#F2D39B",
    kcalPer100g: 350,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [2, 72, 12],
  },

  rice_noodles: {
    name: "Makaron ryżowy",
    type: "grn",
    color: "#F8F1E5",
    kcalPer100g: 350,
    unitWeights: {
      opak: 200,
    },
    nutrientsPer100g: [1, 78, 7],
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
    price: 5.5,
    verified: true,
  },

  cornflakes: {
    name: "Płatki kukurydziane",
    type: "grn",
    subType: "bag",
    color: "#FDD835",
    kcalPer100g: 382,
    unitWeights: {
      opak: 250,
    },
    nutrientsPer100g: [1.4, 82.9, 7.4],
    verified: true,
  },

  cupcake_mix: {
    name: "Mieszanka w proszku do babeczek",
    type: "grn",
    color: "#eaeaea",
    kcalPer100g: 354,
    nutrientsPer100g: [19, 40, 4.9],
    unitWeights: {
      opak: 335,
    },
    price: 19.1,
  },

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
};
