import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSAU } from "../../ingredients/ingSauce";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 2;
const gotoweSkrzydelkaPoledwiczki: Recipe = {
  name: "Gotowe Skrzydełka / Polędwiczki",
  type: "snack",
  cookingMethods: ["fried", "roasted"],
  images: [
    "gotowe-skrzydelka-poledwiczki.jpg",
    "gotowe-skrzydelka-poledwiczki-2.jpg",
    "gotowe-skrzydelka-poledwiczki-3.jpg",
  ],
  time: 25,
  portions: portions,
  taste: 4,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        {
          type: "choice",
          options: [
            { ing: iMET.spicy_tenderloins, amount: 1, unit: "opak" },
            { ing: iMET.spicy_wings, amount: 1, unit: "opak" },
          ],
          selected: 0,
        },
        { ing: iJAR.frozen_fries, amount: 150 * portions },
        { ing: iSAU.mayonnaise, amount: 2, unit: "lzi" },
        { ing: iSAU.sriracha, amount: 1, unit: "lzi" },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Wyłóż frytki oraz polędwiczki z kurczaka na blachę wyłożoną papierem do pieczenia.",
        "Piecz zgodnie z instrukcją na opakowaniu, aż będą złociste i chrupiące (około 20-25 minut).",
        "W małej miseczce wymieszaj majonez z sosem sriracha.",
        "Przełóż frytki i polędwiczki na talerz.",
        "Podawaj z sosem sriracha majo.",
      ],
    },
  ],
  keyWords: ["mięso", "kurczak"],
};

export default gotoweSkrzydelkaPoledwiczki;
