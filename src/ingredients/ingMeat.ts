import type { IngredientItem } from "../types";

type IngId =
  //// EGGS ////
  | "egg"
  | "egg_yolk"
  | "egg_white"

  //// POULTRY ////
  | "chicken_breast"
  | "chicken_tenderloin"
  | "chicken_quarters"
  | "chicken_drums"
  | "chicken_thigh"
  | "chicken_whole"
  | "chicken_soup_portion"
  | "ground_chicken"
  | "poultry_liver"
  | "turkey_breast"
  | "turkey_wing"
  | "turkey_neck"

  //// MEAT ////
  | "pork_loin"
  | "pork_neck"
  | "pork_ham"
  | "ground_pork"
  | "stew_pork"
  | "pork_tenderloin"
  | "pork_rib"
  | "pork_shoulder"
  | "stew_beef"
  | "ground_beef"
  | "beef_steak"
  | "beef_round"
  | "beef_shoulder"
  | "mutton"

  //// PROCESSED ////
  | "mortadella"
  | "ham_slices"
  | "ham_cooked"
  | "polendwica"
  | "chicken_ham"
  | "smoked_ham"
  | "ham_canned"
  | "salami"
  | "bacon_slices"
  | "bacon_block"
  | "smoked_bacon"
  | "brewed_bacon"
  | "sausage"
  | "white_sausage"
  | "sausages"
  | "serdelki"
  | "meat_spread"
  | "pork_knuckle_ready"
  | "spicy_tenderloins"
  | "spicy_wings"
  | "chicken_nuggets"
  | "burger_patties";

export const iMET: Record<IngId, IngredientItem> = {
  chicken_breast: {
    name: "Pierś z kurczaka",
    type: "met",
    subType: "pou",
    color: "#F5D7B2",
    kcalPer100g: 164,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [1.5, 0, 23.1],
    price: 25,
  },

  chicken_tenderloin: {
    name: "Polędwiczki z kurczaka",
    type: "met",
    subType: "pou",
    color: "#F5D7B2",
    kcalPer100g: 120,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [1.2, 0, 22],
  },

  chicken_quarters: {
    name: "Ćwiartka kurczaka",
    type: "met",
    subType: "pou",
    color: "#E8C4A2",
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
    subType: "pou",
    color: "#E0B89A",
    kcalPer100g: 190,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [12, 0, 18],
  },

  chicken_thigh: {
    name: "Udo kurczaka",
    type: "met",
    subType: "pou",
    color: "#D9A98F",
    kcalPer100g: 215,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [15, 0, 17],
  },

  chicken_whole: {
    name: "Kurczak cały",
    type: "met",
    subType: "pou",
    color: "#E6C2A6",
    kcalPer100g: 165,
    unitWeights: {
      szt: 1200,
    },
    nutrientsPer100g: [9, 0, 20],
  },

  chicken_soup_portion: {
    name: "Porcja rosołowa z kurczaka",
    type: "met",
    subType: "pou",
    color: "#DDBBA0",
    kcalPer100g: 190,
    unitWeights: {
      szt: 400,
    },
    nutrientsPer100g: [13, 0, 19],
  },

  ground_chicken: {
    name: "Mięso mielone z kurczaka",
    type: "met",
    subType: "pou",
    color: "#EED3C2",
    kcalPer100g: 143,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [17, 0, 8],
  },

  poultry_liver: {
    name: "Wątroba drobiowa",
    type: "met",
    subType: "pou",
    color: "#8D3B3B",
    kcalPer100g: 119,
    unitWeights: {
      opak: 450,
    },
    nutrientsPer100g: [4.8, 1.5, 17],
  },

  //////////////////////////////

  turkey_breast: {
    name: "Pierś z indyka",
    type: "met",
    subType: "pou",
    color: "#F2D6C9",
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
    subType: "pou",
    color: "#E5C2B8",
    kcalPer100g: 203,
    unitWeights: {
      szt: 300,
    },
    nutrientsPer100g: [14, 0, 27],
  },

  turkey_neck: {
    name: "Szyja z indyka",
    type: "met",
    subType: "pou",
    color: "#D4A6A0",
    kcalPer100g: 170,
    unitWeights: {
      szt: 250,
    },
    nutrientsPer100g: [11, 0, 18],
  },

  //////////////////////////////

  spicy_tenderloins: {
    name: "Pikantne polędwiczki",
    type: "met",
    subType: "pou",
    color: "#F76707",
    kcalPer100g: 162,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [6.5, 6.4, 19],
    price: 37.5,
    verified: true,
  },

  spicy_wings: {
    name: "Pikantne skrzydełka",
    type: "met",
    subType: "pou",
    color: "#F76707",
    kcalPer100g: 235,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [15, 8, 18],
  },

  chicken_nuggets: {
    name: "Nuggetsy z kurczaka",
    type: "met",
    subType: "pou",
    color: "#F4C27A",
    kcalPer100g: 241,
    unitWeights: {
      opak: 350,
    },
    nutrientsPer100g: [12, 18, 14],
    price: 32,
    verified: true,
  },

  //// MEAT ////

  pork_loin: {
    name: "Schab wieprzowy",
    type: "met",
    color: "#F2A7A0",
    kcalPer100g: 190,
    unitWeights: {
      plas: 72,
      opak: 360,
    },
    nutrientsPer100g: [10, 0, 22],
    price: 33,
  },

  pork_neck: {
    name: "Karkówka",
    type: "met",
    color: "#D97C7C",
    kcalPer100g: 250,
    unitWeights: {
      plas: 100,
      opak: 500,
    },
    nutrientsPer100g: [22, 0, 18],
  },

  pork_ham: {
    name: "Szynka ze schabu",
    type: "met",
    color: "#E57373",
    kcalPer100g: 145,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [6, 1, 21],
  },

  ground_pork: {
    name: "Mięso mielone wieprzowe",
    type: "met",
    color: "#E8A0A0",
    kcalPer100g: 263,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [23, 0, 17],
    price: 22,
  },

  stew_pork: {
    name: "Mięso wieprzowe na gulasz",
    type: "met",
    color: "#C96F6F",
    kcalPer100g: 242,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [20, 0, 18],
  },

  pork_tenderloin: {
    name: "Polędwica wieprzowa",
    type: "met",
    color: "#F5B5B0",
    kcalPer100g: 143,
    unitWeights: {
      plas: 60,
      opak: 600,
    },
    nutrientsPer100g: [4, 0, 26],
  },

  pork_rib: {
    name: "Żeberko wieprzowe",
    type: "met",
    color: "#B85C5C",
    kcalPer100g: 291,
    unitWeights: {
      szt: 80,
    },
    nutrientsPer100g: [24, 0, 17],
  },

  pork_shoulder: {
    name: "Łopatka wieprzowa",
    type: "met",
    color: "#C97A7A",
    kcalPer100g: 250,
    unitWeights: {},
    nutrientsPer100g: [20, 0, 17],
  },

  //////////////////////////////

  stew_beef: {
    name: "Mięso wołowe na gulasz",
    type: "met",
    color: "#8B3A3A",
    kcalPer100g: 215,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [15, 0, 21],
  },

  ground_beef: {
    name: "Mięso mielone wołowe",
    type: "met",
    color: "#A94442",
    kcalPer100g: 250,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [20, 0, 17],
  },

  beef_steak: {
    name: "Stek wołowy",
    type: "met",
    color: "#7B2D2D",
    kcalPer100g: 250,
    unitWeights: {
      szt: 200,
    },
    nutrientsPer100g: [20, 0, 18],
  },

  beef_round: {
    name: "Wołowina z udźca",
    type: "met",
    color: "#8D6E63",
    kcalPer100g: 154,
    nutrientsPer100g: [21.0, 7.0, 0],
  },

  beef_shoulder: {
    name: "Łopatka wołowa",
    type: "met",
    color: "#8D4E3D",
    kcalPer100g: 180,
    nutrientsPer100g: [12, 0, 20],
  },

  //////////////////////////////

  mutton: {
    name: "Jagnięcina",
    type: "met",
    color: "#B71C1C",
    kcalPer100g: 294,
    nutrientsPer100g: [21, 0, 25],
  },

  //////////////////////////////

  burger_patties: {
    name: "Kotleciki hamburgerowe",
    type: "met",
    color: "#6D4C41",
    kcalPer100g: 255,
    unitWeights: {
      szt: 50,
      opak: 250,
    },
    nutrientsPer100g: [20, 3, 17],
  },

  pork_knuckle_ready: {
    name: "Golonka gotowa",
    type: "met",
    color: "#A05A4A",
    kcalPer100g: 280,
    unitWeights: {
      szt: 800,
    },
    nutrientsPer100g: [24, 0, 20],
  },

  //// PROCESSED ////

  mortadella: {
    name: "Mortadela",
    type: "met",
    subType: "ham",
    color: "#F4A6A6",
    kcalPer100g: 280,
    unitWeights: {
      plas: 30,
      szt: 500,
      opak: 500,
    },
    nutrientsPer100g: [23, 3, 12],
  },

  ham_slices: {
    name: "Szynka",
    type: "met",
    subType: "ham",
    color: "#F28B82",
    kcalPer100g: 102,
    unitWeights: {
      plas: 15,
      opak: 140,
    },
    nutrientsPer100g: [2, 3, 18],
    price: 40,
    verified: true,
  },

  ham_cooked: {
    name: "Szynka gotowana",
    type: "met",
    subType: "ham",
    color: "#F6A6A1",
    kcalPer100g: 108,
    unitWeights: {
      plas: 15,
      opak: 140,
    },
    nutrientsPer100g: [2, 4, 18],
  },

  polendwica: {
    name: "Polędwica",
    type: "met",
    subType: "ham",
    color: "#E9967A",
    kcalPer100g: 118,
    unitWeights: {
      plas: 12,
      opak: 120,
    },
    nutrientsPer100g: [2, 5, 19],
  },

  chicken_ham: {
    name: "Szynka z kurczaka",
    type: "met",
    subType: "ham",
    color: "#F4B6A6",
    kcalPer100g: 95,
    unitWeights: {
      plas: 15,
      opak: 120,
    },
    nutrientsPer100g: [2, 2, 17],
  },

  smoked_ham: {
    name: "Szynka zawędzana",
    type: "met",
    subType: "ham",
    color: "#D97B66",
    kcalPer100g: 121,
    unitWeights: {
      plas: 15,
      opak: 250,
    },
    nutrientsPer100g: [4, 2.8, 18],
    price: 40,
    verified: true,
  },

  ham_canned: {
    name: "Szynka konserwowa",
    type: "met",
    subType: "ham",
    color: "#E07A73",
    kcalPer100g: 145,
    unitWeights: {
      plas: 15,
      opak: 140,
    },
    nutrientsPer100g: [3, 9, 13],
  },

  salami: {
    name: "Salami",
    type: "met",
    subType: "ham",
    color: "#A63D40",
    kcalPer100g: 413,
    unitWeights: {
      plas: 10,
      opak: 160,
    },
    nutrientsPer100g: [36, 1.5, 20],
    verified: true,
  },

  bacon_slices: {
    name: "Boczek w plastrach",
    type: "met",
    subType: "ham",
    color: "#B56576",
    kcalPer100g: 518,
    unitWeights: {
      plas: 15,
      opak: 120,
    },
    nutrientsPer100g: [53, 1, 37],
  },

  bacon_block: {
    name: "Boczek w kostce",
    type: "met",
    subType: "ham",
    color: "#8D4A43",
    kcalPer100g: 518,
    unitWeights: {
      opak: 250,
    },
    nutrientsPer100g: [53, 1, 37],
  },

  smoked_bacon: {
    name: "Boczek wędzony",
    type: "met",
    subType: "ham",
    color: "#D98C6B",
    kcalPer100g: 450,
    nutrientsPer100g: [45, 0, 12],
  },

  brewed_bacon: {
    name: "Boczek parzony",
    type: "met",
    subType: "ham",
    color: "#E7A07A",
    kcalPer100g: 400,
    nutrientsPer100g: [38, 0, 14],
  },

  sausage: {
    name: "Kiełbasa",
    type: "met",
    subType: "ham",
    color: "#C06C5B",
    kcalPer100g: 227,
    unitWeights: {
      peto: 100,
    },
    nutrientsPer100g: [18.4, 2, 13.1],
    price: 24,
    verified: true,
  },

  white_sausage: {
    name: "Biała kiełbasa",
    type: "met",
    subType: "ham",
    color: "#BFAE9A",
    kcalPer100g: 270,
    nutrientsPer100g: [23, 2, 14],
    price: 27,
  },

  sausages: {
    name: "Parówki",
    type: "met",
    subType: "ham",
    color: "#B85C4C",
    kcalPer100g: 252,
    unitWeights: {
      szt: 50,
    },
    nutrientsPer100g: [21, 2.7, 13],
    verified: true,
  },

  serdelki: {
    name: "Serdelki",
    type: "met",
    subType: "ham",
    color: "#A85A4A",
    kcalPer100g: 280,
    unitWeights: {
      szt: 75,
    },
    nutrientsPer100g: [14, 2, 25],
    verified: true,
  },

  meat_spread: {
    name: "Pasztet",
    type: "met",
    subType: "can",
    color: "#A1887F",
    kcalPer100g: 187,
    unitWeights: {
      opak: 131,
    },
    nutrientsPer100g: [14, 6.7, 1.4],
    verified: true,
  },

  //// EGGS ////

  egg: {
    name: "Jajko",
    type: "met",
    subType: "egg",
    color: "#FFEC99",
    kcalPer100g: 151,
    unitWeights: {
      szt: 60,
    },
    nutrientsPer100g: [10.9, 0.9, 12.4],
    price: 19.2,
  },

  egg_yolk: {
    name: "Żółtko",
    type: "met",
    subType: "egg",
    color: "#FBC02D",
    kcalPer100g: 322,
    unitWeights: {
      szt: 17,
    },
    nutrientsPer100g: [16, 0.6, 16],
  },

  egg_white: {
    name: "Białko",
    type: "met",
    subType: "egg",
    color: "#FAFAFA",
    kcalPer100g: 52,
    unitWeights: {
      szt: 43,
    },
    nutrientsPer100g: [0.2, 0.7, 10.9],
  },
};
