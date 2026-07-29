import { iBAK } from "../../ingredients/ingBakery";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iHRB } from "../../ingredients/ingHerb";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const kurczakCurry: Recipe = {
  name: "Kurczak Curry",
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
        {
          type: "choice",
          options: [
            { ing: iGRN.rice, amount: 200 },
            { ing: iBAK.nan_bread, amount: 2, unit: "szt" },
          ],
          selected: 0,
        },
        { ing: iFAT.oil, amount: 15, unit: "ml" },
        { ing: iLIQ.water, amount: 300, unit: "ml" },
        { ing: iSPC.kania_curry_fix, amount: 1, unit: "opak" },
        { ing: iHRB.fresh_coriander },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Jeśli podajesz danie z ryżem, ugotuj go zgodnie z instrukcją na opakowaniu. Chlebek naan podgrzej tuż przed podaniem.",
        "Pierś z kurczaka pokrój w kostkę lub cienkie paski.",
        "Na rozgrzanym oleju usmaż kurczaka.",
        "Zawartość opakowania Fix Curry rozpuść w 300 ml wody i wlej na patelnię.",
        "Doprowadź sos do wrzenia i gotuj przez ok. 5 minut, aż lekko zgęstnieje.",
        "Podawaj z ryżem lub chlebkiem naan.",
        "Przed podaniem posyp świeżą kolendrą.",
      ],
    },
  ],
  keyWords: ["kurczak", "ryż"],
};

export default kurczakCurry;
