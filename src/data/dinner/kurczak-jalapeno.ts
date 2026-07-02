import { dinnerSides } from "../../dinnerSides";
import { iFAT } from "../../ingredients/ingFat";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";
import { fryingFat } from "../../utils";

const portions = 2;
const kurczakJalapeno: Recipe = {
  name: "Kurczak Jalapeno",
  description:
    "Pikantne kawałki kurczaka w chrupiącej panierce jalapeno, pieczone w piekarniku lub airfryerze. Prosty i szybki obiad.",
  type: "dinner",
  images: [
    "kurczak-jalapeno.jpg",
    "kurczak-jalapeno-2.jpg",
    "kurczak-jalapeno-3.jpg",
  ],
  time: 25,
  portions: portions,
  executionDifficulty: 1,
  ingredients: [
    {
      title: "",
      items: [
        {
          type: "choice",
          options: [
            { ing: iMET.chicken_tenderloin, amount: 400 },
            { ing: iMET.chicken_breast, amount: 400 },
          ],
          selected: 0,
        },
        ...fryingFat(iFAT.oil, 1, "lz", 0.4),
        { ing: iSPC.knorr_jalapeno_chicken_fix, amount: 1, unit: "opak" },
      ],
    },
  ],
  extrasMain: {
    options: [
      dinnerSides("oven-fries", portions),
      dinnerSides("boiled-potatoes", portions),
    ],
    selected: 0,
  },
  extrasVeg: {
    options: [dinnerSides("sauerkraut", portions)],
    selected: 0,
  },
  steps: [
    {
      title: "",
      steps: [
        "Rozgrzej piekarnik do 180°C (lub airfryer do 180°C).",
        "W dużej misce wymieszaj polędwiczki z kurczaka z 1 łyżką oleju.",
        "Wsyp panierkę/przyprawę jalapeno i dokładnie obtocz w niej kurczaka, lekko dociskając, aby równomiernie pokryć mięso.",
        "Ułóż kawałki kurczaka na blaszce wyłożonej papierem do pieczenia lub w koszyku airfryera.",
        "Piecz około 15 minut w piekarniku (lub około 10 minut w airfryerze), aż kurczak będzie złocisty i dobrze upieczony.",
        "Upewnij się, że mięso jest w pełni ugotowane w środku przed podaniem.",
      ],
    },
  ],
  keyWords: ["kurczak"],
};

export default kurczakJalapeno;
