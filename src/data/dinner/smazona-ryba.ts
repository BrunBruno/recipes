import { iFAT } from "../../ingredients/ingFat";
import { iGRN } from "../../ingredients/ingGrain";
import { iJAR } from "../../ingredients/ingJar";
import { iMET } from "../../ingredients/ingMeat";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 2;
const smazonaRyba: Recipe = {
  name: "Smażona Ryba",
  description: "",
  type: "dinner",
  images: [""],
  time: 0,
  portions: portions,
  executionDifficulty: null,
  ingredients: [
    {
      title: "Ryba",
      items: [
        { ingredient: iMET.pollock, amount: 1, unit: "szt" },
        { ingredient: iMET.cod, amount: 1, unit: "szt", alt: true },
        { ingredient: iMET.hake, amount: 1, unit: "szt", alt: true },
        { ingredient: iMET.halibut, amount: 1, unit: "szt", alt: true },
        { ingredient: iFAT.oil, amount: 4, unit: "lz" },
        { ingredient: iGRN.flour, amount: 80 },
        { ingredient: iMET.egg, amount: 1, unit: "szt" },
        { ingredient: iGRN.breadcrumbs, amount: 120 },
        { ingredient: iJAR.lemon_juice },
        { ingredient: iSPC.salt },
      ],
    },
    {
      title: "Przykładowe dodatki",
      items: [
        { ingredient: iVEG.potato, amount: portions * 200 },
        { ingredient: iJAR.sauerkraut, amount: portions * 100 },
        { ingredient: iVEG.carrot, amount: portions * 50 },
        { ingredient: iFAT.oil, amount: 2, unit: "lzi" },
        { ingredient: iJAR.lemon_juice, amount: 1, unit: "lz" },
        { ingredient: iSPC.black_pepper },
        { ingredient: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "Ryba",
      steps: [
        "Jeśli używasz mrożonej ryby, najpierw ją rozmroź i osusz.",
        "Rybę posól i opcjonalnie skrop sokiem z cytryny lub limonki.",
        "Obtocz kolejno w mące, jajku i bułce tartej.",
        "Smaż na rozgrzanym oleju na złoty kolor z obu stron.",
        "Kostki rybne można smażyć bez rozmrażania.",
      ],
    },
    {
      title: "Przykładowe podanie",
      steps: [
        "Ziemniaki obierz i ugotuj w osolonej wodzie do miękkości.",
        "Kapustę drobno poszatkuj, marchew zetrzyj na tarce.",
        "Dodaj olej, sok z cytryny, sól i pieprz, wymieszaj surówkę.",
        "Podawaj rybę z ziemniakami i świeżą surówką z kapusty i marchewki.",
      ],
    },
  ],
};

export default smazonaRyba;
