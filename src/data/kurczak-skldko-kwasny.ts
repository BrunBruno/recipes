import type { Recipe } from "../types";

const kurczakSlodkoKwasny: Recipe = {
  name: "Kurczak w Sosie Słodki-Kwaśnym",
  type: "dinner",
  image: "",
  ingredients: [
    { name: "pierś z kurczaka", amount: 400, unit: "g" },
    { name: "sos słodko-kwaśny Winiary", amount: 1, unit: "opakowanie" },
    { name: "ryż", amount: 300, unit: "g" },
    { name: "olej roślinny", amount: 2, unit: "łyżki" },
    { name: "sól" },
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
