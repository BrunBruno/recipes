import { iFAT } from "../../ingredients/ingFat";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";
import { iDIR } from "../../ingredients/ingDairy";
import { iGRN } from "../../ingredients/ingGrain";

const kotletPoZbojnicku: Recipe = {
  name: "Kotlet po Zbójnicku",
  description:
    "Soczyste kotlety schabowe zapiekane z pieczarkami, cebulą i żółtym serem. Syte danie obiadowe o wyrazistym smaku.",
  type: "dinner",
  images: [""],
  time: 40,
  portions: 4,
  executionDifficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.pork_loin, amount: 4, unit: "plas" },
        { ingredient: iVEG.mushrooms, amount: 300 },
        { ingredient: iVEG.onion, amount: 150 },
        { ingredient: iDIR.yellow_cheese, amount: 150 },
        { ingredient: iGRN.flour, amount: 2, unit: "lz" },
        { ingredient: iFAT.oil, amount: 2, unit: "lz" },
        { ingredient: iSPC.marjoram },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Schab oczyść z błonek i lekko rozbij tłuczkiem przez folię.",
        "Dopraw solą i pieprzem, a następnie oprósz delikatnie mąką.",
        "Pieczarki pokrój w plasterki, a cebulę w drobną kostkę.",
        "Na patelni rozgrzej tłuszcz, zeszklij cebulę, następnie dodaj pieczarki i smaż, aż odparują i się zarumienią.",
        "Dopraw farsz solą, pieprzem i majerankiem.",
        "Na drugiej patelni rozgrzej tłuszcz i smaż kotlety po 2-3 minuty z każdej strony.",
        "Przełóż kotlety do naczynia żaroodpornego.",
        "Na każdym kotlecie ułóż pieczarki z cebulą i posyp startym serem.",
        "Zapiekaj w piekarniku nagrzanym do 180°C przez 10-15 minut, aż ser się roztopi i lekko zrumieni.",
      ],
    },
  ],
  keyWords: ["wieprzowina", "ser"],
};

export default kotletPoZbojnicku;
