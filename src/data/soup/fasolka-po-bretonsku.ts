import { iHRB } from "../../ingredients/ingHerb";
import { iJAR } from "../../ingredients/ingJar";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const fasolkaPoBretonsku: Recipe = {
  name: "Fasolka po Bretońsku",
  type: "soup",
  images: ["fasolka-po-bretonsku.jpg"],
  time: 120,
  portions: 5,
  taste: 4,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iVEG.white_beans, amount: 300 },
        { ing: iMET.sausage, amount: 1, unit: "peto" },
        { ing: iMET.bacon_block, amount: 150 },
        {
          type: "choice",
          options: [
            { ing: iMET.pork_rib, amount: 200, exclude: true },
            { ing: iMET.chicken_soup_portion, amount: 200, exclude: true },
          ],
          selected: 0,
        },
        { ing: iLIQ.water, amount: 2000, unit: "ml", exclude: true },
        { ing: iLIQ.meat_stock, amount: 2000, unit: "ml", invisible: true },
        { ing: iVEG.onion, amount: 120 },
        { ing: iVEG.carrot, amount: 150 },
        { ing: iVEG.parsley_root, amount: 100 },
        { ing: iVEG.leek, amount: 100 },
        { ing: iVEG.celery_root, amount: 100 },
        { ing: iJAR.tomato_paste, amount: 1, unit: "lz" },
        { ing: iHRB.marjoram },
        { ing: iHRB.bay_leaf },
        { ing: iSPC.allspice },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
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
  keyWords: ["zupa", "boczek", "kiełbasa", "mięso"],
};

export default fasolkaPoBretonsku;
