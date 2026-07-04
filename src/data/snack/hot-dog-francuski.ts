import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import type { Recipe } from "../../types";

const frenchHotDog: Recipe = {
  name: "Hot Dog Francuski",
  description:
    "Szybki i prosty Hot Dog Francuski z parówką w chrupiącej bułce i mieszanką sosów: ketchup, musztarda, sos czosnkowy i sriracha - idealna przekąska w 10 minut.",
  type: "snack",
  images: ["hot-dog-francuski.jpg"],
  time: 10,
  portions: 1,
  executionDifficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.sausages, amount: 2, unit: "szt" },
        { ing: iGRN.french_hotdog_buns, amount: 2, unit: "szt" },
        {
          type: "choice",
          options: [
            { ing: iJAR.ketchup, amount: 10 },
            { ing: iJAR.garlic_sauce, amount: 10 },
            { ing: iJAR.mustard_bbq, amount: 10 },
            { ing: iJAR.sriracha, amount: 10 },
            { ing: iJAR.american_sauce, amount: 10 },
            { ing: iJAR.thousand_island, amount: 10 },
            { ing: iJAR.spicy_ketchup, amount: 10 },
            { ing: iJAR.mustard_dessert, amount: 10 },
            { ing: iJAR.sun_mustard, amount: 10 },
            { ing: iJAR.mexican_sauce, amount: 10 },
            { ing: iJAR.remoulade, amount: 10 },
            { ing: iJAR.curry_sauce, amount: 10 },
            { ing: iOTH.none },
          ],
          selected: 0,
        },
        {
          type: "choice",
          options: [
            { ing: iJAR.ketchup, amount: 10 },
            { ing: iJAR.garlic_sauce, amount: 10 },
            { ing: iJAR.mustard_bbq, amount: 10 },
            { ing: iJAR.sriracha, amount: 10 },
            { ing: iJAR.american_sauce, amount: 10 },
            { ing: iJAR.thousand_island, amount: 10 },
            { ing: iJAR.spicy_ketchup, amount: 10 },
            { ing: iJAR.mustard_dessert, amount: 10 },
            { ing: iJAR.sun_mustard, amount: 10 },
            { ing: iJAR.mexican_sauce, amount: 10 },
            { ing: iJAR.remoulade, amount: 10 },
            { ing: iJAR.curry_sauce, amount: 10 },
            { ing: iOTH.none },
          ],
          selected: 1,
        },
        {
          type: "choice",
          options: [
            { ing: iJAR.ketchup, amount: 10 },
            { ing: iJAR.garlic_sauce, amount: 10 },
            { ing: iJAR.mustard_bbq, amount: 10 },
            { ing: iJAR.sriracha, amount: 10 },
            { ing: iJAR.american_sauce, amount: 10 },
            { ing: iJAR.thousand_island, amount: 10 },
            { ing: iJAR.spicy_ketchup, amount: 10 },
            { ing: iJAR.mustard_dessert, amount: 10 },
            { ing: iJAR.sun_mustard, amount: 10 },
            { ing: iJAR.mexican_sauce, amount: 10 },
            { ing: iJAR.remoulade, amount: 10 },
            { ing: iJAR.curry_sauce, amount: 10 },
            { ing: iOTH.none },
          ],
          selected: 2,
        },
        {
          type: "choice",
          options: [
            { ing: iJAR.ketchup, amount: 10 },
            { ing: iJAR.garlic_sauce, amount: 10 },
            { ing: iJAR.mustard_bbq, amount: 10 },
            { ing: iJAR.sriracha, amount: 10 },
            { ing: iJAR.american_sauce, amount: 10 },
            { ing: iJAR.thousand_island, amount: 10 },
            { ing: iJAR.spicy_ketchup, amount: 10 },
            { ing: iJAR.mustard_dessert, amount: 10 },
            { ing: iJAR.sun_mustard, amount: 10 },
            { ing: iJAR.mexican_sauce, amount: 10 },
            { ing: iJAR.remoulade, amount: 10 },
            { ing: iJAR.curry_sauce, amount: 10 },
            { ing: iOTH.none },
          ],
          selected: 3,
        },
      ],
    },
    {
      title: "Inne proponowane sosy",
      isAdd: true,
      items: [
        { ing: iJAR.american_sauce, exclude: true },
        { ing: iJAR.thousand_island, exclude: true },
        { ing: iJAR.spicy_ketchup, exclude: true },
        { ing: iJAR.mustard_dessert, exclude: true },
        { ing: iJAR.sun_mustard, exclude: true },
        { ing: iJAR.mexican_sauce, exclude: true },
        { ing: iJAR.remoulade, exclude: true },
        { ing: iJAR.curry_sauce, exclude: true },
      ],
    },
  ],

  steps: [
    {
      title: "",
      steps: [
        "Podgrzej parówki mikrofalówce.",
        "Podgrzej bułki do hot dogów francuskich w tosterze.",
        "Do wnętrza bułki dodaj sosy.",
        "Propozycje sosów: ketchup i sos czosnkowy, musztarda i sos sriracha.",
        "Włóż gorącą parówkę do środka bułki.",
      ],
    },
  ],

  keyWords: ["pieczywo"],
};

export default frenchHotDog;
