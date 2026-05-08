import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import { iMET } from "../../ingredients/ingMeat";
import { iGRN } from "../../ingredients/ingGrain";
import type { Recipe } from "../../types";

const laneCiasto: Recipe = {
  name: "Rosół z Lanym Ciastem",
  description:
    "Rosół z delikatnym lanym ciastem, podany z marchewką, mięsem i koperkiem, doprawiony pieprzem oraz maggi.",
  type: "soup",
  images: ["lane-ciasto.jpg"],
  time: 20,
  portions: 2,
  executionDifficulty: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iOTH.rosol, amount: 1000 },
        { ing: iVEG.carrot, amount: 2, unit: "szt" },
        { ing: iMET.chicken_soup_portion, amount: 100 },
        { ing: iMET.egg, amount: 1, unit: "szt" },
        { ing: iGRN.flour, amount: 2, unit: "lz" },
        { ing: iOTH.maggi },
        { ing: iSPC.dill },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Podgrzej rosół do zagotowania.",
        "Wyjmij marchewkę i mięso, pokrój na kawałki.",
        "W misce roztrzep jajka z mąką i solą, aby uzyskać lejące ciasto.",
        "Zmniejsz ogień - rosół powinien lekko bulgotać.",
        "Cienkim strumieniem wlewaj ciasto do rosołu, mieszając.",
        "Gotuj 2-3 minuty aż kluski się zetną.",
        "Dodaj marchewkę i mięso z powrotem do garnka.",
        "Dopraw do smaku solą, pieprzem i maggi.",
        "Podawaj posypane świeżym koperkiem.",
      ],
    },
  ],
  keyWords: ["zupa"],
};

export default laneCiasto;
