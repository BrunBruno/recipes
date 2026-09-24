import { iDIR } from "../../ingredients/ingDairy";

import { iFAT } from "../../ingredients/ingFat";

import { iFSH } from "../../ingredients/ingFish";

import { iGRN } from "../../ingredients/ingGrain";

import { iHRB } from "../../ingredients/ingHerb";

import { iSPC } from "../../ingredients/ingSpice";

import { iVEG } from "../../ingredients/ingVegetable";

import type { Recipe } from "../../types";

const portions = 1;

const spaghettiZSurimi: Recipe = {
  name: "Spaghetti z Surimi",
  type: "dinner",
  images: ["spaghetti-z-surimi.jpg"],
  time: 25,
  portions: portions,
  taste: 1,
  difficulty: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.spaghetti_pasta, amount: portions * 100, kw: true },
        { ing: iFSH.surimi, amount: 5, unit: "szt", kw: true },
        { ing: iDIR.yellow_mozzarella, amount: 50 },
        { ing: iFAT.butter, amount: 2, unit: "lzi" },
        { ing: iVEG.garlic, amount: 4, unit: "zbk" },
        { ing: iHRB.dill },
        { ing: iSPC.pepper_grains },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Pokrój surimi w kostkę lub mniejsze kawałki.",
        "Ugotuj spaghetti al dente w dużej ilości osolonej wody.",
        "Na patelni rozpuść masło. Dodaj surimi i podsmaż przez kilka minut, delikatnie mieszając.",
        "Dodaj drobno posiekany czosnek i podsmaż krótko na małym ogniu, uważając, aby czosnek się nie przypalił.",
        "Odcedź spaghetti i przełóż na patelnię. Wymieszaj z surimi i czosnkiem. W razie potrzeby dodaj odrobinę wody z gotowania makaronu.",
        "Dodaj startą lub drobno pokrojoną mozzarellę i wymieszaj, aż ser zacznie się rozpuszczać i połączy składniki.",
        "Dopraw solą i świeżo zmielonym pieprzem oraz posyp świeżym koperkiem.",
      ],
    },
  ],
  keyWords: ["makaron", "morskie"],
};

export default spaghettiZSurimi;
