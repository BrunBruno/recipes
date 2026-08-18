import { iFAT } from "../../ingredients/ingFat";
import { iJAR } from "../../ingredients/ingJar";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 2;
const pierogiGotowane: Recipe = {
  name: "Pierogi Gotowane",
  type: "dinner",
  cookingMethods: [["boiled", 8]],
  images: ["pierogi-gotowane.jpg"],
  time: 10,
  portions: portions,
  taste: 5,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iJAR.pierogi_meat, amount: 400 },
        { ing: iFAT.oil, amount: 1, unit: "lzi" },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Zagotuj w garnku dużą ilość osolonej wody. Możesz dodać łyżeczkę oleju.",
        "Wrzuć mrożone pierogi z mięsem do wrzącej wody.",
        "Delikatnie zamieszaj, aby pierogi nie przywarły do dna.",
        "Gdy pierogi wypłyną na powierzchnię, gotuj je jeszcze przez około 3-4 minuty.",
        "Wyjmij pierogi łyżką cedzakową i od razu podawaj.",
      ],
    },
  ],
  keyWords: ["mięso", "wieprzowina"],
};

export default pierogiGotowane;
