import { dinnerSides } from "../../dinnerSides";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iHRB } from "../../ingredients/ingHerb";
import { iJAR } from "../../ingredients/ingJar";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const kurczakSlodkoKwasny: Recipe = {
  name: "Kurczak Słodko-Kwaśny",
  type: "dinner",
  cookingMethods: [
    ["fried", 12],
    ["stewed", 3],
  ],
  images: ["kurczak-slodko-kwasny-fix.jpg", "kurczak-slodko-kwasny-fix-2.jpg"],
  time: 25,
  portions: 3,
  taste: 3,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.chicken_breast, amount: 400 },
        { ing: iVEG.bell_pepper, amount: 1, unit: "szt" },
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        { ing: iJAR.canned_pineapple, amount: 5, unit: "plas" },
        { ing: iGRN.potato_starch, amount: 3, unit: "lz" },
        { ing: iFAT.oil, amount: 3, unit: "lz" },
        { ing: iLIQ.water, amount: 250, unit: "ml" },
        { ing: iSPC.knorr_sweet_sour_chicken_fix, amount: 1, unit: "opak" },
        { ing: iHRB.chives },
      ],
    },
  ],
  extrasMain: {
    options: [dinnerSides("rice", 3)],
    selected: 0,
  },
  steps: [
    {
      title: "",
      steps: [
        "Kurczaka pokrój w paski.",
        "Cebulę, paprykę oraz ananasa pokrój na większe kawałki.",
        "Kurczaka oprósz mąką ziemniaczaną i podsmaż na rozgrzanym oleju na złoty kolor.",
        "Dodaj warzywa oraz ananasa i smaż na dużym ogniu przez około 3 minuty, aż warzywa zmiękną.",
        "Fix wymieszaj z 250 ml wody i dodaj do pozostałych składników.",
        "Całość gotuj jeszcze około 3 minuty, dokładnie mieszając.",
      ],
    },
  ],
  keyWords: ["mięso", "kurczak", "sos", "ryż"],
};

export default kurczakSlodkoKwasny;
