import type { IngredientItem } from "../types";

type IngId =
  | "egg"
  | "chicken_breast"
  | "chicken_quarters"
  | "chicken_drums"
  | "chicken_thigh"
  | "chicken_whole"
  | "poultry_liver"
  | "turkey_breast"
  | "pork_loin"
  | "pork_neck"
  | "pork_ham"
  | "ground_pork"
  | "stew_pork"
  | "pork_tenderloin"
  | "beef"
  | "stew_beef"
  | "ground_beef"
  | "beef_steak"
  | "ham_slices"
  | "salami"
  | "bacon_slices"
  | "bacon_block"
  | "sausage"
  | "sausages"
  | "canned_tuna"
  | "smoked_salmon"
  | "pikantne_poledwiczki"
  | "burger_patties";

export const iMET: Record<IngId, IngredientItem> = {
  egg: {
    name: "Jajko",
    type: "egg",
    kcalPer100g: 155,
    unitWeights: {
      szt: 60,
    },
  },

  chicken_breast: {
    name: "Pierś z kurczaka",
    type: "met",
    kcalPer100g: 165,
    unitWeights: {
      opak: 400,
    },
  },

  chicken_quarters: {
    name: "Ćwiartki kurczaka",
    type: "met",
    kcalPer100g: 190,
    unitWeights: {
      szt: 250,
      opak: 500,
    },
  },

  chicken_drums: {
    name: "Pałki z kurczaka",
    type: "met",
    kcalPer100g: 190,
    unitWeights: {
      opak: 500,
    },
  },

  chicken_thigh: {
    name: "Udo kurczaka",
    type: "met",
    kcalPer100g: 215,
    unitWeights: {
      opak: 500,
    },
  },

  poultry_liver: {
    name: "Wątroba drobiowa",
    type: "met",
    kcalPer100g: 119,
    unitWeights: {
      opak: 450,
    },
  },

  chicken_whole: {
    name: "Kurczak cały",
    type: "met",
    kcalPer100g: 165,
    unitWeights: {
      szt: 1200,
    },
  },

  turkey_breast: {
    name: "Pierś z indyka",
    type: "met",
    kcalPer100g: 135,
    unitWeights: {
      opak: 600,
      szt: 150,
    },
  },

  //

  pork_loin: {
    name: "Schab",
    type: "met",
    kcalPer100g: 190,
    unitWeights: {
      plaster: 72,
      opak: 360,
    },
  },

  pork_neck: {
    name: "Karkówka",
    type: "met",
    kcalPer100g: 250,
    unitWeights: {
      plaster: 100,
      opak: 500,
    },
  },

  pork_ham: {
    name: "Szynka ze schabu",
    type: "met",
    kcalPer100g: 145,
    unitWeights: {
      opak: 500,
    },
  },

  ground_pork: {
    name: "Mięso mielone wieprzowe",
    type: "met",
    kcalPer100g: 263,
    unitWeights: {
      opak: 400,
    },
  },

  stew_pork: {
    name: "Mięso na gulasz (wieprzowe)",
    type: "met",
    kcalPer100g: 242,
    unitWeights: {
      opak: 500,
    },
  },

  pork_tenderloin: {
    name: "Polędwiczka wieprzowa",
    type: "met",
    kcalPer100g: 143,
    unitWeights: {
      plaster: 60,
      opak: 400,
    },
  },

  //

  beef: {
    name: "Mięso wołowe",
    type: "met",
    kcalPer100g: 215,
    unitWeights: {
      opak: 500,
    },
  },

  stew_beef: {
    name: "Mięso na gulasz (wołowe)",
    type: "met",
    kcalPer100g: 215,
    unitWeights: {
      opak: 500,
    },
  },

  ground_beef: {
    name: "Mięso mielone wołowe",
    type: "met",
    kcalPer100g: 250,
    unitWeights: {
      opak: 400,
    },
  },

  beef_steak: {
    name: "Stek wołowy",
    type: "met",
    kcalPer100g: 250,
    unitWeights: {
      szt: 200,
    },
  },

  //

  ham_slices: {
    name: "Szynka",
    type: "met",
    kcalPer100g: 102,
    unitWeights: {
      plaster: 30,
      opak: 140,
    },
    nutrientsPer100g: [2, 3, 18],
  }, //

  salami: {
    name: "Salami",
    type: "met",
    kcalPer100g: 413,
    unitWeights: {
      plaster: 10,
      opak: 160,
    },
    nutrientsPer100g: [36, 1.5, 20],
  }, //

  bacon_slices: {
    name: "Boczek",
    type: "met",
    kcalPer100g: 518,
    unitWeights: {
      plaster: 15,
      opak: 120,
    },
  },

  bacon_block: {
    name: "Boczek w kostce",
    type: "met",
    kcalPer100g: 518,
    unitWeights: {
      opak: 250,
    },
  },

  sausage: {
    name: "Kiełbasa",
    type: "met",
    kcalPer100g: 300,
    unitWeights: {
      pęto: 100,
    },
  },

  sausages: {
    name: "Parówki",
    type: "met",
    kcalPer100g: 252,
    unitWeights: {
      szt: 50,
    },
    nutrientsPer100g: [21, 2.7, 13],
  }, //

  //

  canned_tuna: {
    name: "Tuńczyk w sosie własnym",
    type: "fsh",
    kcalPer100g: 120,
    unitWeights: {
      opak: 160,
    },
  },

  smoked_salmon: {
    name: "Łosoś wędzony",
    type: "fsh",
    kcalPer100g: 117,
    unitWeights: {
      opak: 100,
      plaster: 30,
    },
  },

  //

  pikantne_poledwiczki: {
    name: "Pikantne polędwiczki",
    type: "met",
    kcalPer100g: 178,
    unitWeights: {
      opak: 400,
    },
  },

  burger_patties: {
    name: "Gotowe kotleciki hamburgerowe",
    type: "met",
    kcalPer100g: 255,
    unitWeights: {
      szt: 50,
      opak: 250,
    },
  },
};
