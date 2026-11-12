import { dinnerSides } from "../../dinnerSides";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";
import { iLIQ } from "../../ingredients/ingLiquid";

const portions = 4;
const pieczenWSosieMysliwskim: Recipe = {
  name: "Pieczeń w Sosie Myśliwskim",
  type: "dinner",
  images: [
    "pieczen-w-sosie-mysliwskim",
    "pieczen-w-sosie-mysliwskim-2",
    "pieczen-w-sosie-mysliwskim-3",
  ],
  time: 110,
  portions: portions,
  taste: 4,
  difficulty: 3,
  ingredients: [
    {
      title: "Pieczeń",
      items: [
        { ing: iMET.pork_shoulder, amount: 125 * portions, kw: true },
        { ing: iSPC.meat_seasoning, amount: 1, unit: "lzi" },
        { ing: iSPC.hot_paprika, amount: 0.5, unit: "lzi" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Sos myśliwski",
      items: [
        { ing: iSPC.winiary_hunters_sauce_fix, amount: 1, unit: "opak" },
        { ing: iLIQ.water, amount: 300, unit: "ml" },
      ],
    },
  ],
  extrasMain: {
    options: [
      dinnerSides("silesian-dumplings-ready", portions),
      dinnerSides("kopytka-ready", portions),
    ],
    selected: 0,
  },
  extrasVeg: {
    options: [dinnerSides("sauteed-cabbage", portions)],
    selected: 0,
  },
  steps: [
    {
      title: "",
      steps: [
        "Mięso umyj, osusz i natrzyj olejem.",
        "Posyp mięso majerankiem, czosnkiem granulowanym, papryką ostrą, solą i pieprzem.",
        "Przełóż mięso do rękawa do pieczenia.",
        "Wstaw do piekarnika nagrzanego do 180°C i piecz przez 80-90 minut, aż mięso będzie miękkie.",
        "Po upieczeniu odstaw mięso na kilka minut, a następnie pokrój w plastry.",
        "Zawartość opakowania sosu myśliwskiego Winiary wsyp do 300 ml zimnej wody i dokładnie wymieszaj.",
        "Zagotuj sos, cały czas mieszając, i gotuj przez chwilę zgodnie z instrukcją na opakowaniu.",
        "Pokrojoną pieczeń polej gorącym sosem myśliwskim.",
      ],
    },
  ],
  keyWords: ["mięso", "wieprzowina", "sos"],
};

export default pieczenWSosieMysliwskim;
