import { iFAT } from "../../ingredients/ingFat";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import type { Recipe } from "../../types";

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
      title: "Kurczak",
      items: [
        { ing: iMET.chicken_tenderloin, amount: 400, unit: "g" },
        { ing: iMET.chicken_breast, alt: true },
        { ing: iFAT.oil, amount: 1, unit: "lz" },
        { ing: iSPC.jalapeno_chicken_seasoning, amount: 1, unit: "opak" },
      ],
    },
    {
      title: "Przykładowe dodatki",
      items: [
        { ing: iJAR.frozen_fries, amount: portions * 200, unit: "g" },
        { ing: iJAR.sauerkraut, amount: portions * 150, unit: "g" },
        { ing: iSPC.potato_seasoning },
      ],
    },
  ],
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
    {
      title: "Przykładowe podanie",
      steps: [
        "Przygotuj frytki według instrukcji na opakowaniu.",
        "Podgrzej lub podaj na zimno kiszoną kapustę.",
        "Podawaj kurczaka z frytkami i kiszoną kapustą, opcjonalnie dopraw frytki przyprawą.",
      ],
    },
  ],
  keyWords: ["kurczak"],
};

export default kurczakJalapeno;
