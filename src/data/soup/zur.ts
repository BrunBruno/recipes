import { iDIR } from "../../ingredients/ingDairy";
import { iHRB } from "../../ingredients/ingHerb";
import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const zur: Recipe = {
  name: "Żur",
  type: "soup",
  country: "POL",
  images: ["zur", "zur-2", "zur-3"],
  time: 120,
  portions: 4,
  taste: 5,
  difficulty: 3,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.bacon_block, amount: 300 },
        { ing: iLIQ.sour_rye_soup, amount: 250, unit: "ml" },
        { ing: iLIQ.water, amount: 1.5, unit: "l" },
        { ing: iLIQ.maggi, amount: 1, unit: "lzi" },
        { ing: iVEG.potato, amount: 3, unit: "szt" },
        { ing: iDIR.cream_18, amount: 1, unit: "lz" },
        { ing: iSPC.knorr_bouillon_cube, amount: 0.25 },
        { ing: iHRB.bay_leaf, amount: 1, unit: "lst" },
        { ing: iHRB.marjoram },
        { ing: iSPC.vegetable_seasoning },
        { ing: iSPC.black_pepper, amount: 5, unit: "ziar" },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Wypłukać boczek, zalać wodą, włączyć gaz.",
        "Dodać sól, pieprz, majeranek, maggi, 1/4 kostki rosołowej, trochę vegety oraz liść laurowy.",
        "Gotować pod delikatnym przykryciem na niedużym ogniu, aż boczek będzie miękki (około 1,5 godziny). W razie wyparowania wody, odrobinę dolać.",
        "Obrana, umytą i pokrojoną ziemniaki wrzucić do garnka i gotować, aż będą miękkie.",
        "Rozciapciać ziemniaka w żurze.",
        "Wlać szklankę żurku i pogotować około 5 minut.",
        "Wlać łyżkę śmietany do szklanki, dodać trochę gorącego żurku, wymieszać i wlać do garnka, po czym pogotować jeszcze przez około 2 minuty.",
      ],
    },
  ],
  keyWords: ["zupa", "boczek"],
};

export default zur;
