import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iOTH } from "../ingredients/ingOther";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const jajkaWSosieKoperkowym: Recipe = {
  name: "Jajka w Sosie Koperkowym",
  type: "dinner",
  images: [""],
  time: 30,
  portions: 2,
  ingredients: [
    {
      title: "Jajka i sos",
      items: [
        { ingredient: iMET.egg, amount: 4 },
        { ingredient: iFAT.butter, amount: 1, unit: "łyżka" },
        { ingredient: iGRN.flour, amount: 1, unit: "łyżka" },
        { ingredient: iOTH.water, amount: 0.5, unit: "szklanka" },
        { ingredient: iDIR.cream_30 },
        { ingredient: iSPC.dill },
        { ingredient: iSPC.salt },
      ],
    },
    {
      title: "Dodatki",
      items: [
        { ingredient: iVEG.potato, amount: "2 × 150", unit: "g" },
        { ingredient: iVEG.pickled_cucumber, amount: "2 × 2", unit: "szt" },
      ],
      excludeFromCalc: true,
    },
  ],
  steps: [
    {
      title: "Przygotowanie jajek i sosu",
      steps: [
        "Jajka ugotuj na twardo, ostudź, obierz i odstaw.",
        "W rondelku rozpuść masło, dodaj mąkę i zrób jasną zasmażkę.",
        "Wlej wodę, energicznie mieszając, aby nie powstały grudki.",
        "Gotuj, cały czas mieszając, aż sos zgęstnieje. W razie potrzeby dolej więcej wody.",
        "Dodaj posiekany koperek oraz śmietanę, dopraw solą.",
        "Zagotuj sos, spróbuj i dopraw do smaku.",
        "Do sosu dodaj jajka lub podawaj jajka polane sosem koperkowym.",
      ],
    },
    {
      title: "Przykładowe podanie",
      steps: [
        "Jajka w sosie koperkowym podawaj na talerzu.",
        "Obok dodaj porcję gotowanych ziemniaków (puree).",
        "Podawaj z ogórkiem kiszonym jako dodatek.",
      ],
    },
  ],
  keyWords: ["jajko", "sos"],
};

export default jajkaWSosieKoperkowym;
