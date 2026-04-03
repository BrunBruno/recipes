import type { IngredientItem } from "../types";

type IngId =
  | "flour"
  | "breadcrumbs"
  | "rice"
  | "couscous"
  | "semolina"
  | "bulgur"
  | "buckwheat"
  | "fusilli_pasta"
  | "spaghetti_pasta"
  | "thin_pasta"
  | "lazanki_pasta"
  | "white_beans"
  | "gnocchi"
  | "silesian_dumplings"
  | "steamed_dumplings"
  | "kaiser_roll"
  | "tortilla"
  | "toast_bread"
  | "hamburger_buns"
  | "chicken_buns"
  | "hotdog_buns"
  | "french_hotdog_buns"
  | "cornflakes";

export const iGRN: Record<IngId, IngredientItem> = {
  flour: {
    name: "Mąka",
    type: "grn",
    color: "#ffffff",
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
    color: "#b79268",
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
    color: "#ffffff",
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
    kcalPer100g: 347,
    unitWeights: {
      opak: 250,
    },
    nutrientsPer100g: [2.3, 67, 13],
  },

  semolina: {
    name: "Kasza manna",
    type: "grn",
    kcalPer100g: 360,
    unitWeights: {
      lz: 13,
    },
    nutrientsPer100g: [1, 73, 12],
  },

  bulgur: {
    name: "Kasza bulgur",
    type: "grn",
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
    kcalPer100g: 343,
    unitWeights: {
      szk: 180,
      opak: 100,
    },
    nutrientsPer100g: [3.4, 72, 13],
  },

  fusilli_pasta: {
    name: "Makaron świderki",
    type: "grn",
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
    kcalPer100g: 354,
    unitWeights: {
      opak: 500,
      szk: 250,
    },
    nutrientsPer100g: [1.5, 71, 12],
    verified: true,
  },

  white_beans: {
    name: "Fasola biała",
    type: "grn",
    color: "#ffffff",
    kcalPer100g: 333,
    unitWeights: {
      szk: 200,
      opak: 400,
    },
    nutrientsPer100g: [1.2, 60, 21],
  },

  gnocchi: {
    name: "Kopytka",
    type: "grn",
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
    kcalPer100g: 160,
    unitWeights: {
      szt: 30,
    },
    nutrientsPer100g: [0.5, 36, 4],
  },

  steamed_dumplings: {
    name: "Kluski na parze",
    type: "grn",
    kcalPer100g: 220,
    unitWeights: {
      szt: 80,
      opak: 400,
    },
    nutrientsPer100g: [2, 42, 6],
  },

  cornflakes: {
    name: "Płatki kukurydziane",
    type: "grn",
    kcalPer100g: 383,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [1.4, 83, 7.5],
  },

  //

  kaiser_roll: {
    name: "Kajzerka",
    type: "grn",
    subType: "bun",
    color: "#b79268",
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
    color: "#b79268",
    kcalPer100g: 300,
    unitWeights: {
      szt: 60,
    },
    nutrientsPer100g: [6.7, 49, 8.8],
  },

  toast_bread: {
    name: "Tosty",
    type: "grn",
    subType: "bun",
    color: "#b79268",
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
    color: "#b79268",
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
    color: "#b79268",
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
    color: "#b79268",
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
    color: "#b79268",
    kcalPer100g: 316,
    unitWeights: {
      szt: 85,
    },
    nutrientsPer100g: [8.3, 51, 7.7],
  },
};
