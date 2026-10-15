import { iBAK } from "../../ingredients/ingBakery";
import { iDIR } from "../../ingredients/ingDairy";
import { iMET } from "../../ingredients/ingMeat";
import { iNUT } from "../../ingredients/ingNut";
import { iSAU } from "../../ingredients/ingSauce";
import type { Recipe } from "../../types";

const portions = 6;
const hotdogiZCiastaFrancuskiego: Recipe = {
  name: "Hot Dogi z Ciasta Francuskiego",
  type: "snack",
  images: [""],
  time: 25,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iBAK.puff_pastry, amount: 1, unit: "szt", kw: true },
        { ing: iMET.sausages, amount: 6, unit: "szt", kw: true },
        { ing: iDIR.yellow_cheese, amount: 6, unit: "plas", kw: true },
        { ing: iMET.egg, amount: 1, unit: "szt" },
        { ing: iSAU.ketchup, amount: 3, unit: "lzi" },
        { ing: iNUT.sesame },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Ciasto francuskie rozwiń i pokrój na 6 równych prostokątów.",
        "Każdy prostokąt posmaruj odrobiną keczupu, połóż na nim plaster żółtego sera oraz parówkę, a następnie zwiń ciasno w rulon.",
        "Ułóż gotowe ruloniki na blaszce wyłożonej papierem do pieczenia.",
        "Posmaruj wierzch rozmąconym jajkiem i posyp ziarnami sezamu.",
        "Piecz w temperaturze 220°C przez około 10-15 minut, aż ciasto ładnie urośnie i będzie złociste.",
      ],
    },
  ],
  keyWords: ["parówka", "ser", "pieczone", "fast food"],
};

export default hotdogiZCiastaFrancuskiego;
