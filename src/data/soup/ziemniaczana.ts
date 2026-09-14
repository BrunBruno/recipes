import { iHRB } from "../../ingredients/ingHerb";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const zupaZiemniaczana: Recipe = {
  name: "Zupa Ziemniaczana",
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
        { ing: iVEG.potato, amount: 600 },
        { ing: iVEG.carrot, amount: 1, unit: "szt" },
        { ing: iVEG.parsley_root, amount: 1, unit: "szt" },
        { ing: iVEG.celery_root, amount: 0.25, unit: "szt" },
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        { ing: iMET.sausage, amount: 150 },
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
        "Ziemniaki obierz i pokrój w niewielką kostkę.",
        "Marchew, pietruszkę i seler obierz, a następnie pokrój w drobną kostkę lub zetrzyj na tarce.",
        "Cebulę drobno posiekaj, a kiełbasę pokrój w plasterki.",
        "Podgrzej rosół w dużym garnku.",
        "Dodaj ziemniaki, marchew, pietruszkę, seler oraz cebulę.",
        "Gotuj na średnim ogniu przez około 15 minut.",
        "Dodaj pokrojoną kiełbasę i gotuj kolejne 15 minut, aż ziemniaki i warzywa będą miękkie.",
        "Dopraw majerankiem, solą i pieprzem.",
        "Podawaj zupę gorącą, z kawałkami warzyw i kiełbasy.",
      ],
    },
  ],

  keyWords: ["zupa", "ziemniak", "kiełbasa", "warzywa"],
};

export default zupaZiemniaczana;
