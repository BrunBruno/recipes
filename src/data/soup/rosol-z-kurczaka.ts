import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const rosolZKurczaka: Recipe = {
  name: "Rosół z Kurczaka",
  type: "soup",
  images: [""],
  time: 120,
  portions: 4,
  taste: 4,
  difficulty: 3,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iLIQ.rosol, amount: 3, unit: "l", kw: true },
        {
          ing: iMET.chicken_soup_portion,
          amount: 1,
          unit: "opak",
          exclude: true,
          kw: true,
        },
        {
          ing: iVEG.vegetable_soup_vegetables,
          amount: 1,
          unit: "szt",
          exclude: true,
          kw: true,
        },
        { ing: iLIQ.water, amount: 3, unit: "l", exclude: true },
        { ing: iSPC.knorr_bouillon_cube, amount: 1, unit: "kst" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],

  steps: [
    {
      title: "",
      steps: [
        "Opłucz dokładnie mięso na rosół.",
        "Przełóż porcję rosołową z kurczaka do dużego garnka.",
        "Zalej mięso 3 litrami zimnej wody.",
        "Powoli doprowadź wodę do wrzenia. Zbierz szumowiny z powierzchni wywaru.",
        "Oczyść warzywa na rosół i dodaj je do garnka.",
        "Dodaj kostkę bulionową.",
        "Zmniejsz ogień i gotuj na bardzo małym ogniu przez około 1.5 godziny. Rosół powinien delikatnie się gotować, a nie mocno wrzeć.",
        "Pod koniec gotowania spróbuj rosołu i w razie potrzeby dopraw do smaku.",
        "Wyjmij mięso i warzywa. W razie potrzeby przecedź rosół przez sito.",
        "Podawaj gorący, na przykład z makaronem i posiekaną natką pietruszki.",
      ],
    },
  ],

  keyWords: [],
};

export default rosolZKurczaka;
