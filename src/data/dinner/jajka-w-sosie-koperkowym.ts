import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const jajkaWSosieKoperkowym: Recipe = {
  name: "Jajka w Sosie Koperkowym",
  description:
    "Klasyczne jajka w sosie koperkowym - jajka na twardo w kremowym sosie z masła, mąki, śmietany i koperku, podawane z ziemniakami i ogórkiem kiszonym.",
  type: "dinner",
  images: ["jajka-w-sosie-koperkowym.jpg"],
  time: 30,
  portions: 1,
  executionDifficulty: 2,
  ingredients: [
    {
      title: "Jajka i sos",
      items: [
        { ing: iMET.egg, amount: 3, unit: "szt" },
        { ing: iFAT.butter, amount: 1, unit: "lz" },
        { ing: iGRN.flour, amount: 1, unit: "lz" },
        { ing: iOTH.water, amount: 0.5, unit: "szk" },
        { ing: iDIR.cream_30, amount: 2, unit: "lz" },
        { ing: iSPC.dill },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Przykładowe dodatki",
      items: [
        { ing: iVEG.potato, amount: 200 },
        { ing: iJAR.pickled_cucumber, amount: 2, unit: "szt" },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
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
        "Ugotuj ziemniaki w osolonej wodzie do miękkości.",
        "Jajka podawaj na talerzu z porcją ziemniaków, polane sosem koperkowym.",
        "Obok dodaj ogórka kiszonego jako dodatek.",
      ],
    },
  ],
  keyWords: ["jajko", "sos"],
};

export default jajkaWSosieKoperkowym;
