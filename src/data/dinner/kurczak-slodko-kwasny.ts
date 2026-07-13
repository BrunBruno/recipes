import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";
import { fryingFat } from "../../utils";

const portions = 3;
const kurczakSlodkoKwasny: Recipe = {
  name: "Kurczak w Sosie Słodko-Kwaśnym",
  type: "dinner",
  cookingMethods: [["fried", 8], ["stewed", 30]],
  images: [
    "kurczak-slodko-kwasny.jpg",
    "kurczak-slodko-kwasny-2.jpg",
    "kurczak-slodko-kwasny-3.jpg",
  ],
  time: 30,
  portions: portions,
  taste: 4,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.chicken_breast, amount: 400 },
        { ing: iGRN.rice, amount: portions * 100 },
        { ing: iJAR.sweet_sour_sauce, amount: 1, unit: "opak" },
        ...fryingFat(iFAT.oil, 2, "lz", 0.4),
        { ing: iSPC.salt },
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
  keyWords: ["mięso", "kurczak", "ryż", "sos"],
};

export default kurczakSlodkoKwasny;
