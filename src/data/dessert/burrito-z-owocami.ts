import { iDIR } from "../../ingredients/ingDairy";
import { iFRT } from "../../ingredients/ingFruit";
import { iFAT } from "../../ingredients/ingFat";
import { iOTH } from "../../ingredients/ingOther";
import { iMET } from "../../ingredients/ingMeat";
import { iGRN } from "../../ingredients/ingGrain";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 2;
const burritoZOwocami: Recipe = {
  name: "Burrito z Owocami",
  type: "dessert",
  images: [""],
  time: 30,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "Naleśniki",
      items: [
        { ing: iMET.egg, amount: 1, unit: "szt" },
        { ing: iDIR.milk, amount: 150, unit: "ml" },
        { ing: iGRN.wheat_flour, amount: 70 },
        { ing: iLIQ.water, amount: 50, unit: "ml" },
        { ing: iOTH.sugar, amount: 1, unit: "lzi" },
        { ing: iFAT.oil, amount: 1, unit: "lzi" },
        { ing: iSPC.salt, amount: 1 },
      ],
    },

    {
      title: "Nadzienie",
      items: [
        { ing: iDIR.quark, amount: 150 },
        { ing: iFRT.banana, amount: 1, unit: "szt" },
        { ing: iFRT.strawberry, amount: 150 },
        { ing: iFRT.apple, amount: 1, unit: "szt" },
        { ing: iOTH.sugar, amount: 1, unit: "lz" },
        { ing: iOTH.vanilla_sugar, amount: 1, unit: "lzi" },
      ],
    },
  ],

  steps: [
    {
      title: "Naleśniki",
      steps: [
        "Wymieszaj jajko, mleko, wodę, mąkę, cukier i szczyptę soli, aż powstanie gładkie, dość rzadkie ciasto.",
        "Odstaw ciasto na około 10 minut.",
        "Rozgrzej patelnię i delikatnie posmaruj ją olejem.",
        "Wylewaj cienką warstwę ciasta i smaż naleśniki z obu stron na lekko złoty kolor.",
      ],
    },

    {
      title: "Nadzienie",
      steps: [
        "Twarożek wymieszaj z cukrem i cukrem waniliowym.",
        "Banana pokrój w plasterki.",
        "Truskawki pokrój na mniejsze kawałki.",
        "Jabłko obierz i pokrój w drobną kostkę.",
      ],
    },

    {
      title: "Burrito",
      steps: [
        "Na środku każdego naleśnika rozsmaruj porcję twarożku.",
        "Dodaj banana, truskawki i jabłko.",
        "Zawiń boki naleśnika do środka, a następnie zwiń go ciasno jak burrito.",
        "Przed podaniem możesz krótko podsmażyć burrito na suchej patelni, aby naleśnik lekko się zarumienił.",
        "Podawaj na ciepło.",
      ],
    },
  ],

  keyWords: ["owoce", "naleśnik"],
};

export default burritoZOwocami;
