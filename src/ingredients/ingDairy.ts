import type { IngredientItem } from "../types";

type IngId =
  //// DAIRY ////
  | "milk"
  | "buttermilk"
  | "condensed_milk"
  | "skim_milk"
  | "whole_milk"
  | "powdered_milk"
  | "yogurt_natural"
  | "greek_yogurt"
  | "strawberry_yogurt"
  | "kefir"
  | "cream_12"
  | "cream_18"
  | "cream_30"
  | "cream_36"
  | "sour_cream"
  | "whipped_cream"
  | "quark"

  //// CHEESE ////
  | "cottage_cheese"
  | "ricotta"
  | "cream_cheese"
  | "cream_cheese_horseradish"
  | "mascarpone"
  | "mozzarella"
  | "burrata"
  | "feta"
  | "camembert"
  | "halloumi"
  | "yellow_cheese"
  | "gouda_cheese"
  | "edam_cheese"
  | "lilliputian_cheese"
  | "parmigiano_reggiano"
  | "parmesan"
  | "cheddar_cheese"
  | "oscypek";

export const iDIR: Record<IngId, IngredientItem> = {
  milk: {
    name: "Mleko",
    type: "dir",
    color: "#FAFAFA",
    kcalPer100g: 60,
    unitWeights: {
      ml: 1,
      szk: 250,
    },
    nutrientsPer100g: [3.2, 4.7, 3.2],
    verified: true,
  },

  buttermilk: {
    name: "Maślanka",
    type: "dir",
    color: "#F1F8E9",
    kcalPer100g: 48,
    unitWeights: {
      szk: 250,
    },
    nutrientsPer100g: [1.5, 5, 3.5],
  },

  condensed_milk: {
    name: "Mleko skondensowane",
    type: "dir",
    color: "#FFF3C4",
    kcalPer100g: 134,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [7.5, 11, 5.5],
  },

  skim_milk: {
    name: "Mleko odtłuszczone",
    type: "dir",
    color: "#FAFAFA",
    kcalPer100g: 34,
    unitWeights: {
      ml: 1,
      szk: 250,
    },
    nutrientsPer100g: [0.1, 5, 3.4],
  },

  whole_milk: {
    name: "Mleko pełne",
    type: "dir",
    color: "#FFFDF7",
    kcalPer100g: 64,
    unitWeights: {
      ml: 1,
      szk: 250,
    },
    nutrientsPer100g: [3.6, 4.8, 3.3],
  },

  powdered_milk: {
    name: "Mleko w proszku",
    type: "dir",
    color: "#F4F1DA",
    kcalPer100g: 496,
    unitWeights: {
      lz: 8,
      szk: 100,
    },
    nutrientsPer100g: [27, 38, 26],
  },

  yogurt_natural: {
    name: "Jogurt naturalny",
    type: "dir",
    color: "#F5F5F5",
    kcalPer100g: 61,
    unitWeights: {
      ml: 1,
      opak: 180,
    },
    nutrientsPer100g: [3.5, 4.7, 10],
  },

  greek_yogurt: {
    name: "Jogurt grecki",
    type: "dir",
    color: "#EEEEEE",
    kcalPer100g: 97,
    unitWeights: {
      lz: 20,
    },
    nutrientsPer100g: [5, 3.6, 9],
  },

  strawberry_yogurt: {
    name: "Jogurt truskawkowy",
    type: "dir",
    color: "#F8BBD0",
    kcalPer100g: 90,
    unitWeights: {
      opak: 150,
      szk: 250,
    },
    nutrientsPer100g: [2, 14, 3],
  },

  kefir: {
    name: "Kefir",
    type: "dir",
    color: "#F0F4C3",
    kcalPer100g: 46,
    unitWeights: {
      ml: 1,
      szk: 250,
      lz: 15,
      opak: 400,
    },
    nutrientsPer100g: [1.5, 4.6, 3.6],
    verified: true,
  },

  cream_12: {
    name: "Śmietana 12%",
    type: "dir",
    color: "#FFFDE7",
    kcalPer100g: 136,
    unitWeights: {
      ml: 1,
      lz: 15,
    },
    nutrientsPer100g: [12, 4, 3],
  },

  cream_18: {
    name: "Śmietana 18%",
    type: "dir",
    color: "#FFFDE7",
    kcalPer100g: 191,
    unitWeights: {
      ml: 1,
      lz: 15,
    },
    nutrientsPer100g: [18, 4.8, 2.5],
  },

  cream_30: {
    name: "Śmietanka 30%",
    type: "dir",
    color: "#FFFDE7",
    kcalPer100g: 293,
    unitWeights: {
      ml: 1,
      lz: 15,
    },
    nutrientsPer100g: [30, 3.4, 2.3],
    verified: true,
  },

  cream_36: {
    name: "Śmietanka 36%",
    type: "dir",
    color: "#FFFDE7",
    kcalPer100g: 344,
    unitWeights: {
      ml: 1,
      lz: 15,
    },
    nutrientsPer100g: [36, 3, 2],
  },

  sour_cream: {
    name: "Kwaśna śmietana",
    type: "dir",
    color: "#FFFDE7",
    kcalPer100g: 206,
    unitWeights: {
      lz: 12,
    },
    nutrientsPer100g: [20, 3.5, 2.5],
  },

  whipped_cream: {
    name: "Bita śmietana",
    type: "dir",
    color: "#FFF8F0",
    kcalPer100g: 340,
    unitWeights: {
      lz: 15,
      szk: 120,
    },
    nutrientsPer100g: [30, 3, 2],
  },

  quark: {
    name: "Twaróg",
    type: "dir",
    color: "#F5F5F5",
    kcalPer100g: 133,
    unitWeights: {
      opak: 250,
    },
    nutrientsPer100g: [4.5, 3.3, 18],
  },

  cottage_cheese: {
    name: "Serek wiejski",
    type: "dir",
    color: "#F8F8F8",
    kcalPer100g: 98,
    unitWeights: {
      opak: 200,
    },
    nutrientsPer100g: [4, 3, 11],
  },

  ricotta: {
    name: "Ricotta",
    type: "dir",
    color: "#FFFDF7",
    kcalPer100g: 174,
    unitWeights: {
      lz: 15,
    },
    nutrientsPer100g: [11, 3, 13],
  },

  cream_cheese: {
    name: "Serek kremowy",
    type: "dir",
    color: "#F5F5F0",
    kcalPer100g: 225,
    unitWeights: {
      opak: 150,
    },
    nutrientsPer100g: [9, 3, 7],
  },

  cream_cheese_horseradish: {
    name: "Serek śmietankowy z chrzanem",
    type: "dir",
    color: "#E0E0E0",
    kcalPer100g: 240,
    unitWeights: {
      opak: 200,
    },
    nutrientsPer100g: [10, 3, 7],
  },

  mascarpone: {
    name: "Serek mascarpone",
    type: "dir",
    color: "#FFF8E7",
    kcalPer100g: 392,
    unitWeights: {
      opak: 250,
    },
    nutrientsPer100g: [40, 4.9, 3.4],
  },

  mozzarella: {
    name: "Mozzarella",
    type: "dir",
    color: "#FDFDFD",
    kcalPer100g: 280,
    unitWeights: {
      opak: 125,
    },
    nutrientsPer100g: [17, 3, 18],
  },

  burrata: {
    name: "Burrata",
    type: "dir",
    color: "#FFFDF8",
    kcalPer100g: 300,
    unitWeights: {
      szt: 125,
    },
    nutrientsPer100g: [25, 2, 12],
  },

  //// ChEESE ////

  feta: {
    name: "Ser feta",
    type: "dir",
    subType: "che",
    color: "#FFFDFC",
    kcalPer100g: 264,
    unitWeights: {
      g: 1,
      kst: 200,
    },
    nutrientsPer100g: [21, 4, 14],
  },

  camembert: {
    name: "Camembert",
    type: "dir",
    subType: "che",
    color: "#F5E6A8",
    kcalPer100g: 300,
    unitWeights: {
      szt: 120,
      plas: 30,
    },
    nutrientsPer100g: [24, 0.5, 20],
  },

  halloumi: {
    name: "Halloumi",
    type: "dir",
    subType: "che",
    color: "#FFF7D6",
    kcalPer100g: 321,
    unitWeights: {
      plas: 30,
      opak: 225,
    },
    nutrientsPer100g: [25, 2, 22],
  },

  yellow_cheese: {
    name: "Ser żółty",
    type: "dir",
    subType: "che",
    color: "#FFCA28",
    kcalPer100g: 338,
    unitWeights: {
      plas: 20,
      kst: 250,
      opak: 300,
    },
    nutrientsPer100g: [26, 1.1, 25],
    verified: true,
  },

  gouda_cheese: {
    name: "Ser gouda",
    type: "dir",
    subType: "che",
    color: "#FFB300",
    kcalPer100g: 338,
    unitWeights: {
      plas: 20,
      kst: 250,
      opak: 300,
    },
    nutrientsPer100g: [26, 1.1, 25],
    verified: true,
  },

  edam_cheese: {
    name: "Ser Edam",
    type: "dir",
    subType: "che",
    color: "#FFD54F",
    kcalPer100g: 315,
    unitWeights: {
      plas: 20,
      kst: 250,
      opak: 300,
    },
    nutrientsPer100g: [25, 1.5, 24],
  },

  lilliputian_cheese: {
    name: "Ser Liliput",
    type: "dir",
    subType: "che",
    color: "#FFD95A",
    kcalPer100g: 343,
    unitWeights: {
      opak: 350,
      plas: 90,
    },
    nutrientsPer100g: [27, 0, 25],
  },

  parmigiano_reggiano: {
    name: "Ser Parmigiano Reggiano",
    type: "dir",
    subType: "che",
    color: "#F9A825",
    kcalPer100g: 402,
    unitWeights: {
      plas: 10,
    },
    nutrientsPer100g: [30, 0, 32],
  },

  parmesan: {
    name: "Parmezan",
    type: "dir",
    subType: "che",
    color: "#F9E79F",
    kcalPer100g: 431,
    unitWeights: {
      lz: 10,
    },
    nutrientsPer100g: [29, 4, 36],
  },

  cheddar_cheese: {
    name: "Ser cheddar",
    type: "dir",
    subType: "che",
    color: "#FFD35A",
    kcalPer100g: 402,
    unitWeights: {
      plas: 20,
    },
    nutrientsPer100g: [33, 1.3, 25],
  },

  oscypek: {
    name: "Oscypek",
    type: "dir",
    subType: "che",
    color: "#E8C76A",
    kcalPer100g: 386,
    unitWeights: {
      szt: 600,
      plas: 25,
    },
    nutrientsPer100g: [32, 2, 24],
  },
};
