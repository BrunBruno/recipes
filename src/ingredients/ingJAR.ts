import type { IngredientItem } from "../types";

type IngId =
  //// PRESERVES ////
  | "tomato_puree"
  | "tomato_paste"
  | "tomato_passata"
  | "pickled_cucumber"
  | "pickled_cucumber_vinegar"
  | "sauerkraut"
  | "fried_onion"
  | "fried_beets"
  | "beets_shredded"
  | "beets_whole_vinegar"
  | "sweet_sour_sauce"
  | "sechuan_chili_fusion"
  | "jam_strawberry"
  | "jam_cranberry"

  //// CANNED ////
  | "canned_tomatoes"
  | "canned_corn"
  | "canned_peas"
  | "canned_red_beans"
  | "canned_peach"
  | "canned_pineapple"

  //// FROZEN ////
  | "frozen_fries"
  | "frozen_thin_fries"
  | "frozen_spinach"
  | "frozen_vegetable_mix"
  | "frozen_stir_fry"
  | "frozen_stir_fry_oriental"
  | "frozen_green_beans"
  | "strawberry_frozen"
  | "frozen_broccoli"

  //// SALADS ////
  | "coleslaw"
  | "cucumber_salad"
  | "corn_salad"
  | "red_cabbage";

export const iJAR: Record<IngId, IngredientItem> = {
  //// PRESERVES ////

  tomato_puree: {
    name: "Przecier pomidorowy",
    type: "jar",
    isVeg: true,
    color: "#C62828",
    kcalPer100g: 38,
    unitWeights: {
      ml: 1,
    },
    nutrientsPer100g: [0.2, 8, 1.6],
  },

  tomato_paste: {
    name: "Koncentrat pomidorowy",
    type: "jar",
    isVeg: true,
    color: "#B71C1C",
    kcalPer100g: 82,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [0.3, 18, 4],
  },

  tomato_passata: {
    name: "Passata pomidorowa",
    type: "jar",
    isVeg: true,
    color: "#D94C3A",
    kcalPer100g: 33,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [0.2, 5.6, 1.5],
  },

  pickled_cucumber: {
    name: "Ogórek kiszony",
    type: "jar",
    isVeg: true,
    color: "#6FAF3A",
    kcalPer100g: 8,
    unitWeights: {
      szt: 60,
    },
    nutrientsPer100g: [0.5, 1, 0.5],
    verified: true,
  },

  pickled_cucumber_vinegar: {
    name: "Ogórek konserwowy",
    type: "jar",
    isVeg: true,
    color: "#9CCC65",
    kcalPer100g: 15,
    unitWeights: {
      szt: 100,
      opak: 500,
    },
    nutrientsPer100g: [0.2, 3, 0.5],
  },

  sauerkraut: {
    name: "Kapusta kiszona",
    type: "jar",
    isVeg: true,
    color: "#E6D690",
    kcalPer100g: 19,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [0.1, 4.3, 0.9],
  },

  fried_onion: {
    name: "Cebulka prażona",
    type: "jar",
    color: "#C58A3C",
    kcalPer100g: 590,
    unitWeights: {
      lz: 10,
    },
    nutrientsPer100g: [44, 40, 6],
    verified: true,
  },

  fried_beets: {
    name: "Buraczki zasmażane",
    type: "jar",
    isVeg: true,
    color: "#8E244D",
    kcalPer100g: 64,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [0.6, 12.4, 1.3],
    verified: true,
  },

  beets_shredded: {
    name: "Buraczki wiórki",
    type: "jar",
    isVeg: true,
    color: "#A8324A",
    kcalPer100g: 43,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [0.2, 9.6, 1.6],
  },

  beets_whole_vinegar: {
    name: "Buraczki całe z octu",
    type: "jar",
    isVeg: true,
    color: "#7B1E3A",
    kcalPer100g: 25,
    unitWeights: {
      szt: 15,
      opak: 500,
    },
    nutrientsPer100g: [0.1, 5.5, 1.2],
  },

  sweet_sour_sauce: {
    name: "Sos słodko-kwaśny",
    type: "jar",
    color: "#D32F2F",
    kcalPer100g: 120,
    unitWeights: {
      opak: 250,
    },
    nutrientsPer100g: [2, 24, 1],
  },

  sechuan_chili_fusion: {
    name: "Seczuański chili fusion",
    type: "jar",
    color: "#D32F2F",
    kcalPer100g: 71,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [0, 18, 1],
  },

  jam_strawberry: {
    name: "Dżem truskawkowy",
    type: "jar",
    color: "#C62828",
    kcalPer100g: 250,
    unitWeights: {
      lz: 20,
      szk: 320,
      opak: 400,
    },
    nutrientsPer100g: [0.1, 60, 0.3],
  },

  jam_cranberry: {
    name: "Dżem żurawinowy",
    type: "jar",
    color: "#B71C1C",
    kcalPer100g: 260,
    unitWeights: {
      lz: 20,
      szk: 300,
    },
    nutrientsPer100g: [0.2, 65, 0.5],
  },

  //// CANNED ////

  canned_tomatoes: {
    name: "Pomidory z puszki",
    type: "jar",
    isVeg: true,
    color: "#D84315",
    kcalPer100g: 21,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [0.2, 4.8, 1.1],
  },

  canned_corn: {
    name: "Kukurydza konserwowa",
    type: "jar",
    isVeg: true,
    color: "#FDD835",
    kcalPer100g: 69,
    unitWeights: {
      opak: 285,
    },
    nutrientsPer100g: [0.6, 11, 3.2],
    price: 14,
    verified: true,
  },

  canned_peas: {
    name: "Groszek konserwowy",
    type: "jar",
    isVeg: true,
    color: "#66BB6A",
    kcalPer100g: 81,
    unitWeights: {
      opak: 250,
    },
    nutrientsPer100g: [0.4, 14, 5],
  },

  canned_red_beans: {
    name: "Fasola czerwona z puszki",
    type: "jar",
    isVeg: true,
    color: "#672422 ",
    kcalPer100g: 110,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [0.5, 20, 7],
  },

  canned_peach: {
    name: "Brzoskwinia w puszce",
    type: "jar",
    isVeg: true,
    color: "#FFB74D",
    kcalPer100g: 68,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [0.2, 17, 0.5],
  },

  canned_pineapple: {
    name: "Ananas w puszce",
    type: "jar",
    isVeg: true,
    color: "#FFD54F",
    kcalPer100g: 63,
    unitWeights: {
      plas: 30,
      opak: 565,
    },
    nutrientsPer100g: [0, 15, 0.4],
    verified: true,
  },

  //// FROZEN ////

  frozen_fries: {
    name: "Frytki mrożone",
    type: "jar",
    subType: "fro",
    color: "#FBC02D",
    kcalPer100g: 165,
    unitWeights: {
      opak: 1000,
    },
    nutrientsPer100g: [5.5, 25, 2.5],
    price: 9.3,
    verified: true,
  },

  frozen_thin_fries: {
    name: "Frytki długie cienkie",
    type: "jar",
    subType: "fro",
    color: "#FBC02D",
    kcalPer100g: 165,
    unitWeights: {
      opak: 1000,
    },
    nutrientsPer100g: [5.5, 25, 2.5],
    price: 9.3,
    verified: true,
  },

  frozen_vegetable_mix: {
    name: "Mrożona mieszanka warzyw",
    type: "jar",
    isVeg: true,
    subType: "fro",
    color: "#81C784",
    kcalPer100g: 29,
    nutrientsPer100g: [0.5, 3.4, 2],
    unitWeights: {
      opak: 750,
    },
    verified: true,
  },

  frozen_stir_fry: {
    name: "Warzywa na patelnię",
    type: "jar",
    isVeg: true,
    subType: "fro",
    color: "#66BB6A",
    kcalPer100g: 50,
    nutrientsPer100g: [0.7, 8.5, 2.5],
  },

  frozen_stir_fry_oriental: {
    name: "Warzywa na patelnię orientalne",
    type: "jar",
    isVeg: true,
    subType: "fro",
    color: "#66BB6A",
    kcalPer100g: 33,
    nutrientsPer100g: [0.3, 3.9, 2.1],
    price: 16,
    verified: true,
  },

  frozen_green_beans: {
    name: "Mrożona fasolka szparagowa",
    type: "jar",
    isVeg: true,
    subType: "fro",
    color: "#66BB6A",
    kcalPer100g: 42,
    nutrientsPer100g: [0.2, 6.8, 2.2],
    unitWeights: {
      opak: 450,
    },
    verified: true,
  },

  frozen_spinach: {
    name: "Mrożony szpinak",
    type: "jar",
    isVeg: true,
    subType: "fro",
    color: "#2E7D32",
    kcalPer100g: 19,
    unitWeights: {
      opak: 450,
    },
    nutrientsPer100g: [0.4, 0.4, 2.3],
    verified: true,
  },

  strawberry_frozen: {
    name: "Truskawki mrożone",
    type: "jar",
    isVeg: true,
    subType: "fro",
    color: "#EF5350",
    kcalPer100g: 35,
    unitWeights: {
      opak: 450,
    },
    nutrientsPer100g: [0.1, 7, 0.4],
    verified: true,
  },

  frozen_broccoli: {
    name: "Mrożone brokuły",
    type: "jar",
    isVeg: true,
    subType: "fro",
    color: "#2E7D32",
    kcalPer100g: 34,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [0.4, 3.2, 2.9],
  },

  //// SALADS ////

  coleslaw: {
    name: "Colesław",
    type: "jar",
    subType: "sal",
    color: "#FFD8A8",
    kcalPer100g: 150,
    unitWeights: {
      opak: 250,
    },
    nutrientsPer100g: [12, 10, 1.5],
  },

  cucumber_salad: {
    name: "Surówka z ogórkiem",
    type: "jar",
    subType: "sal",
    color: "#AED581",
    kcalPer100g: 101,
    unitWeights: {
      opak: 300,
    },
    nutrientsPer100g: [5.6, 9.9, 0.8],
  },

  corn_salad: {
    name: "Surówka z kukurydzą",
    type: "jar",
    subType: "sal",
    color: "#FFF176",
    kcalPer100g: 95,
    unitWeights: {
      opak: 450,
    },
    nutrientsPer100g: [5.1, 9.5, 1],
  },

  red_cabbage: {
    name: "Modra Kapusta",
    type: "jar",
    subType: "sal",
    color: "#7E57C2",
    kcalPer100g: 72,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [1.4, 4.8, 8.9],
  },
};
