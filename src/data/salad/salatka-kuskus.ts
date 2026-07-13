import { iFSH } from "../../ingredients/ingFish";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSAU } from "../../ingredients/ingSauce";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const salatkaKuskus: Recipe = {
  name: "Sałatka Kuskus",
  type: "salad",
  cookingMethods: [["boiled", 40]],
  images: ["salatka-kuskus.jpg", "salatka-kuskus-2.jpg"],
  time: 40,
  portions: 8,
  taste: 4,
  difficulty: 3,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iGRN.couscous, amount: 1, unit: "opak" },
        { ing: iMET.egg, amount: 4, unit: "szt" },
        { ing: iFSH.canned_tuna, amount: 2, unit: "opak" },
        { ing: iJAR.canned_corn, amount: 1, unit: "opak" },
        { ing: iVEG.onion, amount: 1, unit: "szt" },
        { ing: iSAU.mayonnaise, amount: 1, unit: "opak" },
        { ing: iLIQ.water, amount: 1, unit: "szk" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Zagotuj jedną szklankę osolonej wody.",
        "Zagotowaną wodę zdejmij z gazu.",
        "Wsyp kaszę kuskus do wody i dokładnie wymieszaj. Odstaw na bok, aż kasza napęcznieje i ostygnie.",
        "Ugotuj jajka na twardo.",
        "Jajka oraz cebulę pokrój na mniejsze kawałki.",
        "Kukurydzę odsącz z zalewy.",
        "Wszystkie składniki przełóż do miski, dodaj majonez i wymieszaj.",
        "Dopraw pieprzem do smaku.",
      ],
    },
  ],
  keyWords: ["sałatka", "kasza", "ryba"],
};

export default salatkaKuskus;
