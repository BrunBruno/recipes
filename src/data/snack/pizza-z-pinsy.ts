import { iBAK } from "../../ingredients/ingBakery";
import { iDIR } from "../../ingredients/ingDairy";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const pizzaZPinsy: Recipe = {
  name: "Pizza z Pinsy",
  type: "snack",
  cookingMethods: [["baked", 10]],
  images: [""],
  time: 15,
  portions: 1,
  taste: null,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iBAK.pinsa, amount: 1, unit: "szt" },
        { ing: iJAR.tomato_sauce, amount: 0.5, unit: "opak" },
        { ing: iDIR.yellow_mozzarella, amount: 2, unit: "plas" },
        { ing: iMET.chicken_ham, amount: 2, unit: "plas" },
        { ing: iVEG.arugula, amount: 50 },
        { ing: iVEG.cherry_tomato, amount: 8, unit: "szt" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Pinsę posmaruj sosem pomidorowym oraz posyp startym serem..",
        "Wstaw pinsę do piekarnika i piecz przez około 10 minut.",
        "Na upieczonym spodzie ułóż plastry szynki z kurczaka, rukolę oraz pomidorki koktajlowe.",
        "Podawaj od razu po przygotowaniu.",
      ],
    },
  ],
  keyWords: [],
};
export default pizzaZPinsy;
