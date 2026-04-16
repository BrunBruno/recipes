import type { IngredientItem } from "../types";

type IngId =
  | "milk"
  | "buttermilk"
  | "condensed_milk"
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
  | "cream_cheese"
  | "cream_cheese_horseradish"
  | "mascarpone"
  | "mozzarella"
  | "yellow_cheese"
  | "gouda_cheese"
  | "edam_cheese"
  | "lilliputian_cheese"
  | "parmigiano_reggiano"
  | "parmesan";

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

  //// ChEESE ////

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
};
