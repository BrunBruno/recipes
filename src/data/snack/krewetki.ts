import { iBAK } from "../../ingredients/ingBakery";
import { iFAT } from "../../ingredients/ingFat";
import { iFSH } from "../../ingredients/ingFish";
import { iHRB } from "../../ingredients/ingHerb";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const krewetki: Recipe = {
  name: "Krewetki",
  type: "snack",
  cookingMethods: [["fried", 5]],
  images: ["krewetki.jpg"],
  time: 10,
  portions: 2,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iFSH.shrimp, amount: 500 },
        { ing: iBAK.garlic_baguette, amount: 2, unit: "szt" },
        { ing: iFAT.butter, amount: 30 },
        { ing: iVEG.garlic, amount: 3, unit: "zbk" },
        { ing: iHRB.parsley },
        { ing: iSPC.black_pepper },
        { ing: iSPC.sea_salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Krewetki rozmroź, opłucz i dokładnie osusz.",
        "Na patelni rozgrzej masło.",
        "Dodaj drobno posiekany czosnek oraz krewetki i smaż przez 3-5 minut.",
        "Podczas smażenia dodaj posiekaną natkę pietruszki, sól morską oraz świeżo zmielony pieprz.",
        "Podawaj gorące prosto z patelni.",
        "Najlepiej smakują z podpieczoną bagietką z masłem czosnkowym.",
      ],
    },
  ],
  keyWords: [],
};

export default krewetki;
