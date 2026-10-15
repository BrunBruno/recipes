import { iBAK } from "../../ingredients/ingBakery";
import { iHRB } from "../../ingredients/ingHerb";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 1;
const bekonZJajkiem: Recipe = {
  name: "Jajka z Bekonem",
  type: "breakfast",
  images: [""],
  time: 15,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.bacon_slices, amount: 4, unit: "plas", kw: true },
        { ing: iMET.egg, amount: 2, unit: "szt", kw: true },
        { ing: iBAK.toast_multigrain_bread, amount: 2, unit: "krom" },
        { ing: iVEG.cherry_tomato, amount: 6, unit: "szt" },
        { ing: iHRB.chives },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Rozgrzej patelnię na średnim ogniu (bez dodawania tłuszczu).",
        "Ułóż plastry bekonu na patelni i smaż z obu stron, aż staną się chrupiące, a następnie zdejmij je na talerz.",
        "Wbij jajka na patelnię z wytopionym tłuszczem z bekonu i smaż do uzyskania preferowanego stopnia ścięcia.",
        "Dopraw jajka solą oraz świeżo mielonym czarnym pieprzem.",
        "Pomidora pokrój w połówki, a szczypiorek drobno posiekaj.",
        "Podawaj jajka i bekon w towarzystwie świeżego pieczywa oraz pomidora posypanego szczypiorkiem.",
      ],
    },
  ],
  keyWords: ["jajka", "boczek", "pieczywo"],
};

export default bekonZJajkiem;
