import type { Recipe } from "../types";

const kurczakZPiekarnika: Recipe = {
  name: "Kurczak z Piekarnika",
  type: "dinner",
  image: "",
  ingredients: [
    { name: "ćwiartki kurczaka lub podudzia", amount: 4, unit: "szt" },
    { name: "słodka papryka" },
    { name: "ostra papryka" },
    { name: "wędzona papryka" },
    { name: "czosnek granulowany" },
    { name: "pieprz" },
    { name: "masło" },
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
