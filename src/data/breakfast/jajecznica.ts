import { iFAT } from "../../ingredients/ingFat";
import { iHRB } from "../../ingredients/ingHerb";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const jajecznica: Recipe = {
  name: "Jajecznica",
  type: "breakfast",
  cookingMethods: [["fried", 15]],
  images: [
    "jajecznica.jpg",
    "jajecznica-2.jpg",
    "jajecznica-3.jpg",
    "jajecznica-4.jpg",
    "jajecznica-5.jpg",
    "jajecznica-6.jpg",
  ],
  time: 15,
  portions: 1,
  taste: 4,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.egg, amount: 5, unit: "szt" },
        { ing: iFAT.clarified_butter, amount: 1, unit: "lz" },
        {
          type: "choice",
          options: [
            { ing: iMET.sausage, amount: 0.5, unit: "peto" },
            { ing: iMET.bacon_block, amount: 100, exclude: true },
            { ing: iVEG.onion, amount: 1, unit: "szt" },
            { ing: iVEG.tomato, amount: 1, unit: "szt" },
            { ing: iHRB.chives },
            { ing: iOTH.none },
          ],
          selected: 0,
        },
        {
          type: "choice",
          options: [
            { ing: iMET.sausage, amount: 0.5, unit: "peto" },
            { ing: iMET.bacon_block, amount: 100, exclude: true },
            { ing: iVEG.onion, amount: 1, unit: "szt" },
            { ing: iVEG.tomato, amount: 1, unit: "szt" },
            { ing: iHRB.chives },
            { ing: iOTH.none },
          ],
          selected: 2,
        },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Proponowane dodatki",
      isAdd: true,
      items: [
        { ing: iMET.sausage, exclude: true },
        { ing: iMET.bacon_block, exclude: true },
        { ing: iVEG.onion, exclude: true },
        { ing: iVEG.tomato, exclude: true },
        { ing: iHRB.chives, exclude: true },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Pokrój wybrane składniki na przykład: kiełbasę, cebulę i pomidora.",
        "Podsmaż składniki po kolei na maśle.",
        "Wbij jajka na patelnię i dokładnie wymieszaj, aż powstanie jajecznica.",
        "Dopraw solą i posyp szczypiorkiem przed podaniem.",
      ],
    },
  ],
  keyWords: ["jajko"],
};

export default jajecznica;
