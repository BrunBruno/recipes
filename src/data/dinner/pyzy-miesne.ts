import { iFAT } from "../../ingredients/ingFat";
import { iJAR } from "../../ingredients/ingJar";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

const portions = 2;

const pyzyMiesne: Recipe = {
  name: "Pyzy z Mięsem",
  type: "dinner",
  cookingMethods: [["boiled", 10]],
  images: ["pyzy-miesne.jpg"],
  time: 10,
  portions: portions,
  taste: 3,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iJAR.frozen_potato_dumpling, amount: 7, unit: "szt" },
        { ing: iFAT.oil, amount: 1, unit: "lzi" },
        { ing: iJAR.fried_onion, amount: 20 },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Zagotuj dużą ilość osolonej wody.",
        "Wrzuć zamrożone pyzy do wrzątku i delikatnie zamieszaj, aby nie przywarły do dna.",
        "Gotuj na małym ogniu przez około 8-10 minut od momentu ponownego zagotowania wody lub zgodnie z instrukcją na opakowaniu.",
        "Wyjmij łyżką cedzakową i podawaj od razu posypane cebulką prażoną.",
      ],
    },
  ],
  keyWords: ["mięso"],
};

export default pyzyMiesne;
