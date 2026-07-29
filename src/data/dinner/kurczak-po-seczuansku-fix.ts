import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iHRB } from "../../ingredients/ingHerb";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const kurczakPoSeczuansku: Recipe = {
  name: "Kurczak po Seczuańsku",
  type: "dinner",
  cookingMethods: [
    ["boiled", 15],
    ["fried", 8],
    ["stewed", 5],
  ],
  images: [""],
  time: 20,
  portions: 2,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.chicken_breast, amount: 300 },
        { ing: iGRN.rice, amount: 200 },
        { ing: iVEG.green_bell_pepper, amount: 150 },
        { ing: iHRB.lemongrass, amount: 10 },
        { ing: iFAT.oil, amount: 15, unit: "ml" },
        { ing: iLIQ.water, amount: 300, unit: "ml" },
        { ing: iSPC.kania_sechuan_fix, amount: 1, unit: "opak" },
        { ing: iSPC.sesame, amount: 10 },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Ryż ugotuj zgodnie z instrukcją na opakowaniu.",
        "Pierś z kurczaka pokrój w cienkie paski, a paprykę w paski.",
        "Na rozgrzanym oleju usmaż kurczaka.",
        "Dodaj paprykę oraz drobno posiekaną trawę cytrynową i smaż przez około 2 minuty.",
        "Zawartość opakowania Fix Seczuański rozpuść w 300 ml wody i wlej na patelnię.",
        "Doprowadź sos do wrzenia i gotuj przez 2-3 minuty, aż lekko zgęstnieje.",
        "Podawaj z ugotowanym ryżem, posypując całość sezamem.",
      ],
    },
  ],
  keyWords: ["kurczak", "ryż"],
};

export default kurczakPoSeczuansku;
