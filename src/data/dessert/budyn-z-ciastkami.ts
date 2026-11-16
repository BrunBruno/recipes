import { iDIR } from "../../ingredients/ingDairy";
import { iOTH } from "../../ingredients/ingOther";
import { iSNK } from "../../ingredients/ingSnack";
import type { Recipe } from "../../types";

const portions = 2;
const budynZCiastkami: Recipe = {
  name: "Budyń z Ciastkami",
  type: "dessert",
  images: ["budyn-z-ciastkami"],
  time: 40,
  portions: portions,
  taste: 3,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iOTH.chocolate_pudding, amount: 1, unit: "opak" },
        { ing: iDIR.milk, amount: 500, unit: "ml" },
        { ing: iOTH.sugar, amount: 2, unit: "lzi" },
        { ing: iSNK.tea_biscuits, amount: 100 },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie budyniu",
      steps: [
        "Z 500 ml mleka odlej niewielką ilość do osobnego naczynia.",
        "Wsyp proszek budyniowy i dokładnie wymieszaj, aby nie było grudek.",
        "Pozostałe mleko zagotuj z cukrem.",
        "Wlej rozmieszany proszek budyniowy do gotującego się mleka, cały czas mieszając.",
        "Gotuj na małym ogniu, aż budyń zgęstnieje.",
      ],
    },
    {
      title: "Układanie",
      steps: [
        "Przygotuj naczynie, w którym będziesz układać deser.",
        "Na dnie ułóż warstwę herbatników.",
        "Przykryj herbatniki warstwą gorącego budyniu czekoladowego.",
        "Układaj kolejne warstwy herbatników i budyniu, aż wykorzystasz wszystkie składniki.",
        "Ostatnią warstwę powinien stanowić budyń.",
        "Odstaw deser na około 30 minut, aby herbatniki zmiękły pod wpływem budyniu.",
        "Podawaj po zmięknięciu herbatników.",
      ],
    },
  ],
  keyWords: ["deser"],
};

export default budynZCiastkami;
