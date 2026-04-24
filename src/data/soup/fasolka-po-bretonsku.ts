import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const fasolkaPoBretonsku: Recipe = {
  name: "Fasolka po Bretońsku",
  description:
    "Tradycyjna fasolka po bretońsku na wywarze mięsnym z kiełbasą, boczkiem i majerankiem. Sycące danie obiadowe.",
  type: "soup",
  images: ["fasolka-po-bretonsku.jpg"],
  time: 120,
  portions: 5,
  executionDifficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iVEG.white_beans, amount: 300 },
        { ingredient: iMET.sausage, amount: 1, unit: "peto" },
        { ingredient: iMET.bacon_block, amount: 150 },
        { ingredient: iMET.pork_rib, amount: 200, excludeFromCalc: true },
        { ingredient: iMET.chicken_soup_portion, amount: 200, alt: true },
        { ingredient: iVEG.onion, amount: 120 },
        { ingredient: iVEG.carrot, amount: 150 },
        { ingredient: iVEG.parsley_root, amount: 100 },
        { ingredient: iVEG.leek, amount: 100 },
        { ingredient: iVEG.celery_root, amount: 100 },
        { ingredient: iJAR.tomato_paste, amount: 1, unit: "lz" },
        { ingredient: iSPC.marjoram },
        { ingredient: iSPC.bay_leaf },
        { ingredient: iSPC.allspice },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Fasolę namocz przez całą noc w zimnej wodzie.",
        "Przygotuj wywar mięsny (np. z żeberek lub wołowy) z dodatkiem cebuli, pora, selera, pietruszki, liścia laurowego i ziela angielskiego.",
        "Po ugotowaniu wywaru usuń warzywa, mięso pozostaw.",
        "Dodaj namoczoną fasolę oraz pokrojoną w kostkę marchewkę i gotuj do miękkości.",
        "Pokrój kiełbasę i boczek, następnie podsmaż na patelni (opcjonalnie).",
        "Dodaj kiełbasę i boczek do fasolki.",
        "Dodaj przecier pomidorowy oraz majeranek.",
        "Gotuj całość przez 10-15 minut.",
        "Dopraw solą i pieprzem do smaku.",
      ],
    },
  ],
  keyWords: ["zupa"],
};

export default fasolkaPoBretonsku;
