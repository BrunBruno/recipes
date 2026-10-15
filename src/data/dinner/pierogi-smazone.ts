import { iFAT } from "../../ingredients/ingFat";
import { iJAR } from "../../ingredients/ingJar";
import type { Recipe } from "../../types";

const portions = 1;
const pierogiSmazone: Recipe = {
  name: "Pierogi Smażone",
  type: "dinner",
  country: "POL",
  images: [""],
  time: 15,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        {
          type: "choice",
          options: [
            {
              ing: iJAR.pierogi_ruskie,
              amount: 12,
              unit: "szt",
              kw: true,
            },
            {
              ing: iJAR.pierogi_meat,
              amount: 12,
              unit: "szt",
              kw: true,
            },
            {
              ing: iJAR.pierogi_cheese,
              amount: 12,
              unit: "szt",
              kw: true,
            },
            {
              ing: iJAR.pierogi_spinach,
              amount: 12,
              unit: "szt",
              kw: true,
            },
          ],
          selected: 0,
        },
        {
          type: "placeholder",
          options: [
            {
              ing: iJAR.pierogi_ruskie,
              amount: 12,
              unit: "szt",
              kw: true,
            },
            {
              ing: iJAR.pierogi_meat,
              amount: 12,
              unit: "szt",
              kw: true,
            },
            {
              ing: iJAR.pierogi_cheese,
              amount: 12,
              unit: "szt",
              kw: true,
            },
            {
              ing: iJAR.pierogi_spinach,
              amount: 12,
              unit: "szt",
              kw: true,
            },
          ],
        },
        { ing: iFAT.clarified_butter, amount: 1.5, unit: "lz" },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie pierogów",
      steps: [
        "Zagotuj dużą ilość osolonej wody w garnku.",
        "Wrzuć pierogi do wrzątku i gotuj na średnim ogniu przez około 3-5 minut od momentu wypłynięcia ich na powierzchnię, a następnie ostrożnie je odcedź.",
      ],
    },
    {
      title: "Smażenie",
      steps: [
        "Rozgrzej patelnię i rozpuść na niej masło klarowane.",
        "Ułóż ugotowane pierogi na patelni i smaż na średnim ogniu przez kilka minut z każdej strony, aż staną się złociste i chrupiące.",
      ],
    },
  ],
  keyWords: ["kluski", "smażone"],
};

export default pierogiSmazone;
