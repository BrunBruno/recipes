import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 4;
const bitki: Recipe = {
  name: "Bitki",
  description:
    "Soczyste bitki wieprzowe duszone w aromatycznym sosie z przyprawami i cebulą, idealne na tradycyjny obiad z ziemniakami i buraczkami.",
  type: "dinner",
  images: ["bitki.jpg", "bitki-2.jpg"],
  time: 65,
  portions: portions,
  executionDifficulty: 2,
  ingredients: [
    {
      title: "Mięso i sos",
      items: [
        { ing: iMET.pork_tenderloin, amount: 600 },
        { ing: iGRN.flour, amount: 3, unit: "lz" },
        { ing: iFAT.oil, amount: 5, unit: "lz" },
        { ing: iDIR.cream_30, amount: 2, unit: "lz" },
        { ing: iOTH.water, amount: 250, unit: "ml" },
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        { ing: iVEG.chives },
        { ing: iSPC.marjoram },
        { ing: iSPC.bay_leaf },
        { ing: iSPC.wild_garlic },
        { ing: iSPC.sweet_paprika },
        { ing: iSPC.allspice },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Przykładowe dodatki",
      items: [
        { ing: iVEG.potato, amount: portions * 200 },
        { ing: iJAR.beets_shredded, amount: portions * 150 },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Polędwiczkę wieprzową opłucz, usuń błonki i dokładnie osusz ręcznikiem papierowym.",
        "Pokrój mięso na plastry o grubości około 1 cm i delikatnie rozbij tłuczkiem.",
        "Posól bitki, obtocz w mące i krótko obsmaż na gorącym tłuszczu, tylko do lekkiego zarumienienia.",
        "Przełóż mięso do rondelka, najlepiej szerokiego.",
        "Cebulę pokrój w piórka i dodaj do mięsa.",
        "Zalej wodą tak, aby mięso było częściowo przykryte.",
        "Dodaj przyprawy: pieprz, paprykę, czosnek niedźwiedzi lub granulowany, majeranek, ziele angielskie i liść laurowy.",
        "Gotuj na małym ogniu do miękkości mięsa.",
        "Na końcu dopraw sos śmietaną 30% i posyp posiekanym szczypiorkiem.",
        "Dokładnie wymieszaj.",
      ],
    },
    {
      title: "Przykładowe podanie",
      steps: [
        "Ugotuj ziemniaki w osolonej wodzie do miękkości.",
        "Podawaj bitki z porcją ugotowanych ziemniaków.",
        "Ziemniaki polej sosem z rondelka.",
        "Obok dodaj buraczki w wiórkach jako dodatek warzywny.",
      ],
    },
  ],
  keyWords: ["wieprzowina", "sos"],
};

export default bitki;
