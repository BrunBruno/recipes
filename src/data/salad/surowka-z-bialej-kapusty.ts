import { iVEG } from "../../ingredients/ingVegetable";
import { iFAT } from "../../ingredients/ingFat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 4;

const surowkaZBialejKapusty: Recipe = {
  name: "Surówka z Białej Kapusty",
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
        { ing: iVEG.cabbage, amount: 500, unit: "g" },
        { ing: iVEG.carrot, amount: 1, unit: "szt" },
        { ing: iVEG.onion, amount: 0.5, unit: "szt" },
        { ing: iFAT.oil, amount: 2, unit: "lz" },
        { ing: iSPC.salt },
        { ing: iSPC.black_pepper },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie surówki",
      steps: [
        "Białą kapustę drobno poszatkuj.",
        "Marchewkę obierz i zetrzyj na tarce o grubych oczkach.",
        "Cebulę obierz i pokrój w drobną kostkę.",
        "Przełóż warzywa do miski i dokładnie wymieszaj.",
        "Dodaj olej, sól oraz pieprz.",
        "Wymieszaj surówkę i odstaw na 10-15 minut, aby smaki się połączyły.",
      ],
    },
  ],
  keyWords: ["warzywa"],
};

export default surowkaZBialejKapusty;
