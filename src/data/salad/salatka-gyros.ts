import { iDIR } from "../../ingredients/ingDairy";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSAU } from "../../ingredients/ingSauce";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const salatkaGyros: Recipe = {
  name: "Sałatka Gyros",
  type: "salad",
  cookingMethods: [["fried", 10]],
  images: ["salatka-gyros.jpg"],
  time: 20,
  portions: 4,
  taste: 5,
  difficulty: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.chicken_breast, amount: 400 },
        { ing: iJAR.pickled_cucumber_vinegar, amount: 200 },
        { ing: iVEG.chinese_cabbage, amount: 300 },
        { ing: iJAR.canned_corn, amount: 150 },
        { ing: iDIR.yellow_cheese, amount: 100 },
        { ing: iVEG.onion, amount: 100 },
        { ing: iSAU.mayonnaise, amount: 100 },
        { ing: iSAU.ketchup, amount: 100 },
        { ing: iSPC.gyros_spice },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Kurczaka pokrój w kostkę, dopraw przyprawą gyros i usmaż na patelni.",
        "Kapustę pekińską drobno poszatkuj.",
        "Ogórki konserwowe i cebulę pokrój w drobną kostkę.",
        "Ser żółty zetrzyj na tarce.",
        "W misce ułóż warstwami kapustę, kurczaka, ogórki, kukurydzę, cebulę i ser.",
        "Wymieszaj majonez z ketchupem i przygotowanym sosem polej sałatkę.",
        "Przed podaniem schłodź sałatkę w lodówce.",
      ],
    },
  ],
  keyWords: ["sałatka", "kurczak"],
};

export default salatkaGyros;
