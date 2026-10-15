import { iDIR } from "../../ingredients/ingDairy";
import { iGRN } from "../../ingredients/ingGrain";
import { iOTH } from "../../ingredients/ingOther";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 1;
const kaszaZMlekiem: Recipe = {
  name: "Kasza z Mlekiem",
  type: "breakfast",
  images: [""],
  time: 20,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.semolina, amount: 4, unit: "lz", kw: true },
        { ing: iDIR.milk, amount: 250, unit: "ml", kw: true },
        { ing: iOTH.sugar, amount: 1, unit: "lzi" },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Do rondelka wlej mleko, dodaj cukier oraz szczyptę soli i doprowadź do wrzenia na średnim ogniu.",
        "Do gotującego się mleka wsypuj powoli kaszę, cały czas energicznie mieszając rózgą lub łyżką, aby nie powstały grudki.",
        "Zmniejsz ogień i gotuj kaszę przez kilka minut, cały czas mieszając, aż zgęstnieje i nabierze odpowiedniej konsystencji.",
        "Przelej gotową kaszę do miseczki i podawaj na ciepło.",
      ],
    },
  ],
  keyWords: ["kasza"],
};

export default kaszaZMlekiem;
