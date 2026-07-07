import { iFSH } from "../../ingredients/ingFish";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iOTH } from "../../ingredients/ingOther";
import { iSAU } from "../../ingredients/ingSauce";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const salatkaKuskus: Recipe = {
  name: "Sałatka Kuskus",
  description:
    "Pożywna sałatka z kuskusem, jajkami, tuńczykiem i kukurydzą, połączona majonezem i doprawiona solą oraz pieprzem - szybka i smaczna propozycja na lunch lub kolację.",
  type: "salad",
  images: ["salatka-kuskus.jpg", "salatka-kuskus-2.jpg"],
  time: 40,
  portions: 8,
  executionDifficulty: 3,
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
        { ing: iOTH.water, amount: 1, unit: "szk" },
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
  keyWords: ["sałatka", "warzywa"],
};

export default salatkaKuskus;
