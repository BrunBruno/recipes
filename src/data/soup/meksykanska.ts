import { iFAT } from "../../ingredients/ingFat";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const meksykanska: Recipe = {
  name: "Meksykańska",
  description:
    "Gęsta i sycąca zupa meksykańska z mieloną wołowiną, fasolą, kukurydzą i pomidorami, doprawiona aromatycznymi przyprawami.",
  type: "soup",
  images: [""],
  time: 60,
  portions: 6,
  executionDifficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ingredient: iMET.stew_beef, amount: 500 },
        { ingredient: iVEG.onion, amount: 220 },
        { ingredient: iVEG.carrot, amount: 140 },
        { ingredient: iVEG.parsley_root, amount: 100 },
        { ingredient: iVEG.garlic, amount: 4, unit: "zbk" },
        { ingredient: iVEG.potato, amount: 300 },
        { ingredient: iJAR.canned_red_beans, amount: 1, unit: "opak" },
        { ingredient: iJAR.canned_corn, amount: 1, unit: "opak" },
        { ingredient: iJAR.canned_tomatoes, amount: 1, unit: "opak" },
        { ingredient: iJAR.tomato_paste, amount: 2, unit: "lz" },
        { ingredient: iFAT.olive, amount: 5, unit: "lz" },
        { ingredient: iOTH.water, amount: 4, unit: "szk" },
        { ingredient: iOTH.sugar, amount: 1, unit: "lzi" },
        { ingredient: iSPC.oregano },
        { ingredient: iSPC.coriander },
        { ingredient: iSPC.caraway },
        { ingredient: iSPC.sweet_paprika },
        { ingredient: iSPC.chilli },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Wołowinę zmiel na średnich oczkach.",
        "W dużym garnku rozgrzej 4 łyżki oliwy i dodaj posiekaną cebulę. Smaż na małym ogniu około 10 minut aż się zeszkli.",
        "Dodaj posiekany czosnek i smaż jeszcze minutę.",
        "Dodaj startą marchewkę i pietruszkę, wymieszaj i przełóż wszystko na chwilę do miski.",
        "Do tego samego garnka dodaj łyżkę oliwy i wrzuć mielone mięso.",
        "Dodaj wszystkie przyprawy i smaż mięso na średnim ogniu.",
        "Dodaj wcześniej podsmażone warzywa, pomidory z puszki oraz koncentrat pomidorowy.",
        "Wlej wodę (lub bulion) i dodaj pokrojone ziemniaki (opcjonalnie).",
        "Gotuj całość pod przykryciem około 20-30 minut.",
        "Dodaj odsączoną kukurydzę oraz fasolę.",
        "Gotuj jeszcze 20 minut na małym ogniu.",
        "Dopraw do smaku według uznania.",
      ],
    },
  ],
  keyWords: ["zupa", "wołowina"],
};

export default meksykanska;
