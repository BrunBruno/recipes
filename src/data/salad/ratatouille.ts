import { iFAT } from "../../ingredients/ingFat";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const ratatouille: Recipe = {
  name: "Ratatouille",
  type: "salad",
  cookingMethods: [
    ["fried", 6],
    ["baked", 40, 200],
  ],
  images: ["ratatouille.jpg", "ratatouille-2.jpg"],
  time: 45,
  portions: 4,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iVEG.eggplant, amount: 1, unit: "szt" },
        { ing: iVEG.zucchini, amount: 1, unit: "szt" },
        { ing: iVEG.red_bell_pepper, amount: 1, unit: "szt" },
        { ing: iVEG.red_onion, amount: 1, unit: "szt" },
        { ing: iFAT.rapeseed_oil, amount: 30, unit: "ml" },
        { ing: iLIQ.water, amount: 200, unit: "ml" },
        { ing: iSPC.knorr_ratatouille_fix, amount: 1, unit: "opak" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Rozgrzej piekarnik do 200°C.",
        "Bakłażana, cukinię, paprykę i czerwoną cebulę pokrój w kostkę o boku około 1 cm.",
        "Na dużej patelni rozgrzej olej i smaż paprykę oraz cebulę przez 2-3 minuty.",
        "Dodaj bakłażana i cukinię, następnie smaż kolejne 2-3 minuty, aż warzywa zaczną się lekko rumienić.",
        "Zawartość saszetki Fix Ratatouille wymieszaj z 200 ml wody i wlej na patelnię z warzywami.",
        "Całość dokładnie wymieszaj, a następnie przełóż do naczynia żaroodpornego.",
        "Piecz przez około 40 minut, aż warzywa będą miękkie.",
      ],
    },
  ],
  keyWords: ["warzywa"],
};

export default ratatouille;
