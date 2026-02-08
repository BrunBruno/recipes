import type { Recipe } from "../types";

const kurczakSlodkoKwasny: Recipe = {
  name: "Kurczak w Sosie Słodko-Kwaśnym",
  type: "dinner",
  image: "",
  kcal: 560,
  time: 30,
  portions: 3,
  ingredients: [
    { name: "pierś z kurczaka", amount: 400, unit: "g", type: "met" },
    {
      name: "sos słodko-kwaśny Winiary",
      amount: 1,
      unit: "opak",
      type: "sau",
    },
    { name: "ryż", amount: 300, unit: "g", type: "grn" },
    { name: "olej roślinny", amount: 2, unit: "łyżka", type: "fat" },
    { name: "sól", amount: null, unit: null, type: "spc" },
  ],
  steps: [
    "Ugotuj ryż według instrukcji na opakowaniu.",
    "Pokrój pierś z kurczaka w kostkę, przypraw lekko solą.",
    "Na patelni rozgrzej olej i podsmaż kurczaka na złoty kolor.",
    "Dodaj sos słodko-kwaśny Winiary i dokładnie wymieszaj. Gotuj przez kilka minut, aż sos lekko zgęstnieje i wszystko będzie pokryte sosem.",
    "Podawaj kurczaka z warzywami na ugotowanym ryżu.",
  ],
};

export default kurczakSlodkoKwasny;
