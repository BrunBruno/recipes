import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const cornDogi: Recipe = {
  name: "Corn Dogi",
  type: "snack",
  images: [""],
  time: 30,
  portions: 4,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.sausage, amount: 8, unit: "szt", kw: true },
        { ing: iFAT.oil, amount: 1000, unit: "ml" },
        { ing: iGRN.corn_flour, amount: 150, kw: true },
        { ing: iGRN.wheat_flour, amount: 100 },
        { ing: iDIR.milk, amount: 200, unit: "ml" },
        { ing: iMET.egg, amount: 1, unit: "szt" },
        { ing: iOTH.sugar, amount: 1, unit: "lz" },
        { ing: iOTH.baking_powder, amount: 2, unit: "lzi" },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie parówek",
      steps: [
        "Parówki osusz dokładnie ręcznikiem papierowym.",
        "Każdą parówkę nadziej na drewniany patyczek do szaszłyków.",
      ],
    },
    {
      title: "Przygotowanie ciasta",
      steps: [
        "W misce wymieszaj mąkę kukurydzianą, mąkę pszenną, cukier, proszek do pieczenia i sól.",
        "Dodaj jajko oraz mleko.",
        "Wymieszaj dokładnie, aż powstanie gęste, jednolite ciasto.",
        "Przelej ciasto do wysokiego, wąskiego naczynia, aby łatwiej było zanurzać parówki.",
      ],
    },
    {
      title: "Smażenie",
      steps: [
        "Rozgrzej olej w garnku do temperatury około 170-180°C.",
        "Każdą parówkę zanurz w cieście, obracając ją, aby była równomiernie pokryta.",
        "Włóż ostrożnie do gorącego oleju.",
        "Smaż przez około 3-4 minuty, obracając, aż ciasto będzie złocistobrązowe.",
        "Wyjmij corn dogi i odsącz na ręczniku papierowym.",
      ],
    },
    {
      title: "Podanie",
      steps: [
        "Podawaj na gorąco z ketchupem, musztardą lub ulubionymi sosami.",
      ],
    },
  ],
  keyWords: ["fast food", "smażone"],
};

export default cornDogi;
