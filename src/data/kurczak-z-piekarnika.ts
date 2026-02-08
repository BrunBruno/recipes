import type { Recipe } from "../types";

const kurczakZPiekarnika: Recipe = {
  name: "Kurczak z Piekarnika",
  type: "dinner",
  image: "",
  kcal: 600,
  time: 55,
  portions: 4,
  ingredients: [
    { name: "ćwiartki kurczaka", amount: 4, unit: "szt", type: "met" },
    { name: "słodka papryka", amount: null, unit: null, type: "spc" },
    { name: "ostra papryka", amount: null, unit: null, type: "spc" },
    { name: "wędzona papryka", amount: null, unit: null, type: "spc" },
    { name: "czosnek granulowany", amount: null, unit: null, type: "spc" },
    { name: "pieprz", amount: null, unit: null, type: "spc" },
    { name: "masło", amount: null, unit: null, type: "fat" },
  ],
  steps: [
    "Rozgrzej piekarnik do 190°C.",
    "Kurczaka umyj i osusz papierowym ręcznikiem.",
    "Ułóż kurczaka w naczyniu żaroodpornym i posyp przyprawami.",
    "Wstaw do piekarnika i piecz około 40-50 minut, aż mięso będzie miękkie, a skórka złocista.",
    "Na ostatnie 5-10 minut pieczenia, na każdej części kurczaka połóż mały kawałek masła, aby uzyskać chrupką skórkę.",
    "Wyjmij z piekarnika i odstaw na kilka minut przed podaniem.",
  ],
};

export default kurczakZPiekarnika;
