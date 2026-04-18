import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iJAR } from "../../ingredients/ingJar";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const pomidorowa: Recipe = {
  name: "Pomidorowa",
  description:
    "Delikatna i aromatyczna zupa pomidorowa na rosole, wzbogacona masłem i śmietaną, idealna na szybki obiad dla całej rodziny.",
  type: "soup",
  images: [""],
  time: 15,
  portions: 4,
  executionDifficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iOTH.rosol, amount: 700 },
        { ingredient: iJAR.tomato_puree, amount: 200 },
        { ingredient: iFAT.butter, amount: 1, unit: "lz" },
        { ingredient: iDIR.cream_30, amount: 80 },
        { ingredient: iVEG.parsley, amount: 10 },
        { ingredient: iSPC.dill },
        { ingredient: iSPC.basil },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Zagotuj rosół w garnku.",
        "Dodaj przecier pomidorowy i dokładnie wymieszaj.",
        "Dodaj łyżkę masła i gotuj kilka minut na małym ogniu.",
        "Dodaj śmietanę 30% i wymieszaj.",
        "Jeśli zupa jest za gęsta, dolej trochę rosołu.",
        "Dopraw do smaku solą i pieprzem.",
        "Na koniec dodaj posiekaną pietruszkę lub koper oraz odrobinę bazylii.",
      ],
    },
  ],
  keyWords: ["zupa"],
};

export default pomidorowa;
