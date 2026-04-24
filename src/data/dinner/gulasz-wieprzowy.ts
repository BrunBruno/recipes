import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 3;
const gulaszWieprzowy: Recipe = {
  name: "Gulasz Wieprzowy",
  description:
    "Gulasz wieprzowy w kremowym sosie z papryką i czosnkiem, podawany z kopytkami i buraczkami - sycący i aromatyczny obiad dla całej rodziny.",
  type: "dinner",
  images: ["gulasz-wieprzowy.jpg"],
  time: 80,
  portions: portions,
  executionDifficulty: 2,
  ingredients: [
    {
      title: "Gulasz",
      items: [
        { ing: iMET.stew_pork, amount: 500 },
        { ing: iFAT.oil, amount: 3, unit: "lz" },
        { ing: iFAT.butter, amount: 1, unit: "lz" },
        { ing: iFAT.rendered_lard, alt: true },
        { ing: iGRN.flour, amount: 1, unit: "lz" },
        { ing: iDIR.cream_18, amount: 2, unit: "lz" },
        { ing: iOTH.water, amount: 250, unit: "ml" },
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        { ing: iVEG.chives },
        { ing: iSPC.sweet_paprika },
        { ing: iSPC.granulated_garlic },
        { ing: iSPC.chilli },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Przykładowe dodatki",
      items: [
        { ing: iGRN.gnocchi, amount: portions * 250 },
        { ing: iJAR.fried_beets, amount: portions * 150 },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Mięso wieprzowe pokrój w kostkę.",
        "Następnie podsmaż je na oleju, dodaj masło lub smalec i smaż przez około 30 minut.",
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
  keyWords: ["wieprzowina", "sos"],
};

export default gulaszWieprzowy;
