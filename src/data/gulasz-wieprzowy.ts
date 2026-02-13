import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const gulaszWieprzowy: Recipe = {
  name: "Gulasz Wieprzowy",
  type: "dinner",
  images: [""],
  time: 80,
  portions: 3,
  ingredients: [
    {
      title: "Gulasz",
      items: [
        { ingredient: iMET.stew_pork, amount: 500 },
        { ingredient: iFAT.oil },
        { ingredient: iFAT.butter, amount: 1, unit: "łyżka" },
        { ingredient: iVEG.onion, amount: 1, unit: "szt" },
        { ingredient: iGRN.flour, amount: 1, unit: "łyżka" },
        { ingredient: iDIR.cream, amount: 2, unit: "łyżka" },
        { ingredient: iSPC.salt },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.sweet_paprika },
        { ingredient: iSPC.granulated_garlic },
        { ingredient: iSPC.chilli },
      ],
    },
    {
      title: "Dodatki",
      items: [
        { ingredient: iGRN.gnocchi, amount: '3 × 250', unit: "g" },
        { ingredient: iVEG.fried_beets, amount: "3 × 150", unit: "g" },
        { ingredient: iVEG.chives },
      ],
      excludeFromCalc: true,
    },
  ],
  steps: [
    {
      title: "Gulasz",
      steps: [
        "Mięso podsmaż na oleju, następnie dodaj masło lub smalec i smaż przez około 30 minut.",
        "Zalej mięso wodą, dodaj posiekaną cebulę i duś, aż mięso będzie miękkie.",
        "W szklance wymieszaj mąkę, śmietanę oraz niewielką ilość wody.",
        "Dodaj mieszankę do gulaszu, aby go zagęścić.",
        "Dopraw solą, pieprzem, papryką, czosnkiem i chilli do smaku.",
        "Przed podaniem posyp szczypiorkiem.",
      ],
    },
    {
      title: "Przykładowe podanie",
      steps: [
        "Ugotuj gotowe kopytka zgodnie z instrukcją na opakowaniu i odcedź.",
        "Podawaj gulasz z ugotowanymi kopytkami.",
        "Dodaj porcję buraczków zasmażanych.",
      ],
    },
  ],
  keyWords: ["mięso", "wieprzowina", "duszone"],
};

export default gulaszWieprzowy;
