import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 3;
const kurczakSlodkoKwasny: Recipe = {
  name: "Kurczak w Sosie Słodko-Kwaśnym",
  description:
    "Kurczak w aromatycznym sosie słodko-kwaśnym, szybki do przygotowania i podawany z ryżem. Idealny na lekki obiad dla 3 osób.",
  type: "dinner",
  images: ["kurczak-slodko-kwasny.jpg"],
  time: 30,
  portions: portions,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.chicken_breast, amount: 400 },
        { ingredient: iGRN.rice, amount: portions * 100 },
        { ingredient: iSPC.sweet_sour_sauce, amount: 1, unit: "opak" },
        { ingredient: iFAT.oil, amount: 2, unit: "lz" },
        { ingredient: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Ugotuj ryż według instrukcji na opakowaniu.",
        "Pokrój pierś z kurczaka w kostkę, przypraw lekko solą.",
        "Na patelni rozgrzej olej i podsmaż kurczaka na złoty kolor.",
        "Dodaj sos słodko-kwaśny Winiary i dokładnie wymieszaj. Gotuj przez kilka minut, aż sos lekko zgęstnieje i wszystko będzie pokryte sosem.",
        "Podawaj kurczaka z warzywami na ugotowanym ryżu.",
      ],
    },
  ],
  keyWords: ["kurczak", "ryż", "xxx"],
};

export default kurczakSlodkoKwasny;
