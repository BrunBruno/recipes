import { iVEG } from "../../ingredients/ingVegetable";
import { iFAT } from "../../ingredients/ingFat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";
import { iFRT } from "../../ingredients/ingFruit";

const portions = 4;
const surowkaZCzerwonejKapusty: Recipe = {
  name: "Surówka z Czerwonej Kapusty",
  type: "salad",
  images: [""],
  time: 20,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "Surówka",
      items: [
        { ing: iVEG.red_cabbage, amount: 600 },
        { ing: iFRT.apple, amount: 1, unit: "szt" },
        { ing: iVEG.red_onion, amount: 0.5, unit: "szt" },
        { ing: iFAT.oil, amount: portions * 0.5, unit: "lz" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie surówki",
      steps: [
        "Czerwoną kapustę oczyść z zewnętrznych liści, umyj i drobno poszatkuj.",
        "Przełóż kapustę do miski, posól i delikatnie ugnieć dłonią, aby zmiękła.",
        "Jabłko obierz, usuń gniazdo nasienne i zetrzyj na tarce o grubych oczkach.",
        "Czerwoną cebulę obierz i pokrój w drobną kostkę.",
        "Dodaj jabłko i cebulę do kapusty.",
        "Wlej olej, dopraw solą oraz pieprzem i dokładnie wymieszaj.",
        "Odstaw surówkę na około 10 minut, aby smaki się połączyły.",
      ],
    },
  ],
  keyWords: ["warzywa"],
};

export default surowkaZCzerwonejKapusty;
