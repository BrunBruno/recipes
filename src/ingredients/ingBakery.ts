import type { IngredientItem } from "../types";

type IngId =
  //// 1. CHLEBY I TOSTY ////
  | "bread_rye" // bread_rye
  | "bread_sunflower" // bread_sunflower
  | "bread_wheat" // bread_wheat
  | "bread_wheat_malt" // bread_wheat_malt
  | "bread_toast" // bread_toast
  | "bread_toast_multigrain" // bread_toast_multigrain

  //// 2. BUŁKI KLASYCZNE I BAGIETKI  ////
  | "roll_kaiser"
  | "roll_kaiser_multigrain"
  | "roll_graham"
  | "roll_morning"
  | "baguette"
  | "baguette_garlic"

  //// 3. BUŁKI DO BURGERÓW I HOT-DOGÓW ////
  | "bun_burger"
  | "bun_burger_large"
  | "bun_burger_mini"
  | "bun_chicken"
  | "bun_hotdog"
  | "bun_french_hotdog"
  | "bun_french_hotdog_white"
  | "bun_french_hotdog_graham"

  //// 4. PLACKI, TORTILLE I SPODY ////
  | "tortilla"
  | "tortilla_mini"
  | "taco_shell_corn"
  | "pita"
  | "nan_bread"
  | "pinsa"

  //// 5. CIASTA I WYPIEKI SŁODKIE / WYTRAWNE ////
  | "pastry_puff"
  | "pastry_snail_custard"

  //// 6. GOTOWE PRZEKĄSKI PIEKARNICZE ////
  | "casserole_base"
  | "pizza_donatello_chicken"
  | "frusta_prosciutto"
  | "hot_dog_berlinka";

export const iBAK: Record<IngId, IngredientItem> = {
  //// 1. CHLEBY I TOSTY ////
  bread_rye: {
    name: "Chleb żytni",
    type: "bak",
    subType: "brd",
    color: "#7A5A3A",
    kcalPer100g: 275,
    unitWeights: {
      krom: 50,
      szt: 600,
    },
    nutrientsPer100g: [5.8, 45, 7.5],
    price: 8.8,
    verified: true,
  },

  bread_sunflower: {
    name: "Chleb słonecznikowy",
    type: "bak",
    subType: "brd",
    color: "#9A6B3F",
    kcalPer100g: 285,
    unitWeights: {
      krom: 40,
      szt: 550,
    },
    nutrientsPer100g: [9, 38, 10],
  },

  bread_wheat: {
    name: "Chleb pszenny",
    type: "bak",
    subType: "brd",
    color: "#D6A15F",
    kcalPer100g: 255,
    unitWeights: {
      krom: 35,
      szt: 500,
    },
    nutrientsPer100g: [3, 49, 8],
  },

  bread_wheat_malt: {
    name: "Chleb pszenny słodowy",
    type: "bak",
    subType: "brd",
    color: "#C88F52",
    kcalPer100g: 255,
    unitWeights: {
      krom: 35,
      szt: 500,
    },
    nutrientsPer100g: [3, 49, 8],
  },

  bread_toast: {
    name: "Tosty",
    type: "bak",
    subType: "brd",
    color: "#E6B98C",
    kcalPer100g: 267,
    unitWeights: {
      opak: 500,
      szt: 22,
      krom: 22,
    },
    nutrientsPer100g: [3.2, 50, 8.6],
    price: 8,
    verified: true,
  },

  bread_toast_multigrain: {
    name: "Tosty wieloziarniste",
    type: "bak",
    subType: "brd",
    color: "#8C5E3C",
    kcalPer100g: 252,
    unitWeights: {
      opak: 500,
      szt: 22,
      krom: 22,
    },
    nutrientsPer100g: [2.1, 45, 9.5],
    price: 6,
    verified: true,
  },

  //// 2. BUŁKI KLASYCZNE I BAGIETKI ////
  roll_kaiser: {
    name: "Kajzerka",
    type: "bak",
    color: "#E0A96D",
    kcalPer100g: 275,
    unitWeights: {
      szt: 55,
    },
    nutrientsPer100g: [3, 54, 8.5],
    price: 6.2,
    group: "roll",
  },

  roll_kaiser_multigrain: {
    name: "Kajzerka wieloziarnista",
    type: "bak",
    color: "#C8925B",
    kcalPer100g: 265,
    unitWeights: {
      szt: 60,
    },
    nutrientsPer100g: [4.5, 46, 10],
    price: 6.9,
    group: "roll",
  },

  roll_graham: {
    name: "Bułka grahamka",
    type: "bak",
    color: "#B68452",
    kcalPer100g: 255,
    unitWeights: {
      szt: 80,
      opak: 400,
    },
    nutrientsPer100g: [3, 48, 9],
    group: "roll",
  },

  roll_morning: {
    name: "Bułka poranna",
    type: "bak",
    color: "#D9A066",
    kcalPer100g: 270,
    unitWeights: {
      szt: 62,
    },
    nutrientsPer100g: [3.5, 52, 8],
    price: 12.8,
    group: "roll",
  },

  baguette: {
    name: "Bagietka",
    type: "bak",
    color: "#E8C98A",
    unitWeights: {
      szt: 250,
    },
    kcalPer100g: 270,
    nutrientsPer100g: [2, 55, 9],
    price: 6.3,
  },

  baguette_garlic: {
    name: "Bagietka czosnkowa",
    type: "bak",
    subType: "snk",
    color: "#E6C28B",
    kcalPer100g: 340,
    unitWeights: {
      szt: 175,
    },
    nutrientsPer100g: [12, 42, 8],
    price: 18.2,
  },

  //// 3. BUŁKI DO BURGERÓW I HOT-DOGÓW ////
  bun_burger: {
    name: "Bułki hamburgerowe",
    type: "bak",
    color: "#DFA46B",
    kcalPer100g: 277,
    unitWeights: {
      szt: 80,
      opak: 320,
    },
    nutrientsPer100g: [4.3, 48, 10],
  },

  bun_burger_large: {
    name: "Duże bułki hamburgerowe",
    type: "bak",
    color: "#DFA46B",
    kcalPer100g: 282,
    unitWeights: {
      szt: 80,
      opak: 320,
    },
    nutrientsPer100g: [4.6, 51, 8],
    price: 17.6,
  },

  bun_burger_mini: {
    name: "Mini bułka do burgera",
    type: "bak",
    color: "#D49B57",
    kcalPer100g: 290,
    nutrientsPer100g: [5.5, 49.0, 9.0],
    unitWeights: {
      szt: 30,
      opak: 300,
    },
  },

  bun_chicken: {
    name: "Bułki do chickerów",
    type: "bak",
    color: "#E8B97A",
    kcalPer100g: 280,
    unitWeights: {
      szt: 57,
      opak: 228,
    },
    nutrientsPer100g: [4.8, 49, 9.2],
    price: 22.8,
    verified: true,
  },

  bun_hotdog: {
    name: "Bułki hotdogowe",
    type: "bak",
    color: "#E0A060",
    kcalPer100g: 316,
    unitWeights: {
      szt: 70,
    },
    nutrientsPer100g: [8.3, 51, 7.7],
    price: 20.8,
    verified: true,
  },

  bun_french_hotdog: {
    name: "Bułki do hot-dogów francuskich",
    type: "bak",
    color: "#D18F4F",
    kcalPer100g: 265,
    unitWeights: {
      opak: 240,
      szt: 60,
    },
    nutrientsPer100g: [1.8, 50.8, 9.4],
    price: 21.6,
    verified: true,
  },

  bun_french_hotdog_white: {
    name: "Bułki pszenne do hot-dogów francuskich",
    type: "bak",
    color: "#F4A261",
    kcalPer100g: 265,
    nutrientsPer100g: [1.8, 50.8, 9.4],
    unitWeights: {
      opak: 240,
      szt: 60,
    },
    price: 21.6,
    verified: true,
  },

  bun_french_hotdog_graham: {
    name: "Bułki grahamki do hot-dogów francuskich",
    type: "bak",
    color: "#A0522D",
    kcalPer100g: 244,
    nutrientsPer100g: [2.1, 44.6, 8.9],
    unitWeights: {
      opak: 240,
      szt: 60,
    },
    price: 21.6,
    verified: true,
  },

  //// 4. PLACKI, TORTILLE I SPODY ////
  tortilla: {
    name: "Tortilla",
    type: "bak",
    color: "#F3D7A3",
    kcalPer100g: 312,
    unitWeights: {
      szt: 60,
    },
    nutrientsPer100g: [6.9, 52, 9],
    price: 13,
    verified: true,
  },

  tortilla_mini: {
    name: "Mini tortilla",
    type: "bak",
    color: "#F6E0B5",
    kcalPer100g: 310,
    unitWeights: {
      szt: 30,
    },
    nutrientsPer100g: [7, 50, 8],
  },

  taco_shell_corn: {
    name: "Muszla kukurydziana",
    type: "bak",
    color: "#FBC02D",
    kcalPer100g: 480,
    unitWeights: {
      szt: 12,
    },
    nutrientsPer100g: [24, 64, 6],
  },

  pita: {
    name: "Pita",
    type: "bak",
    color: "#E2C39B",
    kcalPer100g: 275,
    nutrientsPer100g: [1.2, 55.0, 9.0],
    unitWeights: {
      szt: 60,
      opak: 300,
    },
  },

  nan_bread: {
    name: "Chlebek Naan",
    type: "bak",
    color: "#EBCB93",
    kcalPer100g: 310,
    unitWeights: {
      szt: 90,
    },
    nutrientsPer100g: [5, 55, 9],
  },

  pinsa: {
    name: "Pinsa",
    type: "bak",
    color: "#E0A96D",
    kcalPer100g: 262,
    unitWeights: {
      szt: 250,
    },
    nutrientsPer100g: [6, 42, 8.3],
    price: 45.6,
    verified: true,
  },

  //// 5. CIASTA I WYPIEKI SŁODKIE / WYTRAWNE ////
  pastry_puff: {
    name: "Ciasto francuskie",
    type: "bak",
    color: "#F4E3C1",
    kcalPer100g: 558,
    nutrientsPer100g: [39.0, 44.0, 6.2],
    unitWeights: {
      opak: 275,
      szt: 92,
    },
  },

  pastry_snail_custard: {
    name: "Ślimaczek z budyniem",
    type: "bak",
    subType: "snk",
    color: "#fde58b",
    kcalPer100g: 315,
    unitWeights: {
      szt: 110,
    },
    nutrientsPer100g: [7.1, 56, 6.4],
    price: 28.5,
    verified: true,
  },

  //// 6. GOTOWE PRZEKĄSKI PIEKARNICZE ////
  casserole_base: {
    name: "Podstawa do zapiekanki",
    type: "bak",
    subType: "snk",
    color: "#D6A15E",
    kcalPer100g: 219,
    unitWeights: {
      szt: 235,
    },
    nutrientsPer100g: [6.2, 29.1, 10.9],
    price: 23.3,
    verified: true,
  },

  pizza_donatello_chicken: {
    name: "Pizza Donatello z kurczakiem",
    type: "bak",
    subType: "snk",
    color: "#D99A45",
    kcalPer100g: 223,
    nutrientsPer100g: [7.2, 25.2, 13.7],
    unitWeights: { szt: 400 },
    verified: true,
  },

  frusta_prosciutto: {
    name: "Frusta Prosciutto",
    type: "bak",
    subType: "snk",
    color: "#E8B97A",
    kcalPer100g: 207,
    unitWeights: {
      szt: 190,
    },
    nutrientsPer100g: [4.4, 30.8, 9.7],
    price: 39,
    verified: true,
  },

  hot_dog_berlinka: {
    name: "Hot dog z Berlinką",
    type: "bak",
    subType: "snk",
    color: "#c17e2d",
    kcalPer100g: 352,
    unitWeights: {
      szt: 120,
    },
    nutrientsPer100g: [23.8, 24.2, 9.6],
    price: 34,
    verified: true,
  },
};
