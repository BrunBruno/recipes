import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 2;
const gotoweSkrzydelkaPoledwiczki: Recipe = {
  name: "Gotowe Skrzydełka / Polędwiczki",
  description:
    "Gotowe panierowane polędwiczki z kurczaka pieczone razem z frytkami, podawane z prostym sosem sriracha majo.",
  type: "dinner",
  images: [
    "gotowe-skrzydelka-poledwiczki.jpg",
    "gotowe-skrzydelka-poledwiczki-2.jpg",
    "gotowe-skrzydelka-poledwiczki-3.jpg",
  ],
  time: 25,
  portions: portions,
  executionDifficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.spicy_tenderloins, amount: 1, unit: "opak" },
        { ing: iMET.spicy_wings, alt: true },
        { ing: iJAR.frozen_fries, amount: 150 * portions },
        { ing: iJAR.mayonnaise, amount: 2, unit: "lzi" },
        { ing: iJAR.sriracha, amount: 1, unit: "lzi" },
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
  keyWords: ["kurczak"],
};

export default gotoweSkrzydelkaPoledwiczki;
