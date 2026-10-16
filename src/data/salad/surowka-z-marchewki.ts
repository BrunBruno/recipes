import { iFRT } from "../../ingredients/ingFruit";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 4;

const surowkaZMarchewki: Recipe = {
  name: "Surówka z Marchewki",
  type: "salad",
  country: "POL",
  images: [""],
  time: 15,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "Surówka",
      items: [
        { ing: iVEG.carrot, amount: 4, unit: "szt" },
        { ing: iFRT.lemon, amount: 0.5, unit: "szt" },
        { ing: iFRT.apple, amount: 1, unit: "szt" },
        { ing: iOTH.sugar, amount: 1, unit: "lz" },
        { ing: iSPC.black_pepper },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie surówki",
      steps: [
        "Marchewki obierz i dokładnie umyj.",
        "Zetrzyj marchewki na tarce o drobnych oczkach.",
        "Jabłko obierz, usuń gniazdo nasienne i zetrzyj na tarce.",
        "Wymieszaj marchewkę z jabłkiem.",
        "Skrop sokiem z cytryny i dodaj cukier do smaku.",
        "Dokładnie wymieszaj i odstaw na kilka minut, aby smaki się połączyły.",
      ],
    },
  ],
  keyWords: ["warzywa"],
};

export default surowkaZMarchewki;
