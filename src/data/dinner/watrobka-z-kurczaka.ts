import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";
import { fryingFat } from "../../utils";

const watrobkaZKurczaka: Recipe = {
  name: "Wątróbka z Kurczaka",
  type: "dinner",
  cookingMethods: ["fried"],
  images: ["watrobka-z-kurczaka.jpg"],
  time: 20,
  portions: 2,
  taste: 5,
  difficulty: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.poultry_liver, amount: 400 },
        { ing: iVEG.onion, amount: 3, unit: "szt" },
        { ing: iGRN.flour, amount: 1, unit: "lz" },
        ...fryingFat(iFAT.oil, 2, "lz", 0.6),
        ...fryingFat(iFAT.clarified_butter, 2, "lz", 0.8),
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Cebulę pokrój i podsmaż na maśle aż stanie się miękka.",
        "Na koniec dopraw solą i smaż jeszcze chwilę.",
        "Wątrobę dokładnie opłucz i odsącz na sitku.",
        "Obtocz w mące.",
        "Ułóż wątrobę na patelni i smaż pod przykryciem przez około 10 minut (po 5 min z każdej strony).",
      ],
    },
  ],
  keyWords: ["mięso", "kurczak"],
};

export default watrobkaZKurczaka;
