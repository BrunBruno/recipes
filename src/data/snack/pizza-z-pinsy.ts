import { iBAK } from "../../ingredients/ingBakery";
import { iDIR } from "../../ingredients/ingDairy";
import { iHRB } from "../../ingredients/ingHerb";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const pizzaZPinsy: Recipe = {
  name: "Pizza z Pinsy",
  type: "snack",
  country: "ITA",
  images: ["pizza-z-pinsy.jpg", "pizza-z-pinsy-2.jpg"],
  time: 15,
  portions: 1,
  taste: 4,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iBAK.pinsa, amount: 1, unit: "szt" },
        { ing: iJAR.tomato_sauce, amount: 0.5, unit: "opak" },
        { ing: iDIR.yellow_mozzarella, amount: 60 },
        { ing: iMET.chicken_ham, amount: 2, unit: "plas" },
        { ing: iVEG.arugula, amount: 30 },
        { ing: iVEG.cherry_tomato, amount: 8, unit: "szt" },
        { ing: iDIR.hard_cheese, amount: 10 },
        { ing: iHRB.fresh_basil, amount: 5, unit: "lst" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Pinsę posmaruj sosem pomidorowym oraz posyp startym serem mozarella.",
        "Wstaw pinsę do piekarnika i piecz przez około 10 minut.",
        "Na upieczonym spodzie ułóż plastry szynki z kurczaka, rukolę oraz pokrojone pomidorki koktajlowe.",
        "Dodatkowo z wierzchu posyp startym parmezanem oraz świeżą bazylią.",
        "Podawaj od razu po przygotowaniu.",
      ],
    },
  ],
  keyWords: [],
};
export default pizzaZPinsy;
