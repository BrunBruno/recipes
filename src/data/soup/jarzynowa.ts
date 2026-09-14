import { iDIR } from "../../ingredients/ingDairy";
import { iHRB } from "../../ingredients/ingHerb";
import { iJAR } from "../../ingredients/ingJar";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const zupaJarzynowa: Recipe = {
  name: "Zupa Jarzynowa",
  type: "soup",
  images: [""],
  time: 45,
  portions: 4,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iLIQ.rosol, amount: 1.5, unit: "l" },
        { ing: iVEG.potato, amount: 300 },
        { ing: iVEG.carrot, amount: 2, unit: "szt" },
        { ing: iVEG.parsley_root, amount: 1, unit: "szt" },
        { ing: iVEG.celery_root, amount: 0.25, unit: "szt" },
        { ing: iVEG.green_beans, amount: 150 },
        { ing: iVEG.cauliflower, amount: 150 },
        { ing: iJAR.canned_peas, amount: 100 },
        { ing: iVEG.leek, amount: 0.5, unit: "szt" },
        { ing: iDIR.sour_cream, amount: 100 },
        { ing: iHRB.marjoram, amount: 1, unit: "lzi" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],

  steps: [
    {
      title: "",
      steps: [
        "Ziemniaki obierz i pokrój w kostkę.",
        "Marchew, pietruszkę i seler obierz i pokrój w drobną kostkę.",
        "Pora oczyść i pokrój w półplasterki.",
        "Fasolkę szparagową oraz kalafiora podziel na mniejsze kawałki.",
        "Podgrzej rosół w dużym garnku.",
        "Dodaj ziemniaki, marchew, pietruszkę, seler oraz por.",
        "Gotuj około 15 minut.",
        "Dodaj fasolkę szparagową, kalafiora i groszek.",
        "Gotuj kolejne 10-15 minut, aż wszystkie warzywa będą miękkie.",
        "Dopraw majerankiem, solą i pieprzem.",
        "Do śmietany dodaj kilka łyżek gorącej zupy i dokładnie wymieszaj.",
        "Wlej zahartowaną śmietanę do garnka i wymieszaj.",
        "Podgrzewaj jeszcze chwilę, ale nie doprowadzaj już do mocnego wrzenia.",
      ],
    },
  ],

  keyWords: ["zupa", "warzywa"],
};

export default zupaJarzynowa;
