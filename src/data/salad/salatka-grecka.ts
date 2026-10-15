import { iDIR } from "../../ingredients/ingDairy";
import { iFAT } from "../../ingredients/ingFat";
import { iFRT } from "../../ingredients/ingFruit";
import { iHRB } from "../../ingredients/ingHerb";
import { iSPC } from "../../ingredients/ingSpice";
import { iVEG } from "../../ingredients/ingVegetable";
import type { Recipe } from "../../types";

const portions = 4;
const salatkaGrecka: Recipe = {
  name: "Sałatka Grecka",
  type: "salad",
  country: "GRC",
  images: [""],
  time: 15,
  portions: portions,
  taste: null,
  difficulty: null,
  ingredients: [
    {
      title: "Warzywa i ser",
      items: [
        { ing: iVEG.tomato, amount: 4, unit: "szt", kw: true },
        { ing: iVEG.cucumber, amount: 1, unit: "szt", kw: true },
        { ing: iVEG.red_onion, amount: 1, unit: "szt" },
        { ing: iVEG.green_bell_pepper, amount: 1, unit: "szt" },
        {
          type: "choice",
          options: [
            { ing: iFRT.kalamata_olives, amount: 100, kw: true },
            { ing: iFRT.black_olives, amount: 100, kw: true },
          ],
          selected: 0,
        },
        { ing: iDIR.feta, amount: 200, kw: true },
      ],
    },
    {
      title: "Dressing i przyprawy",
      items: [
        { ing: iFAT.olive_oil, amount: 4, unit: "lz" },
        { ing: iHRB.oregano, amount: 1, unit: "lzi" },
        { ing: iSPC.black_pepper },
        { ing: iSPC.salt },
      ],
    },
  ],
  steps: [
    {
      title: "Przygotowanie składników",
      steps: [
        "Pomidory umyj i pokrój w średniej wielkości cząstki lub grubą kostkę.",
        "Ogórek obierz (lub zostaw ze skórką, jeśli wolisz) i pokrój w grube półplasterki.",
        "Czerwoną cebulę pokrój w cienkie piórka, a zieloną paprykę w paski.",
      ],
    },
    {
      title: "Składanie sałatki",
      steps: [
        "W dużej misce lub na szerokim półmisku wymieszaj przygotowane pomidory, ogórek, cebulę oraz paprykę.",
        "Dodaj czarne oliwki (najlepiej z pestką, odmiany Kalamata).",
        "Na wierzch warzyw połóż duży plaster sera feta (tradycyjnie nie kruszy się go na małe kawałki).",
        "Całość obficie polej oliwą z oliwek, posyp suszonym oregano, a także dopraw odrobiną soli i świeżo mielonego czarnego pieprzu.",
      ],
    },
  ],
  keyWords: ["warzywa", "ser"],
};

export default salatkaGrecka;
