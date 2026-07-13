import { dinnerSides } from "../../dinnerSides";
import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iHRB } from "../../ingredients/ingHerb";
import { iMET } from "../../ingredients/ingMeat";
import { iSAU } from "../../ingredients/ingSauce";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";
import { fryingFat } from "../../utils";

const portions = 3;
const kurczakZPomidorem: Recipe = {
  name: "Kurczak z Pomidorami",
  type: "dinner",
  cookingMethods: ["roasted"],
  images: ["kurczak-z-pomidorem.jpg"],
  time: 70,
  portions: portions,
  taste: 4,
  difficulty: 3,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.chicken_breast, amount: 400 },
        { ing: iVEG.tomato, amount: 1, unit: "szt" },
        { ing: iVEG.onion, amount: 0.5, unit: "szt" },
        { ing: iDIR.yellow_cheese, amount: 0.5, unit: "kst" },
        { ing: iDIR.cream_18, amount: 1, unit: "lz" },
        { ing: iSAU.mayonnaise, amount: 1, unit: "lz" },
        ...fryingFat(iFAT.olive, 2, "lz", 0.35),
        { ing: iHRB.herbes_de_provence },
        { ing: iHRB.wild_garlic },
        { ing: iSPC.sweet_paprika },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  extrasMain: {
    options: [dinnerSides("mashed-potatoes", portions)],
    selected: 0,
  },
  extrasVeg: {
    options: [
      dinnerSides("beets-fried-ready", portions),
      dinnerSides("beets-whole-vinegar", portions),
    ],
    selected: 0,
  },
  steps: [
    {
      title: "",
      steps: [
        "Natłuść naczynie żaroodporne oliwą lub olejem i ułóż paski cebuli.",
        "Pokrój mięso z kurczaka w duże i cienkie plastry a następnie rozłóż je równomiernie w naczyniu.",
        "Przypraw mięso solą, pieprzem, papryką oraz czosnkiem.",
        "W miseczce wymieszaj majonez ze śmietaną i ziołami.",
        "Posmaruj kurczaka przygotowaną mieszanką.",
        "Pokrój pomidory i ułóż je na mięsie.",
        "Posyp całość startym serem.",
        "Piecz przez około 60 minut (lub dłużej, aż mięso będzie miękkie).",
      ],
    },
  ],
  keyWords: ["mięso", "kurczak"],
};

export default kurczakZPomidorem;
