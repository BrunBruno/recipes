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

  //// CANNED ////
  | "canned_tomatoes"
  | "canned_corn"
  | "canned_peas"
  | "canned_red_beans"
  | "canned_peach"
  | "canned_pineapple"

  //// FROZEN ////
  | "frozen_fries"
  | "frozen_spinach"
  | "frozen_vegetable_mix"
  | "strawberry_frozen"

  //// SALADS ////
  | "coleslaw"
  | "cucumber_salad"
  | "corn_salad"
  | "red_cabbage"

  //// JUICES ////
  | "lemon_juice"
  | "lime_juice"

  //// SAUCES ////
  | "ketchup"
  | "spicy_ketchup"
  | "mustard"
  | "mustard_sarepska"
  | "mustard_dessert"
  | "mustard_russian"
  | "mustard_bbq"
  | "mayonnaise"
  | "garlic_sauce"
  | "sriracha"
  | "barbecue_sauce"
  | "curry_sauce";

export const iJAR: Record<IngId, IngredientItem> = {
  //// PRESERVES ////

  tomato_puree: {
    name: "Przecier pomidorowy",
    type: "jar",
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
    },
    nutrientsPer100g: [0.1, 60, 0.3],
  },

  //// CANNED ////

  canned_tomatoes: {
    name: "Pomidory z puszki",
    type: "jar",
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
    color: "#FDD835",
    kcalPer100g: 86,
    unitWeights: {
      opak: 200,
    },
    nutrientsPer100g: [1.4, 19, 3.2],
  },

  canned_peas: {
    name: "Groszek konserwowy",
    type: "jar",
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
    color: "#FFD54F",
    kcalPer100g: 82,
    unitWeights: {
      opak: 565,
    },
    nutrientsPer100g: [0.2, 21, 0.5],
  },

  //// FROZEN ////

  frozen_fries: {
    name: "Frytki mrożone",
    type: "jar",
    subType: "fro",
    color: "#FBC02D",
    kcalPer100g: 150,
    unitWeights: {
      opak: 1000,
    },
    nutrientsPer100g: [5, 25, 3],
  },

  frozen_vegetable_mix: {
    name: "Mrożona mieszanka warzyw",
    type: "jar",
    subType: "fro",
    color: "#81C784",
    kcalPer100g: 40,
    nutrientsPer100g: [0.5, 7, 2.5],
  },

  frozen_spinach: {
    name: "Mrożony szpinak",
    type: "jar",
    subType: "fro",
    color: "#2E7D32",
    kcalPer100g: 23,
    unitWeights: {
      opak: 450,
    },
    nutrientsPer100g: [0.4, 3.6, 2.9],
  },

  strawberry_frozen: {
    name: "Truskawki mrożone",
    type: "jar",
    subType: "fro",
    color: "#EF5350",
    kcalPer100g: 32,
    unitWeights: {
      opak: 450,
    },
    nutrientsPer100g: [0.3, 7.7, 0.7],
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

  //// JUICES ////
  lemon_juice: {
    name: "Sok z cytryny",
    type: "jar",
    subType: "jui",
    color: "#FFF176",
    kcalPer100g: 21,
    unitWeights: {
      ml: 1,
      lzi: 5,
    },
    nutrientsPer100g: [0, 0.4, 0.1],
    verified: true,
  },

  lime_juice: {
    name: "Sok z limonki",
    type: "jar",
    subType: "jui",
    color: "#B2FF59",
    kcalPer100g: 25,
    unitWeights: {
      lz: 10,
    },
    nutrientsPer100g: [0.1, 8, 0.4],
  },

  //// SAUCES ////

  ketchup: {
    name: "Ketchup",
    type: "jar",
    subType: "sau",
    color: "#D32F2F",
    kcalPer100g: 109,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [0, 25, 1.7],
    verified: true,
  },

  spicy_ketchup: {
    name: "Pikantny ketchup",
    type: "jar",
    subType: "sau",
    color: "#C62828",
    kcalPer100g: 110,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [0, 25, 1.8],
  },

  mustard: {
    name: "Musztarda",
    type: "jar",
    subType: "sau",
    color: "#FBC02D",
    kcalPer100g: 96,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [5.5, 3.1, 5.2],
    verified: true,
  },

  mustard_sarepska: {
    name: "Musztarda sarepska",
    type: "jar",
    subType: "sau",
    color: "#E1AD01",
    kcalPer100g: 101,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [5.1, 8.3, 3.7],
    verified: true,
  },

  mustard_dessert: {
    name: "Musztarda deserowa",
    type: "jar",
    subType: "sau",
    color: "#FDD835",
    kcalPer100g: 120,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [4.5, 4.0, 10.0],
  },

  mustard_russian: {
    name: "Musztarda rosyjska",
    type: "jar",
    subType: "sau",
    color: "#C78C06",
    kcalPer100g: 150,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [6.0, 6.5, 7.0],
  },

  mustard_bbq: {
    name: "Musztarda barbecue",
    type: "jar",
    subType: "sau",
    color: "#CD7A00",
    kcalPer100g: 140,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [3.5, 2.5, 20.0],
  },

  mayonnaise: {
    name: "Majonez",
    type: "jar",
    subType: "sau",
    color: "#FFFDE7",
    kcalPer100g: 631,
    unitWeights: {
      lz: 15,
      lzi: 5,
      opak: 500,
    },
    nutrientsPer100g: [68, 2.3, 1.9],
    verified: true,
  },

  garlic_sauce: {
    name: "Sos czosnkowy",
    type: "jar",
    subType: "sau",
    color: "#F5F5DC",
    kcalPer100g: 371,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [35, 11, 1.9],
    verified: true,
  },

  sriracha: {
    name: "Sos sriracha",
    type: "jar",
    subType: "sau",
    color: "#C62828",
    kcalPer100g: 87,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [0.5, 19, 1.6],
    verified: true,
  },

  barbecue_sauce: {
    name: "Sos barbecue",
    type: "jar",
    subType: "sau",
    color: "#5D4037",
    kcalPer100g: 142,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [0.2, 34, 0.8],
    verified: true,
  },

  curry_sauce: {
    name: "Sos curry",
    type: "jar",
    subType: "sau",
    color: "#FFB300",
    kcalPer100g: 328,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [28, 18, 1.6],
    verified: true,
  },
};
