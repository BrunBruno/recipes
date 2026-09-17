import { iMET } from "../../ingredients/ingMeat";
import { iVEG } from "../../ingredients/ingVegetable";
import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iSAU } from "../../ingredients/ingSauce";
import { iSPC } from "../../ingredients/ingSpice";
import { iBAK } from "../../ingredients/ingBakery";
import type { Recipe } from "../../types";

const qurrito: Recipe = {
  name: "Qurrito",
  type: "snack",
  country: "MEX",
  images: [""],
  time: 30,
  portions: 1,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "Qurrito",
      items: [
        { ing: iBAK.tortilla, amount: 1, unit: "szt" },
        { ing: iMET.chicken_breast, amount: 150 },
        { ing: iDIR.yellow_cheese, amount: 80 },
        { ing: iVEG.onion, amount: 0.5, unit: "szt" },
        { ing: iFAT.oil, amount: 1, unit: "lz" },
        { ing: iSPC.sweet_paprika, amount: 1, unit: "lzi" },
        { ing: iSPC.hot_paprika, amount: 0.5, unit: "lzi" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Sos",
      items: [
        { ing: iSAU.barbecue_sauce, amount: 2, unit: "lz" },
        { ing: iSAU.sriracha, amount: 1, unit: "lz" },
      ],
    },
  ],

  steps: [
    {
      title: "Kurczak",
      steps: [
        "Kurczaka pokrój w niewielką kostkę.",
        "Dopraw solą, pieprzem, słodką i ostrą papryką.",
        "Na patelni rozgrzej olej i smaż kurczaka, aż będzie dobrze wysmażony.",
        "Cebulę drobno posiekaj, dodaj do kurczaka i smaż jeszcze kilka minut, aż zmięknie.",
      ],
    },

    {
      title: "Sos",
      steps: [
        "Wymieszaj sos BBQ z ostrym sosem.",
        "Dodaj sos do usmażonego kurczaka i dokładnie wymieszaj.",
        "Podgrzewaj jeszcze chwilę, aż sos oblepi kurczaka.",
      ],
    },

    {
      title: "Qurrito",
      steps: [
        "Podgrzej tortillę na suchej patelni, aby stała się elastyczna.",
        "Na środku tortilli ułóż kurczaka z sosem.",
        "Posyp obficie startym serem.",
        "Zawiń boki tortilli do środka, a następnie zwiń ją ciasno.",
        "Połóż Qurrito na suchej patelni stroną z łączeniem do dołu.",
        "Smaż na małym ogniu z obu stron, aż tortilla będzie chrupiąca, a ser w środku całkowicie się roztopi.",
        "Podawaj od razu.",
      ],
    },
  ],

  keyWords: ["kurczak"],
};

export default qurrito;
