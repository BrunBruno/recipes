import type { IngredientItem } from "../types";

type IngId =
  // === 1. KLUSKI BEZ NADZIENIA ===
  | "dumplings_kopytka"
  | "dumplings_gnocchi"
  | "dumplings_silesian"
  | "dumplings_steamed"

  // === 2. KLUSKI I PIEROŻKI ŚWIATA ===
  | "dumplings_potato_meat"
  | "dumplings_uszka"
  | "dumplings_pelmeni"
  | "dumplings_wonton"
  | "dumplings_pierogi_meat"
  | "dumplings_pierogi_ruskie"
  | "dumplings_pierogi_spinach"
  | "dumplings_pierogi_cheese"
  | "dumplings_pierogi_strawberry"
  | "tortellini_meat"

  // === 3. INNE GARMAŻERYJNE / PANIEROWANE ===
  | "croquettes_meat"
  | "onion_rings";

export const iDLS: Record<IngId, IngredientItem> = {
  //// 1. KLUSKI BEZ NADZIENIA ////

  dumplings_kopytka: {
    name: "Kopytka",
    type: "dls",
    color: "#EED9B7",
    kcalPer100g: 148,
    unitWeights: {
      opak: 500,
    },
    nutrientsPer100g: [1.2, 30, 3],
    price: 11,
    verified: true,
  },

  dumplings_gnocchi: {
    name: "Gnocchi",
    type: "dls",
    color: "#F3E5AB",
    kcalPer100g: 158,
    nutrientsPer100g: [0.5, 34, 4.1],
  },

  dumplings_silesian: {
    name: "Kluski śląskie",
    type: "dls",
    color: "#F0E0B0",
    kcalPer100g: 119,
    unitWeights: {
      szt: 30,
    },
    nutrientsPer100g: [0.7, 30, 2],
    price: 9.3,
    verified: true,
  },

  dumplings_steamed: {
    name: "Kluski na parze",
    type: "dls",
    color: "#F5E6C8",
    kcalPer100g: 253,
    unitWeights: {
      szt: 80,
      opak: 400,
    },
    nutrientsPer100g: [2.8, 48.9, 7.1],
    price: 8.7,
    verified: true,
  },

  //// 2. KLUSKI NADZIEWANE I PIEROŻKI ŚWIATA ////

  dumplings_potato_meat: {
    name: "Pyzy mięsne",
    type: "jar",
    subType: "fro",
    color: "#D8C2A5",
    kcalPer100g: 185,
    unitWeights: {
      szt: 60,
    },
    nutrientsPer100g: [5.5, 28, 6],
    price: 7.5,
  },

  dumplings_uszka: {
    name: "Mrożone uszka",
    type: "jar",
    subType: "fro",
    color: "#D6B27A",
    kcalPer100g: 230,
    nutrientsPer100g: [7.0, 35.0, 8.0],
    unitWeights: {
      opak: 450,
    },
  },

  dumplings_pelmeni: {
    name: "Pielmieni",
    type: "jar",
    subType: "fro",
    color: "#E8D5BD",
    kcalPer100g: 250,
    unitWeights: {
      opak: 450,
    },
    nutrientsPer100g: [10, 30, 10],
    price: 23.2,
  },

  dumplings_wonton: {
    name: "Mrożone pierożki Won Ton",
    type: "jar",
    subType: "fro",
    color: "#D9B77A",
    kcalPer100g: 220,
    nutrientsPer100g: [6.0, 31.0, 8.0],
    unitWeights: {
      opak: 250,
    },
  },

  tortellini_meat: {
    name: "Tortellini z mięsem",
    type: "jar",
    subType: "fro",
    color: "#D9A15B",
    kcalPer100g: 213,
    unitWeights: {
      opak: 400,
    },
    nutrientsPer100g: [5.6, 31.3, 8.1],
    price: 20,
    verified: true,
  },

  dumplings_pierogi_meat: {
    name: "Pierogi z mięsem",
    type: "jar",
    subType: "fro",
    color: "#E8D0B8",
    kcalPer100g: 235,
    unitWeights: {
      szt: 25,
    },
    nutrientsPer100g: [9.9, 26.5, 9.3],
    price: 18.7,
    verified: true,
  },

  dumplings_pierogi_ruskie: {
    name: "Pierogi ruskie",
    type: "jar",
    subType: "fro",
    color: "#E5D2B8",
    kcalPer100g: 177,
    nutrientsPer100g: [5.2, 25.6, 5.9],
    unitWeights: {
      szt: 25,
    },
    price: 18.7,
    verified: true,
  },

  dumplings_pierogi_spinach: {
    name: "Pierogi ze szpinakiem",
    type: "jar",
    subType: "fro",
    color: "#C2D4A8",
    kcalPer100g: 185,
    nutrientsPer100g: [5.5, 26, 6],
    unitWeights: {
      szt: 25,
    },
  },

  dumplings_pierogi_cheese: {
    name: "Pierogi z serem",
    type: "jar",
    subType: "fro",
    color: "#F2E8D0",
    kcalPer100g: 230,
    nutrientsPer100g: [9, 28, 9],
    unitWeights: {
      szt: 25,
    },
  },

  dumplings_pierogi_strawberry: {
    name: "Pierogi z truskawkami",
    type: "jar",
    subType: "fro",
    color: "#E57373",
    kcalPer100g: 183,
    nutrientsPer100g: [0.2, 38, 4.5],
    unitWeights: {
      szt: 25,
    },
    verified: true,
  },

  //// 3. INNE GARMAŻERYJNE / PANIEROWANE ////

  croquettes_meat: {
    name: "Krokiety z mięsem",
    type: "jar",
    subType: "fro",
    color: "#C47A3C",
    kcalPer100g: 233,
    unitWeights: {
      szt: 80,
    },
    nutrientsPer100g: [12, 19, 10],
    price: 18.2,
    verified: true,
  },

  onion_rings: {
    name: "Krążki cebulowe",
    type: "jar",
    subType: "fro",
    color: "#D9A24A",
    kcalPer100g: 320,
    unitWeights: { szt: 15 },
    nutrientsPer100g: [16, 38, 5],
  },
};
