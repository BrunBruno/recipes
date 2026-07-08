import type { IngredientItem } from "../types";

type IngId =
  //// FISHES ////
  | "canned_tuna"
  | "smoked_salmon"
  | "smoked_mackerel"
  | "fish_sticks"
  | "sardines_in_oil"
  | "herring_in_oil"
  | "herring_in_tomato_sauce"
  | "herring_in_vinegar"
  | "mackerel_in_tomato_sauce"
  | "pollock"
  | "hake"
  | "halibut"
  | "panga"
  | "carp"
  | "cod"
  | "salmon"
  | "squid_frozen_ready";

export const iFSH: Record<IngId, IngredientItem> = {
  //////////////////////////////
  pollock: {
    name: "Mintaj",
    type: "fsh",
    color: "#ECEFF1",
    kcalPer100g: 90,
    unitWeights: {
      szt: 250,
    },
    nutrientsPer100g: [0.5, 1, 19],
  },

  hake: {
    name: "Morszczuk",
    type: "fsh",
    color: "#ECEFF1",
    kcalPer100g: 90,
    unitWeights: {
      szt: 250,
    },
    nutrientsPer100g: [0.8, 1, 18],
  },

  halibut: {
    name: "Halibut",
    type: "fsh",
    color: "#E0E0E0",
    kcalPer100g: 140,
    unitWeights: {
      szt: 400,
    },
    nutrientsPer100g: [0, 8, 20],
  },

  panga: {
    name: "Panga",
    type: "fsh",
    color: "#ECEFF1",
    kcalPer100g: 92,
    unitWeights: {
      szt: 300,
    },
    nutrientsPer100g: [0, 2, 16],
  },

  carp: {
    name: "Karp",
    type: "fsh",
    color: "#A1887F",
    kcalPer100g: 127,
    unitWeights: {
      szt: 1000,
    },
    nutrientsPer100g: [5, 3, 20],
  },

  cod: {
    name: "Dorsz",
    type: "fsh",
    color: "#F5F5F5",
    kcalPer100g: 82,
    unitWeights: {
      szt: 200,
    },
    nutrientsPer100g: [0.5, 0.2, 18],
  },

  salmon: {
    name: "Łosoś",
    type: "fsh",
    color: "#FF7043",
    kcalPer100g: 208,
    unitWeights: {
      szt: 200,
    },
    nutrientsPer100g: [13, 13, 20],
  },

  //// PROCESSED FISH ////

  smoked_salmon: {
    name: "Łosoś wędzony",
    type: "fsh",
    color: "#FF8A65",
    kcalPer100g: 117,
    unitWeights: {
      opak: 100,
      plas: 30,
    },
    nutrientsPer100g: [4, 0, 18],
  },

  smoked_mackerel: {
    name: "Makrela wędzona",
    type: "fsh",
    color: "#78909C",
    kcalPer100g: 305,
    unitWeights: {
      szt: 300,
    },
    nutrientsPer100g: [25, 0, 19],
  },

  fish_sticks: {
    name: "Paluszki rybne",
    type: "fsh",
    color: "#F76707",
    kcalPer100g: 220,
    unitWeights: {
      szt: 30,
    },
    nutrientsPer100g: [12, 10, 13],
  },

  canned_tuna: {
    name: "Tuńczyk w sosie własnym",
    type: "fsh",
    subType: "can",
    color: "#B79268",
    kcalPer100g: 120,
    unitWeights: {
      opak: 160,
    },
    nutrientsPer100g: [1, 0, 26],
  },

  sardines_in_oil: {
    name: "Sardynki w oleju",
    type: "fsh",
    subType: "can",
    color: "#FCC419",
    kcalPer100g: 208,
    unitWeights: {
      opak: 120,
    },
    nutrientsPer100g: [11, 11, 25],
  },

  herring_in_oil: {
    name: "Śledź w oleju",
    type: "fsh",
    subType: "can",
    color: "#FCC419",
    kcalPer100g: 230,
    unitWeights: {
      opak: 150,
    },
    nutrientsPer100g: [17, 20, 16],
  },

  herring_in_tomato_sauce: {
    name: "Śledź w sosie pomidorowym",
    type: "fsh",
    subType: "can",
    color: "#D84315",
    kcalPer100g: 165,
    unitWeights: {
      opak: 150,
    },
    nutrientsPer100g: [12, 8, 12],
  },

  herring_in_vinegar: {
    name: "Śledź w occie",
    type: "fsh",
    subType: "can",
    color: "#CFD8DC",
    kcalPer100g: 120,
    unitWeights: {
      opak: 150,
    },
    nutrientsPer100g: [13, 2, 10],
  },

  mackerel_in_tomato_sauce: {
    name: "Makrela w sosie pomidorowym",
    type: "fsh",
    subType: "can",
    color: "#D84315",
    kcalPer100g: 180,
    unitWeights: {
      opak: 175,
    },
    nutrientsPer100g: [12, 5.1, 13],
    verified: true,
  },

  //// SEAFOOD ////

  squid_frozen_ready: {
    name: "Kalmary",
    type: "fsh",
    subType: "sea",
    color: "#E09A66",
    kcalPer100g: 92,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [1, 1, 18],
  },
};
