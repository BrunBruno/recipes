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
        { ing: iMET.pollock, amount: 1, unit: "szt" },
        { ing: iMET.cod, amount: 1, unit: "szt", alt: true },
        { ing: iMET.hake, amount: 1, unit: "szt", alt: true },
        { ing: iMET.halibut, amount: 1, unit: "szt", alt: true },
        { ing: iFAT.oil, amount: 4, unit: "lz" },
        { ing: iGRN.flour, amount: 80 },
        { ing: iMET.egg, amount: 1, unit: "szt" },
        { ing: iGRN.breadcrumbs, amount: 120 },
        { ing: iJAR.lemon_juice },
        { ing: iSPC.salt },
      ],
    },
    {
      title: "Przykładowe dodatki",
      items: [
        { ing: iVEG.potato, amount: portions * 200 },
        { ing: iJAR.sauerkraut, amount: portions * 100 },
        { ing: iVEG.carrot, amount: portions * 50 },
        { ing: iFAT.oil, amount: 2, unit: "lzi" },
        { ing: iJAR.lemon_juice, amount: 1, unit: "lz" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
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
