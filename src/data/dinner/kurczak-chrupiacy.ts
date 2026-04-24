import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 2;
const kurczakChrupiacy: Recipe = {
  name: "Kurczak Chrupiacy",
  description:
    "Soczyste kawałki kurczaka w chrupiącej panierce, smażone na złoty kolor. Idealne z frytkami i świeżą surówką.",
  type: "dinner",
  images: ["kurczak-chrupiacy.jpg"],
  time: 30,
  portions: portions,
  executionDifficulty: 2,
  ingredients: [
    {
      title: "Kurczak",
      items: [
        { ing: iMET.chicken_breast, amount: 400, unit: "g" },
        { ing: iFAT.oil, amount: 80, unit: "ml" },
        { ing: iMET.egg, amount: 1, unit: "szt" },
        { ing: iDIR.milk, amount: 50, unit: "ml", alt: true },
        { ing: iGRN.breadcrumbs, amount: 50, unit: "g" },
        { ing: iSPC.knorr_crispy_chicken_fix, amount: 1, unit: "opak" },
      ],
    },
    {
      title: "Przykładowe dodatki",
      items: [
        { ing: iJAR.frozen_fries, amount: portions * 200, unit: "g" },
        { ing: iJAR.cucumber_salad, amount: portions * 150, unit: "g" },
        { ing: iSPC.potato_seasoning },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Kurczaka pokrój w cienkie plastry, jak na kotlety.",
        "Bułkę tartą wymieszaj z przyprawą typu fix do chrupiącego kurczaka.",
        "W misce roztrzep jajko z mlekiem.",
        "Każdy kawałek kurczaka zanurz w jajku z mlekiem, a następnie obtocz w panierce.",
        "Rozgrzej olej na patelni na średnim ogniu.",
        "Smaż kurczaka z obu stron, aż będzie złocisty, chrupiący i dobrze wysmażony w środku.",
      ],
    },
    {
      title: "Przykładowe podanie",
      steps: [
        "Przygotuj frytki według instrukcji.",
        "Podawaj kurczaka z frytkami oraz surówką z ogórka.",
      ],
    },
  ],
  keyWords: ["kurczak"],
};

export default kurczakChrupiacy;
