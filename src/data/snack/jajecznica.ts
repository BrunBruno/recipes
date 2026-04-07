import { iFAT } from "../../ingredients/ingFat";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const jajecznica: Recipe = {
  name: "Jajecznica",
  description:
    "Prosta i szybka jajecznica na maśle klarowanym z możliwością dodania kiełbasy, cebuli, pomidora i szczypiorku - gotowa w 15 minut dla 1 osoby.",
  type: "snack",
  images: ["jajecznica.jpg", "jajecznica-2.jpg"],
  time: 15,
  portions: 1,
  ingredients: [
    {
      title: "Jajecznica",
      items: [
        { ingredient: iMET.egg, amount: "3-5", unit: "szt" },
        { ingredient: iFAT.clarified_butter, amount: 1, unit: "lz" },
        { ingredient: iSPC.salt },
      ],
    },
    {
      title: "Przykładowe dodatki",
      items: [
        { ingredient: iMET.sausage, amount: 0.5, unit: "peto" },
        { ingredient: iVEG.onion, amount: 1, unit: "szt" },
        { ingredient: iVEG.tomato, amount: 1, unit: "szt" },
        { ingredient: iVEG.chives },
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
