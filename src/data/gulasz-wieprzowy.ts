import { iDIR } from "../ingredients/ingDairy";
import { iFAT } from "../ingredients/ingFat";
import { iGRN } from "../ingredients/ingGrain";
import { iMET } from "../ingredients/ingMeat";
import { iOTH } from "../ingredients/ingOther";
import { iSPC } from "../ingredients/ingSpice";
import { iVEG } from "../ingredients/ingVegetable";
import type { Recipe } from "../types";

const gulaszWieprzowy: Recipe = {
  name: "Gulasz Wieprzowy",
  type: "dinner",
  images: ["gulasz-wieprzowy.jpg"],
  time: 80,
  portions: 3,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.stew_pork, amount: 500 },
        { ingredient: iFAT.oil, amount: 3, unit: "łyżka" },
        { ingredient: iFAT.butter, amount: 1, unit: "łyżka" },
        { ingredient: iGRN.flour, amount: 1, unit: "łyżka" },
        { ingredient: iDIR.cream_18, amount: 2, unit: "łyżka" },
        { ingredient: iOTH.water, amount: 250, unit: "ml" },
        { ingredient: iVEG.onion, amount: 1, unit: "szt" },
        { ingredient: iVEG.chives },
        { ingredient: iSPC.sweet_paprika },
        { ingredient: iSPC.granulated_garlic },
        { ingredient: iSPC.chilli },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
      ],
    },
    {
      title: "Dodatki",
      items: [
        { ingredient: iGRN.gnocchi, amount: "3 × 250" },
        { ingredient: iVEG.fried_beets, amount: "3 × 150" },
        { ingredient: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Mięso podsmaż na oleju, następnie dodaj masło lub smalec i smaż przez około 30 minut.",
        "Zalej mięso wodą, dodaj posiekaną cebulę i duś, aż mięso będzie miękkie.",
        "W szklance wymieszaj mąkę, śmietanę oraz niewielką ilość wody.",
        "Dodaj mieszankę do gulaszu, aby go zagęścić.",
        "Dopraw solą, pieprzem, papryką, czosnkiem, chilli i szczypiorkiem do smaku.",
      ],
    },
{
  title: "Przykładowe podanie",
  steps: [
    "Ugotuj kopytka zgodnie z instrukcją na opakowaniu i odcedź.",
    "Podawaj gulasz z porcją ugotowanych kopytek.",
    "Obok dodaj porcję buraczków zasmażanych.",
  ],
},
  ],
  keyWords: ["wieprzowina", "sos", "xxx"],
};

export default gulaszWieprzowy;
