import type { IngredientItem } from "../types";

type IngId =
  | "flour"
  | "breadcrumbs"
  | "rice"
  | "couscous"
  | "fusilli_pasta"
  | "spaghetti_pasta"
  | "thin_pasta"
  | "lazanki_pasta"
  | "gnocchi"
  | "tortilla"
  | "toast_bread"
  | "hamburger_buns"
  | "chicken_buns"
  | "hotdog_buns"
  | "cornflakes";

export const iGRN: Record<IngId, IngredientItem> = {
  flour: {
    name: "Mąka",
    type: "grn",
    kcalPer100g: 345,
    unitWeights: {
      łyżka: 12,
      szklanka: 160,
      opak: 500,
    },
    nutrientsPer100g: [1.2, 71, 11],
  }, //

  breadcrumbs: {
    name: "Bułka tarta",
    type: "grn",
    kcalPer100g: 351,
    unitWeights: {
      łyżka: 10,
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
    kcalPer100g: 376,
    unitWeights: {
      opak: 250,
    },
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
      szklanka: 250,
    },
    nutrientsPer100g: [1.5, 71, 12],
  }, //

  gnocchi: {
    name: "Kopytka",
    type: "grn",
    kcalPer100g: 130,
    unitWeights: {
      opak: 500,
    },
  },

  //

  tortilla: {
    name: "Tortilla",
    type: "grn",
    kcalPer100g: 300,
    unitWeights: {
      szt: 60,
    },
  },

  toast_bread: {
    name: "Tosty",
    type: "grn",
    kcalPer100g: 265,
    unitWeights: {
      szt: 30,
    },
  },

  hamburger_buns: {
    name: "Bułki hamburgerowe",
    type: "grn",
    kcalPer100g: 270,
    unitWeights: {
      szt: 80,
      opak: 320,
    },
  },

  chicken_buns: {
    name: "Bułki do chickerów",
    type: "grn",
    kcalPer100g: 270,
    unitWeights: {
      szt: 80,
    },
  },

  hotdog_buns: {
    name: "Bułki hotdogowe",
    type: "grn",
    kcalPer100g: 270,
    unitWeights: {
      szt: 70,
    },
  },

  cornflakes: {
    name: "Płatki kukurydziane",
    type: "grn",
    kcalPer100g: 357,
    unitWeights: {
      opak: 500,
    },
  },
};
