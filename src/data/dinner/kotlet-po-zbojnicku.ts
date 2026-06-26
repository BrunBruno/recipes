import { iFAT } from "../../ingredients/ingFat";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";
import { iDIR } from "../../ingredients/ingDairy";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";

const portions = 5;
const kotletPoZbojnicku: Recipe = {
  name: "Kotlety po Zbójnicku",
  description:
    "Soczyste kotlety schabowe zapiekane z pieczarkami, cebulą i żółtym serem. Syte danie obiadowe o wyrazistym smaku.",
  type: "dinner",
  images: ["kotlet-po-zbojnicku.jpg", "kotlet-po-zbojnicku-2.jpg"],
  time: 90,
  portions: portions,
  executionDifficulty: 4,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.pork_loin, amount: 2 * portions, unit: "plas" },
        { ing: iVEG.mushrooms, amount: 150 },
        { ing: iVEG.onion, amount: 100 },
        { ing: iDIR.yellow_cheese, amount: 150 },
        { ing: iMET.egg, amount: 2, unit: "szt" },
        { ing: iGRN.breadcrumbs, amount: 5, unit: "lz" },
        { ing: iFAT.oil, amount: portions * 2 + 2, unit: "lz" },
        { ing: iSPC.vegetable_seasoning },
        { ing: iSPC.sweet_paprika },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "",
      isAdd: true,
      items: [
        { ing: iVEG.potato, amount: portions * 200 },
        { ing: iJAR.corn_salad, amount: portions * 150 },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Pieczarki pokrój w plasterki, a cebulę w drobną kostkę.",
        "Na patelni rozgrzej tłuszcz, zeszklij cebulę, następnie dodaj pieczarki i smaż, aż odparują i się zarumienią.",
        "Dopraw farsz solą, pieprzem i papryką.",
        "Schab oczyść z błonek i lekko rozbij tłuczkiem przez folię.",
        "Dopraw solą, pieprzem i opcjonalnie jarzynką, a następnie obtocz w jajku i bułe tartej.",
        "Na patelni rozgrzej tłuszcz i smaż kotlety po 2-3 minuty z każdej strony.",
        "Przełóż kotlety do naczynia żaroodpornego.",
        "Na każdym kotlecie ułóż pieczarki z cebulą i posyp startym serem.",
        "Zapiekaj w piekarniku nagrzanym do 180°C przez 10-15 minut, aż ser się roztopi i lekko zrumieni.",
      ],
    },
    {
      title: "Przykładowe podanie",
      steps: [
        "Obierz ziemniaki i ugotuj je w osolonej wodzie do miękkości.",
        "Podawaj kotlety na talerzu z porcją ziemniaków.",
        "Obok dodaj surówkę z kukurydzą jako dodatek warzywny.",
      ],
    },
  ],
  keyWords: ["wieprzowina", "ser"],
};

export default kotletPoZbojnicku;
