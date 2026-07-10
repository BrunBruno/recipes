import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import type { Recipe } from "../../types";

const babeczkiGotowe: Recipe = {
  name: "Babeczki Gotowe",
  type: "dessert",
  images: [
    "babeczki-gotowe.jpg",
    "babeczki-gotowe-2.jpg",
    "babeczki-gotowe-3.jpg",
  ],
  time: 25,
  portions: 6,
  taste: 4,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.cupcake_mix, amount: 1, unit: "opak" },
        { ing: iMET.egg, amount: 2, unit: "szt" },
        { ing: iFAT.oil, amount: 100, unit: "ml" },
        { ing: iLIQ.water, amount: 100, unit: "ml" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Na blaszce do pieczenia ustaw foremki.",
        "Piekarnik nagrzej do temperatury 175°C (bez termoobiegu).",
        "Mieszankę do wypieku babeczek wsyp d miski, dodaj jaja, wodę i olej.",
        "Całość energicznie wymieszaj łyżką lub mikserem do dokładnego połączenia składników.",
        "Odsyp jedną łyżeczkę płatków czekoladowych.",
        "Pozostałe płatki wsyp do ciasta i delikatnie wymieszaj.",
        "Ciasto równomiernie rozłóż na foremkach, a następnie posyp odsypanymi wcześniej płatkami.",
        "Natychmiast wstaw do nagrznago piekarnika i piecz na środkowym poziomie przez 17-20 minut.",
      ],
    },
  ],
};

export default babeczkiGotowe;
