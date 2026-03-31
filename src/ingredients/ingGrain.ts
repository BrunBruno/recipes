import type { IngredientItem } from "../types";

type IngId =
  | "flour"
  | "breadcrumbs"
  | "rice"
  | "couscous"
  | "semolina"
  | "fusilli_pasta"
  | "spaghetti_pasta"
  | "thin_pasta"
  | "lazanki_pasta"
  | "gnocchi"
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
    kcalPer100g: 345,
    unitWeights: {
      lz: 12,
      szk: 160,
      opak: 500,
    },
    nutrientsPer100g: [1.2, 71, 11],
  }, //

  breadcrumbs: {
    name: "Bułka tarta",
    type: "grn",
    kcalPer100g: 351,
    unitWeights: {
      lz: 10,
    },
    nutrientsPer100g: [1.5, 4.4, 12],
  }, //

  //

  rice: {
    name: "Ryż",
    type: "grn",
    kcalPer100g: 350,
    unitWeights: {
      szt: 100,
      opak: 400,
    },
    nutrientsPer100g: [1.1, 75, 8.9],
  }, //

  couscous: {
    name: "Kuskus",
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

  fusilli_pasta: {
    name: "Makaron świderki",
    type: "grn",
    kcalPer100g: 375,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [2.1, 74, 13],
  }, //

  spaghetti_pasta: {
    name: "Makaron spaghetti",
    type: "grn",
    kcalPer100g: 359,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [1.9, 72, 12],
  }, //

  thin_pasta: {
    name: "Makaron nitki",
    type: "grn",
    kcalPer100g: 361,
    unitWeights: {
      opak: 250,
    },
    nutrientsPer100g: [1.2, 73, 11],
  }, //

  lazanki_pasta: {
    name: "Makaron łazanki",
    type: "grn",
    kcalPer100g: 354,
    unitWeights: {
      opak: 500,
      szk: 250,
    },
    nutrientsPer100g: [1.5, 71, 12],
  }, //

  gnocchi: {
    name: "Kopytka",
    type: "grn",
    kcalPer100g: 148,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [1.2, 30, 3],
  }, //

  //

  kaiser_roll: {
    name: "Kajzerka",
    type: "bun",
    kcalPer100g: 275,
    unitWeights: {
      szt: 70,
      opak: 350,
    },
    nutrientsPer100g: [3, 54, 8.5],
  },

  tortilla: {
    name: "Tortilla",
    type: "bun",
    kcalPer100g: 300,
    unitWeights: {
      szt: 60,
    },
    nutrientsPer100g: [6.7, 49, 8.8],
  },

  toast_bread: {
    name: "Tosty",
    type: "bun",
    kcalPer100g: 267,
    unitWeights: {
      opak: 500,
      szt: 22,
      krom: 22,
    },
    nutrientsPer100g: [3.2, 50, 8.6],
  }, //

  hamburger_buns: {
    name: "Bułki hamburgerowe",
    type: "bun",
    kcalPer100g: 277,
    unitWeights: {
      szt: 80,
      opak: 320,
    },
    nutrientsPer100g: [4.3, 48, 10],
  },

  chicken_buns: {
    name: "Bułki do chickerów",
    type: "bun",
    kcalPer100g: 282,
    unitWeights: {
      szt: 80,
    },
    nutrientsPer100g: [9.2, 49, 4.8],
  },

  hotdog_buns: {
    name: "Bułki hotdogowe",
    type: "bun",
    kcalPer100g: 316,
    unitWeights: {
      szt: 70,
    },
    nutrientsPer100g: [8.3, 51, 7.7],
  }, //

  french_hotdog_buns: {
    name: "Bułki do hot dogów francuskich",
    type: "bun",
    kcalPer100g: 316,
    unitWeights: {
      szt: 85,
    },
    nutrientsPer100g: [8.3, 51, 7.7],
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
};
