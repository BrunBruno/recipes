import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSAU } from "../../ingredients/ingSauce";
import type { Recipe } from "../../types";

const frenchHotDog: Recipe = {
  name: "Hot Dog Francuski",
  type: "snack",
  cookingMethods: ["toasted"],
  images: ["hot-dog-francuski.jpg"],
  time: 10,
  portions: 1,
  taste: 4,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.sausages, amount: 2, unit: "szt" },
        { ing: iGRN.french_hotdog_buns, amount: 2, unit: "szt" },
        {
          type: "choice",
          options: [
            { ing: iSAU.ketchup, amount: 10 },
            { ing: iSAU.garlic_sauce, amount: 10 },
            { ing: iSAU.mustard_bbq, amount: 10 },
            { ing: iSAU.sriracha, amount: 10 },
            { ing: iSAU.american_sauce, amount: 10 },
            { ing: iSAU.thousand_island, amount: 10 },
            { ing: iSAU.spicy_ketchup, amount: 10 },
            { ing: iSAU.mustard_dessert, amount: 10 },
            { ing: iSAU.mustard_sun, amount: 10 },
            { ing: iSAU.mexican_sauce, amount: 10 },
            { ing: iSAU.remoulade, amount: 10 },
            { ing: iSAU.curry_sauce, amount: 10 },
            { ing: iOTH.none },
          ],
          selected: 0,
        },
        {
          type: "choice",
          options: [
            { ing: iSAU.ketchup, amount: 10 },
            { ing: iSAU.garlic_sauce, amount: 10 },
            { ing: iSAU.mustard_bbq, amount: 10 },
            { ing: iSAU.sriracha, amount: 10 },
            { ing: iSAU.american_sauce, amount: 10 },
            { ing: iSAU.thousand_island, amount: 10 },
            { ing: iSAU.spicy_ketchup, amount: 10 },
            { ing: iSAU.mustard_dessert, amount: 10 },
            { ing: iSAU.mustard_sun, amount: 10 },
            { ing: iSAU.mexican_sauce, amount: 10 },
            { ing: iSAU.remoulade, amount: 10 },
            { ing: iSAU.curry_sauce, amount: 10 },
            { ing: iOTH.none },
          ],
          selected: 1,
        },
        {
          type: "choice",
          options: [
            { ing: iSAU.ketchup, amount: 10 },
            { ing: iSAU.garlic_sauce, amount: 10 },
            { ing: iSAU.mustard_bbq, amount: 10 },
            { ing: iSAU.sriracha, amount: 10 },
            { ing: iSAU.american_sauce, amount: 10 },
            { ing: iSAU.thousand_island, amount: 10 },
            { ing: iSAU.spicy_ketchup, amount: 10 },
            { ing: iSAU.mustard_dessert, amount: 10 },
            { ing: iSAU.mustard_sun, amount: 10 },
            { ing: iSAU.mexican_sauce, amount: 10 },
            { ing: iSAU.remoulade, amount: 10 },
            { ing: iSAU.curry_sauce, amount: 10 },
            { ing: iOTH.none },
          ],
          selected: 2,
        },
        {
          type: "choice",
          options: [
            { ing: iSAU.ketchup, amount: 10 },
            { ing: iSAU.garlic_sauce, amount: 10 },
            { ing: iSAU.mustard_bbq, amount: 10 },
            { ing: iSAU.sriracha, amount: 10 },
            { ing: iSAU.american_sauce, amount: 10 },
            { ing: iSAU.thousand_island, amount: 10 },
            { ing: iSAU.spicy_ketchup, amount: 10 },
            { ing: iSAU.mustard_dessert, amount: 10 },
            { ing: iSAU.mustard_sun, amount: 10 },
            { ing: iSAU.mexican_sauce, amount: 10 },
            { ing: iSAU.remoulade, amount: 10 },
            { ing: iSAU.curry_sauce, amount: 10 },
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
        { ing: iSAU.american_sauce, exclude: true },
        { ing: iSAU.thousand_island, exclude: true },
        { ing: iSAU.spicy_ketchup, exclude: true },
        { ing: iSAU.mustard_dessert, exclude: true },
        { ing: iSAU.mustard_sun, exclude: true },
        { ing: iSAU.mexican_sauce, exclude: true },
        { ing: iSAU.remoulade, exclude: true },
        { ing: iSAU.curry_sauce, exclude: true },
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

  keyWords: ["mięso", "pieczywo", "parówka", "sos"],
};

export default frenchHotDog;
