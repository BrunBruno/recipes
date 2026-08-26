import { iMET } from "../../ingredients/ingMeat";
import { iBAK } from "../../ingredients/ingBakery";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";
import { iSPC } from "../../ingredients/ingSpice";

const jajkoNaMiekko: Recipe = {
  name: "Jajko na Miękko",
  type: "breakfast",
  cookingMethods: [["boiled", 5]],
  images: ["jajko-na-miekko.jpg"],
  time: 5,
  portions: 1,
  taste: 4,
  difficulty: 2,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.egg, amount: 3, unit: "szt" },
        { ing: iBAK.multigrain_kaiser_roll, amount: 1, unit: "szt" },
        { ing: iVEG.cucumber, amount: 100 },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Włóż jajka do garnka, zalej zimną wodą i zagotuj.",
        "Od momentu zagotowania gotuj jajka przez około 4–5 minut.",
        "Wyjmij jajka z wody i podawaj od razu na ciepło.",
        "Bułkę przekrój na pół, a ogórka zielonego pokrój w plastry.",
        "Podawaj jajka z bułką i świeżym ogórkiem.",
      ],
    },
  ],
  keyWords: ["jajko", "pieczywo"],
};

export default jajkoNaMiekko;
