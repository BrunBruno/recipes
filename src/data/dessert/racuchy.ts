import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iFRT } from "../../ingredients/ingFruit";
import { iGRN } from "../../ingredients/ingGrain";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import type { Recipe } from "../../types";

const racuchy: Recipe = {
  name: "Racuchy",
  description:
    "Puszyste racuchy z jabłkami, smażone na maśle klarowanym, słodkie i aromatyczne, idealne na deser lub słodkie śniadanie.",
  type: "dessert",
  images: ["racuchy.jpg"],
  time: 25,
  portions: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iGRN.flour, amount: 150, unit: "g" },
        { ingredient: iMET.egg, amount: 1, unit: "szt" },
        { ingredient: iFRT.apple, amount: 2, unit: "szt" },
        { ingredient: iDIR.kefir, amount: 200, unit: "ml" },
        { ingredient: iFAT.clarified_butter, amount: 2, unit: "lzi" },
        { ingredient: iOTH.vanilla_sugar, amount: 1, unit: "lz" },
        { ingredient: iOTH.sugar, amount: 1, unit: "lz" },
        { ingredient: iOTH.powdered_sugar, amount: 2, unit: "lzi" },
        { ingredient: iOTH.baking_soda, amount: 0.5, unit: "lzi" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Mąkę przesiej do miski, dodaj cukier wanilinowy, cukier oraz sodę oczyszczoną i dokładnie wymieszaj.",
        "Dodaj kefir oraz jajko i wymieszaj wszystko na jednolitą masę bez grudek.",
        "Jabłka obierz i pokrój w drobną kostkę, następnie dodaj do ciasta i delikatnie wymieszaj.",
        "Na patelni rozgrzej masło klarowane na średnim ogniu.",
        "Nakładaj po około 2 - 3 łyżki ciasta na jeden placek i smaż przez około 1.5 minuty na złoty kolor.",
        "Obróć racuchy na drugą stronę i smaż do zarumienienia.",
        "Podawaj posypane cukrem pudrem.",
      ],
    },
  ],
  keyWords: ["ciasto", "owoce", "naleśnik"],
};

export default racuchy;
