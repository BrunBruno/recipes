import { iFAT } from "../../ingredients/ingFat";
import { iFSH } from "../../ingredients/ingFish";
import { iGRN } from "../../ingredients/ingGrain";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 4;
const smazonyKarp: Recipe = {
  name: "Smażony Karp",
  type: "dinner",
  country: "POL",
  images: [""],
  time: 30,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iFSH.carp, amount: 800, kw: true },
        { ing: iGRN.wheat_flour, amount: 4, unit: "lz", kw: true },
        { ing: iFAT.butter, amount: 2, unit: "lz" },
        { ing: iFAT.oil, amount: 2, unit: "lz" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Karpia oczyść, opłucz i osusz ręcznikiem papierowym, a następnie pokroj na dzwonka lub filety.",
        "Skrop rybę sokiem z cytryny, dopraw solą oraz świeżo mielonym czarnym pieprzem z obu stron i odstaw na około 15 minut.",
        "Każdy kawałek karpia dokładnie oprósz mąką pszenną z każdej strony, strzepując jej nadmiar.",
        "Na patelni rozgrzej olej wymieszany z masłem.",
        "Kładź kawałki ryby na rozgrzany tłuszcz i smaż na średnim ogniu przez około 5-7 minut z każdej strony, aż panierka będzie złocista, a mięso dobrze wysmażone.",
        "Po usmażeniu odsącz nadmiar tłuszczu na ręczniku papierowym i podawaj z cząstkami cytryny.",
      ],
    },
  ],
  keyWords: ["ryba", "smażone"],
};

export default smazonyKarp;
