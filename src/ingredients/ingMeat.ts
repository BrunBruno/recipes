import type { IngredientItem } from "../types";

type IngId =
  | "egg"
  | "egg_yolk"
  | "egg_white"
  | "chicken_breast"
  | "chicken_quarters"
  | "chicken_drums"
  | "chicken_thigh"
  | "chicken_whole"
  | "chicken_soup_portion"
  | "poultry_liver"
  | "turkey_breast"
  | "turkey_wing"
  | "turkey_neck"
  | "pork_loin"
  | "pork_neck"
  | "pork_ham"
  | "ground_pork"
  | "stew_pork"
  | "pork_tenderloin"
  | "pork_rib"
  | "stew_beef"
  | "ground_beef"
  | "beef_steak"
  | "ham_slices"
  | "salami"
  | "bacon_slices"
  | "bacon_block"
  | "sausage"
  | "sausages"
  | "meat_spread"
  | "canned_tuna"
  | "smoked_salmon"
  | "spicy_tenderloins"
  | "burger_patties";

export const iMET: Record<IngId, IngredientItem> = {
  egg: {
    name: "Jajko",
    type: "egg",
    kcalPer100g: 151,
    unitWeights: {
      szt: 60,
    },
    nutrientsPer100g: [10.9, 0.9, 12.4],
  },

  egg_yolk: {
    name: "Żółtko",
    type: "egg",
    kcalPer100g: 322,
    unitWeights: {
      szt: 17,
    },
    nutrientsPer100g: [16, 0.6, 16],
  },

  egg_white: {
    name: "Białko",
    type: "egg",
    kcalPer100g: 52,
    unitWeights: {
      szt: 43,
    },
    nutrientsPer100g: [0.2, 0.7, 10.9],
  },

  chicken_breast: {
    name: "Pierś z kurczaka",
    type: "met",
    kcalPer100g: 164,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [1.5, 0, 23.1],
  },

  chicken_quarters: {
    name: "Ćwiartka kurczaka",
    type: "met",
    kcalPer100g: 190,
    unitWeights: {
      szt: 250,
      opak: 500,
    },
    nutrientsPer100g: [12, 0, 18],
  },

  chicken_drums: {
    name: "Pałki z kurczaka",
    type: "met",
    kcalPer100g: 190,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [12, 0, 18],
  },

  chicken_thigh: {
    name: "Udo kurczaka",
    type: "met",
    kcalPer100g: 215,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [15, 0, 17],
  },

  poultry_liver: {
    name: "Wątroba drobiowa",
    type: "met",
    kcalPer100g: 119,
    unitWeights: {
      opak: 450,
    },
    nutrientsPer100g: [4.8, 1.5, 17],
  },

  chicken_whole: {
    name: "Kurczak cały",
    type: "met",
    kcalPer100g: 165,
    unitWeights: {
      szt: 1200,
    },
    nutrientsPer100g: [9, 0, 20],
  },

  chicken_soup_portion: {
    name: "Porcja rosołowa z kurczaka",
    type: "met",
    kcalPer100g: 190,
    unitWeights: {
      szt: 400,
    },
    nutrientsPer100g: [13, 0, 19],
  },

  //

  turkey_breast: {
    name: "Pierś z indyka",
    type: "met",
    kcalPer100g: 135,
    unitWeights: {
      opak: 600,
      szt: 150,
    },
    nutrientsPer100g: [3, 0, 29],
  },

  turkey_wing: {
    name: "Skrzydło z indyka",
    type: "met",
    kcalPer100g: 203,
    unitWeights: {
      szt: 300,
    },
    nutrientsPer100g: [14, 0, 27],
  },

  turkey_neck: {
    name: "Szyja z indyka",
    type: "met",
    kcalPer100g: 170,
    unitWeights: {
      szt: 250,
    },
    nutrientsPer100g: [11, 0, 18],
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
    nutrientsPer100g: [10, 0, 22],
  },

  pork_neck: {
    name: "Karkówka",
    type: "met",
    kcalPer100g: 250,
    unitWeights: {
      plaster: 100,
      opak: 500,
    },
    nutrientsPer100g: [22, 0, 18],
  },

  pork_ham: {
    name: "Szynka ze schabu",
    type: "met",
    kcalPer100g: 145,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [6, 1, 21],
  },

  ground_pork: {
    name: "Mięso mielone wieprzowe",
    type: "met",
    kcalPer100g: 263,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [23, 0, 17],
  },

  stew_pork: {
    name: "Mięso na gulasz (wieprzowe)",
    type: "met",
    kcalPer100g: 242,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [20, 0, 18],
  },

  pork_tenderloin: {
    name: "Polędwica wieprzowa",
    type: "met",
    kcalPer100g: 143,
    unitWeights: {
      plaster: 60,
      opak: 600,
    },
    nutrientsPer100g: [4, 0, 26],
  },

  pork_rib: {
    name: "Żeberko wieprzowe",
    type: "met",
    kcalPer100g: 291,
    unitWeights: {
      szt: 80,
    },
    nutrientsPer100g: [24, 0, 17],
  },

  //

  stew_beef: {
    name: "Mięso na gulasz (wołowe)",
    type: "met",
    kcalPer100g: 215,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [15, 0, 21],
  },

  ground_beef: {
    name: "Mięso mielone wołowe",
    type: "met",
    kcalPer100g: 250,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [20, 0, 17],
  },

  beef_steak: {
    name: "Stek wołowy",
    type: "met",
    kcalPer100g: 250,
    unitWeights: {
      szt: 200,
    },
    nutrientsPer100g: [20, 0, 18],
  },

  //

  ham_slices: {
    name: "Szynka",
    type: "met",
    kcalPer100g: 102,
    unitWeights: {
      plaster: 15,
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
    name: "Boczek w plastrach",
    type: "met",
    kcalPer100g: 518,
    unitWeights: {
      plaster: 15,
      opak: 120,
    },
    nutrientsPer100g: [53, 1, 37],
  },

  bacon_block: {
    name: "Boczek w kostce",
    type: "met",
    kcalPer100g: 518,
    unitWeights: {
      opak: 250,
    },
    nutrientsPer100g: [53, 1, 37],
  },

  sausage: {
    name: "Kiełbasa",
    type: "met",
    kcalPer100g: 227,
    unitWeights: {
      pęto: 100,
    },
    nutrientsPer100g: [18.4, 2, 13.1],
  }, //

  sausages: {
    name: "Parówki",
    type: "met",
    kcalPer100g: 252,
    unitWeights: {
      szt: 50,
    },
    nutrientsPer100g: [21, 2.7, 13],
  }, //

  meat_spread: {
    name: "pasztet",
    type: "met",
    kcalPer100g: 187,
    unitWeights: {
      opak: 131,
    },
    nutrientsPer100g: [14, 6.7, 1.4],
  }, //

  //

  canned_tuna: {
    name: "Tuńczyk w sosie własnym",
    type: "fsh",
    kcalPer100g: 120,
    unitWeights: {
      opak: 160,
    },
    nutrientsPer100g: [1, 0, 26],
  },

  smoked_salmon: {
    name: "Łosoś wędzony",
    type: "fsh",
    kcalPer100g: 117,
    unitWeights: {
      opak: 100,
      plaster: 30,
    },
    nutrientsPer100g: [4, 0, 18],
  },

  //

  spicy_tenderloins: {
    name: "Pikantne polędwiczki",
    type: "met",
    kcalPer100g: 178,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [8, 3, 24],
  },

  burger_patties: {
    name: "Gotowe kotleciki hamburgerowe",
    type: "met",
    kcalPer100g: 255,
    unitWeights: {
      szt: 50,
      opak: 250,
    },
    nutrientsPer100g: [20, 3, 17],
  },
};
