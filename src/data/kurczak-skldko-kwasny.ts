import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSAU } from "../ingredients/ingSauce";
import { iSPC } from "../ingredients/ingSpice";
import type { Recipe } from "../types";

const kurczakSlodkoKwasny: Recipe = {
  name: "Kurczak w Sosie Słodko-Kwaśnym",
  type: "dinner",
  image: "",
  time: 30,
  portions: 3,
  ingredients: [
    { ingredient: iMET.chicken_breast, amount: 400 },
    { ingredient: iGRN.rice, amount: 300 },
    { ingredient: iSAU.winiary_sweet_sour_sauce, amount: 1, unit: "opak" },
    { ingredient: iFAT.oil, amount: 2, unit: "łyżka" },
    { ingredient: iSPC.salt },
  ],
  steps: [
    "Ugotuj ryż według instrukcji na opakowaniu.",
    "Pokrój pierś z kurczaka w kostkę, przypraw lekko solą.",
    "Na patelni rozgrzej olej i podsmaż kurczaka na złoty kolor.",
    "Dodaj sos słodko-kwaśny Winiary i dokładnie wymieszaj. Gotuj przez kilka minut, aż sos lekko zgęstnieje i wszystko będzie pokryte sosem.",
    "Podawaj kurczaka z warzywami na ugotowanym ryżu.",
  ],
  keyWords: ["mięso", "kurczak", "ryż", "sos", "azjatyckie"],
};

export default kurczakSlodkoKwasny;
