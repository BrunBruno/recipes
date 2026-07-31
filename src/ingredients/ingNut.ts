import type { IngredientItem } from "../types";

type IngId =
  //// NUTS ////
  | "walnuts"
  | "coconut_flakes"
  | "almonds"
  | "hazelnuts"
  | "cashews"
  | "peanuts"
  | "pistachios"
  | "coconut";

export const iNUT: Record<IngId, IngredientItem> = {
  //// NUTS ////

  walnuts: {
    name: "Orzechy włoskie",
    type: "nut",
    color: "#8D6E63",
    kcalPer100g: 665,
    unitWeights: {
      lz: 10,
      opak: 300,
    },
    nutrientsPer100g: [60, 12, 16],
    price: 66.6,
    verified: true,
  },

  coconut_flakes: {
    name: "Wiórki kokosowe",
    type: "nut",
    color: "#F5F5F5",
    kcalPer100g: 651,
    unitWeights: {
      lz: 7,
      opak: 200,
    },
    nutrientsPer100g: [61.4, 5.9, 5.6],
    price: 25,
    verified: true,
  },

  almonds: {
    name: "Migdały",
    type: "nut",
    color: "#D2B48C",
    kcalPer100g: 579,
    unitWeights: {
      lz: 10,
      opak: 200,
    },
    nutrientsPer100g: [50, 22, 21],
  },

  hazelnuts: {
    name: "Orzechy laskowe",
    type: "nut",
    color: "#A0522D",
    kcalPer100g: 628,
    unitWeights: {
      lz: 10,
      opak: 200,
    },
    nutrientsPer100g: [61, 17, 15],
  },

  cashews: {
    name: "Orzechy nerkowca",
    type: "nut",
    color: "#E6BE8A",
    kcalPer100g: 553,
    unitWeights: {
      lz: 10,
      opak: 200,
    },
    nutrientsPer100g: [44, 30, 18],
  },

  peanuts: {
    name: "Orzeszki ziemne",
    type: "nut",
    color: "#C68642",
    kcalPer100g: 567,
    unitWeights: {
      lz: 10,
      opak: 200,
    },
    nutrientsPer100g: [49, 16, 26],
  },

  pistachios: {
    name: "Pistacje",
    type: "nut",
    color: "#93C572",
    kcalPer100g: 560,
    unitWeights: {
      lz: 10,
      opak: 200,
    },
    nutrientsPer100g: [45, 28, 20],
  },

  coconut: {
    name: "Kokos",
    type: "nut",
    color: "#F5F5DC",
    kcalPer100g: 354,
    unitWeights: {
      szt: 500,
    },
    nutrientsPer100g: [33, 15, 3],
  },
};
