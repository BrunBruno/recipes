import { iVEG } from "../../ingredients/ingVegetable";
import { iSAU } from "../../ingredients/ingSauce";
import type { Recipe } from "../../types";
import { iLIQ } from "../../ingredients/ingLiquid";

const portions = 4;
const coleslaw: Recipe = {
  name: "Surówka Colesław",
  type: "salad",
  country: "USA",
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
        { ing: iVEG.red_onion, amount: 0.5, unit: "szt" },
      ],
    },
    {
      title: "Sos",
      items: [
        { ing: iSAU.mayonnaise, amount: 4, unit: "lz" },
        { ing: iSAU.mustard, amount: 1, unit: "lz" },
        { ing: iLIQ.vinegar, amount: 1, unit: "lz" },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie surówki",
      steps: [
        "Kapustę drobno poszatkuj.",
        "Marchewkę obierz i zetrzyj na tarce o grubych oczkach.",
        "Cebulę obierz i pokrój w drobną kostkę.",
        "Przełóż warzywa do dużej miski i wymieszaj.",
      ],
    },
    {
      title: "Przygotowanie sosu",
      steps: [
        "W osobnej misce wymieszaj majonez, musztardę i ocet.",
        "Dodaj sos do warzyw i dokładnie wymieszaj.",
        "Dopraw solą i pieprzem według uznania.",
        "Wstaw surówkę do lodówki na co najmniej 15-30 minut przed podaniem.",
      ],
    },
  ],
  keyWords: ["warzywa", "sos"],
};

export default coleslaw;
