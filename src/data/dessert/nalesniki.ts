import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const nalesniki: Recipe = {
  name: "Naleśniki",
  description:
    "Klasyczne naleśniki przygotowane z mąki, jajek, mleka i odrobiny oleju. Ciasto jest gładkie i elastyczne, idealne do nadziewania ulubionymi farszami słodkimi lub wytrawnymi.",
  type: "dessert",
  images: [""],
  time: 20,
  portions: 4,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iGRN.flour, amount: 200 },
        { ingredient: iMET.egg, amount: 2, unit: "szt" },
        { ingredient: iDIR.milk, amount: 300, unit: "ml" },
        { ingredient: iOTH.water, amount: 100, unit: "ml" },
        { ingredient: iFAT.oil, amount: 2, unit: "lz" },
        { ingredient: iOTH.sugar, amount: 1, unit: "lz" },
        { ingredient: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Do miski wbij jajka, dodaj mąkę, mleko, wodę, olej, cukier i szczyptę soli.",
        "Całość dokładnie wymieszaj trzepaczką lub mikserem, aż powstanie gładkie ciasto bez grudek.",
        "Rozgrzej patelnię do naleśników.",
        "Wlej cienką warstwę ciasta i rozprowadź po całej powierzchni patelni.",
        "Smaż naleśnik na średnim ogniu, aż się zetnie i lekko zarumieni.",
        "Obróć na drugą stronę i smaż jeszcze chwilę.",
        "Usmaż kolejne naleśniki z pozostałego ciasta.",
      ],
    },
  ],
  keyWords: ["naleśnik", "ciasto"],
};

export default nalesniki;
