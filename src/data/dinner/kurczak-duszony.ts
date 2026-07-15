import { dinnerSides } from "../../dinnerSides";
import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iHRB } from "../../ingredients/ingHerb";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";
import { fryingFat } from "../../utils";

const portions = 3;
const gotowanyKurczak: Recipe = {
  name: "Kurczak Duszony",
  type: "dinner",
  cookingMethods: [
    ["fried", 8],
    ["stewed", 45],
  ],
  images: ["kurczak-duszony.jpg"],
  time: 45,
  portions: portions,
  taste: 4,
  difficulty: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.chicken_thigh, amount: 600 },
        ...fryingFat(iFAT.oil, 3, "lz", 0.3),
        { ing: iDIR.cream_18, amount: 2, unit: "lz" },
        { ing: iGRN.flour, amount: 1, unit: "lz" },
        { ing: iLIQ.water, amount: 250, unit: "ml" },
        { ing: iLIQ.maggi },
        { ing: iHRB.chives },
        { ing: iHRB.wild_garlic },
        { ing: iSPC.curry },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  extrasMain: {
    options: [dinnerSides("boiled-potatoes-dry", portions)],
    selected: 0,
  },
  extrasVeg: {
    options: [dinnerSides("beets-whole-vinegar", portions)],
    selected: 0,
  },
  steps: [
    {
      title: "",
      steps: [
        "Udka dokładnie opłucz i osusz papierowym ręcznikiem.",
        "Natrzyj mięso solą i papryką.",
        "Rozgrzej olej na patelni i obsmaż kurczaka z każdej strony, aż się zarumieni.",
        "Przełóż mięso razem z tłuszczem do rondla.",
        "Zalej wodą tak, aby mięso było tylko częściowo przykryte.",
        "Dodaj czosnek niedźwiedzi, curry, sól i pieprz.",
        "Gotuj na małym ogniu do momentu, aż kurczak będzie miękki.",
        "W szklance rozrób mąkę z niewielką ilością wody.",
        "Wlej do rondla, ciągle mieszając, aby zagęścić sos.",
        "Dodaj śmietanę według smaku i posiekany szczypiorek.",
        "Gotuj jeszcze chwilę, dopraw ewentualnie Maggi i podawaj.",
      ],
    },
  ],
  keyWords: ["mięso", "kurczak", "sos"],
};

export default gotowanyKurczak;
