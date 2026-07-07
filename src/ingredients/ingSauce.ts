import type { IngredientItem } from "../types";

type IngId = //// SAUCES ////
  | "ketchup"
  | "spicy_ketchup"
  | "mustard"
  | "mustard_sarepska"
  | "mustard_dessert"
  | "mustard_russian"
  | "mustard_bbq"
  | "mustard_sun"
  | "mayonnaise"
  | "garlic_sauce"
  | "sriracha"
  | "barbecue_sauce"
  | "curry_sauce"
  | "american_sauce"
  | "thousand_island"
  | "mexican_sauce"
  | "remoulade"
  | "horseradish_sauce";

export const iSAU: Record<IngId, IngredientItem> = {
  //// SAUCES ////

  ketchup: {
    name: "Ketchup",
    type: "sau",
    color: "#D32F2F",
    kcalPer100g: 109,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [0, 25, 1.7],
    price: 16.2,
    verified: true,
  },

  spicy_ketchup: {
    name: "Pikantny ketchup",
    type: "sau",
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
    type: "sau",
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
    type: "sau",
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
    type: "sau",
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
    type: "sau",
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
    type: "sau",
    color: "#CD7A00",
    kcalPer100g: 140,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [3.5, 2.5, 20.0],
  },

  mustard_sun: {
    name: "Musztarda słoneczna",
    type: "sau",
    color: "#FBC02D",
    kcalPer100g: 160,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [5, 8, 10],
  },

  mayonnaise: {
    name: "Majonez",
    type: "sau",
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
    type: "sau",
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
    type: "sau",
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
    type: "sau",
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
    type: "sau",
    color: "#FFB300",
    kcalPer100g: 328,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [28, 18, 1.6],
    verified: true,
  },

  american_sauce: {
    name: "Sos amerykański",
    type: "sau",
    color: "#FF8B00",
    kcalPer100g: 150,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [1.5, 20, 10],
  },

  thousand_island: {
    name: "Sos 1000 wysp",
    type: "sau",
    color: "#F5A97F",
    kcalPer100g: 370,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [1, 15, 35],
  },

  mexican_sauce: {
    name: "Sos meksykański",
    type: "sau",
    color: "#E53935",
    kcalPer100g: 90,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [2, 18, 1],
  },

  remoulade: {
    name: "Remoulada",
    type: "sau",
    color: "#F5E6A3",
    kcalPer100g: 480,
    unitWeights: {
      lz: 15,
      lzi: 5,
    },
    nutrientsPer100g: [1, 6, 50],
  },

  horseradish_sauce: {
    name: "Sos chrzanowy",
    type: "sau",
    color: "#F8F9FA",
    kcalPer100g: 210,
    unitWeights: {
      lzi: 15,
      opak: 200,
    },
    nutrientsPer100g: [1, 20, 3],
  },
};
