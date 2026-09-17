import { iFAT } from "../../ingredients/ingFat";
import { iJAR } from "../../ingredients/ingJar";
import { iSPC } from "../../ingredients/ingSpice";
import { iOTH } from "../../ingredients/ingOther";
import type { Recipe } from "../../types";
import { iVEG } from "../../ingredients/ingVegetable";

const portions = 1;
const pyzyMiesne: Recipe = {
  name: "Pyzy z Mięsem",
  type: "dinner",
  country: "POL",
  images: ["pyzy-miesne.jpg", "pyzy-miesne-2.jpg"],
  time: 25,
  portions: portions,
  taste: 3,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iJAR.frozen_potato_dumpling, amount: 7, unit: "szt" },
        { ing: iFAT.oil, amount: 2, unit: "lzi" },
        { ing: iFAT.butter, amount: 1, unit: "lzi" },
        { ing: iVEG.onion, amount: 0.5, unit: "szt" },
        { ing: iOTH.sugar, amount: 0.5, unit: "lzi" },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "Cebulka karmelizowana",
      steps: [
        "Drobno pokrój połowę cebuli.",
        "Na patelni rozgrzej na małym ogniu łyżeczkę oleju z łyżeczką masła.",
        "Dodaj cebulę i smaż na małym ogniu, od czasu do czasu mieszając, aż zmięknie i zacznie się karmelizować.",
        "W trakcie smażenia lekko posól cebulę.",
        "Pod koniec smażenia posyp cebulę połową łyżeczki cukru i dokładnie wymieszaj. Smaż jeszcze chwilę, aż cebula się skarmelizuje.",
      ],
    },
    {
      title: "Pyzy",
      steps: [
        "Zagotuj dużą ilość osolonej wody z dodatkiem łyżeczki oleju.",
        "Wrzuć zamrożone pyzy do wrzątku i delikatnie zamieszaj, aby nie przywarły do dna.",
        "Gotuj na małym ogniu przez około 8-10 minut od momentu ponownego zagotowania wody i wypłynięcia pyz na powierzchnię.",
        "Wyjmij pyzy łyżką cedzakową i podawaj od razu posypane cebulką karmelizowaną.",
      ],
    },
  ],

  keyWords: ["mięso"],
};

export default pyzyMiesne;
