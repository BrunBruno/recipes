import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const watrobkaZKurczaka: Recipe = {
  name: "Wątróbka z Kurczaka",
  type: "dinner",
  images: ["watrobka-z-kurczaka.jpg"],
  time: 20,
  portions: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.poultry_liver, amount: 400 },
        { ingredient: iVEG.onion, amount: "2-3", unit: "szt" },
        { ingredient: iGRN.flour, amount: 1, unit: "łyżka" },
        { ingredient: iFAT.oil, amount: 2, unit: "łyżka" },
        { ingredient: iFAT.clarified_butter, amount: 1, unit: "łyżeczka" },
        { ingredient: iSPC.salt },
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
  keyWords: ["kurczak", "xxx"],
};

export default watrobkaZKurczaka;
