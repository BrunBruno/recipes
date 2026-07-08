import { dinnerSides } from "../../dinnerSides";
import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iHRB } from "../../ingredients/ingHerb";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 1;
const jajkaWSosieKoperkowym: Recipe = {
  name: "Jajka w Sosie Koperkowym",
  description:
    "Klasyczne jajka w sosie koperkowym - jajka na twardo w kremowym sosie z masła, mąki, śmietany i koperku, podawane z ziemniakami i ogórkiem kiszonym.",
  type: "dinner",
  images: ["jajka-w-sosie-koperkowym.jpg"],
  time: 30,
  portions: portions,
  executionDifficulty: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.egg, amount: 3, unit: "szt" },
        { ing: iFAT.butter, amount: 1, unit: "lz" },
        { ing: iGRN.flour, amount: 1, unit: "lz" },
        { ing: iLIQ.water, amount: 0.5, unit: "szk" },
        { ing: iDIR.cream_30, amount: 2, unit: "lz" },
        { ing: iHRB.dill },
        { ing: iSPC.salt },
      ],
    },
  ],
  extrasMain: {
    options: [dinnerSides("boiled-potatoes-dry", portions)],
    selected: 0,
  },
  extrasVeg: {
    options: [
      dinnerSides("pickled-cucumber", portions),
      dinnerSides("beets-whole-vinegar", portions),
    ],
    selected: 0,
  },
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
  ],
  keyWords: ["jajko", "sos"],
};

export default jajkaWSosieKoperkowym;
