import { dinnerSides } from "../../dinnerSides";
import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
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
      title: "",

      items: [
        { ing: iMET.stew_pork, amount: 500 },
        { ing: iFAT.oil, amount: 3, unit: "lz" },
        {
          type: "choice",
          options: [
            { ing: iFAT.butter, amount: 1, unit: "lz", exclude: true },
            { ing: iFAT.rendered_lard, amount: 1, unit: "lz", exclude: true },
          ],
          selected: 0,
        },
        { ing: iFAT.butter, amount: 0.5, unit: "lz", invisible: true },
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
  ],
  extrasMain: {
    options: [
      dinnerSides("kopytka-ready", portions),
      dinnerSides("boiled-potatoes-dry", portions),
    ],
    selected: 0,
  },
  extrasVeg: {
    options: [
      dinnerSides("beets-fried-ready", portions),
      dinnerSides("beets-shredded-ready", portions),
      dinnerSides("beets-whole-vinegar", portions),
    ],
    selected: 0,
  },
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
  ],
  keyWords: ["wieprzowina", "sos"],
};

export default gulaszWieprzowy;
