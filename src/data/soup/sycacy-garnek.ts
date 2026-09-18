import { iLIQ } from "../../ingredients/ingLiquid";
import { iMET } from "../../ingredients/ingMeat";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const sycacyGarnek: Recipe = {
  name: "Sycący Garnek",
  type: "soup",
  images: ["sycacy-garnek.jpg", "sycacy-garnek-2.jpg"],
  time: 0,
  portions: 3,
  taste: 4,
  difficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        { ing: iMET.ground_pork, amount: 350 },
        { ing: iVEG.potato, amount: 300 },
        { ing: iVEG.carrot, amount: 200 },
        { ing: iVEG.mushrooms, amount: 200 },
        { ing: iLIQ.water, amount: 250, unit: "ml" },
      ],
    },
  ],
  steps: [
    {
      title: "",
      steps: [
        "Obrane ziemniaki i marchew pokrój w kostkę, a pieczarki pokrój w plasterki.",
        "Na rozgrzanym ogniu w garnku podsmaż mięso mielone.",
        "Dodaj ziemniaki, marchewkę i pieczarki.",
        "Zawartość opakowania dokładnie rozprowadź w 250 ml wody.",
        "Wlej do garnka i dobrze wymieszaj.",
        "Gotuj około 30 min na małym ogniu, aż ziemniaki będą miękkie.",
        "Od czasu do czasu zamieszaj.",
      ],
    },
  ],
  keyWords: ["mięso", "wieprzowina", "gotowane", "ziemniaki"],
};

export default sycacyGarnek;
