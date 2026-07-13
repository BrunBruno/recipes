import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSAU } from "../../ingredients/ingSauce";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const wrapTwister: Recipe = {
  name: "Wrap Twister",
  type: "snack",
  cookingMethods: [["fried", 8], ["toasted", 2]],
  images: ["wrap-twister.jpg", "wrap-twister-2.jpg"],
  time: 20,
  portions: 4,
  taste: 4,
  difficulty: 1,
  ingredients: [
    {
      title: "Wrap",
      items: [
        { ing: iMET.spicy_tenderloins, amount: 1, unit: "opak" },
        { ing: iGRN.tortilla, amount: 4, unit: "szt" },
        { ing: iVEG.tomato, amount: 1, unit: "szt" },
        { ing: iVEG.lettuce, amount: 8, unit: "szt" },
        { ing: iFAT.oil, amount: 1, unit: "lz" },
      ],
    },
    {
      title: "Sos",
      items: [
        { ing: iSAU.mayonnaise, amount: 2, unit: "lz" },
        { ing: iDIR.yogurt_natural, amount: 1, unit: "lz" },
        { ing: iLIQ.lemon_juice, amount: 0.5, unit: "lzi" },
        { ing: iOTH.sugar, amount: 0.5, unit: "lzi" },
        { ing: iSPC.granulated_garlic },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie",
      steps: [
        "Usmaż polędwiczki według instrukcji na opakowaniu na niewielkiej ilości oleju.",
        "Wymieszaj majonez, jogurt, sok z cytryny, cukier, czosnek granulowany, pieprz i sól, aby przygotować sos.",
        "Pokrój pomidora w cienkie plastry, a sałatę porwij na mniejsze kawałki.",
        "Na środku każdej tortilli rozsmaruj sos.",
        "Ułóż sałatę, pomidora oraz gorące polędwiczki.",
        "Zawiń tortillę, składając najpierw dół, następnie boki i ciasno rolując.",
        "Podgrzej gotowe wrapy na tosterze po 2-3 minuty, aż będą lekko chrupiące.",
      ],
    },
  ],
  keyWords: ["kurczak", "mięso", "tortilla", "sos"],
};

export default wrapTwister;
